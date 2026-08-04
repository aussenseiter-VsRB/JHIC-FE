import { useState, useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from "react";
import { MessageCircle, X, Send, Trash2, Phone } from "lucide-react";
import "./chatbot.css";

export interface ChatbotHandle {
  toggle: () => void;
}

const STORAGE_KEY = "chatbot-history";
const BADGE_DISMISSED_KEY = "chatbot-badge-dismissed";
const CHIPS_HIDE_MS = 3 * 60 * 1000;
const INPUT_MAX = 300;
const INPUT_WARN_THRESHOLD = 250;

export interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: number;
}

export interface ChatbotWidgetProps {
  onSendMessage: (message: string) => Promise<string>;
  whatsappNumber?: string;
  greeting?: string;
  botName?: string;
  hideFab?: boolean;
  onClear?: () => void;
}

const defaultGreeting =
  "Halo! Selamat datang di SMK Yadika Soreang. Ada yang bisa saya bantu?";

const defaultSuggestions = [
  "Apa saja program keahlian yang tersedia?",
  "Bagaimana cara mendaftar SPMB?",
  "Di mana lokasi sekolah?",
];

function readHistory(): ChatMessage[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    return null;
  } catch {
    return null;
  }
}

function writeHistory(messages: ChatMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {
    // private mode — silently ignore
  }
}

function wasBadgeDismissed(): boolean {
  try {
    return localStorage.getItem(BADGE_DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

function dismissBadge() {
  try {
    localStorage.setItem(BADGE_DISMISSED_KEY, "1");
  } catch {
    // ignore
  }
}

function makeGreeting(greeting: string): ChatMessage {
  return {
    id: crypto.randomUUID(),
    content: greeting,
    sender: "bot",
    timestamp: Date.now(),
  };
}

const ChatbotWidget = forwardRef<ChatbotHandle, ChatbotWidgetProps>(function ChatbotWidget({
  onSendMessage,
  whatsappNumber,
  greeting = defaultGreeting,
  botName = "Nexxa AI",
  hideFab = false,
  onClear,
}, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const history = readHistory();
    return history ?? [makeGreeting(greeting)];
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [chipsHidden, setChipsHidden] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (wasBadgeDismissed()) return;
    const timer = setTimeout(() => setShowBadge(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    writeHistory(messages);
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("[data-chatbot-toggle]")) return;

      const overlay = overlayRef.current;
      const fab = fabRef.current;
      if (!overlay) return;
      if (fab && fab.contains(target)) return;
      if (!overlay.contains(target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      if (!prev) {
        dismissBadge();
        setShowBadge(false);
      }
      return !prev;
    });
  }, []);

  const hideFabChips = useCallback(() => {
    setChipsHidden(true);
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = window.setTimeout(() => {
      setChipsHidden(false);
      hideTimerRef.current = null;
    }, CHIPS_HIDE_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) hideFabChips();
  }, [isOpen, hideFabChips]);

  useImperativeHandle(ref, () => ({ toggle }), [toggle]);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      content: text,
      sender: "user",
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const reply = await onSendMessage(text);
      const botMsg: ChatMessage = {
        id: crypto.randomUUID(),
        content: reply,
        sender: "bot",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: crypto.randomUUID(),
        content: "Maaf, terjadi kesalahan. Silakan coba lagi.",
        sender: "bot",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  }, [input, isTyping, onSendMessage]);

  const handleSuggestionClick = useCallback(
    (text: string) => {
      setInput(text);
      requestAnimationFrame(() => inputRef.current?.focus());
    },
    []
  );

  const handleReset = useCallback(() => {
    if (!confirm("Hapus semua percakapan?")) return;
    const fresh = [makeGreeting(greeting)];
    setMessages(fresh);
    writeHistory(fresh);
    onClear?.();
  }, [greeting, onClear]);

  const showSuggestions = messages.length <= 1 && !isTyping;
  const charCount = input.length;
  const nearLimit = charCount > INPUT_WARN_THRESHOLD;

  return (
    <>
      {!hideFab && (
        <button
          ref={fabRef}
          type="button"
          className="chatbot-fab"
          data-chatbot-toggle
          onClick={toggle}
          aria-label={isOpen ? "Tutup chat" : "Buka chat"}
        >
          {isOpen ? <X size={22} /> : <MessageCircle size={22} />}

          {showBadge && !isOpen && (
            <span className="chatbot-fab-badge" />
          )}
        </button>
      )}

      {!isOpen && showSuggestions && !chipsHidden && (
        <div className="chatbot-suggestions-fab">
          <button
            type="button"
            className="chatbot-suggestion-chip-fab"
            onClick={() => {
              handleSuggestionClick("Ada yang bisa saya bantu?");
              setIsOpen(true);
              dismissBadge();
              setShowBadge(false);
            }}
          >
            Ada yang bisa saya bantu?
          </button>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div className="chatbot-overlay">
          <div ref={overlayRef} className="chatbot-panel">
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <span className="chatbot-header-name">{botName}</span>
                <span className="chatbot-header-status">Online</span>
              </div>
              <div className="chatbot-header-actions">
                {whatsappNumber && (
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chatbot-header-icon-btn"
                    aria-label="Chat via WhatsApp"
                  >
                    <Phone size={16} />
                  </a>
                )}
                <button
                  type="button"
                  className="chatbot-header-icon-btn"
                  onClick={handleReset}
                  aria-label="Hapus percakapan"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  type="button"
                  className="chatbot-header-icon-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Tutup chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chatbot-bubble chatbot-bubble--${msg.sender}`}
                >
                  {msg.sender === "bot" && (
                    <span className="chatbot-bubble-avatar">Y</span>
                  )}
                  <div className="chatbot-bubble-content">{msg.content}</div>
                </div>
              ))}

              {isTyping && (
                <div className="chatbot-bubble chatbot-bubble--bot">
                  <span className="chatbot-bubble-avatar">Y</span>
                  <div className="chatbot-typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />

              {showSuggestions && (
                <div className="chatbot-suggestions-inline">
                  <p className="chatbot-suggestions-label">
                    Pertanyaan yang sering ditanyakan:
                  </p>
                  {defaultSuggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="chatbot-suggestion-chip"
                      onClick={() => handleSuggestionClick(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="chatbot-input-area">
              {nearLimit && (
                <span className="chatbot-char-counter">
                  {charCount}/{INPUT_MAX}
                </span>
              )}
              <form
                className="chatbot-input-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  className="chatbot-input"
                  placeholder="Ketik pesan..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  maxLength={INPUT_MAX}
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  className="chatbot-send-btn"
                  disabled={!input.trim() || isTyping}
                  aria-label="Kirim pesan"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default ChatbotWidget;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

const SESSION_KEY = "chatbot-session-id";

function getSessionId(): string {
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export function resetSession() {
  localStorage.removeItem(SESSION_KEY);
}

export interface ChatReplyButton {
  label: string;
  url: string;
}

export interface ChatReply {
  output: string;
  button?: ChatReplyButton;
}

export async function sendToChatbot(message: string): Promise<ChatReply> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/api/v1/nexxa/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatInput: message, sessionId: getSessionId() }),
    });
  } catch {
    throw new Error("Network error");
  }

  if (!response.ok) {
    throw new Error(`AI request error: ${response.status}`);
  }

  let data: Record<string, unknown>;
  try {
    data = await response.json();
  } catch {
    throw new Error("Invalid response");
  }

  if (typeof data?.output !== "string") {
    throw new Error("Unexpected response format");
  }

  const reply: ChatReply = { output: data.output };
  if (typeof data?.button === "object" && data.button !== null) {
    const btn = data.button as Record<string, unknown>;
    if (typeof btn.label === "string" && typeof btn.url === "string") {
      reply.button = { label: btn.label, url: btn.url };
    }
  }
  return reply;
}

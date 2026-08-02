const WEBHOOK_URL = import.meta.env.VITE_CHATBOT_WEBHOOK_URL ?? "";
const WEBHOOK_SECRET = import.meta.env.VITE_N8N_WEBHOOK_SECRET ?? "";

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

export async function sendToChatbot(message: string): Promise<string> {
  if (!WEBHOOK_URL) {
    throw new Error("VITE_CHATBOT_WEBHOOK_URL belum diatur di .env.local");
  }

  let response: Response;

  try {
    response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(WEBHOOK_SECRET ? { "x-secret-key": WEBHOOK_SECRET } : {}),
      },
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

  return data.output;
}

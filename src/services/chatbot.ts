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

export async function sendToChatbot(message: string): Promise<string> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/api/v1/ai/chat`, {
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

  return data.output;
}

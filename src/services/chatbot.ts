const WEBHOOK_URL = "https://n8n-b0wow8osw0okkcwc0g0gog4o.dev.usbypkp.ac.id/webhook/d1b0712b-8783-46ee-8add-5a386132f460/chat";

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

export async function sendToN8n(message: string): Promise<string> {
  let response: Response;

  try {
    response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatInput: message, sessionId: getSessionId() }),
    });
  } catch {
    throw new Error("Network error");
  }

  if (!response.ok) {
    throw new Error(`n8n webhook error: ${response.status}`);
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

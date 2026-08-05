const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export interface KkParseResult {
  nama: string;
  nik: string;
  kk_no: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  agama: string;
  alamat: string;
  nama_ayah: string;
  nama_ibu: string;
}

export interface SpmbRegistration {
  id: string;
  nama: string;
  nik: string;
  nisn: string;
  kk_no: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  agama: string;
  alamat: string;
  asal_sekolah: string;
  no_hp: string;
  nama_ayah: string;
  nama_ibu: string;
  jurusan: string;
  status: string;
}

const PREFILL_KEY = "spmb-kk-prefill";

export function saveKkPrefill(data: KkParseResult) {
  try {
    sessionStorage.setItem(PREFILL_KEY, JSON.stringify(data));
  } catch {
    // private mode — ignore
  }
}

export function readKkPrefill(): KkParseResult | null {
  try {
    const raw = sessionStorage.getItem(PREFILL_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as KkParseResult;
  } catch {
    return null;
  }
}

export function clearKkPrefill() {
  try {
    sessionStorage.removeItem(PREFILL_KEY);
  } catch {
    // ignore
  }
}

export async function parseKk(file: File, childName: string): Promise<KkParseResult> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("child_name", childName);

  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}/api/v1/nexxa/spmb/parse-kk`, {
      method: "POST",
      body: formData,
    });
  } catch {
    throw new Error("Tidak dapat terhubung ke server AI. Periksa koneksi internetmu.");
  }

  if (res.status === 413) {
    throw new Error("File terlalu besar. Maksimal 5 MB.");
  }
  if (!res.ok) {
    let message = `Server AI merespons dengan status ${res.status}.`;
    try {
      const body = await res.json();
      if (typeof body?.error === "string") message = body.error;
    } catch {
      // keep default message
    }
    throw new Error(message);
  }

  let json: { data?: KkParseResult };
  try {
    json = await res.json();
  } catch {
    throw new Error("Server AI mengembalikan respons kosong atau bukan JSON.");
  }

  if (!json.data || typeof json.data.nik !== "string") {
    throw new Error("Kartu Keluarga tidak dapat dibaca. Coba foto yang lebih jelas.");
  }
  return json.data;
}

export async function askSpmb(question: string): Promise<string> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}/api/v1/nexxa/spmb/ask`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
  } catch {
    throw new Error("Tidak dapat terhubung ke server AI. Periksa koneksi internetmu.");
  }

  if (!res.ok) {
    let message = `Server AI merespons dengan status ${res.status}.`;
    try {
      const body = await res.json();
      if (typeof body?.error === "string") message = body.error;
    } catch {
      // keep default message
    }
    throw new Error(message);
  }

  let json: { output?: string };
  try {
    json = await res.json();
  } catch {
    throw new Error("Server AI mengembalikan respons kosong atau bukan JSON.");
  }
  if (typeof json.output !== "string") {
    throw new Error("Format respons server AI tidak sesuai dengan yang diharapkan.");
  }
  return json.output;
}

export async function submitRegistration(
  data: Record<string, string>,
): Promise<SpmbRegistration> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}/api/v1/spmb`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    throw new Error("Tidak dapat terhubung ke server. Periksa koneksi internetmu.");
  }

  if (!res.ok) {
    let message = `Pendaftaran gagal (status ${res.status}).`;
    try {
      const body = await res.json();
      if (typeof body?.error === "string") message = body.error;
    } catch {
      // keep default message
    }
    throw new Error(message);
  }

  let json: SpmbRegistration;
  try {
    json = await res.json();
  } catch {
    throw new Error("Server mengembalikan respons kosong atau bukan JSON.");
  }
  return json;
}

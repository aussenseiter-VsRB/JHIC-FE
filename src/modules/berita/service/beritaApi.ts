const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export interface Berita {
  id: string
  author_id: string
  title: string
  content: string
  image_url?: string
  is_achievement?: boolean
  created_at: string
  updated_at: string
}

export interface BeritaItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export async function getBerita(): Promise<Berita[]> {
  const res = await fetch(`${API_BASE_URL}api/v1/berita`);
  if (!res.ok) throw new Error(`Failed to fetch berita: ${res.status} ${res.statusText}`);
  return res.json();
}

export async function getBeritaById(id: string): Promise<Berita | undefined> {
  const res = await fetch(`${API_BASE_URL}api/v1/berita/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch berita detail: ${res.status} ${res.statusText}`);
  return res.json();
}

const MARKDOWN_IMAGE_RE = /!\[[^\]]*\]\(([^)\s]+)\)/;

export function extractBeritaImage(berita: Pick<Berita, "image_url" | "content">): string | undefined {
  if (berita.image_url) return berita.image_url;
  return berita.content.match(MARKDOWN_IMAGE_RE)?.[1];
}

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const excerptFromContent = (content: string): string => {
  const plain = content
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/[#*_`>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return plain.length > 150 ? `${plain.slice(0, 150)}…` : plain;
};

export function beritaToItem(berita: Berita): BeritaItem {
  return {
    id: berita.id,
    title: berita.title,
    date: dateFormatter.format(new Date(berita.created_at)),
    category: "Berita",
    excerpt: excerptFromContent(berita.content),
    image: extractBeritaImage(berita) ?? "",
  };
}
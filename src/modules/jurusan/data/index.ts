import pplg from "./pplg.json";
import hotel from "./hotel.json";
import akuntansi from "./akuntansi.json";
import jurusanPplg from "../../../assets/jurusan-pplg.svg";
import jurusanHtl from "../../../assets/jurusan-htl.svg";
import jurusanAk from "../../../assets/jurusan-ak.svg";

const jurusanImageMap: Record<string, string> = {
  "jurusan-pplg.svg": jurusanPplg,
  "jurusan-htl.svg": jurusanHtl,
  "jurusan-ak.svg": jurusanAk,
};

const rawData = [pplg, hotel, akuntansi];

export const jurusanData = rawData.map((d) => ({
  ...d,
  image: jurusanImageMap[d.image as keyof typeof jurusanImageMap] ?? "",
}));

export type Jurusan = (typeof jurusanData)[number];

export function getJurusanBySlug(slug: string): Jurusan | undefined {
  return jurusanData.find((j) => j.slug === slug);
}

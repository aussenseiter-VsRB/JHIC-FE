import pplg from "./pplg.json";
import hotel from "./hotel.json";
import akuntansi from "./akuntansi.json";

export const jurusanData = [pplg, hotel, akuntansi];

export type Jurusan = (typeof jurusanData)[number];

export function getJurusanBySlug(slug: string): Jurusan | undefined {
  return jurusanData.find((j) => j.slug === slug);
}

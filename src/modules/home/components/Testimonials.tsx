import { Star } from "lucide-react";
import data from "./data/testimonials.json";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="mb-2 flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-[#F59E0B] text-[#F59E0B]" : "text-[#CBD5E1]"}
        />
      ))}
    </span>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w.charAt(0))
    .join("")
    .toUpperCase();
}

function Testimonials() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-[1200px] px-6 py-20 max-md:px-5 max-md:py-14">
        <div className="reveal">
          <h2 className="mb-4 text-center text-[2rem] font-extrabold -tracking-[0.02em] text-[#1E3A5F]">
            Kata Mereka
          </h2>
          <p className="mb-12 text-center text-[1.1rem] text-[#64748B]">
            Dengarkan pengalaman langsung dari siswa dan alumni SMK Yadika
            Soreang
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:gap-4">
          {data.map((item, i) => {
            const delay = (i % 3) + 1;
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${delay} flex gap-4 rounded-2xl border border-[#E2E8F0] bg-white px-6 py-7 shadow-[0_4px_20px_rgba(30,58,95,0.05)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(30,58,95,0.1)] max-md:px-4 max-md:py-5`}
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#60A5FA]">
                  <span className="font-heading text-[1.1rem] font-bold text-white">
                    {getInitials(item.name)}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <StarRating rating={item.rating} />
                  <p className="m-0 mb-3 text-[0.9rem] italic leading-[1.65] text-[#475569]">
                    &ldquo;{item.content}&rdquo;
                  </p>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[0.95rem] font-bold text-[#1E3A5F]">
                      {item.name}
                    </span>
                    <span className="text-[0.8rem] font-medium text-[#64748B]">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

import data from "./data/about.json";

function About() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-[1200px] px-6 py-20 max-md:px-5 max-md:py-14">
        <div className="grid items-center gap-14 md:grid-cols-[1.2fr_1fr] max-md:grid-cols-1 max-md:gap-10">
          <div className="reveal">
            <h2 className="m-0 text-[2rem] font-extrabold -tracking-[0.02em] text-[#1E3A5F]">
              {data.heading}
            </h2>
            <span className="mb-5 mt-2 block h-1 w-14 rounded-sm bg-[#2563EB]" />
            <p className="m-0 text-[1.05rem] leading-[1.8] text-[#64748B]">
              {data.paragraph}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-4">
            {data.stats.map((stat, i) => (
              <div
                className={`reveal reveal-delay-${i + 1} flex flex-col items-center rounded-2xl border border-[rgba(226,232,240,0.6)] bg-white px-4 py-7 text-center shadow-[0_4px_20px_rgba(30,58,95,0.05)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(30,58,95,0.1)]`}
                key={stat.label}
              >
                <span className="text-[2.25rem] font-extrabold -tracking-[0.02em] text-[#2563EB] leading-[1.1]">
                  {stat.number}
                </span>
                <span className="mt-1 text-[0.9rem] font-medium text-[#64748B]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

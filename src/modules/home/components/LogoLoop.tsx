import data from "./data/logoLoop.json";

function LogoLoop() {
  const logos = [...data.logos, ...data.logos];

  return (
    <section className="overflow-hidden py-10">
      <div className="logo-loop flex w-max gap-16">
        {logos.map((logo, i) => (
          <img
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-16 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
}

export default LogoLoop;

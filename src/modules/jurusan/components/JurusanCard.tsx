import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const programAccents: Record<string, { accent: string; bg: string }> = {
  PPLG: { accent: "#0D9488", bg: "#CCFBF1" },
  AKL: { accent: "#F59E0B", bg: "#FEF3C7" },
  HOTEL: { accent: "#6366F1", bg: "#E0E7FF" },
};

interface JurusanCardProps {
  name: string;
  code: string;
  slug: string;
  description: string;
}

function JurusanCard({ name, code, slug, description }: JurusanCardProps) {
  const colors = programAccents[code] ?? { accent: "#F59E0B", bg: "#FEF3C7" };

  return (
    <Link
      to={`/jurusan/${slug}`}
      className="jurusan-card"
      style={{ "--card-accent": colors.accent, "--card-accent-bg": colors.bg } as React.CSSProperties}
    >
      <span className="jurusan-card-code">{code}</span>
      <h3 className="jurusan-card-name">{name}</h3>
      <p className="jurusan-card-desc">{description}</p>
      <span className="jurusan-card-link">
        Selengkapnya <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

export default JurusanCard;

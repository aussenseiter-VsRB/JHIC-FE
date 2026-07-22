import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const programAccents: Record<string, { accent: string; bg: string }> = {
  PPLG: { accent: "#0EA5E9", bg: "#E0F2FE" },
  AKL: { accent: "#2563EB", bg: "#DBEAFE" },
  HOTEL: { accent: "#1E3A5F", bg: "#E8EDF4" },
};

interface JurusanCardProps {
  name: string;
  code: string;
  slug: string;
  description: string;
}

function JurusanCard({ name, code, slug, description }: JurusanCardProps) {
  const colors = programAccents[code] ?? { accent: "#2563EB", bg: "#DBEAFE" };

  return (
    <Link
      to={`/jurusan/${slug}`}
      className="jurusan-card reveal"
      style={{ "--card-accent": colors.accent, "--card-accent-bg": colors.bg } as React.CSSProperties}
    >
      <span className="jurusan-card-code">{code}</span>
      <h3 className="jurusan-card-name">{name}</h3>
      <p className="jurusan-card-desc">{description}</p>
      <span className="jurusan-card-link">
        Selengkapnya <ArrowRight className="jurusan-card-link-arrow h-4 w-4" />
      </span>
    </Link>
  );
}

export default JurusanCard;

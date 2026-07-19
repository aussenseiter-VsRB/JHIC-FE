import { Link } from "react-router-dom";

interface JurusanCardProps {
  name: string;
  code: string;
  slug: string;
  description: string;
}

function JurusanCard({ name, code, slug, description }: JurusanCardProps) {
  return (
    <Link to={`/jurusan/${slug}`} className="jurusan-card">
      <span className="jurusan-card-code">{code}</span>
      <h3 className="jurusan-card-name">{name}</h3>
      <p className="jurusan-card-desc">{description}</p>
      <span className="jurusan-card-link">Selengkapnya &rarr;</span>
    </Link>
  );
}

export default JurusanCard;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import iconPplg from "../../../assets/icon-pplg.svg";
import iconAkl from "../../../assets/icon-akl.svg";
import iconHotel from "../../../assets/icon-hotel.svg";

const programIcons: Record<string, string> = {
  PPLG: iconPplg,
  AKL: iconAkl,
  HOTEL: iconHotel,
};

interface JurusanCardProps {
  name: string;
  code: string;
  slug: string;
  description: string;
}

function JurusanCard({ name, code, slug, description }: JurusanCardProps) {
  return (
    <Link
      to={`/jurusan/${slug}`}
      className="jurusan-card reveal"
    >
      <img
        src={programIcons[code]}
        alt={`Logo ${name}`}
        className="jurusan-card-icon"
      />
      <h3 className="jurusan-card-name">{name}</h3>
      <p className="jurusan-card-desc">{description}</p>
      <span className="jurusan-card-link">
        Selengkapnya <ArrowRight className="jurusan-card-link-arrow h-4 w-4" />
      </span>
    </Link>
  );
}

export default JurusanCard;

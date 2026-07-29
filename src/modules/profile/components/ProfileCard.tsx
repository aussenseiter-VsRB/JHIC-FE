import { MapPin, Award, Users, GraduationCap, Target, BookOpen, Building2, Trophy, Sparkles } from "lucide-react";
import Carousel from "../../../components/carousel/carousel";
import Breadcrumb from "../../../components/breadcrumb/breadcrumb";

const carouselItems = [
  {
    title: "Visi & Misi",
    description: "Menjadi sekolah kejuruan terdepan yang menghasilkan lulusan berkarakter dan kompeten.",
    id: 1,
    icon: <Target className="carousel-icon" />,
  },
  {
    title: "Sejarah",
    description: "Berdiri sejak 1985, SMK Yadika Soreang telah melahirkan ribuan lulusan berkualitas.",
    id: 2,
    icon: <BookOpen className="carousel-icon" />,
  },
  {
    title: "Fasilitas",
    description: "Laboratorium modern, bengkel praktik, perpustakaan digital, dan lapangan olahraga.",
    id: 3,
    icon: <Building2 className="carousel-icon" />,
  },
  {
    title: "Prestasi",
    description: "Meraih berbagai penghargaan di tingkat kabupaten, provinsi, dan nasional.",
    id: 4,
    icon: <Trophy className="carousel-icon" />,
  },
  {
    title: "Ekstrakurikuler",
    description: "Pramuka, PMR, Paskibra, Robotik, dan berbagai klub pengembangan bakat lainnya.",
    id: 5,
    icon: <Sparkles className="carousel-icon" />,
  },
];

function ProfileCard() {
  return (
    <section className="profile-card-hero">
      <div className="profile-card-hero-pattern">
        <div
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)`,
          }}
        />
      </div>

      <div className="profile-card-hero-glow profile-card-hero-glow--sky" />
      <div className="profile-card-hero-glow profile-card-hero-glow--blue" />

      <div className="profile-card-hero-inner">
        <div className="profile-card-hero-main">
          <Breadcrumb
            items={[
              { label: "Tentang Kami" },
              { label: "Profil Sekolah" },
            ]}
          />

          <h1 className="font-heading profile-card-hero-title">
            SMK YADIKA SOREANG
          </h1>

          <p className="font-body profile-card-hero-desc">
            Sekolah menengah kejuruan yang berkomitmen menghasilkan lulusan kompeten, berkarakter, dan siap bersaing di dunia kerja.
          </p>

          <div className="profile-card-hero-info">
            <div className="profile-card-hero-info-item">
              <MapPin className="profile-card-hero-info-icon" />
              <span className="font-body profile-card-hero-info-text">Soreang, Bandung</span>
            </div>
            <div className="profile-card-hero-info-item">
              <Award className="profile-card-hero-info-icon" />
              <span className="font-body profile-card-hero-info-text">Terakreditasi</span>
            </div>
            <div className="profile-card-hero-info-item">
              <Users className="profile-card-hero-info-icon" />
              <span className="font-body profile-card-hero-info-text">1200+ Siswa</span>
            </div>
            <div className="profile-card-hero-info-item">
              <GraduationCap className="profile-card-hero-info-icon" />
              <span className="font-body profile-card-hero-info-text">3 Program Keahlian</span>
            </div>
          </div>
        </div>

        <div className="profile-card-hero-carousel">
          <Carousel
            items={carouselItems}
            baseWidth={320}
            autoplay
            autoplayDelay={4000}
            pauseOnHover
            loop
            round={false}
          />
        </div>
      </div>

      <div className="wave-scroll-container">
        <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
          <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
          <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
        </svg>
      </div>
    </section>
  );
}

export default ProfileCard;

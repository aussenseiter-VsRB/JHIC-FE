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
    <section className="relative overflow-hidden bg-navy px-6 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)`,
          }}
        />
      </div>

      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[350px] w-[350px] rounded-full bg-sky/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/3 h-[250px] w-[250px] rounded-full bg-blue/[0.06] blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-start">
        <div className="flex-1">

          <Breadcrumb
            items={[
              { label: "Tentang Kami" },
              { label: "Profil Sekolah" },
            ]}
          />

          <h1 className="font-heading text-[40px] font-extrabold leading-[1.1] tracking-tight text-white md:text-[56px]">
            SMK YADIKA SOREANG
          </h1>

          <p className="mt-6 max-w-[600px] font-body text-lg leading-relaxed text-white/60">
            Sekolah menengah kejuruan yang berkomitmen menghasilkan lulusan kompeten, berkarakter, dan siap bersaing di dunia kerja.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-3 text-white/70">
              <MapPin className="h-5 w-5 text-sky" />
              <span className="font-body text-sm">Soreang, Bandung</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Award className="h-5 w-5 text-sky" />
              <span className="font-body text-sm">Terakreditasi</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Users className="h-5 w-5 text-sky" />
              <span className="font-body text-sm">1200+ Siswa</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <GraduationCap className="h-5 w-5 text-sky" />
              <span className="font-body text-sm">3 Program Keahlian</span>
            </div>
          </div>
        </div>

        <div className="shrink-0">
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

      {/* Animated wave bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none wave-scroll-container">
        <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '96px' }}>
          <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
          <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
          <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
        </svg>
      </div>
    </section>
  );
}

export default ProfileCard;

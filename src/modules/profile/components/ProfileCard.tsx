import { MapPin, Award, Users, GraduationCap } from "lucide-react";

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

      <div className="relative z-10 mx-auto max-w-5xl">
        <span className="mb-6 inline-block rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 font-poppins text-xs font-semibold uppercase tracking-widest text-blue">
          Profil Sekolah
        </span>

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

      {/* Diagonal bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-pearl" style={{ clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)' }} />
    </section>
  );
}

export default ProfileCard;

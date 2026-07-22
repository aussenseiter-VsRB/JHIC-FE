import { MapPin, Award, Users, GraduationCap } from "lucide-react";

function ProfileCard() {
  return (
    <section className="relative overflow-hidden bg-midnight px-6 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
      {/* Geometric background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
          }}
        />
      </div>

      {/* Accent glow */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-amber/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <span className="mb-6 inline-block rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 font-poppins text-xs font-semibold uppercase tracking-widest text-amber">
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
            <MapPin className="h-5 w-5 text-amber" />
            <span className="font-body text-sm">Soreang, Bandung</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <Award className="h-5 w-5 text-amber" />
            <span className="font-body text-sm">Terakreditasi</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <Users className="h-5 w-5 text-amber" />
            <span className="font-body text-sm">1200+ Siswa</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <GraduationCap className="h-5 w-5 text-amber" />
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

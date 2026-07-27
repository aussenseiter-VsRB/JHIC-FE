import { UserPlus, FileText, ClipboardCheck, GraduationCap, Camera } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TimelineStep {
  icon: LucideIcon;
  title: string;
  description: string;
  photoLabel: string;
}

const steps: TimelineStep[] = [
  {
    icon: UserPlus,
    title: "Daftar Online",
    description: "Isi formulir pendaftaran secara online melalui website resmi PPDB.",
    photoLabel: "Siswa mengisi formulir",
  },
  {
    icon: FileText,
    title: "Verifikasi Berkas",
    description: "Serahkan berkas fisik ke panitia PPDB untuk divalidasi.",
    photoLabel: "Penyerahan berkas",
  },
  {
    icon: ClipboardCheck,
    title: "Tes Seleksi",
    description: "Ikuti tes seleksi sesuai jadwal yang telah ditentukan.",
    photoLabel: "Pelaksanaan tes",
  },
  {
    icon: GraduationCap,
    title: "Daftar Ulang",
    description: "Lakukan daftar ulang dan pembayaran biaya pendidikan.",
    photoLabel: "Proses daftar ulang",
  },
];

function VerticalTimeline() {
  return (
    <div className="ppdb-section reveal">
      <h2 className="ppdb-section-title">Tahap Pendaftaran</h2>
      <span className="ppdb-section-accent" />
      <div className="ppdb-timeline">
        <div className="ppdb-timeline-track" />
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isLeft = i % 2 === 0;
          return (
            <div
              key={step.title}
              className={`ppdb-timeline-row ${isLeft ? "ppdb-timeline-row--left" : "ppdb-timeline-row--right"} reveal reveal-delay-${i + 1}`}
            >
              <div className={`ppdb-timeline-card ${isLeft ? "ppdb-timeline-card--left" : "ppdb-timeline-card--right"}`}>
                <span className="ppdb-timeline-step-num">
                  Langkah {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="ppdb-timeline-title">{step.title}</h3>
                <p className="ppdb-timeline-desc">{step.description}</p>
              </div>

              <div className="ppdb-timeline-node">
                <div className="ppdb-timeline-dot">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className={`ppdb-timeline-photo ${isLeft ? "ppdb-timeline-photo--right" : "ppdb-timeline-photo--left"}`}>
                <div className="ppdb-timeline-photo-frame">
                  <div className="ppdb-timeline-photo-inner">
                    <Camera className="h-6 w-6" />
                    <span>{step.photoLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VerticalTimeline;

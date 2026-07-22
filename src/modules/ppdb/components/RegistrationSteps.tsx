import { UserPlus, FileText, Upload, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StepItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    icon: UserPlus,
    title: "Daftar Akun",
    description: "Buat akun PPDB menggunakan email dan nomor HP aktif.",
  },
  {
    icon: FileText,
    title: "Lengkapi Data",
    description: "Isi formulir pendaftaran dan lengkapi seluruh data diri.",
  },
  {
    icon: Upload,
    title: "Upload Berkas",
    description: "Unggah dokumen persyaratan sesuai ketentuan sekolah.",
  },
  {
    icon: CheckCircle,
    title: "Verifikasi & Seleksi",
    description: "Tunggu proses verifikasi dan hasil seleksi dari panitia.",
  },
];

function RegistrationSteps() {
  return (
    <div className="ppdb-section" id="cara-mendaftar">
      <h2 className="ppdb-section-title">Cara Mendaftar Siswa</h2>
      <span className="ppdb-section-accent" />
      <div className="ppdb-register-steps">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="ppdb-register-card"
              style={{ animationDelay: `${0.15 + index * 0.12}s` }}
            >
              <div className="ppdb-register-icon">
                <Icon className="h-6 w-6 text-[color:var(--color-primary)]" />
              </div>
              <h3 className="ppdb-register-card-title">{step.title}</h3>
              <p className="ppdb-register-card-desc">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RegistrationSteps;

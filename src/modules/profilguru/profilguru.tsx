import { GraduationCap } from "lucide-react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import "./css/profilguru.css";
import data from "./profilguru.json";

interface StatItem {
  number: string;
  label: string;
}

interface TeacherItem {
  id: number;
  name: string;
  subject: string;
  image: string;
}

interface DepartmentItem {
  name: string;
  fullName: string;
  teachers: TeacherItem[];
}

function Profilguru() {
  const stats: StatItem[] = data.stats;
  const departments: DepartmentItem[] = data.departments;

  return (
    <div className="profilguru">
      <div className="profilguru-header-section">
        <div className="profilguru-header-content">
          <Breadcrumb
            items={[
              { label: "Tentang Kami" },
              { label: "Profil Guru" },
            ]}
            className="justify-center"
          />
          <h1 className="profilguru-title font-heading">{data.header.title}</h1>
          <p className="profilguru-subtitle font-body">{data.header.subtitle}</p>

          <div className="profilguru-stats">
            {stats.map((stat, i) => (
              <div key={i} className="profilguru-stat reveal">
                <span className="profilguru-stat-number font-heading">{stat.number}</span>
                <span className="profilguru-stat-label font-body">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none" style={{ width: '200%', height: '96px' }}>
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div className="profilguru-container">
        {departments.map((dept) => (
          <div key={dept.name} className="profilguru-department reveal">
            <div className="profilguru-department-header">
              <h2 className="profilguru-department-name font-heading">{dept.name}</h2>
              <p className="profilguru-department-full font-body">{dept.fullName}</p>
              <span className="profilguru-department-accent" />
            </div>

            <div className="profilguru-grid">
              {dept.teachers.map((teacher, i) => (
                <div key={teacher.id} className={`profilguru-card reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="profilguru-card-avatar">
                    {teacher.name.charAt(0)}
                  </div>
                  <h3 className="profilguru-card-name font-heading">{teacher.name}</h3>
                  <p className="profilguru-card-subject font-body">
                    <GraduationCap className="h-3 w-3 inline mr-1" />
                    {teacher.subject}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profilguru;

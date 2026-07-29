import { GraduationCap, Search, BookOpen, Clock, Award, ChevronLeft, ChevronRight, Phone, Mail, X } from "lucide-react";
import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import "./css/profilguru.css";
import data from "./profilguru.json";

interface TeacherItem {
  id: number;
  name: string;
  subject: string;
  keahlian: string[];
  pendidikan: string;
  pengalaman: number;
  image: string;
  motto?: string;
  kontak?: string;
}

interface DepartmentGroup {
  name: string;
  fullName: string;
  color: string;
  teachers: TeacherItem[];
}

interface BaseSection {
  id: string;
  title: string;
  color: string;
}

interface FeaturedSection extends BaseSection {
  type: "featured";
  teachers: TeacherItem[];
}

interface GridSection extends BaseSection {
  type: "grid";
  teachers: TeacherItem[];
}

interface DepartmentsSection extends BaseSection {
  type: "departments";
  description: string;
  departments: DepartmentGroup[];
}

type Section = FeaturedSection | GridSection | DepartmentsSection;

type FilterCategory = "semua" | "wakil" | "produktif" | "non-produktif" | "staff";

function initials(name: string) {
  return name
    .replace(/[,.]/g, "")
    .split(" ")
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function placeholderImg(name: string, bg: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials(name))}&background=${bg.replace("#", "")}&color=fff&size=200&bold=true`;
}

function useReveal(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function AnimatedStat({ number, label }: { number: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("");
  const hasAnimated = useRef(false);
  useReveal(ref);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const num = parseInt(number.replace(/[^0-9]/g, ""));
          if (isNaN(num)) {
            setDisplayed(number);
            return;
          }
          const suffix = number.replace(/[0-9]/g, "");
          let current = 0;
          const step = Math.ceil(num / 40);
          const interval = setInterval(() => {
            current += step;
            if (current >= num) {
              current = num;
              clearInterval(interval);
            }
            setDisplayed(current + suffix);
          }, 30);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div ref={ref} className="profilguru-stat reveal">
      <div className="profilguru-stat-icons">
        <Mail size={10} />
        <Phone size={10} />
      </div>
      <span className="profilguru-stat-number font-heading">{displayed || "0"}</span>
      <span className="profilguru-stat-label font-body">{label}</span>
    </div>
  );
}

function FilterNav({
  activeFilter,
  onFilterChange,
  counts,
  total,
}: {
  activeFilter: FilterCategory;
  onFilterChange: (f: FilterCategory) => void;
  counts: Record<FilterCategory, number>;
  total: number;
}) {
  const filterItems: { key: FilterCategory; label: string; sectionId: string }[] = [
    { key: "wakil", label: "Wakil Kepala", sectionId: "wakil-kepala" },
    { key: "produktif", label: "Guru Produktif", sectionId: "guru-produktif" },
    { key: "non-produktif", label: "Guru Non Produktif", sectionId: "guru-non-produktif" },
    { key: "staff", label: "Staff & Karyawan", sectionId: "staff" },
  ];

  const handleClick = (key: FilterCategory, sectionId?: string) => {
    onFilterChange(key);
    if (key !== "semua" && sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else if (key === "semua") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="profilguru-filter-nav">
      <button
        className="filter-pill"
        data-active={activeFilter === "semua"}
        onClick={() => handleClick("semua")}
      >
        Semua ({total})
      </button>
      {filterItems.map((f) => (
        <button
          key={f.key}
          className="filter-pill"
          data-active={activeFilter === f.key}
          onClick={() => handleClick(f.key, f.sectionId)}
        >
          {f.label} ({counts[f.key]})
        </button>
      ))}
    </div>
  );
}

function TeacherModal({
  teacher,
  onClose,
}: {
  teacher: TeacherItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div className="teacher-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={teacher.name}>
      <div className="teacher-modal" onClick={(e) => e.stopPropagation()}>
        <button className="teacher-modal-close" onClick={onClose} aria-label="Tutup modal">
          <X size={20} />
        </button>
        <div className="teacher-modal-grid">
          <div className="teacher-modal-photo">
            <img src={teacher.image || placeholderImg(teacher.name, "#2563EB")} alt={teacher.name} />
          </div>
          <div className="teacher-modal-info">
            <h2 className="font-heading">{teacher.name}</h2>
            <span className="teacher-modal-role">{teacher.subject}</span>
            {teacher.motto && <p className="teacher-modal-motto">{teacher.motto}</p>}
            <div className="teacher-modal-details">
              <div>
                <label>Pendidikan</label>
                <span>{teacher.pendidikan}</span>
              </div>
              <div>
                <label>Pengalaman</label>
                <span>{teacher.pengalaman} Tahun</span>
              </div>
              <div>
                <label>Keahlian</label>
                <div className="teacher-modal-skills">
                  {teacher.keahlian.map((s) => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
              {teacher.kontak && (
                <div>
                  <label>Kontak</label>
                  <span>{teacher.kontak}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function GridSection({ section, searchQuery, onTeacherClick }: { section: GridSection; searchQuery: string; onTeacherClick: (t: TeacherItem) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  const filtered = section.teachers.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.keahlian.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (filtered.length === 0) return null;

  return (
    <div ref={ref} className="profilguru-section reveal" id={section.id}>
      <div className="profilguru-section-header">
        <h2 className="profilguru-section-title font-heading">{section.title}</h2>
        <span className="profilguru-section-accent" style={{ backgroundColor: section.color }} />
      </div>
      <ProfileCarousel teachers={filtered} color={section.color} onTeacherClick={onTeacherClick} />
    </div>
  );
}

function DepartmentSection({ dept, onTeacherClick }: { dept: DepartmentGroup; onTeacherClick: (t: TeacherItem) => void }) {
  const deptRef = useRef<HTMLDivElement>(null);
  useReveal(deptRef);

  return (
    <div ref={deptRef} className="profilguru-dept-group reveal">
      <div className="profilguru-dept-group-header">
        <h3 className="profilguru-dept-group-name font-heading">{dept.name}</h3>
        <p className="profilguru-dept-group-full font-body">{dept.fullName}</p>
        <span className="profilguru-dept-group-accent" style={{ backgroundColor: dept.color }} />
      </div>
      <ProfileCarousel teachers={dept.teachers} color={dept.color} onTeacherClick={onTeacherClick} />
    </div>
  );
}

function DepartmentsSection({ section, searchQuery, onTeacherClick }: { section: DepartmentsSection; searchQuery: string; onTeacherClick: (t: TeacherItem) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  const filtered = section.departments
    .map((dept) => ({
      ...dept,
      teachers: dept.teachers.filter(
        (t) =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.keahlian.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter((dept) => dept.teachers.length > 0);

  if (filtered.length === 0) return null;

  return (
    <div ref={ref} className="profilguru-section reveal" id={section.id}>
      <div className="profilguru-section-header">
        <h2 className="profilguru-section-title font-heading">{section.title}</h2>
        <p className="profilguru-section-desc font-body">{section.description}</p>
        <span className="profilguru-section-accent" style={{ backgroundColor: section.color }} />
      </div>
      {filtered.map((dept) => (
        <DepartmentSection key={dept.name} dept={dept} onTeacherClick={onTeacherClick} />
      ))}
    </div>
  );
}

function MainProfile({ teacher }: { teacher: TeacherItem }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <div ref={ref} className="main-profile reveal" id="kepala-sekolah">
      <div className="main-profile-photo-wrapper">
        <div className="main-profile-photo">
          <img
            src={teacher.image || placeholderImg(teacher.name, "#1E3A5F")}
            alt={teacher.name}
          />
        </div>
      </div>
      <div className="main-profile-info">
        <div className="main-profile-badge-row">
          <span className="main-profile-badge">
            <Award size={14} />
            Kepala Sekolah
          </span>
          {teacher.kontak && (
            <a href={`mailto:${teacher.kontak}`} className="main-profile-contact-link" aria-label="Hubungi via email">
              <Mail size={14} />
            </a>
          )}
        </div>
        <h2 className="main-profile-name font-heading">{teacher.name}</h2>
        {teacher.motto && <blockquote className="main-profile-motto font-body">{teacher.motto}</blockquote>}
        <div className="main-profile-grid">
          <div className="main-profile-field">
            <span className="main-profile-label">Pendidikan Terakhir</span>
            <span className="main-profile-value">{teacher.pendidikan}</span>
          </div>
          <div className="main-profile-field">
            <span className="main-profile-label">Jabatan / Posisi</span>
            <span className="main-profile-value">{teacher.subject}</span>
          </div>
          <div className="main-profile-field">
            <span className="main-profile-label">Pengalaman</span>
            <span className="main-profile-value">{teacher.pengalaman} Tahun</span>
          </div>
          {teacher.kontak && (
            <div className="main-profile-field">
              <span className="main-profile-label">Kontak Profesional</span>
              <span className="main-profile-value">{teacher.kontak}</span>
            </div>
          )}
        </div>
        {teacher.keahlian.length > 0 && (
          <div className="main-profile-keahlian">
            <span className="main-profile-label">Bidang Keahlian</span>
            <div className="main-profile-keahlian-chips">
              {teacher.keahlian.map((k) => (
                <span key={k} className="skill-chip">{k}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProfileCarousel({ teachers, color, onTeacherClick }: { teachers: TeacherItem[]; color?: string; onTeacherClick?: (t: TeacherItem) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 10);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scrollTo = useCallback((index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    const scrollLeft = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setCurrent(index);
  }, []);

  const scroll = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth ?? 280;
    const gap = 24;
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth ?? 280;
    const gap = 24;
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setCurrent(Math.min(index, teachers.length - 1));
  }, [teachers.length, updateButtons]);

  useEffect(() => {
    updateButtons();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll, updateButtons]);

  return (
    <div className="profile-carousel">
      <button
        className={`carousel-btn carousel-btn-prev ${canScrollPrev ? "" : "disabled"}`}
        onClick={() => scroll(-1)}
        disabled={!canScrollPrev}
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <div className="carousel-track-wrapper" ref={trackRef}>
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="carousel-card"
            onClick={() => onTeacherClick?.(teacher)}
          >
            <div className="carousel-card-accent" style={{ background: color || "#2563EB" }} />
            <div className="carousel-card-img">
              <img src={teacher.image || placeholderImg(teacher.name, "#2563EB")} alt={teacher.name} />
            </div>
            <div className="carousel-card-body">
              <h4 className="carousel-card-name font-heading">{teacher.name}</h4>
              <span className="carousel-card-role font-body">{teacher.subject}</span>
              <p className="carousel-card-edu font-body">{teacher.pendidikan}</p>
              <div className="carousel-card-skills">
                {teacher.keahlian.slice(0, 3).map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
                {teacher.keahlian.length > 3 && (
                  <span className="skill-chip skill-chip-more">+{teacher.keahlian.length - 3}</span>
                )}
              </div>
              <span className="carousel-card-exp font-body">
                <Clock size={12} />
                {teacher.pengalaman} thn pengalaman
              </span>
            </div>
            <div className="carousel-card-hover-overlay">
              <span>Lihat Detail</span>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`carousel-btn carousel-btn-next ${canScrollNext ? "" : "disabled"}`}
        onClick={() => scroll(1)}
        disabled={!canScrollNext}
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>
      <div className="carousel-dots">
        {teachers.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? "active" : ""}`}
            onClick={() => scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Profilguru() {
  const sections = data.sections as Section[];
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("semua");
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherItem | null>(null);

  const principal = useMemo(
    () => sections.find((s): s is FeaturedSection => s.type === "featured"),
    [sections]
  );

  const viceHeads = useMemo(
    () => sections.find((s): s is GridSection => s.id === "wakil-kepala"),
    [sections]
  );

  const remainingSections = useMemo(
    () => sections.filter((s) => s.id !== "kepala-sekolah" && s.id !== "wakil-kepala"),
    [sections]
  );

  const allPeople = useMemo(
    () =>
      sections.flatMap((s) => {
        if (s.type === "departments") return s.departments.flatMap((d) => d.teachers);
        return s.teachers;
      }),
    [sections]
  );

  const filterCounts = useMemo(() => {
    const counts: Record<FilterCategory, number> = {
      semua: 0,
      wakil: 0,
      produktif: 0,
      "non-produktif": 0,
      staff: 0,
    };
    for (const s of sections) {
      if (s.id === "wakil-kepala" && s.type === "grid") {
        counts.wakil = s.teachers.length;
      } else if (s.id === "guru-produktif" && s.type === "departments") {
        counts.produktif = s.departments.reduce((a, d) => a + d.teachers.length, 0);
      } else if (s.id === "guru-non-produktif" && s.type === "grid") {
        counts["non-produktif"] = s.teachers.length;
      } else if (s.id === "staff" && s.type === "grid") {
        counts.staff = s.teachers.length;
      }
    }
    counts.semua = allPeople.length;
    return counts;
  }, [sections, allPeople]);

  const resultsCount = useMemo(() => {
    return sections.reduce((sum, s) => {
      if (s.type === "departments") {
        return sum + s.departments.reduce((a, d) => a + d.teachers.filter(
          (t) =>
            t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.keahlian.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
        ).length, 0);
      }
      return sum + s.teachers.filter(
        (t) =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.keahlian.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
      ).length;
    }, 0);
  }, [sections, searchQuery]);

  const renderSection = (section: Section) => {
    if (section.type === "grid") {
      return <GridSection key={section.id} section={section} searchQuery={searchQuery} onTeacherClick={setSelectedTeacher} />;
    }
    if (section.type === "departments") {
      return <DepartmentsSection key={section.id} section={section} searchQuery={searchQuery} onTeacherClick={setSelectedTeacher} />;
    }
    return null;
  };

  const visibleSections = useMemo(() => {
    if (activeFilter === "semua") return remainingSections;
    return remainingSections.filter((s) => {
      if (activeFilter === "produktif") return s.id === "guru-produktif";
      if (activeFilter === "non-produktif") return s.id === "guru-non-produktif";
      if (activeFilter === "staff") return s.id === "staff";
      return false;
    });
  }, [activeFilter, remainingSections]);

  const showViceHeads = activeFilter === "semua" || activeFilter === "wakil";
  const showPrincipal = activeFilter === "semua";

  return (
    <div className="profilguru">
      <div className="profilguru-header-section">
        <div className="profilguru-header-inner">
          <div className="profilguru-header-visual">
            <div className="profilguru-header-circles">
              <div className="profilguru-header-circle profilguru-header-circle-1">
                <GraduationCap size={40} />
              </div>
              <div className="profilguru-header-circle profilguru-header-circle-2">
                <BookOpen size={32} />
              </div>
              <div className="profilguru-header-circle profilguru-header-circle-3">
                <Award size={28} />
              </div>
            </div>
          </div>
          <div className="profilguru-header-content">
            <Breadcrumb
              items={[
                { label: "Tentang Kami" },
                { label: "Profil Guru" },
              ]}
            />
            <h1 className="profilguru-title font-heading">{data.header.title}</h1>
            <p className="profilguru-subtitle font-body">{data.header.subtitle}</p>
          </div>
        </div>
        <div className="profilguru-stats">
          {data.stats.map((stat, i) => (
            <AnimatedStat key={i} number={stat.number} label={stat.label} />
          ))}
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
        <FilterNav
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          counts={filterCounts}
          total={filterCounts.semua}
        />

        {showPrincipal && principal && principal.teachers.length > 0 && (
          <MainProfile teacher={principal.teachers[0]} />
        )}

        {showViceHeads && viceHeads && viceHeads.teachers.length > 0 && (
          <div className="profilguru-section" id="wakil-kepala">
            <div className="profilguru-section-header profilguru-section-header-centered">
              <h2 className="profilguru-section-title font-heading">{viceHeads.title}</h2>
              <p className="profilguru-section-desc font-body">Wakil kepala sekolah yang mendukung visi dan misi sekolah</p>
              <span className="profilguru-section-accent" style={{ backgroundColor: viceHeads.color, margin: "12px auto 0" }} />
            </div>
            <ProfileCarousel teachers={viceHeads.teachers} color={viceHeads.color} onTeacherClick={setSelectedTeacher} />
          </div>
        )}

        {visibleSections.map((section) => renderSection(section))}

        <div className="profilguru-toolbar reveal">
          <div className="profilguru-search-wrapper">
            <Search className="profilguru-search-icon" size={18} />
            <input
              type="text"
              className="profilguru-search-input font-body"
              placeholder="Cari guru, mata pelajaran, atau keahlian..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="profilguru-search-clear" onClick={() => setSearchQuery("")}>
                &times;
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="profilguru-search-result font-body">
              Menampilkan {resultsCount} dari {allPeople.length} guru & staff
            </p>
          )}
        </div>

        {resultsCount === 0 && searchQuery && (
          <div className="profilguru-empty font-body">
            <Search size={48} />
            <h3>Tidak ditemukan</h3>
            <p>Coba ubah kata kunci pencarian Anda</p>
          </div>
        )}
      </div>

      {selectedTeacher && (
        <TeacherModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />
      )}
    </div>
  );
}

export default Profilguru;

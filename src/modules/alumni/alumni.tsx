import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { ArrowRight, Briefcase, CalendarDays, ClipboardList, MessagesSquare, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import AnimatedNumber from "../../components/animated-number/AnimatedNumber";
import TestimonialCarousel from "./components/testimonial-carousel";
import "./css/alumni.css";
import alumniData from "./alumni.json";

const benefitIconMap: Record<string, LucideIcon> = {
  Network,
  Briefcase,
  MessagesSquare,
  CalendarDays,
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    function observeReveal() {
      const container = ref.current;
      if (!container) return;
      if (!observer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 },
        );
      }
      container.querySelectorAll<HTMLElement>(".reveal:not(.revealed)").forEach((t) => observer?.observe(t));
    }

    observeReveal();

    mutationObserver = new MutationObserver(observeReveal);
    mutationObserver.observe(el, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  return ref;
}

function Alumni() {
  const containerRef = useReveal();

  return (
    <div className="alumni" ref={containerRef}>
      <header className="alumni-hero">
        <div className="alumni-hero-orb alumni-hero-orb--1" />
        <div className="alumni-hero-orb alumni-hero-orb--2" />
        <div className="alumni-hero-pattern" />

        <div className="alumni-hero-inner">
          <div className="alumni-hero-text">
            <Breadcrumb
              items={[
                { label: "Tentang Kami" },
                { label: "Alumni" },
              ]}
              className="justify-center md:justify-start"
            />

           

            <h1 className="alumni-hero-title font-heading">{alumniData.header.title}</h1>
            <p className="alumni-hero-subtitle font-body">{alumniData.header.subtitle}</p>

            <button
              className="alumni-hero-btn font-poppins"
              onClick={() => document.getElementById("alumni-content")?.scrollIntoView({ behavior: "smooth" })}
            >
              {alumniData.header.exploreText}
              <ArrowRight className="alumni-hero-btn-icon" />
            </button>
          </div>
dee
          <div className="alumni-hero-stats">
            {alumniData.stats.map((stat, i) => (
              <div key={i} className="alumni-stat">
                <span className="alumni-stat-number font-heading">
                  <AnimatedNumber value={stat.number} />
                </span>
                <span className="alumni-stat-label font-body">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,110 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </header>

      <div id="alumni-content" className="alumni-body">
        <section className="alumni-section">
          <div className="alumni-section-header reveal">
            <h2 className="alumni-section-title font-heading">{alumniData.alumniStories.title}</h2>
            <p className="alumni-section-accent-text font-body">{alumniData.alumniStories.accent}</p>
            <span className="alumni-section-accent" />
          </div>

          <TestimonialCarousel items={alumniData.alumniStories.items} />
        </section>

        <section className="alumni-section">
          <div className="alumni-section-header reveal">
            <h2 className="alumni-section-title font-heading">{alumniData.benefits.title}</h2>
            <p className="alumni-section-accent-text font-body">{alumniData.benefits.accent}</p>
            <span className="alumni-section-accent" />
          </div>

          <div className="alumni-benefits-grid">
            {alumniData.benefits.items.map((benefit, i) => {
              const Icon = benefitIconMap[benefit.icon];
              return (
                <div key={i} className={`alumni-benefit-card reveal reveal-delay-${(i % 4) + 1}`}>
                  <div className="alumni-benefit-icon">
                    {Icon && <Icon className="alumni-benefit-icon-svg" />}
                  </div>
                  <h3 className="alumni-benefit-title font-heading">{benefit.title}</h3>
                  <p className="alumni-benefit-desc font-body">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="alumni-section">
          <div className="alumni-section-header reveal">
            <h2 className="alumni-section-title font-heading">{alumniData.career.title}</h2>
            <p className="alumni-section-accent-text font-body">{alumniData.career.accent}</p>
            <span className="alumni-section-accent" />
          </div>

          <div className="alumni-career-card reveal">
            {alumniData.career.items.map((item, i) => (
              <div key={i} className="alumni-career-item">
                <div className="alumni-career-label-row">
                  <span className="alumni-career-label font-body">{item.label}</span>
                  <span className="alumni-career-percent font-heading" style={{ color: item.color }}>
                    {item.percent}%
                  </span>
                </div>
                <div className="alumni-career-bar">
                  <div
                    className="alumni-career-bar-fill"
                    style={{ "--bar-width": `${item.percent}%`, backgroundColor: item.color } as CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="alumni-section">
          <div className="alumni-cta-box reveal">
            <div className="alumni-cta-glow" />
            <div className="alumni-cta-content">
              <div className="alumni-cta-icon-wrapper">
                <ClipboardList className="alumni-cta-icon" />
              </div>
              <h2 className="alumni-cta-title font-heading">{alumniData.tracerCta.title}</h2>
              <p className="alumni-cta-desc font-body">{alumniData.tracerCta.description}</p>
              <a
                href={alumniData.tracerCta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="alumni-cta-btn font-poppins"
              >
                <span>{alumniData.tracerCta.button}</span>
                <ArrowRight className="alumni-cta-btn-icon" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Alumni;

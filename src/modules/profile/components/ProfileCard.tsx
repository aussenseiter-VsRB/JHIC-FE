import { MapPin, Award, Users, GraduationCap, Target, BookOpen, Building2, Trophy, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Carousel from "./carousel/carousel";
import Breadcrumb from "../../../components/breadcrumb/breadcrumb";
import profileData from "../profile.json";

const carouselIconMap: Record<string, LucideIcon> = {
  Target, BookOpen, Building2, Trophy, Sparkles,
};

const carouselItems = profileData.carouselItems.map((item) => {
  const Icon = carouselIconMap[item.icon];
  return { ...item, icon: <Icon className="carousel-icon" /> };
});

function ProfileCard() {
  return (
    <section className="profile-card-hero">
      <div className="profile-card-hero-pattern">
        <div />
      </div>

      <div className="profile-card-hero-glow profile-card-hero-glow--sky" />
      <div className="profile-card-hero-glow profile-card-hero-glow--blue" />

      <div className="profile-card-hero-inner">
        <div className="profile-card-hero-main">
          <Breadcrumb items={profileData.breadcrumb} />

          <h1 className="font-heading profile-card-hero-title">
            {profileData.title}
          </h1>

          <p className="font-body profile-card-hero-desc">
            {profileData.tagline}
          </p>

          <div className="profile-card-hero-info">
            {profileData.infoItems.map((item, i) => {
              const InfoIcon = { MapPin, Award, Users, GraduationCap }[item.icon] as LucideIcon;
              return (
                <div key={i} className="profile-card-hero-info-item">
                  <InfoIcon className="profile-card-hero-info-icon" />
                  <span className="font-body profile-card-hero-info-text">{item.text}</span>
                </div>
              );
            })}
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
          <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,110 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
          <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
          <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
        </svg>
      </div>
    </section>
  );
}

export default ProfileCard;

interface ShapePatternProps {
  variant: "hero" | "nexxa" | "nexxa-page";
}

function ShapePattern({ variant }: ShapePatternProps) {
  if (variant === "nexxa") {
    return (
      <svg
        className="shape-pattern"
        viewBox="0 0 1200 480"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="70" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
        <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
        <rect x="1090" y="40" width="64" height="64" rx="10" transform="rotate(45 1122 72)" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
        <path d="M40 420 L80 360 L120 420 Z" fill="rgba(255,255,255,0.1)" />
        <path d="M1100 400 L1130 355 L1160 400 L1130 445 Z" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
        <path d="M320 80 v30 M305 95 h30" stroke="rgba(255,255,255,0.14)" strokeWidth="3" strokeLinecap="round" />
        <rect x="880" y="380" width="20" height="20" rx="5" transform="rotate(30 890 390)" fill="rgba(255,255,255,0.12)" />
        <circle cx="980" cy="150" r="5" fill="rgba(255,255,255,0.2)" />
        <circle cx="200" cy="300" r="4" fill="rgba(255,255,255,0.18)" />
        <circle cx="1140" cy="220" r="6" fill="rgba(255,255,255,0.14)" />
      </svg>
    );
  }

  if (variant === "nexxa-page") {
    return (
      <svg
        className="shape-pattern"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="90" cy="90" r="105" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
        <circle cx="90" cy="90" r="66" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="2" />
        <rect x="1310" y="60" width="76" height="76" rx="12" transform="rotate(45 1348 98)" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
        <path d="M40 420 L85 345 L130 420 Z" fill="rgba(255,255,255,0.09)" />
        <path d="M1340 560 L1370 515 L1400 560 L1370 605 Z" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
        <path d="M240 660 v32 M224 676 h32" stroke="rgba(255,255,255,0.14)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="1170" cy="400" r="120" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="2" />
        <rect x="1120" y="150" width="24" height="24" rx="6" transform="rotate(30 1132 162)" fill="rgba(255,255,255,0.1)" />
        <rect x="210" y="220" width="26" height="26" rx="7" transform="rotate(45 223 233)" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
        <circle cx="560" cy="720" r="5" fill="rgba(255,255,255,0.16)" />
        <circle cx="160" cy="150" r="5" fill="rgba(255,255,255,0.16)" />
        <circle cx="640" cy="120" r="4" fill="rgba(255,255,255,0.14)" />
      </svg>
    );
  }

  return (
    <svg
      className="shape-pattern"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <circle cx="90" cy="90" r="110" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
      <circle cx="90" cy="90" r="70" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="2" />
      <rect x="1310" y="50" width="80" height="80" rx="12" transform="rotate(45 1350 90)" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
      <path d="M40 470 L85 395 L130 470 Z" fill="rgba(255,255,255,0.09)" />
      <path d="M1330 470 L1360 425 L1390 470 L1360 515 Z" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
      <path d="M260 780 v34 M243 797 h34" stroke="rgba(255,255,255,0.14)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="1160" cy="210" r="95" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="2" />
      <rect x="1120" y="650" width="24" height="24" rx="6" transform="rotate(30 1132 662)" fill="rgba(255,255,255,0.1)" />
      <rect x="200" y="180" width="26" height="26" rx="7" transform="rotate(45 213 193)" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
      <circle cx="560" cy="120" r="5" fill="rgba(255,255,255,0.16)" />
      <circle cx="1340" cy="660" r="5" fill="rgba(255,255,255,0.16)" />
      <circle cx="140" cy="700" r="4" fill="rgba(255,255,255,0.14)" />
      <circle cx="520" cy="820" r="6" fill="rgba(255,255,255,0.12)" />
    </svg>
  );
}

export default ShapePattern;

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

function parseValue(value: string) {
  const digits = value.replace(/\./g, "").replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9.]/g, "");
  const num = parseInt(digits, 10);
  return { num: isNaN(num) ? 0 : num, suffix };
}

function AnimatedNumber({ value, duration = 2000 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const counted = useRef(false);

  const { num, suffix } = parseValue(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayed(Math.floor(eased * num) + suffix);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, suffix, duration, value]);

  return <span ref={ref}>{displayed}</span>;
}

export default AnimatedNumber;

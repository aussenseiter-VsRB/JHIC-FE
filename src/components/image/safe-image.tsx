import { useState } from "react";
import placeholderImg from "../../assets/placeholder.svg";

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
}

function SafeImage({ src, alt, className = "" }: SafeImageProps) {
  const [errored, setErrored] = useState(false);
  return (
    <img
      src={errored || !src ? placeholderImg : src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
}

export default SafeImage;

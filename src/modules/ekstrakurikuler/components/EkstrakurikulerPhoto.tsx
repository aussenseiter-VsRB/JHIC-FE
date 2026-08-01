import { useState } from "react";

interface EkstrakurikulerPhotoProps {
  src: string;
  alt: string;
  name: string;
  className?: string;
}

function EkstrakurikulerPhoto({ src, alt, name, className = "" }: EkstrakurikulerPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`ekstrakurikuler-photo-fallback ${className}`}>
        <div className="ekstrakurikuler-photo-fallback-letter">{name.charAt(0)}</div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export default EkstrakurikulerPhoto;

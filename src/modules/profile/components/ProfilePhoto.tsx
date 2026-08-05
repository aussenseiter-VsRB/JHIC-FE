import { useState } from "react";

interface ProfilePhotoProps {
  src: string;
  alt: string;
  initials: string;
  role: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function ProfilePhoto({ src, alt, initials, role }: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="profile-photo-fallback" role="img" aria-label={alt}>
        <span className="profile-photo-fallback-initials">
          {initials || getInitials(alt)}
        </span>
        <span className="profile-photo-fallback-role">{role}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="profile-photo-img"
      onError={() => setFailed(true)}
    />
  );
}

export default ProfilePhoto;

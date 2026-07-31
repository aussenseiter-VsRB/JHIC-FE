import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Loader2 } from "lucide-react";
import fasilitasJurusanData from "../fasilitas-jurusan/fasilitas-jurusan.json";
import "./css/panorama.css";

interface PannellumViewer {
  on: (event: string, listener: () => void) => void;
  off: (event: string, listener?: () => void) => void;
  destroy: () => void;
}

declare global {
  interface Window {
    pannellum?: {
      viewer: (container: string, config: Record<string, unknown>) => PannellumViewer;
    };
  }
}

type ViewerStatus = "loading" | "ready" | "error";

function PanoramaViewer({ image }: { image: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<ViewerStatus>("loading");

  useEffect(() => {
    if (!window.pannellum || !containerRef.current) {
      setStatus("error");
      return;
    }

    let viewer: PannellumViewer | null = null;
    setStatus("loading");

    const handleLoad = () => setStatus("ready");
    const handleError = () => setStatus("error");

    viewer = window.pannellum.viewer(containerRef.current.id, {
      type: "equirectangular",
      panorama: image,
      autoLoad: true,
      autoRotate: -2,
      autoRotateInactivityDelay: 3000,
      compass: false,
      onError: handleError,
    });
    viewer.on("load", handleLoad);
    viewer.on("error", handleError);

    return () => {
      viewer?.off("load", handleLoad);
      viewer?.off("error", handleError);
      viewer?.destroy();
    };
  }, [image]);

  return (
    <div className="panorama-viewer">
      <div ref={containerRef} id="panorama-viewer-container" className="panorama-viewer-canvas" />
      {status === "loading" && (
        <div className="panorama-viewer-overlay">
          <Loader2 className="panorama-viewer-overlay-icon panorama-spin" />
          <p className="panorama-viewer-overlay-text">Memuat panorama...</p>
        </div>
      )}
      {status === "error" && (
        <div className="panorama-viewer-overlay">
          <AlertTriangle className="panorama-viewer-overlay-icon" />
          <p className="panorama-viewer-overlay-text">Panorama tidak dapat dimuat.</p>
        </div>
      )}
    </div>
  );
}

function Panorama() {
  const { slug } = useParams<{ slug: string }>();
  const item = fasilitasJurusanData.find((f) => f.slug === slug);

  if (!item) {
    return (
      <div className="panorama">
        <div className="panorama-hero panorama-hero--empty">
          <div className="panorama-hero-inner">
            <Link to="/fasilitas-jurusan" className="panorama-back">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Fasilitas Jurusan
            </Link>
            <h1 className="panorama-title">Panorama tidak ditemukan</h1>
            <p className="panorama-subtitle">Ruang yang Anda cari tidak tersedia.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="panorama" style={{ "--panorama-accent": item.color } as React.CSSProperties}>
      <div className="panorama-hero">
        <div className="panorama-hero-inner">
          <Link to="/fasilitas-jurusan" className="panorama-back">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Fasilitas Jurusan
          </Link>
          <h1 className="panorama-title">{item.name}</h1>
          <p className="panorama-subtitle">Room Tour 360&deg; - jelajahi ruangan secara virtual</p>
        </div>
        <div className="wave-scroll-container">
          <svg className="wave-scroll" viewBox="0 0 2880 120" fill="none" preserveAspectRatio="none">
            <path d="M0,60 C360,110 450,20 720,60 C990,100 1080,30 1440,60 C1800,90 1890,20 2160,60 C2430,100 2520,30 2880,60 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.3" />
            <path d="M0,75 C300,40 500,100 720,75 C940,50 1140,110 1440,75 C1740,40 1940,100 2160,75 C2380,50 2580,110 2880,75 L2880,120 L0,120 Z" fill="#F5F5F5" opacity="0.6" />
            <path d="M0,90 C320,120 420,50 720,90 C1020,130 1120,60 1440,90 C1760,120 1860,50 2160,90 C2460,130 2560,60 2880,90 L2880,120 L0,120 Z" fill="#F5F5F5" />
          </svg>
        </div>
      </div>

      <div className="panorama-body">
        <PanoramaViewer image={item.panorama} />
        <p className="panorama-description">{item.description}</p>
      </div>
    </div>
  );
}

export default Panorama;

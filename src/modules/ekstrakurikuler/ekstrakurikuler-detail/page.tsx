import { Link, useParams } from "react-router";
import { ArrowLeft, CalendarDays, Clock, User } from "lucide-react";
import Breadcrumb from "../../../components/breadcrumb/breadcrumb";
import EkstrakurikulerPhoto from "../components/EkstrakurikulerPhoto";
import "./css/ekstrakurikuler-detail.css";
import data from "../ekstrakurikuler.json";

function EkstrakurikulerDetail() {
  const { slug } = useParams<{ slug: string }>();
  const item = data.list.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div className="ekstrakurikuler-detail">
        <div className="ekstrakurikuler-detail-notfound">
          <Link to="/ekstrakurikuler" className="ekstrakurikuler-detail-back">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Ekstrakurikuler
          </Link>
          <h1>Ekstrakurikuler tidak ditemukan</h1>
          <p>Kegiatan yang Anda cari tidak tersedia.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ekstrakurikuler-detail">
      <div className="ekstrakurikuler-detail-head">
        <div className="ekstrakurikuler-detail-head-inner">
          <Breadcrumb
            items={[
              { label: "Program" },
              { label: "Ekstrakurikuler", to: "/ekstrakurikuler" },
              { label: item.name },
            ]}
          />
          <Link to="/ekstrakurikuler" className="ekstrakurikuler-detail-back">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Ekstrakurikuler
          </Link>
          <h1 className="ekstrakurikuler-detail-title">{item.name}</h1>
        </div>
      </div>

      <div className="ekstrakurikuler-detail-body">
        <div className="ekstrakurikuler-detail-photo">
          <EkstrakurikulerPhoto
            src={item.photo}
            alt={`Foto ${item.name}`}
            name={item.name}
            className="ekstrakurikuler-detail-photo-img"
          />
        </div>

        <div className="ekstrakurikuler-detail-info">
          <h2 className="ekstrakurikuler-detail-info-title">Tentang {item.name}</h2>
          <div className="ekstrakurikuler-detail-accent" />
          <p className="ekstrakurikuler-detail-desc">{item.description}</p>

          <div className="ekstrakurikuler-detail-meta">
            <div className="ekstrakurikuler-detail-meta-item">
              <CalendarDays className="h-4 w-4" />
              {item.day}
            </div>
            <div className="ekstrakurikuler-detail-meta-item">
              <Clock className="h-4 w-4" />
              {item.time}
            </div>
            <div className="ekstrakurikuler-detail-meta-item">
              <User className="h-4 w-4" />
              {item.coach}
            </div>
          </div>
        </div>
      </div>

      <div className="ekstrakurikuler-detail-gallery-section">
        <h2 className="ekstrakurikuler-detail-gallery-title">Galeri</h2>
        <div className="ekstrakurikuler-detail-accent" />
        <div className="ekstrakurikuler-detail-gallery">
          {item.gallery.map((img, i) => (
            <div key={i} className="ekstrakurikuler-detail-gallery-item">
              <EkstrakurikulerPhoto
                src={img}
                alt={`Galeri ${item.name} ${i + 1}`}
                name={item.name}
                className="ekstrakurikuler-detail-gallery-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EkstrakurikulerDetail;

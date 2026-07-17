import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// ... (logika perbaikan icon default bawaan Leaflet disisipkan di sini jika diperlukan) ...

export default function RealisticMap() {
  // Contoh koordinat (Bisa diubah sesuai kebutuhan lokasimu)
  const position: [number, number] = [ -7.0237, 107.5365]; 

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer 
        center={position} 
        zoom={20} // Zoom diset agak dekat (16-18) agar detail atap rumah/pohon terlihat jelas
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        {/* MENGGUNAKAN TILE LAYER SATELIT REALISTIK DARI ESRI */}
        <TileLayer
          
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          maxZoom={19} // Esri mendukung tingkat zoom yang cukup dalam
        />
        
        <Marker position={position}>
          <Popup>
            <strong>Lokasi Kantor Terkini</strong><br />Dilihat langsung dari satelit.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
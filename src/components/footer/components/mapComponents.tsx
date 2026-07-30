import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position: [number, number] = [-7.0237, 107.5365];

export default function RealisticMap() {
  return (
    <div className="footer-map-wrapper-inner">
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        className="footer-map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>SMK Yadika Soreang</strong>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

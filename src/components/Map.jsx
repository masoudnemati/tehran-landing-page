import React, { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Tooltip,
  useMapEvents,
} from "react-leaflet";

const Map = () => {
  let position = [35.7013340010605, 51.41378046383244];
  const mapRef = useRef(null);

  useEffect(() => {
    console.log(mapRef);
  }, []);

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: 260, width: 300 }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>شعبه غرب تهران</Popup>
          <Tooltip direction="top" offset={[83, -7]} opacity={1} permanent>
            شعبه غرب تهران
          </Tooltip>
        </Marker>
      </MapContainer>
      <style jsx>{`
        .map-container {
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
            rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
            rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
        }
      `}</style>
    </div>
  );
};

export default Map;

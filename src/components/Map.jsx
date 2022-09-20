import React, { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";

const Map = ({ position }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const markers = [
    {
      id: "north",
      position: [35.749019463820396, 51.331987454699714],
      name: "شمال",
    },
    {
      id: "east",
      position: [35.724270871909, 51.428299775422914],
      name: "شرق",
    },
    {
      id: "south",
      position: [35.67752496742818, 51.34114281083511],
      name: "جنوب",
    },
    {
      id: "west",
      position: [35.71426496644119, 51.255362964504286],
      name: "غرب",
    },
  ];

  useEffect(() => {
    mapRef.current && mapRef.current.flyTo(position, 15);
    // markerRef.current && markerRef.current.bindPopup("content").openPopup();
  }, [position]);

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: 260, width: 350 }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker) => {
          return (
            <Marker position={marker.position} key={marker.id}>
              {/* <Popup>شعبه {marker.name} تهران</Popup> */}
              <Tooltip direction="top" offset={[88, -7]} opacity={1} permanent>
                <p
                  style={{
                    width: 90,
                    textAlign: "center",
                    borderRadius: "60px",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  شعبه {marker.name} تهران
                </p>
              </Tooltip>
            </Marker>
          );
        })}
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

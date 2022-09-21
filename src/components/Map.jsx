import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

const Map = ({ position }) => {
  const mapRef = useRef(null);

  const markers = [
    {
      id: "north",
      position: [35.75174002351506, 51.26625291053583],
      name: "شمال",
    },
    {
      id: "east",
      position: [35.72059244184825, 51.500311410524574],
      name: "شرق",
    },
    {
      id: "south",
      position: [35.689081864342604, 51.384007484658525],
      name: "جنوب",
    },
    {
      id: "west",
      position: [35.703656, 51.320131],
      name: "غرب",
    },
    {
      id: "west-city",
      position: [35.7694430672955, 51.35531532682283],
      name: "شهرک غرب",
    },
    {
      id: "middle",
      position: [35.71482149218997, 51.427813468591225],
      name: "مرکز",
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
        style={{
          height: 263,
          // , width: 350
        }}
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
              <Tooltip direction="top" offset={[109, -7]} opacity={1} permanent>
                <p
                  style={{
                    width: 110,
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
          width: 350px;
        }

        @media screen and (max-width: 900px) {
          .map-container {
            border-radius: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Map;

"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Map() {
  const positions = [
    { name: "Cần Thơ", coords: [10.0452, 105.7469] as [number, number] },
    { name: "Vĩnh Long", coords: [10.2537, 105.9722] as [number, number] },
    { name: "Cà Mau", coords: [9.1769, 105.1500] as [number, number] },
  ];

  // Use divIcon to render the marker and tooltip together as HTML, avoiding React Strict Mode crash with Leaflet Tooltip
  const getIcon = (name: string) => {
    return L.divIcon({
      className: "bg-transparent border-none",
      html: `<div style="position: relative; display: flex; flex-direction: column; align-items: center;">
               <div style="position: absolute; bottom: 42px; white-space: nowrap; background: rgba(255,255,255,0.9); padding: 4px 8px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.2); color: black; font-weight: 500; font-family: sans-serif; font-size: 13px;">
                 ${name}
               </div>
               <img src="https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png" style="width: 25px; height: 41px;" />
               <img src="https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png" style="width: 41px; height: 41px; position: absolute; left: 1px; top: 0px; z-index: -1;" />
             </div>`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
  };

  return (
    <div className="h-[300px] w-full z-0 relative border-t border-border/50">
      <MapContainer center={[9.8, 105.6]} zoom={8} scrollWheelZoom={true} zoomControl={false} className="h-full w-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        {positions.map((pos, idx) => (
          <Marker key={idx} position={pos.coords} icon={getIcon(pos.name)}>
            <Popup className="font-sans font-medium text-black">${pos.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

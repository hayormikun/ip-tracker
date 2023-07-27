import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet";
import { useMemo, useState } from "react";

export default function MapView() {
  const [ip, setIp] = useState("")

  const customIcon = new Icon({
    iconUrl: "/assets/icon-location.svg",
    iconSize: [46, 56]
  })

  const lat = useMemo(() => (51.505), [])
  const lng = useMemo(() => (-0.09), [])

  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e: any) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  

  return (
    <MapContainer zoomAnimation={true} center={[lat, lng]} zoom={13} minZoom={2} maxZoom={19} scrollWheelZoom={false} className="w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

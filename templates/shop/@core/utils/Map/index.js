import { useEffect, useMemo, useRef } from "react";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

function LocationMarker({ value, change, readOnly }) {
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker && !readOnly) {
          change(marker.getLatLng());
        }
      },
    }),
    []
  );

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      change(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
    dragend(e) {
      if (!readOnly) {
        const { lat, lng } = e.target.getCenter();
        change([lat, lng]);
      }
    },
  });

  return (
    <Marker
      draggable={!readOnly}
      eventHandlers={eventHandlers}
      position={value}
      ref={markerRef}
    />
  );
}

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng]);
    }
  }, [lat, lng]);
  return null;
};

const Map = ({
  value,
  change,
  readOnly = false,
  className = "homeMap",
  zoomControl = true,
}) => {
  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })();
  }, []);

  return (
    <MapContainer
      className={className}
      center={value || [37.276443038488, 49.571378314799]}
      zoom={15}
      minZoom={5}
      zoomControl={zoomControl}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker value={value} change={change} readOnly={readOnly} />
      <RecenterAutomatically lat={value && value[0]} lng={value && value[1]} />
    </MapContainer>
  );
};

export default Map;

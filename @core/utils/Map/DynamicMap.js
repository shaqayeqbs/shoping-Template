// import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import * as ReactLeaflet from "react-leaflet";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Leaflet = dynamic(() => import("leaflet"));

// import styles from './Map.module.scss';

const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, width, height, center, zoom, ...rest }) => {
  let mapClassName = "w-[100%] h-[100%] md:h-[80%] my-10 rounded-lg z-0";
  function ChangeView({ center, zoom }) {
    const map = ReactLeaflet?.useMap();
    map.setView(center, zoom);
    return null;
  }

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
        iconUrl: "leaflet/images/marker-icon.png",
        shadowUrl: "leaflet/images/marker-shadow.png",
      });
    })();
  }, []);

  return (
    <MapContainer className={mapClassName} {...rest}>
      <ChangeView center={center} zoom={zoom} />
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  );
};

export default Map;

import { useState, useEffect } from "react";
import { Map as MapLibreMap, NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function App() {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!mapReady) return;

    const map = new MapLibreMap({
      container: "central-map",
      center: [0, 0],
      zoom: 0,
      style:
        "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
      transformRequest: (url, resourceType) => {
        url = `https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.jsonhttps://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json?api_key=${process.env.API_KEY}`;
        return {url, resourceType };
      },
    });

    const nav = new NavigationControl({
      visualizePitch: true,
    });
    map.addControl(nav, "top-left");
  }, [mapReady]);

  return (
    <div
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      ref={() => setMapReady(true)}
      id="central-map"
    />
  );
}

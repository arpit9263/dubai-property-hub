import { useEffect, useState } from "react";

type Marker = {
  id: string;
  position: [number, number];
  title: string;
  subtitle?: string;
  href?: string;
};

type Props = {
  markers: Marker[];
  center?: [number, number];
  zoom?: number;
  height?: string;
};

/**
 * Client-only Leaflet map. Dynamically imported to keep SSR happy.
 */
export function MapView({ markers, center = [25.2048, 55.2708], zoom = 10, height = "500px" }: Props) {
  const [mod, setMod] = useState<any>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [rl, L] = await Promise.all([
        import("react-leaflet"),
        import("leaflet"),
      ]);
      // Fix default icon paths
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
      if (!cancelled) setMod({ rl, L });
    })();
    return () => { cancelled = true; };
  }, []);

  if (!mod) {
    return <div style={{ height }} className="w-full bg-card animate-pulse border border-border/30" />;
  }

  const { MapContainer, TileLayer, Marker, Popup } = mod.rl;

  return (
    <div style={{ height }} className="w-full overflow-hidden border border-border/40 [&_.leaflet-container]:bg-card">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {markers.map((m) => (
          <Marker key={m.id} position={m.position}>
            <Popup>
              <strong>{m.title}</strong>
              {m.subtitle && <div style={{ fontSize: 12, opacity: 0.7 }}>{m.subtitle}</div>}
              {m.href && (
                <div style={{ marginTop: 6 }}>
                  <a href={m.href} style={{ color: "#D4A574" }}>View →</a>
                </div>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
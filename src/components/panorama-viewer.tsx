import { useEffect, useRef, useState } from "react";
import { X, Compass } from "lucide-react";

type Props = {
  url?: string;
  title?: string;
};

/**
 * Lightweight equirectangular 360 viewer using Pannellum loaded from CDN.
 * Avoids SSR/bundling issues with pannellum-react.
 */
export function PanoramaViewer({ url, title }: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    if (!open || !url || typeof window === "undefined") return;

    const ensurePannellum = async () => {
      if (!(window as any).pannellum) {
        if (!document.querySelector('link[data-pannellum-css]')) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
          link.setAttribute("data-pannellum-css", "true");
          document.head.appendChild(link);
        }
        await new Promise<void>((resolve, reject) => {
          const existing = document.querySelector('script[data-pannellum-js]') as HTMLScriptElement | null;
          if (existing) { existing.addEventListener("load", () => resolve()); return; }
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
          script.setAttribute("data-pannellum-js", "true");
          script.onload = () => resolve();
          script.onerror = () => reject();
          document.head.appendChild(script);
        });
      }
      if (containerRef.current && (window as any).pannellum) {
        viewerRef.current = (window as any).pannellum.viewer(containerRef.current, {
          type: "equirectangular",
          panorama: url,
          autoLoad: true,
          autoRotate: -2,
          showControls: true,
          compass: true,
        });
      }
    };
    ensurePannellum();

    return () => {
      if (viewerRef.current?.destroy) viewerRef.current.destroy();
      viewerRef.current = null;
    };
  }, [open, url]);

  if (!url) {
    return (
      <button
        disabled
        className="inline-flex items-center gap-2 px-5 py-3 border border-border/40 text-xs uppercase tracking-[0.2em] text-foreground/40 cursor-not-allowed"
      >
        <Compass className="h-4 w-4" />
        360° unavailable
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-5 py-3 border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-[0.2em] transition-all"
      >
        <Compass className="h-4 w-4" />
        View 360°
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex flex-col">
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-border/30">
            <div>
              <p className="label-eyebrow">360° Tour</p>
              {title && <p className="text-sm text-foreground/80 mt-1">{title}</p>}
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-foreground/70 hover:text-primary"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div ref={containerRef} className="flex-1 bg-black" />
        </div>
      )}
    </>
  );
}
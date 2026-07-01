import { Link } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { useMode } from "@/components/mode-context";

export function ModeNotice() {
  const { mode, setMode } = useMode();
  if (mode === "domestic") return null;
  return (
    <div className="container-edge -mt-2 mb-10">
      <div className="flex flex-wrap items-center justify-between gap-4 bg-primary/10 border border-primary/30 p-4 md:p-5 text-sm">
        <div className="flex items-start gap-3 text-primary">
          <Globe className="h-4 w-4 mt-0.5 shrink-0" />
          <p>
            International mode is a preview — currently showing verified Dubai inventory. Global markets roll out through 2027.
          </p>
        </div>
        <div className="flex gap-3 text-xs uppercase tracking-[0.2em]">
          <button onClick={() => setMode("domestic")} className="text-primary hover:underline">
            Switch to Domestic
          </button>
          <Link to="/international" className="text-foreground/70 hover:text-primary">
            Waitlist →
          </Link>
        </div>
      </div>
    </div>
  );
}
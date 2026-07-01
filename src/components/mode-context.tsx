import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Mode = "domestic" | "international";

type ModeContextValue = {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggle: () => void;
};

const ModeContext = createContext<ModeContextValue | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("domestic");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("archigram-mode");
      if (saved === "domestic" || saved === "international") setMode(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("archigram-mode", mode);
    } catch {}
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode, toggle: () => setMode(mode === "domestic" ? "international" : "domestic") }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}
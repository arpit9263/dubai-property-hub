import { createContext, useContext, useState, type ReactNode } from "react";

export type Mode = "domestic" | "international";

type ModeContextValue = {
  mode: Mode;
  setMode: (m: Mode) => void;
};

const ModeContext = createContext<ModeContextValue | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("domestic");
  return (
    <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}
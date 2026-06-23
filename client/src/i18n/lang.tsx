import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { UI, type Lang } from "./ui";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<Ctx>({ lang: "fr", setLang: () => {} });
const STORE_KEY = "lang890";

function initialLang(): Lang {
  try {
    const s = localStorage.getItem(STORE_KEY);
    if (s === "fr" || s === "en" || s === "zh") return s;
    const nav = navigator.language?.toLowerCase() ?? "";
    if (nav.startsWith("zh")) return "zh";
    if (nav.startsWith("en")) return "en";
  } catch {
    /* localStorage indisponible */
  }
  return "fr";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

// Langue courante + setter
export function useLang() {
  return useContext(LangContext);
}

// Raccourci : renvoie l'arbre de traductions de la langue courante
export function useT() {
  return UI[useContext(LangContext).lang];
}

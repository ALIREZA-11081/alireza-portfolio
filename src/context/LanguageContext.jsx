import { createContext, useMemo, useState } from "react";

import en from "../locales/en";
import fa from "../locales/fa";

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fa" : "en"));
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: language === "en" ? en : fa,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
import { useRouter } from "next/router";
import { useEffect } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    localStorage.setItem("selectedLocale", locale);
  }, [locale]);

  const changeLanguage = (newLocale) => {
    localStorage.setItem("selectedLocale", newLocale);
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  useEffect(() => {
    const storedLocale = localStorage.getItem("selectedLocale") || "en";
    if (storedLocale !== locale) {
      router.push({ pathname, query }, asPath, { locale: storedLocale });
    }
  }, []);

  return (
    <div>
      <button onClick={() => changeLanguage("en")} disabled={locale === "en"}>
        English
      </button>
      <button onClick={() => changeLanguage("ar")} disabled={locale === "ar"}>
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;

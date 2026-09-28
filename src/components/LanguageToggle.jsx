import React from "react";

function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="language-toggle" aria-label="Blog language">

      <button
        type="button"
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        English
      </button>

      <span className="language-divider">/</span>

      <button
        type="button"
        className={language === "ml" ? "active" : ""}
        onClick={() => setLanguage("ml")}
      >
        മലയാളം
      </button>

    </div>
  );
}

export default LanguageToggle;
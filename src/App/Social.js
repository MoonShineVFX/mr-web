import React from "react";
import { ReactComponent as Fbicon } from "../images/facebook-f-brands.svg";
import { ReactComponent as Igicon } from "../images/instagram-brands.svg";
import { useTranslation } from "react-i18next";

function Social() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="social">
      <ul>
        <li>
          <a
            href="https://blog.moondreamreality.com/information/"
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            {t("event")}
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/MoondreamReality/"
            target="_blank"
            rel="noreferrer"
          >
            <Fbicon className="social-icon" alt="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/moondream.tw/"
            target="_blank"
            rel="noreferrer"
          >
            <Igicon className="social-icon" alt="icon" />
          </a>
        </li>
        <li className={i18n.language === "zh-TW" ? "active" : ""}>
          <p onClick={() => changeLanguage("zh-TW")}>繁</p>
        </li>
        <li className={i18n.language === "en" ? "active" : ""}>
          <p onClick={() => changeLanguage("en")}>EN</p>
        </li>
      </ul>
    </div>
  );
}

export default Social;

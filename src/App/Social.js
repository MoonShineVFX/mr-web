import React from 'react'
import { ReactComponent as Fbicon } from '../images/facebook-f-brands.svg'
import { ReactComponent as Igicon } from '../images/instagram-brands.svg'
import { useTranslation } from 'react-i18next';
 
function Social() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
      <div className="social">
        <ul>
          <li> 
            <a href="https://www.facebook.com/MoondreamReality/" target="_blank" rel="noreferrer">
              <Fbicon className="social-icon" alt="icon" /> 
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/moondream.tw/" target="_blank" rel="noreferrer">
              <Igicon className="social-icon" alt="icon" />
            </a>
          </li>
          <li>
            <p onClick={() => changeLanguage("zh-tw")}>繁</p>
          </li>
          <li>
            <p onClick={() => changeLanguage("en")}>EN</p>
          </li>
        </ul>
      </div>
    )
}

export default Social

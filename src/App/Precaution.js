import React from 'react'
import { useTranslation  } from 'react-i18next';
function Precaution() {
  const { t, i18n } = useTranslation();
    return (
        <div className="precaution" data-aos="fade-left">
          <div className="items">
            <div className="item-precaution afterblue">
              <div className="item-title">{t('precaution_title')}</div>
              <div className="item-desc">{t('precaution_desc')}</div>
            </div>
          </div>
        </div>
    )
}

export default Precaution

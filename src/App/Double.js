import React from 'react'
import r2 from '../images/r2.png'
import { useTranslation,Trans  } from 'react-i18next';
function Double() {
  const { t, i18n } = useTranslation();
    return (
      <div className="double container" data-aos="fade-up">
        <div className="double-item"  >
          <div className="double-item-bg" style={{backgroundImage: "url(" + 'https://r2.web.moonshine.tw/msweb/moondream/double/'+'r1.png'+ ")"}}></div>
          <div className="title" > <Trans i18nKey="double1_title"></Trans></div>
          {/* <img src={r2} alt=""/> */}
          <div className="caption">{t('double1_dec')}</div>
        </div>
        <div className="double-item">
          <div className="double-item-bg" style={{backgroundImage: "url(" +'https://r2.web.moonshine.tw/msweb/moondream/double/'+'r2.png'+ ")"}}></div>
          <div className="title" ><Trans i18nKey="double2_title"></Trans></div>
          {/* <img src={r2} alt=""/> */}
          <div className="caption">{t('double2_dec')}</div>
        </div>
      </div>
    )
}

export default Double

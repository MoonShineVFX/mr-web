import React ,{useEffect}from 'react'

import whLogo from '../images/whlogowithoutword.svg'
import mrTitle from '../images/title.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next';
function Header() {
  const { t, i18n } = useTranslation();
  useEffect(()=>{
    Aos.init({duration: 1500})
  })
    return (
      <div className="header" data-aos="fade">
        <div className="logo" >
          <img src={whLogo} alt="夢境現實 Moondream reality" title="夢境現實 Moondream reality"/>
        </div>
        <div className="standardword-eng" >
          <img src={mrTitle} alt="夢境現實 Moondream reality"  title="夢境現實 Moondream reality"/>
        </div>
        <div className="standardword-cht">
          {t('standardword_cht')}
        </div>
        
      </div>
  )
}

export default Header

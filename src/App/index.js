import React from 'react';

import './index.scss';
import Header from './Header'
import Carousel from './Carousel'
import About from './About'
import Double from './Double'
import Report from './Report'
import Partner from './Partner'
import Banner from './Banner'
import Footer from './Footer'
import Social from './Social'
import Precaution from './Precaution'
import FbVideo from './FbVideo'
import Guide from './Guide';
//data
import slideData from './SlideData'
import partnerData from './PartnerData'
import suppData from './SuppData'
import { useTranslation } from 'react-i18next';
function App() {
  const { t, i18n } = useTranslation();
  return (
  <React.Fragment>
    {/* <FloatContent/> */}
    <Social/>
    <Header/>
    <FbVideo/>
    <Carousel slides={slideData} />
    <Guide />
    <About/>
    <Double/>
    {/* <Precaution/> */}
    <Report/>
    <Partner title={t('directed_title')} logos = {suppData} />
    <Partner title={t('partner_title')} logos = {partnerData}/>
    <Banner/>
    <Footer/>
  </React.Fragment>
  );
}

export default App;

// https://g.page/moondreamreality?share
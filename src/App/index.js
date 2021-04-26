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
import Hours from './hours'
import FloatContent from './FloatContent'
import FbVideo from './FbVideo'
//data
import slideData from './SlideData'
import partnerData from './PartnerData'
import suppData from './SuppData'
function App() {
  return (
  <React.Fragment>
    {/* <FloatContent/> */}
    <Social/>
    <Header/>
    <FbVideo/>
    <Carousel slides={slideData} />
    <About/>
    <Double/>
    <Precaution/>
    <Hours/>
    <Report/>
    <Partner title='指導單位' logos = {suppData} />
    <Partner title='合作夥伴' logos = {partnerData}/>
    <Banner/>
    <Footer/>
  </React.Fragment>
  );
}

export default App;

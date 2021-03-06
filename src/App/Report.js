import React from 'react'
import GoogleMapReact from 'google-map-react';
import { styles } from './CustomMapStyle';
import { useTranslation,Trans  } from 'react-i18next';
// import { key } from './key';

// map id: 5115396ae6b24300

function Report() {
    const { t, i18n } = useTranslation();
    const mapStyles = {
      center: {
        lat: 22.616908734023188,
        lng: 120.2927381114408,
      },
      zoom: 16
    };

    function createMapOptions(maps) {
      return {
        styles
      }
    }

    const AnyReactComponent = ({ text }) =>
      <div style={{
        color: 'white',
        backgroundColor: 'gray',
        padding: '10px 10px',
        textAlign: 'center',
        borderRadius: '5px',
        transform: 'translate(-50%, -50%)',
        width:'110px',
      }}>
        {/* <img src="/images/map.png" alt=""/> */}
        {text}
      </div>
    ;

    return (
        <div className="report">
          <div className="container">
            <div className="main-title">
              <h1>{t('visitInfo_title')}</h1>
            </div>
          </div>

          <div className="container">
            <div className="items">
              <div className="report-content">
                <div className="title">{t('visitInfo_time_title')}</div>
                <div className="item item-time" data-aos="fade-up">
                  <div className="item-time-number">30 <span>{t('minute')}</span></div>
                  <div className="item-time-desc">{t('visitInfo_time_desc')}</div>
                </div>
              </div>
              <div className="report-content">
                <div className="title">{t('visitInfo_ticket_title')}</div>
                <div className="item item-price">
                  <div className="item-price-content" data-aos="fade-up">
                    <div className="item-price-content-border">
                      <div>{t('mrGlass')}</div>
                      <div>+</div>
                      <div>{t('immersive_projection')}</div>
                    </div>
                    <div className="item-price-content-number">NT$ <span>400</span></div>

                  </div>
                  <div className="item-price-content" data-aos="fade-up" data-aos-delay="500">
                    <div className="item-price-content-border">
                      <div>{t('immersive_projection')}</div>
                    </div>
                    <div className="item-price-content-number">NT$ <span>200</span></div>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ textAlign: 'center' }}>
              <Trans i18nKey={'visitInfo_ticket_notice'}>
                *??????????????????????????????????????????<a href="https://www.kkday.com/zh-tw/product/126021?cid=12838" target="__blank" style={{ color: 'white', margin: '0 4px' }}>KKday</a>????????????
              </Trans>
              
            </p>
          </div>

          <div className="items ">
            <div className="report-content">
              <div className="item-parallax bg1" data-aos="flip-up">
                <div className="item-parallax-content">
                  <div className="item-parallax-content-title">{t('traffic1_title')}</div>
                  <div>{t('traffic1_desc')}</div>
                </div>
              </div>
              <div className="item-parallax bg2" data-aos="flip-up">
                <div className="item-parallax-content">
                  <div className="item-parallax-content-title">{t('traffic2_title')}</div>
                  <div>{t('traffic2_desc')}</div>
                </div>
              </div>
              <div className="item-parallax bg4" data-aos="flip-up">
                <div className="item-parallax-content">
                  <div className="item-parallax-content-title">{t('traffic3_title')}</div>
                  <div className="item-parallax-content-text">
                    <Trans i18nKey='traffic3_desc'>
                      <div>????????????18????????????1?????????????????????????????????????????????1??????</div> 
                      <div> ?????? 25???50???77??? ???????????????????????????????????????(????????????)???????????????5-10??????</div> 
                      <div> ?????? 0??????0??????33???100???168??????168????????????????????????????????????????????????5-10??????</div>
                    </Trans>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* <div className="items">
            <div className="item-precaution">
              <div className="item-title">
                ????????????
              </div>
              <div className="item-desc">
                ??????????????????????????????????????????????????????????????????????????????????????????<br/>
                ???????????????????????????37.5?????????????????????????????????????????????
              </div>
            </div>
          </div> */}
          <div className="items" data-aos="fade-right">
            <div className="item-map">
              <div className="item-title">
                <Trans i18nKey={'mapInfo_title'}>
                  ???????????? <br/> MR ???????????????
                </Trans>
              </div>

              <div className="item-map-content">
                <div className="item-map-svg">
                  <a href="https://g.page/moondreamreality?share" target="_blank" rel="noreferrer">
                   <img src={process.env.PUBLIC_URL + '/images/2022/'+ t('mr_map_name_svg')} alt="" />
                  </a>
                 
                </div>

              </div>
              <div className="item-map-text">
                {t('mapInfo_business_hours')} <br/>
                {t('mapInfo_business_address')}
              </div>
            </div>
          </div>
        </div>
    )
}

export default Report

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
                *不定期舉辦優惠活動，詳請查閱<a href="https://www.kkday.com/zh-tw/product/126021?cid=12838" target="__blank" style={{ color: 'white', margin: '0 4px' }}>KKday</a>售票網頁
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
                  <Trans i18nKey='traffic3_desc'>
                    <div>搭乘【紅18】或【綠1】至【輕軌光榮碼頭站】，步行約1分鐘</div> 
                    <div> 搭乘 25、50、77號 公車至大立百貨站或高雄女中(真愛碼頭)站，步行約5-10分鐘</div> 
                    <div> 搭乘 0北、0南、33、100、168東、168西號公車至【漢神百貨站】，步行約5-10分鐘</div>
                  </Trans>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="items">
            <div className="item-precaution">
              <div className="item-title">
                防疫措施
              </div>
              <div className="item-desc">
                請自備口罩，並於觀賞演出時全程配戴，無法配合者將婉拒入場。​<br/>
                如發現體溫超過攝氏37.5度，會協助觀眾現場辦理退票。​
              </div>
            </div>
          </div> */}
          <div className="items" data-aos="fade-right">
            <div className="item-map">
              <div className="item-title">
                <Trans i18nKey={'mapInfo_title'}>
                  夢境現實 <br/> MR 沈浸式劇院
                </Trans>
              </div>

              <div className="item-map-content">
                <div className="item-map-svg">
                  <a href="https://g.page/moondreamreality?share" target="_blank" rel="noreferrer">
                   <img src={process.env.PUBLIC_URL + '/images/ig_map.svg'} alt="" />
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

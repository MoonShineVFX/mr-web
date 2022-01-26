import React from 'react'

import GoogleMapReact from 'google-map-react';
import { styles } from './CustomMapStyle';
import { key } from './key';

function Report() {
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
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        fontWeight:'100',
        transform: 'translate(-50%, -50%)',
        width:'15px'
      }}>
        <img src="/images/map.png" alt=""/>
      </div>
    ;

    return (
        <div className="report">
          <div className="container">
            <div className="main-title">
              <h1>參觀資訊</h1>
            </div>
          </div>

          <div className="container">
            <div className="items">
              <div className="report-content">
                <div className="title">時間</div>
                <div className="item item-time" data-aos="fade-up">
                  <div className="item-time-number">30 <span>分鐘</span></div>
                  <div className="item-time-desc">包含設備操作、簡易導覽、沈浸互動等完整體驗</div>
                </div>
              </div>
              <div className="report-content">
                <div className="title">票價</div>
                <div className="item item-price">
                  <div className="item-price-content" data-aos="fade-up">
                    <div className="item-price-content-border">
                      <div>MR 眼鏡</div>
                      <div>+</div>
                      <div>沈浸式投影</div>
                    </div>
                    <div className="item-price-content-number">NT$ <span>400</span></div>

                  </div>
                  <div className="item-price-content" data-aos="fade-up" data-aos-delay="500">
                    <div className="item-price-content-border">
                      <div>沈浸式投影</div>
                    </div>
                    <div className="item-price-content-number">NT$ <span>200</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="items ">
            <div className="report-content">
              <div className="item-parallax bg1" data-aos="flip-up">
                <div className="item-parallax-content">
                  <div className="item-parallax-content-title">自行開車</div>
                  <div>國道1號 - 高雄交流道 (中正路出口) 下 - 中正一路 - 五福一路至三路 - 英雄路 - 海邊路</div>
                  <div>至光榮碼頭站附設停車場，再步行。</div>
                </div>
              </div>
              <div className="item-parallax bg2" data-aos="flip-up">
                <div className="item-parallax-content">
                  <div className="item-parallax-content-title">捷運轉乘輕軌</div>
                  <div>搭乘捷運至【凱旋站】或【西子灣站轉】乘高雄輕軌至【光榮碼頭站 C10】，步行約1分鐘</div>
                </div>
              </div>
              <div className="item-parallax bg4" data-aos="flip-up">
                <div className="item-parallax-content">
                  <div className="item-parallax-content-title">客運</div>
                  <div>搭乘【紅18】或【綠1】至【輕軌光榮碼頭站】，步行約1分鐘</div>
                  <div>搭乘 25、50、77號公車至大立百貨站或高雄女中(真愛碼頭)站，步行約5-10分鐘</div>
                  <div>搭乘 0北、0南、33、100、168東、168西號公車至【漢神百貨站】，步行約5-10分鐘</div>
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

                夢境現實 <br/> MR 沈浸式劇院

              </div>

              <div className="item-map-content">
              <div className="item-map-googlemap">
                <GoogleMapReact
                    bootstrapURLKeys={{ key }}
                    defaultCenter={mapStyles.center}
                    defaultZoom={mapStyles.zoom}
                    options={createMapOptions}
                >
                  <AnyReactComponent
                    lat={mapStyles.center.lat}
                    lng={mapStyles.center.lng}
                  />
                </GoogleMapReact>
              </div>
              </div>
              <div className="item-map-text">
                週五 - 週日 13:00-19:00 <br/>
                802 高雄市苓雅區海邊路 15 號
              </div>
            </div>
          </div>
        </div>
    )
}

export default Report

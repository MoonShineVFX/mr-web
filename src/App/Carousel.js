import React, { useState }  from 'react'
import arrowRight  from '../images/right-arrow.svg'
import HoverVideoPlayer from 'react-hover-video-player';
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next';
function Carousel ({slides}) {
    const [open, setOpen] = useState(false)
    const [curr, setCurr] = React.useState(0);
    const { length } = slides;

    const goToNext = () => {
      setCurr(curr === length - 1 ? 0 : curr + 1 );
      setOpen(false)
    }
    const goToPrev = () => {
      setCurr(curr <= 0 ?  length-1 : curr - 1 );
      setOpen(false)

    }
    const { t, i18n } = useTranslation();

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
    return (
        <section className="carousel-section">
          <div className="carousel-container-outer">
            <div className="carousel">
              {slides.map((s , i) => (
                <div
                  className={i === curr ? "carousel-item active" : "carousel-item"}
                  style={{order: i  === curr ? '1' : '2'}}
                  key={i}
                  aria-hidden={i !== curr}
                >
                  <div className="cover">
                      <ReactPlayer
                        className='react-player'
                        url={s.video}
                        width='100%'
                        height='100%'
                      />
                    <div className="detail" onClick={ () => setOpen(!open)}>{t('detail')}</div>

                  </div>

                  <div className="info">
                    
                    <div className="info-detail">
                      <h1> {t(`${s.title}`)}</h1>
                      <div className="hashtag">{s.tag}</div>
                      {/* <h2>{s.subtitle}</h2> */}
                      <div className="borderLine"></div>
                      <div className="description">{t(`${s.description}`)}</div>
                      
                    </div>
                    <div className="btnGrp">
                      <a href="https://www.kkday.com/zh-tw/product/126021?cid=12838" target="__blank" className="btn blue">{t('order_ticket')}</a>
                    </div>

                  </div>
                  <div className={`moreInfo ${i === curr && open ? "show" : " "}`}>
                    <div className="moreInfo-content">
                      <div className="moreInfo-content-album">
                        {s.images.map((d,idx) =>(
                            <div key={idx}><img src={process.env.PUBLIC_URL+'/images/'+d} alt=""/></div>
                          ))}
                      </div>
                      <div className="moreInfo-content-desc">
                        {s.creativeidea ?
                          <div>
                            <div className="title">{t('creativeidea_title')}</div>
                            {t(`${s.creativeidea}`)}
                          </div> : ''}
                        {s.credit?
                          <div dangerouslySetInnerHTML={ {__html: s.credit.replace(/(?:\r\n|\r|\n)/g, '<br />')} }>
                          </div> : ''}
                      </div>

                    </div>


                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="navBtnGrp">
            <div className="gotoPrev" onClick={()=>goToPrev()}><img src={arrowRight} alt=""/></div>
            <div className="gotoNext" onClick={()=>goToNext()}><img src={arrowRight} alt=""/></div>
          </div>

        </section>
    )
}

export default Carousel

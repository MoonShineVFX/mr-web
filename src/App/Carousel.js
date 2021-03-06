import React, { useEffect, useState }  from 'react'
import arrowRight  from '../images/right-arrow.svg'
import HoverVideoPlayer from 'react-hover-video-player';
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next';
function Carousel ({slides}) {
    const [open, setOpen] = useState(false)
    const [curr, setCurr] = React.useState(0);
    const [currData, setCurrData] = React.useState("");
    const { t, i18n } = useTranslation();
    const { length } = slides;

    const goToNext = () => {
      setCurr(curr === length - 1 ? 0 : curr + 1 );
      setCurrData(slides[curr === length - 1 ? 0 : curr + 1])
    }
    const goToPrev = () => {
      setCurr(curr <= 0 ?  length-1 : curr - 1 );
      setCurrData(slides[curr <= 0 ?  length-1 : curr - 1])

    }
    
    useEffect(()=>{
      setCurrData(slides[0])
    },[])

    console.log(currData)
    return (
        <section className="carousel-section">
          <div className="carousel-container-outer">
            <div className="carousel">
 
                <div
                  className="carousel-item"
                  key={currData.title}
                >
                  <div className="cover">
                      <ReactPlayer
                        
                        className='react-player'
                        url={currData.video}
                        width='100%'
                        height='100%'
                        controls
                        loop
                        config={{
                          youtube: {
                            playerVars: { rel: 0,ecver: 2, showinfo:0 }
                          }
                        }}
                      />
                    {/* <div className="detail" onClick={ () => setOpen(!open)}>{t('detail')}</div> */}

                  </div>

                  <div className="info">
                    
                    <div className="info-detail">
                      <h1> {t(`${currData.title}`)}</h1>
                      <div className="hashtag">{currData.tag}</div>
                      {/* <h2>{s.subtitle}</h2> */}
                      <div className="borderLine"></div>
                      <div className="description">{t(`${currData.description}`)}</div>
                      
                    </div>
                    <div className="btnGrp">
                      <a href="https://www.kkday.com/zh-tw/product/126021?cid=12838" target="__blank" className="btn blue">{t('order_ticket')}</a>
                    </div>

                  </div>
                  <div className={`moreInfo show`}>
                    <div className="moreInfo-content">
                      <div className="moreInfo-content-album">
                        {
                          currData ? 
                          currData.images.map((item,index)=>{
                            return(
                              <div key={index}><img src={process.env.PUBLIC_URL+'/images/'+item} alt=""/></div>
                            )
                          }):null
                        }
             
                      </div>
                      <div className="moreInfo-content-desc">
                        {currData.creativeidea ?
                          <div>
                            <div className="title">{t('creativeidea_title')}</div>
                            {t(`${currData.creativeidea}`)}
                          </div> : ''}
                        {currData.credit?
                          <div dangerouslySetInnerHTML={ {__html: currData.credit.replace(/(?:\r\n|\r|\n)/g, '<br />')} }>
                          </div> : ''}
                      </div>

                    </div>


                  </div>
                </div>
 
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

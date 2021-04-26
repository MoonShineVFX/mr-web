import React, { useState }  from 'react'
import arrowRight  from '../images/right-arrow.svg'
import HoverVideoPlayer from 'react-hover-video-player';
function Carousel( {slides}) {
    const [ open, setOpen ] = useState(false)
    const [curr, setCurr] = React.useState(0);
    const { length } = slides;

    console.log(curr);
    const goToNext = () => {
      setCurr(curr === length - 1 ? 0 : curr + 1 );
      setOpen(false)
    }
    const goToPrev = () => {
      setCurr(curr <= 0 ?  length-1 : curr - 1 );
      setOpen(false)

    }

    // React.useEffect(() => {
    //   setTimeout(goToNext, 3200)
    // })
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
                  key={s.title}
                  aria-hidden={i !== curr}
                >
                  <div 
                    className="cover"
                    // style={{backgroundImage: "url(" + process.env.PUBLIC_URL+'/images/' + s.image + ")"}}
                    >
                      <HoverVideoPlayer
                        className="hovervideo"
                        videoSrc={process.env.PUBLIC_URL+'/images/'+s.video}
                        pausedOverlay={
                          <img src={process.env.PUBLIC_URL+'/images/'+ s.cover} alt={s.title} />
                        }
                        loadingOverlay={
                          <div className="loading-spinner-overlay" />
                        }
                      />
                    <div className="detail" onClick={ () => setOpen(!open)}>詳情</div>
                    {/* <img src={process.env.PUBLIC_URL+'/images/' + s.image} alt="" /> */}

                  </div>
                  
                  <div className="info"> 
                    <div className="hashtag">{s.tag}</div>
                    <div className="info-detail">
                      <h1>{s.title}</h1>
                      <h2>{s.subtitle}</h2>
                      <div className="borderLine"></div>
                      <div className="description">{s.description}</div>
                    </div>
                    <div className="btnGrp">
                      <a href="https://www.surveycake.com/s/04M19" target="_blank" className="btn blue">
                        預約參觀 <br/>
                        <span>*是否預約成功，皆以電子郵件通知為主</span>
                      </a>
                      
                      {/* <a href="/" className="btn white">購票連結</a> */}
                    </div>
                    
                  </div>
                  <div className={`moreInfo ${i === curr && open ? "show" : " "}`}>
                    <div className="moreInfo-content">
                      <div className="moreInfo-content-album">
                        {s.images.map((d,i) =>(
                            <div><img src={process.env.PUBLIC_URL+'/images/'+d} alt=""/></div>
                          ))}
                      </div>
                      <div className="moreInfo-content-desc">
                        {s.creativeidea ? 
                          <div>
                            <div className="title">創作理念</div> 
                            {s.creativeidea}
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

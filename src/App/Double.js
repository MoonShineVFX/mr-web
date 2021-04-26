import React from 'react'
import r2 from '../images/r2.png'

function Double() {
    return (
      <div className="double container" data-aos="fade-up">
        <div className="double-item"  >
          <div className="double-item-bg" style={{backgroundImage: "url(" + process.env.PUBLIC_URL+'/images/double/r1.png'+ ")"}}></div>
          <div className="title" >混合<br/>實境</div>
          {/* <img src={r2} alt=""/> */}
          <div className="caption">混合實境是利⽤頭戴式設備 (例如Holo-lens)，將虛擬空間或物件疊加在真實世界中，在混合實境的體驗中，觀者可以在保有真實環境的狀態下，與虛擬世界互動。</div>
        </div>
        <div className="double-item">
          <div className="double-item-bg" style={{backgroundImage: "url(" + process.env.PUBLIC_URL+'/images/double/r2.png'+ ")"}}></div>
          <div className="title" >沉浸式<br/>投影</div>
          {/* <img src={r2} alt=""/> */}
          <div className="caption">沈浸式投影是被大片投影所包圍的、奇幻且多變的場域。觀者能親自走入作品中，並且與之互動，成為作品的一部份。</div>
        </div>
      </div>
    )
}

export default Double

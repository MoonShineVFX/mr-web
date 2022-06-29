import React from 'react'

function FbVideo() {
    return (
        <div className="container fbvideo-container">
          <div className="fbvideo-content">
            <iframe 
              src="https://www.youtube.com/embed/TaPtU2ddLNA?rel=0" 
              width="448" 
              height="252"
              style={{border:"none", overflow:"hidden", width:'100%'}}
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
            </iframe>
          </div>
            

        </div>
    )
}

export default FbVideo

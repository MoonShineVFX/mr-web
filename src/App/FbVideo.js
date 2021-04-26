import React from 'react'

function FbVideo() {
    return (
        <div className="container fbvideo-container">
          <div className="fbvideo-content">
            <iframe 
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FMoondreamReality%2Fvideos%2F272218814545226%2F&width=500&show_text=false&height=282&appId" 
                width="448" 
                height="252"
                style={{border:"none", overflow:"hidden", width:'100%', minHeight:"414px"}}
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true}
            >

            </iframe>
          </div>
            

        </div>
    )
}

export default FbVideo

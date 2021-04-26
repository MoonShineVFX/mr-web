import React from 'react'
import { ReactComponent as Fbicon } from '../images/facebook-f-brands.svg'
import { ReactComponent as Igicon } from '../images/instagram-brands.svg'

 
function Social() {
    return (
      <div className="social">
        <ul>
          <li> 
            <a href="https://www.facebook.com/MoondreamReality/" target="_blank" rel="noreferrer">
              <Fbicon className="social-icon" alt="icon" /> 
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/moondreamreality_tw/" target="_blank" rel="noreferrer">
              <Igicon className="social-icon" alt="icon" />
            </a>
          </li>
        </ul>
      </div>
    )
}

export default Social

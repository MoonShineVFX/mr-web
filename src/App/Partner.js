import React from 'react'
function Partner( props) {
    return (
        <div className="partner container">
          <div className="title" data-aos="fade-right">
            {props.title}
          </div>
          <div className="partner-lists" data-aos="fade">
            <ul className="partner-lists-ul">
              {props.logos.map((d,i)=>(
                <li>
                  <a href={d.href ? d.href: '/'} target="_blank">
                    <img className={d.classname ? d.classname  : ''} src={process.env.PUBLIC_URL+d.images} alt="" />
                  </a>
                  
                </li>
              ))}
            </ul>
          </div>


        </div>
    )
}

export default Partner

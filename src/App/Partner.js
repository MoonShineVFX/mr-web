import React from 'react';

function Partner( props) {
    return (
        <div className="partner container">
          <div className="title" data-aos="fade-right">
            {props.title}
          </div>
          <div className="partner-lists" data-aos="fade">
            <ul className="partner-lists-ul">
              {props.logos.map((d,i)=>(
                <li key={i}>
                  <a href={d.href ? d.href: '/'} target="__blank">
                    <img className={d.classname ? d.classname  : ''} src={'https://moonshine.b-cdn.net/msweb/moondream/logo/'+d.images} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
    )
}

export default Partner;

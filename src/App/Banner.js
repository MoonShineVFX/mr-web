import React from 'react'
import { useTranslation,Trans} from 'react-i18next';
function Banner() {
    return (
        <div className="banner" data-aos="fade-up" data-aos-duration="1000">
            <Trans i18nKey={'banner'}>
                <div className="banner-text text1">前所未⾒的感官體驗</div> 
                <div className="banner-text text2">夢境中才能實現的夢幻場景，都在這裡成為現實</div>
            </Trans>

        </div>
    )
}

export default Banner

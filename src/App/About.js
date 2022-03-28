import React from 'react'
import { useTranslation,Trans  } from 'react-i18next';
function About() {
  const { t, i18n } = useTranslation();
    return (
        <div className="about container">
            <div className="title" data-aos="fade-up">
              <Trans i18nKey="about_title"></Trans>
            </div>
            <div className="description" data-aos="fade-up">
              <Trans i18nKey="about_desc"></Trans>
            </div>
        </div>
    )
}

export default About

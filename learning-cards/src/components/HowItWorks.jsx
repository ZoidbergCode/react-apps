import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Russian' },
  uk: { nativeName: 'Ukrain' },
};

const HowItWorks = () => {
  const { t, i18n } = useTranslation();
  const [langsStatus, setLangsStatus] = useState('none');
  const openLangs = () => {
    langsStatus === 'none' ? setLangsStatus('flex') : setLangsStatus('none');
  };
  const chooseLang = (value) => {
    i18n.changeLanguage(value);
    setLangsStatus('none');
  };
  return (
    <div className="howitworks">
      <div>
        <span onClick={openLangs} className="langs-spoiler">
          <Trans i18nKey="hiw.lang"></Trans>
        </span>
        <div style={{ display: langsStatus }} className="langs">
          {Object.keys(lngs).map((lng) => (
            <button
              className="langs__button"
              type="submit"
              key={lng}
              style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
              onClick={() => chooseLang(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      </div>
      <div className="howitworks__container">
        <h2>
          <Trans i18nKey="hiw.title"></Trans>
        </h2>
        <p>
          <Trans i18nKey="hiw.desc1"></Trans>
        </p>
        <p>
          <Trans i18nKey="hiw.desc2"></Trans>
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;

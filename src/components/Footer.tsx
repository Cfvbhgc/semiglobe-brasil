import React from 'react';
import translations, { Lang } from '../i18n';

interface FooterProps {
  lang: Lang;
}

// Simple footer with brand info
const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">SEMIGLOBE</span>
          <span className="footer__tagline">{t.tagline}</span>
        </div>
        <p className="footer__rights">{t.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;

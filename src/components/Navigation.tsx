import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import translations, { Lang } from '../i18n';

interface NavigationProps {
  lang: Lang;
  onToggleLang: () => void;
}

// Navigation bar — hides on scroll down, shows on scroll up
function Navigation({ lang, onToggleLang }: NavigationProps) {
  const t = translations[lang].nav;
  const navRef = useRef<HTMLElement>(null);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (!navRef.current) return;

      if (current > lastScroll && current > 100) {
        gsap.to(navRef.current, { y: -100, duration: 0.4, ease: 'power2.inOut' });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.4, ease: 'power2.inOut' });
      }
      setLastScroll(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav__logo">SEMIGLOBE</div>
      <div className="nav__links">
        <button className="nav__link" onClick={() => scrollTo('about')}>{t.about}</button>
        <button className="nav__link" onClick={() => scrollTo('products')}>{t.products}</button>
        <button className="nav__link" onClick={() => scrollTo('philosophy')}>{t.philosophy}</button>
        <button className="nav__link" onClick={() => scrollTo('contact')}>{t.contact}</button>
        <button className="nav__lang" onClick={onToggleLang}>
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;

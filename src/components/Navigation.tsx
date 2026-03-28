import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import translations, { Lang } from '../i18n';

interface NavigationProps {
  lang: Lang;
  onToggleLang: () => void;
}

// Navigation bar — hides on scroll down, shows on scroll up. Burger menu on mobile.
function Navigation({ lang, onToggleLang }: NavigationProps) {
  const t = translations[lang].nav;
  const navRef = useRef<HTMLElement>(null);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleLang = () => {
    onToggleLang();
  };

  return (
    <>
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
        <button
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Fullscreen mobile overlay */}
      <div className={`nav__overlay ${menuOpen ? 'nav__overlay--open' : ''}`}>
        <button className="nav__overlay-link" onClick={() => scrollTo('about')}>{t.about}</button>
        <button className="nav__overlay-link" onClick={() => scrollTo('products')}>{t.products}</button>
        <button className="nav__overlay-link" onClick={() => scrollTo('philosophy')}>{t.philosophy}</button>
        <button className="nav__overlay-link" onClick={() => scrollTo('contact')}>{t.contact}</button>
        <button className="nav__overlay-lang" onClick={handleToggleLang}>
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>
    </>
  );
}

export default Navigation;

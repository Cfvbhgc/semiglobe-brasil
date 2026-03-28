import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import translations, { Lang } from '../i18n';

interface HeroProps {
  lang: Lang;
}

// Fullscreen hero with animated light streaks and large typography
const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(titleRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4 })
      .fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.6')
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4');
  }, []);

  const scrollDown = () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" ref={sectionRef}>
      {/* Animated light streaks */}
      <div className="hero__streaks">
        <div className="hero__streak hero__streak--1" />
        <div className="hero__streak hero__streak--2" />
        <div className="hero__streak hero__streak--3" />
        <div className="hero__streak hero__streak--4" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title" ref={titleRef}>SEMIGLOBE</h1>
        <p className="hero__subtitle" ref={subtitleRef}>
          <span className="hero__brasil">Brasil</span>
          <span className="hero__tagline">{t.subtitle}</span>
        </p>
        <button className="hero__cta" ref={ctaRef} onClick={scrollDown}>
          {t.cta}
          <span className="hero__cta-arrow">&#8595;</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;

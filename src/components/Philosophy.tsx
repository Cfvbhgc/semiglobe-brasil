import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import translations, { Lang } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

interface PhilosophyProps {
  lang: Lang;
}

// Background images that rotate while text stays pinned (desktop only)
const bgImages = [
  '/images/divider-2.jpg',
  '/images/brazil-landscape-1.jpg',
  '/images/brazil-landscape-2.jpg',
];

// Philosophy pin section — pinned on desktop, stacked on mobile
const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
  const t = translations[lang].philosophy;
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      if (prefersReducedMotion) return;

      const panels = gsap.utils.toArray<HTMLElement>('.philosophy__bg-panel');
      const lines = gsap.utils.toArray<HTMLElement>('.philosophy__line');
      const totalPanels = panels.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalPanels * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });

      // Crossfade backgrounds
      panels.forEach((panel, i) => {
        if (i === 0) return;
        tl.fromTo(panel,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          i - 1
        );
      });

      // Animate manifesto lines
      lines.forEach((line, i) => {
        const lineStart = (i / lines.length) * totalPanels;
        tl.fromTo(line,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5 },
          lineStart
        );
      });
    });

    mm.add('(max-width: 768px)', () => {
      if (prefersReducedMotion) return;

      // Simple fade-in for lines on mobile
      gsap.utils.toArray<HTMLElement>('.philosophy__line').forEach((line) => {
        gsap.fromTo(line,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6,
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    const handleResize = () => checkMobile();
    window.addEventListener('resize', handleResize);

    return () => {
      mm.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className={`philosophy ${isMobile ? 'philosophy--mobile' : 'philosophy--desktop'}`}
      id="philosophy"
      ref={sectionRef}
    >
      {/* Background images */}
      <div className="philosophy__backgrounds">
        {bgImages.map((src, i) => (
          <div
            className="philosophy__bg-panel"
            key={i}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="philosophy__overlay" />
      </div>

      {/* Content */}
      <div className="philosophy__content">
        <h2 className="philosophy__heading">{t.heading}</h2>
        {t.manifesto.map((line, i) => (
          <p className="philosophy__line" key={i}>{line}</p>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;

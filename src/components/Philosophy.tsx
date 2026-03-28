import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import translations, { Lang } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

interface PhilosophyProps {
  lang: Lang;
}

// Background images that rotate while text stays pinned
const bgImages = [
  '/images/brazil-landscape-1.jpg',
  '/images/brazil-landscape-2.jpg',
  '/images/plantation.jpg',
];

// Philosophy pin section — text stays fixed, backgrounds change on scroll
const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
  const t = translations[lang].philosophy;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.philosophy__bg-panel');
      const lines = gsap.utils.toArray<HTMLElement>('.philosophy__line');
      const totalPanels = panels.length;

      // Create a single timeline pinned to the section
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

      // Crossfade backgrounds — each transition takes 1 unit, total = totalPanels - 1 transitions
      panels.forEach((panel, i) => {
        if (i === 0) return;
        tl.fromTo(panel,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          i - 1  // position in the timeline
        );
      });

      // Animate manifesto lines across the full scroll
      lines.forEach((line, i) => {
        const lineStart = (i / lines.length) * totalPanels;
        tl.fromTo(line,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5 },
          lineStart
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="philosophy" id="philosophy" ref={sectionRef}>
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

      {/* Pinned text content */}
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

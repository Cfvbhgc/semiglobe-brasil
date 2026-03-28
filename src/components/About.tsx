import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import translations, { Lang } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  lang: Lang;
}

// About section with large serif quotes and fade-in animations
const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.about__text').forEach((el) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 50%', toggleActions: 'play none none reverse' },
          }
        );
      });

      gsap.fromTo('.about__quote',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.2,
          scrollTrigger: { trigger: '.about__quote', start: 'top 80%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo('.about__image',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: '.about__image', start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__grid">
        <div className="about__col about__col--text">
          <h2 className="about__heading">{t.heading}</h2>
          <p className="about__text">{t.p1}</p>
          <p className="about__text">{t.p2}</p>
          <p className="about__text">{t.p3}</p>
        </div>
        <div className="about__col about__col--visual">
          <div className="about__image">
            <img src="/images/coffee-beans-1.jpg" alt="Coffee beans" loading="lazy" />
          </div>
          <blockquote className="about__quote">
            <p>&ldquo;{t.quote}&rdquo;</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;

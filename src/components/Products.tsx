import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import translations, { Lang } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

interface ProductsProps {
  lang: Lang;
}

// Product images mapped to each card
const productImages = [
  '/images/coffee-beans-1.jpg',
  '/images/coffee-beans-2.jpg',
  '/images/plantation.jpg',
  '/images/luxury-1.jpg',
  '/images/packaging.jpg',
];

// Horizontal scroll section pinned with GSAP ScrollTrigger
function Products({ lang }: ProductsProps) {
  const t = translations[lang].products;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });

      // Fade in each card as it enters viewport
      gsap.utils.toArray<HTMLElement>('.products__card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6,
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.getById?.('horizontalScroll') || undefined,
              start: 'left 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="products" id="products" ref={sectionRef}>
      <div className="products__track" ref={trackRef}>
        <div className="products__intro">
          <h2 className="products__heading">{t.heading}</h2>
        </div>
        {t.items.map((item, index) => (
          <div className="products__card" key={index}>
            <div className="products__card-image">
              <img src={productImages[index]} alt={item.name} loading="lazy" />
            </div>
            <div className="products__card-info">
              <span className="products__card-number">0{index + 1}</span>
              <h3 className="products__card-name">{item.name}</h3>
              <p className="products__card-desc">{item.description}</p>
              <span className="products__card-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import translations, { Lang } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

interface ContactProps {
  lang: Lang;
}

// Split-screen contact form
function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact__left',
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
      gsap.fromTo('.contact__right',
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    alert(lang === 'pt' ? 'Mensagem enviada!' : 'Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__grid">
        <div className="contact__left">
          <h2 className="contact__heading">{t.heading}</h2>
          <div className="contact__info">
            {t.info.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="contact__image">
            <img src="/images/luxury-2.jpg" alt="Semiglobe" loading="lazy" />
          </div>
        </div>
        <div className="contact__right">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <input
                type="text"
                placeholder={t.name}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="contact__field">
              <input
                type="email"
                placeholder={t.email}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="contact__field">
              <textarea
                placeholder={t.message}
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="contact__submit">{t.send}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

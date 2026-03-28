import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { translations, Language } from './i18n';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const productImages = [
  '/images/coffee-beans.jpeg',
  '/images/premium-packaging.jpeg',
  '/images/luxury-product.jpeg',
  '/images/coffee-farm.jpeg',
  '/images/luxury-lifestyle.jpeg',
];

const philosophyImages = [
  '/images/coffee-farm.jpeg',
  '/images/tropical-forest.jpeg',
  '/images/brazilian-culture.jpeg',
];

function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const t = translations[lang];

  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const productsScrollRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Scroll handler for nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax
      if (heroBgRef.current) {
        gsap.to(heroBgRef.current, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // About section fade-in
      if (aboutTextRef.current) {
        gsap.fromTo(
          aboutTextRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (aboutImageRef.current) {
        gsap.fromTo(
          aboutImageRef.current,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Products horizontal scroll on vertical scroll
      if (productsScrollRef.current && productsRef.current) {
        const scrollWidth = productsScrollRef.current.scrollWidth - productsScrollRef.current.clientWidth;
        gsap.to(productsScrollRef.current, {
          scrollLeft: scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: productsRef.current,
            start: 'top 20%',
            end: `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }

      // Philosophy section — track scroll progress to change slides
      if (philosophyRef.current) {
        ScrollTrigger.create({
          trigger: philosophyRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.33) {
              setActivePhilosophy(0);
            } else if (progress < 0.66) {
              setActivePhilosophy(1);
            } else {
              setActivePhilosophy(2);
            }
          },
        });
      }

      // Contact fade-in
      if (contactRef.current) {
        gsap.fromTo(
          contactRef.current.querySelector('.contact-inner'),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contactRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
    setMobileMenuOpen(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="App">
      {/* NAV */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">SEMIGLOBE</div>
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>{t.nav.about}</a></li>
          <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>{t.nav.products}</a></li>
          <li><a href="#philosophy" onClick={(e) => { e.preventDefault(); scrollToSection('philosophy'); }}>{t.nav.philosophy}</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>{t.nav.contact}</a></li>
          <li>
            <button className="lang-toggle" onClick={toggleLang}>
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </li>
        </ul>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg" ref={heroBgRef} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/brazil-nature.jpeg)` }}></div>
        <div className="hero-gradient"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h1 className="hero-title">
            SEMIGLOBE<br />
            <span className="gold">BRASIL</span>
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <button className="hero-cta" onClick={() => scrollToSection('about')}>
            {t.hero.cta}
          </button>
        </motion.div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about" ref={aboutRef}>
        <div className="about-inner">
          <div className="about-text" ref={aboutTextRef}>
            <h2>{t.about.title}</h2>
            <div className="gold-line"></div>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
          <div className="about-image" ref={aboutImageRef}>
            <img src="/images/coffee-beans.jpeg" alt="Brazilian coffee" />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products" id="products" ref={productsRef}>
        <div className="products-header">
          <h2>{t.products.title}</h2>
          <div className="gold-line"></div>
          <p>{t.products.subtitle}</p>
        </div>
        <div className="products-scroll" ref={productsScrollRef}>
          {t.products.items.map((item, i) => (
            <motion.div
              className="product-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={productImages[i]} alt={item.name} />
              <div className="product-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="product-price">{item.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy" id="philosophy" ref={philosophyRef}>
        <div className="philosophy-pin">
          <AnimatePresence mode="wait">
            <motion.div
              className="philosophy-bg"
              key={activePhilosophy}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={philosophyImages[activePhilosophy]} alt="" />
              <div className="overlay"></div>
            </motion.div>
          </AnimatePresence>
          <div className="philosophy-content">
            <h2>{t.philosophy.title}</h2>
            <div className="gold-line"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhilosophy}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3>{t.philosophy.slides[activePhilosophy].heading}</h3>
                <p>{t.philosophy.slides[activePhilosophy].text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact" ref={contactRef}>
        <div className="contact-inner">
          <h2>{t.contact.title}</h2>
          <div className="gold-line"></div>
          <p className="contact-subtitle">{t.contact.subtitle}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={formData.name ? 'filled' : ''}
                required
              />
              <label>{t.contact.name}</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={formData.email ? 'filled' : ''}
                required
              />
              <label>{t.contact.email}</label>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={formData.message ? 'filled' : ''}
                required
              />
              <label>{t.contact.message}</label>
            </div>
            <button type="submit" className="form-submit">
              {t.contact.send}
            </button>
          </form>
          {submitted && (
            <motion.p
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {t.contact.success}
            </motion.p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-logo">SEMIGLOBE BRASIL</div>
        <p className="footer-tagline">{t.footer.tagline}</p>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LI</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">TW</a>
        </div>
        <p className="footer-bottom">&copy; 2024 Semiglobe Brasil. {t.footer.rights}</p>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Lang } from './i18n';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Main application component — cinematic premium coffee brand landing
function App() {
  const [lang, setLang] = useState<Lang>('pt');

  const toggleLang = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <div className="app">
      <Navigation lang={lang} onToggleLang={toggleLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Products lang={lang} />
      <Philosophy lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;

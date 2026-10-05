import React from 'react';
import SEO from './components/SEO.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="bg-natural-50 dark:bg-natural-950 text-natural-900 dark:text-natural-100 min-h-screen transition-colors duration-300">
      {/* Konfigurasi Meta SEO & OG Tags */}
      <SEO
        title="RASMANTECH — Rasman Juliadi | Full-Stack Developer"
        description="Portofolio resmi Rasman Juliadi (RASMANTECH). Pengembang web & mobile berbasis React, Tailwind CSS, Node.js, dan PostgreSQL."
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Send, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Beranda', id: 'home' },
    { name: 'Tentang', id: 'about' },
    { name: 'Layanan', id: 'services' },
    { name: 'Portofolio', id: 'portfolio' },
    { name: 'Kontak', id: 'contact' }
  ];

  const updateTitle = (sectionId) => {
    const activeLink = navLinks.find(link => link.id === sectionId);
    if (activeLink) {
      document.title = `${activeLink.name} — RASMANTECH`;
    } else {
      document.title = `RASMANTECH — Portofolio`;
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `/${id}`);
      setActiveSection(id);
      updateTitle(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollPosition = window.scrollY + 200;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.id);
            updateTitle(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-natural-50/85 dark:bg-natural-950/85 backdrop-blur-md border-b border-natural-200/60 dark:border-natural-800/60 shadow-soft py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-natural-900 dark:text-natural-100 shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent dark:text-emerald-400">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="bg-gradient-to-r from-natural-900 via-natural-700 to-accent dark:from-natural-100 dark:via-natural-200 dark:to-emerald-400 bg-clip-text text-transparent">
            RASMANTECH
          </span>
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/60 dark:bg-natural-900/60 border border-natural-200/60 dark:border-natural-800/60 rounded-full px-3 py-1.5 backdrop-blur-md shadow-soft">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 relative ${
                  isActive
                    ? 'text-accent dark:text-emerald-400 bg-accent/10 font-semibold'
                    : 'text-natural-600 dark:text-natural-300 hover:text-natural-900 dark:hover:text-natural-100 hover:bg-natural-200/50 dark:hover:bg-natural-800/50'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent dark:bg-emerald-400 rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button, Theme Toggle & Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/80 dark:bg-natural-900/80 border border-natural-200 dark:border-natural-800 text-natural-700 dark:text-natural-300 hover:text-accent dark:hover:text-emerald-400 flex items-center justify-center transition-colors focus:outline-none"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-natural-700" />
            )}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden lg:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-200 shadow-md shadow-accent/20 active:scale-95"
          >
            <span>Hubungi Saya</span>
            <Send className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/80 dark:bg-natural-900/80 border border-natural-200 dark:border-natural-800 text-natural-700 dark:text-natural-300 hover:text-accent dark:hover:text-emerald-400 flex items-center justify-center transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Navigation - Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100 border-b border-natural-200 dark:border-natural-800' : 'max-h-0 opacity-0'
        } bg-natural-50/95 dark:bg-natural-950/95 backdrop-blur-xl px-6`}
      >
        <div className="py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-accent/10 text-accent dark:text-emerald-400 border-l-2 border-accent dark:border-emerald-400 font-semibold'
                    : 'text-natural-700 dark:text-natural-300 hover:bg-natural-200/50 dark:hover:bg-natural-800/50 hover:text-accent dark:hover:text-emerald-400'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-dark text-white font-semibold py-2.5 rounded-lg text-sm transition shadow-md shadow-accent/20"
            >
              <span>Hubungi Saya</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

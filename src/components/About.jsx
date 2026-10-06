import React, { useRef, useState, useEffect } from 'react';
import { User, CheckCircle2, Sparkles, Terminal, ChevronLeft, ChevronRight } from 'lucide-react';
import { aboutContent, skillsData } from '../data';

// 1. Impor otomatis semua gambar dari folder src/assets/images/
const imageModules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}', { eager: true });

// Ambil gambar spesifik image_1 dari folder assets/images
const bgImageEntry = Object.entries(imageModules).find(([path]) => path.includes('image_1'));
const bgImage = bgImageEntry ? bgImageEntry[1].default : null;

const profileImages = Object.values(imageModules).map((mod) => mod.default);

export default function About() {
  const skillsRef = useRef(null);
  const highlightsRef = useRef(null);

  // State navigasi tombol Skills
  const [canScrollLeftSkills, setCanScrollLeftSkills] = useState(false);
  const [canScrollRightSkills, setCanScrollRightSkills] = useState(true);

  // State navigasi tombol Highlights
  const [canScrollLeftHighlights, setCanScrollLeftHighlights] = useState(false);
  const [canScrollRightHighlights, setCanScrollRightHighlights] = useState(true);

  // State melacak indeks foto profil
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 1. Auto-slide Foto Profil (Tiap 5 detik)
  useEffect(() => {
    if (profileImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 2. Auto-slide Highlights Ringkasan Diri (Tiap 3 detik di mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      if (highlightsRef.current && window.innerWidth < 640) {
        const { scrollLeft, scrollWidth, clientWidth } = highlightsRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 5) {
          highlightsRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          highlightsRef.current.scrollBy({ left: 260, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 3. Auto-slide Kemampuan Teknis (Tiap 3 detik)
  useEffect(() => {
    const interval = setInterval(() => {
      if (skillsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = skillsRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 5) {
          skillsRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          skillsRef.current.scrollBy({ left: 260, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Cek posisi scroll Kemampuan Teknis
  const checkSkillsScroll = () => {
    if (skillsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = skillsRef.current;
      setCanScrollLeftSkills(scrollLeft > 0);
      setCanScrollRightSkills(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  // Cek posisi scroll Highlights Ringkasan Diri
  const checkHighlightsScroll = () => {
    if (highlightsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = highlightsRef.current;
      setCanScrollLeftHighlights(scrollLeft > 0);
      setCanScrollRightHighlights(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkSkillsScroll();
    checkHighlightsScroll();
    const handleResize = () => {
      checkSkillsScroll();
      checkHighlightsScroll();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fungsi navigasi manual scroll
  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="scroll-mt-16 sm:scroll-mt-24 pt-8 pb-12 sm:pt-16 sm:pb-20 px-4 sm:px-6 bg-natural-50/50 dark:bg-natural-950/50 relative text-natural-900 dark:text-natural-100 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header Compact */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent dark:text-emerald-400 text-[11px] sm:text-xs font-semibold mb-2">
            <User className="w-3.5 h-3.5" />
            <span>Mengenal Lebih Dekat</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-natural-900 dark:text-natural-50 tracking-tight">
            Tentang Saya
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">

          {/* Card 1: Full Card Slideshow Photo (5 cols) */}
          <div className="md:col-span-5 lg:col-span-5 glass-card min-h-[340px] sm:min-h-[400px] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group shadow-soft">

            {/* Rendisi Foto Bergantian (Auto-Slide Fade 5s) */}
            {profileImages.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Profile Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ${
                  index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-natural-950/90 via-natural-950/30 to-natural-950/20 pointer-events-none z-10"></div>

            {/* Badge Status */}
            <div className="relative z-20 self-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-medium border border-emerald-500/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Open to Opportunities
              </div>
            </div>

            {/* Judul & Indikator Slide */}
            <div className="relative z-20 text-left space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide drop-shadow-md">
                {aboutContent.title}
              </h3>

              {profileImages.length > 1 && (
                <div className="flex items-center gap-1.5 pt-1">
                  {profileImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? 'w-5 bg-emerald-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Ringkasan Bio & Highlights (Dengan Latar Belakang Blur) */}
          <div className="md:col-span-7 lg:col-span-7 glass-card p-5 sm:p-6 flex flex-col justify-between shadow-soft space-y-5 relative overflow-hidden">

            {/* Latar Belakang Gambar Blur untuk Card Ringkasan Diri */}
            {bgImage && (
              <>
                <img
                  src={bgImage}
                  alt="Background Ringkasan Diri"
                  className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30 pointer-events-none"
                />
                <div className="absolute inset-0 bg-natural-950/50 dark:bg-natural-950/60 pointer-events-none"></div>
              </>
            )}

            <div className="space-y-3.5 relative z-10">
              <div className="flex items-center justify-between border-b border-natural-200/60 dark:border-natural-800/60 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent dark:text-emerald-400" />
                  <h3 className="text-base sm:text-lg font-bold text-natural-900 dark:text-natural-100">
                    Ringkasan Diri
                  </h3>
                </div>

                {/* Tombol Slide Highlights (Tampil khusus di layar mobile) */}
                <div className="flex sm:hidden items-center gap-1.5">
                  <button
                    onClick={() => handleScroll(highlightsRef, 'left')}
                    disabled={!canScrollLeftHighlights}
                    className={`p-1.5 rounded-lg transition-all ${
                      canScrollLeftHighlights
                        ? 'bg-natural-100/80 dark:bg-natural-800/80 hover:bg-accent/20 dark:hover:bg-emerald-400/20 text-natural-700 dark:text-natural-300 cursor-pointer'
                        : 'bg-natural-100/40 dark:bg-natural-800/40 text-natural-400 dark:text-natural-600 opacity-40 cursor-not-allowed'
                    }`}
                    aria-label="Scroll Left Highlights"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleScroll(highlightsRef, 'right')}
                    disabled={!canScrollRightHighlights}
                    className={`p-1.5 rounded-lg transition-all ${
                      canScrollRightHighlights
                        ? 'bg-natural-100/80 dark:bg-natural-800/80 hover:bg-accent/20 dark:hover:bg-emerald-400/20 text-natural-700 dark:text-natural-300 cursor-pointer'
                        : 'bg-natural-100/40 dark:bg-natural-800/40 text-natural-400 dark:text-natural-600 opacity-40 cursor-not-allowed'
                    }`}
                    aria-label="Scroll Right Highlights"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-natural-600 dark:text-natural-300 leading-relaxed drop-shadow-sm">
                {aboutContent.description}
              </p>
            </div>

            {/* List Highlights dengan Auto-scroll 3s di Mobile */}
            <div
              ref={highlightsRef}
              onScroll={checkHighlightsScroll}
              className="flex sm:grid sm:grid-cols-2 gap-2.5 pt-2 overflow-x-auto snap-x snap-mandatory pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10"
            >
              {aboutContent.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[82vw] max-w-[280px] sm:w-auto shrink-0 snap-start flex items-center gap-2.5 p-3 sm:p-2.5 rounded-xl bg-natural-100/70 dark:bg-natural-900/60 backdrop-blur-md border border-natural-200/50 dark:border-natural-800/50 text-xs sm:text-sm shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent dark:text-emerald-400 shrink-0" />
                  <span className="text-natural-800 dark:text-natural-100 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Kemampuan Teknis & Tooling (12 cols) */}
          <div className="md:col-span-12 glass-card p-5 sm:p-6 shadow-soft space-y-4">

            {/* Header Card + Tombol Navigasi Slider */}
            <div className="flex items-center justify-between border-b border-natural-200/60 dark:border-natural-800/60 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent dark:text-emerald-400" />
                <h3 className="text-base sm:text-lg font-bold text-natural-900 dark:text-natural-100">
                  Kemampuan Teknis & Tooling
                </h3>
              </div>

              {/* Tombol Slide Kiri & Kanan */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleScroll(skillsRef, 'left')}
                  disabled={!canScrollLeftSkills}
                  className={`p-1.5 rounded-lg transition-all ${
                    canScrollLeftSkills
                      ? 'bg-natural-100 dark:bg-natural-800 hover:bg-accent/20 dark:hover:bg-emerald-400/20 text-natural-700 dark:text-natural-300 cursor-pointer'
                      : 'bg-natural-100/40 dark:bg-natural-800/40 text-natural-400 dark:text-natural-600 opacity-40 cursor-not-allowed'
                  }`}
                  aria-label="Scroll Left Skills"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleScroll(skillsRef, 'right')}
                  disabled={!canScrollRightSkills}
                  className={`p-1.5 rounded-lg transition-all ${
                    canScrollRightSkills
                      ? 'bg-natural-100 dark:bg-natural-800 hover:bg-accent/20 dark:hover:bg-emerald-400/20 text-natural-700 dark:text-natural-300 cursor-pointer'
                      : 'bg-natural-100/40 dark:bg-natural-800/40 text-natural-400 dark:text-natural-600 opacity-40 cursor-not-allowed'
                  }`}
                  aria-label="Scroll Right Skills"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slider Horizontal tanpa Scrollbar Bawaan */}
            <div
              ref={skillsRef}
              onScroll={checkSkillsScroll}
              className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory pt-1 pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {skillsData.map((skill) => (
                <div
                  key={skill.name}
                  className="w-[220px] sm:w-[260px] shrink-0 snap-start p-3.5 rounded-xl bg-natural-100/50 dark:bg-natural-900/30 border border-natural-200/40 dark:border-natural-800/40 space-y-2"
                >
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-natural-800 dark:text-natural-200 truncate">{skill.name}</span>
                    <span className="text-accent dark:text-emerald-400 font-mono ml-2">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-natural-200 dark:bg-natural-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-accent dark:bg-emerald-400 h-full rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

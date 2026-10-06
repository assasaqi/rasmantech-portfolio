import React from 'react';
import { ArrowRight, Terminal, Mail } from 'lucide-react';
import { personalData } from '../data';

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-28 min-h-screen flex items-center pt-20 pb-10 sm:pt-24 sm:pb-12 px-4 sm:px-6 relative overflow-hidden bg-natural-50/50 dark:bg-natural-950/50 text-natural-900 dark:text-natural-100 transition-colors duration-300"
    >

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[450px] h-[240px] sm:h-[450px] bg-accent/10 dark:bg-emerald-500/10 blur-[70px] sm:blur-[110px] rounded-full pointer-events-none -z-10 max-w-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-10 items-center w-full">

        {/* Left Side: Bio & CTA */}
        <div className="space-y-3 sm:space-y-4 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3 sm:py-1 rounded-full bg-accent/10 border border-accent/20 text-accent dark:text-emerald-400 text-[11px] sm:text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-accent dark:bg-emerald-400 animate-pulse"></span>
            <span>{personalData?.status || "Tersedia untuk Project"}</span>
          </div>

          {/* Heading Compact */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-natural-900 dark:text-natural-50 leading-tight">
            Hai, Saya <br />
            <span className="bg-gradient-to-r from-accent via-emerald-600 to-teal-500 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-200 bg-clip-text text-transparent">
              {personalData?.name || "Rasman Juliadi"}
            </span>
          </h1>

          {/* Bio Compact */}
          <p className="text-natural-600 dark:text-natural-400 text-xs sm:text-base leading-relaxed max-w-lg">
            {personalData?.bio || "Developer Web & Mobile"}
          </p>

          {/* Action Buttons Compact */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1">
            <a
              href="#portfolio"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-accent/20 active:scale-95 text-xs sm:text-sm"
            >
              <span>Lihat Project</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href="#contact"
              className="border border-natural-200 dark:border-natural-800 hover:border-accent/50 bg-white/60 dark:bg-natural-900/60 text-natural-700 dark:text-natural-300 hover:text-accent dark:hover:text-emerald-400 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl transition-all duration-200 text-center active:scale-95 text-xs sm:text-sm"
            >
              Kontak Saya
            </a>
          </div>

          {/* Social Links Dinamis Compact */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-natural-600 dark:text-natural-400 pt-1.5 sm:pt-2">
            <span className="text-[10px] sm:text-[11px] uppercase font-mono tracking-wider text-natural-500 dark:text-natural-400">Ikuti Saya:</span>
            <div className="hidden sm:block h-3.5 w-[1px] bg-natural-200 dark:bg-natural-800"></div>

            <div className="flex items-center gap-2">
              {personalData?.socials?.github && (
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/80 dark:bg-natural-900/80 border border-natural-200 dark:border-natural-800 flex items-center justify-center text-natural-700 dark:text-natural-300 hover:text-accent dark:hover:text-emerald-400 hover:border-accent/40 shadow-sm transition-all duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}

              {personalData?.socials?.linkedin && (
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/80 dark:bg-natural-900/80 border border-natural-200 dark:border-natural-800 flex items-center justify-center text-natural-700 dark:text-natural-300 hover:text-accent dark:hover:text-emerald-400 hover:border-accent/40 shadow-sm transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}

              {personalData?.email && (
                <a
                  href={`mailto:${personalData.email}`}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/80 dark:bg-natural-900/80 border border-natural-200 dark:border-natural-800 flex items-center justify-center text-natural-700 dark:text-natural-300 hover:text-accent dark:hover:text-emerald-400 hover:border-accent/40 shadow-sm transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Terminal Code Visual Compact */}
        <div className="glass-card p-3 sm:p-4 shadow-soft border-natural-200/80 dark:border-natural-800/80 w-full overflow-hidden">
          <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-natural-200/60 dark:border-natural-800/60">
            <div className="w-2 h-2 rounded-full bg-rose-400/80"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400/80"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-400/80"></div>
            <span className="text-[10px] sm:text-xs text-natural-500 dark:text-natural-400 font-mono ml-2 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-accent dark:text-emerald-400"/> developer.js
            </span>
          </div>
          <pre className="text-[10px] sm:text-xs font-mono text-natural-800 dark:text-natural-200 overflow-x-auto leading-relaxed">
            <code>
              <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-amber-600 dark:text-amber-400">developer</span> = &#123;{"\n"}
              {"  "}name: <span className="text-emerald-600 dark:text-emerald-400">'{personalData?.name || "Rasman Juliadi"}'</span>,{"\n"}
              {"  "}role: <span className="text-emerald-600 dark:text-emerald-400">'{personalData?.role || "Full-Stack Developer"}'</span>,{"\n"}
              {"  "}status: <span className="text-emerald-600 dark:text-emerald-400">'{personalData?.status || "Available"}'</span>{"\n"}
              &#125;;
            </code>
          </pre>
        </div>

      </div>
    </section>
  );
}

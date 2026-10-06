import React from 'react';
import { User, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { aboutContent, skillsData } from '../data';
import { assetsData } from '../data/assetsData'; // Impor langsung dari assetsData.js

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 sm:scroll-mt-24 pt-8 pb-12 sm:pt-16 sm:pb-20 px-4 sm:px-6 bg-natural-50/50 dark:bg-natural-950/50 relative text-natural-900 dark:text-natural-100 transition-colors duration-300"
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

          {/* Card 1: Profil Foto & Highlight (4 cols) */}
          <div className="md:col-span-5 lg:col-span-4 glass-card p-5 sm:p-6 flex flex-col items-center text-center relative overflow-hidden group shadow-soft">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-4 rounded-2xl overflow-hidden border-2 border-accent/30 dark:border-emerald-400/30 shadow-lg group-hover:scale-[1.02] transition-transform duration-300">
              <img
                src={assetsData.profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-natural-950/40 via-transparent to-transparent"></div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-2 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Opportunities
            </div>

            <h3 className="text-lg font-bold text-natural-900 dark:text-natural-100">
              {aboutContent.title}
            </h3>
          </div>

          {/* Card 2: Bio & Point Utama (8 cols) */}
          <div className="md:col-span-7 lg:col-span-8 glass-card p-5 sm:p-6 flex flex-col justify-between shadow-soft">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-natural-200/60 dark:border-natural-800/60 pb-3">
                <Sparkles className="w-5 h-5 text-accent dark:text-emerald-400" />
                <h3 className="text-base sm:text-lg font-bold text-natural-900 dark:text-natural-100">
                  Ringkasan Diri
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-natural-600 dark:text-natural-400 leading-relaxed">
                {aboutContent.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4">
              {aboutContent.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-natural-100/60 dark:bg-natural-900/40 border border-natural-200/50 dark:border-natural-800/50 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent dark:text-emerald-400 shrink-0" />
                  <span className="text-natural-800 dark:text-natural-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Skills Set & Badges (12 cols) */}
          <div className="md:col-span-12 glass-card p-5 sm:p-6 shadow-soft space-y-4">
            <div className="flex items-center justify-between border-b border-natural-200/60 dark:border-natural-800/60 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent dark:text-emerald-400" />
                <h3 className="text-base sm:text-lg font-bold text-natural-900 dark:text-natural-100">
                  Kemampuan Teknis & Tooling
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
              {skillsData.map((skill) => (
                <div key={skill.name} className="p-3 rounded-xl bg-natural-100/50 dark:bg-natural-900/30 border border-natural-200/40 dark:border-natural-800/40 space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-natural-800 dark:text-natural-200">{skill.name}</span>
                    <span className="text-accent dark:text-emerald-400 font-mono">{skill.level}%</span>
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

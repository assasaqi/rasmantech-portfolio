import React from 'react';
import { User, Code2, CheckCircle2 } from 'lucide-react';
import { aboutContent, skillsData } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 sm:scroll-mt-24 pt-8 pb-12 sm:pt-16 sm:pb-20 px-4 sm:px-6 bg-natural-50/50 dark:bg-natural-950/50 relative text-natural-900 dark:text-natural-100 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header Compact */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent dark:text-emerald-400 text-[11px] sm:text-xs font-semibold mb-1.5">
            <User className="w-3.5 h-3.5" />
            <span>Mengenal Lebih Dekat</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-natural-900 dark:text-natural-50">Tentang Saya</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-start">
          {/* Bio Text */}
          <div className="space-y-3.5 text-natural-700 dark:text-natural-300">
            <h3 className="text-lg sm:text-xl font-bold text-natural-900 dark:text-natural-100 leading-snug">
              {aboutContent.title}
            </h3>
            <p className="text-xs sm:text-sm text-natural-600 dark:text-natural-400 leading-relaxed">
              {aboutContent.description}
            </p>
            <div className="space-y-2 pt-1">
              {aboutContent.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent dark:text-emerald-400 shrink-0" />
                  <span className="text-natural-800 dark:text-natural-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Bar Compact */}
          <div className="glass-card p-4 sm:p-6 space-y-4 shadow-soft">
            <div className="flex items-center gap-2 pb-2.5 border-b border-natural-200/60 dark:border-natural-800/60">
              <Code2 className="w-4 h-4 text-accent dark:text-emerald-400" />
              <h3 className="text-sm sm:text-base font-bold text-natural-900 dark:text-natural-100">Kemampuan Teknis</h3>
            </div>
            {skillsData.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-natural-800 dark:text-natural-200">{skill.name}</span>
                  <span className="text-accent dark:text-emerald-400 font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-natural-200 dark:bg-natural-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent dark:bg-emerald-400 h-full rounded-full transition-all duration-500" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

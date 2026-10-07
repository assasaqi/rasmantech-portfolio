import React, { useState } from 'react';
import { ExternalLink, FolderGit2, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData, projectsCategories } from '../data';
import ProjectModal from './ProjectModal.jsx';

// Import komponen & style Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Portfolio() {
  const [filter, setFilter] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'Semua'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section
      id="portfolio"
      className="scroll-mt-16 sm:scroll-mt-24 pt-6 pb-10 sm:pt-12 sm:pb-16 px-4 sm:px-6 bg-natural-50/50 dark:bg-natural-950/50 text-natural-900 dark:text-natural-100 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto relative">

        {/* Header Section Compact */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent dark:text-emerald-400 text-[11px] sm:text-xs font-semibold mb-1.5">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Karya Terbaru</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-natural-900 dark:text-natural-50">
            Portofolio Project
          </h2>
          <p className="text-natural-600 dark:text-natural-400 mt-1 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Kumpulan proyek yang pernah saya kerjakan. Klik kartu proyek untuk melihat detail lengkap.
          </p>
        </div>

        {/* Filter Category Dinamis Compact */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 flex-wrap">
          {projectsCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-accent text-white shadow-md shadow-accent/20 font-semibold'
                  : 'bg-white/80 dark:bg-natural-900/80 border border-natural-200 dark:border-natural-800 text-natural-600 dark:text-natural-400 hover:text-natural-900 dark:hover:text-natural-200 hover:border-natural-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tombol Navigasi Slider Kustom Compact */}
        <div className="flex justify-end gap-1.5 mb-2">
          <button
            id="portfolio-prev"
            className="p-1.5 rounded-lg bg-white/80 dark:bg-natural-900/80 border border-natural-200 dark:border-natural-800 text-natural-700 dark:text-natural-300 hover:text-accent dark:hover:text-emerald-400 hover:border-accent/40 shadow-sm transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            id="portfolio-next"
            className="p-1.5 rounded-lg bg-white/80 dark:bg-natural-900/80 border border-natural-200 dark:border-natural-800 text-natural-700 dark:text-natural-300 hover:text-accent dark:hover:text-emerald-400 hover:border-accent/40 shadow-sm transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Swiper Slider Section */}
        <Swiper
          key={filter}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          autoHeight={false}
          navigation={{
            prevEl: '#portfolio-prev',
            nextEl: '#portfolio-next',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="pb-10 !px-1 [&_.swiper-wrapper]:items-stretch"
        >
          {filteredProjects && filteredProjects.map((project) => (
            <SwiperSlide key={project.id} className="!h-auto flex">
              <div
                onClick={() => setSelectedProject(project)}
                className="glass-card flex flex-col justify-between group cursor-pointer hover:border-accent/50 transition-all duration-300 w-full h-full min-h-full overflow-hidden rounded-2xl border border-natural-200/80 dark:border-natural-800/80 bg-white dark:bg-natural-900"
              >
                {/* Header Image Preview (Jika ada) */}
                {project.image && (
                  <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-natural-100 dark:bg-natural-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-[11px] text-white font-medium flex items-center gap-1">
                        <Info className="w-3.5 h-3.5" /> Klik untuk detail
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold text-accent dark:text-emerald-400 bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs text-natural-400 group-hover:text-accent flex items-center gap-1 transition-colors">
                        <Info className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Detail</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-natural-900 dark:text-natural-100 mb-1.5 group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-natural-600 dark:text-natural-400 text-xs leading-relaxed mb-3 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] sm:text-[11px] bg-natural-100 dark:bg-natural-800/60 text-natural-700 dark:text-natural-300 border border-natural-200/60 dark:border-natural-700/50 px-2 py-0.5 rounded font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Link External */}
                    {project.link && project.link !== '#' && (
                      <div className="inline-flex items-center gap-1.5 text-xs text-accent dark:text-emerald-400 font-medium group/link">
                        <span>Lihat Detail Proyek</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Render Modal Detail */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

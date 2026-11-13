import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { PROJECT_CATEGORIES, PROJECTS } from '../data/projects';
import { ProjectMiniScreen } from './ProjectMiniScreen';

export function ProjectsCarousel({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const trackRef = useRef(null);

  const filtered =
    selectedCategory === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 12);
    setCanScrollRight(maxScroll > 12 && el.scrollLeft < maxScroll - 12);
    setScrollProgress(maxScroll > 0 ? Math.min(100, Math.round((el.scrollLeft / maxScroll) * 100)) : 100);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: 'auto' });
    const timer = setTimeout(updateScrollState, 60);
    window.addEventListener('resize', updateScrollState);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [selectedCategory, updateScrollState]);

  const scrollTrack = (direction) => {
    if (!trackRef.current) return;
    const step = 394; // Card width (370) + gap (24)
    trackRef.current.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: 'smooth',
    });
  };

  return (
    <section id="projetos" className="relative py-16 sm:py-24 border-t border-slate-800/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Carrossel de Soluções</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">
              Projetos Desenvolvidos &amp; Em Lançamento
            </h2>
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Navegue pelos projetos desenvolvidos pela <strong className="text-slate-200">SCM Tech</strong> e escolha
              a sua solução. Clique em <strong className="text-cyan-300">Ver Projeto</strong> para explorar as funções,
              módulos e telas interativas de cada sistema.
            </p>
          </div>

          <div className="text-xs font-medium text-slate-400 self-start md:self-auto">
            Mostrando <span className="text-cyan-300 font-bold">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'solução' : 'soluções'}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-7 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {PROJECT_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  active
                    ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/25'
                    : 'border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-cyan-400/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Carousel Track with Prominent Left/Right Overlay Arrows */}
        <div className="relative mt-6 group/carousel">
          {/* Left fade + floating Back Arrow */}
          {canScrollLeft && (
            <div className="carousel-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-16" />
          )}
          <button
            type="button"
            onClick={() => scrollTrack('prev')}
            disabled={!canScrollLeft}
            aria-label="Voltar projetos"
            className={`absolute left-1 sm:-left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md shadow-2xl transition-all duration-200 ${
              canScrollLeft
                ? 'border-cyan-400/60 bg-[#081930]/90 text-cyan-300 hover:scale-110 hover:bg-cyan-400 hover:text-slate-950 shadow-cyan-500/25 cursor-pointer'
                : 'border-slate-800/70 bg-slate-900/40 text-slate-600 opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right fade + floating Next Arrow */}
          {canScrollRight && (
            <div className="carousel-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-16" />
          )}
          <button
            type="button"
            onClick={() => scrollTrack('next')}
            disabled={!canScrollRight}
            aria-label="Ver mais projetos"
            className={`absolute right-1 sm:-right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md shadow-2xl transition-all duration-200 ${
              canScrollRight
                ? 'border-cyan-400/70 bg-[#081930]/95 text-cyan-300 hover:scale-110 hover:bg-cyan-400 hover:text-slate-950 shadow-cyan-500/30 cursor-pointer'
                : 'border-slate-800/70 bg-slate-900/40 text-slate-600 opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards Track */}
          <div
            ref={trackRef}
            onScroll={updateScrollState}
            className="flex gap-6 overflow-x-auto pb-4 px-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {filtered.map((project) => (
              <article
                key={project.id}
                id={project.id}
                className="glass-panel glass-card-hover snap-start shrink-0 w-[86vw] sm:w-[370px] rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <ProjectMiniScreen project={project} />

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="rounded-md border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">{project.category}</span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-900/90 border border-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:brightness-110"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Ver Projeto</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Progress Indicator & Quick Controls */}
        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="flex-1 h-1.5 rounded-full bg-slate-800/90 overflow-hidden max-w-xs">
            <div
              style={{ width: `${Math.max(18, scrollProgress)}%` }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button
              type="button"
              onClick={() => scrollTrack('prev')}
              disabled={!canScrollLeft}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 hover:border-cyan-400/50 hover:text-cyan-300 disabled:opacity-40"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>Anterior</span>
            </button>
            <button
              type="button"
              onClick={() => scrollTrack('next')}
              disabled={!canScrollRight}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 hover:border-cyan-400/50 hover:text-cyan-300 disabled:opacity-40"
            >
              <span>Próximo</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Sparkles } from 'lucide-react';

export function ProjectMiniScreen({ project }) {
  if (!project?.image) return null;

  return (
    <div className="keep-dark group/img relative h-48 w-full overflow-hidden rounded-xl border border-cyan-400/25 bg-[#051226] shadow-lg">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105"
      />
      {/* Subtle tech overlay gradient & interactive tag */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040E1D]/85 via-transparent to-transparent" />
      <div className="pointer-events-none absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 px-2 py-0.5 text-[10px] font-semibold text-cyan-300">
          <Sparkles className="h-2.5 w-2.5" />
          Tela do Projeto
        </span>
        <span className="rounded-md bg-emerald-500/90 px-2 py-0.5 text-[10px] font-bold text-slate-950 shadow">
          Interativo
        </span>
      </div>
    </div>
  );
}

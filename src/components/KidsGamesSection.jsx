import React from 'react';
import { Eye, Gamepad2, Music, Sparkles, TabletSmartphone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppButton';
import { getWhatsAppUrl } from '../utils/whatsapp';

export function KidsGamesSection({ onOpenKidsModal }) {
  return (
    <section id="jogos-kids" className="relative py-16 sm:py-24 border-t border-slate-800/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-violet-500/25 overflow-hidden relative">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/15 blur-[90px]" />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative">
            {/* Left animated GIF mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border-4 border-slate-700/80 bg-[#0B091A] p-2 shadow-2xl">
                <div className="flex items-center justify-between px-2 pb-2 text-[11px] text-slate-400">
                  <span className="font-semibold text-amber-300">Aventuras Kids • PWA</span>
                  <span>Toque na Tela &amp; Áudio Próprio</span>
                </div>
                <img
                  src="/assets/demo-jogos-kids.gif"
                  alt="Demonstração em vídeo dos jogos infantis educativos desenvolvidos pela SCM Tech"
                  className="w-full rounded-xl object-cover max-h-[340px]"
                />
              </div>
            </div>

            {/* Right description */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <Gamepad2 className="h-3.5 w-3.5" />
                <span>Desenvolvimento de Jogos Infantis &amp; Apps Lúdicos</span>
              </div>

              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Jogos Educativos Infantis com{' '}
                <span className="text-amber-300">Experiência Lúdica e Segura</span>
              </h2>

              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Também unimos engenharia de software com criatividade para criar jogos infantis educativos e
                plataformas gamificadas. Nosso projeto infantil reúne 5 aventuras interativas com reforço 100%
                positivo, ideal para celulares, tablets e escolas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { icon: Sparkles, text: '5 jogos completos (Arca, Memória, Pixel Art...)' },
                  { icon: Music, text: 'Motor de áudio sintetizado offline (Web Audio API)' },
                  { icon: TabletSmartphone, text: 'Instalável como App no iPhone e Android (PWA)' },
                  { icon: Gamepad2, text: 'Design pensado para coordenação motora infantil' },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-slate-200"
                  >
                    <item.icon className="h-4 w-4 text-amber-300 shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenKidsModal}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
                >
                  <Eye className="h-4 w-4" />
                  <span>Ver Projeto Infantil</span>
                </button>

                <a
                  href={getWhatsAppUrl(
                    'Olá Saulo! Vi a seção de Jogos Infantis da SCM Tech e gostaria de conversar sobre um app/jogo educativo.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Criar um Jogo / App</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

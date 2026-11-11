import React from 'react';
import { ArrowRight, BarChart3, Bot, Layers, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppButton';
import { getWhatsAppUrl } from '../utils/whatsapp';

export function Hero({ onOpenFeatured }) {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-cyber-grid pt-10 pb-16 sm:pt-14 sm:pb-24"
    >
      {/* Ambient tech glow */}
      <div className="pointer-events-none absolute -top-28 left-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Sistemas Sob Medida • Apps PWA • BI &amp; Automação</span>
          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1]">
            Transforme a operação da sua empresa em{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              tecnologia de alta performance
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            A <strong className="text-white">SCM Tech</strong> desenvolve sistemas empresariais completos (ERPs e CRMs),
            aplicativos instaláveis (PWA), robôs de atendimento no WhatsApp, dashboards de KPIs, plataformas SaaS
            para igrejas e jogos infantis interativos — tudo sob medida para o seu negócio escalar.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] hover:brightness-110"
            >
              <span>Ver Portfólio de Projetos</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={onOpenFeatured}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/35 bg-slate-900/70 px-5 py-3.5 text-sm font-semibold text-cyan-200 transition-all hover:border-cyan-300 hover:bg-slate-800/80"
            >
              <Layers className="h-4 w-4 text-cyan-400" />
              <span>Explorar Central Interativa</span>
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/15 px-5 py-3.5 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-500/25"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>WhatsApp Direto</span>
            </a>
          </div>

          {/* Authority pillars */}
          <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
            {[
              { icon: Layers, label: 'ERPs & SaaS', sub: 'Multi-Empresa' },
              { icon: Smartphone, label: 'Apps PWA', sub: 'iOS, Android & Offline' },
              { icon: BarChart3, label: 'BI & KPIs', sub: 'Decisão em Tempo Real' },
              { icon: Bot, label: 'Automação', sub: 'Bots & WhatsApp' },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-panel rounded-xl p-3 border border-slate-800/80"
              >
                <item.icon className="h-4 w-4 text-cyan-400 mb-1.5" />
                <div className="text-xs font-bold text-white">{item.label}</div>
                <div className="text-[11px] text-slate-400">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual: Official SCM Tech Banner + Holographic Tech Frame */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Ambient ring */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-emerald-400/20 blur-xl animate-pulse-glow" />

            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/35 bg-[#061322] p-2 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/assets/banner-scm-tech.jpg"
                  alt="Banner Oficial SCM Tech Desenvolvimento de Software"
                  className="w-full h-auto max-h-[500px] object-cover object-top rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040B16]/75 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom security & white-label tag */}
              <div className="mt-2 flex items-center justify-between rounded-xl bg-slate-900/90 px-3.5 py-2.5 text-xs">
                <div className="flex items-center gap-2 text-cyan-300 font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Código Próprio &amp; Seguro</span>
                </div>
                <span className="rounded-md bg-cyan-500/15 px-2 py-0.5 text-[11px] font-semibold text-cyan-300">
                  +10 Projetos
                </span>
              </div>
            </div>

            {/* Floating mini card */}
            <div className="hidden sm:flex absolute -left-8 bottom-20 glass-panel rounded-2xl px-4 py-3 shadow-xl animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-sm">
                  99%
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Sob Medida</div>
                  <div className="text-[11px] text-slate-400">Web • Mobile • APIs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

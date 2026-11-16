import React, { useState } from 'react';
import { ArrowRight, BarChart3, Bot, CheckCircle2, ChevronRight, ExternalLink, Layers, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppButton';
import { getWhatsAppUrl } from '../utils/whatsapp';

const SYSTEM_SHOWCASE_TABS = [
  {
    id: 'captacao-b2b',
    label: 'Captação B2B',
    tag: 'Prospecção Ativa',
    badge: 'Mineração & Disparo',
    title: 'B2B Lead Master',
    sub: 'Mineração de CNPJs, enriquecimento de contatos e disparo comercial via WhatsApp.',
    image: '/assets/real_screens/captacao_b2b.png',
    features: ['Busca segmentada por CNAE', 'Kanban de negociação', 'Disparo direto no WhatsApp'],
  },
  {
    id: 'erp-empresarial',
    label: 'ERP & Gestão',
    tag: 'Multi-Empresa',
    badge: 'PDV • Estoque • Caixa',
    title: 'ERP Empresarial Integrado',
    sub: 'Faturamento, controle de estoque em tempo real, frente de caixa (PDV) e conciliação bancária.',
    image: '/assets/real_screens/painel_financeiro.png',
    features: ['Frente de Caixa Rápida', 'Multi-unidades e operadores', 'Relatórios financeiros e DRE'],
  },
  {
    id: 'gestao-igrejas',
    label: 'Gestão de Igrejas',
    tag: 'Eclesiástico PWA',
    badge: 'Membros • Células • Dízimos',
    title: 'Plataforma para Igrejas',
    sub: 'Gestão eclesiástica completa com membresia, grupos familiares/células e tesouraria segura.',
    image: '/assets/real_screens/gestao_igrejas.png',
    features: ['Cadastro e fichas de membros', 'Controle de dízimos & ofertas', 'PWA instalável para liderança'],
  },
];

export function Hero({ onOpenFeatured }) {
  const [activeTabId, setActiveTabId] = useState('captacao-b2b');

  const currentSystem =
    SYSTEM_SHOWCASE_TABS.find((tab) => tab.id === activeTabId) || SYSTEM_SHOWCASE_TABS[0];

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-clean-gradient pt-8 pb-14 sm:pt-12 sm:pb-20"
    >
      {/* Ambient executive glow */}
      <div className="pointer-events-none absolute -top-28 left-1/4 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Sistemas Sob Medida • Apps PWA • BI &amp; Automação</span>
            </div>

            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1]">
              Transforme a operação da sua empresa em{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                tecnologia de alta performance
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              A <strong className="text-white">SCM Tech</strong> desenvolve sistemas empresariais completos (ERPs e CRMs),
              plataformas de captação e prospecção ativa B2B, aplicativos instaláveis (PWA), robôs no WhatsApp e dashboards de inteligência —
              com 100% de código próprio e alta confiabilidade.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] hover:brightness-110"
              >
                <span>Ver Portfólio de Projetos</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => onOpenFeatured && onOpenFeatured(currentSystem.id)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-blue-500/50 hover:bg-slate-800"
              >
                <Layers className="h-4 w-4 text-cyan-400" />
                <span>Testar Central Interativa</span>
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-5 py-3.5 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-500/25"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp Direto</span>
              </a>
            </div>

            {/* Quick Authority Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-3 sm:grid-cols-4">
              {[
                { icon: Layers, label: 'ERPs & SaaS', sub: 'Multi-Empresa' },
                { icon: Sparkles, label: 'Captação B2B', sub: 'Prospecção Ativa' },
                { icon: BarChart3, label: 'BI & KPIs', sub: 'Decisão em Tempo Real' },
                { icon: Smartphone, label: 'Apps PWA', sub: 'Offline & Multiplataforma' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-3"
                >
                  <item.icon className="h-4 w-4 text-blue-400 mb-1.5" />
                  <div className="text-xs font-bold text-white">{item.label}</div>
                  <div className="text-[11px] text-slate-400">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual: Dynamic Interactive Software Window */}
          <div className="lg:col-span-5 relative">
            {/* Glow backdrop */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-emerald-500/10 blur-xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0F172A] shadow-2xl">
              {/* Window Header (macOS style + tabs) */}
              <div className="border-b border-slate-800/90 bg-[#0B0F17] px-4 py-3">
                <div className="flex items-center justify-between pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-xs font-semibold text-slate-400">
                      scmtech-workspace.app
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 border border-emerald-500/30">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-emerald-300">AO VIVO</span>
                  </div>
                </div>

                {/* System Switcher Tabs */}
                <div className="flex gap-1.5 overflow-x-auto pt-1 no-scrollbar">
                  {SYSTEM_SHOWCASE_TABS.map((tab) => {
                    const isActive = tab.id === activeTabId;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTabId(tab.id)}
                        className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                            : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                        }`}
                      >
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Window Body: Live Screenshot Preview */}
              <div className="relative bg-[#020617] p-2">
                <div className="group relative overflow-hidden rounded-xl border border-slate-800/90 aspect-[16/10]">
                  <img
                    src={currentSystem.image}
                    alt={currentSystem.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />

                  {/* Overlay Action */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <span className="inline-block rounded-md bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold text-blue-300 border border-blue-400/30">
                        {currentSystem.badge}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-1 drop-shadow">
                        {currentSystem.title}
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenFeatured && onOpenFeatured(currentSystem.id)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-950 shadow hover:bg-white hover:scale-105 transition-transform"
                    >
                      <span>Abrir Simulador</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* Sub features bar */}
                <div className="mt-2.5 grid grid-cols-3 gap-2 px-1 pb-1">
                  {currentSystem.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 rounded-lg bg-slate-900/60 p-1.5 border border-slate-800 text-[11px] text-slate-300"
                    >
                      <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BARRA DE MÉTRICAS E PROVA SOCIAL (KPI AUTHORITY BAR)
           ========================================================= */}
        <div className="mt-14 border-t border-slate-800/80 pt-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                +111 PDVs
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                Sistemas em Operação
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Múltiplos segmentos comerciais
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                100% Próprio
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                Código Exclusivo &amp; Seguro
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Zero royalties ou taxas ocultas
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display bg-gradient-to-r from-sky-400 to-indigo-300 bg-clip-text text-transparent">
                Offline First
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                PWA Instalável
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Opera sem conexão com a internet
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                Multi-Tenant
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                Isolamento de Dados
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Segurança bancária por cliente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

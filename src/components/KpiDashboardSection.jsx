import React, { useState } from 'react';
import { Activity, ArrowUpRight, BarChart3, PieChart, TrendingUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppButton';
import { getWhatsAppUrl } from '../utils/whatsapp';

const VIEWS = {
  executivo: {
    label: 'Visão Executiva',
    kpis: [
      { title: 'Faturamento Consolidado', value: 'R$ 342.800', trend: '+22,4%', sub: 'vs. período anterior' },
      { title: 'Margem Operacional', value: '31,2%', trend: '+3,8%', sub: 'Meta: 28,0%' },
      { title: 'Ticket Médio', value: 'R$ 1.480', trend: '+9,1%', sub: '231 contratos ativos' },
      { title: 'Inadimplência', value: '1,9%', trend: '-0,7%', sub: 'Melhor marca do ano' },
    ],
    bars: [
      { label: 'Mai', a: 55, b: 40 },
      { label: 'Jun', a: 64, b: 48 },
      { label: 'Jul', a: 59, b: 45 },
      { label: 'Ago', a: 76, b: 56 },
      { label: 'Set', a: 84, b: 62 },
      { label: 'Out', a: 94, b: 71 },
    ],
    legendA: 'Receita Realizada',
    legendB: 'Meta Projetada',
    mix: [
      { label: 'Contratos Recorrentes', pct: 58, color: 'bg-cyan-400' },
      { label: 'Projetos & Implantação', pct: 27, color: 'bg-blue-500' },
      { label: 'Suporte & Automações', pct: 15, color: 'bg-emerald-400' },
    ],
  },
  operacao: {
    label: 'Operação & SLA',
    kpis: [
      { title: 'O.S. Concluídas no Prazo', value: '96,4%', trend: '+4,2%', sub: 'SLA dentro da meta' },
      { title: 'Tempo Médio Atendimento', value: '11h 40m', trend: '-2h 15m', sub: 'Ganho com automação' },
      { title: 'Backlog Crítico', value: '3 O.S.', trend: '-68%', sub: 'Monitorado em tempo real' },
      { title: 'Produtividade por Equipe', value: '9,4 / dia', trend: '+1,6', sub: 'Ordens por técnico' },
    ],
    bars: [
      { label: 'Seg', a: 78, b: 70 },
      { label: 'Ter', a: 88, b: 75 },
      { label: 'Qua', a: 82, b: 76 },
      { label: 'Qui', a: 93, b: 80 },
      { label: 'Sex', a: 96, b: 84 },
      { label: 'Sáb', a: 71, b: 60 },
    ],
    legendA: 'O.S. Finalizadas',
    legendB: 'Capacidade Base',
    mix: [
      { label: 'Instalações Concluídas', pct: 52, color: 'bg-emerald-400' },
      { label: 'Manutenções Preventivas', pct: 33, color: 'bg-cyan-400' },
      { label: 'Retiradas / Logística', pct: 15, color: 'bg-amber-400' },
    ],
  },
  comercial: {
    label: 'Comercial & Telecom',
    kpis: [
      { title: 'Leads Qualificados', value: '486', trend: '+31,0%', sub: 'Origem WhatsApp & Site' },
      { title: 'Taxa de Conversão', value: '34,8%', trend: '+5,4%', sub: 'Funil Kanban ativo' },
      { title: 'MRR (Recorrência)', value: 'R$ 164.200', trend: '+14,9%', sub: 'Base em expansão' },
      { title: 'Churn Mensal', value: '1,18%', trend: '-0,4%', sub: 'Retenção proativa' },
    ],
    bars: [
      { label: 'Sem 1', a: 62, b: 44 },
      { label: 'Sem 2', a: 74, b: 51 },
      { label: 'Sem 3', a: 81, b: 63 },
      { label: 'Sem 4', a: 95, b: 78 },
      { label: 'Sem 5', a: 89, b: 72 },
      { label: 'Sem 6', a: 98, b: 85 },
    ],
    legendA: 'Novas Assinaturas',
    legendB: 'Conversão WhatsApp',
    mix: [
      { label: 'Planos Fibra Alta Velocidade', pct: 64, color: 'bg-sky-400' },
      { label: 'Links Corporativos', pct: 22, color: 'bg-violet-400' },
      { label: 'Serviços Adicionais', pct: 14, color: 'bg-emerald-400' },
    ],
  },
};

export function KpiDashboardSection() {
  const [viewKey, setViewKey] = useState('executivo');
  const current = VIEWS[viewKey];

  return (
    <section id="kpis" className="relative py-16 sm:py-24 border-t border-slate-800/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/35 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
              <BarChart3 className="h-3.5 w-3.5" />
              <span>Business Intelligence &amp; Indicadores</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">
              Dashboards Executivos &amp; Análise de KPIs
            </h2>
            <p className="text-sm text-slate-400 sm:text-base">
              Chega de perder horas consolidando planilhas manuais. Criamos painéis gerenciais em tempo real
              (Web &amp; Power BI) para você enxergar faturamento, SLA de equipe, gargalos e metas na hora.
            </p>
          </div>

          {/* Interactive View Switcher */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(VIEWS).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => setViewKey(key)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                  viewKey === key
                    ? 'bg-gradient-to-r from-cyan-400 to-violet-400 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-cyan-400/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live BI Dashboard Board */}
        <div className="mt-8 glass-panel rounded-3xl p-5 sm:p-7 border border-cyan-500/20 shadow-2xl">
          {/* Top KPI row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {current.kpis.map((kpi) => (
              <div
                key={kpi.title}
                className="rounded-2xl border border-slate-800 bg-[#051020] p-4 transition hover:border-cyan-400/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">{kpi.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-cyan-400" />
                </div>
                <div className="mt-2 font-display text-2xl font-bold text-white">
                  {kpi.value}
                </div>
                <div className="mt-1.5 flex items-center gap-2 text-xs">
                  <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 font-semibold text-emerald-300">
                    {kpi.trend}
                  </span>
                  <span className="text-slate-400">{kpi.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            {/* Bar Comparison Chart */}
            <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-[#051020] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-cyan-400" />
                  <h3 className="text-sm font-bold text-white">Evolução Comparativa de Indicadores</h3>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-slate-300">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-cyan-400" />
                    {current.legendA}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-violet-400/80" />
                    {current.legendB}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 sm:gap-5 items-end h-48 pt-4">
                {current.bars.map((bar) => (
                  <div key={bar.label} className="flex flex-col items-center gap-2 h-full justify-end">
                    <div className="flex items-end gap-1.5 w-full justify-center h-36">
                      <div
                        style={{ height: `${bar.a}%` }}
                        className="w-3.5 sm:w-5 rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400 transition-all duration-500"
                        title={`${current.legendA}: ${bar.a}%`}
                      />
                      <div
                        style={{ height: `${bar.b}%` }}
                        className="w-3.5 sm:w-5 rounded-t-md bg-violet-400/70 transition-all duration-500"
                        title={`${current.legendB}: ${bar.b}%`}
                      />
                    </div>
                    <span className="text-[11px] font-medium text-slate-400">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Breakdown + CTA */}
            <div className="lg:col-span-4 rounded-2xl border border-slate-800 bg-[#051020] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <PieChart className="h-4 w-4 text-violet-400" />
                  <h3 className="text-sm font-bold text-white">Distribuição por Pilar</h3>
                </div>

                <div className="space-y-4">
                  {current.mix.map((item) => (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300">{item.label}</span>
                        <span className="font-bold text-white">{item.pct}%</span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
                        <div
                          style={{ width: `${item.pct}%` }}
                          className={`h-full rounded-full ${item.color} transition-all duration-500`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Activity className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Integramos com Excel, SQL, ERPs e APIs.</span>
                </div>
                <a
                  href={getWhatsAppUrl(
                    'Olá Saulo! Quero um Dashboard de KPIs e Indicadores personalizado para minha empresa.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Quero um Dashboard de KPIs</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

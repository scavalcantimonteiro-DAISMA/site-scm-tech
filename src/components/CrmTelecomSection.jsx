import React, { useState } from 'react';
import {
  CheckCircle2,
  Eye,
  Kanban,
  Radio,
  Router,
  ShieldAlert,
  Wifi,
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppButton';
import { getWhatsAppUrl } from '../utils/whatsapp';

const PIPELINE_COLUMNS = [
  {
    stage: '1. Lead WhatsApp',
    count: 14,
    color: 'border-sky-500/40',
    badge: 'text-sky-300 bg-sky-500/15',
    leads: [
      { name: 'Condomínio Vista Verde', plan: 'Fibra 600 Mega', tag: 'Via Site' },
      { name: 'Clínica Odonto Prime', plan: 'Link Dedicado 1G', tag: 'WhatsApp' },
    ],
  },
  {
    stage: '2. Viabilidade CTO',
    count: 8,
    color: 'border-cyan-500/40',
    badge: 'text-cyan-300 bg-cyan-500/15',
    leads: [
      { name: 'Rua da Aurora, 410', plan: 'CTO-18 • 5 portas', tag: 'Viável ✓' },
      { name: 'Av. Boa Viagem, 920', plan: 'CTO-09 • 2 portas', tag: 'Viável ✓' },
    ],
  },
  {
    stage: '3. O.S. Instalação',
    count: 6,
    color: 'border-amber-500/40',
    badge: 'text-amber-300 bg-amber-500/15',
    leads: [
      { name: 'Comercial Norte Ltda', plan: 'Técnico em Rota', tag: 'SLA 14h' },
      { name: 'Residencial Solar', plan: 'Agendado 15:30', tag: 'Em Campo' },
    ],
  },
  {
    stage: '4. Ativo & Retenção',
    count: 1420,
    color: 'border-emerald-500/40',
    badge: 'text-emerald-300 bg-emerald-500/15',
    leads: [
      { name: 'Base Fibra Ativa', plan: 'MRR R$ 164.200', tag: 'NPS 92' },
      { name: 'Monitoramento Churn', plan: 'Alerta Preventivo', tag: '1,18% mês' },
    ],
  },
];

export function CrmTelecomSection({ onOpenCrmModal }) {
  const [selectedStage, setSelectedStage] = useState(0);

  return (
    <section
      id="crm-telecom"
      className="relative py-16 sm:py-24 border-t border-slate-800/70 bg-gradient-to-b from-[#040B16] via-[#07162A] to-[#040B16]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/35 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
              <Radio className="h-3.5 w-3.5 animate-pulse" />
              <span>Em Desenvolvimento • Acesso Antecipado</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">
              Sistema CRM para{' '}
              <span className="text-sky-400">Provedores (ISP) &amp; Telecom</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Um CRM criado com conhecimento real de operação de campo e telecomunicações: da captação do lead no
              WhatsApp até a viabilidade técnica de fibra, acompanhamento da O.S. de instalação, pós-venda e
              indicadores de retenção (Churn &amp; MRR).
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenCrmModal}
              className="inline-flex items-center gap-2 rounded-xl border border-sky-400/40 bg-sky-500/15 px-5 py-3 text-sm font-bold text-sky-200 transition hover:bg-sky-500/25"
            >
              <Eye className="h-4 w-4" />
              <span>Ver Prévia CRM</span>
            </button>
            <a
              href={getWhatsAppUrl(
                'Olá Saulo! Tenho interesse no Sistema CRM para Provedores e Empresas de Telecom da SCM Tech.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Reservar Demonstração</span>
            </a>
          </div>
        </div>

        {/* Interactive Kanban Pipeline */}
        <div className="mt-9 glass-panel rounded-3xl p-5 sm:p-6 border border-sky-500/25">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Kanban className="h-4 w-4 text-sky-400" />
              <span>Pipeline Operacional Telecom (Clique nas etapas)</span>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-slate-300">
                <Wifi className="h-3.5 w-3.5 text-cyan-400" /> Viabilidade Fibra
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-slate-300">
                <Router className="h-3.5 w-3.5 text-amber-400" /> O.S. &amp; Estoque ONU
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-slate-300">
                <ShieldAlert className="h-3.5 w-3.5 text-emerald-400" /> Anti-Churn
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PIPELINE_COLUMNS.map((col, idx) => {
              const active = selectedStage === idx;
              return (
                <div
                  key={col.stage}
                  onClick={() => setSelectedStage(idx)}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all ${col.color} ${
                    active ? 'bg-slate-900/95 ring-2 ring-sky-400/50' : 'bg-[#051020] hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white">{col.stage}</span>
                    <span className={`rounded-md px-2 py-0.5 text-[11px] font-bold ${col.badge}`}>
                      {col.count}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {col.leads.map((lead) => (
                      <div
                        key={lead.name}
                        className="rounded-xl border border-slate-800 bg-slate-950/90 p-3 space-y-1"
                      >
                        <div className="text-xs font-semibold text-white">{lead.name}</div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">{lead.plan}</span>
                          <span className="text-cyan-300 font-semibold">{lead.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3 text-xs">
            {[
              'Integração com WhatsApp para atendimento e aviso de instalação',
              'Painel de metas para vendedores, supervisores e técnicos de campo',
              'Controle de pós-serviço automático para aumentar o NPS do provedor',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl bg-slate-900/70 border border-slate-800 px-3.5 py-2.5 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

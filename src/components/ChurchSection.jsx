import React, { useState } from 'react';
import {
  CalendarHeart,
  Church,
  Eye,
  LockKeyhole,
  MessageSquareHeart,
  Users,
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppButton';
import { getWhatsAppUrl } from '../utils/whatsapp';

const CHURCH_TABS = [
  {
    id: 'pastoral',
    label: 'Dashboard Pastoral',
    icon: Church,
    title: 'Visão Geral Multi-Congregações',
    desc: 'Cada igreja acessa seus dados isolados com total segurança (Multi-Tenant). O pastor recebe o relatório diário matinal com 1 clique no WhatsApp.',
    metrics: [
      { label: 'Membros Cadastrados', val: '648' },
      { label: 'Pequenos Grupos', val: '24 Ativos' },
      { label: 'Visitantes em Acolhimento', val: '37 no mês' },
    ],
  },
  {
    id: 'members',
    label: 'Membros & Famílias',
    icon: Users,
    title: 'Árvore Genealógica, EBD & Kids',
    desc: 'Cadastro completo de membros, ficha infantil com dados dos responsáveis, histórico de batismo/dons e vinculação automática de famílias.',
    metrics: [
      { label: 'Famílias Conectadas', val: '214' },
      { label: 'Turmas Infantis', val: '6 Salas' },
      { label: 'Escalas de Ministérios', val: '100% Online' },
    ],
  },
  {
    id: 'whatsapp',
    label: 'Aniversariantes & WhatsApp',
    icon: CalendarHeart,
    title: 'Cuidado Automático com Mensagens Prontas',
    desc: 'O sistema destaca aniversariantes de hoje, próximos 7 dias e aniversários de casamento, já montando a mensagem personalizada no WhatsApp.',
    metrics: [
      { label: 'Aniversariantes Hoje', val: '5 Membros' },
      { label: 'Bodas no Mês', val: '8 Casais' },
      { label: 'Disparo Direto', val: '1 Clique' },
    ],
  },
  {
    id: 'finance',
    label: 'Financeiro por PIN',
    icon: LockKeyhole,
    title: 'Tesouraria Protegida & Exportação Excel',
    desc: 'Acesso financeiro restrito com PIN de segurança, lançamentos por categoria, balanço mensal em Real e exportação instantânea para planilhas.',
    metrics: [
      { label: 'Segurança Extra', val: 'PIN Pessoal' },
      { label: 'Relatórios', val: 'PDF & Excel' },
      { label: 'Perfis de Acesso', val: '5 Níveis' },
    ],
  },
];

export function ChurchSection({ onOpenChurchModal }) {
  const [activeTab, setActiveTab] = useState(CHURCH_TABS[0].id);
  const current = CHURCH_TABS.find((t) => t.id === activeTab) || CHURCH_TABS[0];

  return (
    <section
      id="gestao-igrejas"
      className="relative py-16 sm:py-24 border-t border-slate-800/70 bg-gradient-to-b from-[#040B16] via-[#061821] to-[#040B16]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left copy */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <Church className="h-3.5 w-3.5" />
              <span>Projeto em Destaque • SaaS Multi-Tenant</span>
            </div>

            <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">
              Plataforma Completa de{' '}
              <span className="text-emerald-400">Gestão de Igrejas</span>
            </h2>

            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Sistema web e aplicativo instalável (PWA) desenvolvido especialmente para organização pastoral,
              secretaria, ministérios, pequenos grupos e tesouraria — preparado para atender desde uma congregação
              local até múltiplas igrejas no modelo SaaS com identidade visual própria.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              {[
                'Multi-Congregações (Dados Isolados)',
                'Relatório Diário do Pastor no WhatsApp',
                'Funil de Visitantes (1º ao 3º Contato)',
                'Gabinete Pastoral & Mural de Oração',
              ].map((feat) => (
                <div
                  key={feat}
                  className="rounded-xl border border-emerald-500/20 bg-slate-900/70 px-3 py-2.5 text-slate-200 font-medium"
                >
                  ✓ {feat}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenChurchModal}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
              >
                <Eye className="h-4 w-4" />
                <span>Ver Telas do Sistema</span>
              </button>

              <a
                href={getWhatsAppUrl(
                  'Olá Saulo! Quero conhecer melhor a Plataforma de Gestão de Igrejas da SCM Tech.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Implantar na Minha Igreja</span>
              </a>
            </div>
          </div>

          {/* Right interactive explorer */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-emerald-500/25 shadow-2xl">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
                {CHURCH_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const active = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                        active
                          ? 'bg-emerald-400 text-slate-950'
                          : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active tab body */}
              <div className="mt-5 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {current.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {current.desc}
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex shrink-0 items-center gap-1 rounded-lg bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                    <MessageSquareHeart className="h-3.5 w-3.5" />
                    White-Label
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {current.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-slate-800 bg-[#040E18] p-4"
                    >
                      <div className="text-[11px] text-slate-400">{m.label}</div>
                      <div className="mt-1 text-xl font-bold text-emerald-300">{m.val}</div>
                    </div>
                  ))}
                </div>

                {/* Simulated pastor morning message preview */}
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/25 p-4 text-xs text-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-bold text-emerald-300">Resumo Matinal Automático:</span>{' '}
                    &ldquo;Bom dia Pastor! Hoje temos 2 atendimentos no gabinete, 5 aniversariantes e 14 novos visitantes em acompanhamento.&rdquo;
                  </div>
                  <span className="shrink-0 rounded-lg bg-emerald-500/20 px-3 py-1.5 text-[11px] font-bold text-emerald-300 text-center">
                    Pronto para WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

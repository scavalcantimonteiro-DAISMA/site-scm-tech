import React, { useEffect, useState } from 'react';
import {
  Activity,
  BarChart3,
  Bot,
  CheckCircle2,
  CreditCard,
  FileSpreadsheet,
  FileText,
  Gamepad2,
  Layers,
  Lock,
  Monitor,
  Pause,
  Play,
  Plus,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { WhatsAppIcon } from './WhatsAppButton';
import { getWhatsAppUrl } from '../utils/whatsapp';

function AppSimulator({ project }) {
  const [tab, setTab] = useState(0);

  // Interactive states for rich demos
  const [pdvCart, setPdvCart] = useState([
    { name: 'Combo Lanche', price: 25, qty: 1 },
    { name: 'Suco Natural', price: 9, qty: 1 },
  ]);
  const [pdvPay, setPdvPay] = useState('Dinheiro');
  const [pdvCash, setPdvCash] = useState(50);

  const [botRunning, setBotRunning] = useState(true);
  const [selectedNiche, setSelectedNiche] = useState('Odontologia');
  const [fieldSteps, setFieldSteps] = useState([true, true, true, false, false]);
  const [selectedKidGame, setSelectedKidGame] = useState(0);
  const [copiedPix, setCopiedPix] = useState(false);

  useEffect(() => {
    setTab(0);
  }, [project?.id]);

  const addPdvItem = (name, price) => {
    setPdvCart((prev) => {
      const idx = prev.findIndex((i) => i.name === name);
      if (idx >= 0) {
        return prev.map((item, i) => (i === idx ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { name, price, qty: 1 }];
    });
  };

  const pdvTotal = pdvCart.reduce((acc, i) => acc + i.price * i.qty, 0);
  const pdvChange = Math.max(0, pdvCash - pdvTotal);

  const renderTabs = (tabs, activeColor = 'bg-cyan-400 text-slate-950') => (
    <div className="flex flex-wrap gap-2 border-b border-slate-800/90 pb-3">
      {tabs.map((label, idx) => (
        <button
          key={label}
          type="button"
          onClick={() => setTab(idx)}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
            tab === idx
              ? `${activeColor} shadow-md`
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-600'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );

  switch (project.previewType) {
    case 'erp':
      return (
        <div className="space-y-4">
          {renderTabs(['Visão Executiva', 'Estoque & Multi-Depósitos', 'Compras & Fiscal', 'Auditoria Imutável'])}
          {tab === 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Faturamento Mês', value: 'R$ 248.900', delta: '+18,4%' },
                  { label: 'Pedidos Faturados', value: '312', delta: '98% no prazo' },
                  { label: 'Itens em Estoque', value: '3.420 un', delta: '3 depósitos' },
                  { label: 'Margem Líquida', value: '27,6%', delta: '+2,1% vs mês ant.' },
                ].map((c) => (
                  <div key={c.label} className="rounded-xl bg-slate-900/90 border border-slate-800 p-3">
                    <div className="text-[11px] text-slate-400">{c.label}</div>
                    <div className="text-base font-bold text-white mt-1">{c.value}</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">{c.delta}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-3.5">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-white">Evolução de Vendas x Compras (Últimos 7 dias)</span>
                  <span className="text-cyan-300">Sincronizado</span>
                </div>
                <div className="flex items-end gap-2 h-20">
                  {[48, 66, 58, 82, 74, 92, 86].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div
                        style={{ height: `${h}%` }}
                        className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {tab === 1 && (
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-400 font-semibold border-b border-slate-800 pb-2">
                <span>Produto / SKU</span>
                <span>Depósito • Saldo</span>
              </div>
              {[
                { sku: 'CAB-OPT-12FO', item: 'Cabo Óptico Drop 1FO Bobina 1km', dep: 'Matriz', qty: '142 bobinas', status: 'Normal' },
                { sku: 'ONT-WIFI6-AX', item: 'Roteador ONU Dual-Band Wi-Fi 6', dep: 'Filial Sul', qty: '88 un', status: 'Normal' },
                { sku: 'CTO-16P-PRO', item: 'Caixa Terminação Óptica 16P', dep: 'Matriz', qty: '9 un', status: 'Estoque Mínimo' },
              ].map((row) => (
                <div key={row.sku} className="flex items-center justify-between border-b border-slate-800/70 pb-2 last:border-0 last:pb-0">
                  <div>
                    <div className="font-semibold text-white">{row.item}</div>
                    <div className="text-[10px] text-slate-400">SKU: {row.sku} • {row.dep}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-cyan-300">{row.qty}</div>
                    <div className={`text-[10px] ${row.status === 'Estoque Mínimo' ? 'text-amber-300 font-semibold' : 'text-emerald-400'}`}>
                      {row.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab === 2 && (
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 space-y-2">
                <div className="font-bold text-cyan-300">Alçada de Aprovações de Compra</div>
                <div className="rounded-lg bg-slate-950 p-2.5 flex justify-between">
                  <span>Pedido #1094 • R$ 14.200</span>
                  <span className="text-emerald-400 font-semibold">Aprovado ADM</span>
                </div>
                <div className="rounded-lg bg-slate-950 p-2.5 flex justify-between">
                  <span>Pedido #1095 • R$ 3.850</span>
                  <span className="text-amber-300 font-semibold">Aguardando Gerência</span>
                </div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 space-y-2">
                <div className="font-bold text-cyan-300">Módulo Fiscal &amp; Financeiro</div>
                <div className="rounded-lg bg-slate-950 p-2.5 flex justify-between">
                  <span>NF-e Emitidas no Mês</span>
                  <span className="text-white font-bold">412 notas</span>
                </div>
                <div className="rounded-lg bg-slate-950 p-2.5 flex justify-between">
                  <span>Contas a Receber Hoje</span>
                  <span className="text-emerald-400 font-bold">R$ 19.450,00</span>
                </div>
              </div>
            </div>
          )}
          {tab === 3 && (
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 space-y-2 text-xs">
              <div className="flex items-center justify-between text-cyan-300 font-bold pb-1">
                <span>Trilha de Auditoria Imutável (audit_logs)</span>
                <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">Criptografado</span>
              </div>
              {[
                '11:42 • Usuário #04 (Financeiro) baixou título #8821 via PIX — IP registrado',
                '11:18 • Usuário #02 (Estoque) transferiu 30 un para Filial Centro',
                '10:55 • Admin Master alterou permissão do perfil Vendedor Externo',
                '08:00 • Sistema executou backup automático diário do PostgreSQL',
              ].map((log) => (
                <div key={log} className="rounded-lg bg-slate-950/90 px-3 py-2 text-slate-300 border border-slate-800/80">
                  {log}
                </div>
              ))}
            </div>
          )}
        </div>
      );

    case 'church':
      return (
        <div className="space-y-4">
          {renderTabs(
            ['Painel Pastoral', 'Aniversariantes WhatsApp', 'Membros & Famílias', 'Tesouraria (PIN)'],
            'bg-emerald-400 text-slate-950'
          )}
          {tab === 0 && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { k: 'Membros Ativos', v: '648', s: 'Multi-Congregações' },
                  { k: 'Pequenos Grupos', v: '24 PGs', s: '91% frequência' },
                  { k: 'Visitantes Mês', v: '37', s: 'Funil 1º-3º contato' },
                  { k: 'Gabinete Pastoral', v: '6 Agendados', s: 'Semana atual' },
                ].map((card) => (
                  <div key={card.k} className="rounded-xl bg-slate-900 border border-emerald-500/20 p-3">
                    <div className="text-[11px] text-slate-400">{card.k}</div>
                    <div className="text-lg font-bold text-white mt-0.5">{card.v}</div>
                    <div className="text-[10px] text-emerald-400">{card.s}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-emerald-500/25 bg-emerald-950/25 p-3.5 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-emerald-300">Relatório Matinal Automático do Pastor:</span>{' '}
                  Compila cultos do dia, atendimentos de gabinete, aniversariantes e visitantes novos pronto para enviar no WhatsApp.
                </div>
                <span className="shrink-0 rounded-lg bg-emerald-500 px-3 py-1.5 text-[11px] font-bold text-slate-950">
                  Copiar / Enviar
                </span>
              </div>
            </div>
          )}
          {tab === 1 && (
            <div className="space-y-2.5 rounded-xl bg-slate-900 border border-slate-800 p-3.5 text-xs">
              {[
                { name: 'Lucas & Mariana Silva', info: 'Aniversário de Casamento • 8 anos de união', btn: 'Enviar Bênção Matrimonial' },
                { name: 'Ana Beatriz Costa', info: 'Aniversariante de Hoje • Ministério Louvor', btn: 'Parabenizar no WhatsApp' },
                { name: 'Pedro Henrique Alves', info: 'Próximos 7 dias • Pequeno Grupo Central', btn: 'Agendar Mensagem' },
              ].map((person) => (
                <div key={person.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-lg bg-slate-950/80 p-3 border border-slate-800/80">
                  <div>
                    <div className="font-semibold text-white">{person.name}</div>
                    <div className="text-[11px] text-slate-400">{person.info}</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/20 border border-emerald-400/30 px-3 py-1.5 text-[11px] font-bold text-emerald-300">
                    <Send className="h-3 w-3" /> {person.btn}
                  </span>
                </div>
              ))}
            </div>
          )}
          {tab === 2 && (
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-3.5 space-y-2">
                <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                  <Users className="h-4 w-4" /> Árvore Genealógica Familiar
                </div>
                <div className="rounded-lg bg-slate-950 p-2.5 text-slate-200">
                  Família Oliveira: Pais (2) • Filhos no Kids (2) • PG Zona Sul
                </div>
                <div className="rounded-lg bg-slate-950 p-2.5 text-slate-200">
                  Ficha Kids com alergias, turma da EBD e telefone dos responsáveis
                </div>
              </div>
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-3.5 space-y-2">
                <div className="font-bold text-emerald-300">Controle de Perfis &amp; Escalas</div>
                <div className="rounded-lg bg-slate-950 p-2.5 text-slate-300">
                  Perfis: Master Admin, Pastor, Secretaria, Tesouraria e Líder de PG
                </div>
                <div className="rounded-lg bg-slate-950 p-2.5 text-slate-300">
                  Exportação completa em Excel e impressão formatada de relatórios
                </div>
              </div>
            </div>
          )}
          {tab === 3 && (
            <div className="rounded-xl bg-slate-900 border border-emerald-500/25 p-4 text-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-300 flex items-center gap-1.5">
                  <Lock className="h-4 w-4" /> Módulo Financeiro Protegido por PIN
                </span>
                <span className="rounded bg-emerald-500/15 px-2.5 py-0.5 text-[10px] text-emerald-300">Acesso Tesouraria</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Entradas Mês</div>
                  <div className="text-base font-bold text-emerald-400">R$ 38.450</div>
                </div>
                <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Saídas Mês</div>
                  <div className="text-base font-bold text-rose-400">R$ 21.120</div>
                </div>
                <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
                  <div className="text-[10px] text-slate-400">Saldo Atual</div>
                  <div className="text-base font-bold text-cyan-300">R$ 17.330</div>
                </div>
              </div>
            </div>
          )}
        </div>
      );

    case 'crm':
      return (
        <div className="space-y-4">
          {renderTabs(
            ['Funil Kanban Telecom', 'Viabilidade CTO', 'Ordens de Serviço', 'Indicadores MRR & Churn'],
            'bg-sky-400 text-slate-950'
          )}
          {tab === 0 && (
            <div className="grid sm:grid-cols-3 gap-3 text-xs">
              {[
                { title: 'Novo Lead (14)', items: ['Cond. Jardins • 600MB', 'Mercado Central • Link 1G'] },
                { title: 'Viabilidade CTO (8)', items: ['Rua das Flores, 42 • Porta OK', 'Av. Norte, 1180 • Aprovado'] },
                { title: 'Instalação O.S. (6)', items: ['OS #4421 • Técnico em rota', 'OS #4422 • Agendado 14h'] },
              ].map((col) => (
                <div key={col.title} className="rounded-xl bg-slate-900 border border-slate-800 p-3 space-y-2">
                  <div className="font-bold text-sky-300">{col.title}</div>
                  {col.items.map((it) => (
                    <div key={it} className="rounded-lg bg-slate-950 p-2.5 text-[11px] text-slate-200 border border-slate-800">
                      {it}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          {tab === 1 && (
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 text-xs space-y-2.5">
              <div className="font-bold text-sky-300">Consulta Instantânea de Cobertura Fibra</div>
              <div className="flex justify-between rounded-lg bg-slate-950 p-3 border border-slate-800">
                <span>CTO-042 • Bairro Boa Vista (Distância: 85m)</span>
                <span className="text-emerald-400 font-bold">4 portas livres • Viável</span>
              </div>
              <div className="flex justify-between rounded-lg bg-slate-950 p-3 border border-slate-800">
                <span>CTO-119 • Bairro Centro (Distância: 210m)</span>
                <span className="text-amber-300 font-bold">1 porta livre • Atenção</span>
              </div>
            </div>
          )}
          {tab === 2 && (
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 text-xs space-y-2">
              <div className="flex justify-between text-slate-300 rounded-lg bg-slate-950 p-2.5">
                <span>OS #4421 • Instalação Fibra 600MB + Roteador AX3000</span>
                <span className="text-cyan-300 font-semibold">Em Execução</span>
              </div>
              <div className="flex justify-between text-slate-300 rounded-lg bg-slate-950 p-2.5">
                <span>SLA Médio de Instalação da Equipe</span>
                <span className="text-emerald-400 font-bold">14h 20min (Meta &lt; 24h)</span>
              </div>
            </div>
          )}
          {tab === 3 && (
            <div className="grid grid-cols-3 gap-3">
              {[
                { k: 'MRR Recorrente', v: 'R$ 164.200' },
                { k: 'Churn Mensal', v: '1,18%' },
                { k: 'ARPU (Ticket Médio)', v: 'R$ 119,90' },
              ].map((m) => (
                <div key={m.k} className="rounded-xl bg-slate-900 border border-slate-800 p-3.5">
                  <div className="text-[10px] text-slate-400">{m.k}</div>
                  <div className="text-base font-bold text-sky-300 mt-1">{m.v}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      );

    case 'bi':
      return (
        <div className="space-y-4">
          {renderTabs(
            ['Faturamento & Margem', 'SLA & Produtividade', 'Metas por Equipe'],
            'bg-violet-400 text-slate-950'
          )}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { k: 'Receita Analisada', v: tab === 0 ? 'R$ 342.800' : tab === 1 ? '96,4% SLA' : '108,2% Meta' },
              { k: 'Conversão Média', v: tab === 0 ? '34,8%' : tab === 1 ? '11h 40m' : '42 vendas/sem' },
              { k: 'Economia Operacional', v: '-18h/sem' },
              { k: 'Fontes Integradas', v: 'SQL + Excel' },
            ].map((item) => (
              <div key={item.k} className="rounded-xl bg-slate-900 border border-violet-500/20 p-3">
                <div className="text-[10px] text-slate-400">{item.k}</div>
                <div className="text-base font-bold text-violet-300 mt-1">{item.v}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2.5 text-slate-200">
              <BarChart3 className="h-5 w-5 text-violet-400 shrink-0" />
              <span>
                Relatórios dinâmicos com filtros por filial, supervisor, canal e exportação imediata para reunião.
              </span>
            </div>
            <span className="shrink-0 rounded-lg bg-violet-500/20 px-3 py-1.5 font-bold text-violet-300">
              PDF / XLSX
            </span>
          </div>
        </div>
      );

    case 'field':
      return (
        <div className="space-y-4">
          {renderTabs(
            ['Checklist 5 Etapas (Clique)', 'Cruzamento Backlog', 'ATA Automática PDF'],
            'bg-amber-400 text-slate-950'
          )}
          {tab === 0 && (
            <div className="space-y-2 text-xs">
              <div className="text-slate-300 mb-1">
                Clique nas etapas para simular uma vistoria offline em campo:
              </div>
              {[
                '1. Identificação da Unidade & Formato de Gestão',
                '2. Torre de Controle (O.S. em caixa, vencidas e técnicos)',
                '3. Estoque & Retiradas de Equipamentos',
                '4. Frota, Ferramental & Uniformes',
                '5. Plano de Ação & Assinatura da ATA',
              ].map((step, i) => (
                <button
                  key={step}
                  type="button"
                  onClick={() =>
                    setFieldSteps((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
                  }
                  className="w-full flex items-center justify-between rounded-xl bg-slate-900 border border-slate-800 px-3.5 py-2.5 text-left hover:border-amber-400/50 transition"
                >
                  <span className="text-slate-200 font-medium">{step}</span>
                  <span
                    className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                      fieldSteps[i]
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-amber-500/20 text-amber-300'
                    }`}
                  >
                    {fieldSteps[i] ? 'Concluído ✓' : 'Pendente'}
                  </span>
                </button>
              ))}
            </div>
          )}
          {tab === 1 && (
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 text-xs space-y-2.5">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <FileSpreadsheet className="h-4 w-4" /> Cruzamento Automático De-Para de Backlog
              </div>
              <div className="rounded-lg bg-slate-950 p-3 flex justify-between">
                <span>Planilha Base Cadastral + Backlog Diário</span>
                <span className="text-emerald-400 font-bold">1.240 O.S. enriquecidas em 1.8s</span>
              </div>
              <div className="rounded-lg bg-slate-950 p-3 text-slate-300">
                Separação automática por supervisor, cidade, criticidade e envio segmentado.
              </div>
            </div>
          )}
          {tab === 2 && (
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 text-xs flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-amber-300" /> ATA_Visita_Tecnica_Resumo.pdf
                </div>
                <div className="text-slate-400">
                  Inclui fotos comprimidas, pontuação dos setores, pendências e assinatura digital.
                </div>
              </div>
              <span className="shrink-0 rounded-lg bg-amber-400 px-3 py-1.5 font-bold text-slate-950">
                Gerar PDF
              </span>
            </div>
          )}
        </div>
      );

    case 'bot':
      return (
        <div className="space-y-4">
          {renderTabs(
            ['Motor Anti-Ban ao Vivo', 'Mapeamento Excel', 'Extensão Chrome & CSV'],
            'bg-emerald-400 text-slate-950'
          )}
          {tab === 0 && (
            <div className="rounded-xl bg-slate-900 border border-emerald-500/25 p-4 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-emerald-300">
                  <Bot className="h-4 w-4" />
                  <span>Fila Inteligente WhatsApp WebSocket</span>
                </div>
                <button
                  type="button"
                  onClick={() => setBotRunning((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 font-semibold text-white hover:bg-slate-700"
                >
                  {botRunning ? <Pause className="h-3.5 w-3.5 text-amber-300" /> : <Play className="h-3.5 w-3.5 text-emerald-400" />}
                  <span>{botRunning ? 'Pausar Fila' : 'Retomar Fila'}</span>
                </button>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-slate-300">
                  <span>Progresso: 119 de 145 mensagens enviadas</span>
                  <span className="font-bold text-emerald-300">82%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-950 overflow-hidden">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" />
                </div>
                <div className="text-[11px] text-slate-400">
                  Status: {botRunning ? 'Enviando com intervalo dinâmico de 8s–11s (Anti-Ban ativo)' : 'Fila pausada com segurança pelo operador'}
                </div>
              </div>
            </div>
          )}
          {tab === 1 && (
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 text-xs space-y-2">
              <div className="font-bold text-emerald-300">Leitura Automática (.XLSX / .CSV)</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Col A: O.S.', 'Col B: Cliente', 'Col C: Telefone 1', 'Col D: Telefone 2'].map((col) => (
                  <div key={col} className="rounded-lg bg-slate-950 p-2.5 text-center text-slate-200 border border-slate-800">
                    {col}
                  </div>
                ))}
              </div>
              <div className="text-slate-400 pt-1">
                Insere DDI 55 automático e tenta Telefone 2 caso o Telefone 1 não tenha WhatsApp.
              </div>
            </div>
          )}
          {tab === 2 && (
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 text-xs space-y-2">
              <div className="font-bold text-emerald-300">Extensão Chrome + Monitoramento em Segundo Plano</div>
              <div className="text-slate-300">
                Card flutuante diretamente no portal web, captura de dados sem redigitar, alertas sonoros/push e exportação final de entrega em CSV.
              </div>
            </div>
          )}
        </div>
      );

    case 'hub': {
      const niches = {
        Odontologia: { color: 'text-sky-300 border-sky-400/40 bg-sky-500/10', posts: 'Clareamento, Implantes, Prevenção, Bastidores' },
        Estética: { color: 'text-pink-300 border-pink-400/40 bg-pink-500/10', posts: 'Harmonização, Cuidados Diários, Laser, Resultados' },
        Imobiliária: { color: 'text-emerald-300 border-emerald-400/40 bg-emerald-500/10', posts: 'Lançamentos, Tour Virtual, Financiamento, Dicas' },
        Gastronomia: { color: 'text-orange-300 border-orange-400/40 bg-orange-500/10', posts: 'Prato do Dia, Delivery, Bastidores Cozinha, Combo' },
        Advocacia: { color: 'text-slate-200 border-slate-500/40 bg-slate-700/25', posts: 'Direito Trabalhista, Consumidor, Previdenciário' },
        Telecom: { color: 'text-cyan-300 border-cyan-400/40 bg-cyan-500/10', posts: 'Ultra Velocidade Fibra, Suporte Local, Planos' },
      };
      return (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-rose-300">
            Clique em um segmento para ver a adaptação White-Label do Hub:
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.keys(niches).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setSelectedNiche(n)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  selectedNiche === n
                    ? 'bg-rose-400 text-slate-950'
                    : 'bg-slate-900 text-slate-300 border border-slate-800'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <div className={`rounded-xl border p-4 text-xs space-y-2 ${niches[selectedNiche].color}`}>
            <div className="font-bold text-sm">Painel Customizado: {selectedNiche}</div>
            <div>Pilares do Calendário de 30 Dias: {niches[selectedNiche].posts}</div>
            <div className="text-[11px] opacity-90">
              Inclui login próprio do cliente, logotipo aplicada automaticamente nas artes e roteiros com teleprompter.
            </div>
          </div>
        </div>
      );
    }

    case 'finance':
      return (
        <div className="grid sm:grid-cols-12 gap-5 items-center">
          <div className="sm:col-span-5">
            <div className="mx-auto max-w-[260px] rounded-[28px] border-4 border-slate-700 bg-[#081322] p-4 space-y-3 shadow-2xl">
              <div className="mx-auto h-1.5 w-14 rounded-full bg-slate-700" />
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/30 p-3.5">
                <div className="text-[11px] text-slate-300">Sobra Livre Projetada</div>
                <div className="text-2xl font-bold text-white">R$ 4.890,00</div>
                <div className="text-[10px] text-emerald-300 mt-1">(Renda + Recebíveis) − (Fixas + Variáveis)</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between rounded-xl bg-slate-900 p-2.5">
                  <span className="text-slate-300">Parcela 3/6 • Cliente A</span>
                  <span className="font-bold text-cyan-300">R$ 420,00</span>
                </div>
                <div className="flex justify-between rounded-xl bg-slate-900 p-2.5">
                  <span className="text-slate-300">Parcela 2/4 • Cliente B</span>
                  <span className="font-bold text-cyan-300">R$ 280,00</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCopiedPix(true)}
                className="w-full rounded-xl bg-emerald-500 py-2.5 text-center text-xs font-bold text-slate-950 hover:bg-emerald-400 transition"
              >
                {copiedPix ? 'Mensagem + Pix Prontos ✓' : 'Simular Cobrança WhatsApp'}
              </button>
            </div>
          </div>
          <div className="sm:col-span-7 space-y-3 text-xs">
            <div className="font-bold text-cyan-300 text-sm">Como o App Financeiro PWA funciona:</div>
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 text-slate-300">
              • <strong className="text-white">Recebíveis Automáticos:</strong> Varre todas as parcelas de terceiros que vencem no mês selecionado e soma automaticamente na projeção.
            </div>
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 text-slate-300">
              • <strong className="text-white">Cobrança em 1 Toque:</strong> Compila os itens do devedor no mês, adiciona a chave Pix e abre o WhatsApp pronto para enviar.
            </div>
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 text-slate-300">
              • <strong className="text-white">Exportação Excel:</strong> Gera planilha `.xlsx` direto no iPhone ou computador com totalizadores somados.
            </div>
          </div>
        </div>
      );

    case 'pdv':
      return (
        <div className="grid sm:grid-cols-12 gap-4 items-start text-xs">
          <div className="sm:col-span-6 space-y-2.5">
            <div className="font-bold text-amber-300">1. Toque para adicionar itens ao pedido:</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Combo Lanche', price: 25 },
                { name: 'Suco Natural', price: 9 },
                { name: 'Pastel Especial', price: 12 },
                { name: 'Água Mineral', price: 4 },
              ].map((prod) => (
                <button
                  key={prod.name}
                  type="button"
                  onClick={() => addPdvItem(prod.name, prod.price)}
                  className="flex items-center justify-between rounded-xl bg-slate-900 border border-slate-800 p-2.5 text-left hover:border-amber-400/60 transition"
                >
                  <div>
                    <div className="font-semibold text-white">{prod.name}</div>
                    <div className="text-amber-300 font-bold">R$ {prod.price},00</div>
                  </div>
                  <Plus className="h-4 w-4 text-amber-300" />
                </button>
              ))}
            </div>

            <div className="pt-1">
              <div className="font-bold text-amber-300 mb-1.5">2. Forma de Pagamento:</div>
              <div className="flex flex-wrap gap-1.5">
                {['PIX', 'Crédito', 'Débito', 'Dinheiro'].map((pay) => (
                  <button
                    key={pay}
                    type="button"
                    onClick={() => setPdvPay(pay)}
                    className={`rounded-lg px-3 py-1.5 font-semibold ${
                      pdvPay === pay ? 'bg-amber-400 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800'
                    }`}
                  >
                    {pay}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="sm:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-3.5 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-bold text-white flex items-center gap-1.5">
                <CreditCard className="h-4 w-4 text-amber-300" /> Carrinho do Caixa
              </span>
              <button
                type="button"
                onClick={() => setPdvCart([])}
                className="text-[10px] text-rose-300 hover:underline"
              >
                Limpar
              </button>
            </div>
            <div className="space-y-1 max-h-24 overflow-y-auto">
              {pdvCart.length === 0 ? (
                <div className="text-slate-400">Nenhum item no pedido.</div>
              ) : (
                pdvCart.map((i) => (
                  <div key={i.name} className="flex justify-between text-slate-200">
                    <span>{i.qty}x {i.name}</span>
                    <span className="font-semibold">R$ {(i.price * i.qty).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>
            <div className="flex justify-between border-t border-slate-800 pt-2 text-sm font-bold text-amber-300">
              <span>Total:</span>
              <span>R$ {pdvTotal.toFixed(2)}</span>
            </div>
            {pdvPay === 'Dinheiro' && (
              <div className="rounded-xl bg-emerald-500/15 border border-emerald-500/30 p-2.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-200">Recebido:</span>
                  <div className="flex gap-1">
                    {[20, 50, 100].map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setPdvCash(v)}
                        className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                          pdvCash === v ? 'bg-emerald-400 text-slate-950' : 'bg-slate-900 text-slate-300'
                        }`}
                      >
                        R${v}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between font-bold text-emerald-300">
                  <span>Troco Exato:</span>
                  <span>R$ {pdvChange.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      );

    case 'kids': {
      const games = [
        { name: '1. A Arca de Noé', detail: 'Associação de animais com sons lúdicos, arco-íris e reforço positivo.' },
        { name: '2. Ovelhinha Perdida', detail: 'Percepção visual e atenção para encontrar a ovelhinha escondida sem punição por erro.' },
        { name: '3. Fruto do Espírito', detail: '5 fases progressivas de colheita com velocidade crescente e pontuação dobrada.' },
        { name: '4. Heróis da Fé (Memória)', detail: '5 níveis progressivos de 4 até 16 cartas com efeitos 3D e estrelas de mérito.' },
        { name: '5. Pintura Pixel Art', detail: 'Colorir por números com pincel mágico, grade adaptada e celebração ao concluir.' },
      ];
      return (
        <div className="grid gap-4 sm:grid-cols-12 items-center">
          <div className="sm:col-span-6 overflow-hidden rounded-2xl border border-violet-400/30 bg-slate-950">
            <img
              src="/assets/demo-jogos-kids.gif"
              alt="Demonstração em vídeo dos jogos infantis educativos"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="sm:col-span-6 space-y-2 text-xs">
            <div className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
              <Gamepad2 className="h-4 w-4" /> Explore os 5 Jogos do Projeto:
            </div>
            {games.map((g, i) => (
              <button
                key={g.name}
                type="button"
                onClick={() => setSelectedKidGame(i)}
                className={`w-full text-left rounded-xl border px-3 py-2 transition ${
                  selectedKidGame === i
                    ? 'border-amber-400/60 bg-amber-500/15 text-white'
                    : 'border-slate-800 bg-slate-900/90 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="font-bold">{g.name}</div>
                {selectedKidGame === i && (
                  <div className="mt-1 text-[11px] text-amber-200">{g.detail}</div>
                )}
              </button>
            ))}
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}

export function ProjectModal({ project, onSelectProject, onClose }) {
  if (!project) return null;

  const isMobile = project.previewType === 'finance' || project.previewType === 'pdv';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-3 sm:p-5"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl border border-cyan-400/35 bg-[#061324] p-4 sm:p-7 shadow-[0_25px_80px_rgba(0,212,255,0.22)]">
        {/* Top Project Switcher Bar */}
        {onSelectProject && (
          <div className="mb-4 pb-3 border-b border-slate-800/80">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-cyan-400" />
              <span>Alternar entre as soluções SCM Tech:</span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {PROJECTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectProject(item)}
                  className={`shrink-0 rounded-lg px-3 py-1.5 text-[11px] font-semibold transition ${
                    item.id === project.id
                      ? 'bg-cyan-400 text-slate-950'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-400/40'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300">
              {isMobile ? <Smartphone className="h-3.5 w-3.5" /> : <Monitor className="h-3.5 w-3.5" />}
              <span>{project.badge}</span>
            </div>
            <h3 className="mt-2 font-display text-xl sm:text-3xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
              {project.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar visualização"
            className="shrink-0 rounded-xl border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:border-cyan-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Interactive App Simulator */}
        <div className="mt-5 rounded-2xl border border-cyan-500/25 bg-[#040B16] p-4 sm:p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <Activity className="h-3.5 w-3.5" />
              Prévia Interativa — Clique nas abas e botões para testar o fluxo
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="h-3.5 w-3.5" /> Arquitetura SCM Tech
            </span>
          </div>
          <AppSimulator project={project} />
        </div>

        {/* Robust Functional Summary: Modules + Capabilities */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Modules Grid */}
          <div className="lg:col-span-7 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Módulos &amp; Funções Integradas</span>
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.modules?.map((mod) => (
                <div
                  key={mod.name}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-3.5 space-y-1"
                >
                  <div className="text-xs font-bold text-white">{mod.name}</div>
                  <div className="text-[11px] leading-relaxed text-slate-400">{mod.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What can be done + Tech + CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                O que você pode fazer com essa solução
              </h4>
              <ul className="space-y-2">
                {project.capabilities?.map((cap) => (
                  <li key={cap} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-3 border-t border-slate-800">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Tecnologias Aplicadas
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1 text-[11px] font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsAppUrl(project.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Quero essa solução no meu negócio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

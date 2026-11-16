import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Instagram, Menu, Moon, Sun, Sparkles, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppButton';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, getWhatsAppUrl } from '../utils/whatsapp';

const SOLUTIONS = [
  { label: 'Captação B2B Lead Master', href: '#captacao-b2b', tag: 'Novo • Prospecção' },
  { label: 'ERP & Gestão Empresarial', href: '#projetos', tag: 'PDV & Estoque' },
  { label: 'Gestão de Igrejas PWA', href: '#gestao-igrejas', tag: 'Membros & Dízimos' },
  { label: 'BI & Dashboards de KPIs', href: '#kpis', tag: 'Tempo Real' },
  { label: 'CRM Telecom & Provedores', href: '#crm-telecom', tag: 'Operações' },
  { label: 'Jogos Educativos Kids', href: '#jogos-kids', tag: 'Interativo' },
];

export function Navbar({ theme = 'dark', onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#0B0F17]/90 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#topo" className="focus:outline-none">
          <BrandLogo compact />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
          {/* Soluções Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setSolutionsOpen((prev) => !prev)}
              onMouseEnter={() => setSolutionsOpen(true)}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white focus:outline-none"
            >
              <span>Soluções</span>
              <ChevronDown
                className={`h-4 w-4 text-slate-400 transition-transform ${
                  solutionsOpen ? 'rotate-180 text-blue-400' : ''
                }`}
              />
            </button>

            {solutionsOpen && (
              <div
                onMouseLeave={() => setSolutionsOpen(false)}
                className="absolute left-0 mt-3 w-72 rounded-2xl border border-slate-800 bg-[#0F172A] p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Sistemas Disponíveis
                </div>
                <div className="space-y-1">
                  {SOLUTIONS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
                    >
                      <span>{item.label}</span>
                      <span className="rounded bg-blue-500/15 px-1.5 py-0.5 text-[10px] font-bold text-blue-300">
                        {item.tag}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#projetos" className="transition-colors hover:text-white">
            Portfólio
          </a>
          <a href="#contato" className="transition-colors hover:text-white">
            Contato
          </a>
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Dark / Light Mode Toggle */}
          {onToggleTheme && (
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Alternar tema claro e escuro"
              title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro Executivo'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-slate-300 transition-all hover:border-slate-500 hover:text-white"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-300" />
              ) : (
                <Moon className="h-4 w-4 text-blue-400" />
              )}
            </button>
          )}

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
            className="inline-flex items-center gap-1.5 rounded-xl border border-pink-500/30 bg-pink-500/10 px-3 py-2 text-sm font-medium text-pink-200 transition-all hover:border-pink-400/60 hover:bg-pink-500/20 hover:text-white"
          >
            <Instagram className="h-4 w-4 text-pink-400" />
            <span className="hidden xl:inline">{INSTAGRAM_HANDLE}</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          {onToggleTheme && (
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-300" />
              ) : (
                <Moon className="h-4 w-4 text-blue-400" />
              )}
            </button>
          )}

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-700/80 p-2 text-slate-300 hover:border-slate-500 hover:text-white"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-slate-800 bg-[#0F172A] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Soluções &amp; Sistemas
            </div>
            {SOLUTIONS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-blue-400 font-bold">{item.tag}</span>
              </a>
            ))}

            <div className="my-2 border-t border-slate-800" />

            <a
              href="#projetos"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
            >
              Portfólio de Projetos
            </a>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
            >
              Contato
            </a>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-pink-500/35 bg-pink-500/10 px-4 py-2.5 text-sm font-semibold text-pink-200"
              >
                <Instagram className="h-4 w-4 text-pink-400" />
                <span>Instagram {INSTAGRAM_HANDLE}</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Chamar no WhatsApp (81) 98425-5125</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

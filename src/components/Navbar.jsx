import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppButton';
import { getWhatsAppUrl } from '../utils/whatsapp';

const NAV_LINKS = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Gestão de Igrejas', href: '#gestao-igrejas' },
  { label: 'BI & KPIs', href: '#kpis' },
  { label: 'CRM Telecom', href: '#crm-telecom' },
  { label: 'Jogos Kids', href: '#jogos-kids' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cyan-500/15 bg-[#040B16]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#topo" className="focus:outline-none">
          <BrandLogo compact />
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
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

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-700/80 p-2 text-slate-300 lg:hidden hover:border-cyan-400/50 hover:text-white"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-[#071224] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/70 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Chamar no WhatsApp (81) 98425-5125</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

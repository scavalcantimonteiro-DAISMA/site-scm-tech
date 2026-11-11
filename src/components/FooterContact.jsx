import React from 'react';
import { ArrowRight, Code2, Instagram, Mail, ShieldCheck, Zap } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { WhatsAppIcon } from './WhatsAppButton';
import {
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  WHATSAPP_DISPLAY,
  getWhatsAppUrl,
} from '../utils/whatsapp';

export function FooterContact() {
  return (
    <footer
      id="contato"
      className="relative border-t border-cyan-500/20 bg-[#030812] pt-16 pb-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top CTA Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-400/25 relative overflow-hidden">
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                <Zap className="h-3.5 w-3.5" />
                <span>Soluções Digitais Sob Medida</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">
                Transforme sua ideia em realidade digital com a SCM Tech
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base max-w-2xl">
                Precisa de um ERP, CRM para provedor, aplicativo PWA, robô de WhatsApp, dashboard de KPIs ou
                plataforma para sua igreja? Clique abaixo e fale diretamente comigo pelo WhatsApp.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:scale-[1.02] hover:bg-emerald-400"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Chamar no WhatsApp: {WHATSAPP_DISPLAY}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Official Seal Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="rounded-full p-2 bg-gradient-to-tr from-cyan-400/40 to-blue-600/40 shadow-2xl">
                <img
                  src="/assets/logo-scm-badge.jpg"
                  alt="Selo Oficial SCM Tech Desenvolvimento de Software"
                  className="h-40 w-40 rounded-full object-cover bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact cards + Differentials */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-2xl p-5 flex items-center gap-4 transition hover:border-emerald-400/50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <WhatsAppIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">WhatsApp Direto</div>
              <div className="text-base font-bold text-white">{WHATSAPP_DISPLAY}</div>
              <div className="text-xs text-emerald-300">Clique para iniciar conversa →</div>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="glass-panel rounded-2xl p-5 flex items-center gap-4 transition hover:border-cyan-400/50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
              <Mail className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">E-mail Comercial</div>
              <div className="text-sm sm:text-base font-bold text-white truncate">{CONTACT_EMAIL}</div>
              <div className="text-xs text-cyan-300">Enviar mensagem →</div>
            </div>
          </a>

          <a
            href="https://instagram.com/scmtech"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-2xl p-5 flex items-center gap-4 transition hover:border-pink-400/50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/15 text-pink-400">
              <Instagram className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Instagram</div>
              <div className="text-base font-bold text-white">{INSTAGRAM_HANDLE}</div>
              <div className="text-xs text-pink-300">Acompanhe novidades →</div>
            </div>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800/80 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <BrandLogo compact />

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5 text-cyan-400" />
              Sistemas, Apps PWA, BI &amp; Automação
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              © {new Date().getFullYear()} SCM Tech — Saulo Cavalcanti Monteiro
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

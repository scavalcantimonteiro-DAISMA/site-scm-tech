import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export function WhatsAppIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16.004c0 2.35.614 4.644 1.78 6.666L2.56 29.56l7.064-1.852a13.28 13.28 0 0 0 6.38 1.63h.006c7.36 0 13.333-5.973 13.333-13.334 0-3.562-1.387-6.911-3.906-9.43a13.248 13.248 0 0 0-9.433-3.907Zm0 24.427h-.005a11.06 11.06 0 0 1-5.638-1.544l-.404-.24-4.191 1.099 1.119-4.086-.263-.419a11.045 11.045 0 0 1-1.693-5.899c0-6.115 4.974-11.089 11.092-11.089 2.962 0 5.747 1.154 7.84 3.249a11.015 11.015 0 0 1 3.246 7.842c0 6.115-4.975 11.087-11.093 11.087Zm6.082-8.303c-.333-.167-1.972-.973-2.278-1.084-.306-.111-.528-.167-.751.167-.222.333-.862 1.084-1.057 1.307-.194.222-.389.25-.722.083-.333-.167-1.407-.519-2.681-1.655-.991-.884-1.66-1.976-1.855-2.31-.195-.333-.021-.513.146-.68.15-.149.333-.389.5-.583.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.751-1.807-1.029-2.474-.271-.651-.546-.563-.751-.573-.194-.01-.417-.012-.639-.012s-.584.083-.89.417c-.306.333-1.168 1.141-1.168 2.781s1.196 3.226 1.363 3.448c.167.222 2.352 3.591 5.698 5.035.796.344 1.417.549 1.901.703.799.254 1.526.218 2.101.132.641-.096 1.972-.806 2.25-1.585.278-.778.278-1.445.194-1.585-.083-.139-.306-.222-.639-.389Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar comigo no WhatsApp (81) 98425-5125"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-emerald-500 p-3.5 sm:px-5 sm:py-3.5 text-slate-950 shadow-[0_10px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:scale-105 hover:bg-emerald-400"
    >
      <span className="absolute -inset-1 rounded-full bg-emerald-400/35 animate-ping opacity-60 pointer-events-none" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <div className="relative hidden sm:flex flex-col text-left leading-tight">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-950/80">
          WhatsApp Direto
        </span>
        <span className="text-sm font-bold">81 98425-5125</span>
      </div>
    </a>
  );
}

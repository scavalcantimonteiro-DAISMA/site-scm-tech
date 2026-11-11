import React from 'react';

export function BrandLogo({ showSubtext = true, compact = false }) {
  return (
    <div className="inline-flex items-center gap-3 select-none group">
      {/* Crisp vector emblem matching the official SCM Tech diamond/cross mark */}
      <div className="relative flex items-center justify-center">
        <div className="absolute -inset-1 rounded-xl bg-cyan-400/20 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
        <svg
          viewBox="0 0 120 110"
          className={`${compact ? 'w-9 h-9' : 'w-11 h-11'} relative drop-shadow-[0_4px_12px_rgba(0,212,255,0.28)]`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logomarca SCM Tech"
        >
          {/* Left geometric chevron (deep corporate navy + glowing cyan edge) */}
          <path
            d="M54 8L10 55L54 102V84L28 55L54 26V8Z"
            fill="url(#scmLeftGrad)"
          />
          <path
            d="M54 26L34 48H54V26Z"
            fill="#1E4E96"
          />
          {/* Right geometric chevron (steel blue) */}
          <path
            d="M66 8L110 55L66 102V84L92 55L66 26V8Z"
            fill="url(#scmRightGrad)"
          />
          <path
            d="M66 26L86 48H66V26Z"
            fill="#6E8AA8"
          />
          {/* Center cross core */}
          <path
            d="M60 19L70 30V48H86L95 55L86 62H70V80L60 91L50 80V62H34L25 55L34 48H50V30L60 19Z"
            fill="url(#scmCenterGrad)"
            stroke="rgba(0, 212, 255, 0.45)"
            strokeWidth="1.2"
          />
          <defs>
            <linearGradient id="scmLeftGrad" x1="10" y1="8" x2="54" y2="102" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#123063" />
            </linearGradient>
            <linearGradient id="scmRightGrad" x1="66" y1="8" x2="110" y2="102" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CBD5E1" />
              <stop offset="1" stopColor="#64748B" />
            </linearGradient>
            <linearGradient id="scmCenterGrad" x1="25" y1="19" x2="95" y2="91" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#3B6EA5" />
              <stop offset="1" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="flex items-baseline gap-1.5">
          <span className={`${compact ? 'text-lg' : 'text-xl'} font-display font-bold tracking-tight text-white`}>
            SCM
          </span>
          <span className={`${compact ? 'text-lg' : 'text-xl'} font-display font-semibold tracking-tight text-cyan-400`}>
            Tech
          </span>
        </div>
        {showSubtext && (
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-slate-400 font-medium">
            Desenvolvimento de Software
          </span>
        )}
      </div>
    </div>
  );
}

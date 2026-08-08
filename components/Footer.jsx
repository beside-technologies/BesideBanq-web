'use client';

import React from 'react';

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: '#0D0D24', color: 'rgba(255,255,255,0.5)' }} className="text-sm border-t border-slate-800/50">
      <div className="container py-16 space-y-12">

        {/* ── Top grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="col-span-2 space-y-5">
            {/* SVG logo — white/light version for dark footer */}
            <a href="/" className="inline-block flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/besidebanq-logo.svg"
                alt="BesideBanq"
                style={{ height: '38px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
                className="transition-opacity hover:opacity-85"
              />
            </a>
            <p className="text-xs leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>
              Helping people live a better life, globally. The financial super-app built to empower the global African diaspora and anyone moving money across borders.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: TwitterIcon,   href: 'https://x.com/besidebanq',          label: 'Twitter / X (@besidebanq)' },
                { icon: InstagramIcon, href: 'https://instagram.com/besidebanq',  label: 'Instagram (@besidebanq)' },
                { icon: LinkedinIcon,  href: 'https://linkedin.com/company/besidebanq', label: 'LinkedIn (@besidebanq)' },
                { icon: YoutubeIcon,   href: 'https://youtube.com/@besidebanq',   label: 'YouTube (@besidebanq)' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(44,43,154,0.5)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}>
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>

            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-body)' }}>
              © 2026 BesideBanq Inc. All rights reserved.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>Products</div>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                ['BanqDrop', '#features'],
                ['Euda Companion', '#euda'],
                ['Buddy Escrow', '#audience'],
                ['USD Savings', '#calculator'],
                ['China CNY Rails', '#calculator'],
                ['eSIM & Gift Cards', '#esim'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>Company</div>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                ['About BesideBanq', '#audience'],
                ['Contact Us', '/contact'],
                ['Careers', '#audience'],
                ['Press & Brand', '#audience'],
                ['Corridor Rates', '#calculator'],
                ['Blog', '#'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>Legal</div>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                ['Terms of Service', '#'],
                ['Privacy Policy', '/privacy'],
                ['Cookie Preferences', '#'],
                ['Security Disclosures', '#security'],
                ['AML Policy', '#'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Regulatory disclaimer ─────────────────────────────────── */}
        <div className="pt-8 text-[11px] leading-relaxed space-y-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-body)' }}>
          <p>
            <strong style={{ color: 'rgba(255,255,255,0.35)' }}>Disclaimer:</strong>{' '}
            BesideBanq is a financial technology platform, not a bank. Banking, brokerage, and payout services are provided by our licensed partner financial institutions and payment service providers in their respective jurisdictions.
          </p>
          <p>
            BesideBanq is not a money exchange or cryptocurrency exchange. BanqDrop is an instant money transfer feature powered by licensed payment rails. Savings features are provided in collaboration with licensed third-party custodial asset managers.
          </p>
        </div>

      </div>
    </footer>
  );
}

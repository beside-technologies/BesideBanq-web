'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';

export default function Navbar({ isPreLaunch, onOpenWaitlistModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Products',       href: '#features' },
    { label: 'Audience',       href: '#audience' },
    { label: 'Euda AI',        href: '#euda',       accent: true },
    { label: 'Rates & Speeds', href: '#calculator' },
    { label: 'Security',       href: '#security' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={isScrolled ? {
        background: 'rgba(240, 241, 255, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(44, 43, 154, 0.1)',
        boxShadow: '0 4px 24px rgba(44, 43, 154, 0.06)',
        padding: '10px 0',
      } : {
        background: 'transparent',
        padding: '20px 0',
      }}
    >
      <div className="container flex items-center justify-between gap-6">

        {/* ── Logo ──────────────────────────────────────────────────── */}
        <a href="/" className="flex-shrink-0 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/besidebanq-logo.svg"
            alt="BesideBanq"
            style={{ height: '38px', width: 'auto', display: 'block' }}
            className="transition-opacity group-hover:opacity-85"
          />
        </a>

        {/* ── Desktop Nav ──────────────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href, accent }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold transition-colors duration-200 flex items-center gap-1"
              style={{ color: accent ? 'var(--brand-violet)' : 'var(--text-sub)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--brand-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = accent ? 'var(--brand-violet)' : 'var(--text-sub)'}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {isPreLaunch ? (
            <button
              onClick={onOpenWaitlistModal}
              className="btn-primary text-sm px-5 py-2.5 flex items-center gap-2"
            >
              <span>Claim your @tag</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => alert('Redirecting to BesideBanq Web Dashboard...')}
                className="text-sm font-semibold transition-colors"
                style={{ color: 'var(--text-sub)' }}
              >
                Log In
              </button>
              <button
                onClick={onOpenWaitlistModal}
                className="btn-primary text-sm px-5 py-2.5"
              >
                <Smartphone className="w-4 h-4" />
                <span>Get the App</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

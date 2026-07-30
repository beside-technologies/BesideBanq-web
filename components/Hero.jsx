'use client';

import React, { useState } from 'react';
import { Bot, Check, ArrowRight, ShieldCheck, Clock, Send, CreditCard } from 'lucide-react';

export default function Hero({ isPreLaunch, onOpenWaitlistModal, onReservedTag }) {
  const [handleInput, setHandleInput] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);

  const handleInputChange = (e) => {
    const val = e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '');
    setHandleInput(val);
    if (val.length >= 3) {
      setIsChecking(true);
      setTimeout(() => {
        setIsChecking(false);
        setIsAvailable(true);
      }, 300);
    } else {
      setIsAvailable(null);
    }
  };

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    if (!handleInput || handleInput.length < 3) return;
    onReservedTag(handleInput);
    onOpenWaitlistModal();
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>

      {/* Ambient background glow */}
      <div className="glow-orb glow-orb-lavender top-0 left-0 w-[600px] h-[600px] opacity-70" />
      <div className="glow-orb glow-orb-violet bottom-0 right-0 w-[500px] h-[500px] opacity-50" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left: Hero Copy ─────────────────────────────────────────── */}
          <div className="lg:col-span-7 text-left space-y-7">

            {/* Pre-launch badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold"
              style={{ background: 'rgba(44,43,154,0.08)', color: 'var(--brand-primary)', border: '1px solid rgba(44,43,154,0.18)' }}>
              <span className="flex h-2 w-2 rounded-full animate-ping" style={{ background: 'var(--brand-teal)' }} />
              <span>Next-Gen Diaspora Financial Super-App</span>
              <span style={{ color: 'var(--brand-lavender)' }}>|</span>
              <span className="flex items-center gap-1" style={{ color: 'var(--brand-violet)' }}>
                <Bot className="w-3.5 h-3.5" style={{ color: 'var(--brand-primary)' }} />
                Euda AI Powered
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-normal" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)' }}>
              Helping you live a{' '}
              <br className="hidden sm:inline" />
              <span style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                better life, globally.
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: 'var(--text-sub)' }}>
              Move money home with instant{' '}
              <span className="font-bold" style={{ color: 'var(--text-main)' }}>BanqDrop</span>{' '}
              via @tag, save in inflation-protected USD, and let{' '}
              <span className="font-bold" style={{ color: 'var(--brand-violet)' }}>Euda AI</span>{' '}
              manage your finances autonomously.
            </p>

            {/* @tag Reservation Widget (Pre-Launch) */}
            {isPreLaunch ? (
              <div className="space-y-5 pt-1">
                <form onSubmit={handleClaimSubmit} className="max-w-xl">

                  {/* ── Mobile: Card layout ── Desktop: Single pill ── */}

                  {/* DESKTOP pill (hidden on mobile) */}
                  <div className="hidden sm:flex items-center gap-2 p-2 rounded-full shadow-xl"
                    style={{
                      background: '#FFFFFF',
                      border: '1.5px solid rgba(44,43,154,0.2)',
                      boxShadow: '0 12px 40px rgba(44,43,154,0.12)',
                    }}>
                    <div className="flex-1 flex items-center gap-1.5 px-4 py-3">
                      <span className="text-xl font-extrabold" style={{ color: 'var(--brand-primary)' }}>@</span>
                      <input
                        type="text"
                        value={handleInput}
                        onChange={handleInputChange}
                        placeholder="yourname"
                        className="w-full bg-transparent text-lg font-bold focus:outline-none"
                        style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}
                        required
                      />
                      {isChecking && (
                        <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin flex-shrink-0"
                          style={{ borderColor: 'var(--brand-primary)' }} />
                      )}
                      {isAvailable && !isChecking && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                          style={{ background: 'rgba(10,236,209,0.12)', color: '#00967D', border: '1px solid rgba(10,236,209,0.3)' }}>
                          <Check className="w-3 h-3" /> Available
                        </span>
                      )}
                    </div>
                    <button type="submit" className="btn-primary text-sm px-7 py-3.5 rounded-full whitespace-nowrap flex-shrink-0">
                      <span>Claim @tag</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* MOBILE card (visible only on mobile) */}
                  <div className="sm:hidden rounded-2xl overflow-hidden shadow-xl"
                    style={{
                      background: '#FFFFFF',
                      border: '1.5px solid rgba(44,43,154,0.18)',
                      boxShadow: '0 12px 40px rgba(44,43,154,0.12)',
                    }}>
                    {/* Input row */}
                    <div className="flex items-center gap-2 px-5 py-4"
                      style={{ borderBottom: '1px solid rgba(44,43,154,0.08)' }}>
                      <span className="text-2xl font-extrabold flex-shrink-0" style={{ color: 'var(--brand-primary)' }}>@</span>
                      <input
                        type="text"
                        value={handleInput}
                        onChange={handleInputChange}
                        placeholder="yourname"
                        className="flex-1 bg-transparent text-lg font-bold focus:outline-none"
                        style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)', minWidth: 0 }}
                        required
                      />
                      {isChecking && (
                        <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin flex-shrink-0"
                          style={{ borderColor: 'var(--brand-primary)' }} />
                      )}
                      {isAvailable && !isChecking && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap"
                          style={{ background: 'rgba(10,236,209,0.12)', color: '#00967D', border: '1px solid rgba(10,236,209,0.3)' }}>
                          <Check className="w-3 h-3" /> Available
                        </span>
                      )}
                    </div>
                    {/* Button row — full width, no extra margin */}
                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 text-base font-bold text-white"
                      style={{ background: 'var(--gradient-primary)', fontFamily: 'var(--font-heading)' }}>
                      <span>Claim @tag</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </form>

                {/* Trust signals */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold pt-1">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                    style={{ background: 'rgba(10,236,209,0.08)', color: '#007A68', border: '1px solid rgba(10,236,209,0.25)' }}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>Handle guaranteed for <strong>14 days</strong> post-launch</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                    style={{ background: 'rgba(44,43,154,0.05)', color: 'var(--brand-primary)', border: '1px solid rgba(44,43,154,0.12)' }}>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Instant Email OTP Verification</span>
                  </div>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex -space-x-2">
                    {[['J', '#2C2B9A'], ['A', '#7B5CF5'], ['K', '#0AECD1'], ['M', '#4B3FD0']].map(([l, c]) => (
                      <div key={l} className="w-8 h-8 rounded-full ring-2 ring-white flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                        style={{ background: c }}>
                        {l}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
                    <span className="font-extrabold" style={{ color: 'var(--text-main)' }}>12,482 people</span> have already claimed their @tag
                  </p>
                </div>
              </div>
            ) : (
              /* Post-Launch App Store Badges */
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {[
                  { label: 'Download on the', store: 'App Store', icon: '🍎' },
                  { label: 'GET IT ON', store: 'Google Play', icon: '▶' },
                ].map(({ label, store, icon }) => (
                  <button key={store}
                    onClick={() => alert(`Redirecting to ${store}...`)}
                    className="flex items-center gap-3 px-6 py-3 rounded-2xl shadow-lg transition-all hover:-translate-y-0.5"
                    style={{ background: 'var(--text-main)', color: '#fff' }}>
                    <span className="text-2xl">{icon}</span>
                    <div className="text-left leading-none">
                      <div className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</div>
                      <div className="text-base font-bold">{store}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: Phone Mockup ──────────────────────────────────────── */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs">

              {/* Teal glow ring behind phone — matches the cyan phone border in designs */}
              <div className="absolute inset-0 rounded-[50px] blur-2xl opacity-30 scale-95"
                style={{ background: 'var(--brand-teal)' }} />

              {/* Phone Frame — matches the teal border around iPhone mockups in designs */}
              <div className="relative rounded-[44px] p-1 animate-float shadow-2xl"
                style={{
                  background: 'linear-gradient(145deg, #0AECD1, #4B3FD0)',
                  boxShadow: '0 30px 80px rgba(44,43,154,0.35), 0 0 0 1px rgba(10,236,209,0.4)',
                }}>

                {/* Inner phone body */}
                <div className="bg-[#0D0D24] rounded-[40px] p-0.5">
                  {/* Screen */}
                  <div className="rounded-[38px] overflow-hidden" style={{ background: 'var(--bg-primary)' }}>

                    {/* Status bar */}
                    <div className="flex items-center justify-between px-5 pt-4 pb-2 text-[11px] font-bold" style={{ color: 'var(--text-main)' }}>
                      <span>9:41</span>
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span>●●●●</span><span>WiFi</span><span>🔋</span>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="px-4 pb-5 space-y-3">

                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white"
                            style={{ background: 'var(--gradient-primary)' }}>J</div>
                          <div>
                            <div className="text-[10px] font-semibold" style={{ color: 'var(--text-muted)' }}>Good morning,</div>
                            <div className="text-sm font-extrabold" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Jaiyeoluwa</div>
                          </div>
                        </div>
                        <div className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(44,43,154,0.1)', color: 'var(--brand-primary)' }}>@jaiye</div>
                      </div>

                      {/* Balance Card — gradient matching designs */}
                      <div className="p-4 rounded-2xl text-white relative overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #2C2B9A 0%, #4B3FD0 55%, #7B5CF5 100%)' }}>
                        <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10"
                          style={{ background: 'var(--brand-teal)', filter: 'blur(20px)' }} />
                        <div className="flex justify-between items-start text-[11px] mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                          <span>Total Balance (USD)</span>
                          <span className="px-2 py-0.5 rounded-full font-bold text-[10px]"
                            style={{ background: 'rgba(10,236,209,0.2)', color: '#0AECD1' }}>Inflation-Protected</span>
                        </div>
                        <div className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>$10,000.00</div>
                        <div className="flex justify-between items-center mt-2 pt-2 text-[10px]"
                          style={{ color: 'rgba(255,255,255,0.6)', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                          <span>Account Details &gt;</span>
                          <span className="font-mono">USDC Wallet</span>
                        </div>
                      </div>

                      {/* BanqDrop toast */}
                      <div className="bg-white p-2.5 rounded-xl flex items-center gap-2 shadow-sm"
                        style={{ border: '1px solid rgba(44,43,154,0.08)' }}>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
                          style={{ background: 'rgba(10,236,209,0.15)', color: '#007A68' }}>⚡</div>
                        <div className="flex-1">
                          <div className="text-[11px] font-bold" style={{ color: 'var(--text-main)' }}>BanqDrop Received!</div>
                          <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>@amara sent you <b>100 USDC</b></div>
                        </div>
                        <span className="text-[9px]" style={{ color: 'var(--text-light)' }}>Just now</span>
                      </div>

                      {/* Quick actions */}
                      <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-bold">
                        {[
                          { icon: '+', label: 'Add' },
                          { icon: <Send className="w-3.5 h-3.5" />, label: 'Send' },
                          { icon: <Bot className="w-3.5 h-3.5" />, label: 'Euda' },
                          { icon: <CreditCard className="w-3.5 h-3.5" />, label: 'Cards' },
                        ].map(({ icon, label }) => (
                          <div key={label} className="bg-white rounded-xl py-2.5 flex flex-col items-center gap-1"
                            style={{ border: '1px solid rgba(44,43,154,0.08)', color: 'var(--brand-primary)' }}>
                            <span className="text-sm">{icon}</span>
                            <span style={{ color: 'var(--text-sub)' }}>{label}</span>
                          </div>
                        ))}
                      </div>

                      {/* UMA Address Banner — deep indigo like designs */}
                      <div className="p-3 rounded-xl text-white"
                        style={{ background: 'linear-gradient(120deg, #2C2B9A 0%, #4B3FD0 100%)' }}>
                        <div className="text-[11px] font-extrabold mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>Claim your UMA Address</div>
                        <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.7)' }}>Receive in any currency, near-instant</div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

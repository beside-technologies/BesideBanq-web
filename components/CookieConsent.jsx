'use client';

import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart2, Settings2, ChevronDown } from 'lucide-react';

const COOKIE_KEY = 'bb_cookie_consent';

const defaultPrefs = {
  necessary: true,       // always on
  performance: false,
  analytics: false,
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);
  const [saved, setSaved] = useState(false);

  // Show banner only if user hasn't consented yet
  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) {
        // Slight delay so page loads first
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (chosenPrefs) => {
    try {
      localStorage.setItem(COOKIE_KEY, JSON.stringify({ ...chosenPrefs, necessary: true, savedAt: Date.now() }));
    } catch {}
    setSaved(true);
    setTimeout(() => setVisible(false), 600);
  };

  const acceptAll = () => save({ necessary: true, performance: true, analytics: true });
  const rejectAll = () => save({ necessary: true, performance: false, analytics: false });
  const saveChoices = () => save(prefs);

  const toggle = (key) => {
    if (key === 'necessary') return; // locked
    setPrefs(p => ({ ...p, [key]: !p[key] }));
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop (only when settings open) */}
      {showSettings && (
        <div
          className="fixed inset-0 z-[998]"
          style={{ background: 'rgba(13,13,36,0.55)', backdropFilter: 'blur(4px)' }}
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* ── Cookie Banner (bottom bar) ───────────────────────────────────── */}
      {!showSettings && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-[999] transition-all duration-500 ${saved ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(44,43,154,0.12)',
            boxShadow: '0 -8px 40px rgba(44,43,154,0.1)',
          }}
        >
          <div className="container py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

              {/* Icon + Text */}
              <div className="flex items-start gap-3 flex-1">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(44,43,154,0.08)' }}>
                  <Cookie className="w-4.5 h-4.5" style={{ color: 'var(--brand-primary)', width: '18px', height: '18px' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                    We value your privacy
                  </p>
                  <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    We use strictly necessary cookies to keep this site secure. You can accept or manage optional categories.{' '}
                    <a href="/privacy" className="underline underline-offset-2 font-semibold" style={{ color: 'var(--brand-primary)' }}>
                      Cookie Policy
                    </a>
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="text-xs font-bold px-4 py-2.5 rounded-full transition-all"
                  style={{
                    color: 'var(--brand-primary)',
                    background: 'rgba(44,43,154,0.06)',
                    border: '1px solid rgba(44,43,154,0.15)',
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <Settings2 className="w-3.5 h-3.5" />
                    Manage
                  </span>
                </button>
                <button
                  onClick={rejectAll}
                  className="text-xs font-bold px-4 py-2.5 rounded-full transition-all"
                  style={{
                    color: 'var(--text-sub)',
                    background: '#F0F1FF',
                    border: '1px solid rgba(44,43,154,0.1)',
                  }}
                >
                  Reject all
                </button>
                <button
                  onClick={acceptAll}
                  className="text-xs font-bold px-5 py-2.5 rounded-full text-white transition-all hover:-translate-y-0.5"
                  style={{ background: 'var(--gradient-primary)', boxShadow: '0 4px 16px rgba(44,43,154,0.25)' }}
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Cookie Preferences Modal ─────────────────────────────────────── */}
      {showSettings && (
        <div className="fixed bottom-0 left-0 right-0 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[999] w-full sm:max-w-lg sm:rounded-2xl overflow-hidden"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(44,43,154,0.12)',
            boxShadow: '0 30px 80px rgba(44,43,154,0.2)',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
          }}>

          {/* Modal Header */}
          <div className="flex items-start justify-between p-5 pb-4"
            style={{ borderBottom: '1px solid rgba(44,43,154,0.08)' }}>
            <div>
              <h2 className="text-lg font-bold" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                Cookie preferences
              </h2>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Choose which optional cookie categories to allow. Strictly necessary cookies are always on.
              </p>
            </div>
            <button onClick={() => setShowSettings(false)}
              className="ml-4 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{ color: 'var(--text-muted)', background: 'rgba(44,43,154,0.05)' }}>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Categories */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {[
              {
                key: 'necessary',
                icon: Shield,
                title: 'Strictly necessary',
                description: 'Required for secure sessions, form protection, and remembering your cookie choices. Always active; these cannot be switched off.',
                locked: true,
              },
              {
                key: 'performance',
                icon: Settings2,
                title: 'Performance & functionality',
                description: 'Helps remember optional preferences and improve how the site performs for you.',
                locked: false,
              },
              {
                key: 'analytics',
                icon: BarChart2,
                title: 'Analytics & customisation',
                description: 'Helps us understand how visitors use the site in aggregate, so we can improve the experience for everyone.',
                locked: false,
              },
            ].map(({ key, icon: Icon, title, description, locked }) => (
              <div key={key} className="flex items-start gap-4 p-4 rounded-xl"
                style={{ background: 'rgba(240,241,255,0.6)', border: '1px solid rgba(44,43,154,0.08)' }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ background: prefs[key] ? 'var(--brand-primary)' : 'rgba(44,43,154,0.08)' }}>
                  <Icon className="w-4 h-4" style={{ color: prefs[key] ? '#fff' : 'var(--brand-primary)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                      {title}
                    </span>
                    {/* Toggle Switch */}
                    <button
                      onClick={() => toggle(key)}
                      disabled={locked}
                      role="switch"
                      aria-checked={prefs[key]}
                      className="flex-shrink-0 relative w-11 h-6 rounded-full transition-all duration-300 focus:outline-none"
                      style={{
                        background: prefs[key] ? 'var(--brand-primary)' : 'rgba(44,43,154,0.15)',
                        cursor: locked ? 'not-allowed' : 'pointer',
                        opacity: locked ? 0.85 : 1,
                      }}
                    >
                      <span className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300"
                        style={{ transform: prefs[key] ? 'translateX(20px)' : 'translateX(0)' }} />
                    </button>
                  </div>
                  <p className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {description}
                    {locked && <span className="ml-1 font-semibold" style={{ color: 'var(--brand-primary)' }}>Always active.</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="p-5 space-y-2.5" style={{ borderTop: '1px solid rgba(44,43,154,0.08)' }}>
            <button
              onClick={acceptAll}
              className="w-full py-3.5 rounded-full text-sm font-bold text-white transition-all hover:brightness-105"
              style={{ background: 'var(--gradient-primary)', boxShadow: '0 6px 20px rgba(44,43,154,0.25)' }}
            >
              Accept all
            </button>
            <button
              onClick={saveChoices}
              className="w-full py-3.5 rounded-full text-sm font-bold transition-all"
              style={{
                color: 'var(--brand-primary)',
                background: 'rgba(44,43,154,0.06)',
                border: '1.5px solid rgba(44,43,154,0.2)',
              }}
            >
              Save choices
            </button>
            <button
              onClick={rejectAll}
              className="w-full py-3.5 rounded-full text-sm font-semibold transition-all"
              style={{ color: 'var(--text-muted)', background: 'transparent' }}
            >
              Reject all
            </button>
          </div>
        </div>
      )}
    </>
  );
}

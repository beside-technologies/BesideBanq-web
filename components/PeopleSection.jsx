'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// ── Media config ───────────────────────────────────────────────────────────
// Videos: each plays for MAX 4 seconds then advances automatically
const VIDEOS = [
  { src: '/media/204292-923909617_medium.mp4', label: 'Global movement' },
  { src: '/media/21115-315137069_medium.mp4',  label: 'Connecting lives' },
  { src: '/media/25208-348661247_medium.mp4',  label: 'Financial freedom' },
];

const VIDEO_DURATION = 4000; // 4 seconds max per video

// Story cards — Pan-African & Global Trade Representation (Clean Name & Location Split)
const STORIES = [
  {
    img: '/media/blushing_woman.jpg',
    name: 'Amina B.',
    location: 'Abuja & Kano',
    region: 'NG - West Africa',
    quote: '"I manage tech operations between Abuja and Kano. Receiving funds via @tag with zero NIBSS delay helps me run my team smoothly."',
    tag: 'NIBSS & BanqDrop',
  },
  {
    img: '/media/asian_businessman.jpg',
    name: 'Wei Zhang',
    location: 'Guangzhou',
    region: 'CN - Asia Corridor',
    quote: '"I export wholesale merchandise across Africa. BesideBanq\'s CNY rail means African merchants pay in local funds and I receive CNY instantly."',
    tag: 'Alipay Supplier Rail',
  },
  {
    img: '/media/student_smiling_phone.jpg',
    name: 'Tendai K.',
    location: 'Harare & London',
    region: 'ZW - Southern Africa',
    quote: '"Paying university tuition and sending money back to Harare used to take 4 days over SWIFT. BesideBanq delivers USD in seconds."',
    tag: 'USD Direct Deposit',
  },
  {
    img: '/media/woman_holding_phone_to_ear_and_smiling.jpg',
    name: 'Wanjiku N.',
    location: 'Nairobi',
    region: 'KE - East Africa',
    quote: '"I auto-save in USD and settle suppliers directly via M-PESA. Euda keeps my budget balanced when traveling with eSIM data."',
    tag: 'M-PESA & USD Vault',
  },
  {
    img: '/media/mother_receiving.png',
    name: 'Mireille M.',
    location: 'Douala',
    region: 'CM - Central Africa',
    quote: '"My business in Douala receives payments from clients across West & Central Africa. FCFA mobile money settlement is instant."',
    tag: 'XAF Orange Money',
  },
  {
    img: '/media/business_handshake.png',
    name: 'Tariq & Partners',
    location: 'Algiers',
    region: 'DZ - North Africa',
    quote: '"Managing multi-currency EUR and USD settlement between Algiers, Paris, and cross-border trade hubs is completely seamless."',
    tag: 'EUR/USD Multi-Wallet',
  },
];

export default function PeopleSection({ onOpenWaitlistModal }) {
  // ── Video slideshow state ───────────────────────────────────────────────
  const [videoIdx, setVideoIdx] = useState(0);
  const timerRef = useRef(null);

  const advanceVideo = useCallback(() => {
    setVideoIdx(i => (i + 1) % VIDEOS.length);
  }, []);

  // Advance video every 4 seconds cleanly without any pause/unmount
  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(advanceVideo, VIDEO_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [videoIdx, advanceVideo]);

  // ── Story carousel state ────────────────────────────────────────────────
  const [activeStory, setActiveStory] = useState(null);

  return (
    <section id="features" className="py-24 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="container space-y-20">

        {/* ── Section header — Left-aligned Editorial Split Layout ─────────────────────────── */}
        <ScrollReveal direction="up" delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pb-4 border-b border-slate-200/80">
            <div className="md:col-span-7 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Global Community</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Built for the world's{' '}
                <span className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  global movers
                </span>
              </h2>
            </div>
            <div className="md:col-span-5 md:text-right">
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-md md:ml-auto">
                From Algiers to Douala, Nairobi to Harare, Guangzhou to Abuja &amp; Accra: BesideBanq connects global movers across 150+ settlement corridors.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Video Slideshow — Seamless Crossfade Player ────────────────────────── */}
        <ScrollReveal direction="scale" delay={150}>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: '16/7', minHeight: '280px', maxHeight: '480px', background: '#0D0D24' }}>

            {/* Stacked Seamless Videos (Zero pause, continuous playback) */}
            {VIDEOS.map((vid, i) => (
              <video
                key={vid.src}
                src={vid.src}
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out pointer-events-none"
                style={{
                  opacity: i === videoIdx ? 1 : 0,
                  zIndex: i === videoIdx ? 2 : 1,
                }}
              />
            ))}

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-10" style={{
              background: 'linear-gradient(to top, rgba(13,13,36,0.8) 0%, rgba(13,13,36,0.2) 50%, rgba(13,13,36,0.05) 100%)'
            }} />

            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between z-20">
              <p className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-heading)', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
                {VIDEOS[videoIdx].label}
              </p>

              {/* Progress dots */}
              <div className="flex items-center gap-2">
                {VIDEOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setVideoIdx(i)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: i === videoIdx ? '24px' : '8px',
                      height: '8px',
                      background: i === videoIdx ? '#0AECD1' : 'rgba(255,255,255,0.4)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Progress bar (4-second countdown) */}
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <div
                key={`progress-${videoIdx}`}
                className="h-full"
                style={{
                  background: 'var(--brand-teal)',
                  animation: `videoProgress ${VIDEO_DURATION}ms linear forwards`,
                }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* ── Story Cards Grid ───────────────────────────────────────── */}
        <div>
          <ScrollReveal direction="up" delay={200}>
            <h3 className="text-xl font-bold mb-8" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
              People we're building for
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STORIES.map((story, i) => (
              <ScrollReveal key={i} direction="up" delay={100 * (i % 3)}>
                <div
                  className="group relative rounded-2xl overflow-hidden cursor-pointer h-full"
                  style={{ background: '#fff', border: '1px solid rgba(44,43,154,0.08)', boxShadow: '0 4px 20px rgba(44,43,154,0.06)' }}
                  onClick={() => setActiveStory(activeStory === i ? null : i)}
                >
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={story.img}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'brightness(0.92)' }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(44,43,154,0.7) 0%, transparent 60%)' }} />

                  {/* Tag badge */}
                  <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.92)', color: 'var(--brand-primary)' }}>
                    {story.tag}
                  </span>
                </div>

                {/* Card body — Clean Name & Location separation */}
                <div className="p-4 space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                        {story.name}
                      </h3>
                      <p className="text-xs font-semibold text-indigo-600/90 pt-0.5">
                        {story.location}
                      </p>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60 whitespace-nowrap">
                      {story.region}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed italic text-slate-600 pt-1">
                    {story.quote}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          </div>
        </div>

        {/* ── Bottom CTA ────────────────────────────────────────────── */}
        <ScrollReveal direction="up" delay={250}>
          <div className="text-center">
            <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
              Join the community of global movers
            </p>
            <button
              onClick={onOpenWaitlistModal}
              className="btn-primary px-8 py-4 text-base"
            >
              <span>Reserve Your Unique @tag</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </div>

      {/* Inject the progress bar animation */}
      <style>{`
        @keyframes videoProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}

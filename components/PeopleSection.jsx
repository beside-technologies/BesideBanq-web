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

// Story cards — real photos (uploaded) + AI-generated diverse scenes
const STORIES = [
  {
    img: '/media/woman_holding_phone_to_ear_and_smiling.jpg',
    name: 'Amara, Lagos',
    flag: '🇳🇬',
    quote: '"I received rent money from my daughter in London in seconds. I did not even have to call her."',
    tag: 'Family Remittance',
  },
  {
    img: '/media/blushing_woman.jpg',
    name: 'Chidinma, Abuja',
    flag: '🇳🇬',
    quote: '"BanqDrop hit different. I sent money to my mum using just her @tag and it landed before I hung up."',
    tag: 'BanqDrop',
  },
  {
    img: '/media/student_fees.png',
    name: 'Fatima, Toronto',
    flag: '🇨🇦',
    quote: '"I paid my university fees directly from BesideBanq. No Western Union, no hidden charges, just done."',
    tag: 'Student Payments',
  },
  {
    img: '/media/mother_receiving.png',
    name: 'Mama Akinola, Ibadan',
    flag: '🇳🇬',
    quote: '"My son sends every month from the UK. Before it took days. Now I see it the moment he sends. Euda even tells me when it is coming."',
    tag: 'Family Wallet',
  },
  {
    img: '/media/chinese_businessman.png',
    name: 'Wei Zhang, Guangzhou',
    flag: '🇨🇳',
    quote: '"I ship goods to Lagos and Accra weekly. BesideBanq\'s CNY corridor means my partners receive instantly and I see confirmation in the app."',
    tag: 'Trade Payments',
  },
  {
    img: '/media/business_handshake.png',
    name: 'Arjun & Emmanuel',
    flag: 'IN - Global',
    quote: '"We do business across three continents. BesideBanq is the only app that makes cross-border business feel local."',
    tag: 'Global Trade',
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
                From Lagos to London, Guangzhou to Accra, Toronto to Ibadan: BesideBanq moves with the people who make the world run.
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

                {/* Card body */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{story.flag}</span>
                    <span className="text-sm font-bold" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                      {story.name}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>
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

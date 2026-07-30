'use client';

import React, { useState } from 'react';
import { Wifi, Gift, Search, Globe, Check, ArrowRight } from 'lucide-react';

export default function ESimSearch() {
  const [searchQuery, setSearchQuery] = useState('Ghana');
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  const countries = [
    { name: "Ghana", flag: "🇬🇭", plan: "1 GB / 7 Days", price: "$2.50" },
    { name: "Nigeria", flag: "🇳🇬", plan: "3 GB / 30 Days", price: "$4.80" },
    { name: "Kenya", flag: "🇰🇪", plan: "2 GB / 15 Days", price: "$3.90" },
    { name: "United Kingdom", flag: "🇬🇧", plan: "5 GB / 30 Days", price: "$6.50" },
    { name: "South Africa", flag: "🇿🇦", plan: "2 GB / 14 Days", price: "$4.00" },
    { name: "United States", flag: "🇺🇸", plan: "10 GB / 30 Days", price: "$12.00" }
  ];

  const filtered = countries.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Glow orb */}
      <div className="glow-orb top-10 right-1/4 w-[350px] h-[350px] bg-purple-500/20" />

      <div className="container relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: eSIM Country & Data Plan Search */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30">
              <Wifi className="w-3.5 h-3.5" />
              <span>Lifestyle Tab — Global eSIM Data</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Stay connected anywhere in <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">150+ countries</span>.
            </h2>

            <p className="text-slate-400 text-base leading-relaxed">
              Buy low-cost mobile data roaming packages directly inside BesideBanq. No swapping physical SIMs — activate your eSIM in 2 clicks.
            </p>

            {/* Interactive Search Bar */}
            <div className="space-y-4 pt-2">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where are you traveling next? (e.g. Ghana, UK)..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-slate-500 text-sm font-semibold"
                />
              </div>

              {/* Live Country Card Results */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filtered.length > 0 ? (
                  filtered.slice(0, 4).map((c, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{c.flag}</span>
                        <div>
                          <div className="font-bold text-xs text-white">{c.name}</div>
                          <div className="text-[11px] text-slate-400">{c.plan}</div>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-sky-400 bg-sky-500/20 px-2 py-1 rounded">
                        {c.price}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-slate-400 p-4">No countries found for "{searchQuery}".</div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Gift Envelope Interactive Unboxing Demo */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="glass-card-dark p-6 sm:p-8 rounded-3xl w-full max-w-md border border-purple-500/30 text-center space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold">
                <Gift className="w-3.5 h-3.5" />
                <span>Global Digital Gifting</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                Gift envelopes for loved ones.
              </h3>

              {/* Envelope Interactive Box */}
              <div 
                onClick={() => setIsGiftOpen(!isGiftOpen)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-500 ${
                  isGiftOpen 
                    ? 'bg-gradient-to-br from-purple-900/80 to-indigo-900/80 border-purple-400 shadow-2xl scale-105' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                {!isGiftOpen ? (
                  <div className="space-y-3 py-4">
                    <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-3xl mx-auto shadow-lg animate-bounce">
                      ✉️
                    </div>
                    <div className="text-sm font-bold text-white">Tap to Rip Open Digital Gift Envelope</div>
                    <div className="text-xs text-purple-300">From @jaiye for @amara</div>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="text-3xl">🎉</div>
                    <div className="text-xs uppercase tracking-wider font-extrabold text-purple-300">Digital Gift Unboxed!</div>
                    <div className="text-2xl font-extrabold text-white">$50 Apple Store Gift Card</div>
                    <p className="text-xs text-slate-300 italic">
                      "Happy Birthday Amara! Treat yourself to something awesome 💙 — Jaiye"
                    </p>
                    <div className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-bold bg-emerald-500/20 px-3 py-1 rounded-full">
                      <Check className="w-3.5 h-3.5" /> Claimed instantly to wallet
                    </div>
                  </div>
                )}
              </div>

              <div className="text-xs text-slate-400">
                Send Apple, Amazon, Netflix, or custom cash gift envelopes globally.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

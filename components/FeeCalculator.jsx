'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, Zap, ShieldCheck, Clock, Check, RefreshCw } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FeeCalculator() {
  const [sendAmount, setSendAmount] = useState(500);
  const [corridor, setCorridor] = useState('cad-ngn'); // 'cad-ngn' | 'gbp-cny' | 'usd-ghs' | 'eur-kes'

  const corridors = {
    'cad-ngn': {
      sourceName: "Canada (CAD)",
      sourceSymbol: "CAD $",
      destName: "Nigeria (NGN)",
      destSymbol: "₦",
      rate: 1120.50,
      fee: 0.00,
      speed: "10 Seconds",
      rail: "Nigeria Local Banking Rail / BanqDrop"
    },
    'gbp-cny': {
      sourceName: "United Kingdom (GBP)",
      sourceSymbol: "£",
      destName: "China (CNY)",
      destSymbol: "¥",
      rate: 9.25,
      fee: 0.00,
      speed: "15 Seconds",
      rail: "Alipay & WeChat Pay Direct Payout"
    },
    'usd-ghs': {
      sourceName: "United States (USD)",
      sourceSymbol: "$",
      destName: "Ghana (GHS)",
      destSymbol: "GH₵",
      rate: 15.40,
      fee: 0.00,
      speed: "12 Seconds",
      rail: "Ghana Mobile Money / Bank Rail"
    },
    'eur-kes': {
      sourceName: "Europe (EUR)",
      sourceSymbol: "€",
      destName: "Kenya (KES)",
      destSymbol: "KSh",
      rate: 142.80,
      fee: 0.00,
      speed: "8 Seconds",
      rail: "M-PESA / Kenya Local Bank Rail"
    }
  };

  const active = corridors[corridor];
  const receivedAmount = (sendAmount * active.rate).toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white relative">
      <div className="container">
        
        {/* Title */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="badge-pill mx-auto">
              <Calculator className="w-3.5 h-3.5 text-indigo-600" />
              <span>Transparent Multi-Asset Rates</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Zero hidden fees. Near-instant settlement.
            </h2>
            <p className="text-lg text-slate-600">
              See exactly how much your recipient gets before you send. No transfer markup, no bank delays.
            </p>
          </div>
        </ScrollReveal>

        {/* Calculator Widget */}
        <ScrollReveal direction="scale" delay={150}>
          <div className="max-w-4xl mx-auto glass-card p-6 md:p-10 rounded-3xl border border-indigo-100 shadow-2xl space-y-8">
          
          {/* Corridor Selection Pills */}
          <div className="flex flex-wrap justify-center gap-2 text-xs font-bold">
            <button
              onClick={() => setCorridor('cad-ngn')}
              className={`px-4 py-2 rounded-full border transition-all ${
                corridor === 'cad-ngn' ? 'bg-[#1D1E81] text-white border-[#1D1E81] shadow-md' : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              🇨🇦 CAD ➔ 🇳🇬 NGN
            </button>
            <button
              onClick={() => setCorridor('gbp-cny')}
              className={`px-4 py-2 rounded-full border transition-all ${
                corridor === 'gbp-cny' ? 'bg-[#1D1E81] text-white border-[#1D1E81] shadow-md' : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              🇬🇧 GBP ➔ 🇨🇳 CNY (Alipay)
            </button>
            <button
              onClick={() => setCorridor('usd-ghs')}
              className={`px-4 py-2 rounded-full border transition-all ${
                corridor === 'usd-ghs' ? 'bg-[#1D1E81] text-white border-[#1D1E81] shadow-md' : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              🇺🇸 USD ➔ 🇬🇭 GHS
            </button>
            <button
              onClick={() => setCorridor('eur-kes')}
              className={`px-4 py-2 rounded-full border transition-all ${
                corridor === 'eur-kes' ? 'bg-[#1D1E81] text-white border-[#1D1E81] shadow-md' : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              🇪🇺 EUR ➔ 🇰🇪 KES (M-PESA)
            </button>
          </div>

          {/* Rate Calculator Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* You Send Input */}
            <div className="md:col-span-5 space-y-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                You Send ({active.sourceName})
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(Number(e.target.value))}
                  className="w-full px-4 py-4 rounded-2xl border border-slate-300 font-extrabold text-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-slate-50"
                  min={10}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                  {active.sourceSymbol}
                </span>
              </div>
            </div>

            {/* Middle Divider / Conversion Symbol */}
            <div className="md:col-span-2 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg shadow-sm">
                ➔
              </div>
            </div>

            {/* Recipient Gets Output */}
            <div className="md:col-span-5 space-y-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                Recipient Gets ({active.destName})
              </label>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={`${active.destSymbol} ${receivedAmount}`}
                  className="w-full px-4 py-4 rounded-2xl border border-emerald-300 font-extrabold text-2xl text-emerald-700 bg-emerald-50/50 focus:outline-none"
                />
              </div>
            </div>

          </div>

          {/* Transparent Breakdown Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="text-slate-500 font-semibold">Exchange Rate:</div>
              <div className="font-extrabold text-slate-900 text-sm">
                1 {active.sourceSymbol} = {active.rate} {active.destSymbol}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="text-slate-500 font-semibold">Transfer Fee:</div>
              <div className="font-extrabold text-emerald-600 text-sm flex items-center gap-1">
                <Check className="w-4 h-4" /> $0.00 (Zero Fee)
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="text-slate-500 font-semibold">Estimated Speed:</div>
              <div className="font-extrabold text-indigo-700 text-sm flex items-center gap-1">
                <Zap className="w-4 h-4 text-amber-500" /> {active.speed}
              </div>
            </div>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

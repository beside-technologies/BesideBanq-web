'use client';

import React, { useState } from 'react';
import { User, Briefcase, Zap, Shield, TrendingUp, Globe, Gift, Vote, ArrowRight, Check, X, Building, RefreshCw } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AudienceTabs() {
  const [activeTab, setActiveTab] = useState('individuals'); // 'individuals' | 'businesses'
  const [buddyVotes, setBuddyVotes] = useState({ member1: true, member2: true, member3: false });
  const [voteSubmitted, setVoteSubmitted] = useState(false);

  const handleVoteToggle = (memberKey) => {
    const updated = { ...buddyVotes, [memberKey]: !buddyVotes[memberKey] };
    setBuddyVotes(updated);
    setVoteSubmitted(true);
  };

  const isUnanimous = buddyVotes.member1 && buddyVotes.member2 && buddyVotes.member3;

  return (
    <section id="audience" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="container">
        
        {/* Section Header — Top Bar Layout */}
        <ScrollReveal direction="up" delay={0}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-slate-200/80 gap-6 mb-12">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Product Capabilities</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Built for individuals &amp; global trade.
              </h2>
              <p className="text-base md:text-lg text-slate-600 font-normal">
                Whether you're sending money to loved ones or settling international supplier invoices, BesideBanq gives you complete financial control.
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300 font-semibold text-sm shrink-0">
              <button
                onClick={() => setActiveTab('individuals')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'individuals'
                    ? 'bg-white text-[#1D1E81] shadow-md font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User className="w-4 h-4 text-[#4F46E5]" />
                <span>For Individuals</span>
              </button>
              <button
                onClick={() => setActiveTab('businesses')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'businesses'
                    ? 'bg-white text-[#1D1E81] shadow-md font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Briefcase className="w-4 h-4 text-[#7C3AED]" />
                <span>For Importers &amp; Businesses</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* TAB 1: FOR INDIVIDUALS */}
        {activeTab === 'individuals' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            
            {/* Feature 1: BanqDrop — Flagship Feature with Teal Accent */}
            <div className="bg-white p-6 space-y-4 hover:shadow-md transition-all duration-300 border border-slate-200/80 rounded-3xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/60 text-[#007A68] flex items-center justify-center font-bold">
                  <Zap className="w-6 h-6 text-[#007A68]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">BanqDrop Instant Send</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Send money instantly to any @tag. Free forever. No bank account numbers or SWIFT codes required.
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-700 font-medium">
                <span className="font-bold text-[#1D1E81]">@amara</span> sent you 100 USDC via BanqDrop
              </div>
            </div>

            {/* Feature 2: USD Savings */}
            <div className="bg-white p-6 space-y-4 hover:shadow-md transition-all duration-300 border border-slate-200/80 rounded-3xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-[#1D1E81] flex items-center justify-center font-bold">
                  <TrendingUp className="w-6 h-6 text-[#1D1E81]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">USD Savings</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protect your wealth from inflation by saving in USD wallets with automated compounding interest.
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs font-bold text-slate-800 flex justify-between">
                <span>Wealth Protection</span>
                <span className="text-[#1D1E81] font-extrabold">USD Stable Savings</span>
              </div>
            </div>

            {/* Feature 3: eSIM Mobile Data */}
            <div className="bg-white p-6 space-y-4 hover:shadow-md transition-all duration-300 border border-slate-200/80 rounded-3xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-[#1D1E81] flex items-center justify-center font-bold">
                  <Globe className="w-6 h-6 text-[#1D1E81]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">eSIM Mobile Data</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Instant mobile data roaming across 150+ countries without swapping physical SIM cards.
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs font-semibold text-slate-700">
                150+ Countries • From $2.50 / GB
              </div>
            </div>

            {/* Feature 4: Global Gift Cards */}
            <div className="bg-white p-6 space-y-4 hover:shadow-md transition-all duration-300 border border-slate-200/80 rounded-3xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-[#1D1E81] flex items-center justify-center font-bold">
                  <Gift className="w-6 h-6 text-[#1D1E81]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Digital Gift Cards</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Send instant Apple, Amazon, and retail gift envelopes to family and friends anywhere globally.
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs font-semibold text-slate-700">
                Instant delivery with custom greetings
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: FOR BUSINESSES & IMPORTERS */}
        {activeTab === 'businesses' && (
          <div className="space-y-10 animate-fadeIn">
            
            {/* Top Grid: China Rails + Speed Comparison Table */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* International Payout Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#1D1E81] text-xs font-bold">
                  <Globe className="w-3.5 h-3.5 text-[#1D1E81]" />
                  Stablecoin &amp; China CNY Payout Rails
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  Pay Chinese & Global Suppliers Instantly in CNY or Stablecoins.
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  BesideBanq executes just-in-time currency conversion. UK/US importers pay in stablecoins or local currency, while Chinese suppliers receive native CNY directly into their <strong>Alipay</strong> or bank accounts in seconds.
                </p>

                {/* Bank vs BesideBanq Table */}
                <div className="glass-card p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-xs">
                  <div className="grid grid-cols-3 font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100">
                    <span>Platform</span>
                    <span>Speed</span>
                    <span>Fees</span>
                  </div>

                  <div className="grid grid-cols-3 font-semibold items-center text-slate-500 py-1">
                    <span>Traditional Bank Wire</span>
                    <span className="text-red-500">3–5 Days</span>
                    <span className="text-red-500">$35 + 3% Markup</span>
                  </div>

                  <div className="grid grid-cols-3 font-extrabold items-center text-indigo-900 bg-indigo-50/70 p-2 rounded-xl">
                    <span className="flex items-center gap-1.5 text-[#1D1E81]"><Zap className="w-4 h-4 text-indigo-600 inline" /> BesideBanq</span>
                    <span className="text-emerald-600 font-bold">Seconds</span>
                    <span className="text-emerald-600 font-bold">Near Zero ($0)</span>
                  </div>
                </div>
              </div>

              {/* Buddy Escrow Interactive Voting Simulator */}
              <div className="lg:col-span-6">
                <div className="glass-card-dark p-6 sm:p-8 rounded-3xl space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                        <Vote className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-extrabold text-base text-white">Buddy Democratic Escrow</div>
                        <div className="text-xs text-slate-400">Supplier Payment Pool #402</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
                      Pending Vote
                    </span>
                  </div>

                  <div className="text-xs text-slate-300">
                    Amount: <strong className="text-white text-sm font-bold">$15,000.00 USDC</strong> → Guangzhou Supplier (CNY)
                  </div>

                  {/* Member Vote List */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Democratic Vote Status (100% Unanimous Required):
                    </div>

                    {/* Member 1 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-[10px]">A</div>
                        <span className="font-semibold text-white">Amara (Partner 1)</span>
                      </div>
                      <button
                        onClick={() => handleVoteToggle('member1')}
                        className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1 ${
                          buddyVotes.member1 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                        }`}
                      >
                        {buddyVotes.member1 ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                        {buddyVotes.member1 ? 'YES' : 'NO'}
                      </button>
                    </div>

                    {/* Member 2 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-[10px]">K</div>
                        <span className="font-semibold text-white">Kofi (Partner 2)</span>
                      </div>
                      <button
                        onClick={() => handleVoteToggle('member2')}
                        className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1 ${
                          buddyVotes.member2 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                        }`}
                      >
                        {buddyVotes.member2 ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                        {buddyVotes.member2 ? 'YES' : 'NO'}
                      </button>
                    </div>

                    {/* Member 3 (Clickable Interactive Toggle) */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px]">YOU</div>
                        <span className="font-semibold text-white">You (Click to Vote)</span>
                      </div>
                      <button
                        onClick={() => handleVoteToggle('member3')}
                        className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1 transition-all ${
                          buddyVotes.member3 ? 'bg-emerald-500 text-white shadow-md' : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {buddyVotes.member3 ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                        {buddyVotes.member3 ? 'Voted YES' : 'Vote NO'}
                      </button>
                    </div>
                  </div>

                  {/* Vote Result Banner */}
                  <div className={`p-3 rounded-xl text-center text-xs font-bold ${
                    isUnanimous ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}>
                    {isUnanimous ? '100% Unanimous Approval: Transfer Executed to Supplier!' : 'Waiting for 100% Unanimous Approval to release funds.'}
                  </div>

                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

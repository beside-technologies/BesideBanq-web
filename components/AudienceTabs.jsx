'use client';

import React, { useState } from 'react';
import { User, Briefcase, Zap, Shield, TrendingUp, Globe, Gift, Vote, ArrowRight, Check, X, Building, RefreshCw } from 'lucide-react';

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
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="badge-pill mx-auto">
            <span>Tailored Financial Super-App</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for individuals and global business trade.
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            Whether you're sending money home to loved ones or settling international supplier invoices, Besidebanq gives you complete financial control.
          </p>

          {/* Tab Buttons */}
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300 font-semibold text-sm mt-4">
            <button
              onClick={() => setActiveTab('individuals')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
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
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeTab === 'businesses'
                  ? 'bg-white text-[#1D1E81] shadow-md font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4 text-[#7C3AED]" />
              <span>For Importers & Businesses</span>
            </button>
          </div>
        </div>

        {/* TAB 1: FOR INDIVIDUALS */}
        {activeTab === 'individuals' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            
            {/* Feature 1: BanqDrop */}
            <div className="glass-card p-6 space-y-4 hover:shadow-xl transition-all duration-300 border border-indigo-100 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-slate-900">BanqDrop P2P</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Send money instantly to any <strong>@tag</strong>. Free forever. No bank account numbers or SWIFT codes required.
                </p>
              </div>
              <div className="p-3 bg-indigo-50/80 rounded-xl border border-indigo-100 text-xs text-slate-700 font-medium">
                <span className="font-bold text-indigo-700">@amara</span> sent you <strong>100 USDC</strong> via BanqDrop
              </div>
            </div>

            {/* Feature 2: High Yield USD Savings */}
            <div className="glass-card p-6 space-y-4 hover:shadow-xl transition-all duration-300 border border-indigo-100 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
                  📈
                </div>
                <h3 className="text-xl font-bold text-slate-900">USD Savings</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protect your wealth from inflation by saving in yield-bearing USD wallets with automated interest payouts.
                </p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs font-bold text-emerald-800 flex justify-between">
                <span>Earn up to</span>
                <span className="text-emerald-700 font-extrabold">+5.2% APY</span>
              </div>
            </div>

            {/* Feature 3: eSIM Mobile Data */}
            <div className="glass-card p-6 space-y-4 hover:shadow-xl transition-all duration-300 border border-indigo-100 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xl">
                  🌐
                </div>
                <h3 className="text-xl font-bold text-slate-900">eSIM Mobile Data</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Instant mobile data roaming across 150+ countries without swapping physical SIM cards.
                </p>
              </div>
              <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 text-xs font-semibold text-sky-900">
                150+ Countries • From $2.50 / GB
              </div>
            </div>

            {/* Feature 4: Global Gift Cards */}
            <div className="glass-card p-6 space-y-4 hover:shadow-xl transition-all duration-300 border border-indigo-100 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl">
                  🎁
                </div>
                <h3 className="text-xl font-bold text-slate-900">Digital Gift Cards</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Send instant Apple, Amazon, and retail gift envelopes to family and friends anywhere globally.
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-xl border border-purple-100 text-xs font-semibold text-purple-900">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
                  <Globe className="w-3.5 h-3.5" />
                  Stablecoin & China CNY Payout Rails
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  Pay Chinese & Global Suppliers Instantly in CNY or Stablecoins.
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Besidebanq executes just-in-time currency conversion. UK/US importers pay in stablecoins or local currency, while Chinese suppliers receive native CNY directly into their <strong>Alipay</strong> or bank accounts in seconds.
                </p>

                {/* Bank vs Besidebanq Table */}
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
                    <span className="flex items-center gap-1 text-[#1D1E81]">⚡ Besidebanq</span>
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
                    Amount: <strong className="text-white text-sm font-bold">$15,000.00 USDC</strong> ➔ Guangzhou Supplier (CNY)
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
                    {isUnanimous ? '🎉 100% Unanimous Approval — Transfer Executed to Supplier!' : '⚠️ Waiting for 100% Unanimous Approval to release funds.'}
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

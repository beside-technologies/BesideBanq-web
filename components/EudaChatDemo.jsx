'use client';

import React, { useState } from 'react';
import { Bot, MessageSquare, Send, Heart, Shield, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function EudaChatDemo() {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);

  const prompts = [
    {
      user: "I spent way too much money this weekend.",
      euda: "Hey, don't sweat it! Spending on dinners and friends is an investment in your social health and self-care. Let's look at your target for the week and see if we can make a tiny $5 adjustment to keep you on track. You got this! 💙"
    },
    {
      user: "Auto-save $50 for my trip to Ghana.",
      euda: "On it! I've scheduled a $50 weekly deposit into your Ghana Travel vault. You're currently 35% closer to your flight goal!"
    },
    {
      user: "How fast can I send money to Nigeria today?",
      euda: "With BanqDrop via stablecoin rails, your transfer to @amara or local NGN bank accounts settles in under 10 seconds with zero transfer fees!"
    }
  ];

  return (
    <section id="euda" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description */}
          <ScrollReveal className="lg:col-span-5" direction="right" delay={0}>
            <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100">
              <Bot className="w-4 h-4 text-purple-600" />
              <span>Meet Euda: Your AI Financial Companion</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              An AI agent rooted in <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Eudaimonia</span>.
            </h2>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-normal">
              Named after the Greek concept of human flourishing and living a good life, <strong>Euda</strong> is your warm, empathetic financial partner that celebrates your life choices while managing your budget autonomously.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">✓</div>
                <span>Empowering Financial Advice &amp; Coaching</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">✓</div>
                <span>Autonomous Budget Adjustments &amp; Smart Savings Vaults</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">✓</div>
                <span>Instant Natural Language Money Transfers</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

          {/* Right Interactive Chat Box Simulator */}
          <ScrollReveal className="lg:col-span-7" direction="left" delay={150}>
            <div className="glass-card-dark p-6 sm:p-8 rounded-3xl border border-purple-500/20 shadow-2xl space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/euda-avatar.png"
                    alt="Euda"
                    className="w-10 h-10 rounded-2xl object-cover shadow-md border border-purple-400/30"
                  />
                  <div>
                    <div className="font-extrabold text-base text-white">Euda</div>
                    <div className="text-xs text-indigo-300">Financial Companion • Always Active</div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                  Interactive Demo
                </span>
              </div>

              {/* Chat Message Window */}
              <div className="space-y-4 min-h-[220px] flex flex-col justify-end">
                
                {/* User Message Bubble */}
                <div className="flex justify-end animate-fadeIn">
                  <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-xs max-w-md text-sm font-medium shadow-md">
                    {prompts[selectedPromptIndex].user}
                  </div>
                </div>

                {/* Euda Response Bubble */}
                <div className="flex items-start gap-3 animate-fadeIn">
                  <img
                    src="/euda-avatar.png"
                    alt="Euda"
                    className="w-8 h-8 rounded-full object-cover shrink-0 mt-1 border border-purple-400/30 shadow-md"
                  />
                  <div className="bg-white/10 border border-white/15 text-slate-100 p-4 rounded-2xl rounded-tl-xs max-w-md text-sm leading-relaxed shadow-md">
                    {prompts[selectedPromptIndex].euda}
                  </div>
                </div>

              </div>

              {/* Clickable Prompt Selectors */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                  Click a sample prompt to test Euda:
                </div>
                <div className="flex flex-wrap gap-2">
                  {prompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPromptIndex(idx)}
                      className={`text-xs font-semibold px-3 py-2 rounded-xl transition-all ${
                        selectedPromptIndex === idx
                          ? 'bg-purple-600 text-white shadow-md font-bold'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      "{p.user}"
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

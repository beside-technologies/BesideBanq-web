'use client';

import React from 'react';
import { Sparkles, Shield, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 text-sm border-t border-slate-800">
      <div className="container space-y-12">
        
        {/* Top Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <a href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#1D1E81] via-[#4F46E5] to-[#7C3AED] flex items-center justify-center font-bold text-white shadow-md">
                ⚡
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Besidebanq
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Helping people live a better life, globally. The financial super-app built to empower the global African diaspora.
            </p>
            <div className="text-xs text-slate-500">
              © 2026 Besidebanq Inc. All rights reserved.
            </div>
          </div>

          {/* Col 1: Products */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Products</div>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#features" className="hover:text-white transition-colors">BanqDrop P2P</a></li>
              <li><a href="#euda" className="hover:text-white transition-colors">Euda AI Agent</a></li>
              <li><a href="#audience" className="hover:text-white transition-colors">Buddy Escrow</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">USD Savings</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">China CNY Rails</a></li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Company</div>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#audience" className="hover:text-white transition-colors">About Besidebanq</a></li>
              <li><a href="#audience" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#audience" className="hover:text-white transition-colors">Press &amp; Brand Assets</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Corridor Rates</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Regulatory */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Legal</div>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security Disclosures</a></li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimers (Vendor-Agnostic) */}
        <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-500 space-y-3 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> Besidebanq is a financial technology platform, not a bank. Banking, brokerage, and payout services are provided by our licensed partner financial institutions and payment service providers in their respective jurisdictions.
          </p>
          <p>
            Stablecoin and cryptocurrency transfers are subject to network fees, blockchain congestion, and market volatility. Yield-bearing USD savings features are provided in collaboration with licensed third-party custodial asset managers.
          </p>
        </div>

      </div>
    </footer>
  );
}

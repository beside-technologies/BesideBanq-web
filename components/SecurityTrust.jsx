'use client';

import React from 'react';
import { ShieldCheck, Lock, Fingerprint, Eye, Award, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function SecurityTrust() {
  return (
    <section id="security" className="py-20 md:py-28 bg-white relative">
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Institutional-Grade Security</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Your money and data, protected at every layer.
            </h2>
            <p className="text-base md:text-lg text-slate-600 font-normal leading-relaxed">
              BesideBanq combines 256-bit end-to-end encryption, biometric authentication, and strict regulatory compliance to safeguard your borderless assets.
            </p>
          </div>
        </ScrollReveal>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Encryption */}
          <ScrollReveal direction="up" delay={0}>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 h-full hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-[#1D1E81] flex items-center justify-center font-bold">
                <Lock className="w-6 h-6 text-[#1D1E81]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">256-Bit Encryption</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                All transaction payloads and personal data are encrypted in transit and at rest using bank-grade AES-256 protocols.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: Biometric Access */}
          <ScrollReveal direction="up" delay={100}>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 h-full hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-[#1D1E81] flex items-center justify-center font-bold">
                <Fingerprint className="w-6 h-6 text-[#1D1E81]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Biometric Security</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Native FaceID, TouchID, and 4-digit transaction PIN locks ensure only you can authorize wallet movements.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: Tiered KYC */}
          <ScrollReveal direction="up" delay={200}>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 h-full hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-[#1D1E81] flex items-center justify-center font-bold">
                <Eye className="w-6 h-6 text-[#1D1E81]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Tiered Compliance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Progressive KYC verification featuring BVN checks, 3D Liveness selfie scans, and real-time AML anti-fraud velocity monitoring.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 4: PCI-DSS */}
          <ScrollReveal direction="up" delay={300}>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 h-full hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-[#1D1E81] flex items-center justify-center font-bold">
                <Award className="w-6 h-6 text-[#1D1E81]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">PCI-DSS Compliant</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Full compliance with international payment standards and licensed partner bank infrastructure worldwide.
              </p>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

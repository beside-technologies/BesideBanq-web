'use client';

import React from 'react';
import { ShieldCheck, Lock, Fingerprint, Eye, Award, CheckCircle } from 'lucide-react';

export default function SecurityTrust() {
  return (
    <section id="security" className="py-20 md:py-28 bg-white relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-pill mx-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            <span>Bank-Grade Security & Trust</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Your money and data, protected at every layer.
          </h2>
          <p className="text-lg text-slate-600">
            Besidebanq combines 256-bit end-to-end encryption, biometric authentication, and strict regulatory compliance to safeguard your borderless assets.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Encryption */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">256-Bit Encryption</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              All transaction payloads and personal data are encrypted in transit and at rest using bank-grade AES-256 protocols.
            </p>
          </div>

          {/* Card 2: Biometric Access */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl">
              <Fingerprint className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Biometric Security</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Native FaceID, TouchID, and 4-digit transaction PIN locks ensure only you can authorize wallet movements.
            </p>
          </div>

          {/* Card 3: Tiered KYC */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Tiered Compliance</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Progressive KYC verification featuring BVN checks, 3D Liveness selfie scans, and real-time AML anti-fraud velocity monitoring.
            </p>
          </div>

          {/* Card 4: PCI-DSS */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xl">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">PCI-DSS Compliant</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Full compliance with international payment standards and licensed partner bank infrastructure worldwide.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

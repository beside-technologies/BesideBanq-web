'use client';

import React, { useState } from 'react';
import { Scan, FileText, CheckCircle2, ArrowRight, MessageSquare, Edit3, ShieldAlert } from 'lucide-react';

export default function ScanTransferDemo() {
  const [selectedSample, setSelectedSample] = useState(0);

  const samples = [
    {
      title: "WhatsApp Chat Screenshot",
      icon: MessageSquare,
      fileType: "Chat Screenshot",
      rawText: `"Hey! Please send 50,000 NGN for the inventory to Access Bank account 0123456789 (Name: Amara Okafor). Thanks!"`,
      parsed: {
        payee: "Amara Okafor",
        bank: "Access Bank",
        account: "0123456789",
        amount: "50,000 NGN (~ $38.50 USD)"
      }
    },
    {
      title: "Handwritten Note",
      icon: Edit3,
      fileType: "Handwritten Scan",
      rawText: `"Transfer 150 USDC for school fees to @kofi_edu"`,
      parsed: {
        payee: "Kofi Edu (@kofi_edu)",
        bank: "Besidebanq BanqDrop",
        account: "@kofi_edu",
        amount: "150.00 USDC"
      }
    },
    {
      title: "Supplier Invoice (China)",
      icon: FileText,
      fileType: "PDF Invoice",
      rawText: `INVOICE #4901 — GuangZhou Electronics Co. Ltd. Total: ¥12,500 CNY. Alipay: supplier_gz@alipay.cn`,
      parsed: {
        payee: "GuangZhou Electronics Co.",
        bank: "Alipay Direct Rail (China)",
        account: "supplier_gz@alipay.cn",
        amount: "12,500 CNY (~ $1,720 USDC)"
      }
    }
  ];

  const active = samples[selectedSample];

  return (
    <section className="py-20 bg-slate-50 relative border-t border-b border-slate-200/80">
      <div className="container">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="badge-pill mx-auto">
            <Scan className="w-3.5 h-3.5 text-indigo-600" />
            <span>Scan to Transfer — Euda OCR Engine</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Drop any chat screenshot, note, or invoice.
          </h2>
          <p className="text-lg text-slate-600">
            Euda automatically parses bank numbers, handles, payees, and amounts from images or text — populating your transfer form instantly with 99.9% accuracy.
          </p>
        </div>

        {/* Interactive Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Sample Selector & Document Preview */}
          <div className="lg:col-span-6 glass-card p-6 rounded-3xl space-y-6 border border-slate-200">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              1. Select a Sample Document:
            </div>

            {/* Sample Buttons */}
            <div className="grid grid-cols-3 gap-2">
              {samples.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedSample(idx)}
                    className={`p-3 rounded-2xl flex flex-col items-center gap-2 text-center text-xs font-semibold transition-all ${
                      selectedSample === idx
                        ? 'bg-indigo-600 text-white shadow-md font-bold scale-[1.02]'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{s.fileType}</span>
                  </button>
                );
              })}
            </div>

            {/* Raw Document View */}
            <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 space-y-3 font-mono text-xs relative overflow-hidden">
              <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800 pb-2">
                <span>{active.title}</span>
                <span className="text-emerald-400 font-bold">Scanning...</span>
              </div>
              <p className="italic text-slate-300 leading-relaxed">
                {active.rawText}
              </p>
              
              {/* Highlight OCR Box */}
              <div className="absolute inset-0 bg-indigo-500/10 border-2 border-dashed border-indigo-400 rounded-2xl pointer-events-none animate-pulse" />
            </div>
          </div>

          {/* Euda Auto-Parsed Result */}
          <div className="lg:col-span-6 glass-card-dark p-6 rounded-3xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Euda OCR Parsed Data
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">
                  99.9% Confidence
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between">
                  <span className="text-slate-400">Payee Name:</span>
                  <strong className="text-white font-bold">{active.parsed.payee}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between">
                  <span className="text-slate-400">Payout Rail / Bank:</span>
                  <strong className="text-indigo-300 font-bold">{active.parsed.bank}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between">
                  <span className="text-slate-400">Account / Handle:</span>
                  <strong className="text-white font-mono font-bold">{active.parsed.account}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex justify-between">
                  <span className="text-emerald-300">Total Amount:</span>
                  <strong className="text-emerald-400 font-extrabold text-sm">{active.parsed.amount}</strong>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert(`Pre-filled transfer form ready for ${active.parsed.payee}!`)}
              className="btn-primary w-full py-3 text-sm rounded-xl shadow-lg"
            >
              <span>Execute Transfer Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

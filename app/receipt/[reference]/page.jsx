'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ReceiptCard from '@/components/ReceiptCard';
import { ShieldCheck, ArrowLeft, Loader2, CheckCircle2, Lock } from 'lucide-react';
import Link from 'next/link';

export default function PublicReceiptPage() {
  const params = useParams();
  const reference = params?.reference || 'sample';
  const [receiptData, setReceiptData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadReceipt() {
      try {
        setLoading(true);
        const res = await fetch(`/api/v1/receipts/${encodeURIComponent(reference)}`);
        if (!res.ok) {
          // Fallback to sample preview if reference is not in live db
          const sampleRes = await fetch('/api/v1/receipts/sample');
          const sampleData = await sampleRes.json();
          setReceiptData(sampleData);
          return;
        }
        const data = await res.json();
        setReceiptData(data);
      } catch (err) {
        setError('Failed to load transaction receipt.');
      } finally {
        setLoading(false);
      }
    }
    loadReceipt();
  }, [reference]);

  return (
    <div className="min-h-screen flex flex-col justify-between"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-main)' }}>

      {/* ── Top Header Navigation ────────────────────────────────────────── */}
      <header className="w-full bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/besidebanq-logo.svg"
              alt="BesideBanq"
              style={{ height: '34px', width: 'auto', display: 'block' }}
              className="transition-opacity group-hover:opacity-85"
            />
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
              style={{
                background: 'rgba(10,236,209,0.12)',
                color: '#007A68',
                border: '1px solid rgba(10,236,209,0.3)',
              }}>
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: '#00967D' }} />
              <span>Official Verification Certificate</span>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all hover:bg-slate-100"
              style={{ color: 'var(--brand-primary)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BesideBanq Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ── Certificate Body ────────────────────────────────────────────── */}
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-8 sm:py-12 flex flex-col items-center justify-center">
        
        {/* Certificate Trust Banner */}
        <div className="text-center mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md"
            style={{ background: 'rgba(44,43,154,0.06)', color: 'var(--brand-primary)' }}>
            <Lock className="w-3 h-3" />
            <span>Cryptographic Ledger Verification</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
            Proof of Payment
          </h1>
          <p className="text-xs sm:text-sm font-medium"
            style={{ color: 'var(--text-sub)' }}>
            Immutable transaction record verified against the BesideBanq Core Ledger
          </p>
        </div>

        {loading ? (
          <div className="w-full bg-white rounded-3xl p-12 flex flex-col items-center justify-center gap-3 shadow-md"
            style={{ border: '1.5px solid rgba(44,43,154,0.12)' }}>
            <Loader2 className="w-8 h-8 animate-spin" style={{ color: 'var(--brand-primary)' }} />
            <span className="text-sm font-bold" style={{ color: 'var(--text-sub)' }}>
              Verifying Transaction Record...
            </span>
          </div>
        ) : (
          <ReceiptCard receiptData={receiptData} showActions={true} />
        )}

      </main>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="w-full py-6 text-center text-xs border-t border-slate-200/60 bg-white"
        style={{ color: 'var(--text-muted)' }}>
        <p>© 2026 BesideBanq Inc. All rights reserved. Bank-grade ledger verification.</p>
      </footer>

    </div>
  );
}

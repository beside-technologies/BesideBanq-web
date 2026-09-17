'use client';

import React, { useState, useRef } from 'react';
import { 
  CheckCircle2, Share2, Download, Copy, ShieldCheck, 
  User, Building2, Calendar, Hash, Receipt, Check, ArrowUpRight, FileText
} from 'lucide-react';

export default function ReceiptCard({ receiptData, showActions = true, onAfterExport }) {
  const [copiedRef, setCopiedRef] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef(null);

  // Fallback demo receipt data
  const data = receiptData || {
    reference: "TXN-ST-20260914-998241",
    journal_id: "e3098cbd-fe14-4c81-ad5a-d53cc90b221d",
    status: "SUCCESSFUL",
    transaction_type: "DOMESTIC_BANK_TRANSFER",
    amount_minor_units: 5000000,
    fee_minor_units: 5000,
    total_minor_units: 5005000,
    currency: "NGN",
    sender_name: "Kemi Adebayo",
    sender_tag: "kemi",
    recipient_name: "Tunde Bakare",
    recipient_bank: "Access Bank",
    recipient_account: "0123456789",
    narration: "Merchandise invoice #884",
    provider: "BESIDEBANQ_CORE",
    timestamp: new Date().toISOString(),
    session_id: "BBNQ-7A9B-4C2D"
  };

  const isNGN = data.currency === 'NGN';
  const symbol = isNGN ? '₦' : '$';
  const divisor = (data.currency === 'USDC' || data.currency === 'USDT') ? 1000000 : 100;
  
  const principalFormatted = (data.amount_minor_units / divisor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const feeFormatted = (data.fee_minor_units / divisor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const totalFormatted = (data.total_minor_units / divisor).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const formattedDate = new Date(data.timestamp).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const handleCopyRef = () => {
    navigator.clipboard.writeText(data.reference);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleCopyShareLink = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://besidebanq.com';
    const url = `${origin}/receipt/${encodeURIComponent(data.reference)}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // --------------------------------------------------------------------------
  // HIGH-RESOLUTION IMAGE GENERATION (Canvas Rasterizer)
  // --------------------------------------------------------------------------
  const handleExportImage = async () => {
    setIsExporting(true);
    try {
      const canvas = document.createElement('canvas');
      const width = 640;
      const height = 880;
      const scale = 2; // 2x Retina resolution
      canvas.width = width * scale;
      canvas.height = height * scale;

      const ctx = canvas.getContext('2d');
      ctx.scale(scale, scale);

      // Background
      ctx.fillStyle = '#F8FAFC';
      ctx.fillRect(0, 0, width, height);

      // Card Container
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.roundRect(30, 30, width - 60, height - 60, 24);
      ctx.fill();
      ctx.strokeStyle = 'rgba(44, 43, 154, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Top Brand Stripe
      const grad = ctx.createLinearGradient(30, 30, width - 30, 30);
      grad.addColorStop(0, '#1D1E81');
      grad.addColorStop(0.5, '#4F46E5');
      grad.addColorStop(1, '#0AECD1');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(30, 30, width - 60, 8, [24, 24, 0, 0]);
      ctx.fill();

      // Assets for Canvas: Brand Logo and Security Watermark Emblem
      const loadLogo = () => new Promise((resolve) => {
        const domImg = cardRef.current?.querySelector('img[alt="BesideBanq"]') || cardRef.current?.querySelector('img');
        if (domImg && domImg.complete && domImg.naturalWidth > 0) {
          return resolve(domImg);
        }
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = '/besidebanq-logo.svg';
      });

      const loadEmblem = () => new Promise((resolve) => {
        const domEmblem = cardRef.current?.querySelector('img[alt="Security Watermark"]') || cardRef.current?.querySelector('img[src="/logo.png"]');
        if (domEmblem && domEmblem.complete && domEmblem.naturalWidth > 0) {
          return resolve(domEmblem);
        }
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = '/logo.png';
      });

      const [logoImg, emblemImg] = await Promise.all([loadLogo(), loadEmblem()]);

      // Central Security Watermark in Canvas
      if (emblemImg) {
        ctx.save();
        ctx.globalAlpha = 0.045;
        const markSize = 250;
        ctx.translate(width / 2, (height / 2) + 20);
        ctx.drawImage(emblemImg, -markSize / 2, -markSize / 2, markSize, markSize);
        ctx.restore();
      }

      if (logoImg) {
        // Official brand logo (aspect ratio: 335 / 100 = 3.35)
        const logoH = 32;
        const logoW = logoH * 3.35;
        ctx.drawImage(logoImg, 60, 64, logoW, logoH);
      } else {
        // Fallback text if logo asset fails to load
        ctx.fillStyle = '#2A238C';
        ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Outfit", sans-serif';
        ctx.fillText('Beside', 60, 82);
        ctx.fillStyle = '#5149D0';
        ctx.fillText('Banq', 138, 82);
      }

      ctx.fillStyle = '#64748B';
      ctx.font = '500 12px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Official Proof of Payment', 60, 112);

      // Status Pill
      ctx.fillStyle = 'rgba(10, 236, 209, 0.12)';
      ctx.beginPath();
      ctx.roundRect(width - 170, 65, 110, 30, 15);
      ctx.fill();
      ctx.strokeStyle = 'rgba(10, 236, 209, 0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = '#007A68';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('✓ SUCCESSFUL', width - 158, 84);

      // Amount Container Box
      ctx.fillStyle = '#F8FAFC';
      ctx.beginPath();
      ctx.roundRect(60, 130, width - 120, 110, 16);
      ctx.fill();
      ctx.strokeStyle = 'rgba(44, 43, 154, 0.08)';
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.fillStyle = '#64748B';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('AMOUNT TRANSFERRED', width / 2, 160);

      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 36px "Outfit", sans-serif';
      ctx.fillText(`${symbol}${principalFormatted}`, width / 2, 200);

      ctx.fillStyle = '#475569';
      ctx.font = '500 12px sans-serif';
      ctx.fillText(`Total Debited: ${symbol}${totalFormatted} • Fee: ${symbol}${feeFormatted}`, width / 2, 224);

      // Detail Rows
      ctx.textAlign = 'left';
      let y = 280;
      const drawRow = (label, val, subVal = '') => {
        ctx.fillStyle = '#64748B';
        ctx.font = '500 13px sans-serif';
        ctx.fillText(label, 60, y);

        ctx.fillStyle = '#0F172A';
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(val, width - 60, y);

        if (subVal) {
          ctx.fillStyle = '#64748B';
          ctx.font = '11px sans-serif';
          ctx.fillText(subVal, width - 60, y + 16);
          y += 18;
        }
        ctx.textAlign = 'left';
        y += 36;
      };

      const recipientDisplay = data.recipient_name && data.recipient_name !== 'Beneficiary' 
        ? data.recipient_name 
        : (data.recipient_bank ? 'Bank Account Beneficiary' : `@${data.recipient_tag || 'user'}`);
      const recipientSub = data.recipient_bank 
        ? `${data.recipient_bank} • ${data.recipient_account}` 
        : (data.recipient_tag ? `@${data.recipient_tag}` : '');

      const senderDisplay = (data.sender_name && data.sender_name !== data.sender_tag && !data.sender_name.startsWith('@'))
        ? data.sender_name
        : `@${data.sender_tag || 'user'}`;

      drawRow('Recipient', recipientDisplay, recipientSub);
      drawRow('Sender', senderDisplay, data.sender_name !== senderDisplay ? `@${data.sender_tag}` : '');
      drawRow('Date & Time', formattedDate);
      
      const railName = data.transaction_type === 'DOMESTIC_BANK_TRANSFER' 
        ? 'Domestic Bank Transfer' 
        : data.transaction_type === 'BANQDROP_P2P' 
          ? 'BanqDrop P2P Transfer' 
          : 'Instant Funds Transfer';
      drawRow('Payment Rail', railName);
      drawRow('BesideBanq Fee', `${symbol}${feeFormatted}`);
      if (data.narration) {
        const narr = data.narration.length > 36 ? data.narration.slice(0, 34) + '…' : data.narration;
        drawRow('Narration', narr);
      }
      drawRow('Reference', data.reference);
      drawRow('Audit Session', data.session_id);

      // Divider & Security Footer
      ctx.strokeStyle = 'rgba(44, 43, 154, 0.08)';
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.moveTo(60, height - 120);
      ctx.lineTo(width - 60, height - 120);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#94A3B8';
      ctx.font = '600 8.5px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('CRYPTOGRAPHICALLY SEALED & VERIFIED BY BESIDEBANQ CORE LEDGER', width / 2, height - 85);

      canvas.toBlob(async (blob) => {
        if (!blob) {
          setIsExporting(false);
          return;
        }
        const file = new File([blob], `BesideBanq_Receipt_${data.reference}.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'BesideBanq Payment Receipt',
              text: `BesideBanq Proof of Payment: ${symbol}${principalFormatted} to ${recipientDisplay}`
            });
            setIsExporting(false);
            return;
          } catch (e) {
            // fallback to download
          }
        }

        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `BesideBanq_Receipt_${data.reference}.png`;
        a.click();
        setIsExporting(false);
        if (onAfterExport) onAfterExport();
      }, 'image/png');

    } catch (err) {
      console.error('Failed to export image receipt:', err);
      setIsExporting(false);
    }
  };

  const handleExportPDF = () => {
    window.print();
  };

  const recipientDisplay = data.recipient_name && data.recipient_name !== 'Beneficiary' 
    ? data.recipient_name 
    : (data.recipient_bank ? 'Bank Account Beneficiary' : `@${data.recipient_tag || 'user'}`);

  const senderDisplay = (data.sender_name && data.sender_name !== data.sender_tag && !data.sender_name.startsWith('@'))
    ? data.sender_name
    : `@${data.sender_tag || 'user'}`;

  const railName = data.transaction_type === 'DOMESTIC_BANK_TRANSFER' 
    ? 'Domestic Bank Transfer' 
    : data.transaction_type === 'BANQDROP_P2P' 
      ? 'BanqDrop P2P' 
      : 'Instant Transfer';

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col relative"
      style={{
        border: '1.5px solid rgba(44,43,154,0.12)',
        boxShadow: '0 20px 48px rgba(44,43,154,0.10)'
      }}
      ref={cardRef}
      id="printable-receipt"
    >
      {/* Top Brand Stripe */}
      <div className="h-2 w-full relative z-10"
        style={{ background: 'linear-gradient(90deg, #1D1E81 0%, #4F46E5 60%, #0AECD1 100%)' }} />

      {/* Security Watermark Emblem */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
        style={{
          width: '240px',
          height: '240px',
          opacity: 0.045,
        }}
      >
        <img
          src="/logo.png"
          alt="Security Watermark"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 space-y-4.5 relative z-10">

        {/* ── Official Brand Header ─────────────────────────────────────── */}
        <div className="flex items-center justify-between pb-3"
          style={{ borderBottom: '1px solid rgba(44,43,154,0.08)' }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/besidebanq-logo.svg"
              alt="BesideBanq"
              style={{ height: '30px', width: 'auto', display: 'block' }}
            />
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
            style={{ 
              background: 'rgba(10,236,209,0.12)', 
              color: '#007A68', 
              border: '1px solid rgba(10,236,209,0.35)' 
            }}>
            <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#00967D' }} />
            <span>SUCCESSFUL</span>
          </div>
        </div>

        {/* ── Amount Display Card ───────────────────────────────────────── */}
        <div className="text-center py-3.5 px-4 rounded-2xl space-y-0.5"
          style={{
            background: 'linear-gradient(180deg, rgba(44,43,154,0.03) 0%, rgba(10,236,209,0.03) 100%)',
            border: '1.5px solid rgba(44,43,154,0.08)',
          }}>
          <div className="text-[10px] uppercase tracking-wider font-bold"
            style={{ color: 'var(--text-muted)' }}>
            Amount Transferred
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
            {symbol}{principalFormatted}
          </div>
          <div className="text-xs font-medium pt-0.5"
            style={{ color: 'var(--text-sub)' }}>
            Total Debited: <strong style={{ color: 'var(--text-main)' }}>{symbol}{totalFormatted}</strong>
            <span className="ml-1 text-slate-400 font-normal">(Fee: {symbol}{feeFormatted})</span>
          </div>
        </div>

        {/* ── Key Transaction Breakdown ─────────────────────────────────── */}
        <div className="space-y-3 text-xs">

          {/* Recipient */}
          <div className="flex items-start justify-between">
            <span className="font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <User className="w-3.5 h-3.5 text-slate-400" /> Recipient
            </span>
            <div className="text-right font-bold" style={{ color: 'var(--text-main)' }}>
              <div>{recipientDisplay}</div>
              {data.recipient_bank && (
                <div className="text-[11px] font-normal" style={{ color: 'var(--text-muted)' }}>
                  {data.recipient_bank} {data.recipient_account ? `• ${data.recipient_account}` : ''}
                </div>
              )}
              {data.recipient_tag && (
                <div className="text-[11px] font-bold" style={{ color: 'var(--brand-primary)' }}>
                  @{data.recipient_tag}
                </div>
              )}
            </div>
          </div>

          {/* Sender */}
          <div className="flex items-center justify-between">
            <span className="font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <Building2 className="w-3.5 h-3.5 text-slate-400" /> Sender
            </span>
            <div className="text-right font-bold" style={{ color: 'var(--text-main)' }}>
              <span>{senderDisplay}</span>
              {data.sender_name && data.sender_name !== senderDisplay && (
                <span className="ml-1 text-[11px] font-semibold" style={{ color: 'var(--brand-primary)' }}>
                  (@{data.sender_tag})
                </span>
              )}
            </div>
          </div>

          {/* Date & Time */}
          <div className="flex items-center justify-between">
            <span className="font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <Calendar className="w-3.5 h-3.5 text-slate-400" /> Date &amp; Time
            </span>
            <span className="font-bold" style={{ color: 'var(--text-main)' }}>{formattedDate}</span>
          </div>

          {/* Payment Rail */}
          <div className="flex items-center justify-between">
            <span className="font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <Receipt className="w-3.5 h-3.5 text-slate-400" /> Payment Rail
            </span>
            <span className="font-bold px-2.5 py-0.5 rounded-full text-[11px]"
              style={{
                background: 'rgba(44,43,154,0.06)',
                color: 'var(--brand-primary)',
                border: '1px solid rgba(44,43,154,0.14)',
              }}>
              {railName}
            </span>
          </div>

          {/* Transfer Fee */}
          <div className="flex items-center justify-between">
            <span className="font-semibold" style={{ color: 'var(--text-muted)' }}>BesideBanq Fee</span>
            <span className="font-bold" style={{ color: 'var(--text-main)' }}>{symbol}{feeFormatted}</span>
          </div>

          {/* Narration */}
          {data.narration && (
            <div className="flex items-start justify-between">
              <span className="font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                <FileText className="w-3.5 h-3.5 text-slate-400" /> Narration
              </span>
              <span className="text-right font-medium max-w-[220px] sm:max-w-[280px] break-words" style={{ color: 'var(--text-main)' }}>
                {data.narration}
              </span>
            </div>
          )}

          {/* Reference */}
          <div className="flex items-center justify-between pt-2"
            style={{ borderTop: '1px solid rgba(44,43,154,0.08)' }}>
            <span className="font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <Hash className="w-3.5 h-3.5 text-slate-400" /> Reference
            </span>
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold"
              style={{ color: 'var(--text-sub)' }}>
              <span>{data.reference}</span>
              <button 
                type="button"
                onClick={handleCopyRef} 
                className="p-1 rounded transition-colors hover:text-indigo-600">
                {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Audit Session ID */}
          <div className="flex items-center justify-between">
            <span className="font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Audit Session
            </span>
            <span className="font-mono text-[11px] font-bold" style={{ color: 'var(--brand-primary)' }}>
              {data.session_id}
            </span>
          </div>

        </div>

        {/* Micro Security Stamp */}
        <div className="pt-2 text-center" style={{ borderTop: '1px dashed rgba(44,43,154,0.08)' }}>
          <p className="text-[8px] sm:text-[8.5px] uppercase tracking-widest font-semibold text-slate-400">
            Cryptographically sealed &amp; verified by BesideBanq Core Ledger
          </p>
        </div>

      </div>

      {/* ── Action Buttons Footer ──────────────────────────────────────── */}
      {showActions && (
        <div className="p-4 sm:p-5 flex items-center gap-2.5 bg-slate-50"
          style={{ borderTop: '1px solid rgba(44,43,154,0.08)' }}>
          <button
            type="button"
            onClick={handleExportImage}
            disabled={isExporting}
            className="flex-1 btn-primary text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-bold shadow-md transition-all active:scale-98"
          >
            {isExporting ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
            <span>{isExporting ? 'Generating...' : 'Share Receipt (Image)'}</span>
          </button>

          <button
            type="button"
            onClick={handleExportPDF}
            className="px-4 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all hover:bg-slate-100"
            style={{
              background: '#FFFFFF',
              color: 'var(--brand-primary)',
              border: '1.5px solid rgba(44,43,154,0.18)',
            }}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">PDF</span>
          </button>

          <button
            type="button"
            onClick={handleCopyShareLink}
            title="Copy Public Verification Link"
            className="p-3 rounded-xl transition-all hover:bg-slate-100"
            style={{
              background: '#FFFFFF',
              color: 'var(--text-sub)',
              border: '1.5px solid rgba(44,43,154,0.18)',
            }}
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  );
}

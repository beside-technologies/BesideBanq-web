'use client';

import React from 'react';
import { X } from 'lucide-react';
import ReceiptCard from './ReceiptCard';

export default function ReceiptModal({ isOpen, onClose, receiptData }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md my-auto flex flex-col max-h-[96vh]">
        
        {/* Top Bar with Close Action */}
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            type="button"
            aria-label="Close receipt modal"
            className="px-3 py-1.5 rounded-full bg-white text-slate-700 hover:text-slate-950 shadow-md transition-all active:scale-95 flex items-center gap-1.5 text-xs font-bold"
            style={{ border: '1px solid rgba(44,43,154,0.14)' }}
          >
            <X className="w-3.5 h-3.5" />
            <span>Close</span>
          </button>
        </div>

        {/* Scrollable Receipt Container */}
        <div className="overflow-y-auto rounded-3xl shadow-2xl">
          <ReceiptCard receiptData={receiptData} />
        </div>

      </div>
    </div>
  );
}

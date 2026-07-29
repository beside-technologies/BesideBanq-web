'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import FeeCalculator from '@/components/FeeCalculator';
import SecurityTrust from '@/components/SecurityTrust';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { Globe, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function CorridorPage() {
  const params = useParams();
  const corridor = params?.corridor || 'canada-to-nigeria';

  const titleMap = {
    'canada-to-nigeria': {
      title: "Send Money from Canada to Nigeria Instantly",
      sub: "BanqDrop CAD to NGN at zero transfer fees. Settle into any Nigerian bank account in under 10 seconds.",
      source: "Canada",
      dest: "Nigeria"
    },
    'uk-to-china': {
      title: "Pay Chinese Suppliers Directly from the UK in CNY",
      sub: "Just-In-Time currency conversion. Send GBP or stablecoins; suppliers receive CNY directly into Alipay or WeChat Pay.",
      source: "United Kingdom",
      dest: "China"
    },
    'us-to-ghana': {
      title: "Send USD to Mobile Money & Banks in Ghana",
      sub: "Zero fees, low FX markup, and direct payout to MTN MoMo, Vodafone Cash, or Ghanaian bank accounts.",
      source: "United States",
      dest: "Ghana"
    }
  };

  const details = titleMap[corridor] || titleMap['canada-to-nigeria'];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FE]">
      <Navbar isPreLaunch={true} setIsPreLaunch={() => {}} onOpenWaitlistModal={() => alert("Opening Waitlist...")} />

      <main className="flex-1 pt-32 pb-20">
        <div className="container text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">
            <Globe className="w-4 h-4 text-indigo-600" />
            <span>Dedicated Remittance Corridor</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {details.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
            {details.sub}
          </p>

          <div className="pt-6">
            <FeeCalculator />
          </div>
        </div>

        <SecurityTrust />
      </main>

      <Footer />
    </div>
  );
}

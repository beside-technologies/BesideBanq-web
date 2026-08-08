'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WaitlistModal from '@/components/WaitlistModal';
import AudienceTabs from '@/components/AudienceTabs';
import EudaChatDemo from '@/components/EudaChatDemo';
import ScanTransferDemo from '@/components/ScanTransferDemo';
import FeeCalculator from '@/components/FeeCalculator';
import ESimSearch from '@/components/ESimSearch';
import SecurityTrust from '@/components/SecurityTrust';
import Footer from '@/components/Footer';
import PeopleSection from '@/components/PeopleSection';

// ─── PHASE CONFIGURATION (Backend-Controlled) ───────────────────────────────
// Toggle this constant on the server/CMS to switch between phases.
// Pre-Launch:  true  → Show waitlist @tag reservation, FOMO counter
// Post-Launch: false → Show App Store / Google Play download buttons
const IS_PRE_LAUNCH = true;
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [reservedTag, setReservedTag] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FE] text-slate-900 selection:bg-indigo-500 selection:text-white">

      {/* Sticky Navbar — Logo + Nav + CTA */}
      <Navbar
        isPreLaunch={IS_PRE_LAUNCH}
        onOpenWaitlistModal={() => setIsWaitlistOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">

        {/* Hero: USP Headline + @tag Reservation Widget or App Store Badges */}
        <Hero
          isPreLaunch={IS_PRE_LAUNCH}
          onOpenWaitlistModal={() => setIsWaitlistOpen(true)}
          onReservedTag={(tag) => setReservedTag(tag)}
        />

        {/* Real People, Real Stories — Video + Diverse Story Cards */}
        <PeopleSection onOpenWaitlistModal={() => setIsWaitlistOpen(true)} />

        {/* Audience Partitioning — Individuals vs Importers & Businesses */}
        <AudienceTabs />

        {/* Interactive Euda AI Chat Simulator */}
        <EudaChatDemo />

        {/* Euda OCR Document Scanner Simulator */}
        <ScanTransferDemo />

        {/* Multi-Asset Rate & Speed Calculator */}
        <FeeCalculator />

        {/* eSIM Search & Gift Card Envelope Preview */}
        <ESimSearch />

        {/* Security, Trust & Regulatory Disclosures */}
        <SecurityTrust />

      </main>

      {/* Footer — Sitemap, Legal, Regulatory Disclaimers */}
      <Footer />

      {/* Waitlist / App Download Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        reservedTag={reservedTag}
        isPreLaunch={IS_PRE_LAUNCH}
      />

    </div>
  );
}



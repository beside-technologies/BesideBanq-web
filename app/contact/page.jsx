'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import SecurityTrust from '@/components/SecurityTrust';
import Footer from '@/components/Footer';
import { Building, Mail, Phone, Globe, MessageSquare, ArrowRight, Loader2, ShieldCheck, Send, CheckCircle2, Zap } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    website: '',
    email: '',
    phone: '',
    serviceNeeded: 'Chinese Supplier Payouts (CNY)',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err) {
      setErrorMessage(err.message || 'Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FE] text-slate-900 selection:bg-indigo-500 selection:text-white">
      
      {/* Sticky Navbar */}
      <Navbar isPreLaunch={true} onOpenWaitlistModal={() => window.location.href = '/#hero'} />

      <main className="flex-1 pt-28 pb-20">
        <div className="container max-w-4xl mx-auto space-y-12">
          
          {/* Header Banner */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
              <Mail className="w-4 h-4 text-indigo-600" />
              <span>Get in Touch with BesideBanq</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact Us
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-normal leading-relaxed">
              Have questions about cross-border payments, Chinese supplier payouts, or business partnership accounts? Send us a message below and our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Main Card with Form */}
          <div className="glass-card p-6 md:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl max-w-2xl mx-auto">
            
            {isSubmitted ? (
              <div className="space-y-6 text-center py-8 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Message Sent
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    Thank you, {formData.fullName.split(' ')[0]}!
                  </h2>
                  <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been submitted. A confirmation email was sent to <span className="font-bold text-slate-900">{formData.email}</span>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm space-y-2 text-slate-600 max-w-md mx-auto">
                  <div className="font-bold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-indigo-600" />
                    Next Steps:
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>Our team will review your trade corridor requirements.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>We will respond directly via email or phone/WhatsApp within 24 hours.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        website: '',
                        email: '',
                        phone: '',
                        serviceNeeded: 'Chinese Supplier Payouts (CNY)',
                        message: '',
                      });
                    }}
                    className="btn-primary px-8 py-3.5 text-sm rounded-xl font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Amara Okafor"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50"
                  />
                </div>

                {/* Company Name & Website Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company / Business Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Guangzhou Trading Co."
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company Website <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Work Email & Phone/WhatsApp Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Service Needed */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Needed
                  </label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full px-3 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50"
                  >
                    <option value="Chinese Supplier Payouts (CNY)">Chinese Supplier Payouts (CNY)</option>
                    <option value="Instant Diaspora Remittance">Instant Diaspora Remittance</option>
                    <option value="USD Multi-Currency Vaults">USD Multi-Currency Vaults</option>
                    <option value="Buddy Group Escrow Pooling">Buddy Group Escrow Pooling</option>
                    <option value="eSIM & Global Data Roaming">eSIM &amp; Global Data Roaming</option>
                    <option value="Other Business Inquiries">Other Business Inquiries</option>
                  </select>
                </div>

                {/* Message Details */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message / Inquiry Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your questions, estimated monthly volume, or specific corridor needs..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full py-4 text-base rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-60 shadow-lg shadow-indigo-600/20"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 pt-2 text-center text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict Institutional Privacy &amp; 256-bit AES Encryption</span>
                </div>

              </form>
            )}

          </div>

          <SecurityTrust />

        </div>
      </main>

      <Footer />

    </div>
  );
}

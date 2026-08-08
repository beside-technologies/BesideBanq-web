'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Building, Mail, Phone, Globe, MessageSquare, ArrowRight, Loader2, ShieldCheck, Send } from 'lucide-react';

export default function ClientRequestModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceNeeded: 'Chinese Supplier Payouts (CNY)',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

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
        throw new Error(data.error || 'Failed to submit request. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err) {
      setErrorMessage(err.message || 'Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceNeeded: 'Chinese Supplier Payouts (CNY)',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg glass-card p-6 md:p-8 rounded-3xl border border-white/60 shadow-2xl bg-white text-slate-900 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ── SUCCESS STATE ────────────────────────────────────────────────── */}
        {isSubmitted ? (
          <div className="space-y-6 text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Request Submitted
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Thank you, {formData.fullName.split(' ')[0]}!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                We’ve received your inquiry for <strong>{formData.serviceNeeded}</strong>. An automated confirmation email has been sent to <span className="font-semibold text-slate-900">{formData.email}</span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-600">
              <div className="font-bold text-slate-800 text-sm mb-1">What happens next?</div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Our global trade specialist will review your requirements.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>We will reach out via email or phone/WhatsApp within 24 hours.</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-primary w-full py-3.5 text-sm rounded-xl font-bold"
            >
              Done
            </button>
          </div>
        ) : (
          /* ── FORM STATE ───────────────────────────────────────────────────── */
          <div className="space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                <Building className="w-3.5 h-3.5 text-indigo-600" />
                <span>Business &amp; Client Access</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Request BesideBanq Services
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Fill out the form below for custom supplier payouts, cross-border remittance, or business accounts.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50"
                />
              </div>

              {/* Company Name & Work Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Work Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Phone Number & Service Needed Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Needed
                  </label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full px-3 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50"
                  >
                    <option value="Chinese Supplier Payouts (CNY)">Chinese Supplier Payouts (CNY)</option>
                    <option value="Instant Diaspora Remittance">Instant Diaspora Remittance</option>
                    <option value="USD Multi-Currency Vaults">USD Multi-Currency Vaults</option>
                    <option value="Buddy Group Escrow Pooling">Buddy Group Escrow Pooling</option>
                    <option value="eSIM & Global Data Roaming">eSIM &amp; Global Data Roaming</option>
                    <option value="Other Business Inquiries">Other Business Inquiries</option>
                  </select>
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message / Estimated Volume (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your estimated monthly volume or specific corridor needs..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-sm font-semibold text-slate-900 bg-slate-50/50 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full py-3.5 text-sm rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Client Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>

            <div className="flex items-center justify-center gap-2 pt-2 text-center text-[11px] text-slate-400 border-t border-slate-100">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>256-bit Encrypted Submission &amp; Institutional Privacy</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

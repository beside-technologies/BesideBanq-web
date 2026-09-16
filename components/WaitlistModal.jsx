'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Copy, ShieldCheck, Share2, Award, Gift, ArrowRight } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose, reservedTag }) {
  const [step, setStep] = useState(1); // 1: Email Input, 2: OTP Entry, 3: Dashboard Rank
  const [userTag, setUserTag] = useState(reservedTag || '');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [devOtpHint, setDevOtpHint] = useState('');
  const [verifiedData, setVerifiedData] = useState(null);

  useEffect(() => {
    if (reservedTag) {
      setUserTag(reservedTag);
    }
  }, [reservedTag]);

  if (!isOpen) return null;

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email || !userTag) return;
    setIsLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/v1/waitlist/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), user_tag: userTag.trim() })
      });
      let data = {};
      const text = await res.text();
      try {
        data = JSON.parse(text);
      } catch (_) {
        data = { error: text };
      }
      if (!res.ok) {
        setErrorMsg(data.error || 'Failed to send OTP. Please check your email.');
        return;
      }
      if (data.dev_otp) {
        setDevOtpHint(data.dev_otp);
        setOtp(data.dev_otp.split(''));
      }
      setStep(2);
    } catch (err) {
      setErrorMsg('Network error connecting to BesideBanq service. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpVerify = async (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length < 6) {
      setErrorMsg('Please enter the 6-digit verification code.');
      return;
    }
    setIsLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/v1/waitlist/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), user_tag: userTag.trim(), otp: code })
      });
      let data = {};
      const text = await res.text();
      try {
        data = JSON.parse(text);
      } catch (_) {
        data = { error: text };
      }
      if (!res.ok) {
        setErrorMsg(data.error || 'Invalid or expired verification code.');
        return;
      }
      setVerifiedData(data);
      setStep(3);
    } catch (err) {
      setErrorMsg('Network error verifying code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyLink = () => {
    const link = verifiedData?.referral_link || `https://besidebanq.com/claim?ref=${userTag || 'user'}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg glass-card p-6 md:p-8 rounded-3xl border border-white/60 shadow-2xl bg-white text-slate-900 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: Enter Email & Tag */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 font-extrabold text-xl mb-1">
                @{userTag || 'tag'}
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Lock in your @{userTag || 'username'}
              </h3>
              <p className="text-sm text-slate-600">
                Enter your email to get your 6-digit verification code and reserve your handle.
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              {!reservedTag && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Desired @tag Handle
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 font-extrabold text-indigo-700 text-base">@</span>
                    <input
                      type="text"
                      value={userTag}
                      onChange={(e) => setUserTag(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                      placeholder="yourname"
                      required
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 font-bold text-slate-900"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                  placeholder="name@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 font-semibold text-slate-900"
                />
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-500">
                <input type="checkbox" id="consent" defaultChecked required className="mt-0.5 rounded text-indigo-600" />
                <label htmlFor="consent">
                  Send me launch updates and early access details. You can unsubscribe anytime.
                </label>
              </div>

              {errorMsg && (
                <div className="p-3 text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 rounded-xl">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full py-3.5 text-base rounded-xl shadow-indigo-600/30 disabled:opacity-60"
              >
                <span>{isLoading ? 'Sending Verification Code...' : 'Send Verification Code'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-2 text-center text-xs text-slate-500 border-t border-slate-100">
              Already registered? <button onClick={() => setStep(2)} className="text-indigo-600 font-bold hover:underline">Check your waitlist rank</button>
            </div>
          </div>
        )}

        {/* STEP 2: Email OTP Verification */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 mb-1">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Enter 6-Digit Code
              </h3>
              <p className="text-sm text-slate-600">
                We sent a 6-digit code to <strong className="text-slate-900">{email || 'your email'}</strong>. Enter it below to verify.
              </p>
            </div>

            {devOtpHint && (
              <div className="p-3 text-xs font-mono text-indigo-800 bg-indigo-50 border border-indigo-200 rounded-xl text-center">
                💡 Dev Test OTP: <strong className="tracking-widest font-extrabold text-sm">{devOtpHint}</strong>
              </div>
            )}

            {errorMsg && (
              <div className="p-3 text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 rounded-xl">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleOtpVerify} className="space-y-6">
              <div className="flex justify-center gap-2 sm:gap-3">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    className="w-11 h-13 text-center text-2xl font-extrabold rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 bg-slate-50 text-slate-900"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full py-3.5 text-base rounded-xl shadow-indigo-600/30 disabled:opacity-60"
              >
                <span>{isLoading ? 'Verifying...' : `Verify & Confirm @${userTag || 'tag'}`}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>

            <div className="text-center text-xs text-slate-500">
              Didn't receive code? <button onClick={handleEmailSubmit} className="text-indigo-600 font-bold hover:underline">Resend Email OTP</button>
            </div>
          </div>
        )}

        {/* STEP 3: Mini-Dashboard & Rank Position */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Handle Locked &amp; Verified!
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                @{userTag || 'tag'} is verified!
              </h3>
              <p className="text-sm text-slate-600">
                You are guaranteed this handle for <strong>14 days</strong> post-launch!
              </p>
            </div>

            {/* Rank Box */}
            <div className="bg-gradient-to-br from-[#1D1E81] via-[#232288] to-[#4F46E5] text-white p-5 rounded-2xl text-center space-y-1 shadow-lg">
              <div className="text-xs uppercase tracking-wider font-semibold text-indigo-200">Your Waitlist Position</div>
              <div className="text-4xl font-black tracking-tight text-white">#{verifiedData?.position || 342}</div>
              <div className="text-xs text-indigo-100">Out of {(verifiedData?.total_members || 12486).toLocaleString()} members</div>
            </div>

            {/* Referral Link Box */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Invite Friends to Move Up in Line
              </label>
              <div className="flex items-center gap-2 p-2 bg-slate-100 rounded-xl border border-slate-200">
                <input
                  type="text"
                  readOnly
                  value={verifiedData?.referral_link || `https://besidebanq.com/claim?ref=${userTag || 'user'}`}
                  className="w-full bg-transparent text-xs font-mono text-slate-700 focus:outline-none px-2"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copied ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>

            {/* Founding Member Perks Card */}
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 flex items-start gap-3">
              <Award className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1 text-purple-900">
                <div className="font-bold text-sm text-purple-950">Founding Member Perks Unlocked:</div>
                <ul className="list-disc list-inside text-purple-800 space-y-0.5">
                  <li>Permanent <strong>"Founding Member"</strong> badge on your profile</li>
                  <li>Bonus <strong>banq Points</strong> (redeemable for free transfers and perks)</li>
                  <li>Priority App Download Access on Launch Day</li>
                </ul>
              </div>
            </div>

            {/* Direct WhatsApp Handoff CTA */}
            <a
              href={verifiedData?.whatsapp_url || `https://wa.me/15551521651?text=${encodeURIComponent(`Hi BesideBanq! I want to claim my tag @${userTag}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 text-center"
            >
              <span>Activate @{userTag || 'tag'} on WhatsApp Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="btn-secondary w-full py-3 text-sm rounded-xl font-bold"
            >
              Done &amp; Return to Homepage
            </button>
          </div>
        )}



      </div>
    </div>
  );
}

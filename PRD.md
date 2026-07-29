# Besidebanq — Product Requirements Document (PRD)

**Version:** 1.5  
**Date:** July 2026  
**Status:** Draft — Pending Design & Engineering Review  
**Changelog:** v1.5 — Added global USP, expanded target markets (diaspora in Western Hemisphere/Europe/UK/Asia), stablecoin + fiat multi-asset wallet architecture (custodial), updated BanqDrop to support stablecoins off-chain, clarified V1 international transfer infrastructure (Nigeria rails, China fiat partner, global stablecoin-to-wallet), introduced tiered banq Points gamification system, updated referral program to points-only rewards, and added full Marketing Website Specifications (Section 21).

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Brand & Naming Glossary](#2-brand--naming-glossary)
3. [User Personas](#3-user-personas)
4. [Navigation & App Structure](#4-navigation--app-structure)
5. [Onboarding & KYC](#5-onboarding--kyc)
6. [Home Dashboard](#6-home-dashboard)
7. [Euda — AI Agent](#7-euda--ai-agent)
8. [Move — Send & Receive Money](#8-move--send--receive-money)
9. [Cards](#9-cards)
10. [Accounts — Multi-Currency Wallets](#10-accounts--multi-currency-wallets)
11. [Savings](#11-savings)
12. [Trade — Stocks, ETFs & Forecast Markets](#12-trade--stocks-etfs--forecast-markets)
13. [Buddy](#13-buddy)
14. [Lifestyle Tab](#14-lifestyle-tab)
15. [Profile & Settings](#15-profile--settings)
16. [Referral Program](#16-referral-program)
17. [Notifications](#17-notifications)
18. [In-App Support](#18-in-app-support)
19. [Third-Party API Integrations](#19-third-party-api-integrations)
20. [Security & Compliance](#20-security-compliance)
21. [Marketing Website Specifications](#21-marketing-website-specifications)

---

## 1. Product Overview

**Besidebanq** is a next-generation fintech super-app designed for the global African community. It combines global money movement, intelligent AI-powered finance, stock & prediction market trading, group pooling, lifestyle services, and credit building — all in one seamless mobile experience.

### Unique Selling Proposition (USP)
*   **"Helping people live a better life globally"** — Besidebanq is built to empower the global African community by removing financial barriers, enabling wealth creation, and simplifying support for loved ones across borders, directly improving their quality of life.

### Core Value Proposition
- Move money globally using stablecoins with low fees and fast settlement.
- Build credit history through everyday transactions.
- Invest in US stocks, ETFs, and forecast markets.
- Pool money collectively with trusted circles and govern transfers by democratic vote.
- Access lifestyle services (eSIM, utility bills) without leaving the app.
- Let **Euda**, the AI financial agent, manage and narrate your finances autonomously.

### Target Markets
- **Primary Users (Senders):** The global African diaspora residing in the Western Hemisphere (US, Canada), Europe, the UK, and Asia.
- **Recipients:** Anyone, globally — individuals, businesses, suppliers, or institutions reachable via Besidebanq's V1 payout rails:
  - Nigeria (local banking rails)
  - China (dedicated fiat payout partner — CNY)
  - Anywhere in the world via stablecoin transfer to an external crypto wallet
  - Any Besidebanq @tag user globally via BanqDrop

---

## 2. Brand & Naming Glossary

| Concept | Besidebanq Name | Notes |
|---|---|---|
| App | **Besidebanq** | All lowercase, no space |
| AI Agent | **Euda** | Named after *Eudaimonia* (Greek for human flourishing, well-being, and living a good life). Connected directly to our USP of helping users live a better life globally. |
| User tag/handle | **@tag** | e.g. `@johndoe` — public identity across the app |
| In-app P2P transfer | **BanqDrop** | Official name for instant, zero-fee peer-to-peer transfers |
| Group pooling feature | **Buddy** | Earmarked group funds with vote-based transfers |
| Loyalty program | **banq Points** | Earn points for transactions, referrals, activity |

---

## 3. User Personas

### Persona 1 — The Diaspora Professional
- African living in Canada, the UK, Europe, or Asia.
- Sends money home monthly to family in West, East, or Central Africa.
- Wants USD savings, credit building, and a global card.
- Uses Euda to automate remittances and bill payments.

### Persona 2 — The Young African Professional
- Based in a major African city, 24–35.
- Invests in US stocks and prediction markets.
- Pays bills via app, uses eSIM when traveling internationally.
- Participates in Buddy for shared savings goals.

### Persona 3 — The SME Owner / Importer
- African business owner importing from suppliers worldwide (e.g. China, Europe, or Asia).
- Needs direct, low-cost international stablecoin payout capabilities and fiat destination payouts (China).
- Uses Buddy for group supplier payments with business partners.

### Persona 4 — The Social Spender
- Travels frequently, purchases eSIM plans in-app.
- Earns and redeems banq Points across all transaction types.
- Refers friends for bonus banq Points.
- Uses BanqDrop for instant group bill splitting in fiat or stablecoins.

---

## 4. Navigation & App Structure

### Bottom Navigation Bar (5 Tabs)
```
🏠 Home  |  ↗️ Move  |  ⚡ Euda  |  📊 Trade  |  🌴 Lifestyle
```

### Top Bar (Persistent Across All Screens)
- **Euda AI input bar** — tapping triggers Euda overlay from bottom.
- **banq Points / Gift icon** — quick access to rewards.
- **Bell icon** — notifications with unread badge.

### Full Screen Map
```
Besidebanq
│
├── 🏠 HOME
│   ├── Euda AI search bar
│   ├── Card widget + Add card
│   ├── Balance (with hide toggle)
│   ├── Accounts switcher (multi-currency)
│   ├── Income vs Expense split
│   ├── Balance chart (1H → All)
│   ├── Quick actions: Add funds | Send | Swap | More
│   ├── Savings widget (APY shown)
│   └── Spending Insights (Euda-narrated)
│
├── ↗️ MOVE
│   ├── Send Money
│   │   ├── Bank Transfer (domestic)
│   │   ├── BanqDrop (@tag — in-app, free)
│   │   ├── International (Stablecoin rails — 60+ markets)
│   │   └── Scan to Transfer (QR, chats, handwritten, invoices)
│   └── Add Funds / Receive
│
├── ⚡ EUDA (AI Agent)
│   ├── Chat interface
│   ├── Suggested prompts
│   ├── Action history
│   └── Account context (requires KYC for advanced capabilities)
│
├── 📊 TRADE
│   ├── For You (personalised feed)
│   ├── Markets (Forecast / Prediction)
│   ├── Stocks (US equities)
│   ├── ETFs
│   └── Activity (Positions, Open Orders, History)
│
├── 🌴 LIFESTYLE
│   ├── eSIM
│   ├── banq Points
│   └── Bill Payments (Airtime, Data, Entertainment, Electricity)
│
└── PROFILE / SETTINGS (via avatar on Home)
    ├── Profile & KYC info
    ├── Cards management
    ├── Buddy
    ├── Referrals
    ├── Direct Deposit
    ├── Recipients
    ├── App Preference
    ├── Savings
    ├── Security (PIN, Biometrics, Limits, Devices)
    └── About (Rates, FAQ, Privacy Policy)
```

---

## 5. Onboarding & KYC

### 5.1 Splash & Entry
- Animated logo splash screen (Lottie animation)
- Two CTAs: **Sign Up** | **Log In**

### 5.2 Sign Up Flow (Frictionless Entry)
To maximize conversion, initial signup is extremely streamlined, requiring only basic credentials.

#### Path A — Standard Sign Up
1. **Email address** entry → **OTP verification via Email** (6-digit code sent to inbox, 10-minute expiry).
2. **Password** creation (min 8 chars, 1 uppercase, 1 number, 1 special character).
3. **Create @tag** — unique handle (e.g. `@johndoe`).
4. **Terms & Privacy** acceptance → Account created & direct access to Home Dashboard.

#### Path B — Google Sign-In (OAuth 2.0)
1. Tap **"Continue with Google"** on entry screen.
2. Select or confirm Google account via native OS sheet.
3. Besidebanq receives verified email, name, and profile photo.
4. **Create @tag** — unique handle (pre-suggested from Google name).
5. **Terms & Privacy** acceptance → Account created & direct access to Home Dashboard (no email OTP required).

---

### 5.3 KYC — Progressive Account Tiers
Compliance verification is progressive and prompted when a user attempts to execute financial actions rather than blocking signup.

| Tier | Name | Requirements | Capabilities Unlocked |
|---|---|---|---|
| **Tier 1** | Basic Profile | - Full legal name & Date of Birth<br>- Residential Address<br>- Phone number + **SMS OTP verification**<br>- Create 4 or 6-digit transaction PIN | - Receive funds<br>- Add external cards<br>- Basic domestic transfers (low limits) |
| **Tier 2** | Verification | - 11-digit Bank Verification Number (BVN) check (Nigeria only)<br>- Employment Information (status, monthly range) | - Domestic outgoing transfers (standard limits)<br>- Virtual card issuance<br>- BanqDrop in-app transfers |
| **Tier 3** | Full Compliance | - Government-issued ID upload (Passport, ID card)<br>- 3D Liveness Selfie Scan | - International Transfers (Stablecoin rails)<br>- Physical card orders<br>- Maximum transfer limits |

**KYC Verification Rules:**
- BVN must match the legal name and Date of Birth provided in Tier 1.
- Mismatch errors are shown inline with helpful "Try Again" messaging.

---

## 6. Home Dashboard

### 6.1 Card Widget
- Displays primary active Visa card (virtual or physical).
- Branded card design.
- **"+ Add card"** to order or link a card.
- Swipeable carousel if multiple cards exist.

### 6.2 Balance Section
- Large primary balance display in the selected wallet currency.
- **Eye icon** — toggles balance visibility (privacy mode).
- **Accounts dropdown** — switch between fiat wallets (NGN, USD, EUR, GBP) and stablecoin wallets (USDC, USDT, wUSD). Each wallet displays its own independent balance.
- Income/Expense split: `+$0.00 ▲ | -$0.00 ▼` (adapts to selected wallet currency).

### 6.3 Balance Chart
- Interactive line/area chart.
- Time range toggles: `1H · 1D · 1W · 1M · 3M · YTD · 1Y · All`
- Tap any point to see balance at that moment.
- Swipeable second view: Category breakdown (donut chart).
- **Euda** narrates significant changes inline.

### 6.4 Quick Actions Row
- **Add Funds:** Fund wallet from bank or card.
- **Send:** Opens Move tab.
- **Swap:** Currency exchange between wallets (instant execution).
- **More:** Request money, pay bills, etc.

### 6.5 Savings Widget
- Displayed as a card on home screen showing APY rate prominently (e.g. 3.1%).
- Tap to open full savings detail page.

### 6.6 Spending Insights
- **Euda**-powered spending summary.
- Shows total spent this period and category breakdown.
- **Empathetic AI Insight Tone:** Euda focuses on supportive, positive feedback. Instead of dry or guilt-inducing statements, Euda reframes spending constructively to encourage healthy habits (e.g. framing entertainment as self-care, dining as social bonding).
  - *Example:* Instead of *"You spent 20% more on entertainment this month"* $\rightarrow$ *"You invested 20% more in self-care and entertainment this month. Taking care of yourself is important! Let's adjust our budget slightly elsewhere to keep us balanced."*

---

## 7. Euda — AI Agent

### 7.1 Overview
**Euda** is Besidebanq's autonomous AI financial agent. The name is derived from **Eudaimonia** (Greek for human flourishing, well-being, and living a good life), reflecting Besidebanq's core USP of helping users live a better life globally. Euda serves as the primary interaction layer — accessible from any screen via the persistent top search bar, and as a dedicated tab in the bottom nav.

**Mascot:** Gradient teardrop/play-button shape with a smiley face.

**Personality & Tone:** Warm, empathetic, supportive, and positive. Euda acts as a financial partner rather than a strict auditor. It celebrates healthy lifestyle spending (e.g., self-care, learning, family gifts) while constructively suggesting alignment with the user's financial goals.

- **Autonomous Execution Guardrails (Critical Security):** Euda can read balances, analyze spending, build budget forecasts, and prepare draft payments (e.g., preparing a BanqDrop or bill payment). However, **Euda is strictly prohibited from executing any outward transaction autonomously**. Every financial transaction drafted or proposed by Euda requires explicit user authorization via Transaction PIN or Biometric confirmation (Face ID/Fingerprint).
- **Query Rate Limiting:** To prevent API cost exploitation, Euda query input is rate-limited to a maximum of 100 queries/prompts per user per 24-hour cycle. Nearing the limit displays a friendly, contextual alert.

### 7.2 Access Points
- **Top bar input (persistent):** Tapping the search/prompt bar on any screen slides up the Euda overlay from the bottom.
- **Euda tab:** Full dedicated chat screen in bottom nav.
- **Scan camera icon:** Direct access to "Scan to Transfer" camera within Euda input bar.
- **Inline suggestions:** Context-aware nudges on Home, Trade, and Lifestyle screens.

### 7.3 Capabilities

| Capability | Example Prompt / Action |
|---|---|
| Balance queries | *"What is my wallet balance?"* |
| Spending summaries | *"Summarize my May spending"* |
| FX rates | *"What's today's NGN to USD rate?"* |
| Send money | *"Send ₦5,000 to @john"* |
| BanqDrop a friend | *"BanqDrop ₦2,000 to @sarah"* |
| Save money | *"Move $50 to my savings"* |
| Pay bills | *"Pay my electricity bill"* |
| Investment info | *"How is AAPL doing today?"* |
| Forecast market | *"What's the current odds on the OpenAI IPO market?"* |
| Buddy | *"Start a vote to send ₦20,000 from our Circle to John"* |
| Scan & Transfer | *[Upload image/screenshot]* *"Find the account details in this screenshot and pay it"* |

### 7.4 Context & Learning
- Euda improves with more account data.
- Requires completed KYC to access full capabilities.
- Shows *"Give Euda a moment..."* loading state when processing.
- Maintains full conversation history.

### 7.5 Rate Your Conversation
- Floating feedback widget visible on key screens.
- *"Rate your conversation · Reply from Besidebanq"* collects thumbs up/down + optional text feedback.

---

## 8. Move — Send & Receive Money

### 8.1 Screen Structure
Two mode tabs at top: **Accounts** (bank/cross-border transfers) | **BanqDrop** (in-app P2P, free).

### 8.2 Bank Transfer (Domestic Mode)
- Currency selector with flag dropdown (NGN default).
- Amount input with available balance shown inline.
- "Send to" field — resolves account number + bank name in real-time via bank API lookup.
- **Recipient Confirmation Screen:** Before proceeding to PIN entry, the app displays a full confirmation sheet showing:
  - ✅ Verified recipient full name (returned from the bank's account name lookup API)
  - 🏦 Bank name
  - 🔢 Account number
  - 💰 Amount to be sent
  - 💳 Transaction fee shown upfront
  - User must explicitly tap **"Confirm & Proceed"** before PIN/biometric authorization.
- Confirmation screen → PIN/biometric entry → Transaction receipt.

### 8.3 BanqDrop — In-App P2P Transfer
- **Free** for all Besidebanq-to-Besidebanq transfers, always.
- Find recipient by: **@tag** | **Phone number** | **QR code scan**.
- Recipient avatar + full name shown as confirmation before sending.
- Optional **note or emoji** attached to transaction (social/viral mechanic).
- Instant settlement (no delay) and zero fees.
- **Multi-Asset Support:** BanqDrop supports sending both fiat balances (NGN, USD, EUR, GBP) and stablecoins (wUSD, USDC, USDT). The sender selects the asset from a dropdown before confirming.
- **Off-Chain Settlement:** All BanqDrop transfers (including stablecoin BanqDrops) are settled on Besidebanq's internal ledger. No blockchain transaction is broadcast, resulting in **zero gas fees** and instant execution regardless of asset type.

---

### 8.4 International Transfer
Besidebanq processes cross-border transfers using a V1 infrastructure that supports three distinct payout rails:

#### Payout Rails (V1 Launch)
| Destination | Method | How it Works |
|---|---|---|
| **Nigeria (Domestic)** | Local Banking Rails | Standard NGN bank transfer with verified recipient name confirmation |
| **China** | Dedicated Fiat Payout Partner | CNY settled into Chinese bank accounts, Alipay, or WeChat Pay via vendor-agnostic partner |
| **Any Besidebanq @tag (Global)** | BanqDrop (Off-Chain) | Instant, free — sender BanqDrops NGN/USD/EUR/GBP/wUSD/USDC/USDT to any @tag globally |
| **External Crypto Wallet (Rest of World)** | On-Chain Stablecoin | Recipient provides external wallet address; Besidebanq executes on-chain transaction; gas fee applies |

#### China Fiat Payout — Confirmation Flow
Where the payout partner API supports recipient verification, Besidebanq will display a pre-authorization confirmation screen showing:
- ✅ Recipient name (as registered with the Chinese bank, Alipay, or WeChat Pay account — if returned by the partner API)
- 🏦 Destination bank name or payment method (Alipay / WeChat Pay)
- 🔢 Bank account number or payment ID
- 💰 CNY amount to be received (after FX conversion)
- 💳 Total fee and exchange rate shown transparently
- User must explicitly tap **"Confirm & Proceed"** before PIN/biometric authorization.
- *Note: Name verification availability depends on the fiat payout partner's API capabilities. Where unavailable, the user is shown a disclaimer and prompted to double-check the details manually.*

* **Just-In-Time (JIT) CNY Conversion:** Besidebanq does not store or hold custody of CNY balances for users. All China payments are funded via real-time "Just-In-Time" conversion from the user's active fiat wallets (USD, EUR, GBP, NGN) or stablecoin wallets (USDC, USDT, wUSD) at the moment of payment execution.

#### Custodial Wallet Architecture
- Each user is automatically assigned a unique **deposit wallet address per supported network** (e.g., one TRC-20 address, one Solana SPL address, etc.) upon activating their stablecoin wallet.
- Besidebanq manages private keys under a **custodial model** — user stablecoin balances are tracked on Besidebanq's internal ledger.
- Deposit addresses are visible in-app under each stablecoin wallet's "Receive" screen.
- Internal BanqDrop stablecoin transfers do **not** broadcast to the blockchain — they are settled as internal ledger credits/debits only.
- External on-chain sends deduct from Besidebanq's custodial pool and broadcast to the selected network.

#### Supported Stablecoins & Networks
* **Supported stablecoins:** **wUSD**, **USDC**, and **USDT**.
* **Supported Crypto Networks (Top 8):**
  1. **Tron (TRC-20):** Primary network for USDT transfers; widely used in emerging markets for low cost.
  2. **Solana (SPL):** Ultra-high-speed, sub-penny fees; standard for USDC settlements.
  3. **Base (L2):** Optimized for low-cost USDC transfers.
  4. **Arbitrum One (L2):** High liquidity L2 for both USDC and USDT.
  5. **Ethereum (ERC-20):** Deepest institutional liquidity, suited for large transactions.
  6. **BNB Smart Chain (BEP-20):** Widely used globally for low-fee USDT transfers.
  7. **Polygon PoS:** High developer adoption, cheap transaction fees.
  8. **Optimism (L2):** Superchain-secured network for low-fee transactions.

---

### 8.5 Scan to Transfer (OCR Engine)
A unified scanning engine accessible via the **Scan 📷** button in the **Move** tab and a camera shortcut in the **Euda** input bar. 

It enables instant transfers by scanning:
1. **QR Codes:** Decoded client-side in real-time for instant P2P/merchant transfers.
2. **Handwritten Bank Details:** Snapping a photo of bank details scribbled on paper. Euda parses the handwriting and extracts the bank name and account number.
3. **Chat Screenshots (WhatsApp/Telegram):** Uploading screenshot images from the gallery. The AI ignores background chat bubbles/timestamps and extracts the transfer recipient's bank details.
4. **Supplier Invoices:** Parsing PDF or image invoices to auto-populate transfer fields.

**Transfer Verification Flow:**
- After scanning, Besidebanq shows an animated loader: *"Euda is reading your document..."*
- Besidebanq queries the target bank's API using the extracted account number to verify the recipient's real name.
- A confirmation sheet displays the auto-filled details (Bank Name, Account Number, Verified Recipient Name, and parsed Amount) for user approval before PIN/biometric authorization.

---

### 8.6 Add Funds (Receive Money)
- Fund from linked domestic bank account.
- Fund via debit card.
- Receive via BanqDrop from another user.
- Receive via bank transfer (local account details provided per currency).
- Direct deposit (salary/recurring).
- QR code for receiving BanqDrop payments in person.

### 8.7 Swap
- Convert between currencies held in wallets.
- Mid-market rate with transparent fee breakdown.
- Instant execution.

### 8.8 Recipients (Saved Payees)
- Saved list: name, @tag, or bank details.
- **Payee Groups (Batch Templates):** Users can group multiple saved payees into a custom list (e.g. "China Supplier Cohort"). This group can be selected in a single click to auto-populate multi-recipient transfers or Buddy disbursements.
- Recent recipients shown on Move screen for quick access.

---

## 9. Cards

### 9.1 Card Types
- **Virtual Card:** Instantly issued upon request; for online & global spending.
- **Physical Card:** Branded Visa card delivered by mail; for in-person global use.

### 9.2 Card Features
- Besidebanq-branded Visa card.
- Instant freeze / unfreeze from app.
- Per-card spending limits (daily, per transaction).
- View full card details (number, CVV, expiry) secured behind PIN/biometric.
- **Dynamic Card Funding & Authorization Engine:** When the user swipes their physical card or pays online, Besidebanq's payment authorization gateway intercepts the request and checks their user-designated default card-funding wallet (which can be set to NGN, USD, or stablecoins USDC/USDT). Besidebanq executes real-time FX conversion and settles the card transaction on-the-fly. If the selected default wallet has insufficient funds, the transaction is declined.
- **3D Secure (3DS) Verification:** All online card payments are protected by 3DS. They require the user to input a 6-digit OTP sent via SMS, or complete a Face ID confirmation via an instant Besidebanq push notification redirecting them into the app.

### 9.3 Card Onboarding Screen
- Hero card image (branded design).
- Tagline: *"Get a card that works — stream, shop and spend worldwide"*.
- **"Get Started"** CTA.

### 9.4 Card Management
- All cards in swipeable carousel on Home screen.
- Tap card → Card detail screen → Manage (freeze, limits, view details).

---

## 10. Accounts — Multi-Currency Wallets

### 10.1 Supported Fiat Currencies (Launch)
- 🇳🇬 NGN — Nigerian Naira
- 🇺🇸 USD — US Dollar
- 🇪🇺 EUR — Euro
- 🇬🇧 GBP — British Pound

### 10.2 Supported Stablecoin Wallets (Launch)
- 💵 USDC — USD Coin
- 💵 USDT — Tether USD
- 💵 wUSD — Wrapped USD Stablecoin

### 10.3 Account Features
- Each currency/stablecoin has its own wallet with a separate, independently tracked balance.
- Fiat wallets: local account details for receiving (routing + account number for USD; IBAN + sort code for GBP/EUR).
- Stablecoin wallets: unique on-chain deposit address per supported network shown under each wallet's "Receive" screen.
- Switch between all wallets via the accounts dropdown on the Home screen.
- Balance chart updates per selected wallet.

### 10.4 Direct Deposit
- Set Besidebanq account as salary or recurring payment destination.
- Supported for USD, GBP, EUR accounts.

---

## 11. Savings

### 11.1 Overview
USD-denominated, high-yield savings product with daily interest accrual.

### 11.2 Features
- **APY Rate:** 3.1% standard APY.
- **Yield Generation Model:** Yield is generated by allocating funds into low-risk, yield-bearing US Treasury assets and money market instruments managed by our licensed Brokerage-as-a-Service Partner, ensuring a compliant and risk-minimized growth model.
- Interest accrues daily, visible in-app.
- No lock-in — withdraw anytime.
- Savings balance shown as widget on Home screen.

---

## 12. Trade — Stocks, ETFs & Forecast Markets

### 12.1 Tab Structure
Four sub-tabs: **For You** | **Markets** | **Stocks** | **ETFs**

### 12.2 Forecast Markets (Prediction Markets)
- Users buy YES or NO positions on real-world event outcomes.
- Price = market's implied probability (e.g. $0.65 = 65% chance of YES).
- Contracts settle at $1.00 (correct) or $0.00 (incorrect) at resolution.
- Volume displayed per market.
- **Dual-Source Oracle Resolution:** Markets are automatically resolved by Besidebanq's oracle integration matching reports from at least two independent premium global news outlets or official APIs. 
- **Arbitration Settlement Lock:** If the data feeds disagree or a settlement is disputed by the community, the contract undergoes a **24-hour Arbitration Lock**. During this lock, Besidebanq's compliance team manually reviews official records to resolve the resolution.
- **Exposure & Risk Caps:** To comply with regional predictions/gaming frameworks and protect user capital, the platform enforces a maximum betting limit of $500 per user per event, and strictly prohibits leveraged or margin trading.

### 12.3 US Stocks
- Real-time US stock market prices.
- Buy and sell with market and limit orders.
- Fractional shares supported (invest from $1).
- **Compliance & KYC Clearance:** Access to US stocks and fractional trading is subject to KYC/AML approval matching the guidelines of our licensed Brokerage-as-a-Service Partner (limited to supported non-US/EU jurisdictions or complying with SEC rules).
- Live sparkline charts on stock cards.

### 12.4 ETFs
- Curated selection of global ETFs.
- Same trading interface as stocks.
- Categorised by theme: Tech, S&P 500, Emerging Markets, Dividend, etc.

### 12.5 Activity (Portfolio)
Three tabs: **Positions** | **Open Orders** | **History**.
- **Total Equity** displayed in USD at top.
- Filter chips: All | In profit | In loss | Closing soon.

---

## 13. Buddy

### 13.1 Overview
Buddy is Besidebanq's group collective wallet feature. Instead of pooling funds into a single centralized account (which introduces regulatory and custodial risks), Besidebanq uses an **escrow-like wallet locking mechanism**. 

Members contribute "virtually" to a Circle. These funds do not leave their own accounts. Instead, they are earmarked and locked within their individual wallets. Transfers are executed directly from members' locked balances only after a **100% unanimous vote of all contributors** is reached.

This is a **democratic shared fund** — not a rotating payout system (Ajo).

#### 13.1.1 Legal Standing & Compliance Rationale
1. **No Fund Commingling (Custody Compliance):** Funds contributed by members never leave their individual personal accounts until the moment a transfer is approved.
2. **Avoidance of Banking Classification:** By locking/earmarking funds at the user level, Besidebanq is not "taking deposits" or "managing cooperative investments" in a corporate capacity.
3. **Revocation & Lock Release:** Releasing a lock is a local wallet state transition, preventing any "unlawful withholding of funds" claims.
4. **Tax and AML Reporting:** Since all transactions originate from and terminate in verified individual wallets, Besidebanq retains a compliant audit trail.

### 13.2 Key Concepts

| Term | Definition |
|---|---|
| **Circle** | A named group directory with defined members and a virtual pool display. |
| **Member** | Any Besidebanq user who joins a Circle. |
| **Admin** | The active manager of the Circle. By default, the Circle creator starts as the initial Admin. However, at any time, members can vote (80% majority) to replace them with a new Admin. |
| **Locked Balance** | Funds earmarked in a member's own wallet specifically for the Circle (fiat or stablecoins wUSD/USDC/USDT). Users cannot spend or withdraw locked funds. |
| **Proposal** | A request to unlock and transfer a specific amount from the Circle's total locked pool. |
| **Vote** | A member's YES or NO on an active proposal. |
| **Quorum** | **100% of contributors** (unanimous approval of those who have locked funds) must vote YES for a proposal to pass. |
| **Timelock** | Proposals stay active and pending for exactly 48 hours. |

### 13.3 Circle Creation & Inviting Flow
1. Tap "Create a Circle"
2. Enter Circle name and configure Rules (including early exit penalty percentages: e.g. 0%, 5%, 10%).
3. **Invite Members (Dual Methods):**
   * **In-App Direct Invite:** Search and select other Besidebanq users by `@tag` or phone number. They receive a push notification to accept or decline.
   * **Shareable Invite Link:** Generate a secure join link (e.g. via WhatsApp/Telegram). For existing users, tapping opens the Circle join sheet. For new users, it triggers a download redirect and automatically prompts the join sheet post-signup (viral loop).
4. Circle becomes active once at least 2 members have accepted and joined.
5. **Initial Governance:** To prevent funding deadlocks and ensure immediate operational capability, the Circle **Creator starts as the initial Admin** by default.

### 13.4 Contributions & Wallet Locking
- Any member can lock any amount of local fiat (NGN/USD/EUR/GBP) or stablecoins (wUSD/USDC/USDT) in their wallet for the Circle at any time.
- The app shows a total virtual pool balance (sum of all members' locked balances) in a primary currency, showing the split of fiat and crypto assets.
- Earmarked funds remain in the user's name/wallet but are restricted from regular spend (bills, cards, stock trading, standard bank transfers).
- **Zero-Balance Prompts & Action Blocks:** Users with a Locked Balance of 0 are shown inline nudges to contribute. They are restricted from creating or voting on proposals until they lock a balance $>0$.

### 13.5 Proposal & Voting Flow
1. Any member can submit a **Transfer Proposal**.
   - **Static Amount:** The proposal specifies a fixed sum. Proportional shares are locked immediately.
   - **Variable Amount:** The proposal specifies a maximum budget cap (e.g. for dynamic expenses).
2. The app calculates each member's share of the transfer proportionally based on their locked balance.
3. All members receive a push notification immediately.
4. Members have **48 hours** to vote YES or NO. Only members with **Locked Balance > 0 (Contributors)** are eligible to vote.
5. **If 100% of contributors vote YES** before the deadline, the proposal passes.
   - *Admin Manual Close:* The admin can manually close voting early once it reaches 100% approval to prepare disbursement.
6. **If the 48-hour deadline passes** without 100% YES votes, the proposal automatically expires and fails.
7. **Disbursement & Payout Execution:**
   - Once voting ends, **only the elected Admin can initiate the actual outward fund execution**. 
   - *Final Amount Input:* The admin enters the exact disbursement amount (up to the approved limit).
   - *Single Unified Transaction (Consolidated Payout):* Behind the scenes, Besidebanq sweeps and pools members' proportional debits instantly into an internal system clearing account. It then executes **one single outward transaction** to the recipient. This guarantees the payee receives exactly **one credit alert** and one transaction from Besidebanq, avoiding messy fragmented payments and multiple fees.
   - **Multi-Recipient Batch Payout Builder:** A single proposal can disburse funds to multiple recipients in different destination currencies. The Admin can populate this batch using three flexible methods:
     1. **Manual Entry:** Adding and typing account details for each payee individually.
     2. **Saved Groups (Recipient Templates):** Selecting a pre-saved cohort of multiple payees (e.g. "Weekly Logistics Team") to auto-populate the entire list in one click.
     3. **Multimodal Single Scan (Euda OCR):** Uploading a single document or screenshot (e.g. a WhatsApp chat list containing multiple account numbers). Euda parses the image, extracts all unique bank details, runs real-time API name verification on each, and maps them as distinct payees in the batch list.
   - **Single-Batch Execution:** To prevent partial payouts from prematurely unlocking funds, multi-recipient disbursements must be executed by the Admin as a single, unified batch transaction. The system processes the entire batch atomically, and unlocks any remaining surplus only after the complete batch has been executed.
8. **Proportional Refunds:** If the disbursed amount is less than the locked budget, the unused remainder is immediately unlocked and returned to contributors **proportionally** based on their contribution percentage.
9. **History Audit Trail:** The app maintains a secure, immutable history of all active, passed, failed (expired), cancelled, and executed proposals.

### 13.6 Voluntary Exit & Member Removal

* **Voluntary Exit (Opt-Out):**
  * A member can voluntarily exit the Circle and unlock their locked funds at any time, **provided they have not already voted YES on an active Transfer Proposal**. 
  * **Commitment Lockout Rule:** A member **cannot** voluntarily exit or unlock their funds if they have locked funds that are currently committed to a **Passed, Pending-Execution Proposal** or an **Active Vote** that they already approved. They are locked into the Circle until that payout batch is executed or the proposal is cancelled/expired.
  * If a member has voted YES, they are locked in until the active proposal either executes or expires.
  * Upon exit, any pre-agreed early exit penalty (e.g. 5%) is deducted from the locked amount and distributed to the remaining members' locked pools. The remaining balance is unlocked and returned to their spendable wallet.
* **Member Removal:**
  * Admin cannot remove contributing members unilaterally.
  * Removal requires initiating a **Removal Proposal**, which must receive a **100% YES vote** from all other members (excluding the member being removed).

### 13.7 Admin Election & Permissions

* **Admin Election & Replacement:** 
  * The Circle Creator serves as the **initial Admin** from creation.
  * At any time, any active member can nominate themselves or another member to replace the current Admin.
  * The new Admin is elected and replaces the incumbent immediately upon receiving an **80% majority vote** of all active members.
* **Admin Permissions:**
  * Remove non-contributing members instantly.
  * Initiate removal proposals for contributing members.
  * Rename the Circle.
  * Archive / close the Circle (requires 100% vote).
  * **Disbursement Initiation:** Execute payments from passed proposals, including inputting final amounts, routing multi-recipient payouts, and triggers.
  * Cannot unilaterally move or confiscate funds.

### 13.8 Circle Dissolution
- Any member can propose Circle dissolution.
- Requires **100% unanimous vote**.
- On successful dissolution: all locked balances are instantly unlocked and returned to the contributors' spendable wallets.

### 13.9 Edge Cases

| Scenario | System Behaviour |
|---|---|
| Member leaves mid-vote | If they hadn't voted YES yet, they can leave; the vote is cancelled or quorum recalculated. |
| Member misses 48hr window | Abstention — results in proposal expiry since 100% approval is required. |
| Admin leaves the Circle | Admin role becomes vacant; a new admin election proposal is opened automatically. |
| Insufficient Circle funds for proposal | Proposal blocked at submission with error message. |
| Only 2 members and one leaves | Circle paused; remaining member can dissolve and unlock funds. |

---

## 14. Lifestyle Tab

### 14.1 Overview
The Lifestyle tab extends Besidebanq beyond finance into daily utility, making it a true super-app.

### 14.2 eSIM 📶
- Purchase data plans for 150+ countries globally.
- Browse by country (auto-detect location or manual search).
- Pay directly from Besidebanq NGN/USD wallet.
- eSIM profile delivered digitally — no physical SIM swap required.

### 14.3 Bill Payments 📱
All bill payments accessible directly from the Lifestyle tab:
- **Airtime & Data:** All local networks.
- **Entertainment:** DSTV, GOtv, Showmax, Netflix top-up.
- **Electricity:** Prepaid meter token top-up.

### 14.4 Gift Cards 🎁

#### 14.4.1 Catalog Discovery & Personalization
* **Global & Regional Catalog:** Besidebanq integrates a vendor-agnostic catalog (via the Gift Card Aggregator API) enabling users to search, filter, and buy:
  * *Global Digital Brands:* App Store & iTunes, Google Play, Amazon, Netflix, Spotify, Steam, PlayStation, Xbox.
  * *Regional Brands:* Local supermarkets, ride-sharing, and retail chains (adapted dynamically based on user region or recipient region).
* **Search & Filter:** Users can browse by **Country**, **Category** (Retail, Gaming, Entertainment, Food), or search directly by brand name.

#### 14.4.2 Purchase & Currency Checkout Flow
* **Multi-Wallet Support:** Users can fund the purchase using any active fiat wallet (NGN, USD, EUR, GBP) or stablecoin wallet (USDC, USDT, wUSD).
* **Dynamic FX Conversion:** If the user pays with USDC but purchases a CAD Amazon gift card, Besidebanq calculates and displays the real-time FX rate, processing fee, and final deduction amount upfront.
* **Transaction Limits (Anti-Fraud):** 
  * Max purchase limit of $500 per transaction and $1,000 cumulative per day (to prevent credit card/crypto cashout fraud).
  * Requires Tier 2 KYC for purchases over $100.

#### 14.4.3 The Gifting Flow (P2P Social Viral Loop)
* **Gifting Option:** During checkout, the user toggles **"Send as a Gift"**.
* **Personalization:** Senders select a digital greeting template (e.g., Birthday, Thank You, Holiday) and write a custom memo.
* **Delivery Routes:**
  * **To Besidebanq User (@tag):** Recipient gets an in-app alert. Opening it triggers a premium **"gift envelope ripping" animation** that reveals the card, code, and note. The card is automatically saved to their *Voucher Wallet*.
  * **To Non-User (Email/SMS):** Recipient receives a link opening a customized Besidebanq web page displaying the interactive greeting card and voucher. The page includes download links to prompt them to claim/store it in the Besidebanq app.

#### 14.4.4 Voucher Storage & Management (Voucher Wallet)
* A dedicated **"My Vouchers"** sub-tab inside the Lifestyle tab.
* **Voucher Card Detail view:** Shows the brand logo, active code, PIN, expiry date, detailed redemption instructions, and a quick "Copy Code" button.
* Once used, users can toggle a *"Mark as Redeemed"* button to archive the card.

#### 14.4.5 Operational Edge Cases & Security
* **Strict Refund Policy:** All gift card sales are final and non-refundable. This is explicitly agreed to via a checkbox on the final checkout screen.
* **Provider API Failure (Fallback):** If the aggregator API fails to deliver the code after the user's wallet is debited:
  - The transaction status is marked as **"Pending Verification"**.
  - The system auto-retries for 3 minutes.
  - If it remains unissued, Besidebanq automatically reverses the debit, refunds the user's wallet in full, and triggers a push alert: *"Gift card purchase failed. Your wallet has been refunded."*

### 14.5 banq Points ⭐
Besidebanq's loyalty and rewards program details, including earning tiers and redemption rules, are consolidated in **Section 16.3 (banq Points — Gamification System)**. Refer to that section for the transactional points-multiplier model.

---

## 15. Profile & Settings

### 15.1 Profile Screen
- Avatar, Full Name, and @tag (with Public / Private toggle).
- Personal Information: Name, DOB, Gender, Marital status.
- Contact Information: Phone, Email, Next of Kin, Address.
- Employment Information: Nationality, Employment status, Income range.

### 15.2 Settings Sections
- **Account:** Direct Deposit, Saved Recipients, App Preference (Theme, Notification).
- **Product:** Savings details & APY.
- **Security:** PIN & Authentication, Account limits, Device Management.
- **About:** Rates & Fees, Support & FAQ, Privacy Policy.

---

## 16. Referral Program

### 16.1 Overview
Every user receives a unique referral code. When shared and used, both parties earn **banq Points** rewards.

### 16.2 Reward Structure
- **Referrer:** Earns a **banq Points bonus** for each successful referral.
- **Referee:** Earns a **Welcome banq Points bonus** credited after completing their first transaction.

**"Successful referral" = referee signs up + completes KYC Tier 1 + makes first transaction.**

---

## 16.3 banq Points — Gamification System

Besidebanq rewards users with **banq Points** for every transaction. Points earned are proportional to the fee revenue Besidebanq generates from that transaction type — higher-margin transactions earn more points.

| Transaction Type | Fee Level | banq Points Tier |
|---|---|---|
| **BanqDrop (in-app P2P — fiat or stablecoin)** | Zero fee | ⭐ Micro (engagement reward only) |
| **Domestic Bank Transfer** | Flat low fee | ⭐ Low |
| **Bill Payments** | Small platform fee | ⭐⭐ Low–Medium |
| **Card Spend (Virtual or Physical)** | Interchange % | ⭐⭐ Medium |
| **eSIM Purchase** | Retail margin | ⭐⭐ Medium |
| **Gift Card Purchase** | Retail margin | ⭐⭐ Medium |
| **USD Savings (Active Balance)** | Spread income | ⭐ Low |
| **Swap (Currency Exchange)** | FX spread fee | ⭐⭐ Medium |
| **Stock / ETF Trade** | Commission % | ⭐⭐⭐ High |
| **Forecast Market** | Platform fee | ⭐⭐⭐ High |
| **International Stablecoin Transfer (On-Chain)** | FX spread + network fee | ⭐⭐⭐⭐ Highest |
| **China Fiat Payout** | Partner fee + FX spread | ⭐⭐⭐⭐ Highest |

> [!WARNING]
> **Commercial & Unit-Economics Review Required:**
> The transaction points tiers, earning thresholds, and reward redemption values documented above are provisional. Prior to implementation, a complete commercial and unit-economics review must be executed by the financial/operations team. This review will establish the exact mathematical formulas linking point values to Besidebanq’s transactional net profit margins to prevent points inflation and ensure sustainable program margins.

**Redemption:** banq Points can be redeemed for exclusive in-app perks, discounts on fees, and lifestyle rewards (e.g. eSIM data credit, reduced trading commissions).

---

## 17. Notifications

### 17.1 Notification Types
- **Transaction alert:** Money sent / received / failed.
- **BanqDrop received:** Another user sends a BanqDrop.
- **Buddy:** New proposal, vote result, or new member notification.
- **Trade & Forecast:** Order filled, position closed, settlement result.
- **Savings:** Daily interest credit alert.
- **KYC:** Step completed or verification failed.
- **Referral:** Referee completed qualifying action.
- **Euda suggestion:** AI-generated financial nudge.

---

## 18. In-App Support

### 18.1 Live Support Chat
- **Euda** handles common questions as an AI-first response layer.
- Escalation to human agent for complex issues.
- Full chat history preserved across sessions.

---

## 19. Third-Party API Integrations

To ensure flexibility and keep the PRD vendor-agnostic, third-party provider names are generalized to architectural roles.

| Feature | Provider Role | Notes |
|---|---|---|
| US Stocks & ETFs | Brokerage-as-a-Service Provider | Fractional shares; SEC compliance |
| Forecast Markets | Regulated Prediction Market API | REST + WebSocket; CFTC-regulated |
| eSIM | Global eSIM API Partner | 150+ countries; sandbox testing |
| Bill Payments | Bills Aggregator API | Domestic bills utility integration |
| Gift Cards | Gift Card Aggregator API | Global digital gift card catalog & delivery |
| KYC / BVN Verification | Local Identity Verification API | Domestic identity & registry checks |
| Liveness / ID Check | Biometric Liveness Verification API | 3D facial matching |
| Push Notifications | Cloud Messaging Service | iOS + Android push services |
| AI Agent & OCR | Foundation AI API Provider | Multimodal vision & natural language parsing |
| Stablecoin Payouts | Stablecoin Payout Gateway API | Auto-routing across Tron, Solana, Base, etc. |
| SMS OTP | SMS Gateway API | Domestic SMS OTP delivery |
| Email OTP | Transactional Email Service | 6-digit email verification OTP |
| Google Sign-In | Social Auth Provider SDK | OAuth 2.0 native flow |
| Credit Bureau | Credit Bureau Agency API | Credit building reporting |
| FX Rates | Real-time FX Data Provider | Mid-market exchange rate feed |

---

## 20. Security & Compliance

### 20.1 Authentication
- Transaction PIN (4 or 6 digits) required for all fund movements.
- Biometric authentication (Face ID / Fingerprint) option.
- 2FA via SMS/Email OTP for password reset, new device login, or large transactions.
- **Session Timeout & Quick Re-entry:** 
  - Standard inactive session timeout occurs after 5 minutes of background inactivity.
  - To log back in after timeout, the user is prompted for **Biometric Authentication (Face ID / Fingerprint)** or their **Transaction PIN** as a fallback. 
  - Full email/password credentials are only required if the user explicitly logs out or switches devices.

### 20.2 Device Management
- **Single Active Device Binding:** In strict compliance with central banking (CBN) mobile banking guidelines, an account can only be active on a **single primary mobile device** at any given time.
- **Automatic Deactivation Flow:** Logging in on a new device automatically revokes the session token, invalidates biometrics, and logs the user out of the previous device on the backend.
- **Device Swap Authorization:** Switching the primary bound device requires full 2FA verification (both Email and SMS OTP) and triggers immediate security email/push alerts.

> [!WARNING]
> **Regulatory Compliance Review Required (Single-Device Binding):**
> Device management architecture must be strictly reviewed by the compliance team to ensure it adheres to the CBN's "one active device" anti-fraud guidelines. Multi-device active logins are prohibited.

### 20.3 Account Limits
- Tiered transaction limits based on KYC completion level (Tier 1 to Tier 3).
- Users can view limits and submit increases in-app.

### 20.4 Data Security
- End-to-end encryption for all financial transactions.
- BVN stored hashed — never in plain text in database.
- Card details viewable only after PIN or biometric confirmation.
- PCI-DSS compliance for all card data handling.

### 20.5 Regulatory Compliance
- Compliant with central banking, securities exchange, and data protection guidelines per active jurisdiction (E.g. CBN, SEC, NDPR, GDPR).
- **Buddy Wallet Locking:** Compliance architecture to avoid unlicensed collective investment or banking classification.
- **Stablecoin compliance:** Adherence to cross-border transfer laws and AML monitoring.
- **Forecast Markets compliance:** Adherence to regulated infrastructure compliance rules.

### 20.6 Fraud Prevention
- Real-time transaction monitoring and velocity checks.
- Recipient confirmation screen before **BanqDrop** (name + avatar lookup).
- BVN mismatch: limited retries with count shown to user.
- Suspicious activity triggers automatic account locks.

---

## 21. Marketing Website Specifications

To present Besidebanq's unique value proposition effectively to the global African diaspora, the marketing website landing page supports a **Phase-Based Lifecycle Configuration** toggled via the CMS/admin console.

---

### 21.1 Pre-Launch Phase — Full Specification

The pre-launch page is a **standalone, dedicated experience** focused entirely on building excitement, capturing early adopters, and creating a viral loop before the app is publicly available.

#### Hero Section (Above the Fold)
* **Headline:** *"Helping you live a better life, globally."*
* **Sub-copy:** *"The financial super-app built for the global African community. BanqDrop money instantly, save in USD, invest, and let Euda manage your finances — coming soon."*
* **@tag Reservation Widget:** The primary conversion element. Visitors type their desired @tag handle, verify real-time availability, enter their email, and confirm via a **6-digit Email OTP**. On success, they see a personalized confirmation: *"@[handle] is yours. You're #[rank] on the waitlist!"*
  - **The Expiration Timer (Urgency Mechanic):** To drive conversion on launch day, waitlist members are warned: *"Your reserved @tag is guaranteed for **14 days** after launch. If the account is not activated in-app within this window, the handle will be released back to the public pool."*
  - **Marketing Opt-In Consent:** The widget features a visible disclaimer checkbox under the email input field: *"By claiming your @tag, you agree to receive product updates, announcement details, and marketing emails from Besidebanq. You can unsubscribe at any time."*
  - **Welcome & Confirmation Email:** Upon successful verification, the transactional email API instantly triggers a Welcome Email confirming their reserved @tag, their current waitlist position, and detailed product/marketing updates.

#### Social Proof Live Counter
* A real-time animating counter displaying: *"[X] people have already claimed their @tag"* — creating urgency and FOMO for new visitors.

#### Waitlist Rank & Referral Mini-Dashboard (Post-Signup)
After reserving their @tag, each user accesses a personal mini-dashboard showing:
* Their current waitlist rank position.
* Their unique shareable referral link.
* Number of friends referred so far.
* Number of positions moved up the queue through referrals.
* **Incentive:** *"Refer friends and earn bonus banq Points on launch day."* (Points only — no cash promises.)
* **Returning User Login (Check Position):** If a returning, already-registered user enters their email in the widget, they are prompted to verify a **6-digit Email OTP** to securely log back into their personal Mini-Dashboard to view their current rank, referral stats, and copy their link.

#### Feature Teaser Section (*"What's Coming"*)
Animated, visually rich feature preview cards:
* **BanqDrop:** *"Send money to any @tag, instantly. Free. Forever."*
* **Euda AI:** *"Your financial partner that actually gets you."*
* **Stablecoin Transfers:** *"From Accra to London to Shanghai in seconds."*
* **Buddy:** *"Pool funds. Vote democratically. Pay together."*

#### Founding Member Exclusive Benefits
A clearly highlighted section listing what waitlist members receive on launch day:
* Their reserved @tag guaranteed.
* Priority app download access.
* A **Founding Member banq Points bonus** credited to their wallet on launch day.
* A special **"Founding Member"** badge permanently displayed on their in-app profile.

#### Sticky Bottom CTA Bar
* A persistent sticky bar (on mobile and desktop) repeating the @tag reservation call-to-action so the visitor is never far from converting.

---

### 21.2 Post-Launch Phase (Active User Downloads)
* **Goal:** Drive direct app installations and active accounts.
* **Hero Section CTA:** The waitlist input is replaced by prominent **App Store (iOS) and Google Play (Android) download badges**, plus a **"Log In / Web Dashboard"** button in the navigation header.

---

### 21.3 Core Page Sections & Structure (Supporting Both Phases)

1. **The USP Hero Header:**
   * **Visual Asset:** High-resolution split screen showing premium mockups of Besidebanq physical/virtual cards, and the Euda AI chat layout on a mobile screen.
   * **Headline:** *"Helping you live a better life, globally."*
   * **Copy Strategy:** Human-centric value statement focusing on financial peace of mind, family support, and simplified borderless wealth building. Avoids dry tech specs at the landing page top.

2. **Audience Partitioning (Individuals vs. Businesses):**
   * Tabbed navigation dividing features by audience:
     * **For Individuals (Daily Life & Wealth):**
       - **BanqDrop (In-App P2P):** 
         * *Visual Asset:* Mockup of two phones transferring money via `@tag`. Phone B shows a toast: *"@amara just BanqDropped you 100 USDC! ⚡"*.
         * *Copy Strategy:* Highlight instant, zero-fee, P2P transfers in both fiat and stablecoins using just a `@tag` without memorizing bank numbers.
       - **USD Savings:** Highlighting yield-bearing savings to build wealth safely.
       - **eSIM Mobile Data:** Low-cost roaming packages in 150+ countries.
       - **Digital Gift Cards:** Global gifting of Apple, Amazon, or retail cards directly to loved ones.
     * **For Importers & Businesses (Trade & Operations):**
       - **International Payouts (Stablecoins & China Rails):**
         * *Visual Asset:* Split screen showing a UK importer paying in stablecoins, and a Chinese supplier in Guangzhou receiving CNY instantly on Alipay. Include a speed comparison table: *Besidebanq (Seconds, low fee) vs. Traditional Bank Wire (3-5 Days, high fees)*.
         * *Copy Strategy:* Emphasize the "Just-In-Time" currency conversion. Sellers receive native CNY or local currency directly in bank/Alipay accounts, while Besidebanq converts stablecoins behind the scenes.
       - **Buddy (Democratic Escrow):**
         * *Visual Asset:* Mockup of a business treasury pool with member icons, contribution percentages, and **YES/NO voting status buttons** showing a passed transaction.
         * *Copy Strategy:* Outline the security of the locked-wallet escrow model. No funds leave user wallets without a 100% unanimous contributor vote. Highlight saved payee groups and single-payout details.
       - **Fractional Stocks & ETFs:** Investing from $1 in global markets.

3. **Interactive Euda Chat Demo:**
   * **Visual Asset:** Click-to-chat preview widget simulating a conversation with **Euda**.
   * **Copy Strategy:** Explains Euda's origin from *Eudaimonia* (human flourishing). Demonstrates her warm, supportive AI personality (e.g. celebrating self-care rather than creating expense guilt).
   * **Simulator Script:**
     - *Visitor selects prompt:* *"I spent way too much money this weekend."*
     - *Euda Response:* *"Hey, don't sweat it! Spending on dinners and friends is an investment in your social health and self-care. Let's look at your target for the week and see if we can make a tiny $5 adjustment to keep you on track. You got this! 💙"*

4. **Interactive Euda OCR & Scan-to-Transfer Demo:**
   * **Visual Asset:** An interactive file upload playground widget on the landing page.
   * **The Simulation:** Visitors click one of three pre-loaded mock files (a WhatsApp chat screenshot with bank details, a handwritten note, or a supplier invoice). Euda highlights key parsed details (Bank Name, Account, Payee, Amount) with animated bounding boxes and fills out a mock transfer sheet instantly.

5. **Multi-Asset Fee & Speed Calculator:**
   * An interactive calculator where visitors select a source currency and destination to see transaction costs and estimated blockchain settlement speeds across the 8 supported networks.

6. **eSIM Destination & Price Preview Widget:**
   * A simple data plan search bar: *"Where are you traveling next?"* Tapping a country previews active bundles (e.g. *"1GB / 7 Days for $2.50"*).

7. **Gift Card Gifting Animation Preview:**
   * A visual preview showing the social gifting loop. Displays a recipient tapping a digital gift envelope that rips open in-app with a customized greeting note.

8. **Security & Trust Footer:**
   * Vendor-agnostic disclosures covering biometric security, end-to-end data encryption, PCI-DSS compliance, and generic regional regulatory compliance frameworks.

---

### 21.4 Dynamic Localization & Routing (Single Build Setup)

To deliver a personalized experience for the global diaspora without maintaining separate regional builds, the marketing website implements dynamic routing:

* **Corridor Landing Pages:** A single page template at `besidebanq.com/send/[source]-to-[destination]` dynamically adapts copy and currency defaults:
  - *Example (`/send/canada-to-nigeria`):* Headline swaps to *"Send money from Canada to Nigeria instantly."* The calculator defaults to **CAD to NGN**.
  - *Example (`/send/uk-to-china`):* Headline swaps to *"Pay Chinese suppliers directly from the UK."* The calculator defaults to **GBP to CNY** and highlights WeChat Pay/Alipay options.
* **Geo-IP Auto-Detection:** When visiting the root URL (`besidebanq.com`), the site checks the visitor's location via IP. It automatically pre-selects the local fiat currency (e.g., GBP for the UK, CAD for Canada) as the sender's default in the calculator widget to minimize user friction.

---

### 21.5 Sitemap & Site Navigation

* **Global Header:**
  - Logo (Gradient teardrop/play-button shape with a smiley face)
  - Products Dropdown (Move, Euda AI, Buddy)
  - Audience (For Individuals, For Business)
  - Resources (Help Center, APY Calculator)
  - **CTA Button:**
    - *Pre-Launch Phase:* "Claim your @tag" (opens waitlist modal)
    - *Post-Launch Phase:* "Log In / Web Dashboard" (links to web app) & "Download App"
* **Global Footer:**
  - **Sitemap Links:** Product, Company, Support, Legal (Terms of Service, Privacy Policy, Cookie Policy).
  - **Regulatory Disclosures:** Clear, vendor-agnostic disclaimers outlining licensing boundaries (e.g., *"Besidebanq is a financial technology platform, not a bank. Banking and brokerage services are provided by our licensed partner banks and brokerage providers."*).

---

### 21.6 Marketing Analytics, Tracking & SEO

* **Tracking Pixels & Analytics:**
  - Google Tag Manager (GTM), Meta (Facebook) Pixel, and TikTok Pixel script specifications.
  - **Custom Tracking Events:**
    - `Waitlist_Initiated`: Fired when a user types their desired @tag handle.
    - `Waitlist_Completed`: Fired upon successful Email OTP verification.
    - `Referral_Link_Copied`: Fired when a waitlist member copies their dashboard link.
    - `App_Download_Clicked`: Fired when a visitor taps the App Store or Google Play badges.
* **SEO Copywriting Keyword Clusters:**
  - Senders: *"send stablecoins from UK to Nigeria"*, *"pay Chinese suppliers via WeChat Pay"*, *"USDC stablecoin transfers"*.
  - Group: *"cooperative savings escrow wallet"*, *"escrow group budget app"*.
  - Lifestyle: *"cheap travel eSIM Africa"*, *"buy global gift cards online"*.

---

## Appendix A — Feature Priority Matrix

| Feature | Priority | Complexity | Launch Phase |
|---|---|---|---|
| Onboarding & KYC (Tiered) | 🔴 Critical | Medium | Phase 1 |
| Home Dashboard | 🔴 Critical | Medium | Phase 1 |
| Euda AI Agent (basic) | 🔴 Critical | High | Phase 1 |
| Multi-currency Accounts | 🔴 Critical | High | Phase 1 |
| BanqDrop (P2P Transfer) | 🔴 Critical | Low | Phase 1 |
| Cards (Virtual) | 🔴 Critical | Medium | Phase 1 |
| Savings | 🟠 High | Medium | Phase 1 |
| Bill Payments | 🟠 High | Low | Phase 1 |
| Referral Program | 🟠 High | Low | Phase 1 |
| International Transfers (Stablecoins) | 🟠 High | High | Phase 1 |
| Scan to Transfer (OCR) | 🟠 High | Medium | Phase 1 |
| Notifications | 🟠 High | Low | Phase 1 |
| Cards (Physical) | 🟡 Medium | Medium | Phase 2 |
| Stocks Trading | 🟡 Medium | Very High | Phase 2 |
| Forecast Markets | 🟡 Medium | High | Phase 2 |
| ETFs | 🟡 Medium | High | Phase 2 |
| Buddy | 🟡 Medium | High | Phase 2 |
| eSIM | 🟡 Medium | Medium | Phase 2 |
| banq Points | 🟡 Medium | Medium | Phase 2 |
| Euda AI Agent (advanced) | 🟢 Lower | Very High | Phase 3 |
| Credit Building | 🟢 Lower | High | Phase 3 |

---

*© 2026 Besidebanq Inc. — Internal Product Document. Confidential.*  
*This document is a living PRD and will be updated as decisions are finalised.*

import './globals.css';
import CookieConsent from '@/components/CookieConsent';
import SplashPreloader from '@/components/SplashPreloader';

export const metadata = {
  title: 'BesideBanq — Global Money Movement & Intelligent AI Finance',
  description: 'The financial super-app built for the global African community. BanqDrop money instantly with zero fees, save in USD, invest in stocks, and manage finances with Euda AI.',
  keywords: ['send stablecoins UK to Nigeria', 'pay Chinese suppliers Alipay', 'USDC stablecoin transfers', 'cooperative savings escrow wallet', 'cheap travel eSIM Africa'],
  authors: [{ name: 'BesideBanq Inc.' }],
  creator: 'BesideBanq',
  openGraph: {
    title: 'BesideBanq — Helping you live a better life, globally.',
    description: 'The financial super-app built for the global African community. Claim your @tag today.',
    url: 'https://besidebanq.com',
    siteName: 'BesideBanq',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BesideBanq — Global Money Movement & Intelligent AI Finance',
    description: 'The financial super-app built for the global African community.',
    creator: '@besidebanq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://besidebanq.com/#organization",
      "name": "BesideBanq",
      "url": "https://besidebanq.com",
      "logo": "https://besidebanq.com/logo.png",
      "description": "Helping people live a better life globally through borderless financial services.",
    },
    {
      "@type": "FinancialService",
      "name": "BesideBanq Global Remittance & Wallet",
      "serviceType": "Instant Send, USD Savings, Remittances",
      "provider": { "@id": "https://besidebanq.com/#organization" },
      "areaServed": ["Worldwide", "Canada", "United Kingdom", "Nigeria", "United States", "China"],
    },
    {
      "@type": "SoftwareApplication",
      "name": "BesideBanq App",
      "operatingSystem": "iOS, Android, Web",
      "applicationCategory": "FinanceApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SplashPreloader />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

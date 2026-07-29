import './globals.css';

export const metadata = {
  title: 'Besidebanq — Global Money Movement & Intelligent AI Finance',
  description: 'The financial super-app built for the global African community. BanqDrop money instantly with zero fees, save in USD, invest in stocks, and manage finances with Euda AI.',
  keywords: ['send stablecoins UK to Nigeria', 'pay Chinese suppliers Alipay', 'USDC stablecoin transfers', 'cooperative savings escrow wallet', 'cheap travel eSIM Africa'],
  authors: [{ name: 'Besidebanq Inc.' }],
  creator: 'Besidebanq',
  openGraph: {
    title: 'Besidebanq — Helping you live a better life, globally.',
    description: 'The financial super-app built for the global African community. Claim your @tag today.',
    url: 'https://besidebanq.com',
    siteName: 'Besidebanq',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Besidebanq — Global Money Movement & Intelligent AI Finance',
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://besidebanq.com/#organization",
      "name": "Besidebanq",
      "url": "https://besidebanq.com",
      "logo": "https://besidebanq.com/logo.png",
      "description": "Helping people live a better life globally through borderless financial services.",
    },
    {
      "@type": "FinancialService",
      "name": "Besidebanq Global Remittance & Wallet",
      "serviceType": "P2P Transfers, USD Savings, Stablecoin Remittances, Stock Trading",
      "provider": { "@id": "https://besidebanq.com/#organization" },
      "areaServed": ["Worldwide", "Canada", "United Kingdom", "Nigeria", "United States", "China"],
    },
    {
      "@type": "SoftwareApplication",
      "name": "Besidebanq App",
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
        {children}
      </body>
    </html>
  );
}

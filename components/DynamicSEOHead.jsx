'use client';

import React from 'react';

export default function DynamicSEOHead({ 
  title = "BesideBanq — Global Money Movement & Intelligent AI Finance",
  description = "The financial super-app built for the global African diaspora. Instant BanqDrop transfers, USD savings, and automated Euda AI financial management.",
  canonicalUrl = "https://besidebanq.com",
  ogImage = "https://besidebanq.com/og-banner.png"
}) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://besidebanq.com/#organization",
        "name": "BesideBanq",
        "url": "https://besidebanq.com",
        "logo": "https://besidebanq.com/logo.png",
        "description": "Helping people live a better life globally through borderless financial services.",
        "sameAs": [
          "https://twitter.com/besidebanq",
          "https://linkedin.com/company/besidebanq",
          "https://instagram.com/besidebanq"
        ]
      },
      {
        "@type": "FinancialService",
        "@id": "https://besidebanq.com/#service",
        "name": "BesideBanq Global Remittance & Wallet",
        "serviceType": "Instant Transfers, USD Savings, Remittances",
        "provider": {
          "@id": "https://besidebanq.com/#organization"
        },
        "areaServed": ["Worldwide", "Canada", "United Kingdom", "Nigeria", "United States", "China"],
        "description": "Instant zero-fee BanqDrop transfers, USD savings, and automated Euda AI financial management."
      },
      {
        "@type": "SoftwareApplication",
        "name": "BesideBanq App",
        "operatingSystem": "iOS, Android, Web",
        "applicationCategory": "FinanceApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </>
  );
}

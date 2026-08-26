import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="description" content="FUTA's Only Flame Grill — Real flame-grilled chicken, wings, kebabs + crispy sides. Earn Holy Points, climb the leaderboard, unlock rewards." />
        <meta name="theme-color" content="#FF4E2D" />
        <meta name="author" content="Holy Grills" />
        <meta name="keywords" content="Holy Grill, FUTA, flame grill, chicken, wings, kebabs, food delivery, student food, Holy Points, rewards, leaderboard" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon.svg" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Holy Grills" />
        <meta name="application-name" content="Holy Grills" />
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
        <link rel="icon" type="image/svg+xml" href="/data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23FF4E2D'/%3E%3Ctext x='50' y='70' font-size='60' text-anchor='middle' fill='white'%3E%F0%9F%94%A5%3C/text%3E%3C/svg%3E" />
        <link rel="canonical" href="https://holygrill.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Holy Grills" />
        <meta property="og:title" content="Holy Grills 🔥 — FUTA's Only Flame Grill" />
        <meta property="og:description" content="FUTA's Only Flame Grill — Real flame-grilled chicken, wings, kebabs + crispy sides. Earn Holy Points, climb the leaderboard, unlock rewards." />
        <meta property="og:url" content="https://holygrill.app/" />
        <meta property="og:image" content="/icons/icon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Holy Grills 🔥 — FUTA's Only Flame Grill" />
        <meta name="twitter:description" content="FUTA's Only Flame Grill — Real flame-grilled chicken, wings, kebabs + crispy sides. Earn Holy Points, climb the leaderboard, unlock rewards." />
        <meta name="twitter:image" content="/icons/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Holy Grills',
              description: "FUTA's Only Flame Grill — Real flame-grilled chicken, wings, kebabs + crispy sides. Earn Holy Points, climb the leaderboard, unlock rewards.",
              servesCuisine: ['Grill', 'Chicken', 'Fast Food'],
              priceRange: '₦',
              areaServed: 'FUTA',
              url: 'https://holygrill.app/',
              logo: 'https://holygrill.app/icons/icon.svg',
              image: 'https://holygrill.app/icons/icon.svg',
              acceptsReservations: 'False',
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

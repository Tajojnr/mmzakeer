import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mmzakeer.vercel.app'),
  title: 'M.M ZAKEER COMPUTER (00010) | Your Code, Your Identity, Your Success!',
  description:
    'Sales of UK Used & Brand-New Laptops, Desktops, Accessories & Upgrades. HP, Lenovo, Dell, Acer, Toshiba.',
  openGraph: {
    title: 'M.M ZAKEER COMPUTER (00010) | Your Code, Your Identity, Your Success!',
    description:
      'Sales of UK Used & Brand-New Laptops, Desktops, Accessories & Upgrades. Direct WhatsApp ordering.',
    siteName: 'M.M ZAKEER COMPUTER',
    images: [
      {
        url: '/images/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'M.M ZAKEER COMPUTER (00010) Banner',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.M ZAKEER COMPUTER (00010)',
    description:
      'Sales of UK Used & Brand-New Laptops, Desktops, Accessories & Upgrades.',
    images: ['/images/og-banner.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-zinc-100 antialiased font-sans selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
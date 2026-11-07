import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'M.M ZAKEER COMPUTER (00010) | Your Code, Your Identity, Your Success!',
  description: 'Sales of UK Used & Brand-New Laptops, Desktops, Accessories & Upgrades. HP, Lenovo, Dell, Acer, Toshiba.',
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
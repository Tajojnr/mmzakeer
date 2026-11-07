'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add a subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Workstation', href: '#workstation' },
    { name: 'Laptops', href: '#catalog' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'The 00010 Story', href: '#story' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 inset-x-0 z-[9999] px-4 pt-4 transition-all duration-300 pointer-events-none">
      <nav 
        className={`pointer-events-auto relative max-w-6xl mx-auto overflow-hidden rounded-full border border-white/10 bg-zinc-950/75 backdrop-blur-2xl transition-all duration-500 ${
          scrolled ? 'shadow-[0_20px_60px_rgba(16,185,129,0.12)] py-2 px-4' : 'py-3 px-6'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10" />
        <div className="relative flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex-shrink-0 cursor-pointer rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 py-1.5 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/10" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-zinc-300 hover:text-emerald-400 transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={generateWhatsAppLink("Hello M.M ZAKEER COMPUTER (00010), I would like to make an inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full border border-emerald-400/40 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(16,185,129,0.45)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/0 to-white/20 opacity-70" />
              <span className="relative z-10 flex items-center gap-2">
                Order Now <ShoppingCart size={16} />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-emerald-400 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-full left-4 right-4 mt-2 p-4 rounded-3xl border border-zinc-800/80 bg-zinc-950/95 backdrop-blur-2xl shadow-2xl shadow-emerald-900/20 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm font-medium text-zinc-300 hover:text-emerald-400 hover:bg-zinc-900 rounded-xl transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href={generateWhatsAppLink("Hello M.M ZAKEER COMPUTER, I'm reaching out from your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-emerald-600 text-white text-sm font-bold shadow-[0_0_15px_rgba(5,150,105,0.4)]"
            >
              Contact on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
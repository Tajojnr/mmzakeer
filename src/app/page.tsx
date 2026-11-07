'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  ShieldCheck,
  Zap,
  Cpu,
  Code,
  Target,
  Globe,
  ArrowRight,
  Star,
  MessageCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import CinematicScroll from '@/components/CinematicScroll';
import SetupCalculator from '@/components/SetupCalculator';
import { laptops, smartphones } from '@/data/products';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'laptops' | 'smartphones'>('laptops');
  const [activeBrand, setActiveBrand] = useState<string>('All');

  const products = activeTab === 'laptops' ? laptops : smartphones;
  const brands = ['All', ...Array.from(new Set(products.map((p) => p.category)))];
  const filteredProducts =
    activeBrand === 'All' ? products : products.filter((p) => p.category === activeBrand);

  const trustStats = [
    { value: '500+', label: 'Systems delivered' },
    { value: 'Same day', label: 'WhatsApp response' },
    { value: '100%', label: 'Quality-checked devices' },
  ];

  const valueHighlights = [
    {
      icon: <ShieldCheck size={20} />,
      title: 'Quality guarantee',
      text: 'Every device is inspected, performance-tested, and ready for real-world use.',
    },
    {
      icon: <Cpu size={20} />,
      title: 'Custom upgrades',
      text: 'Need more RAM, a bigger SSD, or an optimized workstation? We build around you.',
    },
    {
      icon: <Zap size={20} />,
      title: 'Fast support',
      text: 'Get swift recommendations and real guidance from a team that understands productivity.',
    },
  ];

  const steps = [
    'Tell us what you need',
    'We recommend the right setup',
    'Receive a fast WhatsApp confirmation',
  ];

  const testimonials = [
    {
      name: 'Ada O.',
      role: 'Remote designer',
      quote:
        'The team understood exactly what I needed for a clean, high-speed workflow. Super smooth and professional.',
    },
    {
      name: 'Daniel K.',
      role: 'Startup founder',
      quote:
        'I bought a workstation bundle and the setup was fast, honest, and tailored to my work style.',
    },
    {
      name: 'Seyi A.',
      role: 'Content creator',
      quote:
        'They helped me choose the right balance of power and value. It felt premium from start to finish.',
    },
  ];

  const stats = [
    { value: '4.9/5', label: 'Customer satisfaction' },
    { value: '24–48h', label: 'Typical response time' },
    { value: '1-on-1', label: 'Setup guidance' },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed top-[-10%] left-[-10%] z-0 h-[40vw] w-[40vw] rounded-full bg-emerald-900/20 blur-[120px]" />
      <div className="pointer-events-none fixed right-[-10%] bottom-[-10%] z-0 h-[30vw] w-[30vw] rounded-full bg-emerald-700/10 blur-[100px]" />
      <div className="pointer-events-none fixed top-1/2 left-1/2 z-0 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.03] blur-[140px]" />

      <Navbar />

      {/* Hero */}
      <section id="hero" className="relative z-10">
        <CinematicScroll />
      </section>

      {/* Trust bar */}
      <section className="relative z-10 px-4 pb-8 pt-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {trustStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_30px_rgba(16,185,129,0.06)] backdrop-blur-sm"
              >
                <div className="text-2xl font-black tracking-tight text-emerald-400">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-zinc-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story — 00010 */}
      <section
        id="story"
        className="relative z-10 border-t border-zinc-900/80 bg-zinc-950/80 px-4 py-24 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
              The 00010 Difference
            </div>
            <h2 className="mb-4 bg-gradient-to-r from-white via-zinc-300 to-emerald-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
              The Meaning of 00010
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              More than a brand number. It is the code that defines our identity and drives your
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: <Code size={28} />,
                code: '000',
                title: 'Foundation & Progress',
                text: 'Zero represents infinite potential and the foundation of binary logic. We build your tech setup from the ground up, ensuring limitless progress.',
              },
              {
                icon: <Target size={28} />,
                code: '1',
                title: 'Leadership & Innovation',
                text: 'One stands for leadership. We provide premium, high-performance systems (UK Used & Brand New) to keep you ahead of the curve.',
              },
              {
                icon: <Globe size={28} />,
                code: '0',
                title: 'Unlimited Possibilities',
                text: 'The final zero symbolizes a complete circle. Comprehensive computer support, upgrades, and accessories — a full ecosystem for your success.',
              },
            ].map((card) => (
              <motion.div
                key={card.code}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 shadow-[0_20px_60px_rgba(16,185,129,0.08)] transition-colors hover:border-emerald-500/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  {card.icon}
                </div>
                <h3 className="mb-2 text-3xl font-bold tracking-tight text-white">{card.code}</h3>
                <h4 className="mb-3 font-semibold text-emerald-400">{card.title}</h4>
                <p className="text-sm leading-relaxed text-zinc-400">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workstation spotlight */}
      <section
        id="workstation"
        className="relative z-10 border-t border-zinc-900 bg-zinc-950 px-4 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="group relative w-full md:w-1/2">
              <div className="absolute inset-0 rounded-[2rem] bg-emerald-500 opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
              <div className="absolute -inset-4 rounded-[2.2rem] border border-emerald-500/20" />
              
              {/* Studio Background for Transparent PNG */}
              <div className="relative z-10 flex items-center justify-center overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/60 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15),_transparent_70%)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <Image
                  unoptimized
                  src="/images/products/starter-setup.png"
                  alt="00010 Workstation Setup"
                  width={800}
                  height={600}
                  className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute top-4 right-4 z-20 rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-md">
                Base Starts @ ₦350,000
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Premium workstation
              </div>
              <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
                The 00010 Professional Workstation
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-400">
                Whether you are coding the next big app or editing high-res videos, our complete
                workstation bundles offer unmatched value. Hand-picked HP, Dell, and Lenovo systems
                paired with essential productivity accessories.
              </p>

              <div className="mb-8 space-y-4">
                {valueHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-sm text-zinc-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8 flex flex-wrap gap-3">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs text-zinc-300"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 font-bold text-emerald-400">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>

              <a
                href={generateWhatsAppLink(
                  'Hello M.M ZAKEER COMPUTER (00010), I want the Professional Workstation starting from ₦350,000. Please advise available options.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-zinc-950 shadow-[0_0_24px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400"
              >
                <MessageCircle size={18} />
                Order Workstation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why buyers choose us */}
      <section className="relative z-10 border-t border-zinc-900 bg-zinc-950 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Why buyers choose us
            </div>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Smart buying, premium support.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm"
              >
                <div className="text-3xl font-black text-emerald-400">{stat.value}</div>
                <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup calculator */}
      <section
        id="calculator"
        className="relative z-10 border-t border-zinc-900 bg-zinc-900/40 px-4 py-24"
      >
        <SetupCalculator />
      </section>

      {/* Catalog */}
      <section id="catalog" className="relative z-10 bg-zinc-950 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Premium inventory
            </div>
            <h2 className="mb-4 bg-gradient-to-r from-white via-zinc-300 to-emerald-400 bg-clip-text text-4xl font-bold text-transparent">
              M.M ZAKEER Inventory
            </h2>
            <p className="text-zinc-400">Explore our premium selection of devices.</p>
          </div>

          {/* Category tabs */}
          <div className="mb-10 flex justify-center gap-3">
            {(['laptops', 'smartphones'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveBrand('All');
                }}
                className={`rounded-full px-8 py-3 font-medium capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)]'
                    : 'border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Brand filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`rounded-full px-5 py-2 text-sm transition-all duration-300 ${
                  activeBrand === brand
                    ? 'border border-emerald-500/30 bg-zinc-800 text-emerald-400'
                    : 'border border-zinc-800/50 bg-zinc-900/50 text-zinc-500 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-emerald-500/40"
              >
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.18),_transparent_55%)] p-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  <span
                    className={`absolute top-4 left-4 z-20 rounded-full px-3 py-1 text-xs font-bold ${
                      product.condition === 'Brand New'
                        ? 'border border-emerald-500/20 bg-emerald-500/20 text-emerald-400'
                        : 'border border-zinc-600 bg-zinc-700/50 text-zinc-300'
                    }`}
                  >
                    {product.condition}
                  </span>
                  <Image
                    unoptimized
                    src={product.image}
                    alt={product.name}
                    fill
                    className="z-0 object-contain p-8 drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="relative z-20 p-6">
                  <div className="mb-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                    {product.category}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{product.name}</h3>
                  <div className="mb-4 text-2xl font-light text-zinc-300">
                    ₦{product.price.toLocaleString()}
                  </div>

                  <ul className="mb-6 space-y-2">
                    {product.specs.slice(0, 3).map((spec, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-zinc-500 before:mr-2 before:text-emerald-500 before:content-['•']"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={generateWhatsAppLink(
                      `Hello M.M ZAKEER COMPUTER (00010), I'm interested in the ${product.name} (${product.condition}) priced at ₦${product.price.toLocaleString()}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 font-medium text-zinc-950 shadow-[0_12px_30px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <ShoppingCart size={18} />
                    Buy via WhatsApp
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="py-16 text-center text-zinc-500">No products in this filter yet.</p>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 border-t border-zinc-900 bg-zinc-950 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Customer feedback
            </div>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              People come back for the experience.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex gap-1 text-emerald-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <p className="leading-relaxed text-zinc-300">“{item.quote}”</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-sm text-zinc-500">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950 px-4 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
              <Star size={12} className="fill-current" />
              Trusted by digital teams
            </div>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-white">
              M.M ZAKEER COMPUTER <span className="text-emerald-500">00010</span>
            </h3>
            <p className="text-sm text-zinc-500">Your Code, Your Identity, Your Success.</p>
          </div>
          <div className="flex flex-col items-center text-sm text-zinc-500 md:items-end">
            <a
              href={generateWhatsAppLink('Hello M.M ZAKEER COMPUTER (00010), I have an inquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-400 hover:text-emerald-300"
            >
              Call / WhatsApp: 07063007700
            </a>
            <p className="mt-2">© 2026 M.M ZAKEER COMPUTER. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
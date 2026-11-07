'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CALCULATOR_ITEMS } from '@/data/products';
import { getSetupCalculatorUrl } from '@/utils/whatsapp';
import { Check, Sliders, Monitor, MessageSquare } from 'lucide-react';

export default function SetupCalculator() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedItems = CALCULATOR_ITEMS.filter((item) => selected.has(item.id));
  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const categories = Array.from(new Set(CALCULATOR_ITEMS.map((i) => i.category)));

  const categoryIcon = (cat: string) => {
    switch (cat) {
      case 'Laptop': return <Monitor size={18} />;
      case 'Monitor': return <Monitor size={18} />;
      default: return <Sliders size={18} />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
          Setup Calculator
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Pick your components. See your total in real time. Order everything via WhatsApp in one tap.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Item Selection */}
        <div className="lg:col-span-2 space-y-8">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-emerald-400 mb-4">
                {categoryIcon(cat)} {cat}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CALCULATOR_ITEMS.filter((i) => i.category === cat).map((item) => {
                  const isSelected = selected.has(item.id);
                  return (
                    <motion.button
                      key={item.id}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => toggle(item.id)}
                      className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 ${
                        isSelected
                          ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_15px_rgba(5,150,105,0.15)]'
                          : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all ${
                            isSelected
                              ? 'bg-emerald-500 border-emerald-500 text-white'
                              : 'border-zinc-700 bg-zinc-800'
                          }`}
                        >
                          {isSelected && <Check size={14} />}
                        </div>
                        <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-zinc-400'}`}>
                          {item.name}
                        </span>
                      </div>
                      <span className={`text-sm font-semibold whitespace-nowrap ${isSelected ? 'text-emerald-400' : 'text-zinc-500'}`}>
                        ₦{item.price.toLocaleString()}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4">Your Setup</h3>

            {selectedItems.length === 0 ? (
              <p className="text-zinc-500 text-sm mb-6">Select items from the left to build your setup.</p>
            ) : (
              <ul className="space-y-3 mb-6 max-h-72 overflow-y-auto pr-2">
                {selectedItems.map((item) => (
                  <li key={item.id} className="flex justify-between text-sm">
                    <span className="text-zinc-300">{item.name}</span>
                    <span className="text-zinc-500">₦{item.price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="border-t border-zinc-800 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 font-medium">Total</span>
                <span className="text-3xl font-bold text-emerald-400">
                  ₦{total.toLocaleString()}
                </span>
              </div>
            </div>

            <a
              href={selectedItems.length > 0 ? getSetupCalculatorUrl(selectedItems, total) : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                selectedItems.length > 0
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(5,150,105,0.3)] cursor-pointer'
                  : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
              }`}
            >
              <MessageSquare size={18} />
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
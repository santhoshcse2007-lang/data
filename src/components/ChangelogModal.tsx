import React from 'react';
import { X, Sparkles, Zap, Shield, Globe, Cpu } from 'lucide-react';

interface ChangelogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChangelogModal: React.FC<ChangelogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const updates = [
    {
      icon: Zap,
      title: 'Sub-Second Availability Sync',
      desc: 'Real-time two-way synchronization across premier private boutique collections with zero double-booking risk.',
    },
    {
      icon: Cpu,
      title: 'Intelligent Stay Matching Engine',
      desc: 'Context-aware architectural curation tailored to exact lighting, aesthetic, and privacy desires.',
    },
    {
      icon: Shield,
      title: 'Direct Cryptographic Escrow & Host Guarantee',
      desc: 'Zero hidden fees with automated refund guarantees and verified property inspections.',
    },
    {
      icon: Globe,
      title: 'Global 24/7 Multi-Lingual Concierge',
      desc: 'Instant human concierge dispatch across 38 time zones and regional dialects.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#150f26] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close changelog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7b39fc]/20 border border-[#7b39fc]/40 text-purple-300 text-xs font-cabin font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#7b39fc]" />
          <span>Release Highlights</span>
        </div>

        <h2 className="font-instrument text-3xl sm:text-4xl text-white mb-2">
          Say Hello to Datacore v3.2
        </h2>
        <p className="font-inter text-sm text-white/70 mb-6">
          The next evolution in high-touch, instant luxury accommodation discovery.
        </p>

        <div className="space-y-4">
          {updates.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#2b2344]/50 border border-white/10 flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#7b39fc]/20 border border-[#7b39fc]/30 flex items-center justify-center shrink-0 text-[#7b39fc] mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-manrope font-semibold text-sm text-white mb-0.5">
                    {item.title}
                  </div>
                  <div className="font-inter text-xs text-white/70 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#7b39fc] hover:bg-[#8c4dff] rounded-lg font-cabin font-medium text-sm text-white transition-colors"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

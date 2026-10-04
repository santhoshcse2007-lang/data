import React from 'react';
import { X, Star, CheckCircle, Quote } from 'lucide-react';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const reviews = [
    {
      author: 'Sophia Kensington',
      role: 'Private Equity Director, London',
      stay: 'Villa Terrazza Costiera, Amalfi Coast',
      rating: 5,
      date: 'September 2026',
      content:
        'Datacore delivered exactly what was promised: frictionless, instantaneous reservation with zero phone tag. The private villa chef and sunrise boat charter were ready the second our helicopter touched down.',
    },
    {
      author: 'Marcus Vance',
      role: 'Architect & Design Principal, Zurich',
      stay: 'Komorebi Cedar Villa, Kyoto',
      rating: 5,
      date: 'August 2026',
      content:
        'The curation standard is world class. Every property in their catalog has unmistakable architectural character and authentic Japanese tea craftsmanship. No generic tourist hotels here.',
    },
    {
      author: 'Aria Chen-Reynolds',
      role: 'Tech Founder & Angel Investor, San Francisco',
      stay: 'The St. Moritz Crest Chalet, Switzerland',
      rating: 5,
      date: 'July 2026',
      content:
        'Having 24/7 dedicated human concierge with zero lag transformed our family retreat. Datacore booked our private ski guides in under 90 seconds. Truly unmatched speed.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#150f26] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-white max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close reviews"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-cabin font-bold text-white text-sm">4.98 / 5.0 Average</span>
        </div>

        <h2 className="font-instrument text-3xl sm:text-4xl text-white mb-2">
          Verified Guest Reviews
        </h2>
        <p className="font-inter text-sm text-white/70 mb-6">
          Authentic feedback from discerning travelers who booked stays through Datacore.
        </p>

        <div className="space-y-4">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#2b2344]/50 border border-white/10 relative"
            >
              <Quote className="w-6 h-6 text-[#7b39fc]/30 absolute top-4 right-4" />
              <div className="flex items-center gap-2 mb-2">
                <span className="font-manrope font-semibold text-white text-sm">
                  {rev.author}
                </span>
                <span className="text-white/40 text-xs">·</span>
                <span className="text-xs text-white/60 font-inter">{rev.role}</span>
              </div>
              <div className="text-xs text-purple-300 font-medium mb-3">
                {rev.stay} · <span className="text-white/40">{rev.date}</span>
              </div>
              <p className="font-inter text-sm text-white/80 leading-relaxed">
                "{rev.content}"
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Stay Reservation</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

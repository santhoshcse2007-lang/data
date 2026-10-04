import React, { useState } from 'react';
import { X, Mail, Phone, Clock, MessageSquare, CheckCircle2, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#150f26] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close contact"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#7b39fc]/20 border border-[#7b39fc] flex items-center justify-center mx-auto mb-4 text-[#7b39fc]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-instrument text-3xl text-white mb-2">
              Concierge Dispatched
            </h3>
            <p className="font-inter text-sm text-white/70">
              Your inquiry has been routed to our senior travel desk. An advisor will respond within 5 minutes.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="font-instrument text-3xl sm:text-4xl text-white mb-2">
              24/7 Dedicated Concierge
            </h2>
            <p className="font-inter text-sm text-white/70 mb-6">
              Need assistance with customized itineraries, private charters, or bespoke stay preferences?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs font-inter">
              <div className="p-3 rounded-lg bg-[#2b2344]/60 border border-white/10 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#7b39fc]" />
                <div>
                  <div className="font-medium text-white">Response Time</div>
                  <div className="text-white/60">&lt; 3 minutes average</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#2b2344]/60 border border-white/10 flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-300" />
                <div>
                  <div className="font-medium text-white">Direct VIP Line</div>
                  <div className="text-white/60">+1 (800) 592-STAY</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-manrope font-semibold text-white/80 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#2b2344]/70 border border-white/15 rounded-lg py-2.5 px-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7b39fc]"
                />
              </div>

              <div>
                <label className="block text-xs font-manrope font-semibold text-white/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="vip@traveler.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#2b2344]/70 border border-white/15 rounded-lg py-2.5 px-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7b39fc]"
                />
              </div>

              <div>
                <label className="block text-xs font-manrope font-semibold text-white/80 mb-1">
                  Message / Special Request
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="I'm planning a 7-night retreat in Kyoto with private onsen requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#2b2344]/70 border border-white/15 rounded-lg py-2.5 px-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7b39fc]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#7b39fc] hover:bg-[#8c4dff] rounded-xl font-cabin font-medium text-[15px] text-white shadow-lg shadow-[#7b39fc]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send to Concierge</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Lock, Mail, User, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'signin' | 'register';
  onClose: () => void;
  onSuccess: (name: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'signin' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync mode when initialMode prop changes
  React.useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const displayName = mode === 'register' ? (name || 'Traveler') : (email.split('@')[0] || 'Alex');
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(displayName);
      onClose();
      setSubmitted(false);
    }, 700);
  };

  const handleQuickDemo = (demoName: string, demoEmail: string) => {
    setName(demoName);
    setEmail(demoEmail);
    setPassword('demo-luxury-stay-2026');
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(demoName);
      onClose();
      setSubmitted(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#150f26] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[#7b39fc]/20 border border-[#7b39fc] flex items-center justify-center mx-auto mb-4 text-[#7b39fc]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-instrument text-2xl text-white mb-2">
              Welcome to Datacore
            </h3>
            <p className="font-inter text-sm text-white/70">
              Personalizing your luxury stay concierge...
            </p>
          </div>
        ) : (
          <div>
            {/* Header Tabs */}
            <div className="flex border-b border-white/10 pb-4 mb-6">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`flex-1 text-center pb-2 font-manrope font-semibold text-sm transition-colors relative ${
                  mode === 'signin' ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
              >
                Sign In
                {mode === 'signin' && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-[#7b39fc]" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setMode('register')}
                className={`flex-1 text-center pb-2 font-manrope font-semibold text-sm transition-colors relative ${
                  mode === 'register' ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
              >
                Create Account
                {mode === 'register' && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-[#7b39fc]" />
                )}
              </button>
            </div>

            <h2 className="font-instrument text-3xl text-white mb-1.5">
              {mode === 'signin' ? 'Access Your Stays' : 'Join Exclusive Membership'}
            </h2>
            <p className="font-inter text-xs text-white/60 mb-6">
              Unlock negotiated rates, complimentary upgrades, and instant 24/7 concierge.
            </p>

            {/* Quick Demo Access */}
            <div className="mb-5 p-3 rounded-xl bg-[#2b2344]/50 border border-white/10">
              <div className="text-[11px] font-manrope font-medium text-purple-200 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#7b39fc]" />
                <span>Instant 1-Click Demo Profiles</span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickDemo('Elena Vance', 'elena.v@luxury.io')}
                  className="flex-1 py-1.5 px-2 bg-white/10 hover:bg-[#7b39fc]/30 rounded-lg text-xs font-manrope text-white transition-colors text-center border border-white/10"
                >
                  Elena (VIP Host)
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemo('Julian Thorne', 'j.thorne@datacore.travel')}
                  className="flex-1 py-1.5 px-2 bg-white/10 hover:bg-[#7b39fc]/30 rounded-lg text-xs font-manrope text-white transition-colors text-center border border-white/10"
                >
                  Julian (Executive)
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-manrope font-semibold text-white/80 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-white/50" />
                    <input
                      type="text"
                      required
                      placeholder="Lord Harrison Sterling"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#2b2344]/70 border border-white/15 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7b39fc]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-manrope font-semibold text-white/80 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-white/50" />
                  <input
                    type="email"
                    required
                    placeholder="vip@traveler.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#2b2344]/70 border border-white/15 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7b39fc]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-manrope font-semibold text-white/80 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-3 text-white/50" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#2b2344]/70 border border-white/15 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7b39fc]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#7b39fc] hover:bg-[#8c4dff] rounded-xl font-cabin font-medium text-[15px] text-white shadow-lg shadow-[#7b39fc]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{mode === 'signin' ? 'Sign In Securely' : 'Create Free Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

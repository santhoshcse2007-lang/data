import React, { useState } from 'react';
import { ChevronDown, Menu, X, Sparkles, Building2, Palmtree, Hotel, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenSignIn: () => void;
  onOpenGetStarted: () => void;
  onOpenReviews: () => void;
  onOpenContact: () => void;
  user: string | null;
  onSignOut: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSignIn,
  onOpenGetStarted,
  onOpenReviews,
  onOpenContact,
  user,
  onSignOut,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const services = [
    {
      title: 'Luxury Villas & Estates',
      desc: 'Private residences with dedicated butler and private chef',
      icon: Palmtree,
    },
    {
      title: 'Boutique Heritage Hotels',
      desc: 'Iconic architectural stays in historic city centers',
      icon: Hotel,
    },
    {
      title: 'Penthouse City Suites',
      desc: 'Panoramic skyline views in prime metropolitan locations',
      icon: Building2,
    },
    {
      title: 'Alpine & Eco Retreats',
      desc: 'Exclusive mountain chalets and sustainable nature lodges',
      icon: Compass,
    },
  ];

  return (
    <header className="relative z-20 w-full bg-transparent px-6 lg:px-[120px] py-[16px] transition-all">
      <div className="flex items-center justify-between mx-auto max-w-[1440px]">
        {/* Brand / Logo (Left) */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b39fc] rounded-lg"
            aria-label="Datacore Home"
          >
            {/* Future Logo Shape */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 shrink-0 drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)] transition-transform duration-300 group-hover:scale-105"
            >
              {/* Path requested: M1.04356 6.35771L13.6437 0.666504... */}
              <path
                d="M1.04356 6.35771L13.6437 0.666504L26.2438 6.35771L13.6437 12.0489L1.04356 6.35771Z"
                fill="white"
              />
              <path
                d="M1.04356 7.6L13.6437 13.2912V26.4335L1.04356 20.7423V7.6Z"
                fill="white"
                fillOpacity="0.85"
              />
              <path
                d="M14.6437 13.2912L26.2438 7.6V20.7423L14.6437 26.4335V13.2912Z"
                fill="white"
                fillOpacity="0.7"
              />
            </svg>
            <span className="font-manrope font-bold text-[18px] tracking-tight text-white group-hover:text-white/95">
              Datacore
            </span>
          </a>

          {/* Navigation Links (Center-Left, Desktop Only) */}
          <nav className="hidden md:flex items-center gap-7">
            <a
              href="#home"
              className="font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity"
            >
              Home
            </a>

            {/* Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1 font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity focus:outline-none"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 rounded-xl bg-[#140e26]/95 backdrop-blur-xl border border-white/10 p-3 shadow-2xl shadow-black/60 z-30 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-manrope font-semibold text-white/50 uppercase tracking-wider px-3 py-1.5">
                    Curated Stay Collections
                  </div>
                  <div className="space-y-1">
                    {services.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onOpenGetStarted();
                          }}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/10 cursor-pointer transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md bg-[#7b39fc]/20 border border-[#7b39fc]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#7b39fc] transition-colors">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-manrope font-medium text-[13px] text-white group-hover:text-purple-200">
                              {item.title}
                            </div>
                            <div className="font-inter text-[11px] text-white/60 line-clamp-1">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={onOpenReviews}
              className="font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity"
            >
              Reviews
            </button>

            <button
              type="button"
              onClick={onOpenContact}
              className="font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity"
            >
              Contact us
            </button>
          </nav>
        </div>

        {/* Action Buttons (Right, Desktop Only) */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="font-manrope text-[14px] text-white/80">
                Hi, <span className="font-semibold text-white">{user}</span>
              </span>
              <button
                type="button"
                onClick={onSignOut}
                className="bg-white/10 hover:bg-white/15 text-white rounded-[8px] font-manrope font-semibold text-[13px] px-3.5 py-2 transition-colors border border-white/10"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              {/* Sign In Button */}
              <button
                type="button"
                onClick={onOpenSignIn}
                className="bg-white border border-[#d4d4d4] rounded-[8px] text-[#171717] font-manrope font-semibold text-[14px] px-4 py-2 hover:bg-neutral-100 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                Sign In
              </button>

              {/* Get Started Button */}
              <button
                type="button"
                onClick={onOpenGetStarted}
                className="bg-[#7b39fc] hover:bg-[#8b4cfc] rounded-[8px] text-[#fafafa] font-manrope font-semibold text-[14px] px-4 py-2 transition-all shadow-md shadow-[#7b39fc]/30 hover:shadow-[#7b39fc]/50 cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                Get Started
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-white hover:text-white/80 focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Full-Screen Black Overlay Menu for Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex flex-col p-6 animate-in fade-in duration-200">
          {/* Header row in mobile overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.04356 6.35771L13.6437 0.666504L26.2438 6.35771L13.6437 12.0489L1.04356 6.35771Z"
                  fill="white"
                />
                <path
                  d="M1.04356 7.6L13.6437 13.2912V26.4335L1.04356 20.7423V7.6Z"
                  fill="white"
                  fillOpacity="0.85"
                />
                <path
                  d="M14.6437 13.2912L26.2438 7.6V20.7423L14.6437 26.4335V13.2912Z"
                  fill="white"
                  fillOpacity="0.7"
                />
              </svg>
              <span className="font-manrope font-bold text-[18px] text-white">
                Datacore
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-white/70"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 py-8 text-left">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="font-manrope font-medium text-[20px] text-white hover:text-[#7b39fc] transition-colors"
            >
              Home
            </a>
            <div className="flex flex-col gap-3">
              <span className="font-manrope font-medium text-[20px] text-white flex items-center justify-between">
                Services
              </span>
              <div className="pl-4 flex flex-col gap-2.5 border-l border-white/10 text-white/70 text-sm font-manrope">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGetStarted();
                  }}
                  className="text-left py-1 hover:text-white"
                >
                  Luxury Villas & Estates
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGetStarted();
                  }}
                  className="text-left py-1 hover:text-white"
                >
                  Boutique Heritage Hotels
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGetStarted();
                  }}
                  className="text-left py-1 hover:text-white"
                >
                  Penthouse City Suites
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReviews();
              }}
              className="text-left font-manrope font-medium text-[20px] text-white hover:text-[#7b39fc] transition-colors"
            >
              Reviews
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-left font-manrope font-medium text-[20px] text-white hover:text-[#7b39fc] transition-colors"
            >
              Contact us
            </button>
          </div>

          {/* Action Buttons in Mobile Menu */}
          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-white/10">
            {user ? (
              <button
                type="button"
                onClick={() => {
                  onSignOut();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-white/10 text-white py-3 rounded-[8px] font-manrope font-semibold text-[15px]"
              >
                Sign Out ({user})
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSignIn();
                  }}
                  className="w-full bg-white border border-[#d4d4d4] rounded-[8px] text-[#171717] font-manrope font-semibold text-[15px] py-3 text-center"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGetStarted();
                  }}
                  className="w-full bg-[#7b39fc] rounded-[8px] text-[#fafafa] font-manrope font-semibold text-[15px] py-3 text-center shadow-lg shadow-[#7b39fc]/30"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

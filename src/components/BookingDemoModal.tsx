import React, { useState } from 'react';
import { X, Calendar, MapPin, Users, CheckCircle2, Sparkles, BedDouble, Shield, ArrowRight } from 'lucide-react';

interface BookingDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingDemoModal: React.FC<BookingDemoModalProps> = ({ isOpen, onClose }) => {
  const [destination, setDestination] = useState('Kyoto, Japan');
  const [checkIn, setCheckIn] = useState('2026-10-14');
  const [checkOut, setCheckOut] = useState('2026-10-19');
  const [guests, setGuests] = useState('2 Adults');
  const [selectedStay, setSelectedStay] = useState(0);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const stays = [
    {
      name: 'Komorebi Cedar Villa',
      location: 'Kyoto, Japan',
      price: '$480',
      period: '/ night',
      rating: '4.99',
      features: 'Private Onsen · Forest Views · Tea Master Service',
    },
    {
      name: 'Villa Terrazza Costiera',
      location: 'Amalfi Coast, Italy',
      price: '$620',
      period: '/ night',
      rating: '4.97',
      features: 'Infinity Pool · Cliffside Balcony · Private Chef',
    },
    {
      name: 'The St. Moritz Crest Chalet',
      location: 'Engadin Valley, Switzerland',
      price: '$890',
      period: '/ night',
      rating: '5.0',
      features: 'Ski-in Ski-out · Alpine Spa · Helipad Access',
    },
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#150f26] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#7b39fc]/20 border border-[#7b39fc] flex items-center justify-center mx-auto mb-5 text-[#7b39fc]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-instrument text-3xl sm:text-4xl text-white mb-3">
              Demo Stay Reserved!
            </h3>
            <p className="font-inter text-white/70 max-w-md mx-auto mb-6 text-sm">
              Your test reservation for <strong className="text-white">{stays[selectedStay].name}</strong> in{' '}
              {destination} has been verified by Datacore’s 0-second reservation protocol.
            </p>
            <div className="bg-[#2b2344]/60 border border-white/10 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5 mb-6">
              <div className="flex justify-between text-white/80">
                <span>Confirmation ID:</span>
                <span className="font-mono text-purple-300">DC-2026-9814</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Dates:</span>
                <span className="font-medium text-white">{checkIn} to {checkOut}</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Guests:</span>
                <span className="font-medium text-white">{guests}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsBooked(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#7b39fc] hover:bg-[#8c4dff] rounded-lg font-cabin font-medium text-white transition-colors"
            >
              Done Testing
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#7b39fc] text-xs font-cabin font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Instant Booking Simulation</span>
            </div>
            <h2 className="font-instrument text-3xl sm:text-4xl text-white mb-2">
              Book a Free Demo Stay
            </h2>
            <p className="font-inter text-sm text-white/70 mb-6">
              Experience the instant booking flow with zero lag, clear pricing, and handpicked boutique accommodations.
            </p>

            <form onSubmit={handleConfirm} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-manrope font-semibold text-white/80 mb-1.5">
                    Destination
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-3 text-white/50" />
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-[#2b2344]/70 border border-white/15 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-[#7b39fc]"
                    >
                      <option value="Kyoto, Japan">Kyoto, Japan</option>
                      <option value="Amalfi Coast, Italy">Amalfi Coast, Italy</option>
                      <option value="St. Moritz, Switzerland">St. Moritz, Switzerland</option>
                      <option value="Aspen, Colorado">Aspen, Colorado</option>
                      <option value="Santorini, Greece">Santorini, Greece</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-manrope font-semibold text-white/80 mb-1.5">
                    Party Size
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 absolute left-3 top-3 text-white/50" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-[#2b2344]/70 border border-white/15 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-[#7b39fc]"
                    >
                      <option value="1 Adult">1 Adult</option>
                      <option value="2 Adults">2 Adults</option>
                      <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                      <option value="4 Guests (Suite)">4 Guests (Suite)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-manrope font-semibold text-white/80 mb-1.5">
                    Check-in
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-3 text-white/50" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#2b2344]/70 border border-white/15 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-[#7b39fc]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-manrope font-semibold text-white/80 mb-1.5">
                    Check-out
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-3 text-white/50" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#2b2344]/70 border border-white/15 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-[#7b39fc]"
                    />
                  </div>
                </div>
              </div>

              {/* Select Stay Tier */}
              <div>
                <label className="block text-xs font-manrope font-semibold text-white/80 mb-2">
                  Select Featured Demo Accommodation
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  {stays.map((stay, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedStay(idx)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        selectedStay === idx
                          ? 'border-[#7b39fc] bg-[#7b39fc]/15 shadow-md shadow-[#7b39fc]/20'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedStay === idx
                              ? 'border-[#7b39fc] bg-[#7b39fc]'
                              : 'border-white/40'
                          }`}
                        >
                          {selectedStay === idx && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                        <div>
                          <div className="font-manrope font-medium text-sm text-white">
                            {stay.name}
                          </div>
                          <div className="text-xs text-white/60 font-inter">
                            {stay.features}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-cabin font-bold text-white text-base">
                          {stay.price}
                        </span>
                        <span className="text-xs text-white/50">{stay.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#7b39fc] hover:bg-[#8c4dff] rounded-xl font-cabin font-medium text-[16px] text-white shadow-xl shadow-[#7b39fc]/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Confirm Instant Demo Reservation</span>
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

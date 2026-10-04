import React, { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingDemoModal } from './components/BookingDemoModal';
import { AuthModal } from './components/AuthModal';
import { ReviewsModal } from './components/ReviewsModal';
import { ContactModal } from './components/ContactModal';
import { ChangelogModal } from './components/ChangelogModal';
import { VideoControls } from './components/VideoControls';

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Interactive modal states
  const [isBookingDemoOpen, setIsBookingDemoOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState<{
    isOpen: boolean;
    mode: 'signin' | 'register';
  }>({
    isOpen: false,
    mode: 'signin',
  });
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  // Authenticated user state
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden flex flex-col justify-between bg-[#0b0814]">
      {/* Background: Full-screen, absolute-positioned HTML5 video background.
          Autoplay, loop, mute, play inline. Covers viewport without an overlay (keep it opaque). */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full min-h-screen object-cover -z-0 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4"
      />

      {/* 1. Navbar Component (Top Overlay) */}
      <Navbar
        onOpenSignIn={() => setAuthModalState({ isOpen: true, mode: 'signin' })}
        onOpenGetStarted={() => setAuthModalState({ isOpen: true, mode: 'register' })}
        onOpenReviews={() => setIsReviewsOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        user={currentUser}
        onSignOut={() => setCurrentUser(null)}
      />

      {/* 2. Hero Content (Centered) */}
      <Hero
        onOpenBookingDemo={() => setIsBookingDemoOpen(true)}
        onOpenGetStarted={() => setAuthModalState({ isOpen: true, mode: 'register' })}
        onOpenChangelog={() => setIsChangelogOpen(true)}
      />

      {/* Discreet Playback / Audio Controller */}
      <VideoControls
        isMuted={isMuted}
        isPlaying={isPlaying}
        onToggleMute={toggleMute}
        onTogglePlay={togglePlay}
      />

      {/* Interactive Modals */}
      <BookingDemoModal
        isOpen={isBookingDemoOpen}
        onClose={() => setIsBookingDemoOpen(false)}
      />

      <AuthModal
        isOpen={authModalState.isOpen}
        initialMode={authModalState.mode}
        onClose={() => setAuthModalState({ isOpen: false, mode: 'signin' })}
        onSuccess={(name) => setCurrentUser(name)}
      />

      <ReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ChangelogModal
        isOpen={isChangelogOpen}
        onClose={() => setIsChangelogOpen(false)}
      />
    </main>
  );
}

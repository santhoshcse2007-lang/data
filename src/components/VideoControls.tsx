import React from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface VideoControlsProps {
  isMuted: boolean;
  isPlaying: boolean;
  onToggleMute: () => void;
  onTogglePlay: () => void;
}

export const VideoControls: React.FC<VideoControlsProps> = ({
  isMuted,
  isPlaying,
  onToggleMute,
  onTogglePlay,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-20 flex items-center gap-2 bg-[#1b152d]/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full shadow-lg text-white/80 hover:text-white transition-all text-xs font-manrope">
      <button
        type="button"
        onClick={onTogglePlay}
        className="p-1 hover:text-[#7b39fc] transition-colors focus:outline-none"
        title={isPlaying ? 'Pause video' : 'Play video'}
        aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
      </button>

      <span className="w-px h-3 bg-white/20" />

      <button
        type="button"
        onClick={onToggleMute}
        className="p-1 hover:text-[#7b39fc] transition-colors focus:outline-none"
        title={isMuted ? 'Unmute video' : 'Mute video'}
        aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
      >
        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
      </button>

      <span className="hidden sm:inline text-[11px] text-white/60 font-cabin pr-1">
        {isPlaying ? 'Live Motion' : 'Paused'}
      </span>
    </div>
  );
};

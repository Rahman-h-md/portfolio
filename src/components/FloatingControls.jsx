import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SkipForward } from 'lucide-react';

const TRACKS = [
  { label: 'Relaxing Aesthetic',  src: 'https://cdn.pixabay.com/audio/2022/10/25/audio_51c6a282fb.mp3' },
  { label: 'Chill & Calm',        src: 'https://cdn.pixabay.com/audio/2022/03/15/audio_24a2c0f209.mp3' },
  { label: 'Beautiful Ambient',   src: 'https://cdn.pixabay.com/audio/2022/01/26/audio_d0c6ff1bfd.mp3' },
  { label: 'Deep Soothing',       src: 'https://cdn.pixabay.com/audio/2022/05/16/audio_9b96c8a29b.mp3' },
  { label: 'Zen Meditation',      src: 'https://cdn.pixabay.com/audio/2021/08/21/audio_13a30c5eac.mp3' },
];

const AudioWaveIcon = ({ isPlaying }) => {
  const bars = [
    { base: 4, peak: 10 },
    { base: 6, peak: 16 },
    { base: 8, peak: 20 },
    { base: 6, peak: 16 },
    { base: 4, peak: 10 },
  ];

  return (
    <div style={{ display: 'flex', gap: '3px', alignItems: 'center', justifyContent: 'center', height: '24px' }}>
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          animate={{ height: isPlaying ? [bar.base, bar.peak, bar.base] : bar.base }}
          transition={{
            duration: 0.8,
            repeat: isPlaying ? Infinity : 0,
            ease: 'easeInOut',
            delay: i * 0.1,
          }}
          style={{ width: '3px', backgroundColor: 'currentColor', borderRadius: '2px' }}
        />
      ))}
    </div>
  );
};

const FloatingControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef(null);

  // Force reload whenever the track changes
  useEffect(() => {
    if (!audioRef.current) return;
    const wasPlaying = isPlaying;
    audioRef.current.pause();
    audioRef.current.src = TRACKS[trackIndex].src;
    audioRef.current.load();
    if (wasPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch((e) => {
        console.error('Playback failed:', e);
      });
    }
  };

  const nextTrack = () => {
    setTrackIndex(prev => (prev + 1) % TRACKS.length);
  };

  const btnStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '1px solid var(--glass-border)',
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-main)',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    padding: 0,
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      zIndex: 1000,
      alignItems: 'center',
    }}>
      <audio ref={audioRef} src={TRACKS[trackIndex].src} loop />

      {/* Track label tooltip */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontSize: '0.7rem',
            color: 'var(--text-subtle)',
            fontFamily: 'monospace',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'blur(12px)',
            borderRadius: '8px',
            padding: '0.2rem 0.55rem',
            whiteSpace: 'nowrap',
            maxWidth: '130px',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          🎵 {TRACKS[trackIndex].label}
        </motion.div>
      )}

      {/* Next track button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextTrack}
        aria-label="Next Track"
        title={`Next: ${TRACKS[(trackIndex + 1) % TRACKS.length].label}`}
        style={{ ...btnStyle, width: '38px', height: '38px' }}
      >
        <SkipForward size={15} />
      </motion.button>

      {/* Play / Pause button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        aria-label="Toggle Music"
        title={`${isPlaying ? 'Pause' : 'Play'} — ${TRACKS[trackIndex].label}`}
        style={btnStyle}
      >
        <AudioWaveIcon isPlaying={isPlaying} />
      </motion.button>
    </div>
  );
};

export default FloatingControls;

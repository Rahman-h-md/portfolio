import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Motion values bypass React renders for ZERO-latency native feel
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for the outer aesthetic ring
  // Tuning for extremely rapid, snappy, non-laggy response
  const springConfig = { damping: 28, stiffness: 700, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Glow Follower */}
      <motion.div
        className="custom-cursor-follower"
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 1 : 0.5,
          backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
          mixBlendMode: isHovering ? 'screen' : 'difference'
        }}
        transition={{ scale: { type: 'spring', stiffness: 400, damping: 25 } }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid var(--accent-blue)',
          pointerEvents: 'none',
          zIndex: 9999,
          // Use spring for highly snappy follow trailing
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform'
        }}
      />
      {/* Exact center dot - literally 0 latency */}
      <motion.div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          // Exactly follow raw motion values bypassing spring for identical to hardware cursor speed
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHovering ? 0 : 1,
          willChange: 'transform'
        }}
        transition={{ opacity: { duration: 0.15 } }}
      />

      <style>{`
        /* Replace default OS structural cursors with ours */
        body, a, button, [role="button"], input, select, textarea {
          cursor: none !important;
        }

        /* Hide cursor on touch devices entirely */
        @media (pointer: coarse) {
          .custom-cursor-follower, div[style*="zIndex: 10000"] {
            display: none !important;
          }
          body, * { cursor: auto !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

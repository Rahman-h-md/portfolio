import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Use state strictly for variants to avoid jumping on fast re-renders
  const variants = {
    default: {
      x: mousePosition.x - 16, // center the 32x32 container
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 0.5,
      mixBlendMode: 'difference'
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2.5,
      opacity: 1,
      mixBlendMode: 'screen',
      backgroundColor: 'rgba(59, 130, 246, 0.2)'
    }
  };

  return (
    <>
      {/* Outer Glow Follower */}
      <motion.div
        className="custom-cursor-follower"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 15, 
          mass: 0.5 
        }}
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
          willChange: 'transform'
        }}
      />
      {/* Exact center dot */}
      <div 
        style={{
          position: 'fixed',
          top: mousePosition.y,
          left: mousePosition.x,
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--text-main)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'transform 0.1s ease-out, opacity 0.2s',
          opacity: isHovering ? 0 : 1 // Hide dot when hovering
        }}
      />

      <style>{`
        /* Hide cursor on touch devices entirely */
        @media (pointer: coarse) {
          .custom-cursor-follower, div[style*="zIndex: 10000"] {
            display: none !important;
          }
          * { cursor: auto !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

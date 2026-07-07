import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Refs to store actual coordinates
  const mouse = useRef({ x: -100, y: -100 });
  const circle = useRef({ x: -100, y: -100, w: 32, h: 32, r: 16 });
  const hoverTarget = useRef(null);
  
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Update dot position instantly
      if (dotRef.current && !hoverTarget.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        dotRef.current.style.opacity = 1;
      } else if (dotRef.current) {
        dotRef.current.style.opacity = 0; // Hide inner dot when snapping
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .cursor-pointer, [role="button"]');
      if (target) {
        hoverTarget.current = target;
      } else {
        hoverTarget.current = null;
      }
    };

    const animate = () => {
      let targetX = mouse.current.x;
      let targetY = mouse.current.y;
      let targetW = 32;
      let targetH = 32;
      let targetR = 16; // 16px is half of 32px

      if (hoverTarget.current) {
        const rect = hoverTarget.current.getBoundingClientRect();
        
        // Snap to center of the element, plus a slight magnetic pull towards the mouse (parallax)
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // 15% pull towards the mouse for parallax effect
        targetX = centerX + (mouse.current.x - centerX) * 0.15;
        targetY = centerY + (mouse.current.y - centerY) * 0.15;
        
        targetW = rect.width + 16; // 8px padding on each side
        targetH = rect.height + 16;
        
        // Extract border radius
        const style = window.getComputedStyle(hoverTarget.current);
        let br = parseInt(style.borderRadius);
        targetR = isNaN(br) || br === 0 ? 8 : br + 4; 
      }

      // Lerp properties for smooth animation
      circle.current.x += (targetX - circle.current.x) * 0.15;
      circle.current.y += (targetY - circle.current.y) * 0.15;
      circle.current.w += (targetW - circle.current.w) * 0.15;
      circle.current.h += (targetH - circle.current.h) * 0.15;
      circle.current.r += (targetR - circle.current.r) * 0.15;
      
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circle.current.x}px, ${circle.current.y}px, 0) translate(-50%, -50%)`;
        circleRef.current.style.width = `${circle.current.w}px`;
        circleRef.current.style.height = `${circle.current.h}px`;
        circleRef.current.style.borderRadius = `${circle.current.r}px`;
        
        // Magnetic morphing styles
        if (hoverTarget.current) {
          circleRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          circleRef.current.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          circleRef.current.style.mixBlendMode = 'normal';
        } else {
          circleRef.current.style.backgroundColor = 'transparent';
          circleRef.current.style.borderColor = 'rgba(255, 255, 255, 1)';
          circleRef.current.style.mixBlendMode = 'difference';
        }
      }
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    let reqId = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = `
      a, button, .cursor-pointer, [role="button"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(reqId);
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* The small dot */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-200"
        style={{ opacity: 0 }}
      ></div>
      
      {/* The magnetic morphing circle */}
      <div 
        ref={circleRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-colors duration-300 ease-out border border-white mix-blend-difference"
      ></div>
    </>
  );
}

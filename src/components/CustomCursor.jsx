import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Refs to store actual coordinates
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  
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
      
      // Instantly move the dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const animate = () => {
      // Lerp the circle
      circle.current.x += (mouse.current.x - circle.current.x) * 0.15;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.15;
      
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circle.current.x}px, ${circle.current.y}px, 0)`;
      }
      
      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.cursor-pointer') ||
        getComputedStyle(e.target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    let reqId = requestAnimationFrame(animate);

    // Hide default cursor across body
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(reqId);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* The small dot */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -ml-1 -mt-1 mix-blend-difference"
      ></div>
      
      {/* The following circle */}
      <div 
        ref={circleRef}
        className={`fixed top-0 left-0 rounded-full border border-white pointer-events-none z-[9998] transition-all duration-300 ease-out mix-blend-difference -ml-4 -mt-4 ${
          isHovering ? 'w-12 h-12 -ml-6 -mt-6 bg-white/10' : 'w-8 h-8'
        }`}
      ></div>
    </>
  );
}

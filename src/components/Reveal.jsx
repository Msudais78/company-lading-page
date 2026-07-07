import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, isVisible] = useIntersectionObserver();

  // Determine starting transform based on direction
  let transformClass = 'translate-y-8'; // default up
  if (direction === 'left') transformClass = 'translate-x-8';
  if (direction === 'right') transformClass = '-translate-x-8';
  if (direction === 'down') transformClass = '-translate-y-8';
  if (direction === 'none') transformClass = 'translate-y-0';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isVisible ? 'opacity-100 transform-none' : `opacity-0 ${transformClass}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const countUp = (target, duration = 2000, setVal) => {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    setVal(Math.floor(eased * target));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      setVal(target);
    }
  };
  window.requestAnimationFrame(step);
};

const StatItem = ({ endValue, suffix = '', label }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      countUp(endValue, 2000, setValue);
      setHasAnimated(true);
    }
  }, [isVisible, endValue, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-primary-border-muted last:border-0 md:last:border-r-0 w-full md:w-1/4">
      <div className="text-5xl lg:text-7xl font-bold text-primary-text mb-2 tracking-tighter">
        {value}{suffix}
      </div>
      <div className="text-primary-faint uppercase tracking-widest text-xs font-bold text-center">
        {label}
      </div>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="bg-primary-bg border-y border-primary-border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <StatItem endValue={150} suffix="+" label="Projects Delivered" />
          <StatItem endValue={99} suffix="%" label="Client Satisfaction" />
          <StatItem endValue={12} suffix="+" label="Years of Experience" />
          <StatItem endValue={40} suffix="+" label="Team Members" />
        </div>
      </div>
    </section>
  );
}

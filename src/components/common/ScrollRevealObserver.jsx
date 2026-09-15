'use client';

import { useEffect } from 'react';

export default function ScrollRevealObserver() {
  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: make all reveal elements visible immediately
      document.querySelectorAll('.reveal, .reveal-up, .reveal-fade, .reveal-scale, .reveal-left, .reveal-right, .stagger-card').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.08,
    });

    const attachObservers = () => {
      const elements = document.querySelectorAll(
        '.reveal, .reveal-up, .reveal-fade, .reveal-scale, .reveal-left, .reveal-right, .stagger-card'
      );
      elements.forEach((el) => {
        // If already in viewport on initial load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    // Attach immediately and once again after brief paint
    attachObservers();
    const timer = setTimeout(attachObservers, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Reveal({ children, className, direction = 'up', delay = 0 }: { children: React.ReactNode, className?: string, direction?: 'up' | 'down' | 'left' | 'right' | 'none', delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    
    switch (direction) {
      case 'up': y = 50; break;
      case 'down': y = -50; break;
      case 'left': x = 50; break;
      case 'right': x = -50; break;
      default: break;
    }

    gsap.fromTo(el, 
      { opacity: 0, x, y },
      {
        opacity: 1, x: 0, y: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [direction, delay]);

  return <div ref={ref} className={className}>{children}</div>;
}

export function StaggerReveal({ children, className }: { children: React.ReactNode, className?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const childrenArray = gsap.utils.toArray(el.children);
    
    gsap.fromTo(childrenArray,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return <div ref={container} className={className}>{children}</div>;
}

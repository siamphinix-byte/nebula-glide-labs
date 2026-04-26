import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { cn } from '../../lib/utils';

interface HRMHorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function HRMHorizontalScroll({ children, className }: HRMHorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const syncScrollState = () => {
    const node = containerRef.current;
    if (!node) return;
    const maxLeft = node.scrollWidth - node.clientWidth;
    setCanScrollLeft(node.scrollLeft > 8);
    setCanScrollRight(node.scrollLeft < maxLeft - 8);
  };

  const scrollByStep = (direction: 'left' | 'right') => {
    const node = containerRef.current;
    if (!node) return;
    const delta = Math.max(220, Math.round(node.clientWidth * 0.55));
    node.scrollBy({
      left: direction === 'left' ? -delta : delta,
      behavior: 'smooth',
    });
  };

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByStep('left')}
          disabled={!canScrollLeft}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Scroll table left"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollByStep('right')}
          disabled={!canScrollRight}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Scroll table right"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div
        ref={containerRef}
        onScroll={syncScrollState}
        onMouseEnter={syncScrollState}
        className="overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}
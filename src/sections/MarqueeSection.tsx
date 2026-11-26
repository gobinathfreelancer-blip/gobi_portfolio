import { useEffect, useRef, useState } from 'react';
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from '../data';

// Two rows of portfolio images that slide sideways in opposite directions while the page scrolls.
export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const row1 = [...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1];
  const row2 = [...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2];

  return (
    <section ref={ref} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden" aria-label="Portfolio highlights">
      <div className="flex flex-col gap-3">
        {/* Each row starts shifted left so there are always images on both edges while it slides. */}
        <div
          className="flex gap-3 w-max"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform', marginLeft: `-${MARQUEE_ROW_1.length * 432}px` }}
        >
          {row1.map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover object-top" />
          ))}
        </div>
        <div
          className="flex gap-3 w-max"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform', marginLeft: '-1000px' }}
        >
          {row2.map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover object-top" />
          ))}
        </div>
      </div>
    </section>
  );
}

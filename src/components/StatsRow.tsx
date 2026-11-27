import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import FadeIn from './FadeIn';

type Stat = { value: number; suffix: string; label: string };

// One number that counts up from 0 every time it scrolls into view (scrolling down to it or back up to it).
// It resets to 0 only once it has completely left the screen, so the reset is never seen.
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.6 }); // mostly visible → count up
  const onScreen = useInView(ref, { amount: 0 }); // any part visible
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? value : 0);
  const armed = useRef(true); // true = ready to play the count the next time it comes into view
  const running = useRef<ReturnType<typeof animate> | null>(null);

  // Start counting when mostly visible. A started count always finishes (it is not cut off by small scrolls).
  useEffect(() => {
    if (!inView || reduce || !armed.current) return;
    armed.current = false;
    running.current = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    });
  }, [inView, reduce, value]);

  // Fully off screen: reset to 0 and get ready to count again.
  useEffect(() => {
    if (onScreen || reduce) return;
    running.current?.stop();
    armed.current = true;
    setShown(0);
  }, [onScreen, reduce]);

  useEffect(() => () => running.current?.stop(), []);

  return (
    <span ref={ref} className="tabular-nums">
      {shown.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

// Row of key numbers under the About text: 2 × 2 on phones, 4 across on larger screens.
// In the 4-across row the third column ("50,000+", the widest number) gets extra width, so every number
// keeps similar breathing room from the dividers.
export default function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid w-full max-w-[860px] wide:max-w-[760px] grid-cols-2 md:grid-cols-[1fr_1fr_1.45fr_1fr] gap-y-12 sm:gap-y-14 md:gap-y-10">
      {stats.map((s, i) => (
        <FadeIn
          key={s.label}
          delay={i * 0.1}
          className={`flex flex-col items-center gap-2 px-3 text-center ${
            i % 2 === 1 ? 'border-l border-[#D7E2EA]/15' : ''
          } ${i === 2 ? 'md:border-l md:border-[#D7E2EA]/15' : ''}`}
        >
          <span
            className="hero-heading whitespace-nowrap font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)' }}
          >
            <CountUp value={s.value} suffix={s.suffix} />
          </span>
          <span className="text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/70">
            {s.label}
          </span>
        </FadeIn>
      ))}
    </div>
  );
}

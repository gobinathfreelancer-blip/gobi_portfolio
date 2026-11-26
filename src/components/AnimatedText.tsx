import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';

// Letters light up (opacity 0.2 → 1) as the paragraph scrolls into view.
// The reveal finishes once the whole paragraph is comfortably on screen (its bottom at 75% of the viewport),
// so the text is fully white by the time the reader arrives at the section.
// A spring smooths the scroll, and each letter fades over a wider window so the edge looks soft, not stepped.
const SOFTNESS = 0.18; // share of the reveal each letter spends fading in

export default function AnimatedText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.95', 'end 0.75'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const chars = Array.from(text);
  const n = chars.length;  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {chars.map((c, i) => {
        const start = (i / n) * (1 - SOFTNESS);
        return <Char key={i} char={c} progress={progress} range={[start, start + SOFTNESS]} />;
      })}
    </p>
  );
}

function Char({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative" aria-hidden="true">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

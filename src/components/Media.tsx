import type { CSSProperties } from 'react';
import type { ProjectImage } from '../data';

// Image with a small language / before-after label in the corner.
export function LabeledImage({
  image,
  className = '',
  style,
  position = 'top',
  onClick,
}: {
  image: ProjectImage;
  className?: string;
  style?: CSSProperties;
  position?: string;
  onClick?: () => void;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#1a1a1a] ${className}`} style={style} onClick={onClick}>
      <img
        src={image.src}
        alt={image.label}
        loading="lazy"
        // Absolute so the image never sets the box height; the frame decides the size.
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-full bg-[#0C0C0C]/80 px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-[#D7E2EA] backdrop-blur">
        {image.label}
      </span>
    </div>
  );
}

function Arrowhead({ dir }: { dir: 'left' | 'right' | 'up' | 'down' }) {
  const rot = { left: 180, right: 0, up: -90, down: 90 }[dir];
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" style={{ transform: `rotate(${rot}deg)` }} className="shrink-0">
      <path d="M1 1 L9 5 L1 9 Z" fill="#D7E2EA" />
    </svg>
  );
}

function HMarker({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1 text-[#D7E2EA]">
      <Arrowhead dir="left" />
      <span className="h-px flex-1 bg-[#D7E2EA]" />
      <span className="px-2 text-[10px] sm:text-xs font-medium uppercase tracking-widest whitespace-nowrap">{label}</span>
      <span className="h-px flex-1 bg-[#D7E2EA]" />
      <Arrowhead dir="right" />
    </div>
  );
}

function VMarker({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-[#D7E2EA]">
      <Arrowhead dir="up" />
      <span className="w-px flex-1 bg-[#D7E2EA]" />
      <span
        className="py-2 text-[10px] sm:text-xs font-medium uppercase tracking-widest whitespace-nowrap"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        {label}
      </span>
      <span className="w-px flex-1 bg-[#D7E2EA]" />
      <Arrowhead dir="down" />
    </div>
  );
}

// One page frame drawn at its true proportions, with width (left→right) and height (top→bottom) markers.
function SizedFrame({
  src,
  title,
  ratio,
  width,
  height,
}: {
  src: string;
  title: string;
  ratio: number;
  width: string;
  height: string;
}) {
  return (
    <div className="flex flex-col gap-2 w-full md:w-auto">
      <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/70 pl-7">{title}</span>
      <div className="pl-7">
        <HMarker label={width} />
      </div>
      <div className="flex gap-2">
        <div className="w-5">
          <VMarker label={height} />
        </div>
        <div
          className="relative overflow-hidden rounded-xl border border-[#D7E2EA]/40 w-full md:w-auto md:h-[clamp(150px,20vw,290px)]"
          style={{ aspectRatio: ratio }}
        >
          <img src={src} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-left-top" />
        </div>
      </div>
    </div>
  );
}

// Item 11: before (11.69 × 8.27 in) vs after (16:9) with clear dimension markers. Both frames share one height,
// so the extra width of 16:9 is easy to see.
export function DimensionCompare() {
  return (
    <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-10 w-full justify-center">
      <SizedFrame
        src="/images/11-redesign-16x9/page-a4.jpg"
        title="Before · original"
        ratio={11.69 / 8.27}
        width="11.69 in"
        height="8.27 in"
      />
      <SizedFrame
        src="/images/11-redesign-16x9/page-16x9.jpg"
        title="After · web widescreen"
        ratio={16 / 9}
        width="16 (ratio)"
        height="9"
      />
    </div>
  );
}

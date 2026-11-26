import type { LucideIcon } from 'lucide-react';

// Gradient used by every glass icon (purple → blue → pink, like the sample's 3D icons).
export function GlassDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="glass-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7FD3FF" />
          <stop offset="45%" stopColor="#7621B0" />
          <stop offset="75%" stopColor="#B600A8" />
          <stop offset="100%" stopColor="#FFB3F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// A glowing, glassy line icon that floats gently.
export default function GlassIcon({ Icon, rotate = 0, className = '' }: { Icon: LucideIcon; rotate?: number; className?: string }) {
  return (
    <div className={`float-y ${className}`} style={{ ['--r' as string]: `${rotate}deg` }} aria-hidden="true">
      <div className="relative">
        <Icon
          className="absolute inset-0 h-full w-full blur-md opacity-70"
          color="url(#glass-grad)"
          strokeWidth={2.4}
        />
        <Icon
          className="relative h-full w-full"
          color="url(#glass-grad)"
          strokeWidth={1.6}
          style={{ filter: 'drop-shadow(0 6px 18px rgba(182, 0, 168, 0.45))' }}
        />
      </div>
    </div>
  );
}

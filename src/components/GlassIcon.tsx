import type { ComponentType, CSSProperties } from 'react';

// Any line icon that takes lucide-style props (lucide icons, or our own below).
type IconProps = { className?: string; color?: string; strokeWidth?: string | number; style?: CSSProperties };
type IconComponent = ComponentType<IconProps>;

// Translation icon: two speech bubbles holding real glyphs, Tamil "அ" (a) and Chinese "文" (language/writing).
// The letters are real text set in Google Noto fonts (loaded in index.html), so they are always correct glyphs.
export function TranslateGlyphIcon({ className, color = 'currentColor', strokeWidth = 2, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Large bubble (tail bottom-left) */}
      <path d="M5 2.5h7.5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7.2L4.2 16.3v-2.9A3 3 0 0 1 2 10.5v-5a3 3 0 0 1 3-3z" />
      {/* Baselines measured from the real glyph outlines so each letter's ink is centred in its bubble
          (Tamil அ: bubble body centre y=8; Chinese 文: y=16.25). */}
      <text
        x="8.96"
        y="9.55"
        textAnchor="middle"
        fontSize="7.4"
        fontWeight="700"
        fill={color}
        stroke="none"
        fontFamily="'Noto Sans Tamil', 'Nirmala UI', 'Tamil Sangam MN', 'Latha', sans-serif"
      >
        அ
      </text>
      {/* Small bubble (tail bottom-right), filled with the page colour so it sits in front */}
      <path
        d="M12.5 11.5H19a3 3 0 0 1 3 3v3.5a3 3 0 0 1-2 2.83v2.37l-2.9-2.2H12.5a3 3 0 0 1-3-3v-3.5a3 3 0 0 1 3-3z"
        fill="#0C0C0C"
      />
      <text
        x="15.75"
        y="18.65"
        textAnchor="middle"
        fontSize="6.2"
        fontWeight="700"
        fill={color}
        stroke="none"
        fontFamily="'Noto Sans SC', 'Microsoft YaHei', 'PingFang SC', sans-serif"
      >
        文
      </text>
    </svg>
  );
}

// Gradient used by every glass icon (purple → blue → pink, like the sample's 3D icons).
export function GlassDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        {/* userSpaceOnUse (icon's 24×24 grid) so perfectly straight lines get the gradient too;
            with the default bounding-box mode, flat horizontal/vertical lines would render invisible. */}
        <linearGradient id="glass-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
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
export default function GlassIcon({ Icon, rotate = 0, className = '' }: { Icon: IconComponent; rotate?: number; className?: string }) {
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

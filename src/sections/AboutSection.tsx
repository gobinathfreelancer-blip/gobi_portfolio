import { Clapperboard, Headphones, Newspaper } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import GlassIcon, { GlassDefs, TranslateGlyphIcon } from '../components/GlassIcon';
import { ContactButton } from '../components/Buttons';
import StatsRow from '../components/StatsRow';
import { ABOUT_STATS, ABOUT_TEXT } from '../data';

// Layout
// - Phones & tablets: the section is taller than the screen, so the corner icons get their own band
//   (fixed distance from the top/bottom edge) and the content has matching top/bottom padding: icons never
//   sit on the heading, the stats or the button.
// - Wide screens (landscape 1200px+, the "wide:" variant): original design, icons placed by percentage beside
//   the centred text column.
const TOP_ICON = 'absolute top-8 sm:top-10 wide:top-[4%] w-[84px] sm:w-[110px] md:w-[136px] wide:w-[170px]';
const BOTTOM_ICON = 'absolute bottom-8 sm:bottom-10 wide:bottom-[8%] w-[76px] sm:w-[100px] md:w-[124px] wide:w-[150px]';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 sm:px-10 md:px-14 pt-[150px] pb-[150px] sm:pt-[190px] sm:pb-[180px] md:pt-[220px] md:pb-[200px] wide:px-10 wide:py-20"
    >
      <GlassDefs />
      {/* Corner icons, one per field: translation (Tamil + Chinese letters), transcription (headphones), DTP (newspaper), screenwriting (clapper) */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className={`${TOP_ICON} left-4 sm:left-8 md:left-12 wide:left-[4%]`}>
        <GlassIcon Icon={TranslateGlyphIcon} rotate={-10} />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className={`${BOTTOM_ICON} left-6 sm:left-12 md:left-16 wide:left-[7%]`}>
        <GlassIcon Icon={Headphones} rotate={-12} />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className={`${TOP_ICON} right-4 sm:right-8 md:right-12 wide:right-[4%]`}>
        <GlassIcon Icon={Newspaper} rotate={12} />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className={`${BOTTOM_ICON} right-6 sm:right-12 md:right-16 wide:right-[7%]`}>
        <GlassIcon Icon={Clapperboard} rotate={10} />
      </FadeIn>

      <div className="relative z-10 flex w-full flex-col items-center gap-16 sm:gap-20 md:gap-24 wide:gap-20">
        <div className="flex flex-col items-center gap-12 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </FadeIn>
          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[560px] text-center font-medium leading-[1.8] wide:leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>
        <StatsRow stats={ABOUT_STATS} />
        <ContactButton />
      </div>
    </section>
  );
}

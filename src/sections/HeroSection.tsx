import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import { ContactButton } from '../components/Buttons';
import { HERO_TAGLINE } from '../data';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    // Portrait screens (phones, upright tablets): content-height hero with the portrait in the normal flow (no gaps).
    // Landscape screens (laptops, desktops): full-screen hero with the portrait pinned to the bottom, as in the design.
    <section className="relative flex flex-col landscape:h-screen" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        {NAV.map((n) => (
          <a
            key={n.label}
            href={n.href}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
          >
            {n.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden px-2">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, i&apos;m gobi
        </FadeIn>
      </div>

      {/* Positioning lives on a plain div so the fade-in's transform doesn't cancel the centering. */}
      <div className="relative left-1/2 -translate-x-1/2 z-10 w-[104vw] max-w-[680px] -mt-[2vw] landscape:absolute landscape:mt-0 landscape:max-w-none landscape:bottom-0 landscape:w-[min(640px,80vh)] xl:landscape:w-[min(700px,85vh)]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img
              src="/images/profile-3d.png"
              alt="Gobi, 3D portrait"
              className="w-full h-auto select-none pointer-events-none"
              draggable={false}
              // Body fades into the page background, so there is never a hard cut line at the bottom.
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, #000 58%, rgba(0,0,0,0.6) 78%, transparent 97%)',
                maskImage: 'linear-gradient(to bottom, #000 58%, rgba(0,0,0,0.6) 78%, transparent 97%)',
              }}
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="-mt-[min(24vw,157px)] landscape:mt-auto flex items-end justify-between gap-4 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[180px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[340px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {HERO_TAGLINE}
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

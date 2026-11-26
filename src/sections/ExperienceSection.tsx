import FadeIn from '../components/FadeIn';
import { EXPERIENCE } from '../data';

// Translation, transcription and script work (no images; text only, company names allowed).
export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn
        as="h2"
        className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </FadeIn>

      <div className="mx-auto max-w-6xl flex flex-col gap-16 sm:gap-20 md:gap-24">
        {EXPERIENCE.map((group, gi) => (
          <div key={group.area}>
            <FadeIn className="flex items-end gap-4 sm:gap-6 mb-6 sm:mb-8">
              <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 96px)' }}>
                {String(gi + 1).padStart(2, '0')}
              </span>
              <h3 className="pb-1 sm:pb-2 font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.6rem)' }}>
                {group.area}
              </h3>
            </FadeIn>

            <div>
              {group.items.map((item, i) => (
                <FadeIn
                  key={item.org + i}
                  delay={i * 0.08}
                  className="grid gap-3 md:gap-10 md:grid-cols-[minmax(0,320px)_1fr] py-6 sm:py-8 text-[#D7E2EA]"
                  style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}>
                      {item.org}
                    </span>
                    <span className="font-light text-sm sm:text-base opacity-70">{item.role}</span>
                    {item.period && (
                      <span className="mt-1 w-fit rounded-full border border-[#D7E2EA]/40 px-3 py-0.5 text-[11px] sm:text-xs uppercase tracking-widest">
                        {item.period}
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-col gap-2 font-light leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}>
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B600A8]" />
                        <span className="opacity-85">{p}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

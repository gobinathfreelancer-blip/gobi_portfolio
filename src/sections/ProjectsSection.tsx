import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import FadeIn from '../components/FadeIn';
import { GhostButton } from '../components/Buttons';
import { DimensionCompare, LabeledImage } from '../components/Media';
import ProjectViewer from '../components/ProjectViewer';
import { FEATURED, PROJECTS, type Project } from '../data';

const radius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function Card({
  project,
  index,
  total,
  progress,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  onOpen: () => void;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] min-h-[620px] sticky top-24 md:top-32 flex items-start justify-center">
      <motion.article
        className={`relative w-full max-w-6xl border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top ${radius}`}
        style={{ scale, top: `${index * 28}px` }}
      >
        {/* Top row: number, category + name, button */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 md:gap-8 px-2 sm:px-4 pb-4 sm:pb-6">
          <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-6 md:gap-8">
            <span className="hero-heading font-black leading-none shrink-0" style={{ fontSize: 'clamp(2.6rem, 8vw, 110px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3 className="font-medium uppercase leading-tight text-[#D7E2EA]" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 2rem)' }}>
                {project.title}
              </h3>
              <span className="text-[11px] sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/80">{project.tag}</span>
            </div>
          </div>
          <div className="shrink-0">
            <GhostButton onClick={onOpen}>View project</GhostButton>
          </div>
        </div>

        {/* Bottom row: images */}
        {project.dimensions ? (
          <button
            type="button"
            onClick={onOpen}
            className={`flex w-full items-center justify-center border border-[#D7E2EA]/20 p-4 sm:p-8 ${radius}`}
            // Same height as the image grid on the other cards, so the stack lines up.
            style={{ minHeight: 'calc(clamp(130px, 16vw, 230px) + clamp(160px, 22vw, 340px) + 1rem)' }}
          >
            <DimensionCompare />
          </button>
        ) : (
          project.card && (
            <button type="button" onClick={onOpen} className="flex w-full gap-3 sm:gap-4 text-left" aria-label={`Open ${project.title}`}>
              <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
                <LabeledImage image={project.card[0]} className={radius} style={{ height: 'clamp(130px, 16vw, 230px)' }} />
                <LabeledImage image={project.card[1]} className={radius} style={{ height: 'clamp(160px, 22vw, 340px)' }} />
              </div>
              <LabeledImage image={project.card[2]} className={`w-[60%] ${radius}`} />
            </button>
          )
        )}
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn
        as="h2"
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </FadeIn>

      {/* Extra bottom space: the last card sits lower (stack offset), so it must not cover the button below. */}
      <div ref={ref} className="mt-12 sm:mt-16" style={{ paddingBottom: `${(FEATURED.length - 1) * 28 + 40}px` }}>
        {FEATURED.map((p, i) => (
          <Card key={p.id} project={p} index={i} total={FEATURED.length} progress={scrollYProgress} onOpen={() => setOpen(p)} />
        ))}
      </div>

      <FadeIn className="relative z-20 mt-16 sm:mt-20 flex flex-col items-center gap-4 text-center">
        <p className="font-light uppercase tracking-widest text-[#D7E2EA]/70 text-sm sm:text-base">
          {PROJECTS.length} projects in total
        </p>
        <GhostButton href="/projects.html">View all projects</GhostButton>
      </FadeIn>

      <ProjectViewer project={open} onClose={() => setOpen(null)} />
    </section>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '../data';
import { DimensionCompare, LabeledImage } from './Media';

// Full-screen pop-up with the project story and every image.
export default function ProjectViewer({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto bg-[#0C0C0C]/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10 py-16 sm:py-20"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            exit={{ y: 40 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="fixed right-4 top-4 sm:right-8 sm:top-8 z-10 rounded-full border-2 border-[#D7E2EA] p-2 sm:p-3 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 bg-[#0C0C0C]"
            >
              <X size={22} />
            </button>

            <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">{project.category}</p>
            <h3
              className="hero-heading mt-2 font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              {project.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA]">{project.tag}</p>

            <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_1fr] text-[#D7E2EA]">
              <div className="space-y-5">
                <p className="font-light leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}>
                  {project.summary}
                </p>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest opacity-60">The challenge</p>
                  <p className="mt-1 font-light leading-relaxed">{project.challenge}</p>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest opacity-60">How I solved it</p>
                  <ul className="mt-2 space-y-2 font-light leading-relaxed">
                    {project.solution.map((s) => (
                      <li key={s} className="flex gap-3">
                        <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B600A8]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span key={t} className="rounded-full border border-[#D7E2EA]/40 px-3 py-1 text-xs uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.dimensions && (
              <div className="mt-12 rounded-[32px] border border-[#D7E2EA]/20 p-5 sm:p-8">
                <DimensionCompare />
              </div>
            )}

            <div className="mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2">
              {project.images.map((im, i) => (
                <a key={im.src + i} href={im.src} target="_blank" rel="noreferrer" className="block" title="Open full size">
                  <LabeledImage image={im} className="rounded-[24px] sm:rounded-[32px] aspect-[4/3] cursor-zoom-in" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-center text-xs uppercase tracking-widest text-[#D7E2EA]/50">
              Click any image to open it full size
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

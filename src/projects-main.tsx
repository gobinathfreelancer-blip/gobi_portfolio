import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft } from 'lucide-react';
import './index.css';
import FadeIn from './components/FadeIn';
import { ContactButton } from './components/Buttons';
import ProjectViewer from './components/ProjectViewer';
import Footer from './sections/Footer';
import { PROJECTS, type Project } from './data';

const FILTERS = ['All', 'Multilingual DTP & Localization', 'Document Recreation & Design', 'Script Formatting'] as const;

function AllProjects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const [open, setOpen] = useState<Project | null>(null);
  const list = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <main id="top" className="min-h-screen bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
        <a
          href="/"
          className="flex items-center gap-2 text-sm md:text-lg font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={20} /> Home
        </a>
        <a href="/#contact" className="text-sm md:text-lg font-medium uppercase tracking-wider text-[#D7E2EA] hover:opacity-70 transition-opacity">
          Contact
        </a>
      </nav>

      <section className="px-5 sm:px-8 md:px-10 pt-12 sm:pt-16 pb-24">
        <FadeIn
          as="h1"
          y={40}
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          All projects
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border-2 px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-widest transition-colors ${
                filter === f ? 'border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C]' : 'border-[#D7E2EA]/40 text-[#D7E2EA] hover:border-[#D7E2EA]'
              }`}
            >
              {f}
            </button>
          ))}
        </FadeIn>

        <div className="mx-auto mt-12 sm:mt-16 grid max-w-7xl gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => {
            const cover = p.card?.[2] ?? p.images[p.images.length > 1 ? 1 : 0];
            return (
              <FadeIn key={p.id} delay={(i % 3) * 0.08}>
                <button
                  type="button"
                  onClick={() => setOpen(p)}
                  className="group block w-full overflow-hidden rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 text-left transition-colors hover:border-[#D7E2EA]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
                    <img
                      src={cover.src}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-1 p-5 sm:p-6 text-[#D7E2EA]">
                    <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest opacity-60">{p.category}</span>
                    <span className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.3rem)' }}>
                      {p.title}
                    </span>
                    <span className="text-xs sm:text-sm font-light uppercase tracking-wider opacity-80">{p.tag}</span>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-20 flex flex-col items-center gap-6 text-center">
          <p className="font-light uppercase tracking-widest text-[#D7E2EA]/70">Like what you see?</p>
          <ContactButton href="/#contact" />
        </FadeIn>
      </section>

      <Footer />
      <ProjectViewer project={open} onClose={() => setOpen(null)} />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AllProjects />
  </StrictMode>,
);

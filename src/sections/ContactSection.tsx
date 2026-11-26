import { useState, type FormEvent } from 'react';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import { Mail } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { GradientSubmit } from '../components/Buttons';
import { CONTACT } from '../data';

const SOCIALS = [
  { label: 'WhatsApp', href: CONTACT.whatsapp, Icon: FaWhatsapp },
  { label: 'LinkedIn', href: CONTACT.linkedin, Icon: FaLinkedinIn },
  { label: 'Upwork', href: CONTACT.upwork, Icon: SiUpwork },
  { label: 'Fiverr', href: CONTACT.fiverr, Icon: SiFiverr },
];

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'local';

const inputCls =
  'w-full rounded-2xl border-2 border-[#D7E2EA]/25 bg-transparent px-5 py-4 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 outline-none transition-colors focus:border-[#D7E2EA] font-light';

export default function ContactSection() {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Netlify Forms only works once the site is live on Netlify. On this computer, just show a note.
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') {
      setStatus('local');
      return;
    }
    setStatus('sending');
    try {
      const body = new URLSearchParams();
      data.forEach((v, k) => body.append(k, String(v)));
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn
        as="h2"
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Contact
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        className="mx-auto mt-6 sm:mt-8 max-w-[620px] text-center font-light uppercase tracking-wide leading-snug text-[#D7E2EA]"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)' }}
      >
        A document to localize, a script to format, or a role to fill? Send me a message.
      </FadeIn>

      <div className="mx-auto mt-14 sm:mt-20 grid max-w-6xl gap-12 md:gap-16 md:grid-cols-[1.4fr_1fr]">
        <FadeIn delay={0.15}>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} className="flex flex-col gap-4">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <input className={inputCls} type="text" name="name" placeholder="Your name" required autoComplete="name" />
              <input className={inputCls} type="email" name="email" placeholder="Your email" required autoComplete="email" />
            </div>
            <input className={inputCls} type="text" name="subject" placeholder="Subject (e.g. Tamil localization, DTP, job offer)" />
            <textarea className={`${inputCls} min-h-[180px] resize-y`} name="message" placeholder="Your message" required />
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <GradientSubmit type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </GradientSubmit>
              <p className="text-sm font-light text-[#D7E2EA]" role="status" aria-live="polite">
                {status === 'sent' && 'Thank you! Your message has been sent.'}
                {status === 'error' && `Something went wrong. Please email ${CONTACT.email} directly.`}
                {status === 'local' && 'Preview mode: the form starts sending emails once the site is live on Netlify.'}
              </p>
            </div>
          </form>
        </FadeIn>

        <FadeIn delay={0.25} className="flex flex-col gap-8 text-[#D7E2EA]">
          <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest opacity-60">Email</span>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 font-light break-all hover:opacity-70 transition-opacity" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.3rem)' }}>
              <Mail size={20} className="shrink-0" /> {CONTACT.email}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest opacity-60">WhatsApp</span>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-light hover:opacity-70 transition-opacity" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.3rem)' }}>
              <FaWhatsapp size={20} className="shrink-0" /> {CONTACT.whatsappNumber}
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest opacity-60">Find me on</span>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] transition-all duration-200 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] hover:scale-105"
                >
                  <Icon size={26} />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

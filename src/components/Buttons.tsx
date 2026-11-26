import type { ButtonHTMLAttributes, ReactNode } from 'react';

const contactStyle = {
  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
  outline: '2px solid #FFFFFF',
  outlineOffset: '-3px',
};

const contactClass =
  'inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]';

// "Contact Me": scrolls to the Contact section (or goes to it from another page).
export function ContactButton({ href = '#contact', label = 'Contact Me' }: { href?: string; label?: string }) {
  return (
    <a href={href} className={contactClass} style={contactStyle}>
      {label}
    </a>
  );
}

export function GradientSubmit({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button {...rest} className={`${contactClass} disabled:opacity-60`} style={contactStyle}>
      {children}
    </button>
  );
}

// Ghost pill button (the sample's "Live Project" style).
export function GhostButton({
  children,
  onClick,
  href,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const cls =
    'inline-block whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10';
  if (href)
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#D7E2EA]/15 px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">
      <span>© {new Date().getFullYear()} Gobinath · Gobi</span>
      <a href="#top" className="hover:text-[#D7E2EA] transition-colors">
        Back to top ↑
      </a>
    </footer>
  );
}

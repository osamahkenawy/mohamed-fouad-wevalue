import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NAV_LINKS, BRAND } from './data';

const Header: React.FC = () => {
  const { pathname, asPath } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [asPath]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && !asPath.includes('#');
    if (href.startsWith('/#')) return false;
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-mf-navy/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mf-container py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 inline-flex items-center gap-3" aria-label="Home">
          {/* Logo icon */}
          <div className="w-10 h-10 border-2 border-mf-gold rounded-lg flex items-center justify-center">
            <span className="text-mf-gold font-bold text-[16px]">M</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-mf-cream font-bold text-[14px] leading-tight tracking-wide">MOHAMED</p>
            <p className="text-mf-cream font-bold text-[14px] leading-tight tracking-wide">AHMED FOUAD</p>
            <p className="text-mf-gold text-[9px] tracking-[0.2em] uppercase">Real Estate Expert</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-colors ${
                  active
                    ? 'text-mf-gold'
                    : 'text-mf-cream/85 hover:text-mf-gold'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <button className="hidden md:flex items-center gap-1 text-mf-cream text-[13px] font-medium border border-mf-cream/30 px-3 py-1.5 rounded">
            EN
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* CTA Button */}
          <a
            href={`mailto:${BRAND.email}`}
            className="hidden md:inline-flex mf-btn-primary"
          >
            Get In Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-mf-gold/60 text-mf-gold rounded-lg"
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="lg:hidden bg-mf-navy/95 border-t border-mf-gold/15 backdrop-blur">
          <nav className="mf-container py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-mf-cream/90 text-[14px] font-medium hover:text-mf-gold"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-2 mf-btn-primary w-fit"
            >
              Get In Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

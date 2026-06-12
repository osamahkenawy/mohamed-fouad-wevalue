import { BRAND } from '../data';

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0 bg-mf-navy">
      <img src="/images/mf/hero-bg.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-mf-navy via-mf-navy/90 to-mf-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-mf-navy via-transparent to-mf-navy/60" />
      {/* Right side: person image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-mf-navy to-transparent z-10" />
        <img src="/images/mf/hero-portrait.png" alt="Mohamed Ahmed Fouad" className="absolute inset-0 w-full h-full object-cover object-top" />
      </div>
    </div>

    <div className="relative z-10 mf-container w-full pt-32 pb-20">
      <div className="max-w-2xl">
        {/* Eyebrow */}
        <p className="flex items-center gap-3 mf-eyebrow">
          <span className="mf-divider" />
          {BRAND.title}
        </p>

        {/* Headline */}
        <h1 className="mt-8 text-mf-cream text-[48px] lg:text-[72px] leading-[1.05] font-bold italic">
          Guiding Excellence
          <br />
          In <span className="text-mf-gold">Real Estate</span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-mf-text-muted text-[15px] leading-[1.8] max-w-lg">
          A seasoned business owner of Alfouad valuation in Dubai renowned for his
          strategic vision and negotiation prowess in the real estate industry.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/#biography" className="mf-btn-primary">
            Discover More About Mr. Amin
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap gap-8 lg:gap-12">
          <TrustBadge icon="vision" title="Strategic Vision" desc="Future-focused approach" />
          <TrustBadge icon="expertise" title="Trusted Expertise" desc="Decades of proven experience" />
          <TrustBadge icon="results" title="Results Driven" desc="Maximizing value, delivering success" />
        </div>
      </div>

      {/* Watch Introduction */}
      <a
        href={BRAND.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-12 bottom-20 hidden lg:flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-14 h-14 rounded-full border-2 border-mf-gold flex items-center justify-center group-hover:bg-mf-gold/10 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-mf-gold ml-1">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
        <div>
          <p className="text-mf-cream text-[13px] font-medium">Watch</p>
          <p className="text-mf-cream text-[13px] font-medium">Introduction</p>
        </div>
      </a>
    </div>
  </section>
);

function TrustBadge({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full border border-mf-gold/40 flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-mf-gold">
          {icon === 'vision' && <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round" />}
          {icon === 'expertise' && <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" /></>}
          {icon === 'results' && <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" /></>}
        </svg>
      </div>
      <div>
        <p className="text-mf-cream text-[13px] font-semibold">{title}</p>
        <p className="text-mf-text-muted text-[11px]">{desc}</p>
      </div>
    </div>
  );
}

export default Hero;

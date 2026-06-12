import { BRAND, STATS } from '../data';

const About: React.FC = () => (
  <section id="biography" className="mf-section bg-mf-navy">
    <div className="mf-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      {/* Portrait */}
      <div className="lg:col-span-4">
        <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-mf-gold/20 bg-mf-navy-light">
          <img src="/images/mf/bio-portrait.png" alt="Mohamed Ahmed Fouad" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>

      {/* Bio content */}
      <div className="lg:col-span-5">
        <p className="mf-eyebrow">
          Meet {BRAND.fullName}
        </p>

        <h2 className="mt-5 text-mf-cream text-[36px] lg:text-[44px] leading-[1.15] font-bold">
          Founder & Owner
          <br />
          Of <span className="text-mf-gold">{BRAND.company}</span>
        </h2>

        <p className="mt-7 text-mf-text-muted text-[14px] leading-[1.9]">
          Mohamed Ahmed Fouad Amin is a distinguished real estate expert,
          author, and investment consultant with over two decades of experience
          in valuation, development advisory, and high-level market analysis
          across the UAE and the MENA region.
        </p>
        <p className="mt-4 text-mf-text-muted text-[14px] leading-[1.9]">
          He is the founder of Al Fouad Real Estate Valuation and a certified
          member of FIABCI and ACAMS.
        </p>

        <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8 mf-btn-ghost inline-flex">
          Get In Touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Stats */}
      <div className="lg:col-span-3 flex flex-col gap-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4 p-4 rounded-xl border border-mf-gold/15 bg-mf-navy-light/50">
            <div className="w-10 h-10 rounded-full bg-mf-gold/10 flex items-center justify-center shrink-0">
              <StatIcon label={stat.label} />
            </div>
            <div>
              <p className="text-mf-gold text-[22px] font-bold leading-tight">{stat.value}</p>
              <p className="text-mf-text-muted text-[12px]">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

function StatIcon({ label }: { label: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-mf-gold">
      {label.includes('Experience') && <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" /></>}
      {label.includes('Projects') && <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" strokeLinecap="round" /></>}
      {label.includes('Clients') && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>}
      {label.includes('Market') && <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>}
    </svg>
  );
}

export default About;

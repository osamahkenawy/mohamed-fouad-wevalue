import { SERVICES } from '../data';

const Services: React.FC = () => (
  <section id="services" className="mf-section bg-mf-navy-light">
    <div className="mf-container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left content */}
        <div className="lg:col-span-7">
          <p className="mf-eyebrow">What I Do</p>
          <h2 className="mt-4 text-mf-cream text-[36px] lg:text-[44px] leading-[1.15] font-bold">
            Comprehensive Real Estate Solutions
          </h2>

          {/* Service cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="p-5 rounded-xl border border-mf-gold/10 bg-mf-navy/80 hover:border-mf-gold/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-mf-gold/10 flex items-center justify-center mb-4">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="text-mf-cream text-[14px] font-semibold">{service.title}</h3>
                <p className="mt-2 text-mf-text-muted text-[12px] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image placeholder */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-mf-navy border border-mf-gold/10">
            <div className="w-full h-full flex items-center justify-center text-mf-text-muted text-[14px]">
              Office / Meeting Image
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

function ServiceIcon({ type }: { type: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-mf-gold">
      {type === 'valuation' && <><path d="M3 21h18M3 7v14M21 7v14M6 7V4h12v3M9 21V10h6v11" strokeLinecap="round" strokeLinejoin="round" /></>}
      {type === 'investment' && <><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" /></>}
      {type === 'analysis' && <><path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" /></>}
      {type === 'development' && <><rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 3l-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" /></>}
      {type === 'risk' && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" /></>}
    </svg>
  );
}

export default Services;

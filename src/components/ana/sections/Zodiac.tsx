import { STATS } from '../data';

const StatsBar: React.FC = () => (
  <section id="achievements" className="py-16 bg-mf-navy border-y border-mf-gold/10">
    <div className="mf-container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-mf-gold/10 border border-mf-gold/20 flex items-center justify-center shrink-0">
              <StatBarIcon label={stat.label} />
            </div>
            <div>
              <p className="text-mf-gold text-[26px] lg:text-[30px] font-bold leading-tight">{stat.value}</p>
              <p className="text-mf-text-muted text-[12px] mt-0.5">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

function StatBarIcon({ label }: { label: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-mf-gold">
      {label.includes('Experience') && <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" /></>}
      {label.includes('Projects') && <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" strokeLinecap="round" /></>}
      {label.includes('Clients') && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>}
      {label.includes('Market') && <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>}
    </svg>
  );
}

export default StatsBar;

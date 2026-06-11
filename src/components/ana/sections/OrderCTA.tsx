import { BRAND } from '../data';

const ContactCTA: React.FC = () => (
  <section id="contact" className="py-16 bg-mf-navy-light border-y border-mf-gold/10">
    <div className="mf-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-mf-gold/10 border border-mf-gold/30 flex items-center justify-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-mf-gold">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h2 className="text-mf-cream text-[24px] lg:text-[30px] font-bold">
              Let&apos;s Build Your Next Success
            </h2>
            <p className="text-mf-text-muted text-[14px] mt-1">
              Connect with {BRAND.fullName} today.
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href={`mailto:${BRAND.email}`}
          className="mf-btn-primary"
        >
          Get In Touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default ContactCTA;

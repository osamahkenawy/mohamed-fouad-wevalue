const MEDIA_IMAGES = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  alt: `Media appearance ${i + 1}`,
}));

const Media: React.FC = () => (
  <section id="media" className="mf-section bg-mf-navy">
    <div className="mf-container">
      <h2 className="text-mf-cream text-[32px] lg:text-[40px] font-bold">
        Media & Partnerships
      </h2>

      {/* Carousel of media images */}
      <div className="mt-10 relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {MEDIA_IMAGES.map((img) => (
            <div
              key={img.id}
              className="shrink-0 w-[160px] h-[120px] rounded-xl border border-mf-gold/15 bg-mf-navy-light overflow-hidden flex items-center justify-center"
            >
              <span className="text-mf-text-muted text-[11px]">Media {img.id}</span>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full border border-mf-gold bg-mf-navy flex items-center justify-center text-mf-gold hover:bg-mf-gold hover:text-mf-navy transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full border border-mf-gold bg-mf-navy flex items-center justify-center text-mf-gold hover:bg-mf-gold hover:text-mf-navy transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </section>
);

export default Media;

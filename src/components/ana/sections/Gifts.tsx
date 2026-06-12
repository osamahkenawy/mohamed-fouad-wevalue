import { useRef } from 'react';

const MEDIA_IMAGES = [
  { id: 1, src: '/images/mf/media-1.png', alt: 'Media appearance 1' },
  { id: 2, src: '/images/mf/media-02.jpeg', alt: 'Media appearance 2' },
  { id: 3, src: '/images/mf/mediia-03.jpeg', alt: 'Media appearance 3' },
  { id: 4, src: '/images/mf/media-04.jpeg', alt: 'Media appearance 4' },
  { id: 5, src: '/images/mf/media-05.jpeg', alt: 'Media appearance 5' },
  { id: 6, src: '/images/mf/media-06.jpeg', alt: 'Media appearance 6' },
  { id: 7, src: '/images/mf/media-07.jpeg', alt: 'Media appearance 7' },
];

const Media: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 200;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="media" className="mf-section bg-mf-navy">
      <div className="mf-container">
        <h2 className="text-mf-cream text-[32px] lg:text-[40px] font-bold">
          Media & Partnerships
        </h2>

        {/* Carousel of media images */}
        <div className="mt-10 relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          >
            {MEDIA_IMAGES.map((img) => (
              <div
                key={img.id}
                className="shrink-0 w-[200px] h-[150px] rounded-xl border border-mf-gold/15 bg-mf-navy-light overflow-hidden"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full border border-mf-gold bg-mf-navy flex items-center justify-center text-mf-gold hover:bg-mf-gold hover:text-mf-navy transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
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
};

export default Media;

/**
 * GallerySection Component
 * Full-width image gallery showcasing painting projects.
 * SEO: Descriptive alt text on each image, lazy loading.
 */

const INSTAGRAM_URL = "https://www.instagram.com/jkbairava_painting/";

const galleryImages = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-4_66637f70.jpg",
    alt: "Exterior house painting project in Melbourne showing freshly painted weatherboard home",
    label: "Exterior Painting",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-2_ce13d0f8.jpg",
    alt: "Residential painting project featuring a newly painted house exterior with white trim",
    label: "Residential Painting",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-3_fa3fe192.jpg",
    alt: "Professional painters completing an interior painting job in a Melbourne home",
    label: "Interior Painting",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-1_959ba009.jpg",
    alt: "Completed commercial painting project showing clean professional finish",
    label: "Commercial Painting",
  },
];

// Instagram SVG icon (used on hover overlay)
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function GallerySection() {
  return (
    <section aria-label="Gallery of our painting projects" className="w-full">
      {/* Section label */}
      <p
        className="text-sm uppercase tracking-[3px] mb-3 text-center"
        style={{ color: "#00ff00", fontFamily: '"Open Sans", sans-serif', fontWeight: 600 }}
      >
        // Our Work //
      </p>

      {/* Instagram CTA bar */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center pt-2 pb-10 px-6 bg-white mb-8"
      >
        <span
          className="text-3xl md:text-4xl lg:text-5xl"
          style={{
            fontFamily: '"Rajdhani", sans-serif',
            fontWeight: 700,
            color: "#0d1b2a",
          }}
        >
          See more of our projects on{" "}
          <span
            style={{
              background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >Instagram</span>
          <span style={{ color: "#e74c3c" }}>.</span>
        </span>
      </a>

      {/* Image grid */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {galleryImages.map((img, index) => (
          <a
            key={index}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden aspect-square block"
            aria-label={`View on Instagram: ${img.label}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 flex flex-col items-center gap-2">
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl shadow-lg"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  }}
                >
                  <InstagramIcon className="w-6 h-6 text-white" />
                </span>
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "#00ff00", fontFamily: '"Open Sans", sans-serif' }}
                >
                  View on Instagram
                </p>
                <h3
                  className="text-xl text-white"
                  style={{ fontFamily: '"Rajdhani", sans-serif', fontWeight: 700 }}
                >
                  {img.label}
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

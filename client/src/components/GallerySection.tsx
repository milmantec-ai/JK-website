/**
 * GallerySection Component
 * Full-width image gallery showcasing painting projects.
 * SEO: Descriptive alt text on each image, lazy loading.
 */

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

export default function GallerySection() {
  return (
    <section aria-label="Gallery of our painting projects" className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <p
                  className="text-xs uppercase tracking-wider mb-1"
                  style={{
                    color: "#00ff00",
                    fontFamily: '"Open Sans", sans-serif',
                  }}
                >
                  Our Work
                </p>
                <h3
                  className="text-xl text-white"
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  {img.label}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

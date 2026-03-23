/**
 * GallerySection Component
 * Replicates the full-width image gallery from the original site.
 * Shows painting project photos in a grid layout.
 */

const galleryImages = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-4_66637f70.jpg",
    label: "Painting House",
    title: "House",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-2_ce13d0f8.jpg",
    label: "Painting House",
    title: "House",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-3_fa3fe192.jpg",
    label: "Painting House",
    title: "House",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-1_959ba009.jpg",
    label: "Painting House",
    title: "House",
  },
];

export default function GallerySection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {galleryImages.map((img, index) => (
          <div key={index} className="relative group overflow-hidden aspect-square">
            <img
              src={img.src}
              alt={img.title}
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
                  {img.label}
                </p>
                <h3
                  className="text-2xl text-white"
                  style={{ fontFamily: '"Rajdhani", sans-serif', fontWeight: 700 }}
                >
                  {img.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

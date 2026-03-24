/**
 * ServicesSection Component
 * "Our Core Painting Services" section with 5 service cards.
 * SEO: h2 for section title, h3 for each service, aria-label on section.
 * Matches existing site style: white bg, green subtitle, red dot, Rajdhani headings.
 */

const services = [
  {
    title: "Residential Painting",
    description:
      "Complete residential painting services for homes across Melbourne's suburbs. We deliver clean, precise finishes with high-quality paints for walls, ceilings, trims, and feature walls.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="#e74c3c" strokeWidth="2">
        <rect x="8" y="16" width="48" height="40" rx="2" />
        <path d="M8 24h48" />
        <rect x="16" y="32" width="12" height="16" />
        <rect x="36" y="32" width="12" height="8" />
        <path d="M20 8l12-4 12 4" />
      </svg>
    ),
  },
  {
    title: "Commercial Painting",
    description:
      "Reliable commercial painting for offices, shops, warehouses, and buildings with minimal disruption to your business operations and professional finishes.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="#e74c3c" strokeWidth="2">
        <path d="M8 56h48" />
        <path d="M12 56V28l20-16 20 16v28" />
        <rect x="24" y="40" width="16" height="16" />
        <path d="M32 40v16" />
        <path d="M24 48h16" />
        <circle cx="48" cy="16" r="6" />
      </svg>
    ),
  },
  {
    title: "Epoxy Floor Painting",
    description:
      "Durable epoxy floor coatings for garages, warehouses, and commercial spaces. Resistant to stains, chemicals, and heavy traffic with a professional finish.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="#e74c3c" strokeWidth="2">
        <rect x="8" y="20" width="48" height="36" rx="2" />
        <path d="M8 28h48" />
        <path d="M16 36h32" />
        <path d="M16 44h32" />
        <circle cx="20" cy="24" r="2" fill="#e74c3c" />
        <circle cx="44" cy="24" r="2" fill="#e74c3c" />
      </svg>
    ),
  },
  {
    title: "Roof Restoration",
    description:
      "Professional roof restoration and painting to protect your home from the elements. We restore colour and extend the life of your roof with premium coatings.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="#e74c3c" strokeWidth="2">
        <path d="M8 40h48" />
        <path d="M12 40V24l20-12 20 12v16" />
        <path d="M20 32h24" />
        <path d="M24 36h16" />
      </svg>
    ),
  },
  {
    title: "Colour Consultation",
    description:
      "Expert colour selection service to help you choose the perfect palette for your space. We guide you through options to match your style and vision.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="#e74c3c" strokeWidth="2">
        <circle cx="32" cy="32" r="20" />
        <circle cx="24" cy="24" r="3" fill="#e74c3c" />
        <circle cx="40" cy="24" r="3" fill="#e74c3c" />
        <circle cx="20" cy="40" r="3" fill="#e74c3c" />
        <circle cx="44" cy="40" r="3" fill="#e74c3c" />
        <path d="M28 48c4 2 8 2 8 0" />
      </svg>
    ),
  }
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: "#ffffff" }}
      aria-label="Our core painting services"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm uppercase tracking-[3px] mb-3"
            style={{
              color: "#00ff00",
              fontFamily: '"Open Sans", sans-serif',
              fontWeight: 600,
            }}
          >
            // WHY CHOOSE US //
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              color: "#0d1b2a",
            }}
          >
            Our Core Painting Services
            <span style={{ color: "#e74c3c" }}>.</span>
          </h2>
          <p
            className="text-base mt-4 max-w-3xl mx-auto"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              color: "#666",
            }}
          >
            From interior and exterior painting to epoxy floors and roof restoration, we specialise in helping you choose the right colour for every project.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white border border-gray-100 p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div
                className="mb-5 flex justify-center group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3
                className="text-lg mb-3"
                style={{
                  fontFamily: '"Rajdhani", sans-serif',
                  fontWeight: 700,
                  color: "#0d1b2a",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  color: "#666",
                }}
              >
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

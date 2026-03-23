/**
 * ServicesSection Component
 * "Our Core Painting Services" section with 4 service cards.
 * SEO: h2 for section title, h3 for each service, aria-label on section.
 * Matches existing site style: white bg, green subtitle, red dot, Rajdhani headings.
 */

const services = [
  {
    title: "Interior Painting",
    description:
      "Professional interior painting that refreshes your home with smooth finishes and high-quality paints. We handle walls, ceilings, trims, and feature walls.",
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
    title: "Exterior Painting",
    description:
      "Durable exterior painting designed to protect your property from Melbourne weather and enhance its kerb appeal with long-lasting finishes.",
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
    title: "Residential Painting",
    description:
      "Complete house painting services delivering clean, precise, and long-lasting results for homes across Melbourne's suburbs.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="#e74c3c" strokeWidth="2">
        <path d="M4 32l28-24 28 24" />
        <path d="M12 28v28h40V28" />
        <rect x="24" y="36" width="16" height="20" />
        <path d="M32 36v20" />
        <rect x="16" y="32" width="6" height="6" />
        <rect x="42" y="32" width="6" height="6" />
      </svg>
    ),
  },
  {
    title: "Commercial Painting",
    description:
      "Reliable commercial painting for offices, shops, warehouses, and buildings with minimal disruption to your business operations.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none" stroke="#e74c3c" strokeWidth="2">
        <rect x="8" y="12" width="24" height="44" rx="1" />
        <rect x="32" y="24" width="24" height="32" rx="1" />
        <rect x="14" y="20" width="6" height="6" />
        <rect x="14" y="32" width="6" height="6" />
        <rect x="14" y="44" width="6" height="6" />
        <rect x="22" y="20" width="6" height="6" />
        <rect x="22" y="32" width="6" height="6" />
        <rect x="38" y="32" width="6" height="6" />
        <rect x="38" y="44" width="6" height="6" />
        <rect x="46" y="32" width="6" height="6" />
        <rect x="46" y="44" width="6" height="6" />
      </svg>
    ),
  },
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
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="text-xl mb-3"
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

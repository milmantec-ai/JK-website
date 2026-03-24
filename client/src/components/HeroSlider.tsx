/**
 * Hero Section Component
 * Static hero with the house image as background
 * SEO: Single h1 tag for page heading
 * Design: Dark overlay, white text, green subtitle, red CTA buttons
 */

export default function HeroSlider() {
  const heroImage =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/hero-house_f01f4d36.jpg";

  return (
    <section
      className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden"
      aria-label="Professional painting services hero section"
      role="region"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Beautiful house exterior - professional painting example"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <p
              className="text-sm md:text-base tracking-[3px] mb-4 uppercase"
              style={{
                fontFamily: '"Open Sans", sans-serif',
                color: "#00ff00",
                fontWeight: 600,
                letterSpacing: "3px",
              }}
            >
              // MELBOURNE PROFESSIONAL PAINTERS //
            </p>

            {/* Heading - h1 for SEO */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight"
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Transform Your Home
              <br />
              With Expert Painting
            </h1>

            {/* Description */}
            <p
              className="text-base md:text-lg text-white/85 mb-8 max-w-lg"
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: 400,
              }}
            >
              Professional interior and exterior painting services in Melbourne. Quality finishes that protect and beautify your property.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block px-8 py-4 text-white text-sm md:text-base font-semibold uppercase tracking-wider transition-all duration-300 hover:opacity-90 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: "#e74c3c",
                  fontFamily: '"Open Sans", sans-serif',
                  letterSpacing: "1px",
                }}
              >
                Get a Quote
              </a>
              <a
                href="#services"
                className="inline-block px-8 py-4 text-white text-sm md:text-base font-semibold uppercase tracking-wider border-2 border-white transition-all duration-300 hover:bg-white hover:text-gray-900"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  letterSpacing: "1px",
                }}
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

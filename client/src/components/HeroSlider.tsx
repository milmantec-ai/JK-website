/**
 * HeroSlider Component
 * Replaces the original static hero section with a 3-slide carousel.
 * Design: Matches existing site style - dark overlay on images, white text,
 * green subtitle, red CTA button, Rajdhani headings, Open Sans body.
 */
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/hero-slide-1-mACTLMnWqL6LNoXSNJAkpd.webp",
    subtitle: "// MELBOURNE PROFESSIONAL PAINTERS //",
    heading: "Professional Exterior\nPainting Services",
    description:
      "Transform your property with expert exterior painting. Quality finishes that protect and beautify your home.",
  },
  {
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/hero-slide-2-ASoWdKxz5rqkQMgj6FQfU8.webp",
    subtitle: "// TRUSTED LOCAL PAINTERS //",
    heading: "Expert Interior\nPainting Solutions",
    description:
      "Refresh your living spaces with smooth, flawless interior painting by experienced professionals.",
  },
  {
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/hero-slide-3-3yXGxSc5vr47GxnTn3aeki.webp",
    subtitle: "// QUALITY GUARANTEED //",
    heading: "Complete Home\nTransformations",
    description:
      "From residential to commercial, we deliver stunning painting results that exceed expectations.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prev = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: current === index ? 1 : 0, zIndex: current === index ? 1 : 0 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

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
                  {slide.subtitle}
                </p>

                {/* Heading */}
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight"
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  {slide.heading.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < slide.heading.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h1>

                {/* Description */}
                <p
                  className="text-base md:text-lg text-white/80 mb-8 max-w-lg"
                  style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 400 }}
                >
                  {slide.description}
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
        </div>
      ))}

      {/* Arrow Navigation */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

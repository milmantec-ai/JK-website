/**
 * TestimonialsSection Component
 * "Clients Feedbacks" carousel with project photos and testimonials.
 * SEO: h2 for section, proper alt text, lazy loading, aria labels.
 */
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIAL_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-bg_ef6075a1.jpg";

const testimonials = [
  {
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-1_959ba009.jpg",
    imageAlt: "Interior painting project completed for Michael T. in Melbourne",
    quote:
      "Excellent painting work and very professional team. The finish on our interior walls looks perfect and the job was completed on time. Highly recommend their services.",
    name: "Michael T.",
    role: "Homeowner",
    avatar:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/avatar-1_21326aad.jpg",
  },
  {
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-2_ce13d0f8.jpg",
    imageAlt: "Exterior house painting completed for Sarah L. in Melbourne suburbs",
    quote:
      "We hired them for exterior house painting and the results were fantastic. Clean work, great communication, and very reliable from start to finish.",
    name: "Sarah L.",
    role: "Property Owner",
    avatar:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/avatar-2_9b5a4c00.jpg",
  },
  {
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-3_fa3fe192.jpg",
    imageAlt: "Residential painting transformation by JK Bairava Painting Service",
    quote:
      "Professional painters with great attention to detail. They transformed our home with high-quality finishes and left everything clean after the job.",
    name: "James Carter",
    role: "Residential Client",
    avatar:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/avatar-1_21326aad.jpg",
  },
  {
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/testimonial-4_66637f70.jpg",
    imageAlt: "Commercial property painting project completed for Jason K.",
    quote:
      "Very happy with the painting work on our commercial property. The team was efficient, friendly, and delivered excellent results.",
    name: "Jason K.",
    role: "Business Owner",
    avatar:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/avatar-2_9b5a4c00.jpg",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setCurrent((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  }, []);

  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-16 relative"
      style={{
        backgroundImage: `url(${TESTIMONIAL_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Client testimonials and reviews"
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-gray-100/90" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p
              className="text-sm uppercase tracking-[3px] mb-3"
              style={{
                color: "#00ff00",
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: 600,
              }}
            >
              // TESTIMONIALS
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl"
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontWeight: 700,
                color: "#0d1b2a",
              }}
            >
              Clients Feedbacks
              <span style={{ color: "#e74c3c" }}>.</span>
            </h2>
          </div>
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-12 h-12 flex items-center justify-center transition-all duration-300 disabled:opacity-50"
              style={{ backgroundColor: current === 0 ? "#ccc" : "#00ff00" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft
                size={20}
                style={{ color: current === 0 ? "#999" : "#0d1b2a" }}
              />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="w-12 h-12 flex items-center justify-center transition-all duration-300 disabled:opacity-50"
              style={{
                backgroundColor: current >= maxIndex ? "#ccc" : "#0d1b2a",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight
                size={20}
                style={{ color: current >= maxIndex ? "#999" : "#ffffff" }}
              />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${current * (100 / itemsPerView + 1.5)}%)`,
            }}
          >
            {testimonials.map((t, index) => (
              <article
                key={index}
                className="flex-shrink-0 bg-white shadow-md overflow-hidden"
                style={{
                  width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 24) / itemsPerView}px)`,
                }}
              >
                {/* Project Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Quote + Info */}
                <div className="p-6">
                  <blockquote
                    className="text-sm leading-relaxed mb-5"
                    style={{
                      fontFamily: '"Open Sans", sans-serif',
                      color: "#555",
                    }}
                  >
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={`${t.name} - ${t.role}`}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <cite
                        className="text-base font-bold not-italic block"
                        style={{
                          fontFamily: '"Rajdhani", sans-serif',
                          color: "#0d1b2a",
                        }}
                      >
                        {t.name}
                      </cite>
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: '"Open Sans", sans-serif',
                          color: "#00cc00",
                        }}
                      >
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

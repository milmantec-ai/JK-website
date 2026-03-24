/**
 * AboutSection Component
 * Provides company background, values, and key stats.
 * SEO: Proper h2 heading, descriptive text with keywords, aria-label.
 * Matches existing site style: dark bg, green accents, Rajdhani headings.
 */
import { CheckCircle, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: <Clock size={28} />, value: "10+", label: "Years Experience" },
  { icon: <CheckCircle size={28} />, value: "500+", label: "Projects Completed" },
  { icon: <Users size={28} />, value: "450+", label: "Happy Clients" },
  { icon: <Award size={28} />, value: "100%", label: "Satisfaction Rate" },
];

const values = [
  "Fully licensed and insured painters",
  "Premium quality paints from trusted brands",
  "Clean, tidy, and professional workmanship",
  "Transparent pricing with no hidden costs",
  "On-time project completion guaranteed",
  "Free colour consultation available",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: "#0d1b2a" }}
      aria-label="About JK Bairava Painting Service"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <p
              className="text-sm uppercase tracking-[3px] mb-3"
              style={{
                color: "#00ff00",
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: 600,
              }}
            >
              // ABOUT US //
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white mb-6"
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Melbourne's Trusted Professional Painters
              <span style={{ color: "#e74c3c" }}>.</span>
            </h2>
            <p
              className="text-white/75 text-base leading-relaxed mb-6"
              style={{ fontFamily: '"Open Sans", sans-serif' }}
            >
              JK Bairava Painting Service has been delivering high-quality painting
              solutions across Melbourne for over a decade. From single-room refreshes
              to complete exterior transformations, our experienced team brings
              precision, care, and professionalism to every project.
            </p>
            <p
              className="text-white/75 text-base leading-relaxed mb-8"
              style={{ fontFamily: '"Open Sans", sans-serif' }}
            >
              We take pride in using premium paints from brands like Dulux and
              Taubmans, ensuring durable and beautiful finishes that stand the test
              of time. Whether it's a residential home or a commercial property, we
              treat every job with the same level of dedication.
            </p>

            {/* Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#00ff00" }}
                  />
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: '"Open Sans", sans-serif' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="flex justify-center mb-3"
                  style={{ color: "#00ff00" }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-3xl md:text-4xl text-white mb-1"
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs uppercase tracking-wider text-white/60"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Footer Component
 * Simplified footer: business info, quick links, business hours.
 * SEO: Proper nav element with aria-label, semantic footer tag.
 */
import { Phone, Mail, MapPin } from "lucide-react";

const FOOTER_LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/footer-logo_a97402f4.png";

export default function Footer() {
  return (
    <footer role="contentinfo">
      {/* Main Footer */}
      <div
        className="py-16 px-4 md:px-8 lg:px-16"
        style={{ backgroundColor: "#0d1b2a" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Column 1: Business Info */}
            <div>
              <img
                src={FOOTER_LOGO_URL}
                alt="JK Bhairava Painting Service logo"
                className="h-20 w-auto mb-6"
                loading="lazy"
              />
              <h3
                className="text-2xl text-white mb-4"
                style={{ fontFamily: '"Rajdhani", sans-serif', fontWeight: 700 }}
              >
                JK Bhairava Painting Service
              </h3>
              <p
                className="text-white/70 text-sm leading-relaxed mb-6 max-w-md"
                style={{ fontFamily: '"Open Sans", sans-serif' }}
              >
                Melbourne's trusted professional painters. We deliver quality
                interior and exterior painting services for residential and
                commercial properties across all Melbourne suburbs.
              </p>
              <address className="not-italic flex flex-col gap-3">
                <a
                  href="tel:0439731898"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  <Phone size={16} style={{ color: "#00ff00" }} />
                  <span>0439 731 898</span>
                </a>
                <a
                  href="mailto:jkbpaintings@gmail.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  <Mail size={16} style={{ color: "#00ff00" }} />
                  <span>jkbpaintings@gmail.com</span>
                </a>
                <a
                  href="https://maps.google.com/?q=21+Jamieson+St+St+Albans+VIC+3021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  <MapPin size={16} style={{ color: "#00ff00" }} />
                  <span>21 Jamieson St, St Albans VIC 3021</span>
                </a>
              </address>
            </div>

            {/* Column 2: Quick Links + Hours */}
            <div className="md:pl-8">
              <h4
                className="text-xl text-white mb-6"
                style={{ fontFamily: '"Rajdhani", sans-serif', fontWeight: 700 }}
              >
                Quick Links
              </h4>
              <nav aria-label="Footer navigation" className="flex flex-col gap-3 mb-8">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"
                    style={{
                      fontFamily: '"Open Sans", sans-serif',
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ color: "#e74c3c" }}>&#8250;</span>
                    {link.label}
                  </a>
                ))}
              </nav>

              <h4
                className="text-xl text-white mb-4"
                style={{ fontFamily: '"Rajdhani", sans-serif', fontWeight: 700 }}
              >
                Business Hours
              </h4>
              <div className="flex flex-col gap-2">
                <div
                  className="flex justify-between text-sm text-white/70 max-w-xs"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  <span>Monday – Saturday</span>
                  <span>7:00 AM – 8:00 PM</span>
                </div>
                <div
                  className="flex justify-between text-sm text-white/70 max-w-xs"
                  style={{ fontFamily: '"Open Sans", sans-serif' }}
                >
                  <span>Sunday</span>
                  <span style={{ color: "#e74c3c" }}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-4 px-4 md:px-8 lg:px-16"
        style={{ backgroundColor: "#091422" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p
              className="text-white/50 text-xs"
              style={{ fontFamily: '"Open Sans", sans-serif' }}
            >
              &copy; {new Date().getFullYear()} JK Bhairava Painting Service. All rights reserved.
            </p>
            <p
              className="text-white/50 text-xs"
              style={{ fontFamily: '"Open Sans", sans-serif' }}
            >
              Made by{" "}
              <a
                href="https://www.milmantech.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors font-semibold"
                style={{ textDecoration: "none" }}
              >
                milmantech.au
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            {[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white/80 text-xs transition-colors hidden sm:inline"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

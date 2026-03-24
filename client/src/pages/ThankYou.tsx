import { useEffect } from "react";
import { Link } from "wouter";

/**
 * Thank You page — shown after successful contact form submission.
 * This page URL change enables Google Ads conversion tracking.
 * URL: /thank-you
 */
export default function ThankYou() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      {/* Header bar */}
      <div style={{ background: "#0d1b2a", padding: "12px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/logo_0186860f.png"
              alt="JK Bhairava Painting Service"
              style={{ height: "56px", width: "auto" }}
            />
          </Link>
          <a
            href="tel:0439731898"
            style={{ color: "#7cfc00", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "18px", textDecoration: "none", letterSpacing: "1px" }}
          >
            0439 731 898
          </a>
        </div>
      </div>

      {/* Main content */}
      <main
        className="flex-1 flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)", padding: "80px 24px" }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
            padding: "60px 48px",
            maxWidth: "560px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* Checkmark icon */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "#7cfc00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 28px",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M8 20L16 28L32 12" stroke="#0d1b2a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 700,
              color: "#0d1b2a",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Thank You!
          </h1>

          <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.7, marginBottom: "12px" }}>
            Your message has been received. We'll get back to you within <strong>24 hours</strong> with a free, no-obligation quote.
          </p>

          <p style={{ fontSize: "15px", color: "#888", marginBottom: "36px" }}>
            Need to speak with us sooner?{" "}
            <a href="tel:0439731898" style={{ color: "#c0392b", fontWeight: 600, textDecoration: "none" }}>
              Call 0439 731 898
            </a>
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/">
              <button
                style={{
                  background: "#c0392b",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "14px 32px",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                Back to Home
              </button>
            </Link>
            <Link href="/#services">
              <button
                style={{
                  background: "transparent",
                  color: "#0d1b2a",
                  border: "2px solid #0d1b2a",
                  borderRadius: "4px",
                  padding: "14px 32px",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "#0d1b2a", color: "#aaa", textAlign: "center", padding: "20px 24px", fontSize: "13px" }}>
        © {new Date().getFullYear()} JK Bhairava Painting Service. All rights reserved. &nbsp;|&nbsp; Made by{" "}
        <a href="https://www.milmantech.au" target="_blank" rel="noopener noreferrer" style={{ color: "#7cfc00", textDecoration: "none" }}>
          milmantech.au
        </a>
      </footer>
    </div>
  );
}

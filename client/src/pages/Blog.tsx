import { Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Clock, Tag } from "lucide-react";

/**
 * Blog listing page — /blog
 * Displays all painting tips and case study posts.
 * SEO: h1 heading, article cards with descriptive links.
 */
export default function Blog() {
  const tips = blogPosts.filter((p) => p.category === "Painting Tips");
  const cases = blogPosts.filter((p) => p.category === "Case Study");

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      {/* Header */}
      <header style={{ background: "#0d1b2a", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
        {/* Top bar */}
        <div style={{ background: "#111e2e", borderBottom: "1px solid #1e2e40", padding: "8px 0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href="mailto:jkbpaintings@gmail.com" style={{ color: "#aaa", fontSize: "13px", textDecoration: "none" }}>
              jkbpaintings@gmail.com
            </a>
            <span style={{ color: "#aaa", fontSize: "13px" }}>21 Jamieson St St Albans VIC 3021</span>
          </div>
        </div>
        {/* Main nav */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <Link href="/">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/logo_0186860f.png"
              alt="JK Bairava Painting Service"
              style={{ height: "48px", width: "auto", cursor: "pointer" }}
            />
          </Link>
          <nav style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "1px" }}>HOME</Link>
            <Link href="/#services" style={{ color: "#fff", textDecoration: "none", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "1px" }}>SERVICES</Link>
            <Link href="/blog" style={{ color: "#7cfc00", textDecoration: "none", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "1px" }}>BLOG</Link>
            <Link href="/#contact" style={{ color: "#fff", textDecoration: "none", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "1px" }}>CONTACT</Link>
            <a
              href="tel:0439731898"
              style={{
                background: "#c0392b",
                color: "#fff",
                padding: "10px 20px",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "1px",
                textDecoration: "none",
                borderRadius: "2px",
              }}
            >
              0439 731 898
            </a>
          </nav>
        </div>
      </header>

      {/* Hero banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#7cfc00", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
          // KNOWLEDGE HUB //
        </p>
        <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 5vw, 52px)", color: "#fff", marginBottom: "16px", lineHeight: 1.2 }}>
          Painting Tips & Case Studies
        </h1>
        <p style={{ color: "#aaa", fontSize: "16px", maxWidth: "560px", margin: "0 auto" }}>
          Expert advice from Melbourne's professional painters — colour guides, preparation tips, and real project transformations.
        </p>
      </div>

      {/* Main content */}
      <main style={{ flex: 1, background: "#f8f9fa", padding: "60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Painting Tips */}
          <section style={{ marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <span style={{ background: "#c0392b", color: "#fff", padding: "4px 14px", borderRadius: "2px", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase" }}>
                Painting Tips
              </span>
              <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "28px" }}>
              {tips.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <span style={{ background: "#0d1b2a", color: "#fff", padding: "4px 14px", borderRadius: "2px", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase" }}>
                Case Studies
              </span>
              <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "28px" }}>
              {cases.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <div
            style={{
              marginTop: "72px",
              background: "linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)",
              borderRadius: "8px",
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 36px)", color: "#fff", marginBottom: "12px" }}>
              Ready to Transform Your Home?
            </h2>
            <p style={{ color: "#aaa", fontSize: "15px", marginBottom: "28px", maxWidth: "480px", margin: "0 auto 28px" }}>
              Get a free, no-obligation quote from Melbourne's trusted painting professionals.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#contact">
                <button style={{ background: "#c0392b", color: "#fff", border: "none", padding: "14px 32px", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer", borderRadius: "2px" }}>
                  Get a Free Quote
                </button>
              </Link>
              <a href="tel:0439731898" style={{ background: "transparent", color: "#fff", border: "2px solid #fff", padding: "14px 32px", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "1px", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
                Call 0439 731 898
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "#0d1b2a", color: "#aaa", textAlign: "center", padding: "20px 24px", fontSize: "13px" }}>
        © {new Date().getFullYear()} JK Bairava Painting Service. All rights reserved. &nbsp;|&nbsp; Made by{" "}
        <a href="https://www.milmantech.au" target="_blank" rel="noopener noreferrer" style={{ color: "#7cfc00", textDecoration: "none" }}>
          milmantech.au
        </a>
      </footer>
    </div>
  );
}

function BlogCard({ post }: { post: ReturnType<typeof blogPosts[0]["category"] extends string ? () => typeof blogPosts[0] : never> }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        style={{
          background: "#fff",
          borderRadius: "6px",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)";
        }}
      >
        {/* Cover image */}
        <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
          />
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: post.category === "Painting Tips" ? "#c0392b" : "#0d1b2a",
              color: "#fff",
              padding: "3px 10px",
              borderRadius: "2px",
              fontSize: "11px",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#999", fontSize: "12px" }}>
              <Clock size={12} /> {post.readTime}
            </span>
            <span style={{ color: "#ddd" }}>|</span>
            <span style={{ color: "#999", fontSize: "12px" }}>{post.date}</span>
          </div>
          <h3
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "19px",
              color: "#0d1b2a",
              marginBottom: "10px",
              lineHeight: 1.3,
            }}
          >
            {post.title}
          </h3>
          <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
          <span
            style={{
              marginTop: "16px",
              color: "#c0392b",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Read More →
          </span>
        </div>
      </article>
    </Link>
  );
}

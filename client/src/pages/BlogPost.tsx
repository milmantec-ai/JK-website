import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { getBlogPost, getRelatedPosts } from "@/data/blogPosts";
import { Clock, ArrowLeft, Phone } from "lucide-react";

/**
 * Individual blog post page — /blog/:slug
 * Renders full article content with related posts.
 */
export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = getBlogPost(params.slug || "");
  const related = post ? getRelatedPosts(post.slug) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ fontFamily: "'Open Sans', sans-serif", background: "#f8f9fa" }}>
        <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "32px", color: "#0d1b2a", marginBottom: "16px" }}>Post Not Found</h1>
        <Link href="/blog">
          <button style={{ background: "#c0392b", color: "#fff", border: "none", padding: "12px 28px", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1px", cursor: "pointer", borderRadius: "2px" }}>
            Back to Blog
          </button>
        </Link>
      </div>
    );
  }

  // Simple markdown-to-HTML renderer for blog content
  const renderContent = (md: string) => {
    const lines = md.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "clamp(20px, 3vw, 26px)", color: "#0d1b2a", marginTop: "36px", marginBottom: "12px", borderBottom: "2px solid #f0f0f0", paddingBottom: "8px" }}>
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "18px", color: "#0d1b2a", marginTop: "24px", marginBottom: "8px" }}>
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("- ")) {
        // Collect consecutive list items
        const items: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("- ")) {
          items.push(lines[i].trim().replace("- ", ""));
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`} style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            {items.map((item, j) => (
              <li key={j} style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, marginBottom: "6px" }}
                dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
              />
            ))}
          </ul>
        );
        continue;
      } else if (line === "") {
        // skip blank lines
      } else {
        // Regular paragraph — handle **bold** and [links](url)
        const html = line
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#c0392b;font-weight:600;text-decoration:none;">$1</a>');
        elements.push(
          <p key={i} style={{ color: "#555", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      }
      i++;
    }
    return elements;
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      {/* Header */}
      <header style={{ background: "#0d1b2a", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
        <div style={{ background: "#111e2e", borderBottom: "1px solid #1e2e40", padding: "8px 0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href="mailto:jkbpaintings@gmail.com" style={{ color: "#aaa", fontSize: "13px", textDecoration: "none" }}>jkbpaintings@gmail.com</a>
            <span style={{ color: "#aaa", fontSize: "13px" }}>21 Jamieson St St Albans VIC 3021</span>
          </div>
        </div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <Link href="/">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/logo_0186860f.png" alt="JK Bairava Painting Service" style={{ height: "48px", width: "auto", cursor: "pointer" }} />
          </Link>
          <nav style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "1px" }}>HOME</Link>
            <Link href="/#services" style={{ color: "#fff", textDecoration: "none", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "1px" }}>SERVICES</Link>
            <Link href="/blog" style={{ color: "#7cfc00", textDecoration: "none", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "1px" }}>BLOG</Link>
            <Link href="/#contact" style={{ color: "#fff", textDecoration: "none", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "1px" }}>CONTACT</Link>
            <a href="tel:0439731898" style={{ background: "#c0392b", color: "#fff", padding: "10px 20px", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1px", textDecoration: "none", borderRadius: "2px" }}>
              0439 731 898
            </a>
          </nav>
        </div>
      </header>

      {/* Hero image */}
      <div style={{ position: "relative", height: "360px", overflow: "hidden" }}>
        <img src={post.coverImage} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(13,27,42,0.5) 0%, rgba(13,27,42,0.75) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px 24px", maxWidth: "900px", margin: "0 auto", left: 0, right: 0 }}>
          <span style={{ background: post.category === "Painting Tips" ? "#c0392b" : "#0d1b2a", color: "#fff", padding: "4px 12px", borderRadius: "2px", fontSize: "11px", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", display: "inline-block", marginBottom: "12px", width: "fit-content" }}>
            {post.category}
          </span>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 42px)", color: "#fff", lineHeight: 1.2, marginBottom: "12px" }}>
            {post.title}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#ccc", fontSize: "13px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={13} /> {post.readTime}</span>
            <span>|</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main style={{ flex: 1, background: "#f8f9fa", padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 300px", gap: "40px", alignItems: "start" }}>

          {/* Article body */}
          <article style={{ background: "#fff", borderRadius: "6px", padding: "40px 44px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
            <Link href="/blog">
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#c0392b", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "28px", cursor: "pointer" }}>
                <ArrowLeft size={14} /> Back to Blog
              </span>
            </Link>
            <div>{renderContent(post.content)}</div>
          </article>

          {/* Sidebar */}
          <aside>
            {/* CTA card */}
            <div style={{ background: "linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)", borderRadius: "6px", padding: "28px 24px", marginBottom: "24px", textAlign: "center" }}>
              <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "20px", color: "#fff", marginBottom: "10px" }}>
                Get a Free Quote
              </h3>
              <p style={{ color: "#aaa", fontSize: "13px", marginBottom: "20px", lineHeight: 1.6 }}>
                Ready to transform your home? Our team services all areas across Melbourne.
              </p>
              <a href="tel:0439731898" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#c0392b", color: "#fff", padding: "12px 20px", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1px", textDecoration: "none", borderRadius: "2px", marginBottom: "10px" }}>
                <Phone size={15} /> 0439 731 898
              </a>
              <Link href="/#contact">
                <button style={{ width: "100%", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "11px 20px", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", cursor: "pointer", borderRadius: "2px" }}>
                  CONTACT FORM
                </button>
              </Link>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div style={{ background: "#fff", borderRadius: "6px", padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Related Posts
                </h3>
                {related.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                    <div style={{ display: "flex", gap: "12px", marginBottom: "16px", cursor: "pointer", paddingBottom: "16px", borderBottom: "1px solid #f0f0f0" }}>
                      <img src={rp.coverImage} alt={rp.title} style={{ width: "64px", height: "64px", objectFit: "cover", borderRadius: "4px", flexShrink: 0 }} />
                      <div>
                        <span style={{ background: rp.category === "Painting Tips" ? "#c0392b" : "#0d1b2a", color: "#fff", padding: "2px 6px", borderRadius: "2px", fontSize: "9px", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
                          {rp.category}
                        </span>
                        <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginTop: "4px", lineHeight: 1.3 }}>{rp.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "#0d1b2a", color: "#aaa", textAlign: "center", padding: "20px 24px", fontSize: "13px" }}>
        © {new Date().getFullYear()} JK Bairava Painting Service. All rights reserved. &nbsp;|&nbsp; Made by{" "}
        <a href="https://www.milmantech.au" target="_blank" rel="noopener noreferrer" style={{ color: "#7cfc00", textDecoration: "none" }}>milmantech.au</a>
      </footer>
    </div>
  );
}

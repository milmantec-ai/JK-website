/**
 * BlogPreviewSection — shows the 3 latest blog posts on the home page.
 * Links to /blog for the full listing.
 */
import { Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { Clock } from "lucide-react";

export default function BlogPreviewSection() {
  const preview = blogPosts.slice(0, 3);

  return (
    <section
      id="blog"
      className="py-20 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: "#ffffff" }}
      aria-label="Latest blog posts and painting tips"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm uppercase tracking-[3px] mb-3"
            style={{ color: "#00ff00", fontFamily: '"Open Sans", sans-serif', fontWeight: 600 }}
          >
            // KNOWLEDGE HUB //
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: '"Rajdhani", sans-serif', fontWeight: 700, color: "#0d1b2a" }}
          >
            Painting Tips & Case Studies<span style={{ color: "#e74c3c" }}>.</span>
          </h2>
          <p
            className="text-base mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: '"Open Sans", sans-serif', color: "#666" }}
          >
            Expert advice from Melbourne's professional painters — colour guides, preparation tips, and real project transformations.
          </p>
        </div>

        {/* Post cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {preview.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article
                style={{
                  background: "#fff",
                  borderRadius: "6px",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
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
                <div style={{ height: "180px", overflow: "hidden", position: "relative" }}>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      background: post.category === "Painting Tips" ? "#e74c3c" : "#0d1b2a",
                      color: "#fff",
                      padding: "3px 10px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontFamily: '"Rajdhani", sans-serif',
                      fontWeight: 700,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "18px 20px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#999", fontSize: "11px" }}>
                      <Clock size={11} /> {post.readTime}
                    </span>
                    <span style={{ color: "#ddd" }}>|</span>
                    <span style={{ color: "#999", fontSize: "11px" }}>{post.date}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Rajdhani", sans-serif',
                      fontWeight: 700,
                      fontSize: "17px",
                      color: "#0d1b2a",
                      marginBottom: "8px",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
                  <span
                    style={{
                      marginTop: "14px",
                      color: "#e74c3c",
                      fontFamily: '"Rajdhani", sans-serif',
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    Read More →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <Link href="/blog">
            <button
              className="px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: "#0d1b2a",
                color: "#fff",
                fontFamily: '"Open Sans", sans-serif',
                border: "none",
                cursor: "pointer",
                borderRadius: "2px",
              }}
            >
              View All Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

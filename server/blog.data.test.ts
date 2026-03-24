import { describe, expect, it } from "vitest";

// Test the blog data module logic (simulated server-side)
// We test the data integrity and helper functions

const blogPosts = [
  {
    slug: "how-to-choose-the-right-paint-colour-for-your-home",
    title: "How to Choose the Right Paint Colour for Your Home",
    category: "Painting Tips",
    date: "March 18, 2026",
    readTime: "5 min read",
  },
  {
    slug: "interior-vs-exterior-paint-whats-the-difference",
    title: "Interior vs Exterior Paint: What's the Difference?",
    category: "Painting Tips",
    date: "March 10, 2026",
    readTime: "4 min read",
  },
  {
    slug: "5-signs-your-home-needs-a-fresh-coat-of-paint",
    title: "5 Signs Your Home Needs a Fresh Coat of Paint",
    category: "Painting Tips",
    date: "February 28, 2026",
    readTime: "3 min read",
  },
  {
    slug: "st-albans-home-exterior-transformation",
    title: "Case Study: St Albans Home Exterior Transformation",
    category: "Case Study",
    date: "March 5, 2026",
    readTime: "6 min read",
  },
  {
    slug: "footscray-commercial-office-interior-repaint",
    title: "Case Study: Footscray Commercial Office Interior Repaint",
    category: "Case Study",
    date: "February 15, 2026",
    readTime: "5 min read",
  },
];

function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

function getRelatedPosts(slug: string, count = 2) {
  return blogPosts.filter((p) => p.slug !== slug).slice(0, count);
}

describe("Blog data", () => {
  it("has 5 blog posts total", () => {
    expect(blogPosts).toHaveLength(5);
  });

  it("has 3 painting tips posts", () => {
    const tips = blogPosts.filter((p) => p.category === "Painting Tips");
    expect(tips).toHaveLength(3);
  });

  it("has 2 case study posts", () => {
    const cases = blogPosts.filter((p) => p.category === "Case Study");
    expect(cases).toHaveLength(2);
  });

  it("all posts have unique slugs", () => {
    const slugs = blogPosts.map((p) => p.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(blogPosts.length);
  });

  it("getBlogPost returns correct post by slug", () => {
    const post = getBlogPost("st-albans-home-exterior-transformation");
    expect(post).toBeDefined();
    expect(post?.title).toBe("Case Study: St Albans Home Exterior Transformation");
  });

  it("getBlogPost returns undefined for unknown slug", () => {
    const post = getBlogPost("non-existent-slug");
    expect(post).toBeUndefined();
  });

  it("getRelatedPosts excludes the current post", () => {
    const slug = "st-albans-home-exterior-transformation";
    const related = getRelatedPosts(slug);
    const hasCurrent = related.some((p) => p.slug === slug);
    expect(hasCurrent).toBe(false);
  });

  it("getRelatedPosts returns at most 2 posts by default", () => {
    const related = getRelatedPosts("st-albans-home-exterior-transformation");
    expect(related.length).toBeLessThanOrEqual(2);
  });

  it("all posts have non-empty titles and slugs", () => {
    for (const post of blogPosts) {
      expect(post.title.length).toBeGreaterThan(0);
      expect(post.slug.length).toBeGreaterThan(0);
    }
  });
});

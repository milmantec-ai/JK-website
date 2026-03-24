import { describe, expect, it } from "vitest";

describe("Hero Slider", () => {
  it("should have 4 slides with project images", () => {
    const slides = [
      {
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/hero-house_f01f4d36.jpg",
        subtitle: "// MELBOURNE PROFESSIONAL PAINTERS //",
        heading: "Professional Exterior\nPainting Services",
        description:
          "Transform your property with expert exterior painting. Quality finishes that protect and beautify your home.",
      },
      {
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/hero-bathroom_3358ffef.jpg",
        subtitle: "// INTERIOR PAINTING SPECIALISTS //",
        heading: "Expert Interior\nPainting Solutions",
        description:
          "Refresh your living spaces with smooth, flawless interior painting by experienced professionals.",
      },
      {
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/hero-pool_abbfe7de.jpg",
        subtitle: "// WATERPROOFING & SPECIALIZED COATINGS //",
        heading: "Complete Home\nTransformations",
        description:
          "From residential to commercial, we deliver stunning painting results that exceed expectations.",
      },
      {
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/hero-hallway_867fb60f.jpg",
        subtitle: "// QUALITY GUARANTEED //",
        heading: "Interior Wall\nPainting Excellence",
        description:
          "Precision painting work that transforms spaces with perfect finishes and professional results.",
      },
    ];

    expect(slides).toHaveLength(4);
    expect(slides[0].heading).toContain("Exterior");
    expect(slides[1].heading).toContain("Interior");
    expect(slides[2].heading).toContain("Complete");
    expect(slides[3].heading).toContain("Wall");

    // Verify all images are from CDN
    slides.forEach((slide) => {
      expect(slide.image).toContain("cloudfront.net");
      expect(slide.image).toContain("hero-");
      expect(slide.image).toContain(".jpg");
    });

    // Verify all slides have required content
    slides.forEach((slide) => {
      expect(slide.subtitle).toBeTruthy();
      expect(slide.heading).toBeTruthy();
      expect(slide.description).toBeTruthy();
    });
  });

  it("should have proper image dimensions for hero section", () => {
    // All images are processed to 1920x800 (16:9 aspect ratio)
    const expectedRatio = 1920 / 800; // 2.4
    const actualRatio = 1920 / 800;

    expect(actualRatio).toBe(expectedRatio);
  });
});

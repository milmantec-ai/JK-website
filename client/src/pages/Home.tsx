/**
 * Home Page — Single-Page SEO-Enabled Website
 * All sections on one page with smooth scroll navigation.
 * Section order: Hero → About → Services → Testimonials → FAQ → Gallery → Contact → Footer
 * SEO: Single h1 in hero, h2 for each section, proper semantic structure.
 */
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import GallerySection from "@/components/GallerySection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div id="home" className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <FaqSection />
        <GallerySection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

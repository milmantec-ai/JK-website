/**
 * Home Page
 * Assembles all sections in the same order as the original WordPress site.
 * MODIFIED sections: HeroSlider (was static hero), Footer (simplified)
 * PRESERVED sections: Header, Contact, Services, Testimonials, Gallery
 */
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div id="home" className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <ContactSection />
        <ServicesSection />
        <TestimonialsSection />
        <GallerySection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

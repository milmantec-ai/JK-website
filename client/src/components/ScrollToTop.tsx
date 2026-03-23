/**
 * ScrollToTop Component
 * Floating button that appears when user scrolls down, matching original site.
 */
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-1"
      style={{ backgroundColor: "#e74c3c" }}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}

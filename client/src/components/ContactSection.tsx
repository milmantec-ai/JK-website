/**
 * ContactSection Component
 * Replicates the contact form from the original site.
 * Includes the "GET A FREE QUOTE" button and form fields.
 * Positioned below the hero slider, matching original layout.
 */
import { useState } from "react";
import { MessageSquare } from "lucide-react";

const BEFORE_AFTER_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663446241794/gXa9oYk3AXa84PnPVwhkNy/before-during-after_f70d397d.png";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: "#f0f4f5" }}>
      <div className="max-w-6xl mx-auto">
        {/* CTA + Before/After Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 text-white text-base font-semibold uppercase tracking-wider transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: "#e74c3c",
              fontFamily: '"Open Sans", sans-serif',
              textDecoration: "none",
            }}
          >
            <MessageSquare size={20} />
            GET A FREE QUOTE
          </a>
        </div>

        {/* Before/During/After Image */}
        <div className="flex justify-center mb-12">
          <img
            src={BEFORE_AFTER_IMG}
            alt="Before During After"
            className="max-w-full md:max-w-2xl h-auto"
          />
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  color: "#0d1b2a",
                }}
              >
                Name <span style={{ color: "#e74c3c" }}>*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-400 transition-colors"
                style={{ fontFamily: '"Open Sans", sans-serif' }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  color: "#0d1b2a",
                }}
              >
                Email <span style={{ color: "#e74c3c" }}>*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-400 transition-colors"
                style={{ fontFamily: '"Open Sans", sans-serif' }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  color: "#0d1b2a",
                }}
              >
                Comment or Message
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-400 transition-colors resize-vertical"
                style={{ fontFamily: '"Open Sans", sans-serif' }}
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: "#e74c3c",
                fontFamily: '"Open Sans", sans-serif',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

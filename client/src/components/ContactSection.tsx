/**
 * ContactSection Component
 * Contact form section - "GET A FREE QUOTE" CTA + form fields.
 * CHANGE: Removed the before/during/after image as requested.
 * SEO: Proper heading hierarchy (h2), semantic form labels, aria attributes.
 */
import { useState } from "react";
import { MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const contactMutation = trpc.contact.submit.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await contactMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      toast.success("Thank you! Your message has been sent. We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: "#f0f4f5" }}
      aria-label="Contact us for a free painting quote"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p
            className="text-sm uppercase tracking-[3px] mb-3"
            style={{
              color: "#00ff00",
              fontFamily: '"Open Sans", sans-serif',
              fontWeight: 600,
            }}
          >
            // GET IN TOUCH //
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              color: "#0d1b2a",
            }}
          >
            Request a Free Quote<span style={{ color: "#e74c3c" }}>.</span>
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{
              fontFamily: '"Open Sans", sans-serif',
              color: "#666",
            }}
          >
            Get in touch with our team for a no-obligation quote on your painting project. We service all areas across Melbourne.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="tel:0439731898"
            className="inline-flex items-center gap-3 px-10 py-5 text-white text-base font-semibold uppercase tracking-wider transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: "#e74c3c",
              fontFamily: '"Open Sans", sans-serif',
              textDecoration: "none",
            }}
          >
            <Phone size={20} />
            CALL 0439 731 898
          </a>
          <a
            href="mailto:jkbpaintings@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 text-sm font-semibold uppercase tracking-wider border-2 transition-all duration-300 hover:bg-gray-800 hover:text-white hover:border-gray-800"
            style={{
              color: "#0d1b2a",
              borderColor: "#0d1b2a",
              fontFamily: '"Open Sans", sans-serif',
              textDecoration: "none",
            }}
          >
            <MessageSquare size={20} />
            EMAIL US
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  color: "#0d1b2a",
                }}
              >
                Name <span style={{ color: "#e74c3c" }}>*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
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
                htmlFor="contact-email"
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  color: "#0d1b2a",
                }}
              >
                Email <span style={{ color: "#e74c3c" }}>*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
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
                htmlFor="contact-message"
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  color: "#0d1b2a",
                }}
              >
                Comment or Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-400 transition-colors disabled:opacity-50"
                disabled={contactMutation.isPending}
                style={{ fontFamily: '"Open Sans", sans-serif' }}
              />
            </div>
            <button
              type="submit"
              disabled={contactMutation.isPending}
              className="px-8 py-3 text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#e74c3c",
                fontFamily: '"Open Sans", sans-serif',
              }}
            >
              {contactMutation.isPending ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/**
 * FaqSection Component
 * Frequently Asked Questions with expandable accordion items.
 * SEO: Matches the JSON-LD FAQPage schema in index.html.
 * Proper heading hierarchy (h2 for section, h3 for each question).
 */
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What areas do you service in Melbourne?",
    answer:
      "We service all areas across Melbourne and surrounding suburbs, including St Albans, Sunshine, Footscray, Werribee, Melton, and the broader western and northern suburbs. If you're unsure whether we cover your area, give us a call and we'll be happy to help.",
  },
  {
    question: "How much does a painting job cost?",
    answer:
      "Every project is unique. We provide free, no-obligation quotes based on the size of the area, surface condition, and paint type. Contact us at 0439731898 for a personalised estimate tailored to your specific needs.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, we offer completely free quotes with no obligation. Simply call us or fill out the contact form on our website and we will get back to you promptly with a detailed estimate.",
  },
  {
    question: "What types of paint do you use?",
    answer:
      "We use premium quality paints from trusted Australian brands including Dulux and Taubmans. We select the right paint type for each surface to ensure durability and a professional finish that lasts for years.",
  },
  {
    question: "How long does a typical painting job take?",
    answer:
      "Timeframes depend on the project scope. A single room typically takes 1–2 days, while a full house exterior may take 3–5 days. We always provide a clear timeline before starting work so you know exactly what to expect.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, JK Bairava Painting Service is fully licensed and insured. We carry public liability insurance and all our painters are experienced professionals. You can trust us to deliver safe, high-quality work on your property.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: "#ffffff" }}
      aria-label="Frequently asked questions about our painting services"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm uppercase tracking-[3px] mb-3"
            style={{
              color: "#00ff00",
              fontFamily: '"Open Sans", sans-serif',
              fontWeight: 600,
            }}
          >
            // FAQ //
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              color: "#0d1b2a",
            }}
          >
            Frequently Asked Questions
            <span style={{ color: "#e74c3c" }}>.</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 overflow-hidden transition-all duration-300"
              style={{
                borderLeft: openIndex === index ? "4px solid #e74c3c" : "4px solid transparent",
              }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3
                  className="text-base md:text-lg pr-4"
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontWeight: 600,
                    color: "#0d1b2a",
                  }}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: "#e74c3c",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? "300px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    color: "#666",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

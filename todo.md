# TODO: Single-Page SEO Website Conversion

- [x] Update index.html with SEO meta tags (title, description, keywords, Open Graph, Twitter Card, canonical)
- [x] Add JSON-LD structured data (LocalBusiness schema + FAQPage schema) for Google rich results
- [x] Remove the before/during/after image from ContactSection
- [x] Add About section (with id="about") so the nav link works
- [x] Add FAQ section (with id="faq") so the nav link works
- [x] Ensure all sections have proper semantic HTML (section, article, nav, header, footer, h1-h6 hierarchy)
- [x] Ensure proper heading hierarchy (single h1 in hero, h2 for sections, h3 for sub-items)
- [x] Add alt text to all images for accessibility/SEO
- [x] Verify all nav links scroll smoothly to correct sections (smooth scroll CSS added)
- [x] Test the complete single-page flow
- [x] Configure Gmail credentials (GMAIL_USER and GMAIL_PASSWORD)
- [x] Integrate contact form with tRPC backend
- [x] Write and run vitest tests for contact submission

## New Features (Round 3)

- [ ] Create /thank-you page for Google Ads conversion tracking
- [ ] Update contact form to redirect to /thank-you after successful submission
- [ ] Register /thank-you route in App.tsx
- [ ] Build blog section with painting tips articles
- [ ] Build before/after case study posts
- [ ] Add blog route /blog and individual post route /blog/:slug
- [ ] Add Blog link to navigation

## New Features (Round 4)

- [x] Add Epoxy Floor Painting service to ServicesSection (5 total services)
- [x] Add Roof Restoration service to ServicesSection
- [x] Update section intro to mention color consultation specialization
- [x] Test services display and styling
- [ ] Save checkpoint with new services

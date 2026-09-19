## Initial build — Ilias Derbouz personal site

**Goal:** a working, presentable personal website built from Ilias's CV, ready to show recruiters as part of his job search. This is the base pass; visual design and layout get revisited in a follow-up phase.

**Approach:** a static single-page site (plain HTML/CSS/JS, no framework or build step). Reasoning: the content changes rarely, there's no need for a backend, and a static page is the simplest thing to host anywhere (GitHub Pages, Netlify, Vercel, or any web host) and the cheapest to keep restyling in the design phase. Rejected a framework (React/Vue/etc.) as unnecessary weight for a single content page at this stage — nothing here stops migrating later if the site grows (e.g. a blog, a multi-page structure).

**Content, mapped from the CV:**
- Hero: name, title ("Hospitality Management Graduate"), headshot (extracted from the CV), short profile blurb, contact chips (phone, email, location), a "Download CV" button (the original PDF, hosted alongside the site).
- About: the CV's profile paragraph.
- Experience: all 5 roles, in the CV's own order, each with dates, employer, location, and bullet responsibilities.
- Education: both entries.
- Skills & Languages: the 3 listed skills as tags; the 5 languages with proficiency labels.
- Certifications: the 1 listed certification.
- References: **assumption flagged below.**
- Footer/contact: email, phone, location, copyright.

**Assumption to flag:** the CV's References section lists named referees with their direct work email addresses. A CV handed privately to one employer is different from a public website anyone can find — publishing other people's personal contact details publicly risks spam for them without their say. I'm defaulting to showing referee **names and titles only**, with "available on request" in place of raw emails. Easy to change if Ilias wants the emails public.

**Visual direction (placeholder for now, real design pass comes later):** navy + gold, echoing the CV's own existing banner/script-heading colors, since that's already his personal branding — clean sans-serif body, a serif/script accent for section labels, generous whitespace. Nothing final here; this is a reasonable starting point, not a design decision.

**Out of scope for this pass:** multi-page structure, animations beyond basic scroll/nav polish, a contact form backend (a `mailto:` link only), a CMS, final brand/visual design.

**Acceptance criteria:**
- Opens correctly as a static file or from any static host.
- Responsive from phone to desktop.
- Every CV fact represented accurately (no invented content).
- Headshot displays; CV PDF downloads.
- Phone/email are tappable (`tel:`/`mailto:`) links.

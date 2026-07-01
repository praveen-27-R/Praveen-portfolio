# Praveen Kumar R — Portfolio

A glassmorphism, data-driven React portfolio. Every piece of content
(profile, education, skills, projects, internships, certificates,
socials, nav) lives in `src/data/*.js` — components never hardcode
content, so updating the site means editing a data file, not JSX.

## Run it

This was built in a sandboxed environment with no internet access, so
it has **not** been installed or run yet. On your machine:

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build      # production build
npm run preview    # preview the production build locally
```

## How to update content (the whole point of this architecture)

| To change...               | Edit this file              |
|-----------------------------|------------------------------|
| Name, bio, stats, resume link | `src/data/profile.js`     |
| Education entries           | `src/data/education.js`     |
| Skills & categories         | `src/data/skills.js`        |
| Projects                    | `src/data/projects.js`      |
| Internships                 | `src/data/internships.js`   |
| Certificates                | `src/data/certificates.js`   |
| Social/contact links        | `src/data/socials.js`        |
| Nav menu items               | `src/data/navigation.js`    |
| Site-wide settings/theme     | `src/data/config.js`        |

To add a new project, internship, or certificate: open the relevant
data file and add a new object to the array, following the shape of
the existing entries. The UI picks it up automatically — no component
edits needed.

## Folder structure

```
src/
  data/            content-only files (the source of truth)
  components/
    ui/             generic reusable primitives (Button, GlassCard, Reveal, SectionHeading)
    layout/         site-wide chrome (Navbar, Footer, AmbientBackground, CustomCursor, LoadingScreen)
    sections/       one component per homepage section
  hooks/            useLenis (smooth scroll), useReveal (scroll-in animation)
  styles/           global CSS (Tailwind directives + base styles)
  App.jsx           composes layout + sections
  main.jsx          React entry point
```

## What's real vs. placeholder

**Real, from your resume:** name, roles, education timeline (B.E. ECE,
HSC, SSLC with your CGPA/percentage), skills list, all 5 projects
(Digital Alarm Clock, Smart Door Lock, Tech Dining System, MedTech
Startup Website, ECE Modern Portfolio), the NIT Trichy internship, and
all 5 certificate titles.

**Placeholders you should fill in** (search for `placeholder` comments
in `src/data/*.js`):
- GitHub repo links and live demo URLs for each project (`src/data/projects.js`)
- Your actual GitHub/LinkedIn URLs and email (`src/data/socials.js`)
- Resume PDF link (`src/data/profile.js`)
- School names for HSC/SSLC (`src/data/education.js`)
- Internship dates/exact role title (`src/data/internships.js`)
- Certificate issuers/dates/images (`src/data/certificates.js`)
- Project/certificate images — currently render as empty glass
  placeholders since no image assets were provided

## What's built in this pass

Home/Hero, About, Education, Skills, Projects (with modal), Internships,
Certificates, Contact — plus shared chrome: navbar (glass, scroll-hide,
scroll-progress, mobile menu), footer, loading screen, custom cursor,
and the cursor-tracking ambient background.

## What's not built yet

Services, Achievements, Testimonials, 404 page, command palette
(Ctrl+K), React Router multi-page routing, GSAP scroll-triggered
sequences, and Three.js/R3F elements from the original brief. These are
additive — happy to build them next once you've confirmed this
foundation looks right.

## Note on verification

Dependencies could not be installed in the build environment (no
network access), so this has been checked via static analysis only:
JSX syntax validation, Tailwind class auditing, and import-path
resolution — all passed. It has not been run in an actual browser yet.
If `npm run dev` throws an error, share the exact message and it can be
fixed immediately.

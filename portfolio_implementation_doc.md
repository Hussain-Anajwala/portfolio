# Portfolio Website — Implementation Doc for Codex

**Owner:** Hussain Fakruddin Anajwala
**Base codebase:** downloaded from equaan.dev (inspiration site — DevOps/Cloud themed)
**Goal:** Re-skin and re-content the downloaded codebase into an AI/ML-focused personal portfolio for Hussain. Keep the parts of the engineering (animations, layout system, responsiveness, component structure) that are already solid — replace everything content-related and adjust the visual identity so it doesn't read as a copy of the inspiration site.

> Note for Codex: I (Claude) could not render equaan.dev's JS bundle, so I don't have its exact DOM/section order. Before making changes, **inspect the downloaded repo's file/component structure first** (README, `src/components` or equivalent, page sections) and map the plan below onto whatever structure already exists, rather than assuming file names. The inspiration site is dark-themed (GitHub dark, `#0d1117` base) with a DevOps/terminal aesthetic — use that as a structural reference only, not a content or brand reference.

---

## 1. Non-negotiables (why we're forking, not cloning)

- **Do not reuse**: the friend's name, initials/logo mark, @equaan handle, meta tags, og-image, favicon, or any DevOps/Cloud/Kubernetes-specific copy or iconography.
- **Do reuse**: layout scaffolding, animation/transition patterns, responsive breakpoints, dark-mode theming system, section-scroll or nav behavior, contact form logic (if present) — anything structural/functional.
- **Differentiate the visual identity**: same dark-mode instinct is fine, but shift the accent color and iconography away from "terminal/Kubernetes/cloud" toward something that reads AI/ML — e.g. keep the dark base but move the accent from cloud-blue toward a violet/teal/electric-green associated with ML tooling, and swap any terminal/CLI motifs for something like neural-net nodes, subtle grid/graph motifs, or a more editorial type-driven look. Codex should propose 2–3 accent options and I'll confirm.

---

## 2. Site structure (sections, in order)

1. **Hero**
2. **About**
3. **Skills**
4. **Projects**
5. **Experience** (internships)
6. **Education & Achievements**
7. **Certifications**
8. **Contact**

If the existing repo has a different section order or extra sections (e.g. a blog/writing section, testimonials), keep the extra sections but leave them empty/hidden or ask me before deleting — don't silently remove functionality.

---

## 3. Content — copy directly from here

### 3.1 Hero
- **Name:** Hussain Fakruddin Anajwala
- **Tagline (role positioning):** "AI/ML Engineer in the making — Computer Vision, GenAI & Full-Stack AI Systems" (Codex may propose 1-2 alt phrasings, but keep it AI/ML-first, not "aspiring developer" generic)
- **Sub-line:** Final-year Computer Engineering student (AI & ML specialization, Generative AI honours) at Vidyalankar Institute of Technology, Mumbai. Building end-to-end AI applications — from Computer Vision pipelines to RAG systems to production full-stack apps.
- **Location:** Mumbai, Maharashtra
- **Primary CTA buttons:** "View Projects", "Download Resume" (link to resume PDF — Codex should add the resume file to `/public` or equivalent and wire the button to it), "Contact Me"
- **Socials:** GitHub, LinkedIn, LeetCode (get exact URLs from me before hardcoding — placeholders for now)

### 3.2 About
Short bio (rewrite in the site's existing voice/length, but must include these facts):
- Final-year B.Tech Computer Engineering student at Vidyalankar Institute of Technology, Mumbai (2023–2027), CGPA 8.935/10.
- Specializing in AI & ML, with an Honours track in Generative AI.
- Hands-on experience building production-ready Computer Vision, Generative AI, and full-stack AI applications.
- Comfortable across the stack: PyTorch, FastAPI, React, LangChain, RAG pipelines.
- Currently interning at Cloud Counselage Pvt. Ltd. (Global Professional Internship Program).
- Actively looking for AI/ML and SDE internships for 2026–27.

### 3.3 Skills
Group into categories (use whatever skill-grid/pill component already exists in the repo):

| Category | Items |
|---|---|
| Languages | Python, JavaScript, TypeScript, Java, C, C++ |
| AI/ML | PyTorch, YOLOv8n, EfficientNet-B4, CLIP, Whisper, LangChain, LangGraph, LLaVA, ChromaDB, Scikit-learn |
| Web | React.js, FastAPI, Node.js, Express.js, REST APIs |
| Databases | MongoDB Atlas, SQL, SQLite |
| Tools | Git, GitHub, Postman, Vercel, Cloudinary |
| Core CS | DSA, OOP, DBMS, Operating Systems, Computer Networks |

### 3.4 Projects
Use whatever project-card component exists (image/screenshot, title, tagline, tech tags, GitHub link, live-demo link if any). Three projects, in this order (most recent first):

**1. CropScan — Explainable AI Crop Disease Detection Platform** (Apr 2026)
- Tags: Computer Vision, EfficientNet-B4, Grad-CAM, LangChain, ChromaDB, LLaVA, FastAPI, React
- Description bullets:
  - End-to-end Computer Vision pipeline using EfficientNet-B4 with transfer learning, classifying 16 crop disease classes.
  - Explainable diagnosis pipeline via Grad-CAM for interpretability and prediction transparency.
  - RAG-based advisory system (LangChain + ChromaDB + LLaVA multimodal LLM) generating grounded treatment recommendations.
  - Deployed with FastAPI backend + React frontend for real-time inference.
- Links: GitHub (placeholder — insert real URL)

**2. Savour — AI-Powered Multimodal Recipe Discovery Platform** (Apr 2026)
- Tags: YOLOv8n, CLIP, Whisper, spaCy, ChromaDB, MongoDB Atlas, JWT/RBAC
- Description bullets:
  - Multimodal recipe discovery: image, voice, and text-based ingredient search.
  - Ingredient detection via YOLOv8n + CLIP ViT-B/32; voice search via OpenAI Whisper + spaCy.
  - Semantic recommendation engine using all-MiniLM-L6-v2 embeddings + ChromaDB for personalized recommendations.
  - Automated dietary classification (facebook/bart-large-mnli); 15+ REST APIs with JWT auth, RBAC, MongoDB Atlas, deployed on Vercel.
- Links: GitHub + Live Demo (placeholders — insert real URLs)

**3. E-Commerce Intelligence Suite — Predictive Analytics Platform** (Nov 2025)
- Tags: Pandas, NumPy, Apriori, ARIMA, Streamlit, Plotly
- Description bullets:
  - Processed and analyzed 100K+ transaction records with Pandas/NumPy.
  - Apriori association rule mining + ARIMA forecasting for cross-selling and inventory demand prediction.
  - Interactive analytics dashboard (Streamlit + Plotly) visualizing sales trends and forecasts.
- Links: GitHub (placeholder)

### 3.5 Experience
- **Cloud Counselage Pvt. Ltd.** — Intern, Global Professional Internship Program (current)

### 3.6 Education
- **Vidyalankar Institute of Technology, Mumbai** — B.Tech, Computer Engineering (2023–2027)
- Specialization: Artificial Intelligence & Machine Learning; Honours: Generative AI
- CGPA: 8.935/10

### 3.7 Achievements
- Maintained a cumulative CGPA of 8.935/10 while specializing in AI & ML.
- Completed the Larsen & Toubro Residential Machine Learning Program (supervised learning, regression, classification, data preprocessing).
- Built multiple end-to-end AI applications spanning Computer Vision, Recommendation Systems, Multimodal AI, and RAG.

### 3.8 Certifications
- Tata — GenAI Powered Data Analytics Job Simulation, Forage (Jul 2026)
- Machine Learning Training Program, Larsen & Toubro Residential Program (Jun 2025)
- Software Testing with Generative AI, Simplilearn (Sep 2025)
- Artificial Intelligence for Business, Simplilearn (Sep 2025)
- Big Data, Infosys Springboard (Aug 2025)

### 3.9 Contact
- Email: husainanajwala786@gmail.com
- Phone: +91 8149664653 (only include if the existing template shows phone number publicly — otherwise skip; ask me)
- GitHub / LinkedIn / LeetCode links (placeholders — confirm exact URLs with me)
- Keep whatever contact form / mailto behavior already exists in the repo; just repoint it to the above.

---

## 4. Metadata / SEO

Replace all inspiration-site metadata with Hussain's:
- `title`: "Hussain Anajwala | AI/ML Engineer & Computer Engineering Student"
- `meta-description`: "Final-year Computer Engineering student specializing in AI & ML. Building Computer Vision, Generative AI, and full-stack AI applications. Open to AI/ML & SDE internships."
- `meta-keywords`: AI/ML intern, Computer Vision, Generative AI, RAG, PyTorch, FastAPI, React, LangChain, Mumbai, Computer Engineering student
- `og:image` / `twitter:image`: needs a new custom OG image (do not reuse the original) — flag this as an open item if no replacement asset is provided
- `theme-color`: keep dark (`#0d1117` or the new accent-adjusted dark value from section 1)
- `canonical`: update to Hussain's eventual domain (placeholder until domain is decided)
- Remove `twitter:site` (was tied to friend's handle) unless Hussain sets up his own

---

## 5. Functional requirements

- Fully responsive (mobile/tablet/desktop) — preserve whatever responsive system the repo already has.
- Resume download button wired to the actual PDF (I'll provide the file).
- All external links (GitHub/LinkedIn/LeetCode/live demos) open in a new tab.
- Preserve any existing animations/transitions, dark mode toggle (if present), and accessibility attributes (alt text, aria labels) — just update the content inside them.
- No DevOps/cloud-specific UI copy or iconography should remain anywhere (check nav labels, footer, any easter eggs/console logs, README).

## 6. Open items Codex should flag back to me, not guess

1. Exact GitHub/LinkedIn/LeetCode URLs
2. Whether to keep phone number public in Contact section
3. Final accent color choice (propose options)
4. Whether an OG image / favicon replacement is available, or needs to be generated separately
5. Domain name for canonical URL (if not yet decided, use a placeholder and note it)

---

## 7. Suggested Codex workflow

1. Inspect repo structure fully before editing (component tree, content/config files, where copy currently lives — likely a `content`/`data` file, CMS-like JSON, or hardcoded JSX).
2. Do a full find-and-replace pass for the friend's identity (name, handles, meta, links, images) — remove entirely before adding new content, so nothing is accidentally left in production.
3. Swap in the content from Section 3, section by section.
4. Apply the accent/theme adjustment from Section 1.
5. Update metadata per Section 4.
6. Run through Section 5's functional checklist.
7. Report back the Section 6 open items instead of guessing.

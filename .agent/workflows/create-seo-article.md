---
description: Create a fully optimized, long-form (1500+ words) SEO blog post in HEBREW with PHOTOREALISTIC imagery and HUMAN tone.
---

1. **Autonomous Topic Selection**:
   - **Trigger**: Did the user provide a "Topic"?
   - **If YES**: Use that topic.
   - **If NO**:
     - Read `src/data/articles.json` to analyze existing coverage.
     - **DECIDE** on a high-potential trend topic related to Reflexology, holistic health, or specific ailments (e.g., "Reflexology for Migraines", "Stress Relief Techniques", "Foot Map Explained").
     - **Goal**: Create the definitive guide in **Hebrew** for this topic.

2. **Deep Research & Linking Strategy**:
   - **Internal Blog Links**: Select 3-5 existing blog posts from `articles.json` to link to.
   - **Conversion Links (CRITICAL)**:
     - **MANDATORY**: Include at least one link to `/contact` (Appointment) or `/testimonials` with a call to action.
     - Example text: "רוצים לחוות את הטיפול בעצמכם? צרו קשר עוד היום" (Want to experience the treatment yourself? Contact us today).
   - **External Authority Links (COMBINED APPROACH)**:
     - **MANDATORY**: Add 1-2 external links per article for SEO credibility.
     - **International Sources** (High Domain Authority):
       - Mayo Clinic, WHO, NIH, Harvard Health, Sleep Foundation, APA
       - Use for medical/scientific credibility and global SEO signals.
     - **Israeli Sources** (Local Relevance):
       - `health.gov.il` (משרד הבריאות) - mental health, sleep, general health
       - `clalit.co.il` / `maccabi4u.co.il` - medical information in Hebrew
       - Use for local SEO signals and Hebrew user experience.
     - **Best Practice**: Include BOTH an international AND Israeli source when possible.
     - **Technical**: Always use `target="_blank" rel="noopener noreferrer"` for external links.

3. **Visuals & Infographics Strategy**:
   - **Plan**: Design **2+** distinct HTML/CSS "Infographic" zones.
     - *Examples*: Comparison Tables (Reflexology vs Massage), "Benefits List", "Tip Box".
     - These must be coded directly into the JSX using styled `divs`/`tables`.
   - **Key Visuals**:
     - **Hero Image**: Plan a prompt for `generate_image`. Theme: Spa, Calm, Nature, Flowers, Feet (aesthetic, not medical).
     - **Alt Text**: All images must have Hebrew alt text.

4. **Execution - Hebrew Article**:
   - **File**: `src/pages/posts/[PascalCaseTopic].js`
   - **Language**: **HEBREW ONLY**.
   - **Length**: **1,500+ WORDS**. Deep, comprehensive content.
   - **Style Rules (ZERO TOLERANCE)**:
     - ❌ **NO "AI Patterns"**:
       - Phrases: "In conclusion" (לסיכום), "It is important to note" (חשוב לציין), "Delve into" (נצלול), **"Ancient solution" (פתרון עתיק יומין)**.
       - Punctuation: **NO Em-dashes ("–")**. Use standard Hebrew commas or colons.
     - ✅ **Tone**: Empathetic, Professional, Warm. Speak directly to the patient/reader.
   - **Structure**:
     - Use standard React Functional Component.
     - **Imports**:
       ```javascript
       import React from "react";
       import DesktopNavbar from "../../Components/DesktopNavbar";
       import MobileNavbar from "../../Components/MobileNavBar";
       import Footer from "../../Components/Footer"; // Check path consistency
       import { Helmet } from "react-helmet"; // If used for SEO headers
       import { useMediaQuery } from "react-responsive";
       import "./[Topic].css"; // If specific CSS is needed, or use inline/App.css
       ```
     - **Layout**: Check existing posts (e.g., `src/pages/posts/Balance.js`) and COPY that structure (Navbar switching, Helmet, Content Container).

5. **Visual Asset Generation**:
   - **Make Image**: Run `generate_image`.
   - **Prompt**: **Lifestyle photography**, cozy home atmosphere, 35mm film grain, soft focus, realistic textures, [Topic Specific Elements]. **AVOID**: Shiny "AI" look, generic spa renders, perfect symmetry.
   - **Save to**: `public/[slug].webp` (Use WebP for performance).

6. **Component Integration**:
   - **App.js**:
     - `import [PascalCaseTopic] from "./pages/posts/[PascalCaseTopic]";`
     - Add route: `<Route path="/[kebab-case-slug]" element={<[PascalCaseTopic] />} />`
   - **articles.json**:
     - Add entry:
       ```json
       {
         "id": [NextInteger],
         "title": "[Hebrew Title]",
         "link": "/[kebab-case-slug]"
       }
       ```

7. **Verification**:
   - Run `npm run build` to ensure no import errors.
   - **Verify Routing**: Ensure the new route matches what was added to `App.js`.
   - **Verify Links**: Check that internal links point to valid routes defined in `App.js`.

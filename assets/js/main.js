/* =====================================================================
   SITE CONFIG — edit these values
   ===================================================================== */
const SITE = {
  email: "brijpant88@gmail.com",
  phone: "+919711101482",          // used for the tel: link and WhatsApp (wa.me needs digits only)
  phoneDisplay: "+91 97111 01482",
  linkedin: "https://www.linkedin.com/in/brij-pant-ba8000a4/",
  github: "" // e.g. "https://github.com/your-username" — hidden until set (not in resume)
};

/* =====================================================================
   PROJECTS — add new projects here. One object per project.
   - url:    live site (card opens it in a new tab)
   - image:  optional. Local path (assets/images/x.jpg) or any image URL.
             Leave "" to auto-fetch a screenshot of `url` (see SCREENSHOT below).
   - github: optional repo URL
   - demo:   set true for placeholder entries (shows a "Demo" badge)
   Screenshots are saved in assets/images/projects/. Category = platform the site was built on.
   ===================================================================== */
const projects = [
  {
    title: "Moris Media",
    description: "Website for a PR and strategic marketing agency based in Faridabad, built as a responsive Laravel front-end integration.",
    url: "https://www.morismedia.in/",
    github: "",
    image: "assets/images/projects/morismedia.jpg",
    technologies: ["Laravel","HTML5","CSS3","Responsive UI"],
    category: "Laravel"
  },
  {
    title: "International News Express",
    description: "News portal front end built on Next.js (React), covering world, business and entertainment sections.",
    url: "https://internationalnewsexpress.com/",
    github: "",
    image: "assets/images/projects/internationalnewsexpress.jpg",
    technologies: ["Next.js","React.js","JavaScript"],
    category: "Next.js"
  },
  {
    title: "Redlink Group",
    description: "Corporate website for a Qatar-based survey, trading and contracting company.",
    url: "https://redlinkgroup.com/",
    github: "",
    image: "assets/images/projects/redlinkgroup.jpg",
    technologies: ["WordPress","HTML5","CSS3","Responsive UI"],
    category: "WordPress"
  },
  {
    title: "Sarmat",
    description: "Dubai typing center and PRO services website with a clean, responsive Laravel-integrated front end.",
    url: "https://sarmat.ae/",
    github: "",
    image: "assets/images/projects/sarmat.jpg",
    technologies: ["Laravel","HTML5","CSS3","Responsive UI"],
    category: "Laravel"
  },
  {
    title: "Mind Rewire",
    description: "Website for a psychologist and therapy practice, with a calm, clear layout and booking call-to-action.",
    url: "https://mind-rewire.com/",
    github: "",
    image: "assets/images/projects/mind-rewire.jpg",
    technologies: ["Laravel","HTML5","CSS3","Responsive UI"],
    category: "Laravel"
  },
  {
    title: "Victoryline",
    description: "UAE financial consultation and introducing-broker website with a pixel-perfect, responsive UI.",
    url: "https://victoryline.ae/",
    github: "",
    image: "assets/images/projects/victoryline.jpg",
    technologies: ["Laravel","HTML5","CSS3","Responsive UI"],
    category: "Laravel"
  },
  {
    title: "Mind Digital",
    description: "Corporate website for a web development and digital marketing agency, built on WordPress.",
    url: "https://minddigital.com/",
    github: "",
    image: "assets/images/projects/minddigital.jpg",
    technologies: ["WordPress","HTML5","CSS3","Responsive UI"],
    category: "WordPress"
  },
  {
    title: "Kusum Healthcare",
    description: "Corporate website for a pharmaceutical brand, with product and careers sections on WordPress.",
    url: "https://kusumhealthcare.com/",
    github: "",
    image: "assets/images/projects/kusumhealthcare.jpg",
    technologies: ["WordPress","HTML5","CSS3","Responsive UI"],
    category: "WordPress"
  },
  {
    title: "Vedaan",
    description: "Health supplements brand website with a product-focused, mobile-friendly storefront layout.",
    url: "https://vedaan.com/",
    github: "",
    image: "assets/images/projects/vedaan.jpg",
    technologies: ["WordPress","HTML5","CSS3","Responsive UI"],
    category: "WordPress"
  },
  {
    title: "Eugenix Hair Sciences",
    description: "Hair transplant clinic website with treatment, results and location pages.",
    url: "https://eugenixhairsciences.com/",
    github: "",
    image: "assets/images/projects/eugenixhairsciences.jpg",
    technologies: ["WordPress","HTML5","CSS3","Responsive UI"],
    category: "WordPress"
  },
  {
    title: "Koita",
    description: "Organic dairy and plant-based milk brand website for the UAE market.",
    url: "https://www.koita.com/",
    github: "",
    image: "assets/images/projects/koita.jpg",
    technologies: ["Shopify","HTML5","CSS3","Responsive UI"],
    category: "Shopify"
  },
  {
    title: "Eye-Q India",
    description: "Eye hospital network website with doctors, locations and appointment booking.",
    url: "https://www.eyeqindia.com/",
    github: "",
    image: "assets/images/projects/eyeqindia.jpg",
    technologies: ["WordPress","HTML5","CSS3","Responsive UI"],
    category: "WordPress"
  },
  {
    title: "Clove Dental",
    description: "Dental clinic network website with clinic locator, treatments and appointment booking.",
    url: "https://clovedental.in/",
    github: "",
    image: "assets/images/projects/clovedental.jpg",
    technologies: ["WordPress","HTML5","CSS3","Responsive UI"],
    category: "WordPress"
  },
  {
    title: "CosmeSurge",
    description: "Plastic surgery and aesthetic clinics website for the UAE, with specialists and locations.",
    url: "https://www.cosmesurge.com/",
    github: "",
    image: "assets/images/projects/cosmesurge.jpg",
    technologies: ["WordPress","HTML5","CSS3","Responsive UI"],
    category: "WordPress"
  },
  {
    title: "Market99",
    description: "Home, kitchen and décor e-commerce storefront with category navigation and sale banners.",
    url: "https://market99.com/",
    github: "",
    image: "assets/images/projects/market99.jpg",
    technologies: ["Shopify","HTML5","CSS3","Responsive UI"],
    category: "Shopify"
  }
];

/* Screenshot workflow: browsers can't capture cross-origin pages, so we use a
   screenshot service. Swap the template to use another provider (thum.io,
   Microlink, your own API...). If it fails, a clean placeholder is shown. */
const SCREENSHOT = (u) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(u)}?w=1200&h=750`;

/* =====================================================================
   Static data
   ===================================================================== */
const skills = [
  // item = [label, simpleicons brand slug (or null), fallback icon key from SK_ICONS]
  { t: "Front-End", ic: "‹›", items: [["HTML5", "html5", "code"], ["CSS3", "css", "palette"], ["JavaScript", "javascript", "code"], ["jQuery", "jquery", "code"], ["AI-Proven Experience", null, "sparkle"], ["React.js", "react", "atom"]] },
  { t: "Styling", ic: "#", items: [["Bootstrap 5", "bootstrap", "grid"], ["SCSS", "sass", "palette"], ["Responsive Design", null, "devices"], ["CSS3 Animations", null, "play"], ["CSS3 Grid & Flexbox", null, "grid"]] },
  { t: "Development", ic: "⚙", items: [["Component-Based Architecture", null, "cube"], ["API Integration", null, "plug"], ["Cross-Browser Compatibility", null, "globe"], ["Performance Optimization", null, "gauge"], ["Clean, Maintainable Code", null, "braces"], ["Pixel-Perfect UI", null, "target"]] },
  { t: "CMS & Platforms", ic: "◧", items: [["WordPress", "wordpress", "layers"], ["Laravel Integration", "laravel", "layers"], ["Magento 2", "magento", "bag"], ["HTML5 Email Templates", null, "mail"], ["Admin Dashboards", null, "dash"]] },
  { t: "Tools", ic: "✎", items: [["Git", "git", "branch"], ["GitHub", "github", "branch"], ["VS Code", null, "window"], ["Photoshop", null, "image"], ["Illustrator (basic)", null, "pen"], ["CorelDRAW (basic)", "coreldraw", "pen"]] },
  { t: "AI & Modern Development", ic: "✦", items: [["AI-assisted coding", null, "terminal"], ["AI-powered design-to-code", null, "wand"], ["AI-assisted debugging", null, "bug"], ["Agentic dev workflows", null, "bot"], ["Modern frontend workflows", null, "refresh"]] }
];

const SK_ICONS = {
  code: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
  palette: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-1-.9-1.2-.9-2.2 0-.9.7-1.4 1.6-1.4H17a4 4 0 0 0 4-4C21 6.8 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="15" cy="7.5" r="1"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z"/>',
  atom: '<circle cx="12" cy="12" r="1.8"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  devices: '<rect x="2" y="5" width="14" height="10" rx="2"/><rect x="14" y="9" width="8" height="12" rx="2"/><path d="M6 19h6"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5 3.5-5 3.5z"/>',
  cube: '<path d="M12 2 3 7v10l9 5 9-5V7zM3 7l9 5 9-5M12 12v10"/>',
  plug: '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  gauge: '<path d="M4 18a9 9 0 1 1 16 0M12 14l4-5"/><circle cx="12" cy="14" r="1.2"/>',
  braces: '<path d="M8 4c-2 0-3 1-3 3v2c0 1.5-1 3-3 3 2 0 3 1.500 3 3v2c0 2 1 3 3 3M16 4c2 0 3 1 3 3v2c0 1.500 1 3 3 3-2 0-3 1.500-3 3v2c0 2-1 3-3 3"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.500"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5M3 17.500l9 5 9-5"/>',
  bag: '<path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  dash: '<rect x="3" y="3" width="18" height="18" rx="2.500"/><path d="M3 9h18M9 21V9M13 13h5M13 17h5"/>',
  branch: '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 7v10M18 10c0 5-12 2-12 7"/>',
  window: '<rect x="3" y="4" width="18" height="16" rx="2.500"/><path d="M3 9h18M8 14l-2 2 2 2M12 18l2-2-2-2"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2.500"/><circle cx="9" cy="10" r="1.800"/><path d="m21 16-5-5-9 9"/>',
  pen: '<path d="m12 3 7 7-2 8-8 3 3-8zM9 17l-4 4M12 12.500l.5.5"/><circle cx="12" cy="12" r="1"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2.500"/><path d="m7 10 3 2.500L7 15M13 15h4"/>',
  wand: '<path d="m4 20 11-11M14 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.500 1.500.7-1.500.7L19 16.500l-.7-1.600-1.500-.7 1.500-.7z"/>',
  bug: '<path d="M9 7a3 3 0 0 1 6 0M7 10h10v4a5 5 0 0 1-10 0zM3 10l4 2M21 10l-4 2M3 18l4-2M21 18l-4-2M12 10v9"/>',
  bot: '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M9 13v1.500M15 13v1.500M2 13v3M22 13v3"/><circle cx="12" cy="3.500" r="1"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.700M21 4v5h-5"/>'
};
const skIcon = (k) => `<svg class="chip-svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${SK_ICONS[k] || SK_ICONS.code}</svg>`;

const I = {
  code: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
  react: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
  devices: '<rect x="2" y="5" width="14" height="10" rx="2"/><rect x="14" y="9" width="8" height="12" rx="2"/><path d="M6 19h6"/>',
  ui: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/>',
  wp: '<circle cx="12" cy="12" r="9"/><path d="M3.5 9h6l3 8 3-8h5M8 9l3 8"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/>',
  ai: '<path d="M12 3l1.800 5.200L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800zM19 16l.7 2.300L22 19l-2.300.7L19 22l-.7-2.300L16 19l2.300-.7z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  rocket: '<path d="M5 15c-1 1-2 4-2 6 2 0 5-1 6-2M14 4c4-2 7-1 7-1s1 3-1 7l-6 6-5-5zM9 14l-3-1 2-4h4"/>'
};
const services = [
  ["Front-End Development", "Clean, scalable HTML5, CSS3/SCSS and JavaScript — built to be fast and easy to maintain.", I.code],
  ["AI-Proven Development", "AI-assisted coding, debugging and design-to-code workflows that speed up delivery, with human review on every line.", I.ai],
  ["Responsive Website Development", "Layouts that look and feel right on every screen, tested across browsers.", I.devices],
  ["Website UI Implementation", "Figma, XD or PSD designs converted into pixel-perfect, production-ready interfaces.", I.ui],
  ["WordPress Theme Customization", "Custom theme integration and tweaks, optimized for speed and editors.", I.wp],
  ["Website Redesign & Optimization", "Modernize legacy front ends and improve performance, usability and consistency.", I.refresh],
  ["Landing Page Development", "Focused, animated, fast-loading pages designed to convert.", I.rocket],
  ["Email Template (Emailer) Design", "Professional, responsive HTML5 email templates built with email-client compatibility in mind.", I.mail],
  ["React.js Development", "Reusable components and interactive single-page interfaces with React.", I.react]
];

const ICONS = {
  phone:'<path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.300 0 .7-.2 1z"/>',
  whatsapp:'<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>',
  github: '<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/>',
  linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-1.85 3.76-1.85 4 0 4.78 2.55 4.78 5.88v5.47h-4v-4.85c0-1.16-.02-2.65-1.7-2.65-1.7 0-1.96 1.26-1.96 2.57v4.93h-4z"/>',
  mail: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.5 2 7.5 5.5L19.5 7z"/>'
};

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* =====================================================================
   Renderers
   ===================================================================== */
function renderLinks() {
  const links = [];
  if (SITE.github) links.push(["GitHub", SITE.github, ICONS.github]);
  if (SITE.linkedin) links.push(["LinkedIn", SITE.linkedin, ICONS.linkedin, "View LinkedIn Profile"]);
  if (SITE.email) links.push(["Email", `mailto:${SITE.email}`, ICONS.mail, SITE.email]);
  if (SITE.phone) {
    const digits = SITE.phone.replace(/\D/g, "");
    links.push(["Phone", `tel:${SITE.phone}`, ICONS.phone, SITE.phoneDisplay || SITE.phone]);
    links.push(["WhatsApp", `https://wa.me/${digits}`, ICONS.whatsapp, "Chat on WhatsApp"]);
  }
  const wa = $("#waFloat");
  if (wa && SITE.phone) {
    const msg = encodeURIComponent("Hi Brij, I visited your portfolio and would like to discuss a project.");
    wa.href = `https://wa.me/${SITE.phone.replace(/\D/g, "")}?text=${msg}`;
    $("svg", wa).innerHTML = ICONS.whatsapp;
  } else if (wa) wa.remove();
  const ext = (h) => (h.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : "");
  const socialHTML = links.map(([n, h, p]) =>
    `<li><a href="${esc(h)}" aria-label="${n}" title="${n}" ${ext(h)}><svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg></a></li>`).join("");
  $$("[data-social]").forEach((el) => (el.innerHTML = socialHTML));
  // Contact cards: LinkedIn, Email, Phone (WhatsApp lives in the floating button + social icons)
  $("[data-contact]").innerHTML = links.filter(([n]) => n !== "WhatsApp").map(([n, h, p, label]) =>
    `<li><a href="${esc(h)}" ${ext(h)}><svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg><span><small>${n}</small>${esc(label || h.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))}</span></a></li>`).join("");
}

function renderSkills() {
  $("#skillsGrid").innerHTML = skills.map((g, i) => `
    <div class="col-md-6 col-xl-4 reveal" style="--d:${i * .08}s">
      <div class="skill-card">
        <h3><i aria-hidden="true">${g.ic}</i>${g.t}</h3>
        <div class="chips">${g.items.map(([n, slug, key]) =>
    `<span class="chip" data-k="${key}">${slug ? `<img src="https://cdn.simpleicons.org/${slug}/38BDF8" alt="" width="18" height="18" loading="lazy">` : skIcon(key)}${n}</span>`).join("")}
        </div>
      </div>
    </div>`).join("");
  // brand icon failed to load (or not offered by the CDN)? swap in the matching line icon so every chip has an icon
  $$(".chip img").forEach((img) => {
    const swap = () => img.replaceWith(Object.assign(document.createElement("span"), { innerHTML: skIcon(img.closest(".chip").dataset.k) }).firstChild);
    img.addEventListener("error", swap);
    if (img.complete && img.naturalWidth === 0) swap();
  });
  $$(".skill-card").forEach((c) => c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  }));
}

function renderServices() {
  $("#servicesGrid").innerHTML = services.map(([t, d, ic], i) => `
    <div class="col-md-6 col-lg-4 reveal" style="--d:${(i % 3) * .1}s">
      <article class="service"><span class="s-num">0${i + 1}</span>
        <div class="s-ic"><svg viewBox="0 0 24 24" aria-hidden="true">${ic}</svg></div>
        <h3>${t}</h3><p>${d}</p></article>
    </div>`).join("");
}

function thumbHTML(p) {
  const src = p.image || (p.url ? SCREENSHOT(p.url) : "");
  const host = p.url ? p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "") : "No URL set";
  return `<div class="p-fallback"><b>${esc(p.title.charAt(0))}</b><span>${esc(host)}<br>Loading preview…</span></div>` +
    (src ? `<img src="${esc(src)}" alt="Website preview of ${esc(p.title)}" loading="lazy" decoding="async" width="1200" height="750">` : "");
}

function renderProjects() {
  const grid = $("#projectGrid");
  grid.innerHTML = projects.map((p, i) => {
    const hasUrl = !!p.url;
    const tag = hasUrl ? "a" : "div";
    const attrs = hasUrl ? `href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(p.title)} — open live website in a new tab"` : "";
    return `<div class="col-md-6 col-xl-4 project-wrap reveal" data-cat="${esc(p.category)}" style="--d:${(i % 3) * .1}s">
      <${tag} class="project" ${attrs}>
        <div class="p-thumb"><span class="p-cat">${esc(p.category)}</span>${p.demo ? '<span class="p-demo">Demo</span>' : ""}${thumbHTML(p)}</div>
        <div class="p-body">
          <span class="p-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></span>
          <h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
          <div class="p-tags">${(p.technologies || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        </div>
      </${tag}>
      ${p.github ? `<a class="p-gh" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : ""}
    </div>`;
  }).join("");

  $$(".p-thumb img", grid).forEach((img) => {
    const base = img.src; let tries = 0;
    img.addEventListener("load", () => {
      // mshots returns a 400x300 "Generating Preview" image first; re-poll until the real shot (>=1000px) is ready.
      if (base.includes("mshots") && img.naturalWidth < 1000 && tries++ < 8) {
        return setTimeout(() => { img.src = `${base}&r=${tries}`; }, 3500);
      }
      if (img.naturalWidth >= 1000 || !base.includes("mshots")) { img.classList.add("loaded"); $(".p-fallback", img.parentNode)?.remove(); }
    });
    img.addEventListener("error", () => img.remove());
  });

  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  const f = $("#projectFilters");
  f.innerHTML = cats.map((c, i) => `<button type="button" class="${i ? "" : "active"}" data-f="${esc(c)}">${esc(c)}</button>`).join("");
  f.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    $$("button", f).forEach((x) => x.classList.toggle("active", x === b));
    $$(".project-wrap", grid).forEach((w) => { w.style.display = b.dataset.f === "All" || w.dataset.cat === b.dataset.f ? "" : "none"; });
  });
}

/* =====================================================================
   Interactions
   ===================================================================== */
function splitText() {
  $$("[data-split]").forEach((el) => {
    let i = 0;
    const walk = (node) => [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((tok) => {
          if (!tok) return;
          if (/^\s+$/.test(tok)) return frag.append(" ");
          const w = document.createElement("span"); w.className = "w";
          w.innerHTML = `<span style="--i:${i++}">${esc(tok)}</span>`; frag.append(w);
        });
        n.replaceWith(frag);
      } else walk(n);
    });
    walk(el);
    if (el.classList.contains("hero-title")) el.style.setProperty("--d0", ".35s");
  });
}

function observeReveals() {
  const targets = $$(".reveal, [data-split], .t-item");
  if (reduce || !("IntersectionObserver" in window)) return targets.forEach((t) => t.classList.add("in"));
  // Replays every time an element enters the viewport (like AOS once:false) and resets when it leaves.
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    e.target.classList.toggle("in", e.isIntersecting);
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  targets.forEach((t) => io.observe(t));
}

function counters() {
  const els = $$("[data-count]");
  const raf = new WeakMap();
  const run = (el) => {
    const end = +el.dataset.count;
    cancelAnimationFrame(raf.get(el));
    if (reduce) return (el.textContent = end);
    const t0 = performance.now(), dur = 1600;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf.set(el, requestAnimationFrame(tick));
    };
    raf.set(el, requestAnimationFrame(tick));
  };
  // count up every time the number scrolls into view; reset to 0 when it leaves
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) run(e.target);
    else { cancelAnimationFrame(raf.get(e.target)); e.target.textContent = 0; }
  }), { threshold: 0.6 });
  els.forEach((e) => io.observe(e));
}

function nav() {
  const header = $(".site-header"), list = $("#navLinks"), toggle = $("#navToggle"), ind = $(".nav-indicator");
  const links = $$("a", list);
  const sections = links.map((a) => $(a.getAttribute("href")));
  const moveTo = (a) => {
    if (!a || getComputedStyle(ind).display === "none") return;
    ind.style.opacity = 1;
    ind.style.width = a.offsetWidth + "px";
    ind.style.transform = `translateX(${a.offsetLeft}px)`;
  };
  let current = links[0];
  const setActive = (a) => { current = a; links.forEach((l) => l.classList.toggle("active", l === a)); moveTo(a); };
  const spy = () => {
    const y = scrollY + innerHeight * 0.35;
    let idx = 0;
    sections.forEach((s, i) => { if (s && s.offsetTop <= y) idx = i; });
    if (links[idx] !== current) setActive(links[idx]);
  };
  addEventListener("resize", () => moveTo(current));
  links.forEach((a) => a.addEventListener("mouseenter", () => moveTo(a)));
  list.addEventListener("mouseleave", () => moveTo(current));
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.forEach((a) => a.addEventListener("click", () => { list.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { list.classList.remove("open"); toggle.setAttribute("aria-expanded", false); } });

  const bar = $(".scroll-progress"), tl = $(".timeline");
  let ticking = false;
  const onScroll = () => {
    header.classList.toggle("scrolled", scrollY > 20);
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    spy();
    if (tl) {
      const r = tl.getBoundingClientRect();
      const p = Math.min(Math.max((innerHeight * 0.65 - r.top) / r.height, 0), 1);
      tl.style.setProperty("--tl", p * 100 + "%");
      const mark = innerHeight * 0.65;
      $$(".t-dot", tl).forEach((d) => d.classList.toggle("done", d.getBoundingClientRect().top < mark));
    }
    if (!reduce) $$("[data-parallax]").forEach((el) => {
      const k = parseFloat(el.dataset.parallax);
      if (scrollY < innerHeight * 1.5) el.style.transform = `translateY(${scrollY * k}px)`;
    });
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  setActive(links[0]); onScroll();
  document.fonts?.ready.then(() => moveTo(current));
}

function cursorGlow() {
  const g = $(".cursor-glow");
  if (reduce || matchMedia("(hover:none)").matches) return;
  let x = 0, y = 0, tx = 0, ty = 0;
  addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
  (function loop() { x += (tx - x) * 0.12; y += (ty - y) * 0.12; g.style.transform = `translate(${x}px,${y}px)`; requestAnimationFrame(loop); })();
}

function backToTop() {
  const b = $("#toTop"); if (!b) return;
  const C = 2 * Math.PI * 22, ring = $(".to-top-ring circle", b);
  ring.style.strokeDasharray = C;
  let t = false;
  const upd = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    b.classList.toggle("show", scrollY > 500);
    ring.style.strokeDashoffset = C * (1 - (max > 0 ? Math.min(scrollY / max, 1) : 0));
    t = false;
  };
  addEventListener("scroll", () => { if (!t) { t = true; requestAnimationFrame(upd); } }, { passive: true });
  b.addEventListener("click", (e) => { e.preventDefault(); scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });
  upd();
}

/* =====================================================================
   Init
   ===================================================================== */
renderLinks(); renderSkills(); renderServices(); renderProjects();
$("#year").textContent = new Date().getFullYear();
splitText(); observeReveals(); counters(); nav(); cursorGlow(); backToTop();

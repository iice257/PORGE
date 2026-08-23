import Image from "next/image";
import "./system.css";

export const metadata = {
  title: "The System — PORGÉ Case Study",
  description:
    "Palette, typography, and shape language extracted from the redesigned PORGÉ storefront.",
};

const palette = [
  { hex: "#FFFFFF", name: "Paper", role: "Default background. The store is mostly air.", dark: false },
  { hex: "#000000", name: "Ink", role: "Text, primary buttons, the wordmark.", dark: true },
  { hex: "#383838", name: "Slate", role: "Inverse sections — quiet, not pure black.", dark: true },
  { hex: "#F2F2F2", name: "Hairline", role: "Borders so thin they read as structure, not lines.", dark: false },
  { hex: "#8B0000", name: "Error", role: "The only saturated red allowed — and only when something is wrong.", dark: false },
];

export default function System() {
  return (
    <main className="page-shell">
      <section className="section" style={{ marginTop: "clamp(3rem, 8vw, 6rem)" }}>
        <div className="section-head">
          <span className="label">The system</span>
          <h1 className="section-title">
            Every value below is lifted from the live theme. Nothing is
            approximate.
          </h1>
        </div>
        <p className="body-copy">
          A redesign is only as good as its constraints. These are the
          PORGÉ storefront&rsquo;s — pulled straight from the shipped CSS, the
          same values the store renders with on every visit.
        </p>
      </section>

      {/* ---- palette ---- */}
      <section className="section">
        <div className="section-head">
          <span className="label">01 — Palette</span>
          <h2 className="section-title">Five colours. Two do all the work.</h2>
        </div>
        <div className="swatch-grid">
          {palette.map((c) => (
            <div key={c.hex} className="swatch">
              <div
                className={`swatch-chip ${c.dark ? "swatch-chip--dark" : ""}`}
                style={{ backgroundColor: c.hex }}
              />
              <div className="swatch-meta">
                <span className="swatch-name">{c.name}</span>
                <span className="swatch-hex">{c.hex}</span>
                <p className="swatch-role">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- typography ---- */}
      <section className="section">
        <div className="section-head">
          <span className="label">02 — Typography</span>
          <h2 className="section-title">
            A display serif that whispers, a workhorse sans that labels.
          </h2>
        </div>
        <div className="type-specimen">
          <div className="type-row">
            <span className="label type-tag">Newsreader · 200 · display</span>
            <p className="specimen-display display">Heavyweight fabric.</p>
          </div>
          <div className="type-row">
            <span className="label type-tag">Newsreader · 200 · heading</span>
            <p className="specimen-heading display">Structured cuts.</p>
          </div>
          <div className="type-row">
            <span className="label type-tag">Red Hat Text · 400 · body</span>
            <p className="specimen-body">
              Every design is intentional. Every graphic carries memory.
              Heritage is treated as living reference — evolving, worn
              forward, never nostalgic.
            </p>
          </div>
          <div className="type-row">
            <span className="label type-tag">Red Hat Text · 400 · label</span>
            <p className="specimen-label label">Availability &nbsp;&nbsp; Price &nbsp;&nbsp; Sort &nbsp;&nbsp; 11 items</p>
          </div>
        </div>
        <table className="scale-table">
          <thead>
            <tr>
              <th className="label">Step</th>
              <th className="label">Size</th>
              <th className="label">Line height</th>
              <th className="label">Used for</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>paragraph</td><td>0.75rem</td><td>1.6</td><td>labels, meta, captions</td></tr>
            <tr><td>sm</td><td>0.875rem</td><td>1.6</td><td>nav links, buttons</td></tr>
            <tr><td>md</td><td>1rem</td><td>1.4–1.6</td><td>body copy</td></tr>
            <tr><td>lg</td><td>1.125rem</td><td>1.6</td><td>long-form reading</td></tr>
            <tr><td>xl → display</td><td>fluid clamp()</td><td>1.05–1.2</td><td>headlines, hero copy</td></tr>
          </tbody>
        </table>
      </section>

      {/* ---- shape language ---- */}
      <section className="section">
        <div className="section-head">
          <span className="label">03 — Shape</span>
          <h2 className="section-title">
            Pill for people. Square for precision.
          </h2>
        </div>
        <div className="shape-demo">
          <div className="shape-block">
            <span className="pill-link">Add to bag</span>
            <span className="shape-note">
              Interactive elements get the pill — 100px radius, black on
              white. Soft where the hand lands.
            </span>
          </div>
          <div className="shape-block">
            <span className="square-input">Search the store</span>
            <span className="shape-note">
              Inputs and popovers stay square — 0px radius. Sharp where
              information lives.
            </span>
          </div>
        </div>
      </section>

      {/* ---- layout anatomy ---- */}
      <section className="section">
        <div className="section-head">
          <span className="label">04 — Anatomy</span>
          <h2 className="section-title">
            The landing page, annotated.
          </h2>
        </div>
        <p className="body-copy">
          Hero split for the wordmark. Categories immediately after — the
          deliberate exhale. Then, and only then, commerce.
        </p>
        <ol className="anatomy-list">
          <li>
            <span className="label">Hero</span>
            <p>
              Two photographs split at centre, wordmark on the seam. Nav
              pushed to the edges so the composition stays untouched.
            </p>
          </li>
          <li>
            <span className="label">Categories</span>
            <p>
              Maximum negative space. Serif line, hover animation, one
              contrasting product per category.
            </p>
          </li>
          <li>
            <span className="label">Collections &amp; showcases</span>
            <p>
              Product photography given full-bleed moments; editorial shots
              (Las Vegas, No Chaos Only Order) treated as campaign, not
              catalogue.
            </p>
          </li>
          <li>
            <span className="label">Heavyweight banner</span>
            <p>
              The gaze section — copy in the negative space, figure walking
              toward the Shop link.
            </p>
          </li>
          <li>
            <span className="label">Footer</span>
            <p>
              Quiet sign-off. Email capture, nothing shouting.
            </p>
          </li>
        </ol>
        <figure className="anatomy-figure">
          <Image
            src="/design/hero-landing.png"
            alt="Full landing page of the redesigned storefront"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 90vw"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption className="label">
            The full landing scroll — every section in its intended order.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

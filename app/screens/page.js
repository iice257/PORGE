import Image from "next/image";
import "./screens.css";

export const metadata = {
  title: "Screens | PORGÉ Case Study",
  description:
    "Every page of the redesigned PORGÉ storefront, end to end.",
};

const groups = [
  {
    page: "Landing",
    note: "The scroll as designed: split hero, categories exhale, campaign moments, the heavyweight banner, quiet footer.",
    shots: [
      { src: "hero-landing.png", cap: "The hero. Two photographs, one seam, the wordmark on the split." },
      { src: "categories-landing.png", cap: "Categories, the intentional breather. Negative space, serif lines, one contrasting product each." },
      { src: "tank-top-showcase-landing.png", cap: "Tank top showcase. The Las Vegas shot treated as campaign, not catalogue." },
      { src: "collection-landing.png", cap: "Collection moment. Full-bleed imagery, copy kept to a whisper." },
      { src: "branding-card-landing.png", cap: "The heavyweight banner. Figure bottom-right, walking toward the Shop link." },
      { src: "rooted-man-slider-landing.png", cap: "Rooted Man slider. The graphic tee given a gallery, not a grid cell." },
      { src: "footer-landing.png", cap: "Footer. Email capture, hairline borders, nothing shouting." },
    ],
  },
  {
    page: "Store",
    note: "Commerce pages: the archive, the product grid, and the paths between them.",
    shots: [
      { src: "collections.png", cap: "Collections index. Each drop announced, never listed." },
      { src: "products.png", cap: "Product archive. Eleven items, hairline dividers, filters that stay out of the way." },
      { src: "stitched-hoodie-products.png", cap: "Contrast-stitched fleece. The stitching detail is the photography brief." },
      { src: "suggestions-products.png", cap: "Suggestions. Editorial pairings rather than an algorithmic dump." },
      { src: "checkout-products.png", cap: "Checkout path. Square inputs, pill actions. Precision and people." },
    ],
  },
  {
    page: "Pages",
    note: "The connective tissue: contact, about.",
    shots: [
      { src: "contact.png", cap: "Contact. One form, one address, no theatre." },
      { src: "about.png", cap: "About. The logo, the philosophy, and out. Nobody wants the brand history essay." },
    ],
  },
];

export default function Screens() {
  return (
    <main className="page-shell">
      <section className="section" style={{ marginTop: "clamp(2.5rem, 6vw, 4.5rem)" }}>
        <div className="section-head">
          <span className="label">The screens</span>
          <h1 className="section-title">
            Every page, end to end. Fourteen captures, no filler.
          </h1>
        </div>
        <p className="body-copy">
          The store is private, so this is the walkthrough. Real captures from
          the shipped site, each with the decision behind it.
        </p>
      </section>

      {groups.map((group) => (
        <section key={group.page} className="section">
          <div className="section-head">
            <span className="label">{group.page}</span>
            <p className="group-note">{group.note}</p>
          </div>
          <div className="shot-list">
            {group.shots.map((shot) => (
              <figure key={shot.src} className="shot">
                <Image
                  src={`/design/${shot.src}`}
                  alt={shot.cap}
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 90vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <figcaption className="label">{shot.cap}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

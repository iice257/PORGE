import Image from "next/image";
import Link from "next/link";
import "./home.css";

export const metadata = {
  title: "PORGÉ — A Storefront, Redesigned",
};

export default function Home() {
  return (
    <main>
      {/* ---- hero: the split, replicated ---- */}
      <section className="hero" aria-label="Introduction">
        <div className="hero-split">
          <div className="hero-half">
            <Image
              src="/assets/hero-left.jpg"
              alt="Model in a contrast-stitched black zip hoodie, black and white"
              fill
              priority
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>
          <div className="hero-half">
            <Image
              src="/assets/hero-right.jpg"
              alt="Model in a white Rooted Man t-shirt seated on a bathroom sink"
              fill
              priority
              sizes="50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <img
            src="/assets/logo-white.png"
            alt="PORGÉ"
            className="hero-logo"
          />
        </div>
        <div className="page-shell hero-intro">
          <p className="label">A storefront, redesigned</p>
          <h1 className="display hero-title">
            Some sites need a redesign.
            <br />
            This one needed a rescue.
          </h1>
        </div>
      </section>

      {/* ---- the brief ---- */}
      <section className="section page-shell">
        <div className="section-head">
          <span className="label">01 — The brief</span>
          <h2 className="section-title">Client work, start to finish.</h2>
        </div>
        <div className="brief-grid">
          <p className="body-copy">
            PORGÉ is a UK-based streetwear label rooted in African heritage —
            cowries, coral beads, diaspora identity, heavyweight fabric. The
            founder came to me with a Shopify store that, frankly, was working
            against everything the brand stood for. Poor hierarchy, dead
            whitespace, imagery fighting itself. It is genuinely hard to make
            Shopify look bad. This store had managed it.
          </p>
          <p className="body-copy">
            I was brought in to steady the ship: store setup, product data,
            the unglamorous plumbing. But I have never met a storefront I
            could leave alone, and this one needed more than a tidy-up. So
            alongside the setup work, I rebuilt the front end on the Atelier
            theme — then kept going, section by section, until every pixel
            earned its place.
          </p>
          <p className="body-copy">
            What follows is the part I can show: the system behind the design,
            the decisions that shaped it, and the screens that came out the
            other side. The store itself stays private for now — its founder
            is not ready to lift the curtain — so this page stands in for the
            link I cannot yet share.
          </p>
        </div>
        <dl className="brief-facts">
          <div>
            <dt className="label">Role</dt>
            <dd>Design &amp; build, store setup</dd>
          </div>
          <div>
            <dt className="label">Platform</dt>
            <dd>Shopify — Atelier theme, heavily reworked</dd>
          </div>
          <div>
            <dt className="label">Status</dt>
            <dd>Private — pre-launch</dd>
          </div>
        </dl>
      </section>

      {/* ---- breakthrough one: the split hero ---- */}
      <section className="section page-shell">
        <div className="section-head">
          <span className="label">02 — First stroke</span>
          <h2 className="section-title">
            The logo needed the stage. No single photo would give it up.
          </h2>
        </div>
        <p className="body-copy">
          A fashion brand&rsquo;s hero should lead with its mark. But the PORGÉ
          logotype — that serif wordmark with a cowrie shell for an O — needs
          calm on both axes to sit centered. Every asset we had was too busy,
          too cropped, or too literal. Nothing worked.
        </p>
        <p className="body-copy" style={{ marginTop: "1.5rem" }}>
          So I stopped looking for one image and used two, split clean down
          the middle: the hooded portrait on the left, the Rooted Man scene on
          the right. The seam lands exactly under the logo&rsquo;s centre line.
          The first time I saw it render, it was a breath of fresh air — the
          tension between the two photographs is what holds the wordmark up.
        </p>
        <figure className="breakthrough-figure">
          <div className="hero-split hero-split--demo">
            <div className="hero-half">
              <Image
                src="/assets/hero-left.jpg"
                alt=""
                fill
                sizes="50vw"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
            </div>
            <div className="hero-half">
              <Image
                src="/assets/hero-right.jpg"
                alt=""
                fill
                sizes="50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <img src="/assets/logo-white.png" alt="" className="hero-logo" />
          </div>
          <figcaption className="label">
            Two photographs, one seam, one wordmark. The nav steps aside: links
            hard left, actions hard right, so the split never fights the
            chrome.
          </figcaption>
        </figure>
      </section>

      {/* ---- breakthrough two: the categories breather ---- */}
      <section className="section page-shell">
        <div className="section-head">
          <span className="label">03 — Second stroke</span>
          <h2 className="section-title">
            Right below the loudest section: the quietest.
          </h2>
        </div>
        <p className="body-copy">
          Most stores slam a product grid into the scroll the second the hero
          ends. PORGÉ breathes instead. The categories section sits
          immediately below the hero on purpose — vast negative space, a
          serif line of text, a soft hover animation, and a single example
          product per category, chosen to contrast hard against the white
          page. It reads as confidence. The clothes do the selling.
        </p>
        <figure className="breakthrough-figure">
          <Image
            src="/design/categories-landing.png"
            alt="The categories section: generous whitespace, serif text, one contrasting product image"
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 90vw"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption className="label">
            Negative space as a design material, not an absence.
          </figcaption>
        </figure>
      </section>

      {/* ---- breakthrough three: the gaze ---- */}
      <section className="section page-shell">
        <div className="section-head">
          <span className="label">04 — Third stroke</span>
          <h2 className="section-title">
            My favourite section on the site. For one specific reason.
          </h2>
        </div>
        <p className="body-copy">
          The &ldquo;Heavyweight fabric. Structured cuts. Nothing
          accidental.&rdquo; banner went through more iterations than
          anything else on the store. The photograph was right — a figure in
          black, mid-stride through fog — but every layout I tried fought it.
        </p>
        <div className="gaze-grid">
          <figure className="gaze-item">
            <Image
              src="/assets/heavyweight-original.jpg"
              alt="Early attempt: the figure centered, composition unresolved"
              width={1364}
              height={768}
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption className="label">Before — centred, going nowhere</figcaption>
          </figure>
          <figure className="gaze-item">
            <Image
              src="/assets/heavyweight-final.png"
              alt="Final: the figure placed bottom right, walking toward the Shop link"
              width={1250}
              height={800}
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption className="label">After — walking toward the Shop link</figcaption>
          </figure>
        </div>
        <p className="body-copy" style={{ marginTop: "1.5rem" }}>
          The fix was to stop composing and start directing. Push the figure
          to the bottom-right corner, mid-stride, heading off-frame — and put
          the Shop link exactly where he is walking. No underline, no bold, no
          button. He carries the click. The copy sits in the negative space he
          abandoned. It is the subtlest call-to-action I have ever built and
          still the one I am proudest of.
        </p>
      </section>

      {/* ---- onward ---- */}
      <section className="section page-shell onward">
        <div className="onward-cards">
          <Link href="/system" className="onward-card">
            <span className="label">The system</span>
            <span className="display onward-title">Palette, type, shape.</span>
            <span className="quiet-link">See the system</span>
          </Link>
          <Link href="/screens" className="onward-card onward-card--dark">
            <span className="label">The screens</span>
            <span className="display onward-title">Every page, end to end.</span>
            <span className="quiet-link">Walk the store</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

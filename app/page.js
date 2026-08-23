import Image from "next/image";
import Link from "next/link";
import "./home.css";

export const metadata = {
  title: "PORGÉ: A Storefront, Redesigned",
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
          <img src="/assets/logo-white.png" alt="PORGÉ" className="hero-logo" />
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

      {/* ---- 01 · the brief ---- */}
      <section className="section page-shell">
        <div className="split-section">
          <div className="split-copy">
            <span className="label">01 · The brief</span>
            <h2>Hired for setup. Stayed for the rebuild.</h2>
            <p className="body-copy">
              PORGÉ is a UK streetwear label built on African heritage.
              Cowries, coral beads, heavyweight fabric. The founder brought me
              in to rescue a Shopify store that was actively fighting all of
              that. Bad hierarchy, dead space, imagery that refused to get
              along. You honestly have to try to make Shopify look that bad.
            </p>
            <p className="body-copy">
              So alongside the store setup, I rebuilt the front end on the
              Atelier theme. Then kept going, section by section, until every
              pixel earned its place.
            </p>
            <p className="body-copy">
              The store is still private (the founder isn&rsquo;t ready to
              lift the curtain), so this page is the tour I can&rsquo;t link
              to yet.
            </p>
            <dl className="brief-facts">
              <div>
                <dt className="label">Role</dt>
                <dd>Design, build, store setup</dd>
              </div>
              <div>
                <dt className="label">Platform</dt>
                <dd>Shopify, Atelier reworked</dd>
              </div>
              <div>
                <dt className="label">Status</dt>
                <dd>Private, pre-launch</dd>
              </div>
            </dl>
          </div>
          <div className="split-media">
            <Image
              src="/assets/editorial-hoodie.png"
              alt="Editorial shot from the store: a model in a black zip hoodie, low light"
              width={1080}
              height={1620}
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* ---- 02 · first stroke: the split hero ---- */}
      <section className="section page-shell">
        <div className="split-section split-section--flip">
          <div className="split-media">
            <div className="hero-split split-demo">
              <div className="hero-half">
                <Image
                  src="/assets/hero-left.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                />
              </div>
              <div className="hero-half">
                <Image
                  src="/assets/hero-right.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <img src="/assets/logo-white.png" alt="" className="hero-logo" />
            </div>
            <p className="label media-caption">
              Two photographs, one seam, one wordmark
            </p>
          </div>
          <div className="split-copy">
            <span className="label">02 · First stroke</span>
            <h2>No photo deserved center stage. So I used two.</h2>
            <p className="body-copy">
              A fashion hero should lead with the logo. Problem: the wordmark
              needs calm on both sides to sit centered, and every asset we had
              was too busy for it. Cropped weird, too loud, too literal.
            </p>
            <p className="body-copy">
              So I stopped hunting and split the hero in two. Hooded portrait
              left, Rooted Man right, the seam landing dead center under the
              logo. First render felt like a breath of fresh air. The tension
              between the photos is what holds the wordmark up.
            </p>
            <p className="body-copy">
              The nav steps aside too. Links hard left, actions hard right.
              The split owns the middle.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 03 · second stroke: the categories breather ---- */}
      <section className="section page-shell">
        <div className="split-section">
          <div className="split-copy">
            <span className="label">03 · Second stroke</span>
            <h2>Right after the loudest section: the quietest.</h2>
            <p className="body-copy">
              Most stores slam a product grid under the hero. PORGÉ exhales
              instead. Huge negative space, a serif line, soft hover states,
              and one product per category picked specifically to pop against
              the white page.
            </p>
            <p className="body-copy">
              It reads as confidence. The clothes sell themselves. The page
              just gets out of the way.
            </p>
          </div>
          <div className="split-media">
            <div className="media-frame">
              <Image
                src="/design/categories-landing.png"
                alt="The categories section: generous whitespace, serif text, one contrasting product image"
                width={1920}
                height={1080}
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <p className="label media-caption">
              Negative space as a material, not an absence
            </p>
          </div>
        </div>
      </section>

      {/* ---- 04 · third stroke: the gaze ---- */}
      <section className="section page-shell">
        <div className="split-section split-section--flip split-section--even">
          <div className="split-media">
            <Image
              src="/assets/heavyweight-original.jpg"
              alt="Early attempt: the figure centered, composition unresolved"
              width={1364}
              height={768}
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ width: "72%", height: "auto" }}
            />
            <Image
              src="/assets/heavyweight-final.png"
              alt="Final: the figure placed bottom right, walking toward the Shop link"
              width={1250}
              height={800}
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ width: "100%", height: "auto", marginTop: "1.25rem" }}
            />
            <p className="label media-caption">
              Before, then after. Same photo, opposite energy
            </p>
          </div>
          <div className="split-copy">
            <span className="label">04 · Third stroke</span>
            <h2>My favorite section on the site. Not kidding.</h2>
            <p className="body-copy">
              The &ldquo;Heavyweight fabric&rdquo; banner went through more
              iterations than everything else combined. The photo was always
              right: a guy in black, mid-stride through fog. But centered, it
              died. Left-aligned, it died.
            </p>
            <p className="body-copy">
              Then I stopped composing and started directing. Shoved him to
              the bottom right, mid-stride, and put the Shop link exactly
              where he&rsquo;s headed. No underline, no bold, no button. He is
              the call to action. The copy sits in the space he left behind.
            </p>
            <p className="body-copy">
              Subtlest CTA I&rsquo;ve ever shipped. Still my proudest pixel.
            </p>
          </div>
        </div>
      </section>

      {/* ---- onward ---- */}
      <section className="section page-shell">
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

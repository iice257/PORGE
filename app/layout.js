import "./globals.css";
import Nav from "../components/Nav";
import localFont from "next/font/local";

const newsreader = localFont({
  src: [
    { path: "../public/fonts/newsreader-n2.woff2", weight: "200", style: "normal" },
    { path: "../public/fonts/newsreader-i2.woff2", weight: "200", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const redHat = localFont({
  src: [
    { path: "../public/fonts/redhattext-n4.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/redhattext-n7.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://porge.vercel.app"),
  title: "PORGÉ: A Storefront, Redesigned | Case Study",
  description:
    "How a failing Shopify storefront was rescued and redesigned down to the pixel. A style documentary by Kingsley Afolabi Aremu.",
  openGraph: {
    title: "PORGÉ: A Storefront, Redesigned",
    description:
      "A style documentary: palette, typography, layout anatomy, and the decisions behind a private Shopify storefront redesign.",
  },
};

const themeScript = `(function(){try{if(localStorage.getItem("porge-theme")==="light"){document.documentElement.dataset.theme="light"}}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${redHat.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Nav />
        {children}
        <footer className="site-footer">
          <p className="footer-line">
            Freelance client work, designed and built by{" "}
            <a
              href="https://kingsleyaremu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kingsley Afolabi Aremu
            </a>
          </p>
          <p className="footer-line footer-muted">
            The store remains private. Its story lives here.
          </p>
        </footer>
      </body>
    </html>
  );
}

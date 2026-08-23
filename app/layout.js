import "./globals.css";
import Nav from "../components/Nav";
import { Newsreader, Red_Hat_Text } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["200", "300"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const redHat = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://porge-showcase.vercel.app"),
  title: "PORGÉ — A Storefront, Redesigned | Case Study",
  description:
    "How a failing Shopify storefront was rescued and redesigned down to the pixel. A style documentary by Kingsley Afolabi Aremu.",
  openGraph: {
    title: "PORGÉ — A Storefront, Redesigned",
    description:
      "A style documentary: palette, typography, layout anatomy, and the decisions behind a private Shopify storefront redesign.",
    images: ["/assets/hero-left.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${redHat.variable}`}>
      <body>
        <Nav />
        {children}
        <footer className="site-footer">
          <p className="footer-line">
            Freelance client work — designed &amp; built by{" "}
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

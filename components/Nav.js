"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/system", label: "System" },
  { href: "/screens", label: "Screens" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="site-nav">
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="nav-logo" aria-label="PORGÉ — home">
        <img src="/assets/logo-text.png" alt="PORGÉ" />
      </Link>
      <span className="nav-meta">Case study</span>
    </header>
  );
}

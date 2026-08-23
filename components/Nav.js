"use client";

import Link from "next/link";
import { usePathname, } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Overview" },
  { href: "/system", label: "System" },
  { href: "/screens", label: "Screens" },
];

export default function Nav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("porge-theme", next);
    } catch (e) {}
    setTheme(next);
  }

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
      <Link href="/" className="nav-logo" aria-label="PORGÉ, home">
        <img src="/assets/logo-white.png" alt="PORGÉ" />
      </Link>
      <div className="nav-meta">
        <span className="nav-tag">Case study</span>
        <button type="button" className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

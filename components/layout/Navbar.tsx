"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Logo from "@/components/brand/Logo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

function QuishubLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Logo width={136} priority className="block h-9 w-auto" />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "nav-surface-scrolled border-b backdrop-blur-[18px]"
          : "nav-surface-rest border-b border-quishub-border/60"
      )}
    >
      <div className="container-content flex h-16 items-center justify-between md:h-[72px]">
        <QuishubLogo />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-ui text-sm transition-colors duration-200 cursor-pointer",
                pathname === link.href
                  ? "text-quishub-black"
                  : "text-quishub-muted hover:text-quishub-black"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button size="sm">Book a Call</Button>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded p-2 text-quishub-black transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 border-t border-quishub-border bg-quishub-light md:hidden">
          <div className="flex flex-col gap-6 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-ui text-lg transition-colors duration-200",
                  pathname === link.href
                    ? "text-quishub-black"
                    : "text-quishub-muted hover:text-quishub-black"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-4">
              <Button className="w-full">Book a Call</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

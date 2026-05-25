"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/brand/Logo";

/* ------------------------------------------------------------------ */
/*  What We Do mega-menu items — add more entries here later          */
/* ------------------------------------------------------------------ */

const whatWeDoItems = [
  {
    href: "/healthcare?from=quishub",
    label: "Healthcare Workflows",
    description:
      "Focused software fixes that cut administrative burnout and front-desk friction.",
    icon: <MedicalCrossIcon />,
  },
  // Append future items here — same shape, same styling will apply automatically.
  // {
  //   href: "/digital-twins",
  //   label: "AI-Powered Digital Twins",
  //   description: "...",
  //   icon: <YourIcon />,
  // },
];

/* ------------------------------------------------------------------ */
/*  Inline SVG — medical cross inside a soft shield                    */
/* ------------------------------------------------------------------ */

function MedicalCrossIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M12 2.5 4 5.5v6.2c0 4.6 3.2 8.7 8 9.8 4.8-1.1 8-5.2 8-9.8V5.5l-8-3Z" />
      <path d="M12 8.5v6M9 11.5h6" />
    </svg>
  );
}

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

function QuishubLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Logo width={110} priority className="block h-7 md:h-9 w-auto" />
    </Link>
  );
}

interface NavbarProps {
  isDetailsPage?: boolean;
}

export default function Navbar({ isDetailsPage: isDetailsPageProp }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect if we are on a project detail page (fallback to prop if provided)
  const isDetailsPage =
    isDetailsPageProp ?? (pathname.startsWith("/work/") && pathname !== "/work");

  // Is any What-We-Do route currently active?
  const isWhatWeDoActive = whatWeDoItems.some((item) =>
    pathname === item.href || pathname.startsWith(item.href + "/")
  );

  useEffect(() => {
    const handleScroll = () => {
      if (isDetailsPage) {
        setScrolled(true);
        return;
      }
      setScrolled(window.scrollY > 450);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDetailsPage]);

  useEffect(() => {
    setMobileOpen(false);
    setWhatWeDoOpen(false);
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

  // Close dropdown on outside click
  useEffect(() => {
    if (!whatWeDoOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWhatWeDoOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setWhatWeDoOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [whatWeDoOpen]);

  const showSolidNav = scrolled || isDetailsPage;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-700 ease-in-out pointer-events-none",
          showSolidNav ? "pt-4 px-3 md:px-4" : "pt-0 px-0"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-black/5 to-transparent dark:from-black/40 transition-opacity duration-700 ease-in-out",
            showSolidNav ? "opacity-0" : "opacity-100"
          )}
        />

        <nav
          className={cn(
            "pointer-events-auto flex items-center justify-between transition-all duration-700 ease-in-out w-full relative",
            showSolidNav
              ? "max-w-5xl h-14 md:h-16 px-4 md:px-8 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "container-content h-20 md:h-24 px-6 md:px-12 bg-transparent border-transparent"
          )}
        >
          <div className="text-slate-900 dark:text-white transition-colors duration-500">
            <QuishubLogo />
          </div>

          <div
            className={cn(
              "hidden md:flex items-center gap-1 p-1 rounded-full transition-all duration-700 ease-in-out",
              showSolidNav
                ? "bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/5 backdrop-blur-md"
                : ""
            )}
          >
            {/* ============================================== */}
            {/*  WHAT WE DO — dropdown trigger                 */}
            {/* ============================================== */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setWhatWeDoOpen(!whatWeDoOpen)}
                onMouseEnter={() => setWhatWeDoOpen(true)}
                className={cn(
                  "font-ui text-sm px-5 py-2 rounded-full transition-all duration-500 cursor-pointer relative group inline-flex items-center gap-1.5",
                  isWhatWeDoActive || whatWeDoOpen
                    ? "text-slate-900 dark:text-white font-bold"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                )}
                aria-expanded={whatWeDoOpen}
                aria-haspopup="true"
              >
                {(isWhatWeDoActive || whatWeDoOpen) && (
                  <span className="absolute inset-0 rounded-full bg-white/80 dark:bg-white/10 shadow-sm -z-10" />
                )}
                {!isWhatWeDoActive && !whatWeDoOpen && (
                  <span className="absolute inset-0 rounded-full bg-white/0 dark:bg-white/0 group-hover:bg-white/40 dark:group-hover:bg-white/5 transition-colors duration-300 -z-10" />
                )}
                What We Do
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-300",
                    whatWeDoOpen ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>

              {/* Dropdown panel */}
              <div
                onMouseLeave={() => setWhatWeDoOpen(false)}
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[340px] origin-top rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.18)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 z-50",
                  whatWeDoOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}
              >
                {/* Caret */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-white dark:bg-slate-900 border-l border-t border-slate-200 dark:border-white/10" />

                <div className="relative p-2">
                  {whatWeDoItems.map((item) => {
                    const isActive =
                      pathname === item.href || pathname.startsWith(item.href + "/");
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setWhatWeDoOpen(false)}
                        className={cn(
                          "group flex items-start gap-3.5 rounded-xl p-3.5 transition-all duration-300",
                          isActive
                            ? "bg-gradient-to-br from-[#7c3aed]/8 to-[#2563eb]/8"
                            : "hover:bg-slate-50 dark:hover:bg-white/5"
                        )}
                      >
                        {/* Icon tile */}
                        <span
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                            isActive
                              ? "border-transparent bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white"
                              : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#7c3aed] group-hover:to-[#2563eb] group-hover:text-white"
                          )}
                        >
                          {item.icon}
                        </span>

                        {/* Text */}
                        <div className="flex-1 min-w-0 pt-0.5">
                          <div
                            className={cn(
                              "font-ui text-sm font-semibold transition-colors duration-300",
                              isActive
                                ? "text-slate-900 dark:text-white"
                                : "text-slate-900 dark:text-white group-hover:text-[#2563eb] dark:group-hover:text-[#a78bfa]"
                            )}
                          >
                            {item.label}
                          </div>
                          <div className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-snug">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ============================================== */}
            {/*  Existing simple links                          */}
            {/* ============================================== */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-ui text-sm px-5 py-2 rounded-full transition-all duration-500 cursor-pointer relative group",
                    isActive
                      ? "text-slate-900 dark:text-white font-bold"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/80 dark:bg-white/10 shadow-sm -z-10" />
                  )}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/0 dark:bg-white/0 group-hover:bg-white/40 dark:group-hover:bg-white/5 transition-colors duration-300 -z-10" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-[0_4px_14px_rgba(124,58,237,0.3)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative flex items-center gap-2 px-6 py-2.5 text-sm text-white font-ui">
                Book a Call{" "}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-2 text-slate-900 dark:text-white transition-colors duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* ============================================== */}
      {/*  MOBILE MENU                                    */}
      {/* ============================================== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl md:hidden pt-24 px-6 pb-6 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-2">
            {/* Mobile — What We Do collapsible */}
            <div className="py-4 border-b border-slate-200 dark:border-white/5">
              <div className="font-ui text-2xl text-slate-900 dark:text-white font-semibold mb-4">
                What We Do
              </div>
              <div className="flex flex-col gap-2 pl-1">
                {whatWeDoItems.map((item) => {
                  const isActive =
                    pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-3 rounded-xl p-3 transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-br from-[#7c3aed]/10 to-[#2563eb]/10"
                          : "hover:bg-slate-50 dark:hover:bg-white/5"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                          isActive
                            ? "border-transparent bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white"
                            : "border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300"
                        )}
                      >
                        {item.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-ui text-base font-semibold text-slate-900 dark:text-white">
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 leading-snug mt-0.5">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Existing mobile links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-ui text-2xl transition-all duration-300 py-4 border-b border-slate-200 dark:border-white/5",
                  pathname === link.href
                    ? "text-slate-900 dark:text-white font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-[#2563eb]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="group relative flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(124,58,237,0.3)] w-full mb-8 mt-6"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb]" />
            <span className="relative flex items-center gap-2 px-6 py-4 text-lg text-white font-ui">
              Book a Discovery Call{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      )}
    </>
  );
}

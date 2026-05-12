import Link from "next/link";
import Logo from "@/components/brand/Logo";

function QuishubLogoSmall() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Logo width={144} />
    </Link>
  );
}

const serviceLinks = [
  { href: "/services", label: "AI Integration" },
  { href: "/services", label: "SaaS Development" },
  { href: "/services", label: "Backend Systems" },
  { href: "/services", label: "Automation" },
  { href: "/services", label: "Consulting" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Careers" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-quishub-border bg-quishub-light">
      <div className="container-content pb-8 pt-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] lg:gap-x-16 lg:gap-y-10">
          <div>
            <QuishubLogoSmall />
            <p className="mt-4 text-sm leading-body text-quishub-muted">
              AI product studio building production-ready systems for founders
              and product teams. We&apos;ve shipped across healthcare, legal,
              logistics, and hospitality - and we operate our own products too.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/company/quishub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-quishub-muted transition-colors duration-200 cursor-pointer hover:text-quishub-black"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-ui text-sm font-semibold text-quishub-black">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-quishub-muted transition-colors duration-200 hover:text-quishub-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-ui text-sm font-semibold text-quishub-black">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-quishub-muted transition-colors duration-200 hover:text-quishub-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-ui text-sm font-semibold text-quishub-black">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@quishub.com"
                  className="font-ui text-sm text-quishub-muted transition-colors duration-200 hover:text-quishub-black"
                >
                  hello@quishub.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-ui text-sm text-quishub-muted transition-colors duration-200 hover:text-quishub-black"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-quishub-border pt-6 sm:flex-row">
          <p className="text-xs text-quishub-faint">
            &copy; {currentYear} Quishub. All rights reserved.
          </p>
          <p className="text-xs text-quishub-faint">
            Built with precision. Deployed with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}

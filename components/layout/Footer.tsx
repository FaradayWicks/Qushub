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
  { href: "/services#ai-llm-integration", label: "AI & LLM Integration" },
  { href: "/services#saas-mvp-development", label: "SaaS MVPs" },
  { href: "/services#scalable-backend-systems", label: "Backend Systems" },
  { href: "/services#ai-automation-platforms", label: "AI Automation" },
  { href: "/services#architecture-consulting", label: "Architecture Consulting" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },


];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface px-6 py-16 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-10 border-b border-line pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-[340px]">
            <QuishubLogoSmall />
            <p className="mt-4 text-[14.5px] leading-relaxed text-mute">
              Production-first AI &amp; backend systems. Built with precision. Deployed with purpose.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="mb-1 font-mono text-[11.5px] uppercase tracking-[0.16em] text-mute-2">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14.5px] text-ink-2 transition-colors duration-200 hover:text-brand-g1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="mb-1 font-mono text-[11.5px] uppercase tracking-[0.16em] text-mute-2">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14.5px] text-ink-2 transition-colors duration-200 hover:text-brand-g1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="mb-1 font-mono text-[11.5px] uppercase tracking-[0.16em] text-mute-2">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@quishub.com"
                  className="text-[14.5px] text-ink-2 transition-colors duration-200 hover:text-brand-g1"
                >
                  hello@quishub.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="mt-1 inline-flex items-center justify-center rounded-[10px] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)",
                    boxShadow: "0 10px 24px -14px rgba(124, 58, 237, 0.75)",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2 text-white">Book a call <span className="text-white">→</span></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-6 text-[13px] text-mute-2 sm:flex-row">
          <p>
            &copy; {currentYear} Quishub. All rights reserved.
          </p>
          <p className="font-mono">
            Built with precision. Deployed with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}

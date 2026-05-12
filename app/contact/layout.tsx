import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Quishub",
  description:
    "Book a free discovery call with Quishub to discuss a production-ready AI system, SaaS product, or backend architecture.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

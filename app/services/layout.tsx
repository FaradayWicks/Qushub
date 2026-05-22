import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Quishub",
  description:
    "AI integration, SaaS development, scalable backend systems, automation platforms, data systems, and architecture consulting from Quishub.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

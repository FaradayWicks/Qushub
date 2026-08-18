import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Quishub",
  description:
    "Learn about Quishub, a small senior team building production-ready AI systems with architecture-first engineering.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Quishub",
  description:
    "Case studies from Quishub: production AI systems across legal tech, healthcare, and feedback intelligence.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

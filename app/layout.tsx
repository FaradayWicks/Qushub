import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sora } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeToggle from "@/components/theme/ThemeToggle";
import MouseTracker from "@/components/ui/MouseTracker";
import OctacsTheme from "@/components/OctacsTheme";


const texar = localFont({
  src: [
    {
      path: "../public/fonts/TEXAR.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-texar",
  display: "swap",
});

const ttLakesNeue = localFont({
  src: [
    {
      path: "../public/fonts/TT-Lakes-Neue-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/TT-Lakes-Neue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TT-Lakes-Neue-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/TT-Lakes-Neue-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tt-lakes",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem("quishub-theme");
      var theme = stored === "dark" || stored === "light" ? stored : "light";
      document.documentElement.dataset.theme = theme;
    } catch (e) {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://quishub.com"),
  title: "Quishub - AI Product Studio",
  description:
    "Quishub builds production-ready AI systems for founders and product teams across healthcare, legal, logistics, and hospitality.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "AI product studio",
    "LLM integration",
    "SaaS development",
    "scalable backend",
    "AI agents",
  ],
  openGraph: {
    title: "Quishub - AI Product Studio",
    description:
      "Quishub builds production-ready AI systems for founders and product teams across healthcare, legal, logistics, and hospitality.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quishub - AI Product Studio",
    description:
      "Quishub builds production-ready AI systems for founders and product teams across healthcare, legal, logistics, and hospitality.",
  },
};

const BackgroundMesh = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

    <div 
      className="absolute inset-0" 
      style={{
        backgroundImage: `linear-gradient(to right, color-mix(in oklab, var(--ink) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--ink) 6%, transparent) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
        maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)'
      }} 
    />
  </div>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${texar.variable} ${ttLakesNeue.variable} ${sora.variable} ${GeistMono.variable}`}>
      <body className="font-body">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <BackgroundMesh />

        <MouseTracker />
        <OctacsTheme>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </OctacsTheme>
        <ThemeToggle />

      </body>
    </html>
  );
}

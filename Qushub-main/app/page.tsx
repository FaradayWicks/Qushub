import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import CaseStudy from "@/components/sections/CaseStudy";
import Services from "@/components/sections/Services";
import WhyQuishub from "@/components/sections/WhyQuishub";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <CaseStudy />
      <Services />
      <WhyQuishub />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

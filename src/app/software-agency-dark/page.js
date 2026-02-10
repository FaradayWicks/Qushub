"use client";
import Footer2 from "@/components/Footer/Footer2";
import Home2About from "@/components/about/Home2About";
import Home2BannerSection from "@/components/banner-section/home2-banner-section";
import Home2BlogSection from "@/components/blog-section/home2-blog-section";
import Home2ContactSection from "@/components/contact-section/home2-contact-section";
import Home2CounterArea from "@/components/counter-area-section/home2-counter-area";
import Header2 from "@/components/header/Header2";
import Home2PortfolioSection from "@/components/portfolio-section/home2-portfolio-section";
import Home2ProcessSection from "@/components/process-section/home2-process-section";
import Home2ServicesSection from "@/components/services-section/home2-services-section";
import Home2TechnologySection from "@/components/technology-section/home2-technology-section";
import Home2TestimonialSection from "@/components/testimonial-section/home2-testimonial-section";
import { useEffect } from "react";

const SoftwareAgencyPageDark = () => {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  return (
    <>
      <Header2 />
      <Home2BannerSection />
      <Home2About />
      <Home2ServicesSection />
      <Home2CounterArea />
      <Home2ProcessSection />
      <Home2PortfolioSection />
      <Home2TestimonialSection />
      <Home2TechnologySection />
      <Home2BlogSection />
      <Home2ContactSection />
      <Footer2 />
    </>
  );
};

export default SoftwareAgencyPageDark;

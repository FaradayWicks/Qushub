import Footer4 from "@/components/Footer/Footer4";
import Home4About from "@/components/about/Home4About";
import Home4AwardSection from "@/components/award-section/home4-award-section";
import Home4BannerSection from "@/components/banner-section/home4-banner-section";
import Home4BlogSection from "@/components/blog-section/home4-blog-section";
import Home4ContactSection from "@/components/contact-section/home4-contact-section";
import Header4 from "@/components/header/Header4";
import Home4ProcessSection from "@/components/process-section/home4-process-section";
import Home4ServicesSection from "@/components/services-section/home4-services-section";
import Home4TeamSection from "@/components/team-section/home4-team-section";
import Home4TestimonialSection from "@/components/testimonial-section/home4-testimonial-section";
import Home4WorkSection from "@/components/work-section/home4-work-section";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const DesignStudio = () => {
  return (
    <>
      <Header4 />
      <Home4BannerSection />
      <Home4About />
      <Home4WorkSection />
      <Home4ProcessSection />
      <Home4ServicesSection />
      <Home4TestimonialSection />
      <Home4TeamSection />
      <Home4AwardSection />
      <Home4BlogSection />
      <Home4ContactSection />
      <Footer4 />
    </>
  );
};

export default DesignStudio;

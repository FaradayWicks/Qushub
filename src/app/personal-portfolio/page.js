import Footer5 from "@/components/Footer/Footer5";
import Home5About from "@/components/about/Home5About";
import Home5AwardSection from "@/components/award-section/home5-award-section";
import Home5BannerSection from "@/components/banner-section/home5-banner-section";
import Home5BlogSection from "@/components/blog-section/home5-blog-section";
import Home5ExperienceSection from "@/components/experience-section/home5-experience-section";
import Header5 from "@/components/header/Header5";
import Home5ServiceSection from "@/components/services-section/home5-service-section";
import Home5TestimonialSection from "@/components/testimonial-section/home5-testimonial-section";
import Home5WorkSection from "@/components/work-section/home5-work-section";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const PersonalPortfolio = () => {
  return (
    <>
      <Header5 />
      <Home5BannerSection />
      <Home5About />
      <Home5WorkSection />
      <Home5ServiceSection />
      <Home5ExperienceSection />
      <Home5TestimonialSection />
      <Home5AwardSection />
      <Home5BlogSection />
      <Footer5 />
    </>
  );
};

export default PersonalPortfolio;

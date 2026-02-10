import Footer from "@/components/Footer/Footer";
import Footer2 from "@/components/Footer/Footer2";
import Home1About from "@/components/about/Home1About";
import Home2About from "@/components/about/Home2About";
import Home1AwardSection from "@/components/award-section/home1-award-section";
import Home1BannerSection from "@/components/banner-section/home1-banner-section";
import Home2BannerSection from "@/components/banner-section/home2-banner-section";
import Home6BannerSection from "@/components/banner-section/home6-banner-section";
import Home1BlogSection from "@/components/blog-section/home1-blog-section";
import Home2BlogSection from "@/components/blog-section/home2-blog-section";
import Home1ContactSection from "@/components/contact-section/home1-contact-section";
import Home2ContactSection from "@/components/contact-section/home2-contact-section";
import Home2CounterArea from "@/components/counter-area-section/home2-counter-area";
import Header from "@/components/header/Header";
import Header2 from "@/components/header/Header2";
import Home2PortfolioSection from "@/components/portfolio-section/home2-portfolio-section";
import Home1ProcessSection from "@/components/process-section/home1-process-section";
import Home2ProcessSection from "@/components/process-section/home2-process-section";
import Home2ServicesSection from "@/components/services-section/home2-services-section";
import Home1solutionSection from "@/components/solution-section/Home1solution-section";
import Home2TechnologySection from "@/components/technology-section/home2-technology-section";
import Home1TestimonialSection from "@/components/testimonial-section/home1-testimonial-section";
import Home2TestimonialSection from "@/components/testimonial-section/home2-testimonial-section";
import HomeworkSection from "@/components/work-section/Homework-section";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
export default function Home() {
  return (
    <>
      <Header2 />
      <Home6BannerSection />
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
}

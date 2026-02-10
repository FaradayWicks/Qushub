import Footer6 from "@/components/Footer/Footer6";
import Home6BannerSection from "@/components/banner-section/home6-banner-section";
import Home6BlogSection from "@/components/blog-section/home6-blog-section";
import Home6FaqSection from "@/components/faq-section/home6-faq-section";
import Home6FeatureSection from "@/components/feature-section/home6-feature-section";
import Header6 from "@/components/header/Header6";
import Home6IntegrationSection from "@/components/integration-section/home6-integration-section";
import Home6PerformanceSection from "@/components/performance-section/home6-performance-section";
import Home6ProjecManagement from "@/components/project-management-section/home6-project-management";
import Home6TestimonialSection from "@/components/testimonial-section/home6-testimonial-section";

const SaasPage = () => {
  return (
    <>
      <Header6 />
      <Home6BannerSection />
      <Home6FeatureSection />
      <Home6ProjecManagement />
      <Home6IntegrationSection />
      <Home6TestimonialSection />
      <Home6PerformanceSection />
      <Home6FaqSection />
      <Home6BlogSection />
      <Footer6 />
    </>
  );
};

export default SaasPage;

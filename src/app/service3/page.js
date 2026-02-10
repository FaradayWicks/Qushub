import Footer from "@/components/Footer/Footer";
import Footer3 from "@/components/Footer/Footer3";
import Breadcrumb from "@/components/common/Breadcrumb";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import Home2PortfolioSection from "@/components/portfolio-section/home2-portfolio-section";
import Home2ProcessSection from "@/components/process-section/home2-process-section";
import Home2TestimonialSection from "@/components/testimonial-section/home2-testimonial-section";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const Service3Page = () => {
  return (
    <>
      <InnerPageHeader />
      <Breadcrumb bgImg="3" title2="SMART SERVICE" title="WE PROVIDE" />
      <div className="home2-services-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title four text-animation">
                <h2>
                  TO PROVIDE SMART <br />
                  <span>SOLUTION</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <div className="btn-and-paragraph">
                    <Link href="/services1">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                    </Link>
                    <p>
                      Offer a wide range of services to help businesses
                      establish and enhance their online presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-wrapper">
            <div className="service-card">
              <h3>1. UI/UX Design</h3>
              <p>
                Conducting research to understand the target audience,
                behaviors.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/service-details">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>2. App Development</h3>
              <p>
                The process of creating software applications for mobile
                devices, such as smartphones.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/service-details">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>3. Block-Chain</h3>
              <p>
                Conducting research to understand the target audience,
                behaviors.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/service-details">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>4. Web Development</h3>
              <p>
                Web development is the process of building and maintaining
                websites or web applications.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/service-details">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>5. Cloud Service</h3>
              <p>
                Conducting research to understand the target audience,
                behaviors.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/service-details">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>6. Cyber Security</h3>
              <p>
                Conducting research to understand the target audience,
                behaviors.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/service-details">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Home2ProcessSection />
      <Home2PortfolioSection />
      <Home2TestimonialSection />
      <Footer />
    </>
  );
};

export default Service3Page;

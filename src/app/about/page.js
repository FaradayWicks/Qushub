import Footer3 from "@/components/Footer/Footer3";
import Home1AwardSection from "@/components/award-section/home1-award-section";
import Header from "@/components/header/Header";
import Header2 from "@/components/header/Header2";
import Home1TestimonialSection from "@/components/testimonial-section/home1-testimonial-section";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const AboutPage = () => {
  return (
    <>
      <Header2 />
      <main className="page-content">
        <div className="line_wrap">
          <div className="line_item first-line" />
          <div className="line_item center-line" />
          <div className="line_item last-line" />
        </div>
        <div className="about-banner-section">
          <div className="container-lg container-fluid">
            <div className="about-content-wrap">
              <div className="sub-title text-animation">
                <h6>
                  About Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={6}
                    viewBox="0 0 50 6"
                  >
                    <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                  </svg>
                </h6>
                <svg
                  className="star"
                  xmlns="http://www.w3.org/2000/svg"
                  width={45}
                  height={36}
                  viewBox="0 0 45 36"
                >
                  <path d="M41.0652 13.6409C35.2969 11.1608 31.0567 6.12526 29.8725 0C28.6882 6.12526 24.448 11.1608 18.6798 13.6409C17.5719 14.1294 14.7451 14.881 14.7451 14.881C14.7451 14.881 17.5337 15.6326 18.6798 16.1211C24.448 18.6013 28.6882 23.6743 29.8725 29.762C31.0567 23.6367 35.2969 18.6013 41.0652 16.1211C42.173 15.6326 44.9998 14.881 44.9998 14.881C44.9998 14.881 42.2112 14.1294 41.0652 13.6409Z" />
                  <path d="M17.1903 26.4929C13.7523 25.0274 11.2693 22.0211 10.5435 18.4136C9.85588 22.0211 7.33466 25.0274 3.89663 26.4929C3.24722 26.7935 1.56641 27.2069 1.56641 27.2069C1.56641 27.2069 3.20902 27.6578 3.89663 27.9209C7.33466 29.3864 9.81768 32.3927 10.5435 36.0002C11.2693 32.4303 13.7523 29.424 17.1903 27.9585C17.8398 27.6578 19.5206 27.2445 19.5206 27.2445C19.5206 27.2445 17.8398 26.7935 17.1903 26.4929Z" />
                  <path d="M44.3893 27.2443C44.3893 28.1086 43.6635 28.785 42.823 28.785C41.9444 28.785 41.2568 28.071 41.2568 27.2443C41.2568 26.38 41.9826 25.7036 42.823 25.7036C43.6635 25.666 44.3893 26.38 44.3893 27.2443Z" />
                  <path d="M15.318 5.8244C15.318 6.6887 14.5922 7.36511 13.7518 7.36511C12.8732 7.36511 12.1855 6.65112 12.1855 5.8244C12.1855 4.9601 12.9114 4.28369 13.7518 4.28369C14.6304 4.28369 15.318 4.9601 15.318 5.8244Z" />
                  <path d="M1.56621 16.4218C2.43121 16.4218 3.13243 15.732 3.13243 14.881C3.13243 14.0301 2.43121 13.3403 1.56621 13.3403C0.701218 13.3403 0 14.0301 0 14.881C0 15.732 0.701218 16.4218 1.56621 16.4218Z" />
                </svg>
              </div>
              <div className="about-section-title text-animation">
                <h1>
                  We provides a range of services related to <br />
                  <span>
                    digital marketing, online presence, &amp; technology.
                  </span>
                </h1>
              </div>
              <Link
                className="circle-btn btn-hover two d-md-none d-flex"
                href="/contact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                </svg>{" "}
                Get in <strong>Touch</strong>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
          </div>
          <div className="about-img-area d-md-block d-none">
            <div className="container-fluid p-0">
              <div className="about-img-wrap">
                <img src="assets/img/innerpage/about-banner-img.jpg" alt="" />
                <div className="button-area">
                  <div className="btn_wrapper">
                    <Link className="circle-btn btn-hover two" href="/contact">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>{" "}
                      Get in <strong>Touch</strong>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partner-area  pt-130 mb-130">
          <div className="container-lg container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="partner-wrap">
                  <div className="title1">
                    <h6>Our Trusted Partner</h6>
                  </div>
                  <div className="marquee light">
                    <div className="marquee__group">
                      <Marquee>
                        <a href="#">
                          <img src="assets/img/home1/partner-01.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-02.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-03.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-04.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-05.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-06.png" alt="" />
                        </a>
                      </Marquee>
                    </div>
                    <div aria-hidden="true" className="marquee__group">
                      <Marquee>
                        <a href="#">
                          <img src="assets/img/home1/partner-01.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-02.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-03.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-04.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-05.png" alt="" />
                        </a>
                        <a href="#">
                          <img src="assets/img/home1/partner-06.png" alt="" />
                        </a>
                      </Marquee>
                    </div>
                  </div>
                  <div className="marquee dark">
                    <div className="marquee__group">
                      <Marquee>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-01.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-02.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-03.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-04.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-05.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-06.png"
                            alt=""
                          />
                        </a>
                      </Marquee>
                    </div>
                    <div aria-hidden="true" className="marquee__group">
                      <Marquee>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-01.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-02.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-03.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-04.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-05.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/home1/partner-light-06.png"
                            alt=""
                          />
                        </a>
                      </Marquee>
                    </div>
                  </div>
                  <div className="title2 ">
                    <h6>Almost 20+ Partner we have</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-about-section">
          <div className="container-lg container-fluid">
            <div className="row g-4 mb-60">
              <div className="col-lg-4">
                <div className="sub-title two text-animation">
                  <h6>
                    Who We Are
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={6}
                      viewBox="0 0 50 6"
                    >
                      <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                    </svg>
                  </h6>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="section-title two text-animation">
                  <h2>
                    Axleo is a business that provides services related to online
                    marketing.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-lg-flex d-none justify-content-end align-items-start">
                <div className="about-left animet-images magnetic-item pt-30">
                  <img src="assets/img/home1/about-left.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-lg-4 gy-5 align-items-xl-center">
                  <div className="col-lg-5">
                    <div className="about-right-img animet-images magnetic-item">
                      <img src="assets/img/home1/about-right.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="about-content text-animation">
                      <p>
                        Digital agencies can vary in size and specialization.
                        Some may focus on specific niches, such as healthcare or
                        e-commerce, while others may offer a comprehensive.
                      </p>
                      <Link href="/about">
                        About More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                        </svg>
                      </Link>
                      <div className="signature-and-star text-animation">
                        <div className="signature">
                          <img src="assets/img/home1/Signature.png" alt="" />
                        </div>
                        <div className="star">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={150}
                            height={145}
                            viewBox="0 0 150 145"
                          >
                            <g>
                              <path d="M150 60.2308H105.604L137.033 29.8498L119.011 12.5348L87.6923 42.9158V0H62.3077V42.9158L30.8791 12.5348L12.967 29.8498L44.3956 60.2308H0V84.7692H44.3956L12.967 115.044L30.8791 132.465L62.3077 102.084V145H87.6923V102.084L119.011 132.465L137.033 115.044L105.604 84.7692H150V60.2308Z" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="counter-wrap">
                  <li className="single-counter">
                    <div className="content">
                      <div className="number">
                        <h2 className="counter">70</h2>
                        <span>+</span>
                      </div>
                      <p>Professional Experts</p>
                    </div>
                  </li>
                  <li className="single-counter">
                    <div className="content">
                      <div className="number">
                        <h2 className="counter">20</h2>
                        <span>+</span>
                      </div>
                      <p>Projects Complete</p>
                    </div>
                  </li>
                  <li className="single-counter">
                    <div className="content">
                      <div className="number">
                        <h2 className="counter">16</h2>
                        <span>+</span>
                      </div>
                      <p>World-wide Clients</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-slider-section">
          <div className="marquee">
            <div className="marquee__group">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                >
                  <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
                </svg>{" "}
                DIGITAL PRODUCT
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                UI/UX DESIGN
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                DIGITAL STUDIO
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                >
                  <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
                </svg>
                BRANDING DESIGN
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                UI/UX DESIGN
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                EMAIL MARKETING
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                >
                  <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
                </svg>
                BRANDING DESIGN
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                UI/UX DESIGN
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                EMAIL MARKETING
              </span>
            </div>
            <div className="marquee__group">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                >
                  <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
                </svg>{" "}
                DIGITAL PRODUCT
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                UI/UX DESIGN
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                DIGITAL STUDIO
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                >
                  <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
                </svg>
                BRANDING DESIGN
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                UI/UX DESIGN
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                EMAIL MARKETING
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                >
                  <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
                </svg>
                BRANDING DESIGN
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                UI/UX DESIGN
              </span>
              <span>
                <svg
                  className="circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                EMAIL MARKETING
              </span>
            </div>
          </div>
        </div>
        <div className="home1-process-section pt-130 pb-130">
          <div className="container-lg container-fluid">
            <div className="row g-4 mb-60 ">
              <div className="col-lg-4">
                <div className="sub-title text-animation">
                  <h6>
                    Our Solution Process
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={6}
                      viewBox="0 0 50 6"
                    >
                      <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                    </svg>
                  </h6>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="section-title text-animation">
                  <h2>
                    03 SETP WE HAVE
                    <br />
                    <span>FOLLOWING.</span>
                  </h2>
                  <div className="dash-and-paragraph">
                    <div className="dash" />
                    <p>
                      Offer a wide range of services to help businesses
                      establish and enhance their online presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-4 col-sm-6">
                <div className="single-process">
                  <div className="step-and-dash">
                    <h6>Step-01 :</h6>
                    <span />
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={70}
                      height={70}
                      viewBox="0 0 70 70"
                    >
                      <g>
                        <path d="M67.6527 16.0958C68.7855 14.6144 67.827 11.5646 65.5614 12.436C60.246 14.5273 54.7564 19.1456 51.1838 23.6767C47.4368 28.4693 46.7397 34.5689 48.4825 40.3199C51.0095 48.6851 58.4161 54.1748 65.5614 58.6188C68.8726 60.7101 71.8353 55.4818 68.6112 53.3905C63.383 50.1665 57.5448 46.071 54.9307 40.3199C52.9265 35.7888 52.9265 30.6477 56.2377 26.6394C59.5489 22.7182 64.4286 20.1041 67.6527 16.0958ZM1.42836 53.3905C-1.88286 55.3947 1.16694 60.6229 4.47816 58.6188C11.6234 54.1748 18.943 48.6851 21.5571 40.3199C23.2998 34.7432 22.6899 28.6435 19.1172 24.0253C15.6317 19.407 9.96781 14.6144 4.5653 12.5231C2.29973 11.6518 1.25408 14.7016 2.474 16.1829C5.61095 20.1041 10.3164 22.7182 13.6276 26.4651C17.1131 30.4734 17.2873 35.7017 15.196 40.4942C12.4948 46.071 6.56946 50.1665 1.42836 53.3905ZM53.3622 1.36957C50.1381 6.59781 46.0426 12.436 40.2916 15.0501C35.7604 17.0543 30.6193 17.0543 26.611 13.7431C22.6027 10.4319 19.9886 5.55216 15.9803 2.32808C14.5861 1.1953 11.5363 2.24094 12.4077 4.50651C14.499 9.82189 19.1172 15.3115 23.6484 18.8842C28.4409 22.6311 34.5405 23.3282 40.2916 21.5854C48.6568 19.0584 54.1464 11.6518 58.5904 4.50651C60.5946 1.1953 55.4535 -1.85451 53.3622 1.36957ZM58.5904 65.5898C54.1464 58.4445 48.6568 51.125 40.2916 48.5108C34.7148 46.7681 28.6152 47.3781 23.9969 50.9507C19.3786 54.4362 14.5861 60.1001 12.4948 65.5026C11.6234 67.7682 14.6732 68.8138 16.1546 67.5939C20.0757 64.457 22.6899 59.7516 26.4368 56.4403C30.4451 52.9548 35.6733 52.7806 40.4659 54.8719C46.2169 57.486 50.2252 63.3242 53.5365 68.5524C55.4535 71.8636 60.5946 68.901 58.5904 65.5898Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <h3>Strategy</h3>
                    <p>
                      Analyze the client's industry, competitors, and target
                      audience
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-plus" /> Initial Consultation.
                      </li>
                      <li>
                        <i className="bi bi-plus" /> Market Research.
                      </li>
                      <li>
                        <i className="bi bi-plus" /> Strategic Planning.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-process">
                  <div className="step-and-dash">
                    <h6>Step-02 :</h6>
                    <span />
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={70}
                      height={70}
                      viewBox="0 0 70 70"
                    >
                      <path d="M58.3331 63C58.3331 50.1144 47.8856 39.6669 35 39.6669C22.1144 39.6669 11.6669 50.1144 11.6669 63H7C7 47.537 19.537 35 35 35C50.463 35 63 47.537 63 63H58.3331ZM39.6669 7C39.6669 19.8856 50.1144 30.3338 63 30.3338V35C47.537 35 35 22.463 35 7H39.6669Z" />
                      <path d="M56 21C59.866 21 63 17.866 63 14C63 10.134 59.866 7 56 7C52.134 7 49 10.134 49 14C49 17.866 52.134 21 56 21Z" />
                      <path
                        d="M35.0001 63.0007C40.1546 63.0007 44.3332 58.8221 44.3332 53.6676C44.3332 48.513 40.1546 44.3345 35.0001 44.3345C29.8456 44.3345 25.667 48.513 25.667 53.6676C25.667 58.8221 29.8456 63.0007 35.0001 63.0007Z"
                        fill="#F5BEBE"
                      />
                      <path
                        d="M18.6669 30.3338C25.1104 30.3338 30.3338 25.1104 30.3338 18.6669C30.3338 12.2234 25.1104 7 18.6669 7C12.2234 7 7 12.2234 7 18.6669C7 25.1104 12.2234 30.3338 18.6669 30.3338Z"
                        fill="#F5BEBE"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h3>Sketch &amp; Design</h3>
                    <p>
                      Define the user experience (UX) and user interface (UI)
                      design.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-plus" /> Wireframing
                      </li>
                      <li>
                        <i className="bi bi-plus" /> Design Mockups.
                      </li>
                      <li>
                        <i className="bi bi-plus" /> Implementation.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-process">
                  <div className="step-and-dash">
                    <h6>Step-03 :</h6>
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={70}
                      height={70}
                      viewBox="0 0 70 70"
                    >
                      <path d="M60.9 25.69H44.31V9.1C44.31 7.91 45.22 7 46.41 7H60.9C62.09 7 63 7.91 63 9.1V23.59C63 24.71 62.09 25.69 60.9 25.69ZM44.31 44.31H25.69V27.79C25.69 26.6 26.6 25.69 27.79 25.69H44.38V44.31H44.31ZM23.59 63H9.1C7.91 63 7 62.09 7 60.9V46.41C7 45.22 7.91 44.31 9.1 44.31H25.69V60.9C25.69 62.09 24.71 63 23.59 63ZM9.1 7H22.54C23.73 7 24.29 8.4 23.45 9.24L9.24 23.45C8.4 24.29 7 23.66 7 22.54V9.1C7 7.91 7.91 7 9.1 7Z" />
                      <path d="M60.9001 63.0001H46.4101C45.2201 63.0001 44.3101 62.0901 44.3101 60.9001V44.3101H60.9001C62.0901 44.3101 63.0001 45.2201 63.0001 46.4101V60.9001C63.0001 62.0901 62.0901 63.0001 60.9001 63.0001Z" />
                    </svg>
                  </div>
                  <div className="content">
                    <h3>Development</h3>
                    <p>
                      Implement coding, scripting, and programming as needed.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-plus" /> Design Implementation.
                      </li>
                      <li>
                        <i className="bi bi-plus" /> Testing &amp; Fixing.
                      </li>
                      <li>
                        <i className="bi bi-plus" /> Product Launch
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Home1TestimonialSection />
        <Home1AwardSection />
        <div className="contact-section three">
          <div className="container-lg container-fluid">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-8">
                <div className="section-title text-animation">
                  <h2>
                    Let’s <span>TALK</span>
                  </h2>
                  <div className="dash-and-paragraph">
                    <div className="dash" />
                    <div className="content-and-social">
                      <p>
                        Crafting a contact text for a digital agency involves
                        providing essential information for potential clients or
                        collaborators to reach out.
                      </p>
                      <div className="social-area">
                        <h6>Connect Us</h6>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={50}
                          height={6}
                          viewBox="0 0 50 6"
                        >
                          <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                        </svg>
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/">
                              <i className="bi bi-twitter-x" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/">
                              <i className="bx bxl-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram-alt" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-lg-flex justify-content-end align-items-center">
                <div className="btn_wrapper">
                  <a className="circle-btn btn-hover two" href="/contact">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>{" "}
                    Contact <strong>Now</strong>
                    <span style={{ top: "50.5px", left: "83.75px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer3 />
      </main>
    </>
  );
};

export default AboutPage;

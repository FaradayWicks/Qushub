"use client";
import Footer3 from "@/components/Footer/Footer3";
import Header from "@/components/header/Header";
import Link from "next/link";
import React, { useEffect } from "react";

const PortfolioInteractiveLink = () => {
  useEffect(() => {
    const interactiveImgItem = document.querySelectorAll(
      ".single-interactive-link"
    );
    function followImagesCursor(event, interactiveImgItem) {
      const contentBox = interactiveImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      interactiveImgItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    interactiveImgItem.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(followImagesCursor(event, item), 100);
      });
    });
  }, []);

  return (
    <>
      <Header />
      <div className="portfolio-page-area pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-130">
            <div className="col-lg-12">
              <div className="interactive-link-wrapper">
                <div className="single-interactive-link">
                  <Link href="/portfolio-showcase">
                    Branding <sup>45</sup>
                  </Link>
                  <div className="pf-img">
                    <img src="assets/img/innerpage/pf-in-ln-01.jpg" alt="" />
                  </div>
                </div>
                <svg viewBox="0 0 255 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.333333 19.6151C0.333333 21.0879 1.52724 22.2818 3 22.2818C4.47276 22.2818 5.66667 21.0879 5.66667 19.6151C5.66667 18.1424 4.47276 16.9485 3 16.9485C1.52724 16.9485 0.333333 18.1424 0.333333 19.6151ZM254 19.5581L254.091 20.0497C254.331 20.005 254.504 19.7936 254.5 19.5494C254.496 19.3053 254.316 19.1 254.074 19.0637L254 19.5581ZM229.498 0.95029C229.47 0.675514 229.225 0.475004 228.95 0.502439C228.676 0.529875 228.475 0.774865 228.502 1.04964L229.498 0.95029ZM228.512 39.1074C228.571 39.3771 228.838 39.5476 229.107 39.4883C229.377 39.4289 229.548 39.1622 229.488 38.8925L228.512 39.1074ZM3.00011 20.1151L254 20.0581L254 19.0581L2.99989 19.1151L3.00011 20.1151ZM254.074 19.0637C250.204 18.4815 244.318 16.863 239.265 13.9124C234.204 10.9577 230.074 6.7279 229.498 0.95029L228.502 1.04964C229.126 7.29063 233.579 11.7508 238.76 14.7759C243.949 17.8051 249.962 19.4564 253.926 20.0525L254.074 19.0637ZM253.909 19.0665C249.146 19.9525 242.129 21.6432 236.642 24.7341C233.897 26.2805 231.499 28.1966 229.969 30.5712C228.428 32.9613 227.782 35.7924 228.512 39.1074L229.488 38.8925C228.818 35.8447 229.409 33.2851 230.809 31.113C232.219 28.9254 234.466 27.1078 237.133 25.6054C242.471 22.5986 249.354 20.9311 254.091 20.0497L253.909 19.0665Z" />
                </svg>
                <div className="single-interactive-link">
                  <Link href="/portfolio-showcase">
                    UI/UX Design <sup>20</sup>
                  </Link>
                  <div className="pf-img">
                    <img src="assets/img/innerpage/pf-in-ln-02.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="interactive-link-wrapper">
                <div className="single-interactive-link">
                  <Link href="/portfolio-showcase">
                    Web Development <sup>26</sup>
                  </Link>
                  <div className="pf-img">
                    <img src="assets/img/innerpage/pf-in-ln-03.jpg" alt="" />
                  </div>
                </div>
                <svg viewBox="0 0 255 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.333333 19.6151C0.333333 21.0879 1.52724 22.2818 3 22.2818C4.47276 22.2818 5.66667 21.0879 5.66667 19.6151C5.66667 18.1424 4.47276 16.9485 3 16.9485C1.52724 16.9485 0.333333 18.1424 0.333333 19.6151ZM254 19.5581L254.091 20.0497C254.331 20.005 254.504 19.7936 254.5 19.5494C254.496 19.3053 254.316 19.1 254.074 19.0637L254 19.5581ZM229.498 0.95029C229.47 0.675514 229.225 0.475004 228.95 0.502439C228.676 0.529875 228.475 0.774865 228.502 1.04964L229.498 0.95029ZM228.512 39.1074C228.571 39.3771 228.838 39.5476 229.107 39.4883C229.377 39.4289 229.548 39.1622 229.488 38.8925L228.512 39.1074ZM3.00011 20.1151L254 20.0581L254 19.0581L2.99989 19.1151L3.00011 20.1151ZM254.074 19.0637C250.204 18.4815 244.318 16.863 239.265 13.9124C234.204 10.9577 230.074 6.7279 229.498 0.95029L228.502 1.04964C229.126 7.29063 233.579 11.7508 238.76 14.7759C243.949 17.8051 249.962 19.4564 253.926 20.0525L254.074 19.0637ZM253.909 19.0665C249.146 19.9525 242.129 21.6432 236.642 24.7341C233.897 26.2805 231.499 28.1966 229.969 30.5712C228.428 32.9613 227.782 35.7924 228.512 39.1074L229.488 38.8925C228.818 35.8447 229.409 33.2851 230.809 31.113C232.219 28.9254 234.466 27.1078 237.133 25.6054C242.471 22.5986 249.354 20.9311 254.091 20.0497L253.909 19.0665Z" />
                </svg>
                <div className="single-interactive-link">
                  <Link href="/portfolio-showcase">
                    Email Marketing <sup>13</sup>
                  </Link>
                  <div className="pf-img">
                    <img src="assets/img/innerpage/pf-in-ln-04.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="interactive-link-wrapper">
                <div className="single-interactive-link">
                  <Link href="/portfolio-showcase">
                    Cloud Servcie <sup>13</sup>
                  </Link>
                  <div className="pf-img">
                    <img src="assets/img/innerpage/pf-in-ln-05.jpg" alt="" />
                  </div>
                </div>
                <svg viewBox="0 0 255 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.333333 19.6151C0.333333 21.0879 1.52724 22.2818 3 22.2818C4.47276 22.2818 5.66667 21.0879 5.66667 19.6151C5.66667 18.1424 4.47276 16.9485 3 16.9485C1.52724 16.9485 0.333333 18.1424 0.333333 19.6151ZM254 19.5581L254.091 20.0497C254.331 20.005 254.504 19.7936 254.5 19.5494C254.496 19.3053 254.316 19.1 254.074 19.0637L254 19.5581ZM229.498 0.95029C229.47 0.675514 229.225 0.475004 228.95 0.502439C228.676 0.529875 228.475 0.774865 228.502 1.04964L229.498 0.95029ZM228.512 39.1074C228.571 39.3771 228.838 39.5476 229.107 39.4883C229.377 39.4289 229.548 39.1622 229.488 38.8925L228.512 39.1074ZM3.00011 20.1151L254 20.0581L254 19.0581L2.99989 19.1151L3.00011 20.1151ZM254.074 19.0637C250.204 18.4815 244.318 16.863 239.265 13.9124C234.204 10.9577 230.074 6.7279 229.498 0.95029L228.502 1.04964C229.126 7.29063 233.579 11.7508 238.76 14.7759C243.949 17.8051 249.962 19.4564 253.926 20.0525L254.074 19.0637ZM253.909 19.0665C249.146 19.9525 242.129 21.6432 236.642 24.7341C233.897 26.2805 231.499 28.1966 229.969 30.5712C228.428 32.9613 227.782 35.7924 228.512 39.1074L229.488 38.8925C228.818 35.8447 229.409 33.2851 230.809 31.113C232.219 28.9254 234.466 27.1078 237.133 25.6054C242.471 22.5986 249.354 20.9311 254.091 20.0497L253.909 19.0665Z" />
                </svg>
                <div className="single-interactive-link">
                  <Link href="/portfolio-showcase">
                    Graphics Design<sup>18</sup>
                  </Link>
                  <div className="pf-img">
                    <img src="assets/img/innerpage/pf-in-ln-06.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="interactive-link-wrapper">
                <div className="single-interactive-link">
                  <Link href="/portfolio-showcase">
                    App Development <sup>22</sup>
                  </Link>
                  <div className="pf-img">
                    <img src="assets/img/innerpage/pf-in-ln-07.jpg" alt="" />
                  </div>
                </div>
                <svg viewBox="0 0 255 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.333333 19.6151C0.333333 21.0879 1.52724 22.2818 3 22.2818C4.47276 22.2818 5.66667 21.0879 5.66667 19.6151C5.66667 18.1424 4.47276 16.9485 3 16.9485C1.52724 16.9485 0.333333 18.1424 0.333333 19.6151ZM254 19.5581L254.091 20.0497C254.331 20.005 254.504 19.7936 254.5 19.5494C254.496 19.3053 254.316 19.1 254.074 19.0637L254 19.5581ZM229.498 0.95029C229.47 0.675514 229.225 0.475004 228.95 0.502439C228.676 0.529875 228.475 0.774865 228.502 1.04964L229.498 0.95029ZM228.512 39.1074C228.571 39.3771 228.838 39.5476 229.107 39.4883C229.377 39.4289 229.548 39.1622 229.488 38.8925L228.512 39.1074ZM3.00011 20.1151L254 20.0581L254 19.0581L2.99989 19.1151L3.00011 20.1151ZM254.074 19.0637C250.204 18.4815 244.318 16.863 239.265 13.9124C234.204 10.9577 230.074 6.7279 229.498 0.95029L228.502 1.04964C229.126 7.29063 233.579 11.7508 238.76 14.7759C243.949 17.8051 249.962 19.4564 253.926 20.0525L254.074 19.0637ZM253.909 19.0665C249.146 19.9525 242.129 21.6432 236.642 24.7341C233.897 26.2805 231.499 28.1966 229.969 30.5712C228.428 32.9613 227.782 35.7924 228.512 39.1074L229.488 38.8925C228.818 35.8447 229.409 33.2851 230.809 31.113C232.219 28.9254 234.466 27.1078 237.133 25.6054C242.471 22.5986 249.354 20.9311 254.091 20.0497L253.909 19.0665Z" />
                </svg>
                <div className="single-interactive-link">
                  <Link href="/portfolio-showcase">
                    Cyber Security <sup>33</sup>
                  </Link>
                  <div className="pf-img">
                    <img src="assets/img/innerpage/pf-in-ln-08.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="social-wrapper">
                <svg viewBox="0 0 876 45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.203 3.45693L875 2.5V3ZM842.084 45L845.462 40.3178L839.718 39.7335L842.084 45ZM3 3.5H875V2.5H3V3.5ZM874.797 2.54307C861.699 8.36225 845.22 19.2052 842.045 40.4522L843.034 40.6C846.131 19.874 862.2 9.23421 875.203 3.45693L874.797 2.54307Z" />
                </svg>
                <div className="social-area">
                  <p>To Know More About Our Work</p>
                  <ul>
                    <li>
                      <a href="https://dribbble.com/">
                        <i className="bi bi-dribbble" /> Dribbble
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.net/">
                        <i className="bi bi-behance" /> Behance
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bi bi-pinterest" />
                        Pinterest
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bi bi-facebook" />
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section two">
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
                <Link className="circle-btn btn-hover two" href="/contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>{" "}
                  Contact <strong>Now</strong>
                  <span />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-slider-section two">
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
      <Footer3 />
    </>
  );
};

export default PortfolioInteractiveLink;

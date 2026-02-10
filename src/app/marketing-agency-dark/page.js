"use client";
import Home3About from "@/components/about/Home3About";
import Home3AwardSection from "@/components/award-section/home3-award-section";
import Home3BannerSection from "@/components/banner-section/home3-banner-section";
import Home3BlogSection from "@/components/blog-section/home3-blog-section";
import Home3ContactSection from "@/components/contact-section/home3-contact-section";
import Home3GallerySection from "@/components/gallery-section/home3-gallery-section";
import Header3 from "@/components/header/Header3";
import Home3Plan from "@/components/pricing-plan-section/home3-plan";
import Home3ServiceSection from "@/components/services-section/home3-service-section";
import Home3TeamSection from "@/components/team-section/home3-team-section";
import Home3TestimonialSection from "@/components/testimonial-section/home3-testimonial-section";
import Home3WorkSection from "@/components/work-section/home3-work-section";
import Link from "next/link";
import React, { useEffect } from "react";

const MarketingAgency = () => {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  return (
    <>
      <Header3 />
      <Home3BannerSection />
      <Home3About />
      <Home3TestimonialSection />
      <Home3WorkSection />
      <Home3ServiceSection />
      <Home3TeamSection />
      <Home3AwardSection />
      <Home3Plan />
      <Home3BlogSection />
      <Home3ContactSection />
      <Home3GallerySection />
      <footer>
        <div className="vector d-lg-flex d-none">
          <svg
            width={300}
            height={372}
            viewBox="0 0 300 372"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <circle cx={-20} cy={320} r={270} strokeWidth={100} />
            </g>
          </svg>
        </div>
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <div className="row g-lg-4 gy-5 mb-90">
                  <div className="col-xl-6 col-lg-6 col-md-8 d-flex justify-content-lg-start">
                    <div className="footer-widget">
                      <div className="subscribed-area">
                        <h3>Don’t Missed Subscribed!</h3>
                        <form>
                          <div className="form-inner">
                            <input type="text" placeholder="Enter Email" />
                            <button type="submit">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.9647 0.685806C16.0011 0.594942 16.01 0.495402 15.9904 0.399526C15.9707 0.303649 15.9233 0.215653 15.8541 0.146447C15.7849 0.0772403 15.6969 0.0298668 15.601 0.0101994C15.5052 -0.0094681 15.4056 -0.000564594 15.3147 0.0358061L0.76775 5.85481H0.76675L0.31475 6.03481C0.22914 6.06895 0.154635 6.1261 0.0994654 6.19994C0.0442956 6.27377 0.0106078 6.36142 0.00212322 6.4532C-0.00636132 6.54497 0.0106876 6.63731 0.0513867 6.72001C0.0920859 6.8027 0.154851 6.87254 0.23275 6.92181L0.64275 7.18181L0.64375 7.18381L5.63875 10.3618L8.81675 15.3568L8.81875 15.3588L9.07875 15.7688C9.12817 15.8464 9.19805 15.9089 9.28068 15.9493C9.36332 15.9897 9.45551 16.0066 9.54711 15.998C9.63871 15.9894 9.72617 15.9558 9.79985 15.9007C9.87354 15.8456 9.9306 15.7712 9.96475 15.6858L15.9647 0.685806ZM14.1317 2.57581L6.63775 10.0698L6.42275 9.73181C6.38336 9.66978 6.33078 9.6172 6.26875 9.57781L5.93075 9.36281L13.4247 1.86881L14.6027 1.39781L14.1327 2.57581H14.1317Z"></path>
                              </svg>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-sm-6 d-flex justify-content-lg-center">
                    <div className="footer-widget">
                      <div className="widget-title">
                        <h4>Company</h4>
                      </div>
                      <div className="menu-container">
                        <ul>
                          <li>
                            <Link href="/about">
                              About Us
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/our-team1">
                              Our Team
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">
                              Our Portfolio
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/career-list">
                              Careers <span>Hiring</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/contact">
                              Contact Us
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-sm-6 d-flex justify-content-lg-end">
                    <div className="footer-widget">
                      <div className="widget-title">
                        <h4>Our Solutions</h4>
                      </div>
                      <div className="menu-container">
                        <ul>
                          <li>
                            <Link href="/service-details">
                              App Application
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service-details">
                              Web Development
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service-details">
                              UI/UX Design
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service-details">
                              Cyber Security
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service-details">
                              Cloud Service
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end mb-60">
                  <div className="col-xl-7 d-flex justify-content-lg-end">
                    <div className="solial-account">
                      <ul>
                        <li>
                          <a href="https://dribbble.com/">Dribbble</a>
                        </li>
                        <li>
                          <a href="https://www.behance.net/">Behance</a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/">Pinterest</a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/">Facebook</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer-logo-contact-wrap">
                      <div className="footer-logo">
                        <Link href="/">
                          <img
                            src="assets/img/dm-light.svg"
                            alt="footer-logo"
                          />
                        </Link>
                      </div>
                      <ul className="footer-contact">
                        <li className="single-contact">
                          <span>Phone</span>
                          <h5>
                            <a href="tel:+991-7636844563">
                              +991 - 763 684 4563{" "}
                            </a>
                          </h5>
                        </li>
                        <li className="single-contact">
                          <span>Email Now</span>
                          <h5>
                            <a href="mailto:info@examplegmail.com">
                              info@examplegmail.com
                            </a>
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-btm">
                <div className="copyright-area">
                  <p>
                    Copyright 2024 <a href="#">Axleo</a> | Design By{" "}
                    <a href="https://www.egenslab.com/">EGENSLAB </a>
                  </p>
                </div>
                <div className="terms-condition">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 5.99981C0 5.83405 0.0632157 5.67508 0.17574 5.55787C0.288264 5.44066 0.44088 5.37481 0.600014 5.37481H8.7518L6.17534 2.69231C6.06267 2.57496 5.99938 2.41578 5.99938 2.24981C5.99938 2.08384 6.06267 1.92467 6.17534 1.80731C6.28801 1.68995 6.44081 1.62402 6.60015 1.62402C6.75948 1.62402 6.91229 1.68995 7.02496 1.80731L10.625 5.55731C10.6809 5.61537 10.7252 5.68434 10.7555 5.76027C10.7857 5.8362 10.8013 5.9176 10.8013 5.99981C10.8013 6.08202 10.7857 6.16342 10.7555 6.23935C10.7252 6.31529 10.6809 6.38426 10.625 6.44231L7.02496 10.1923C6.91229 10.3097 6.75948 10.3756 6.60015 10.3756C6.44081 10.3756 6.28801 10.3097 6.17534 10.1923C6.06267 10.075 5.99938 9.91578 5.99938 9.74981C5.99938 9.58384 6.06267 9.42467 6.17534 9.30731L8.7518 6.62481H0.600014C0.44088 6.62481 0.288264 6.55897 0.17574 6.44176C0.0632157 6.32455 0 6.16557 0 5.99981Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.3997 1C11.5589 1 11.7115 1.06585 11.824 1.18306C11.9365 1.30027 11.9998 1.45924 11.9998 1.625V10.375C11.9998 10.5408 11.9365 10.6997 11.824 10.8169C11.7115 10.9342 11.5589 11 11.3997 11C11.2406 11 11.088 10.9342 10.9755 10.8169C10.8629 10.6997 10.7997 10.5408 10.7997 10.375V1.625C10.7997 1.45924 10.8629 1.30027 10.9755 1.18306C11.088 1.06585 11.2406 1 11.3997 1Z"
                        />
                      </g>
                    </svg>
                    Our Business <a href="#">Policy, Terms &amp; Condition</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MarketingAgency;

"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee';
import ModalVideo from "react-modal-video";

const Home6BannerSection = () => {

  
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 992) {
        const dashboardImgSection = document.querySelector(
          ".dashboard-img-section"
        );
        if (dashboardImgSection) {
          const platformScrTop =
            dashboardImgSection.getBoundingClientRect().top / 2 - 85;
          const winScroll = window.pageYOffset;

          if (
            winScroll >= platformScrTop &&
            dashboardImgSection.classList.contains("notActiv")
          ) {
            const dashboardImg = dashboardImgSection.querySelector(
              ".dashboard-img"
            );
            dashboardImg.style.animation = "animLoaded 1.4s 0.4s ease both";
            dashboardImgSection.classList.remove("notActiv");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      <div className="home6-banner-area">
        <div className="animate-vector">
          <svg width={636} height={205} viewBox="0 0 636 205" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="path-square" id="theMotionPath" d="M0 6H280C291.046 6 300 14.9543 300 26V106.94C300 118.009 308.991 126.973 320.06 126.94L468 126.5L636 126" stroke="url(#paint0_linear_2866_2312)" strokeWidth={2} />
            <circle cx={0} cy={0} r={5} className="sm-circle">
              <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotionPath" />
              </animateMotion>
            </circle>
            <circle cx={0} cy={0} r="2.5" className="sm-circle2">
              <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotionPath" />
              </animateMotion>
            </circle>
            <path className="path-square" id="theMotionPath2" d="M0 30H280C291.046 30 300 38.9543 300 50V130.94C300 142.009 308.991 150.973 320.06 150.94L636 150" stroke="url(#paint1_linear_2866_2312)" strokeWidth={2} />
            <circle cx={0} cy={0} r={5} className="sm-circle">
              <animateMotion dur="3s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotionPath2" />
              </animateMotion>
            </circle>
            <circle cx={0} cy={0} r="2.5" className="sm-circle2">
              <animateMotion dur="3s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotionPath2" />
              </animateMotion>
            </circle>
            <path className="path-square" id="theMotionPath3" d="M0 54H280C291.046 54 300 62.9543 300 74V154.94C300 166.009 308.991 174.973 320.06 174.94L636 174" stroke="url(#paint2_linear_2866_2312)" strokeWidth={2} />
            <circle cx={0} cy={0} r={5} className="sm-circle">
              <animateMotion dur="4.5s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotionPath3" />
              </animateMotion>
            </circle>
            <circle cx={0} cy={0} r="2.5" className="sm-circle2">
              <animateMotion dur="4.5s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotionPath3" />
              </animateMotion>
            </circle>
            <path className="path-square" id="theMotionPath4" d="M0 78H280C291.046 78 300 86.9543 300 98V178.94C300 190.009 308.991 198.973 320.06 198.94L636 198" stroke="url(#paint3_linear_2866_2312)" strokeWidth={2} />
            <circle cx={0} cy={0} r={5} className="sm-circle">
              <animateMotion dur="3.5s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotionPath4" />
              </animateMotion>
            </circle>
            <circle cx={0} cy={0} r="2.5" className="sm-circle2">
              <animateMotion dur="3.5s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotionPath4" />
              </animateMotion>
            </circle>
            <defs>
              <linearGradient id="paint0_linear_2866_2312" x1={318} y1="6.00004" x2={659} y2="115.5" gradientUnits="userSpaceOnUse">
                <stop offset={0} />
                <stop offset={1} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint1_linear_2866_2312" x1={318} y1={30} x2={659} y2="139.5" gradientUnits="userSpaceOnUse">
                <stop offset={0} />
                <stop offset={1} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint2_linear_2866_2312" x1={318} y1={54} x2={659} y2="163.5" gradientUnits="userSpaceOnUse">
                <stop offset={0} />
                <stop offset={1} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint3_linear_2866_2312" x1={318} y1={78} x2={659} y2="187.5" gradientUnits="userSpaceOnUse">
                <stop offset={0} />
                <stop offset={1} stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="animate-vector2">
          <svg style={{ transform: 'scaleX(-1)' }} width={636} height={205} viewBox="0 0 636 205" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="path-square" id="theMotion1Path" d="M0 6H280C291.046 6 300 14.9543 300 26V106.94C300 118.009 308.991 126.973 320.06 126.94L468 126.5L636 126" stroke="url(#paint01_linear_2866_2312)" strokeWidth={2} />
            <circle cx={0} cy={0} r={5} className="sm-circle">
              <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotion1Path" />
              </animateMotion>
            </circle>
            <circle cx={0} cy={0} r="2.5" className="sm-circle2">
              <animateMotion dur="4s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotion1Path" />
              </animateMotion>
            </circle>
            <path className="path-square" id="theMotion1Path2" d="M0 30H280C291.046 30 300 38.9543 300 50V130.94C300 142.009 308.991 150.973 320.06 150.94L636 150" stroke="url(#paint11_linear_2866_2312)" strokeWidth={2} />
            <circle cx={0} cy={0} r={5} className="sm-circle">
              <animateMotion dur="3s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotion1Path2" />
              </animateMotion>
            </circle>
            <circle cx={0} cy={0} r="2.5" className="sm-circle2">
              <animateMotion dur="3s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotion1Path2" />
              </animateMotion>
            </circle>
            <path className="path-square" id="theMotion1Path3" d="M0 54H280C291.046 54 300 62.9543 300 74V154.94C300 166.009 308.991 174.973 320.06 174.94L636 174" stroke="url(#paint21_linear_2866_2312)" strokeWidth={2} />
            <circle cx={0} cy={0} r={5} className="sm-circle">
              <animateMotion dur="4.5s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotion1Path3" />
              </animateMotion>
            </circle>
            <circle cx={0} cy={0} r="2.5" className="sm-circle2">
              <animateMotion dur="4.5s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotion1Path3" />
              </animateMotion>
            </circle>
            <path className="path-square" id="theMotion1Path4" d="M0 78H280C291.046 78 300 86.9543 300 98V178.94C300 190.009 308.991 198.973 320.06 198.94L636 198" stroke="url(#paint31_linear_2866_2312)" strokeWidth={2} />
            <circle cx={0} cy={0} r={5} className="sm-circle">
              <animateMotion dur="3.5s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotion1Path4" />
              </animateMotion>
            </circle>
            <circle cx={0} cy={0} r="2.5" className="sm-circle2">
              <animateMotion dur="3.5s" begin="0s" fill="freeze" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#theMotion1Path4" />
              </animateMotion>
            </circle>
            <defs>
              <linearGradient id="paint01_linear_2866_2312" x1={318} y1="6.00004" x2={659} y2="115.5" gradientUnits="userSpaceOnUse">
                <stop offset={0} />
                <stop offset={1} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint11_linear_2866_2312" x1={318} y1={30} x2={659} y2="139.5" gradientUnits="userSpaceOnUse">
                <stop offset={0} />
                <stop offset={1} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint21_linear_2866_2312" x1={318} y1={54} x2={659} y2="163.5" gradientUnits="userSpaceOnUse">
                <stop offset={0} />
                <stop offset={1} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint31_linear_2866_2312" x1={318} y1={78} x2={659} y2="187.5" gradientUnits="userSpaceOnUse">
                <stop offset={0} />
                <stop offset={1} stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="container-lg container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-12">
              <div className="banner-content-wrapper text-center text-animation">
                <span className="sub-title">
                  <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M9.8448 0.059505C9.93044 0.109151 9.99671 0.186371 10.0328 0.27855C10.0689 0.37073 10.0726 0.472419 10.0434 0.567005L8.46755 5.6875H11.3752C11.4606 5.68747 11.5442 5.71246 11.6156 5.75939C11.687 5.80631 11.7431 5.87313 11.777 5.95157C11.8109 6.03002 11.821 6.11667 11.8062 6.20083C11.7914 6.28498 11.7523 6.36296 11.6937 6.42513L4.69367 13.8626C4.62594 13.9347 4.53581 13.9816 4.43798 13.9959C4.34014 14.0101 4.24036 13.9908 4.15491 13.941C4.06946 13.8913 4.00337 13.8141 3.96742 13.722C3.93146 13.6299 3.92776 13.5283 3.95692 13.4339L5.5328 8.3125H2.62517C2.53973 8.31254 2.45614 8.28755 2.38473 8.24062C2.31332 8.1937 2.25722 8.12688 2.22334 8.04844C2.18947 7.96999 2.17931 7.88334 2.19412 7.79918C2.20893 7.71503 2.24806 7.63705 2.30667 7.57488L9.30667 0.13738C9.37432 0.0654543 9.46431 0.0185276 9.56201 0.00423003C9.65971 -0.0100675 9.75938 0.00910494 9.8448 0.05863V0.059505Z" />
                    </g>
                  </svg>
                  Service-Led Innovation
                </span>
                <h1>Engineering Intelligent Systems for Modern Business</h1>
                <p>It is a full-spectrum technology partner built to help organizations architect, develop, and deploy scalable digital solutions.</p>
                <div className="banner-btn-group">
                  <Link className="primary-btn4 btn-hover" href="/contact">Start Your Project
                    <span style={{ top: '50.5px', left: '83.75px' }} />
                  </Link>
                  <a style={{ cursor: "pointer" }}
                    onClick={() => setOpen(true)} className="primary-btn4 btn-hover two" data-fancybox="gallery">
                    <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM6.79 5.093C6.71524 5.03977 6.62726 5.00814 6.53572 5.00159C6.44418 4.99503 6.35259 5.01379 6.27101 5.05583C6.18942 5.09786 6.12098 5.16154 6.07317 5.23988C6.02537 5.31823 6.00006 5.40822 6 5.5V10.5C6.00006 10.5918 6.02537 10.6818 6.07317 10.7601C6.12098 10.8385 6.18942 10.9021 6.27101 10.9442C6.35259 10.9862 6.44418 11.005 6.53572 10.9984C6.62726 10.9919 6.71524 10.9602 6.79 10.907L10.29 8.407C10.3548 8.36075 10.4076 8.29968 10.4441 8.22889C10.4805 8.1581 10.4996 8.07963 10.4996 8C10.4996 7.92037 10.4805 7.8419 10.4441 7.77111C10.4076 7.70031 10.3548 7.63925 10.29 7.593L6.79 5.093Z" />
                    </svg> Explore Services
                    <span  style={{ top: '50.5px', left: '83.75px' }} />
                  </a>
                </div>
                <span>*Engineering That Does Not Break Under Pressure.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-img-section notActiv mb-130">
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="dashboard-img-wrap">
                <div className="dashboard-img">
                  <img src="assets/img/home6/dashboard.png" alt="" className="light" />
                  <img src="assets/img/home6/dashboard-dark.png" alt="" className="dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-area four mb-130">
        <div className="container-lg container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title-and-logo">
                <div className="partner-title">
                  <h6><span>500+</span> businesses trust <span>Quishub</span> for professional service delivery
                  </h6>
                </div>
                <div className="partner-wrap">
                  <div className="marquee light">
                    <div className="marquee__group">
                      <Marquee>
                        <a href="#"><img src="assets/img/home1/partner-01.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-02.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-03.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-04.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-05.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-06.png" alt="" /></a>
                      </Marquee>
                    </div>
                    <div aria-hidden="true" className="marquee__group">
                      <Marquee>
                        <a href="#"><img src="assets/img/home1/partner-01.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-02.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-03.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-04.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-05.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-06.png" alt="" /></a>
                      </Marquee>
                    </div>
                  </div>
                  <div className="marquee dark">
                    <div className="marquee__group">
                      <Marquee>
                        <a href="#"><img src="assets/img/home1/partner-light-01.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-light-02.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-light-03.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-light-04.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-light-05.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-light-06.png" alt="" /></a>
                      </Marquee>

                    </div>
                    <div aria-hidden="true" className="marquee__group">
                      <Marquee>
                        <a href="#"><img src="assets/img/home1/partner-light-01.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-light-02.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-light-03.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-light-04.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-light-05.png" alt="" /></a>
                        <a href="#"><img src="assets/img/home1/partner-light-06.png" alt="" /></a>
                      </Marquee>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          onClick={() => setOpen(true)}
          isOpen={isOpen}
          animationSpeed={350}
          videoId="r4KpWiK08vM"
          ratio="16:9"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  )
}

export default Home6BannerSection

"use client";
import useScrollZoomAnimationImg from "@/hooks/useScrollZoomAnimationImg";
import Link from "next/link";
import CountUp from "react-countup";
const Home1About = () => {
  //useScrollAnimation
  useScrollZoomAnimationImg();
  return (
    <div className="home1-about-section mb-130">
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
                    Digital agencies can vary in size and specialization. Some
                    may focus on specific niches, such as healthcare or
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
                    <h2 className="counter">
                      <CountUp end={50} />
                    </h2>
                    <span>+</span>
                  </div>
                  <p>Professional Experts</p>
                </div>
              </li>
              <li className="single-counter">
                <div className="content">
                  <div className="number">
                    <h2 className="counter">
                      <CountUp end={20} />
                    </h2>
                    <span>+</span>
                  </div>
                  <p>Projects Complete</p>
                </div>
              </li>
              <li className="single-counter">
                <div className="content">
                  <div className="number">
                    <h2 className="counter">
                      <CountUp end={16} />
                    </h2>
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
  );
};

export default Home1About;

import Footer3 from "@/components/Footer/Footer3";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const CaseStudyPage2 = () => {
  return (
    <>
      <InnerPageHeader />
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(assets/img/innerpage/breadcrumb-bg5.jpg)",
        }}
      >
        <svg
          className="vector"
          xmlns="http://www.w3.org/2000/svg"
          width={300}
          height={374}
          viewBox="0 0 300 374"
          fill="none"
        >
          <path
            d="M49.999 359.57C49.999 530.694 188.228 669.14 358.399 669.14C528.57 669.14 666.799 530.694 666.799 359.57C666.799 188.445 528.57 50 358.399 50C188.228 50 49.999 188.445 49.999 359.57Z"
            strokeWidth={100}
          />
        </svg>
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-content">
              <div className="row">
                <div className="col-lg-5">
                  <div className="section-title white">
                    <h1>
                      Case Study <span>3 Column Grid</span>
                    </h1>
                  </div>
                </div>
                <div className="col-lg-7 d-flex align-items-end">
                  <div className="dash-and-paragraph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 338 44"
                    >
                      <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM337.001 3L337.163 3.47297C337.394 3.3937 337.534 3.15889 337.494 2.9178C337.454 2.67671 337.245 2.5 337.001 2.5V3ZM324.001 44L324.222 38.2307L319.115 40.924L324.001 44ZM3 3.5H337.001V2.5H3V3.5ZM336.839 2.52703C328.657 5.33201 323.03 10.8388 320.343 17.6231C317.657 24.4031 317.923 32.4183 321.444 40.223L322.356 39.8117C318.933 32.2249 318.697 24.4919 321.272 17.9914C323.846 11.4951 329.241 6.18899 337.163 3.47297L336.839 2.52703Z" />
                    </svg>
                    <div className="btn-and-paragraph">
                      <p>
                        Offer a wide range of services to help businesses
                        establish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="breadcrumb-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Case Study Grid</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="case-study-grid-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row gy-5 justify-content-between mb-70">
            <div className="col-lg-4 col-md-6">
              <div className="magnetic-wrap">
                <div className="case-study-card two">
                  <div className="case-study-img">
                    <img
                      src="assets/img/innerpage/case-study-3column-img1.jpg"
                      alt=""
                    />
                    <div className="batch">
                      <a href="#">Android App</a>
                    </div>
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">
                        Leads the Way in Digital Transformation.
                      </Link>
                    </h3>
                    <p>
                      Allow for ample white space to avoid overwhelming the
                      reader.
                    </p>
                    <Link
                      href="/case-study-details"
                      className="primary-btn5 btn-hover"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="magnetic-wrap">
                <div className="case-study-card two">
                  <div className="case-study-img">
                    <img
                      src="assets/img/innerpage/case-study-3column-img2.jpg"
                      alt=""
                    />
                    <div className="batch">
                      <a href="#">Mobile App</a>
                    </div>
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">
                        Major Milestone in Digital Services.
                      </Link>
                    </h3>
                    <p>
                      Allow for ample white space to avoid overwhelming the
                      reader.
                    </p>
                    <Link
                      href="/case-study-details"
                      className="primary-btn5 btn-hover"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="magnetic-wrap">
                <div className="case-study-card two">
                  <div className="case-study-img">
                    <img
                      src="assets/img/innerpage/case-study-3column-img3.jpg"
                      alt=""
                    />
                    <div className="batch">
                      <a href="#">Branding</a>
                    </div>
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">
                        Driving Results A Digital Marketing Case Study
                      </Link>
                    </h3>
                    <p>
                      Allow for ample white space to avoid overwhelming the
                      reader.
                    </p>
                    <Link
                      href="/case-study-details"
                      className="primary-btn5 btn-hover"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="magnetic-wrap">
                <div className="case-study-card two">
                  <div className="case-study-img">
                    <img
                      src="assets/img/innerpage/case-study-3column-img4.jpg"
                      alt=""
                    />
                    <div className="batch">
                      <a href="#">Marketing</a>
                    </div>
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">
                        Revamping Brand Identity Success Story
                      </Link>
                    </h3>
                    <p>
                      Allow for ample white space to avoid overwhelming the
                      reader.
                    </p>
                    <Link
                      href="/case-study-details"
                      className="primary-btn5 btn-hover"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="magnetic-wrap">
                <div className="case-study-card two">
                  <div className="case-study-img">
                    <img
                      src="assets/img/innerpage/case-study-3column-img5.jpg"
                      alt=""
                    />
                    <div className="batch">
                      <a href="#">Web Application</a>
                    </div>
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">
                        Web Development Excellence Case Study.
                      </Link>
                    </h3>
                    <p>
                      Allow for ample white space to avoid overwhelming the
                      reader.
                    </p>
                    <Link
                      href="/case-study-details"
                      className="primary-btn5 btn-hover"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="magnetic-wrap">
                <div className="case-study-card two">
                  <div className="case-study-img">
                    <img
                      src="assets/img/innerpage/case-study-3column-img6.jpg"
                      alt=""
                    />
                    <div className="batch">
                      <a href="#">UI/UX Design</a>
                    </div>
                  </div>
                  <div className="case-study-content">
                    <h3>
                      <Link href="/case-study-details">
                        From Idea to Impact Name Project Success
                      </Link>
                    </h3>
                    <p>
                      Allow for ample white space to avoid overwhelming the
                      reader.
                    </p>
                    <Link
                      href="/case-study-details"
                      className="primary-btn5 btn-hover"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-area two">
            <div className="paginations-button">
              <a href="#">
                <svg
                  width={7}
                  height={14}
                  viewBox="0 0 8 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
                Prev
              </a>
            </div>
            <ul className="paginations">
              <li className="page-item active">
                <a href="#">01</a>
              </li>
              <li className="page-item">
                <a href="#">02</a>
              </li>
              <li className="page-item">
                <a href="#">03</a>
              </li>
              <li className="page-item">
                <a href="#">04</a>
              </li>
            </ul>
            <div className="paginations-button">
              <a href="#">
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={7}
                  height={14}
                  viewBox="0 0 7 14"
                >
                  <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer3 />
    </>
  );
};

export default CaseStudyPage2;

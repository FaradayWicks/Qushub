import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/common/Breadcrumb";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const page = () => {
  return (
    <>
      <InnerPageHeader />
      <Breadcrumb bgImg="3" title2="Blog Grid" title="Our Latest" />
      <div className="blog-grid-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row gy-5 mb-70">
            <div className="col-lg-4 col-md-6">
              <div className="blog-card1 magnetic-item">
                <Link href="/blog-details" className="blog-img">
                  <img
                    src="assets/img/home1/blog-img-01.jpg"
                    alt="blog-img-01"
                  />
                </Link>
                <div className="blog-content">
                  <ul className="mete">
                    <li>
                      <Link href="/blog-grid">Creative Design</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">02 April, 2023</Link>
                    </li>
                  </ul>
                  <h4>
                    <Link href="/blog-details">
                      Celebrates Major Milestone in Digital Services
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card1 magnetic-item">
                <Link href="/blog-details" className="blog-img">
                  <img
                    src="assets/img/home1/blog-img-02.jpg"
                    alt="blog-img-02"
                  />
                </Link>
                <div className="blog-content">
                  <ul className="mete">
                    <li>
                      <Link href="/blog-grid">Technology</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">15 April, 2023</Link>
                    </li>
                  </ul>
                  <h4>
                    <Link href="/blog-details">
                      Surpasses Expectations with Latest Projects.
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card1 magnetic-item">
                <Link href="/blog-details" className="blog-img">
                  <img
                    src="assets/img/home1/blog-img-03.jpg"
                    alt="blog-img-03"
                  />
                </Link>
                <div className="blog-content">
                  <ul className="mete">
                    <li>
                      <Link href="/blog-grid">Marketing</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">05 March, 2023</Link>
                    </li>
                  </ul>
                  <h4>
                    <Link href="/blog-details">
                      Leads the Way in Digital Transformation.
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card1 magnetic-item">
                <Link href="/blog-details" className="blog-img">
                  <img
                    src="assets/img/home1/blog-img-04.jpg"
                    alt="blog-img-03"
                  />
                </Link>
                <div className="blog-content">
                  <ul className="mete">
                    <li>
                      <Link href="/blog-grid">Corporate</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">15 March, 2023</Link>
                    </li>
                  </ul>
                  <h4>
                    <Link href="/blog-details">
                      The Art and Science of Digital Marketing.
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card1 magnetic-item">
                <Link href="/blog-details" className="blog-img">
                  <img
                    src="assets/img/home1/blog-img-05.jpg"
                    alt="blog-img-03"
                  />
                </Link>
                <div className="blog-content">
                  <ul className="mete">
                    <li>
                      <Link href="/blog-grid">Marketing</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">05 January, 2024</Link>
                    </li>
                  </ul>
                  <h4>
                    <Link href="/blog-details">
                      Innovative Solutions for a Digital Tomorrow.
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card1 magnetic-item">
                <Link href="/blog-details" className="blog-img">
                  <img
                    src="assets/img/home1/blog-img-06.jpg"
                    alt="blog-img-03"
                  />
                </Link>
                <div className="blog-content">
                  <ul className="mete">
                    <li>
                      <Link href="/blog-grid">Technology</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">12 January, 2024</Link>
                    </li>
                  </ul>
                  <h4>
                    <Link href="/blog-details">
                      The Power of Visual Storytelling in Marketing
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-area">
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

      <Footer />
    </>
  );
};

export default page;

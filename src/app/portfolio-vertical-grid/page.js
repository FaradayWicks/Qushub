"use client";
import Footer3 from "@/components/Footer/Footer3";
import Header from "@/components/header/Header";
import Link from "next/link";
import React, { useEffect } from "react";

const VertucalGird = () => {
  useEffect(() => {
    const infoflow1TextItem = document.querySelectorAll(
      ".single-shocase-carosule"
    );
    function followImageCursor(event, infoflow1TextItem) {
      const contentBox = infoflow1TextItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      infoflow1TextItem.children[2].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    infoflow1TextItem.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, item), 100);
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
              <div className="section-title">
                <h1>
                  Our <span>Work</span> <sup>22</sup>
                </h1>
                <div className="social-wrapper">
                  <svg viewBox="0 0 876 45" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.203 3.45693L875 2.5V3ZM842.084 45L845.462 40.3178L839.718 39.7335L842.084 45ZM3 3.5H875V2.5H3V3.5ZM874.797 2.54307C861.699 8.36225 845.22 19.2052 842.045 40.4522L843.034 40.6C846.131 19.874 862.2 9.23421 875.203 3.45693L874.797 2.54307Z" />
                  </svg>
                  <div className="social-area">
                    <p>To Know More About Our Work</p>
                    <ul>
                      <li>
                        <a href="https://dribbble.com/">
                          <i className="bi bi-dribbble" />
                          Dribbble
                        </a>
                      </li>
                      <li>
                        <a href="https://www.behance.net/">
                          <i className="bi bi-behance" />
                          Behance
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
          <div className="row g-lg-4 gy-5 justify-content-center mb-130">
            <div className="col-md-6 vrt-item">
              <div className="snigle-vertica-item single-shocase-carosule">
                <Link href="/portfolio-details" className="pf-img">
                  <img src="/assets/img/innerpage/vertica-item-01.jpg" alt="" />
                </Link>
                <div />
                <div className="vertica-item-content">
                  <Link href="/portfolio-details">Design Kit</Link>
                  <h6>
                    <Link href="/portfolio-details">Branding Design</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end vrt-item">
              <div className="snigle-vertica-item single-shocase-carosule">
                <Link href="/portfolio-details" className="pf-img">
                  <img src="/assets/img/innerpage/vertica-item-02.jpg" alt="" />
                </Link>
                <div />

                <div className="vertica-item-content">
                  <Link href="/portfolio-details">Design Kit</Link>
                  <h6>
                    <Link href="/portfolio-details">Branding Design</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-8 vrt-item">
              <div className="snigle-vertica-item single-shocase-carosule">
                <Link href="/portfolio-details" className="pf-img">
                  <img src="/assets/img/innerpage/vertica-item-03.jpg" alt="" />
                </Link>
                <div />
                <div className="vertica-item-content">
                  <Link href="/portfolio-details">Design Kit</Link>
                  <h6>
                    <Link href="/portfolio-details">Branding Design</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 vrt-item">
              <div className="snigle-vertica-item single-shocase-carosule">
                <Link href="/portfolio-details" className="pf-img">
                  <img src="/assets/img/innerpage/vertica-item-04.jpg" alt="" />
                </Link>
                <div />
                <div className="vertica-item-content">
                  <Link href="/portfolio-details">Design Kit</Link>
                  <h6>
                    <Link href="/portfolio-details">Branding Design</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 vrt-item  d-flex justify-content-md-end">
              <div className="snigle-vertica-item single-shocase-carosule">
                <Link href="/portfolio-details" className="pf-img">
                  <img src="/assets/img/innerpage/vertica-item-05.jpg" alt="" />
                </Link>
                <div />
                <div className="vertica-item-content">
                  <Link href="/portfolio-details">Design Kit</Link>
                  <h6>
                    <Link href="/portfolio-details">Branding Design</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-8 vrt-item">
              <div className="snigle-vertica-item single-shocase-carosule">
                <Link href="/portfolio-details" className="pf-img">
                  <img src="/assets/img/innerpage/vertica-item-06.jpg" alt="" />
                </Link>
                <div />
                <div className="vertica-item-content">
                  <Link href="/portfolio-details">Design Kit</Link>
                  <h6>
                    <Link href="/portfolio-details">Branding Design</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="load-more-btn btn_wrapper">
                <button className="circle-btn btn-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>{" "}
                  Load More <strong>Portfolio</strong>
                  <span style={{ top: "50.5px", left: "83.75px" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer3 />
    </>
  );
};

export default VertucalGird;

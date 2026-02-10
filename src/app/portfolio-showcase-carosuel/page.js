"use client";
import Header from "@/components/header/Header";
import Link from "next/link";
import React, { useEffect } from "react";

const PortfolioShowcaseCarosuel = () => {
  useEffect(() => {
    // Initialize the first child as active on page load
    document
      .querySelector(
        ".pf-shocase-carosule-group .single-shocase-carosule:nth-child(2)"
      )
      .classList.add("active");

    // Mouse enter event for pf-shocase-carosule-group div
    const onMouseEnter = () => {
      // Remove active class from all li elements except the first child
      document
        .querySelectorAll(
          ".pf-shocase-carosule-group .single-shocase-carosule:not(:nth-child(2))"
        )
        .forEach((item) => {
          item.classList.remove("active");
        });
    };

    // Mouse leave event for pf-shocase-carosule-group div
    const onMouseLeave = () => {
      // Remove active class from all li elements except the first child
      document
        .querySelectorAll(
          ".pf-shocase-carosule-group .single-shocase-carosule:not(:nth-child(2))"
        )
        .forEach((item) => {
          item.classList.remove("active");
        });
      // Add active class to the first child
      document
        .querySelector(
          ".pf-shocase-carosule-group .single-shocase-carosule:nth-child(2)"
        )
        .classList.add("active");
    };

    // Hover event for li elements
    const onLiMouseEnter = (event) => {
      // Add active class to the current li and remove from siblings
      event.target.classList.add("active");
      const siblings = [...event.target.parentElement.children].filter(
        (child) => child !== event.target
      );
      siblings.forEach((sibling) => {
        sibling.classList.remove("active");
      });
    };

    // Attach event listeners
    const carosuleGroup = document.querySelector(".pf-shocase-carosule-group");
    carosuleGroup.addEventListener("mouseenter", onMouseEnter);
    carosuleGroup.addEventListener("mouseleave", onMouseLeave);

    const carosuleItems = document.querySelectorAll(
      ".pf-shocase-carosule-group .single-shocase-carosule"
    );
    carosuleItems.forEach((item) => {
      item.addEventListener("mouseenter", onLiMouseEnter);
    });

    // Clean up event listeners
    return () => {
      carosuleGroup.removeEventListener("mouseenter", onMouseEnter);
      carosuleGroup.removeEventListener("mouseleave", onMouseLeave);
      carosuleItems.forEach((item) => {
        item.removeEventListener("mouseenter", onLiMouseEnter);
      });
    };
  }, []);
  return (
    <>
      <Header />
      <div className="pf-showcase-carosule-section">
        <div className="social-area-group">
          <ul className="social-icon">
            <li>
              <a href="https://99designs.com/">99 Design</a>
            </li>
            <li>
              <a href="https://dribbble.com/">
                <i className="bi bi-dribbble" />
                Dribbble
              </a>
            </li>
          </ul>
          <ul className="social-icon">
            <li>
              <a href="https://www.behance.net/">
                <i className="bi bi-behance" /> Behance{" "}
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <i className="bi bi-pinterest" /> Pinterest
              </a>
            </li>
          </ul>
        </div>
        <div className="pf-shocase-carosule-wrap">
          <div className="view-all-btn d-flex justify-content-end">
            <Link href="/portfolio-showcase">
              View All Work{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 12 12"
              >
                <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
              </svg>
            </Link>
          </div>
          <div className="pf-shocase-carosule-group">
            <div className="single-shocase-carosule">
              <div className="shocase-carasole-img">
                <img src="assets/img/innerpage/pf-sw-cra-01.jpg" alt="" />
              </div>

              <div className="shocase-carasole-content">
                <Link href="/portfolio-details">Design Kit</Link>
                <h6>
                  <Link href="/portfolio-details">Branding Design</Link>
                </h6>
              </div>
            </div>
            <div className="single-shocase-carosule">
              <div className="shocase-carasole-img">
                <img src="assets/img/innerpage/pf-sw-cra-02.jpg" alt="" />
              </div>
              <div className="details-btn">
                <Link href="/portfolio-details">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>
                </Link>
              </div>
              <div className="shocase-carasole-content">
                <Link href="/portfolio-details">Design Kit</Link>
                <h6>
                  <Link href="/portfolio-details">Branding Design</Link>
                </h6>
              </div>
            </div>
            <div className="single-shocase-carosule">
              <div className="shocase-carasole-img">
                <img src="assets/img/innerpage/pf-sw-cra-03.jpg" alt="" />
              </div>
              <div className="details-btn">
                <Link href="/portfolio-details">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>
                </Link>
              </div>
              <div className="shocase-carasole-content">
                <Link href="/portfolio-details">Design Kit</Link>
                <h6>
                  <Link href="/portfolio-details">Branding Design</Link>
                </h6>
              </div>
            </div>
            <div className="single-shocase-carosule">
              <div className="shocase-carasole-img">
                <img src="assets/img/innerpage/pf-sw-cra-04.jpg" alt="" />
              </div>
              <div className="details-btn">
                <Link href="/portfolio-details">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>
                </Link>
              </div>
              <div className="shocase-carasole-content">
                <Link href="/portfolio-details">Design Kit</Link>
                <h6>
                  <Link href="/portfolio-details">Branding Design</Link>
                </h6>
              </div>
            </div>
            <div className="single-shocase-carosule">
              <div className="shocase-carasole-img">
                <img src="assets/img/innerpage/pf-sw-cra-05.jpg" alt="" />
              </div>
              <div className="details-btn">
                <Link href="/portfolio-details">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>
                </Link>
              </div>
              <div className="shocase-carasole-content">
                <Link href="/portfolio-details">Design Kit</Link>
                <h6>
                  <Link href="/portfolio-details">Branding Design</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioShowcaseCarosuel;

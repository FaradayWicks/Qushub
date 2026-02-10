"use client";
import Footer3 from "@/components/Footer/Footer3";
import Header from "@/components/header/Header";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

import portfolioShowcaseData from "../../data/gallery2.json";

const OfferGallaryPage = () => {
  const [items, setItems] = useState(portfolioShowcaseData);
  const [CategoryActiveSlug, setCategoryActiveSlug] = useState(null);

  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });
  const filterItem = (catagoryItem) => {
    setCategoryActiveSlug(catagoryItem);
    const updateItems = portfolioShowcaseData.filter((curentElemet) => {
      return curentElemet.categorySlug === catagoryItem;
    });
    setItems(updateItems);
  };
  const setAllItems = (allItems) => {
    setCategoryActiveSlug(allItems);
    return setItems(portfolioShowcaseData);
  };

  const categoryCard = new Map([
    ...portfolioShowcaseData.map((categoryData) => [
      categoryData.category,
      categoryData.categorySlug,
    ]),
  ]);
  return (
    <>
      <Header />
      <div className="gallery-pages pf-shoecase-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title six mb-70">
                <h2>Our Gallery</h2>
                <div className="dash-and-paragraph">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z" />
                  </svg>
                  <p>
                    Creating a concise and effective design studio brief is
                    crucial for outlining your business, its services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="filters filter-button-group">
                <ul>
                  <li
                    onClick={() => setAllItems("all")}
                    className={
                      CategoryActiveSlug == "all" || CategoryActiveSlug == null
                        ? "active"
                        : ""
                    }
                    data-filter="*"
                  >
                    All
                  </li>
                  {[...categoryCard].map((key) => {
                    return (
                      <li
                        key={key[1]}
                        onClick={() => filterItem(`${key[1]}`)}
                        className={key[1] == CategoryActiveSlug ? "active" : ""}
                      >
                        {key[0]}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="row g-4 grid mb-130">
            {items.map((element, index) => {
              return (
                <div
                  key={element.id}
                  className="col-lg-4 col-sm-6 grid-item activites office"
                >
                  <div className="single-gallery-img">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setOpenimg({
                          openingState: true,
                          openingIndex: index,
                        })
                      }
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                      className="view-btn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                      >
                        <path d="M7.07182 0.444444L7.8453 1.27778L6.62983 2.5C6.40884 2.72222 6.40884 3.05556 6.62983 3.27778C6.85083 3.5 7.18232 3.5 7.40331 3.27778L8.61878 2.05556L9.44751 2.83333C9.66851 3.05556 9.94475 2.88889 9.94475 2.66667V0.277778C9.94475 0.111111 9.83425 0 9.66851 0H7.29282C7.07182 0 6.90608 0.277778 7.07182 0.444444ZM0.441989 2.83333L1.21547 2.05556L2.43094 3.27778C2.65193 3.5 2.98343 3.5 3.20442 3.27778C3.42541 3.05556 3.42541 2.72222 3.20442 2.5L2.0442 1.27778L2.81768 0.444444C3.03867 0.277778 2.87293 0 2.65193 0H0.276243C0.110497 0 0 0.111111 0 0.277778V2.66667C0 2.88889 0.276243 3.05556 0.441989 2.83333ZM2.81768 9.5L1.98895 8.72222L3.20442 7.5C3.42541 7.27778 3.42541 6.94445 3.20442 6.72222C2.98343 6.5 2.65193 6.5 2.43094 6.72222L1.21547 7.94444L0.38674 7.16667C0.276243 6.94444 0 7.11111 0 7.33333V9.72222C0 9.88889 0.110497 10 0.276243 10H2.65193C2.87293 10 3.03867 9.72222 2.81768 9.5ZM9.50276 7.11111L8.67403 7.88889L7.45856 6.66667C7.23757 6.44444 6.90608 6.44444 6.68508 6.66667C6.46409 6.88889 6.46409 7.22222 6.68508 7.44444L7.90055 8.66667L7.12707 9.5C6.96133 9.66667 7.07182 10 7.34807 10H9.72376C9.8895 10 10 9.88889 10 9.72222V7.33333C9.94475 7.11111 9.66851 6.94444 9.50276 7.11111Z"></path>
                      </svg>{" "}
                      View image
                    </a>
                    <img src={element.imageBig} alt="" />
                  </div>
                </div>
              );
            })}

            <Lightbox
              className="img-fluid"
              open={isOpenimg.openingState}
              plugins={[Fullscreen]}
              index={isOpenimg.openingIndex}
              close={() => setOpenimg(false)}
              styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
              slides={items.map(function (elem) {
                return { src: elem.imageBig };
              })}
            />
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

export default OfferGallaryPage;

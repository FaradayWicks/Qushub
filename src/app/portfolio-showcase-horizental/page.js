"use client";
import React, { useEffect, useState } from "react";
import portfolioShowcaseData from "../../data/portfolio-showcase.json";
import Footer3 from "@/components/Footer/Footer3";
import Header from "@/components/header/Header";
import Link from "next/link";

const PortfolioShowcaseHorizental = () => {
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

  useEffect(() => {
    const workImgItem = document.querySelectorAll(
      ".portfolio-showcase-horizental .single-work"
    );
    function followImageCursor(event, workImgItem) {
      const contentBox = workImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      workImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    workImgItem.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, item), 100);
      });
    });
  }, []);
  return (
    <>
      <Header />
      <div className="portfolio-page-area portfolio-showcase-horizental pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-130">
            <div className="col-lg-12">
              <div className="section-title">
                <h1>
                  Our <span>Work</span>
                </h1>
                <div className="dash-and-paragraph three">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z"></path>
                  </svg>
                  <div className="btn-and-paragraph">
                    <span>Selected work * (2020-2024)</span>
                    <p>
                      Creating a concise and effective design studio brief is
                      crucial for outlining your business, its services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="filters filter-button-group">
                <ul className="d-flex  flex-wrap">
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
          <div className="row grid mb-130">
            {items.slice(0, 9).map((element, index) => {
              return (
                <div
                  key={element.id}
                  className="col-lg-12 grid-item UiUx Web Graphics"
                >
                  <div className="single-work">
                    <div className="work-name">
                      <div className="sn">{element.id}.</div>
                      <h3>
                        <Link href="/portfolio-details">
                          {element.horizontal_title}
                        </Link>
                      </h3>
                    </div>
                    <div className="work-discription">
                      <p>{element.horizontal_details}</p>
                      <ul>
                        {element.horizontal_tag.map((e, i) => (
                          <li key={i}>
                            <Link href="/portfolio-showcase">{e}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="services-img">
                      <img src={element.img_horizontal} alt="" />
                    </div>
                    <div className="details-btn-wrap">
                      <div className="details-btn">
                        <Link
                          className="primary-btn4 btn-hover"
                          href="/portfolio-details"
                        >
                          View Details
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
              );
            })}
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

export default PortfolioShowcaseHorizental;

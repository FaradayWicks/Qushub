"use client";
import Footer3 from "@/components/Footer/Footer3";
import Header from "@/components/header/Header";
import Link from "next/link";
import React, { useState } from "react";
import portfolioShowcaseData from "../../data/portfolio-showcase.json";
const PortfolioShowCasePage = () => {
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
      <div
        className="breadcrumb-section style-2"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248, 248, 248, 0.5), rgba(248, 248, 248, 0.5)), url(assets/img/innerpage/breadcrumb-bg6.jpg)",
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
        <div className="container-lg container-fluid">
          <div className="banner-wrapper">
            <div className="banner-content">
              <div className="row align-items-center gy-5">
                <div className="col-lg-7">
                  <div className="section-title">
                    <h1>
                      Our Latest <span>Flexible Work.</span>
                    </h1>
                  </div>
                  <div className="dash-and-paragraph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 338 44"
                    >
                      <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM337.001 3L337.163 3.47297C337.394 3.3937 337.534 3.15889 337.494 2.9178C337.454 2.67671 337.245 2.5 337.001 2.5V3ZM324.001 44L324.222 38.2307L319.115 40.924L324.001 44ZM3 3.5H337.001V2.5H3V3.5ZM336.839 2.52703C328.657 5.33201 323.03 10.8388 320.343 17.6231C317.657 24.4031 317.923 32.4183 321.444 40.223L322.356 39.8117C318.933 32.2249 318.697 24.4919 321.272 17.9914C323.846 11.4951 329.241 6.18899 337.163 3.47297L336.839 2.52703Z" />
                    </svg>
                    <p>
                      Offer a wide range of services to help businesses
                      establish.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-xxl-center">
                  <div className="single-counter">
                    <div className="icon">
                      <svg
                        width={80}
                        height={80}
                        viewBox="0 0 80 80"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M59.0639 20.9375C58.8921 10.5625 50.4077 2.1875 40.0014 2.1875C29.5952 2.1875 21.1108 10.5781 20.9389 20.9375C16.1733 21.0156 11.6889 22.8281 8.18893 26.1094C4.48581 29.5938 2.34518 34.3281 2.18893 39.4062C2.03268 44.4844 3.86081 49.3438 7.36081 53.0469C10.8452 56.75 15.5796 58.8906 20.6577 59.0469H20.9233C21.0014 63.8125 22.8139 68.3125 26.0952 71.7969C29.5796 75.5 34.3139 77.6406 39.3921 77.7969C39.5952 77.7969 39.7983 77.8125 39.9858 77.8125C44.8608 77.8125 49.4702 75.9844 53.0327 72.6406C56.7358 69.1562 58.8764 64.4219 59.0327 59.3438V59.0781C69.4077 58.9062 77.7827 50.4219 77.7827 40.0156C77.8139 29.5938 69.4233 21.1094 59.0639 20.9375ZM40.0014 2.8125C50.0639 2.8125 58.2671 10.9219 58.4389 20.9375C49.2514 21.0781 41.6264 27.7656 40.0014 36.5156C39.3452 32.9531 37.6889 29.6406 35.1421 26.9375C31.6577 23.2344 26.9233 21.0938 21.8452 20.9375H21.5796C21.7358 10.9219 29.9389 2.8125 40.0014 2.8125ZM20.9389 58.4375H20.6889C15.7671 58.2812 11.1889 56.2344 7.82956 52.6406C4.45456 49.0469 2.67331 44.3594 2.82956 39.4375C2.98581 34.5156 5.03268 29.9375 8.62643 26.5781C12.0014 23.4062 16.3452 21.6406 20.9389 21.5781C21.0796 30.7656 27.7671 38.3906 36.5171 40.0156C32.9546 40.6719 29.6421 42.3281 26.9233 44.875C23.2202 48.3594 21.0796 53.0938 20.9233 58.1719C20.9389 58.25 20.9389 58.3438 20.9389 58.4375ZM58.4389 59.3125C58.2827 64.2344 56.2358 68.8125 52.6421 72.1719C49.0483 75.5469 44.3608 77.3125 39.4389 77.1719C34.5171 77.0156 29.9389 74.9688 26.5796 71.375C23.4077 68 21.6421 63.6562 21.5796 59.0625C26.3452 58.9844 30.8452 57.1719 34.3296 53.8906C37.3296 51.0781 39.2827 47.4531 40.0171 43.4688C41.6421 52.2344 49.2671 58.9062 58.4546 59.0625C58.4389 59.1406 58.4389 59.2344 58.4389 59.3125ZM59.0639 58.4375C58.9858 53.6719 57.1733 49.1719 53.8921 45.6875C51.0796 42.6875 47.4546 40.7344 43.4702 40C52.2358 38.375 58.9077 30.75 59.0639 21.5625C69.0952 21.7344 77.1889 29.9375 77.1889 40C77.1889 50.0625 69.0796 58.2656 59.0639 58.4375Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <div className="number">
                        <h3 className="counter">20</h3>
                        <span>+</span>
                      </div>
                      <p>Projects Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="breadcrumb-list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Portfolio Showcase</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pf-shoecase-page pt-130 mb-130">
        <div className="container-lg container-fluid">
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
          <div className="row g-4 grid mb-70">
            {items.slice(0, 9).map((element, index) => {
              return (
                <div
                  key={element.id}
                  className="col-lg-4 col-sm-6 grid-item UiUx Web Graphics "
                >
                  <div className="single-portfolio-sw">
                    <div className="pf-shw-img">
                      <img src={element.img} alt="" />
                    </div>
                    <div className="pf-shw-content-wrap">
                      <a className="publish-date" href="#">
                        ©2024
                      </a>
                      <div className="pf-shw-content text-center">
                        <h4>
                          <Link href="/portfolio-details">
                            {" "}
                            Digital <br /> Masterpieces
                          </Link>
                        </h4>
                        <Link href="/portfolio-showcase">{element.tag}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-lg-12">
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
        </div>
      </div>
      <Footer3 />
    </>
  );
};

export default PortfolioShowCasePage;

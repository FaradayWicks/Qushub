"use client";
import Footer3 from "@/components/Footer/Footer3";
import Header from "@/components/header/Header";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const ProductDetailsPage = () => {
  const settings = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-5",
        prevEl: ".prev-5",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <>
      <Header />
      <div className="product-details-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title six mb-70">
                <h2>Zara Crimson</h2>
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
          <div className="row gy-5 mb-110">
            <div className="col-lg-6">
              <div className="product-details-img">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-img1"
                    role="tabpanel"
                  >
                    <div className="product-details-tab-img">
                      <img
                        src="assets/img/innerpage/product-details-img1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-img2"
                    role="tabpanel"
                  >
                    <div className="product-details-tab-img">
                      <img
                        src="assets/img/innerpage/product-details-img2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-img3"
                    role="tabpanel"
                    aria-labelledby="v-pills-img3-tab"
                  >
                    <div className="product-details-tab-img">
                      <img
                        src="assets/img/innerpage/product-details-img3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-img4"
                    role="tabpanel"
                    aria-labelledby="v-pills-img4-tab"
                  >
                    <div className="product-details-tab-img">
                      <img
                        src="assets/img/innerpage/product-details-img4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="v-pills-img1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-img1"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-img1"
                      aria-selected="true"
                    >
                      <img
                        src="assets/img/innerpage/product-details-img1.jpg"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="v-pills-img2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-img2"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-img2"
                      aria-selected="false"
                    >
                      <img
                        src="assets/img/innerpage/product-details-img2.jpg"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="v-pills-img3-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-img3"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-img3"
                      aria-selected="false"
                    >
                      <img
                        src="assets/img/innerpage/product-details-img3.jpg"
                        alt=""
                      />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="v-pills-img4-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-img4"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-img4"
                      aria-selected="false"
                    >
                      <img
                        src="assets/img/innerpage/product-details-img4.jpg"
                        alt=""
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-details-content">
                <h3>ZARA Crimson</h3>
                <p>
                  ZARA Crimson Perfume is a captivating fragrance that embodies
                  the essence of elegance and sophistication.{" "}
                </p>
                <div className="price-tag">
                  <h5>$148.00</h5>
                </div>
                <div className="product-quantity d-flex align-items-center justify-content-start">
                  <div className="quantity">
                    <a className="quantity__minus">
                      <span>
                        <i className="bi bi-dash" />
                      </span>
                    </a>
                    <input
                      name="quantity"
                      type="text"
                      className="quantity__input"
                      defaultValue={1}
                    />
                    <a className="quantity__plus">
                      <span>
                        <i className="bi bi-plus" />
                      </span>
                    </a>
                  </div>
                  <Link href="/cart" className="primary-btn5 black btn-hover">
                    Add To Cart
                    <span style={{ top: "50.5px", left: "83.75px" }} />
                  </Link>
                  <a href="#" className="fav">
                    <svg
                      width={16}
                      height={14}
                      viewBox="0 0 16 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.6291 1.41418C13.8299 0.617963 12.7478 0.170898 11.6197 0.170898C10.4916 0.170898 9.40949 0.617963 8.61033 1.41418L8.00283 2.02168L7.39533 1.41418C6.59618 0.617963 5.51406 0.170898 4.38596 0.170898C3.25786 0.170898 2.17573 0.617963 1.37658 1.41418C0.580019 2.21429 0.132813 3.29735 0.132812 4.42637C0.132812 5.55539 0.580019 6.63845 1.37658 7.43856L7.60346 13.6654C7.65575 13.7182 7.71796 13.76 7.78651 13.7886C7.85505 13.8171 7.92858 13.8318 8.00283 13.8318C8.07709 13.8318 8.15061 13.8171 8.21916 13.7886C8.2877 13.76 8.34992 13.7182 8.40221 13.6654L14.6291 7.43856C15.4256 6.63845 15.8729 5.55539 15.8729 4.42637C15.8729 3.29735 15.4256 2.21429 14.6291 1.41418ZM13.836 6.6398L8.00283 12.4729L2.16971 6.6398C1.58336 6.05239 1.25405 5.25634 1.25405 4.42637C1.25405 3.5964 1.58336 2.80034 2.16971 2.21293C2.75808 1.62624 3.55507 1.29679 4.38596 1.29679C5.21685 1.29679 6.01384 1.62624 6.60221 2.21293L7.60346 3.21418C7.65575 3.2669 7.71796 3.30875 7.78651 3.33731C7.85505 3.36586 7.92858 3.38057 8.00283 3.38057C8.07709 3.38057 8.15061 3.36586 8.21916 3.33731C8.2877 3.30875 8.34992 3.2669 8.40221 3.21418L9.40346 2.21293C9.99183 1.62624 10.7888 1.29679 11.6197 1.29679C12.4506 1.29679 13.2476 1.62624 13.836 2.21293C14.4223 2.80034 14.7516 3.5964 14.7516 4.42637C14.7516 5.25634 14.4223 6.05239 13.836 6.6398Z" />
                    </svg>
                  </a>
                </div>
                <ul className="aditional-info">
                  <li>
                    <span>SKU:</span> D32-5H23
                  </li>
                  <li>
                    <span>Category:</span> <Link href="/shop">Perfume</Link>
                  </li>
                  <li>
                    <span>Tags:</span>{" "}
                    <Link href="/product-details">Aura,</Link>{" "}
                    <Link href="/product-details">Dusk, </Link>{" "}
                    <Link href="/product-details">Azure</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="product-description-and-review-area">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="nav nav2 nav-pills"
                  id="v-pills-tab2"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="description-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#description"
                    type="button"
                    role="tab"
                    aria-controls="description"
                    aria-selected="false"
                  >
                    Product Details
                  </button>
                  <button
                    className="nav-link"
                    id="review-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#review"
                    type="button"
                    role="tab"
                    aria-controls="review"
                    aria-selected="true"
                  >
                    Customer Reviews
                  </button>
                </div>
                <div
                  className="tab-content tab-content2"
                  id="v-pills-tabContent2"
                >
                  <div
                    className="tab-pane fade active show"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                  >
                    <div className="description">
                      <p>
                        If "ZARA Crimson" refers to a specific product or
                        collection from the fashion brand ZARA, I recommend
                        checking the official ZARA website, visiting ZARA
                        stores, or contacting ZARA's customer service for the
                        most accurate and up-to-date information. Product names,
                        collections, and availability can vary, and the brand's
                        official channels are the best sources for the latest
                        details.
                      </p>
                      <br />
                      <p>
                        You can also explore ZARA's official website or visit
                        their stores to find information about the "Crimson"
                        product or collection. If there have been any updates or
                        new releases since my last knowledge update, you should
                        be able to find them on the official ZARA platform.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="review"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                  >
                    <div className="reviews-area">
                      <div className="row g-lg-4 gy-5">
                        <div className="col-lg-7">
                          <div className="comment-and-form-area two">
                            <div className="comment-area">
                              <div className="comment-title">
                                <h4>Review (02)</h4>
                              </div>
                              <ul className="comment">
                                <li>
                                  <div className="single-comment-area">
                                    <div className="author-img">
                                      <img
                                        src="assets/img/innerpage/comment-author-01.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="comment-content">
                                      <div className="author-name-deg">
                                        <h6>Mr. Bowmik Haldar,</h6>
                                        <span>05 June, 2023</span>
                                      </div>
                                      <p>
                                        However, here are some well-regarded car
                                        dealerships known for their customer
                                        service, inventory, and overall
                                        reputation. It's always a good idea to
                                        research and read reviews specific...
                                      </p>
                                      <div className="replay-btn">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={14}
                                          height={11}
                                          viewBox="0 0 14 11"
                                        >
                                          <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z"></path>
                                        </svg>
                                        Reply (01)
                                      </div>
                                    </div>
                                  </div>
                                  <ul className="comment-replay">
                                    <li>
                                      <div className="single-comment-area">
                                        <div className="author-img">
                                          <img
                                            src="assets/img/innerpage/comment-author-02.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="comment-content">
                                          <div className="author-name-deg">
                                            <h6>Jacoline Juie,</h6>
                                            <span>05 June, 2023</span>
                                          </div>
                                          <p>
                                            However, here are some well-regarded
                                            car dealerships known for their
                                            customer service, inventory, and
                                            overall reputation. It's always a
                                            good idea to research and read
                                            reviews specific...
                                          </p>
                                          <div className="replay-btn">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width={14}
                                              height={11}
                                              viewBox="0 0 14 11"
                                            >
                                              <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z"></path>
                                            </svg>
                                            Reply
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="review-form">
                            <div className="number-of-review">
                              <h4>Write A Review</h4>
                            </div>
                            <form>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-inner2 mb-40">
                                    <div className="review-rate-area">
                                      <p>Your Rating</p>
                                      <div className="rate">
                                        <input
                                          type="radio"
                                          id="star5"
                                          name="rate"
                                          defaultValue={5}
                                        />
                                        <label htmlFor="star5" title="text">
                                          5 stars
                                        </label>
                                        <input
                                          type="radio"
                                          id="star4"
                                          name="rate"
                                          defaultValue={4}
                                        />
                                        <label htmlFor="star4" title="text">
                                          4 stars
                                        </label>
                                        <input
                                          type="radio"
                                          id="star3"
                                          name="rate"
                                          defaultValue={3}
                                        />
                                        <label htmlFor="star3" title="text">
                                          3 stars
                                        </label>
                                        <input
                                          type="radio"
                                          id="star2"
                                          name="rate"
                                          defaultValue={2}
                                        />
                                        <label htmlFor="star2" title="text">
                                          2 stars
                                        </label>
                                        <input
                                          type="radio"
                                          id="star1"
                                          name="rate"
                                          defaultValue={1}
                                        />
                                        <label htmlFor="star1" title="text">
                                          1 star
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-inner mb-20">
                                    <input
                                      type="text"
                                      placeholder="Name*"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-inner mb-20">
                                    <input
                                      type="email"
                                      placeholder="Email*"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-inner mb-50">
                                    <textarea
                                      placeholder="Message..."
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <button
                                    className="primary-btn5 black btn-hover"
                                    type="submit"
                                  >
                                    Submit Now
                                    <svg
                                      width={12}
                                      height={12}
                                      viewBox="0 0 12 12"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                    </svg>
                                    <span
                                      style={{ top: "50.5px", left: "83.75px" }}
                                    />
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-post-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title">
                <h3>Related Product</h3>
              </div>
              <div className="slider-btn-group">
                <div className="slider-btn prev-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={11}
                    viewBox="0 0 15 11"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                    ></path>
                  </svg>
                </div>
                <div className="slider-btn next-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={11}
                    viewBox="0 0 15 11"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper recent-post-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-img">
                        <Link href="/product-details">
                          <img
                            src="assets/img/innerpage/product-img1.jpg"
                            alt=""
                          />
                          <div className="batch">
                            <span>-20%</span>
                          </div>
                        </Link>
                        <div className="cart-and-favorite-area">
                          <ul>
                            <li>
                              <a href="#">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M13.8934 3.03483C13.183 2.32708 12.2211 1.92969 11.2184 1.92969C10.2156 1.92969 9.25374 2.32708 8.54339 3.03483L8.00339 3.57483L7.46339 3.03483C6.75303 2.32708 5.79114 1.92969 4.78839 1.92969C3.78563 1.92969 2.82374 2.32708 2.11339 3.03483C1.40533 3.74604 1.00781 4.70875 1.00781 5.71233C1.00781 6.7159 1.40533 7.67862 2.11339 8.38983L7.64839 13.9248C7.69487 13.9717 7.75017 14.0089 7.8111 14.0343C7.87203 14.0597 7.93738 14.0727 8.00339 14.0727C8.06939 14.0727 8.13475 14.0597 8.19567 14.0343C8.2566 14.0089 8.3119 13.9717 8.35839 13.9248L13.8934 8.38983C14.6014 7.67862 14.999 6.7159 14.999 5.71233C14.999 4.70875 14.6014 3.74604 13.8934 3.03483ZM13.1884 7.67983L8.00339 12.8648L2.81839 7.67983C2.29719 7.15768 2.00447 6.45008 2.00447 5.71233C2.00447 4.97458 2.29719 4.26697 2.81839 3.74483C3.34138 3.22333 4.04982 2.93048 4.78839 2.93048C5.52696 2.93048 6.23539 3.22333 6.75839 3.74483L7.64839 4.63483C7.69487 4.68169 7.75017 4.71889 7.8111 4.74427C7.87203 4.76966 7.93738 4.78273 8.00339 4.78273C8.06939 4.78273 8.13475 4.76966 8.19567 4.74427C8.2566 4.71889 8.3119 4.68169 8.35839 4.63483L9.24839 3.74483C9.77138 3.22333 10.4798 2.93048 11.2184 2.93048C11.957 2.93048 12.6654 3.22333 13.1884 3.74483C13.7096 4.26697 14.0023 4.97458 14.0023 5.71233C14.0023 6.45008 13.7096 7.15768 13.1884 7.67983Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <Link href="/cart">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                                  <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-card-content">
                        <h6>
                          <Link href="/product-details">Modern Sunglasses</Link>
                        </h6>
                        <span>
                          $190.00 <del>$214.00</del>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-img">
                        <Link href="/product-details">
                          <img
                            src="assets/img/innerpage/product-img2.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="cart-and-favorite-area">
                          <ul>
                            <li>
                              <a href="#">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M13.8934 3.03483C13.183 2.32708 12.2211 1.92969 11.2184 1.92969C10.2156 1.92969 9.25374 2.32708 8.54339 3.03483L8.00339 3.57483L7.46339 3.03483C6.75303 2.32708 5.79114 1.92969 4.78839 1.92969C3.78563 1.92969 2.82374 2.32708 2.11339 3.03483C1.40533 3.74604 1.00781 4.70875 1.00781 5.71233C1.00781 6.7159 1.40533 7.67862 2.11339 8.38983L7.64839 13.9248C7.69487 13.9717 7.75017 14.0089 7.8111 14.0343C7.87203 14.0597 7.93738 14.0727 8.00339 14.0727C8.06939 14.0727 8.13475 14.0597 8.19567 14.0343C8.2566 14.0089 8.3119 13.9717 8.35839 13.9248L13.8934 8.38983C14.6014 7.67862 14.999 6.7159 14.999 5.71233C14.999 4.70875 14.6014 3.74604 13.8934 3.03483ZM13.1884 7.67983L8.00339 12.8648L2.81839 7.67983C2.29719 7.15768 2.00447 6.45008 2.00447 5.71233C2.00447 4.97458 2.29719 4.26697 2.81839 3.74483C3.34138 3.22333 4.04982 2.93048 4.78839 2.93048C5.52696 2.93048 6.23539 3.22333 6.75839 3.74483L7.64839 4.63483C7.69487 4.68169 7.75017 4.71889 7.8111 4.74427C7.87203 4.76966 7.93738 4.78273 8.00339 4.78273C8.06939 4.78273 8.13475 4.76966 8.19567 4.74427C8.2566 4.71889 8.3119 4.68169 8.35839 4.63483L9.24839 3.74483C9.77138 3.22333 10.4798 2.93048 11.2184 2.93048C11.957 2.93048 12.6654 3.22333 13.1884 3.74483C13.7096 4.26697 14.0023 4.97458 14.0023 5.71233C14.0023 6.45008 13.7096 7.15768 13.1884 7.67983Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <Link href="/cart">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                                  <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-card-content">
                        <h6>
                          <Link href="/product-details">Velvet Vibrance</Link>
                        </h6>
                        <span>$170.00</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-img">
                        <Link href="/product-details">
                          <img
                            src="assets/img/innerpage/product-img3.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="cart-and-favorite-area">
                          <ul>
                            <li>
                              <a href="#">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M13.8934 3.03483C13.183 2.32708 12.2211 1.92969 11.2184 1.92969C10.2156 1.92969 9.25374 2.32708 8.54339 3.03483L8.00339 3.57483L7.46339 3.03483C6.75303 2.32708 5.79114 1.92969 4.78839 1.92969C3.78563 1.92969 2.82374 2.32708 2.11339 3.03483C1.40533 3.74604 1.00781 4.70875 1.00781 5.71233C1.00781 6.7159 1.40533 7.67862 2.11339 8.38983L7.64839 13.9248C7.69487 13.9717 7.75017 14.0089 7.8111 14.0343C7.87203 14.0597 7.93738 14.0727 8.00339 14.0727C8.06939 14.0727 8.13475 14.0597 8.19567 14.0343C8.2566 14.0089 8.3119 13.9717 8.35839 13.9248L13.8934 8.38983C14.6014 7.67862 14.999 6.7159 14.999 5.71233C14.999 4.70875 14.6014 3.74604 13.8934 3.03483ZM13.1884 7.67983L8.00339 12.8648L2.81839 7.67983C2.29719 7.15768 2.00447 6.45008 2.00447 5.71233C2.00447 4.97458 2.29719 4.26697 2.81839 3.74483C3.34138 3.22333 4.04982 2.93048 4.78839 2.93048C5.52696 2.93048 6.23539 3.22333 6.75839 3.74483L7.64839 4.63483C7.69487 4.68169 7.75017 4.71889 7.8111 4.74427C7.87203 4.76966 7.93738 4.78273 8.00339 4.78273C8.06939 4.78273 8.13475 4.76966 8.19567 4.74427C8.2566 4.71889 8.3119 4.68169 8.35839 4.63483L9.24839 3.74483C9.77138 3.22333 10.4798 2.93048 11.2184 2.93048C11.957 2.93048 12.6654 3.22333 13.1884 3.74483C13.7096 4.26697 14.0023 4.97458 14.0023 5.71233C14.0023 6.45008 13.7096 7.15768 13.1884 7.67983Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <Link href="/cart">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                                  <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-card-content">
                        <h6>
                          <Link href="/product-details">
                            Chronograph Watches
                          </Link>
                        </h6>
                        <span>$250.00</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-img">
                        <Link href="/product-details">
                          <img
                            src="assets/img/innerpage/product-img4.jpg"
                            alt=""
                          />
                          <div className="batch">
                            <span>-10%</span>
                          </div>
                        </Link>
                        <div className="cart-and-favorite-area">
                          <ul>
                            <li>
                              <a href="#">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M13.8934 3.03483C13.183 2.32708 12.2211 1.92969 11.2184 1.92969C10.2156 1.92969 9.25374 2.32708 8.54339 3.03483L8.00339 3.57483L7.46339 3.03483C6.75303 2.32708 5.79114 1.92969 4.78839 1.92969C3.78563 1.92969 2.82374 2.32708 2.11339 3.03483C1.40533 3.74604 1.00781 4.70875 1.00781 5.71233C1.00781 6.7159 1.40533 7.67862 2.11339 8.38983L7.64839 13.9248C7.69487 13.9717 7.75017 14.0089 7.8111 14.0343C7.87203 14.0597 7.93738 14.0727 8.00339 14.0727C8.06939 14.0727 8.13475 14.0597 8.19567 14.0343C8.2566 14.0089 8.3119 13.9717 8.35839 13.9248L13.8934 8.38983C14.6014 7.67862 14.999 6.7159 14.999 5.71233C14.999 4.70875 14.6014 3.74604 13.8934 3.03483ZM13.1884 7.67983L8.00339 12.8648L2.81839 7.67983C2.29719 7.15768 2.00447 6.45008 2.00447 5.71233C2.00447 4.97458 2.29719 4.26697 2.81839 3.74483C3.34138 3.22333 4.04982 2.93048 4.78839 2.93048C5.52696 2.93048 6.23539 3.22333 6.75839 3.74483L7.64839 4.63483C7.69487 4.68169 7.75017 4.71889 7.8111 4.74427C7.87203 4.76966 7.93738 4.78273 8.00339 4.78273C8.06939 4.78273 8.13475 4.76966 8.19567 4.74427C8.2566 4.71889 8.3119 4.68169 8.35839 4.63483L9.24839 3.74483C9.77138 3.22333 10.4798 2.93048 11.2184 2.93048C11.957 2.93048 12.6654 3.22333 13.1884 3.74483C13.7096 4.26697 14.0023 4.97458 14.0023 5.71233C14.0023 6.45008 13.7096 7.15768 13.1884 7.67983Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <Link href="/cart">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                                  <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-card-content">
                        <h6>
                          <Link href="/product-details">Modern Minimalist</Link>
                        </h6>
                        <span>
                          $150.00 <del>$180.00</del>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-img">
                        <Link href="/product-details">
                          <img
                            src="assets/img/innerpage/product-img5.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="cart-and-favorite-area">
                          <ul>
                            <li>
                              <a href="#">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M13.8934 3.03483C13.183 2.32708 12.2211 1.92969 11.2184 1.92969C10.2156 1.92969 9.25374 2.32708 8.54339 3.03483L8.00339 3.57483L7.46339 3.03483C6.75303 2.32708 5.79114 1.92969 4.78839 1.92969C3.78563 1.92969 2.82374 2.32708 2.11339 3.03483C1.40533 3.74604 1.00781 4.70875 1.00781 5.71233C1.00781 6.7159 1.40533 7.67862 2.11339 8.38983L7.64839 13.9248C7.69487 13.9717 7.75017 14.0089 7.8111 14.0343C7.87203 14.0597 7.93738 14.0727 8.00339 14.0727C8.06939 14.0727 8.13475 14.0597 8.19567 14.0343C8.2566 14.0089 8.3119 13.9717 8.35839 13.9248L13.8934 8.38983C14.6014 7.67862 14.999 6.7159 14.999 5.71233C14.999 4.70875 14.6014 3.74604 13.8934 3.03483ZM13.1884 7.67983L8.00339 12.8648L2.81839 7.67983C2.29719 7.15768 2.00447 6.45008 2.00447 5.71233C2.00447 4.97458 2.29719 4.26697 2.81839 3.74483C3.34138 3.22333 4.04982 2.93048 4.78839 2.93048C5.52696 2.93048 6.23539 3.22333 6.75839 3.74483L7.64839 4.63483C7.69487 4.68169 7.75017 4.71889 7.8111 4.74427C7.87203 4.76966 7.93738 4.78273 8.00339 4.78273C8.06939 4.78273 8.13475 4.76966 8.19567 4.74427C8.2566 4.71889 8.3119 4.68169 8.35839 4.63483L9.24839 3.74483C9.77138 3.22333 10.4798 2.93048 11.2184 2.93048C11.957 2.93048 12.6654 3.22333 13.1884 3.74483C13.7096 4.26697 14.0023 4.97458 14.0023 5.71233C14.0023 6.45008 13.7096 7.15768 13.1884 7.67983Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <Link href="/cart">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                                  <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-card-content">
                        <h6>
                          <Link href="/product-details">Wall Print Paper</Link>
                        </h6>
                        <span>$400.00</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="product-card">
                      <div className="product-card-img">
                        <Link href="/product-details">
                          <img
                            src="assets/img/innerpage/product-img6.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="cart-and-favorite-area">
                          <ul>
                            <li>
                              <a href="#">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M13.8934 3.03483C13.183 2.32708 12.2211 1.92969 11.2184 1.92969C10.2156 1.92969 9.25374 2.32708 8.54339 3.03483L8.00339 3.57483L7.46339 3.03483C6.75303 2.32708 5.79114 1.92969 4.78839 1.92969C3.78563 1.92969 2.82374 2.32708 2.11339 3.03483C1.40533 3.74604 1.00781 4.70875 1.00781 5.71233C1.00781 6.7159 1.40533 7.67862 2.11339 8.38983L7.64839 13.9248C7.69487 13.9717 7.75017 14.0089 7.8111 14.0343C7.87203 14.0597 7.93738 14.0727 8.00339 14.0727C8.06939 14.0727 8.13475 14.0597 8.19567 14.0343C8.2566 14.0089 8.3119 13.9717 8.35839 13.9248L13.8934 8.38983C14.6014 7.67862 14.999 6.7159 14.999 5.71233C14.999 4.70875 14.6014 3.74604 13.8934 3.03483ZM13.1884 7.67983L8.00339 12.8648L2.81839 7.67983C2.29719 7.15768 2.00447 6.45008 2.00447 5.71233C2.00447 4.97458 2.29719 4.26697 2.81839 3.74483C3.34138 3.22333 4.04982 2.93048 4.78839 2.93048C5.52696 2.93048 6.23539 3.22333 6.75839 3.74483L7.64839 4.63483C7.69487 4.68169 7.75017 4.71889 7.8111 4.74427C7.87203 4.76966 7.93738 4.78273 8.00339 4.78273C8.06939 4.78273 8.13475 4.76966 8.19567 4.74427C8.2566 4.71889 8.3119 4.68169 8.35839 4.63483L9.24839 3.74483C9.77138 3.22333 10.4798 2.93048 11.2184 2.93048C11.957 2.93048 12.6654 3.22333 13.1884 3.74483C13.7096 4.26697 14.0023 4.97458 14.0023 5.71233C14.0023 6.45008 13.7096 7.15768 13.1884 7.67983Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <Link href="/cart">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11.9016 15H4.10156C2.45156 15 1.10156 13.65 1.10156 12V11.9L1.40156 3.9C1.45156 2.25 2.80156 1 4.40156 1H11.6016C13.2016 1 14.5516 2.25 14.6016 3.9L14.9016 11.9C14.9516 12.7 14.6516 13.45 14.1016 14.05C13.5516 14.65 12.8016 15 12.0016 15H11.9016ZM4.40156 2C3.30156 2 2.45156 2.85 2.40156 3.9L2.10156 12C2.10156 13.1 3.00156 14 4.10156 14H12.0016C12.5516 14 13.0516 13.75 13.4016 13.35C13.7516 12.95 13.9516 12.45 13.9516 11.9L13.6516 3.9C13.6016 2.8 12.7516 2 11.6516 2H4.40156Z" />
                                  <path d="M8 7C6.05 7 4.5 5.45 4.5 3.5C4.5 3.2 4.7 3 5 3C5.3 3 5.5 3.2 5.5 3.5C5.5 4.9 6.6 6 8 6C9.4 6 10.5 4.9 10.5 3.5C10.5 3.2 10.7 3 11 3C11.3 3 11.5 3.2 11.5 3.5C11.5 5.45 9.95 7 8 7Z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-card-content">
                        <h6>
                          <Link href="/product-details">Crimson Cascade</Link>
                        </h6>
                        <span>$123.00</span>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
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

export default ProductDetailsPage;

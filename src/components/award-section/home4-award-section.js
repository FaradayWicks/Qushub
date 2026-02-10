"use client";
import ModalVideo from "react-modal-video";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home4AwardSection = () => {
   const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      // loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".franctional-pagi6",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
      },
    };
  }, []);
  return (
    <div className="home4-award-section mb-130">
    <div className="container-lg container-fluid">
      <div className="row mb-60">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Our <span> Awards.</span></h2>
            <div className="dash-and-paragraph three">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 788 64">
                <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM787 3L787.165 3.47208L787 2.5V3ZM726.137 64L729.557 59.3484L723.818 58.7125L726.137 64ZM3 3.5H787V2.5H3V3.5ZM786.835 2.52792C774.481 6.83921 760.535 13.0389 749.066 22.1679C737.59 31.3017 728.573 43.3858 726.138 59.453L727.127 59.6028C729.514 43.8512 738.351 31.9742 749.689 22.9503C761.032 13.9214 774.859 7.7666 787.165 3.47208L786.835 2.52792Z" />
              </svg>
              <div className="btn-and-paragraph mt-0">
                <p>Creating a concise and effective design studio brief is crucial for outlining
                  your business, its services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-2 d-lg-flex d-none">
          <div className="franctional-pagi6" />
        </div>
        <div className="col-xl-10">
          <Swiper {...settings} className="swiper home4-award-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="home4-award-slider-wrap">
                  <div className="row g-lg-4 gy-5">
                    <div className="col-md-4 d-flex align-items-center">
                      <div className="award-content">
                        <h2>Digital Innovation</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 134" fill="none">
                          <path d="M22.3329 3C22.3329 4.47276 23.5268 5.66667 24.9995 5.66667C26.4723 5.66667 27.6662 4.47276 27.6662 3C27.6662 1.52724 26.4723 0.333333 24.9995 0.333333C23.5268 0.333333 22.3329 1.52724 22.3329 3ZM24.9998 112L25.1494 112.477L25.1571 112.475L25.1647 112.472L24.9998 112ZM24.9999 131L20.285 127.668L19.7568 133.417L24.9999 131ZM331.435 4.94405L331.27 4.47202L331.435 4.94405ZM24.9995 3.5H331.105V2.5H24.9995V3.5ZM331.27 4.47202L24.8349 111.528L25.1647 112.472L331.6 5.41607L331.27 4.47202ZM24.8501 111.523C18.739 113.44 13.4156 115.362 9.36195 117.221C7.33543 118.15 5.61514 119.068 4.26847 119.969C2.93072 120.863 1.9208 121.766 1.36259 122.678C0.786949 123.619 0.67813 124.604 1.22066 125.539C1.73254 126.422 2.77982 127.176 4.29278 127.839C7.33352 129.17 12.5855 130.267 20.4687 131.086L20.572 130.091C12.6991 129.274 7.58161 128.187 4.69384 126.923C3.24255 126.287 2.43581 125.641 2.08569 125.037C1.76621 124.487 1.78741 123.9 2.21557 123.2C2.66116 122.472 3.52883 121.666 4.82424 120.8C6.11074 119.94 7.77918 119.046 9.77874 118.13C13.7773 116.296 19.0554 114.389 25.1494 112.477L24.8501 111.523ZM331.105 3.5C331.668 3.5 331.802 4.28631 331.27 4.47202L331.6 5.41607C333.195 4.85893 332.794 2.5 331.105 2.5V3.5Z" fill="#2F2F2F" />
                        </svg>
                        <ul>
                          <li>2023</li>
                          <li>Linkedin Platform</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="award-img">
                        <img src="assets/img/home4/award-01.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="home4-award-slider-wrap">
                  <div className="row g-lg-4 gy-5">
                    <div className="col-md-4 d-flex align-items-center">
                      <div className="award-content">
                        <h2>Mastermind</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 134" fill="none">
                          <path d="M22.3329 3C22.3329 4.47276 23.5268 5.66667 24.9995 5.66667C26.4723 5.66667 27.6662 4.47276 27.6662 3C27.6662 1.52724 26.4723 0.333333 24.9995 0.333333C23.5268 0.333333 22.3329 1.52724 22.3329 3ZM24.9998 112L25.1494 112.477L25.1571 112.475L25.1647 112.472L24.9998 112ZM24.9999 131L20.285 127.668L19.7568 133.417L24.9999 131ZM331.435 4.94405L331.27 4.47202L331.435 4.94405ZM24.9995 3.5H331.105V2.5H24.9995V3.5ZM331.27 4.47202L24.8349 111.528L25.1647 112.472L331.6 5.41607L331.27 4.47202ZM24.8501 111.523C18.739 113.44 13.4156 115.362 9.36195 117.221C7.33543 118.15 5.61514 119.068 4.26847 119.969C2.93072 120.863 1.9208 121.766 1.36259 122.678C0.786949 123.619 0.67813 124.604 1.22066 125.539C1.73254 126.422 2.77982 127.176 4.29278 127.839C7.33352 129.17 12.5855 130.267 20.4687 131.086L20.572 130.091C12.6991 129.274 7.58161 128.187 4.69384 126.923C3.24255 126.287 2.43581 125.641 2.08569 125.037C1.76621 124.487 1.78741 123.9 2.21557 123.2C2.66116 122.472 3.52883 121.666 4.82424 120.8C6.11074 119.94 7.77918 119.046 9.77874 118.13C13.7773 116.296 19.0554 114.389 25.1494 112.477L24.8501 111.523ZM331.105 3.5C331.668 3.5 331.802 4.28631 331.27 4.47202L331.6 5.41607C333.195 4.85893 332.794 2.5 331.105 2.5V3.5Z" fill="#2F2F2F" />
                        </svg>
                        <ul>
                          <li>2023</li>
                          <li>Behance Platform</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="award-img">
                        <img src="assets/img/home4/award-02.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="home4-award-slider-wrap">
                  <div className="row g-lg-4 gy-5">
                    <div className="col-md-4 d-flex align-items-center">
                      <div className="award-content">
                        <h2>Digital Vanguard</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 134" fill="none">
                          <path d="M22.3329 3C22.3329 4.47276 23.5268 5.66667 24.9995 5.66667C26.4723 5.66667 27.6662 4.47276 27.6662 3C27.6662 1.52724 26.4723 0.333333 24.9995 0.333333C23.5268 0.333333 22.3329 1.52724 22.3329 3ZM24.9998 112L25.1494 112.477L25.1571 112.475L25.1647 112.472L24.9998 112ZM24.9999 131L20.285 127.668L19.7568 133.417L24.9999 131ZM331.435 4.94405L331.27 4.47202L331.435 4.94405ZM24.9995 3.5H331.105V2.5H24.9995V3.5ZM331.27 4.47202L24.8349 111.528L25.1647 112.472L331.6 5.41607L331.27 4.47202ZM24.8501 111.523C18.739 113.44 13.4156 115.362 9.36195 117.221C7.33543 118.15 5.61514 119.068 4.26847 119.969C2.93072 120.863 1.9208 121.766 1.36259 122.678C0.786949 123.619 0.67813 124.604 1.22066 125.539C1.73254 126.422 2.77982 127.176 4.29278 127.839C7.33352 129.17 12.5855 130.267 20.4687 131.086L20.572 130.091C12.6991 129.274 7.58161 128.187 4.69384 126.923C3.24255 126.287 2.43581 125.641 2.08569 125.037C1.76621 124.487 1.78741 123.9 2.21557 123.2C2.66116 122.472 3.52883 121.666 4.82424 120.8C6.11074 119.94 7.77918 119.046 9.77874 118.13C13.7773 116.296 19.0554 114.389 25.1494 112.477L24.8501 111.523ZM331.105 3.5C331.668 3.5 331.802 4.28631 331.27 4.47202L331.6 5.41607C333.195 4.85893 332.794 2.5 331.105 2.5V3.5Z" fill="#2F2F2F" />
                        </svg>
                        <ul>
                          <li>2022</li>
                          <li>Adobe Platform</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="award-img">
                        <img src="assets/img/home4/award-03.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-8 d-flex justify-content-end">
              <div className="slider-btn-area">
                <div className="slider-btn-group w-100">
                  <div className="slider-btn prev-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z" />
                    </svg>
                  </div>
                  <div className="slider-btn next-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home4AwardSection

"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home5WorkSection = () => {
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
        navigation: {
          nextEl: ".next-1",
          prevEl: ".prev-1",
        },
    };
  }, []);
  return (
    <div className="home5-work-section mb-130">
    <div className="verticle-text">
      <h2>My Work</h2>
    </div>
    <div className="container-lg container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-animation mb-15">
            <h2>My Work</h2>
            <Link className="primary-btn4 btn-hover" href="/portfolio-showcase">
              View All Work
              <svg width={11} height={11} viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.9532 0.0585938L10.7354 1.14748C10.5496 2.07672 10.2769 3.53489 10.1863 5.1213C10.095 6.71893 10.1931 8.37925 10.7023 9.73705C10.8477 10.1249 10.6512 10.5572 10.2634 10.7026C9.87551 10.8481 9.4432 10.6516 9.29776 10.2637C8.68194 8.62153 8.59252 6.71935 8.68873 5.03573C8.72553 4.39179 8.79018 3.76993 8.86659 3.19447L1.53034 10.5307C1.23745 10.8236 0.762572 10.8236 0.469679 10.5307C0.176786 10.2378 0.176786 9.76295 0.469679 9.47006L7.82528 2.11446C7.18273 2.19925 6.48717 2.27186 5.77637 2.31171C4.07615 2.40705 2.18197 2.32292 0.70457 1.68975C0.323847 1.52658 0.147484 1.08567 0.31065 0.704951C0.473817 0.324229 0.914726 0.147865 1.29545 0.311032C2.44305 0.802862 4.04886 0.906228 5.69239 0.814067C7.31348 0.723165 8.86779 0.449612 9.86179 0.263237L10.9532 0.0585938Z" />
              </svg>
              <span style={{top: '50.5px', left: '83.75px'}} />
            </Link>
          </div>
        </div>
      </div>
      <div className="row justify-content-end mb-60">
        <div className="col-xl-7 col-lg-10">
          <div className="paragraph-and-btn-area">
            <div className="text-animation">
              <p>Creating a concise and effective design studio brief is crucial for outlining
                your business, its services.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="work-wrapper">
        <div className="shape">
          <img src="assets/img/home5/work-card-shape.svg" alt="" />
        </div>
        <div className="duration">
          <h6>Selected work *<span>(2020-2024)</span></h6>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-lg-5 col-md-6">
            <Swiper {...settings} className="swiper work-card-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="work-card magnetic-item">
                    <div className="work-img">
                      <Link href="/portfolio-details"><img src="assets/img/home5/work-card-img1.jpg" alt="" /></Link>
                      <div className="batch">
                        <span>Design Kit</span>
                      </div>
                    </div>
                    <div className="work-content">
                      <h5><Link href="/portfolio-details">Digital Brand Design.</Link></h5>
                      <span>April, 2024</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="work-card magnetic-item">
                    <div className="work-img">
                      <Link href="/portfolio-details"><img src="assets/img/home5/work-card-img2.jpg" alt="" /></Link>
                      <div className="batch">
                        <span>Design Kit</span>
                      </div>
                    </div>
                    <div className="work-content">
                      <h5><Link href="/portfolio-details">Social Brand Growth.</Link></h5>
                      <span>April, 2024</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="work-card magnetic-item">
                    <div className="work-img">
                      <Link href="/portfolio-details"><img src="assets/img/home5/work-card-img3.jpg" alt="" /></Link>
                      <div className="batch">
                        <span>Design Kit</span>
                      </div>
                    </div>
                    <div className="work-content">
                      <h5><Link href="/portfolio-details">Virtual Marketing.</Link></h5>
                      <span>March, 2024</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="work-card magnetic-item">
                    <div className="work-img">
                      <Link href="/portfolio-details"><img src="assets/img/home5/work-card-img4.jpg" alt="" /></Link>
                      <div className="batch">
                        <span>Design Kit</span>
                      </div>
                    </div>
                    <div className="work-content">
                      <h5><Link href="/portfolio-details">Electronic Advertising</Link></h5>
                      <span>April, 2024</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="slider-btn-grp">
          <div className="slider-btn prev-1">
            Prev
            <svg width={44} height={16} viewBox="0 0 44 16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.9724 4.57466C3.53663 5.90695 1.82779 6.94274 0.749405 7.56733L0.0632706 7.96473L0.717579 8.4126C0.912178 8.5458 1.13858 8.69497 1.3884 8.85958C2.35433 9.49603 3.67045 10.3632 4.8525 11.43C6.35309 12.7843 7.5 14.343 7.5 16H8.5C8.5 13.8923 7.06358 12.0785 5.5225 10.6876C4.57028 9.82827 3.52571 9.08577 2.65559 8.5H44V7.5H2.78129C3.69083 6.91126 4.7219 6.17131 5.6526 5.30769C7.16108 3.90794 8.5 2.09655 8.5 0H7.5C7.5 1.66815 6.42225 3.22932 4.9724 4.57466Z" />
            </svg>
          </div>
          <div className="slider-btn next-1">
            <svg width={44} height={16} viewBox="0 0 44 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M39.0276 4.57466C40.4634 5.90695 42.1722 6.94274 43.2506 7.56733L43.9367 7.96473L43.2824 8.4126C43.0878 8.5458 42.8614 8.69497 42.6116 8.85958C41.6457 9.49603 40.3295 10.3632 39.1475 11.43C37.6469 12.7843 36.5 14.343 36.5 16H35.5C35.5 13.8923 36.9364 12.0785 38.4775 10.6876C39.4297 9.82827 40.4743 9.08577 41.3444 8.5H0V7.5H41.2187C40.3092 6.91126 39.2781 6.17131 38.3474 5.30769C36.8389 3.90794 35.5 2.09655 35.5 0H36.5C36.5 1.66815 37.5777 3.22932 39.0276 4.57466Z" />
            </svg>
            Next
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home5WorkSection

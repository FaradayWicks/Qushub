"use client";
import ModalVideo from "react-modal-video";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, Mousewheel, EffectFade, Navigation, Pagination]);

const Home4WorkSection = () => {
    const settings = useMemo(() => { 
    return {
      slidesPerView: "auto",
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    // mousewheel: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: ".work-fractional-pagi",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next-6",
      prevEl: ".prev-6",
    },
    };
  }, []);
  return (
    <div className="home4-work-section mb-130">
    <div className="container-lg container-fluid">
      <div className="row mb-60">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Our <span>Work</span></h2>
            <div className="dash-and-paragraph three">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64" fill="none">
                <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z" fill="#2F2F2F" />
              </svg>
              <div className="btn-and-paragraph">
                <span>Selected work * (2020-2024)</span>
                <p>Creating a concise and effective design studio brief is crucial for outlining
                  your business, its services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Swiper {...settings} className="swiper home4-work-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="single-work-flow">
                  <div className="work-flow-img">
                    <img src="assets/img/home4/work-flow-img.jpg" alt="" />
                  </div>
                  <div className="work-content">
                    <div className="icon-and-content">
                      <img src="assets/img/home4/icon/work-icon.svg" alt="" />
                      <h3><Link href="/portfolio-details">Corporate Brand
                          Revitalization.</Link></h3>
                    </div>
                    <Link href="/portfolio-details" className="primary-btn3 btn-hover">
                      Explore More
                      <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>
                      <span style={{top: '50.5px', left: '83.75px'}} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-work-flow">
                  <div className="work-flow-img">
                    <img src="assets/img/home4/work-flow-img2.png" alt="" />
                  </div>
                  <div className="work-content">
                    <div className="icon-and-content">
                      <img src="assets/img/home4/icon/work-icon2.svg" alt="" />
                      <h3><Link href="/portfolio-details">NexGen Pioneering Digital
                          Solutions.</Link></h3>
                    </div>
                    <Link href="/portfolio-details" className="primary-btn3 btn-hover">
                      Explore More
                      <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>
                      <span style={{top: '50.5px', left: '83.75px'}} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-work-flow">
                  <div className="work-flow-img">
                    <img src="assets/img/home4/work-flow-img3.png" alt="" />
                  </div>
                  <div className="work-content">
                    <div className="icon-and-content">
                      <img src="assets/img/home4/icon/work-icon3.svg" alt="" />
                      <h3><Link href="/portfolio-details">Where Vision Meets
                          Technology.</Link></h3>
                    </div>
                    <Link href="/portfolio-details" className="primary-btn3 btn-hover">
                      Explore More
                      <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>
                      <span style={{top: '50.5px', left: '83.75px'}} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-work-flow">
                  <div className="work-flow-img">
                    <img src="assets/img/home4/work-flow-img4.png" alt="" />
                  </div>
                  <div className="work-content">
                    <div className="icon-and-content">
                      <img src="assets/img/home4/icon/work-icon4.svg" alt="" />
                      <h3><Link href="/portfolio-details">Smart Design, Smarter
                          Solutions.</Link></h3>
                    </div>
                    <Link href="/portfolio-details" className="primary-btn3 btn-hover">
                      Explore More
                      <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>
                      <span style={{top: '50.5px', left: '83.75px'}} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div className="work-fractional-pagi" />
          </Swiper>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home4WorkSection

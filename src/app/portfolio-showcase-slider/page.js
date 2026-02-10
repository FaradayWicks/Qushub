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
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const ShowcaseSlider = () => {
  const settigns = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      // loop: true,
      effect: "fade",
      mousewheel: {
        invert: false,
      },
      navigation: {
        nextEl: ".next-16",
        prevEl: ".prev-16",
      },
    };
  }, []);
  return (
    <>
      <Header />
      <div className="pf-showcase-slider-section">
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
        <div className="slide-btn-group">
          <div className="slider-btn2 prev-16">
            <svg
              width={7}
              height={14}
              viewBox="0 0 8 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
            </svg>{" "}
            Prev
          </div>
          <div className="slider-btn2 next-16">
            Next
            <svg
              width={7}
              height={14}
              viewBox="0 0 8 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
            </svg>
          </div>
        </div>
        <Swiper {...settigns} className="swiper pf-showcase-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div
                className="single-pf-showcase"
                style={{
                  background:
                    'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url("/assets/img/innerpage/interactive-02.jpg")',
                }}
              >
                <div className="pf-img-and-content">
                  <a href="#" className="pf-img">
                    <img
                      src="/assets/img/innerpage/interactive-02.jpg"
                      alt=""
                    />
                  </a>
                  <div className="pf-content">
                    <div className="sn-and-title">
                      <div className="sn">01</div>
                      <svg
                        height={6}
                        viewBox="0 0 140 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM140 3L135 0.113249V5.88675L140 3ZM4.5 3.5H135.5V2.5H4.5V3.5Z" />
                      </svg>
                      <h3>
                        <a href="#">Corporate Brand Revitalization.</a>
                      </h3>
                    </div>
                    <div className="year">© 2024</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="single-pf-showcase"
                style={{
                  background:
                    'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url("/assets/img/innerpage/interactive-03.jpg")',
                }}
              >
                <div className="pf-img-and-content">
                  <a href="#" className="pf-img">
                    <img
                      src="/assets/img/innerpage/interactive-03.jpg"
                      alt=""
                    />
                  </a>
                  <div className="pf-content">
                    <div className="sn-and-title">
                      <div className="sn">02</div>
                      <svg
                        height={6}
                        viewBox="0 0 140 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM140 3L135 0.113249V5.88675L140 3ZM4.5 3.5H135.5V2.5H4.5V3.5Z" />
                      </svg>
                      <h3>
                        <a href="#">We Compose Digital Masterpieces.</a>
                      </h3>
                    </div>
                    <div className="year">© 2024</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="single-pf-showcase"
                style={{
                  background:
                    'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url("/assets/img/innerpage/interactive-04.jpg")',
                }}
              >
                <div className="pf-img-and-content">
                  <a href="#" className="pf-img">
                    <img
                      src="/assets/img/innerpage/interactive-04.jpg"
                      alt=""
                    />
                  </a>
                  <div className="pf-content">
                    <div className="sn-and-title">
                      <div className="sn">03</div>
                      <svg
                        height={6}
                        viewBox="0 0 140 6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM140 3L135 0.113249V5.88675L140 3ZM4.5 3.5H135.5V2.5H4.5V3.5Z" />
                      </svg>
                      <h3>
                        <a href="#">Where Vision Meets Technology.</a>
                      </h3>
                    </div>
                    <div className="year">© 2024</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default ShowcaseSlider;

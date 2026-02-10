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
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const Home3TestimonialSection = () => {
    const [isOpen, setOpen] = useState(false);
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
            pagination: {
              el: ".franctional-pagi3",
              type: "fraction",
            },
            navigation: {
              nextEl: ".next-3",
              prevEl: ".prev-3",
            },
        };
      }, []);
  return (
    <>
       <div className="home3-testimonial-section mb-130">
            <div className="container-lg container-fluid">
            <div className="row mb-70">
                <div className="col-lg-4">
                <div className="sub-title2 text-animation">
                    <h6>Success Story</h6>
                </div>
                </div>
                <div className="col-lg-8">
                <div className="section-title">
                    <div className="text-animation">
                    <h2>Build &amp; enhance brand <br /> within 08 months.</h2>
                    </div>
                    <div className="dash-and-paragraph">
                    <div className="dash" />
                    <div className="paragraph-and-btn">
                        <div className="text-animation">
                        <p>Offer a wide range of services to help businesses establish and enhance
                            their online
                            presence.</p>
                        </div>
                        <Link href="/contact" className="primary-btn3 btn-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                            <path d="M1.82326 6.42493C4.49302 5.27479 6.44651 2.87535 6.98915 0C7.53178 2.87535 9.48527 5.27479 12.1767 6.42493C12.6977 6.64306 14 7 14 7C14 7 12.6977 7.35694 12.1767 7.57507C9.50698 8.74504 7.55349 11.1246 6.98915 14C6.44651 11.1445 4.49302 8.74504 1.82326 7.5949C1.30233 7.35694 0 7.01983 0 7.01983C0 7.01983 1.30233 6.66289 1.82326 6.42493Z">
                            </path>
                        </svg>
                        Get in Touch
                        <span style={{top: '50.5px', left: '83.75px'}} />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 position-relative">
                <svg className="vector" xmlns="http://www.w3.org/2000/svg" width={283} height={289} viewBox="0 0 283 289">
                    <path fillRule="evenodd" clipRule="evenodd" d="M207.105 81C191.538 67.8954 171.441 60 149.5 60C100.071 60 60 100.071 60 149.5C60 177.965 73.2883 203.326 94 219.719V288.359C38.9136 266.322 0 212.455 0 149.5C0 66.9334 66.9334 0 149.5 0C207.378 0 257.575 32.8903 282.419 81H207.105Z" />
                </svg>
                <Swiper {...settings} className="swiper home3-testimonial-slider">
                    <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-wrapper">
                        <div className="row g-lg-4 gy-5">
                            <div className="col-lg-5">
                            <div className="testimonial-img-wrap">
                                <div className="testimonial-img">
                                <img src="assets/img/home3/testimonial-img-01.png" alt="" />
                                </div>
                                <div className="video-icon">
                                <div className="wrapper">
                                    <div className="video-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                        <div className="waves wave-1" />
                                        <div className="waves wave-2" />
                                        <div className="waves wave-3" />
                                        </div>
                                    </div>
                                    <a  style={{ cursor: "pointer" }}
                                onClick={() => setOpen(true)} className="video video-player" data-lity><i className="bi bi-play-fill" /></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-7">
                            <div className="testimonial-content-wrapper">
                                <div className="c-name-and-author">
                                <img className="dark" src="assets/img/home3/icon/client-logo.svg" alt="" />
                                <img className="light" src="assets/img/home3/icon/client-logo-white.svg" alt="" />
                                <span>( Mr. Noufel Haque, CEO &amp; Founder )</span>
                                </div>
                                <p>Establish a customer advisory board with representatives
                                depending on the client's needs, industry.</p>
                                <ul className="counter-wrap">
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">5</h3>
                                        <span>X</span>
                                    </div>
                                    <p>Growth in 08 months</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">5.6</h3>
                                        <span>%</span>
                                    </div>
                                    <p>Avg. Conversion Rate</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">3.5</h3>
                                        <span>X</span>
                                    </div>
                                    <p>Google &amp; Meta Adds</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">160</h3>
                                        <span>K+</span>
                                    </div>
                                    <p>Active Online Platform</p>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-wrapper">
                        <div className="row g-lg-4 gy-5">
                            <div className="col-lg-5">
                            <div className="testimonial-img-wrap">
                                <div className="testimonial-img">
                                <img src="assets/img/home3/testimonial-img-02.png" alt="" />
                                </div>
                                <div className="video-icon">
                                <div className="wrapper">
                                    <div className="video-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                        <div className="waves wave-1" />
                                        <div className="waves wave-2" />
                                        <div className="waves wave-3" />
                                        </div>
                                    </div>
                                    <a  style={{ cursor: "pointer" }}
                                onClick={() => setOpen(true)} className="video video-player" data-lity><i className="bi bi-play-fill" /></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-7">
                            <div className="testimonial-content-wrapper">
                                <div className="c-name-and-author">
                                <img className="dark" src="assets/img/home3/icon/client-logo2.svg" alt="" />
                                <img className="light" src="assets/img/home3/icon/client-logo2-white.svg" alt="" />
                                <span>( Mr. Danial Scoot, CEO &amp; Founder )</span>
                                </div>
                                <p>Create a customer advisory council and appoint
                                representatives based on the needs and sector of the client.
                                </p>
                                <ul className="counter-wrap">
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">7</h3>
                                        <span>X</span>
                                    </div>
                                    <p>Growth in 12 months</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">7.3</h3>
                                        <span>%</span>
                                    </div>
                                    <p>Avg. Conversion Rate</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">4.7</h3>
                                        <span>X</span>
                                    </div>
                                    <p>Google &amp; Meta Adds</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">210</h3>
                                        <span>K+</span>
                                    </div>
                                    <p>Active Online Platform</p>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-wrapper">
                        <div className="row g-lg-4 gy-5">
                            <div className="col-lg-5">
                            <div className="testimonial-img-wrap">
                                <div className="testimonial-img">
                                <img src="assets/img/home3/testimonial-img-03.png" alt="" />
                                </div>
                                <div className="video-icon">
                                <div className="wrapper">
                                    <div className="video-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                        <div className="waves wave-1" />
                                        <div className="waves wave-2" />
                                        <div className="waves wave-3" />
                                        </div>
                                    </div>
                                    <a  style={{ cursor: "pointer" }}
                                onClick={() => setOpen(true)} className="video video-player" data-lity><i className="bi bi-play-fill" /></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-7">
                            <div className="testimonial-content-wrapper">
                                <div className="c-name-and-author">
                                <img className="dark" src="assets/img/home3/icon/client-logo3.svg" alt="" />
                                <img className="light" src="assets/img/home3/icon/client-logo3-white.svg" alt="" />
                                <span>( Mr. David Beckham, CEO &amp; Founder )</span>
                                </div>
                                <p>Depending on the demands and industry of the client, a
                                customer advisory board should be established with members.
                                </p>
                                <ul className="counter-wrap">
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">3</h3>
                                        <span>X</span>
                                    </div>
                                    <p>Growth in 06 months</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">4.8</h3>
                                        <span>%</span>
                                    </div>
                                    <p>Avg. Conversion Rate</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">3.5</h3>
                                        <span>X</span>
                                    </div>
                                    <p>Google &amp; Meta Adds</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">90</h3>
                                        <span>K+</span>
                                    </div>
                                    <p>Active Online Platform</p>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-wrapper">
                        <div className="row g-lg-4 gy-5">
                            <div className="col-lg-5">
                            <div className="testimonial-img-wrap">
                                <div className="testimonial-img">
                                <img src="assets/img/home3/testimonial-img-04.png" alt="" />
                                </div>
                                <div className="video-icon">
                                <div className="wrapper">
                                    <div className="video-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                        <div className="waves wave-1" />
                                        <div className="waves wave-2" />
                                        <div className="waves wave-3" />
                                        </div>
                                    </div>
                                    <a  style={{ cursor: "pointer" }}
                                onClick={() => setOpen(true)} className="video video-player" data-lity><i className="bi bi-play-fill" /></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-7">
                            <div className="testimonial-content-wrapper">
                                <div className="c-name-and-author">
                                <img className="dark" src="assets/img/home3/icon/client-logo4.svg" alt="" />
                                <img className="light" src="assets/img/home3/icon/client-logo4-white.svg" alt="" />
                                <span>( Mr. Sakib Al Hasan, CEO &amp; Founder )</span>
                                </div>
                                <p>Form a group of advisors for customers, selecting people
                                based on the needs and sector of the client.</p>
                                <ul className="counter-wrap">
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">9</h3>
                                        <span>X</span>
                                    </div>
                                    <p>Growth in 08 months</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">8.3</h3>
                                        <span>%</span>
                                    </div>
                                    <p>Avg. Conversion Rate</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">7.5</h3>
                                        <span>X</span>
                                    </div>
                                    <p>Google &amp; Meta Adds</p>
                                    </div>
                                </li>
                                <li className="single-counter">
                                    <div className="content">
                                    <div className="number">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                                        <path d="M19.6734 6.53207V5.32496L18.8198 6.17851L2.70543 22.2929L0.707086 20.2945L16.8196 4.18017L17.673 3.32664H16.466H2.4535V0.5H22.5V20.5465H19.6734V6.53207Z" />
                                        </svg>
                                        <h3 className="counter">390</h3>
                                        <span>K+</span>
                                    </div>
                                    <p>Active Online Platform</p>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    </div>
                </Swiper>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5" />
                <div className="col-lg-7">
                <div className="slider-btn-area">
                    <div className="slider-btn-group w-100">
                    <div className="slider-btn prev-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z" />
                        </svg>
                    </div>
                    <div className="slider-btn next-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z" />
                        </svg>
                    </div>
                    </div>
                    <div className="franctional-pagi3" />
                </div>
                </div>
            </div>
            </div>
            <React.Fragment>
        <ModalVideo
          channel="youtube"
          onClick={() => setOpen(true)}
          isOpen={isOpen}
          animationSpeed="350"
          videoId="r4KpWiK08vM"
          ratio="16:9"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
        </div> 
    </>
  )
}

export default Home3TestimonialSection

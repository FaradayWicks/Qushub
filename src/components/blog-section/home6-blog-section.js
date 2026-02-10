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


const Home6BlogSection = () => {
       const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
    speed: 1500,
    spaceBetween: 25,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next-3",
      prevEl: ".prev-3",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
        };
      }, []);
      
  return (
    <>
    <div className="home6-blog-section">
    <div className="container-lg container-fluid">
        <div className="row mb-60">
        <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-3">
            <div className="section-title3 text-animation">
            <h2>Latest Blog</h2>
            <p>Crafting engaging and compelling blog titles is crucial for attracting readers.</p>
            </div>
            <div className="slider-btn-group two">
            <div className="slider-btn prev-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z">
                </path>
                </svg>
            </div>
            <div className="slider-btn next-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z">
                </path>
                </svg>
            </div>
            </div>
        </div>
        </div>
        <div className="blog-slider-wrap">
        <div className="row">
            <div className="col-lg-12">
            <Swiper {...settings} className="swiper home6-blog-slider">
                <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <div className="blog-card1">
                    <Link href="/blog-details" className="blog-img">
                        <img src="assets/img/home6/blog-img1.jpg" alt="blog-img-01" />
                    </Link>
                    <div className="blog-content">
                        <ul className="mete">
                        <li><Link href="/blog-grid">Creative Design</Link></li>
                        <li><Link href="/blog-grid">02 Apr, 2023</Link></li>
                        </ul>
                        <h4><Link href="/blog-details">Exploring Project Management SaaS
                            Trends.</Link></h4>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="blog-card1">
                    <Link href="/blog-details" className="blog-img">
                        <img src="assets/img/home6/blog-img2.jpg" alt="blog-img-01" />
                    </Link>
                    <div className="blog-content">
                        <ul className="mete">
                        <li><Link href="/blog-grid">Design Trends</Link></li>
                        <li><Link href="/blog-grid">02 Mar, 2024</Link></li>
                        </ul>
                        <h4><Link href="/blog-details">How Project Management SaaS
                            Transforms Work.</Link></h4>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="blog-card1">
                    <Link href="/blog-details" className="blog-img">
                        <img src="assets/img/home6/blog-img3.jpg" alt="blog-img-01" />
                    </Link>
                    <div className="blog-content">
                        <ul className="mete">
                        <li><Link href="/blog-grid">Marketing</Link></li>
                        <li><Link href="/blog-grid">05 Mar, 2024</Link></li>
                        </ul>
                        <h4><Link href="/blog-details">Comparing Top Project Management
                            Tools in 2024.</Link></h4>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="blog-card1">
                    <Link href="/blog-details" className="blog-img">
                        <img src="assets/img/home6/blog-img4.jpg" alt="blog-img-01" />
                    </Link>
                    <div className="blog-content">
                        <ul className="mete">
                        <li><Link href="/blog-grid">Creative Design</Link></li>
                        <li><Link href="/blog-grid">07 Mar, 2024</Link></li>
                        </ul>
                        <h4><Link href="/blog-details">Celebrates Major Milestone in
                            Digital Services</Link></h4>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="blog-card1">
                    <Link href="/blog-details" className="blog-img">
                        <img src="assets/img/home6/blog-img5.jpg" alt="blog-img-01" />
                    </Link>
                    <div className="blog-content">
                        <ul className="mete">
                        <li><Link href="/blog-grid">IT Consulting</Link></li>
                        <li><Link href="/blog-grid">05 Mar, 2024</Link></li>
                        </ul>
                        <h4><Link href="/blog-details">CodeMosaic Showcase: Weaving Digital
                            Brilliance</Link></h4>
                    </div>
                    </div>
                </SwiperSlide>
                </div>
            </Swiper>
            </div>
        </div>
        </div>
    </div>
    </div> 
   </>
  )
}

export default Home6BlogSection

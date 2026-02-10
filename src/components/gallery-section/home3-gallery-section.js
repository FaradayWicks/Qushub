"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Share, Video } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

const Home3GallerySection = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 0,
      loop: true,
      // autoplay: {
      //   delay: 2500, // Autoplay duration in milliseconds
      //   disableOnInteraction: false,
      // },
      

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
      },
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const openLightbox = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };
  const images = [
    {
      id: 1,
      imageBig: "/assets/img/home3/gallery-img-01.png",
    },
    {
      id: 2,
      imageBig: "/assets/img/home3/gallery-img-02.png",
    },
    {
      id: 3,
      imageBig: "/assets/img/home3/gallery-img-03.png",
    },
    {
      id: 4,
      imageBig: "/assets/img/home3/gallery-img-04.png",
    },
    {
      id: 5,
      imageBig: "/assets/img/home3/gallery-img-05.png",
    }
  ];

  return (
    <>
      <div className="home3-gallery-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-title mb-25">
                <h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={13}
                    viewBox="0 0 21 13"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.75024 10.9373C8.83968 11.6054 7.71592 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C7.71592 1 8.83968 1.39457 9.75024 2.06265C8.66454 3.2243 8 4.78454 8 6.5C8 8.21546 8.66454 9.7757 9.75024 10.9373ZM10.5 11.6238C9.39703 12.4861 8.00853 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C8.00853 0 9.39703 0.513889 10.5 1.37616C11.603 0.513889 12.9915 0 14.5 0C18.0899 0 21 2.91015 21 6.5C21 10.0899 18.0899 13 14.5 13C12.9915 13 11.603 12.4861 10.5 11.6238ZM11.2498 2.06265C12.1603 1.39457 13.2841 1 14.5 1C17.5376 1 20 3.46243 20 6.5C20 9.53757 17.5376 12 14.5 12C13.2841 12 12.1603 11.6054 11.2498 10.9373C12.3355 9.7757 13 8.21546 13 6.5C13 4.78454 12.3355 3.2243 11.2498 2.06265ZM10.5 2.72506C11.4299 3.71007 12 5.03846 12 6.5C12 7.96154 11.4299 9.28993 10.5 10.2749C9.57008 9.28993 9 7.96154 9 6.5C9 5.03846 9.57008 3.71007 10.5 2.72506Z"
                    />
                  </svg>
                  OFFICE GALLERY{" "}
                  <svg
                    className="arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={6}
                    viewBox="0 0 50 6"
                  >
                    <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                  </svg>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <Swiper {...settings} className="swiper gallery-slider">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="single-gallery-img">
                  <a
                  style={{cursor:"pointer"}}
                    onClick={() => openLightbox(index)}
                    data-fancybox="gallery"
                    data-caption="Caption Images 1"
                    className="view-btn"
                  >
                    View image
                  </a>
                  <img src={image.imageBig} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <Lightbox
        className="img-fluid"
        open={isOpen}
        index={selectedIndex}
        onClose={closeLightbox}
        slides={images.map((image) => ({ src: image.imageBig }))}
        
      />
    </>
  );
};

export default Home3GallerySection;

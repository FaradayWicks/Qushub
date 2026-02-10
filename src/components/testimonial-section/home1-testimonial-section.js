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

const Home1TestimonialSection = () => {
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
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".franctional-pagi1",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
      },
    };
  }, []);

  useEffect(() => {
    const element = document.querySelectorAll(".badge__char");
    const step = 360 / element.length;

    element.forEach((elem, i) => {
      elem.style.setProperty("--char-rotate", i * step + "deg");
    });
  }, []);
  return (
    <div className="testimonial-section mb-130">
      <div className="vector-2 d-lg-flex d-none">
        <svg
          width={388}
          height={483}
          viewBox="0 0 388 483"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.9996 415.484C49.9996 617.519 213.092 780.968 413.866 780.968C614.641 780.968 777.733 617.519 777.733 415.484C777.733 213.449 614.641 50 413.866 50C213.092 50 49.9996 213.449 49.9996 415.484Z"
            strokeWidth={100}
          />
        </svg>
      </div>
      <div className="container-lg container-fluid">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="sub-title text-animation">
              <h6>
                Client Feedback
                <svg
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
          <div className="col-lg-8">
            <div className="section-title text-animation">
              <h2>
                Feedback plays <strong>a crucial role.</strong>
              </h2>
              <div className="dash-and-paragraph two">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429 64">
                  <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM427 3L427.271 3.42013L428.697 2.5H427V3ZM394.084 64L397.265 59.1819L391.502 58.836L394.084 64ZM3 3.5H427V2.5H3V3.5ZM426.729 2.57987C413.302 11.2438 396.485 27.4669 393.855 59.4675L394.852 59.5494C397.45 27.938 414.03 11.9643 427.271 3.42013L426.729 2.57987Z" />
                </svg>
                <p>
                  Offer a wide range of services to help businesses establish.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...settings} className="swiper testimonial-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="row g-lg-4 gy-5">
                    <div className="col-lg-4">
                      <div className="author-img">
                        <img
                          src="assets/img/home1/testimonial-img-01.png"
                          alt=""
                        />
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
                              <a
                                style={{ cursor: "pointer" }}
                                onClick={() => setOpen(true)}
                                className="video video-player"
                                data-lity
                              >
                                <i className="bi bi-play-fill" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="testimonal-content">
                        <span>Great Agency!</span>
                        <p>
                          By actively seeking, analyzing, and acting upon
                          feedback, a digital agency can continuously refine its
                          processes, enhance client satisfaction, and foster a
                          culture of continuous.
                        </p>
                        <div className="author-area">
                          <div className="content">
                            <h6>Mr. Daniel Scoot</h6>
                            <span>Catch, CEO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="row g-lg-4 gy-5">
                    <div className="col-lg-4">
                      <div className="author-img">
                        <img
                          src="assets/img/home1/testimonial-img-02.png"
                          alt=""
                        />
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
                              <a
                                style={{ cursor: "pointer" }}
                                onClick={() => setOpen(true)}
                                className="video video-player"
                                data-lity
                              >
                                <i className="bi bi-play-fill" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="testimonal-content">
                        <span>Great Agency!</span>
                        <p>
                          The line's length and style can be changed to better
                          fit your document's general layout and style. Stars,
                          dashes, or even a graphical element are some other
                          divider alternatives.
                        </p>
                        <div className="author-area">
                          <div className="content">
                            <h6>Mr. Luke Julian</h6>
                            <span>Catch, CTO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="row g-lg-4 gy-5">
                    <div className="col-lg-4">
                      <div className="author-img">
                        <img
                          src="assets/img/home1/testimonial-img-03.png"
                          alt=""
                        />
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
                              <a
                                style={{ cursor: "pointer" }}
                                onClick={() => setOpen(true)}
                                className="video video-player"
                                data-lity
                              >
                                <i className="bi bi-play-fill" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="testimonal-content">
                        <span>Great Agency!</span>
                        <p>
                          A digital agency can constantly improve customer
                          happiness, continually improve processes, and
                          cultivate a continuous culture by aggressively
                          soliciting, evaluating, and acting upon feedback.
                        </p>
                        <div className="author-area">
                          <div className="content">
                            <h6>Mark Luiz</h6>
                            <span>Catch, CEO</span>
                          </div>
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
          <div className="col-lg-4" />
          <div className="col-lg-7">
            <div className="slider-btn-area">
              <div className="franctional-pagi1" />
              <span className="dash" />
              <div className="slider-btn-group w-100">
                <div className="slider-btn prev-1">
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
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                    />
                  </svg>
                </div>
                <div className="slider-btn next-1">
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
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          onClick={() => setOpen(true)}
          isOpen={isOpen}
          animationSpeed={350}
          videoId="r4KpWiK08vM"
          ratio="16:9"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </div>
  );
};

export default Home1TestimonialSection;

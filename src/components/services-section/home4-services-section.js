"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Home4ServicesSection = () => {
  useEffect(() => {
    const serviceAreas = document.querySelectorAll('.home4-services-area .services-hover');

    // Function to toggle active class and slideToggle on mouse enter
    const handleMouseEnter = function () {
      this.classList.toggle('active');
      const serviceBottomWrap = this.querySelector('.service-bottom-wrap');
      if (serviceBottomWrap) {
        // Set display to block to reveal the element
        serviceBottomWrap.style.display = 'block';
        // Smoothly adjust the height
        serviceBottomWrap.style.transition = 'height 0.4s';
        serviceBottomWrap.style.height = serviceBottomWrap.scrollHeight + 'px';
      }
    };

    // Function to slideUp and remove active class on mouse leave
    const handleMouseLeave = function () {
      const serviceBottomWrap = this.querySelector('.service-bottom-wrap');
      if (serviceBottomWrap) {
        // Smoothly transition the height back to zero
        serviceBottomWrap.style.height = '0';
        // Set display to none after the transition completes
        setTimeout(() => {
          serviceBottomWrap.style.display = 'none';
        }, 100); // Adjust the timeout to match the transition duration
      }
      this.classList.remove('active');
    };

    // Attach mouseenter and mouseleave event listeners to each service area
    serviceAreas.forEach(serviceArea => {
      serviceArea.addEventListener('mouseenter', handleMouseEnter);
      serviceArea.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      serviceAreas.forEach(serviceArea => {
        serviceArea.removeEventListener('mouseenter', handleMouseEnter);
        serviceArea.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="home4-services-area">
    <div className="container-lg container-fluid">
      <div className="row mb-60">
        <div className="col-lg-12 d-flex gap-2 flex-wrap align-items-end justify-content-between">
          <div className="section-title white text-animation">
            <div className="sub-title two mb-20">
              <h6>Our Services
                <svg xmlns="http://www.w3.org/2000/svg" width={50} height={6} viewBox="0 0 50 6">
                  <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                </svg>
              </h6>
            </div>
            <h2>To Make Smart <br />
              <span>Solution.</span>
            </h2>
          </div>
          <div className="paragraph text-animation">
            <p>Creating a concise and effective design studio brief is crucial for outlining your
              business, its services.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mb-10 services-hover">
          <div className="services-card4">
            <div className="services-top">
              <div className="sl-number">
                <h3>01.</h3>
              </div>
              <div className="services-wrapper">
                <div className="title-tag">
                  <h3><Link href="/service-details">Graphic Design</Link></h3>
                  <ul>
                    <li>Color</li>
                    <li>Design</li>
                    <li>Typography</li>
                    <li>Printing</li>
                  </ul>
                </div>
              </div>
              <div className="details-btn-wrap">
                <div className="details-btn">
                  <Link className="primary-btn4 btn-hover" href="/service-details">Explore More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                      </path>
                    </svg>
                    <span style={{top: '50.5px', left: '83.75px'}} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-bottom-wrap">
              <div className="services-btm">
                <div className="span" />
                <div className="paragraph-img">
                  <p>Creating visually appealing graphics, including logos, banners,
                    infographics.</p>
                  <div className="services-img">
                    <img src="assets/img/home4/services-img-01.jpg" alt="" />
                  </div>
                </div>
                <div className="span" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-10 services-hover">
          <div className="services-card4">
            <div className="services-top">
              <div className="sl-number">
                <h3>02.</h3>
              </div>
              <div className="services-wrapper">
                <div className="title-tag">
                  <h3><Link href="/service-details">Branding Design</Link></h3>
                  <ul>
                    <li>Color</li>
                    <li>Design</li>
                    <li>Printing</li>
                  </ul>
                </div>
              </div>
              <div className="details-btn-wrap">
                <div className="details-btn">
                  <Link className="primary-btn4 btn-hover" href="/service-details">Explore More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                      </path>
                    </svg>
                    <span style={{top: '50.5px', left: '83.75px'}} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-bottom-wrap">
              <div className="services-btm">
                <div className="span" />
                <div className="paragraph-img">
                  <p>Iconic logo, cohesive palette, modern typography, capturing brand essence
                    beautifully.</p>
                  <div className="services-img">
                    <img src="assets/img/home4/services-img-02.jpg" alt="" />
                  </div>
                </div>
                <div className="span" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-10 services-hover">
          <div className="services-card4">
            <div className="services-top">
              <div className="sl-number">
                <h3>03.</h3>
              </div>
              <div className="services-wrapper">
                <div className="title-tag">
                  <h3><Link href="/service-details">Web Design</Link></h3>
                  <ul>
                    <li>Color</li>
                    <li>Design</li>
                    <li>Prototyping</li>
                    <li>Testing</li>
                  </ul>
                </div>
              </div>
              <div className="details-btn-wrap">
                <div className="details-btn">
                  <Link className="primary-btn4 btn-hover" href="/service-details">Explore More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                      </path>
                    </svg>
                    <span style={{top: '50.5px', left: '83.75px'}} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-bottom-wrap">
              <div className="services-btm">
                <div className="span" />
                <div className="paragraph-img">
                  <p>Crafting visually stunning websites with user-centric design and
                    functionality.</p>
                  <div className="services-img">
                    <img src="assets/img/home4/services-img-03.jpg" alt="" />
                  </div>
                </div>
                <div className="span" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-10 services-hover">
          <div className="services-card4">
            <div className="services-top">
              <div className="sl-number">
                <h3>04.</h3>
              </div>
              <div className="services-wrapper">
                <div className="title-tag">
                  <h3><Link href="/service-details">UI/UX Design</Link></h3>
                  <ul>
                    <li>Design</li>
                    <li>Usability</li>
                    <li>Typography</li>
                  </ul>
                </div>
              </div>
              <div className="details-btn-wrap">
                <div className="details-btn">
                  <Link className="primary-btn4 btn-hover" href="/service-details">Explore More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                      </path>
                    </svg>
                    <span style={{top: '50.5px', left: '83.75px'}} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-bottom-wrap">
              <div className="services-btm">
                <div className="span" />
                <div className="paragraph-img">
                  <p>User-centric design, seamless interactions, and visually compelling
                    interface for efficiency.</p>
                  <div className="services-img">
                    <img src="assets/img/home4/services-img-04.jpg" alt="" />
                  </div>
                </div>
                <div className="span" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-10 services-hover">
          <div className="services-card4">
            <div className="services-top">
              <div className="sl-number">
                <h3>05.</h3>
              </div>
              <div className="services-wrapper">
                <div className="title-tag">
                  <h3><Link href="/service-details">Print Design</Link></h3>
                  <ul>
                    <li>Posters</li>
                    <li>Design</li>
                    <li>Box Design</li>
                    <li>Packaging</li>
                  </ul>
                </div>
              </div>
              <div className="details-btn-wrap">
                <div className="details-btn">
                  <Link className="primary-btn4 btn-hover" href="/service-details">Explore More
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                      </path>
                    </svg>
                    <span style={{top: '50.5px', left: '83.75px'}} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="service-bottom-wrap">
              <div className="services-btm">
                <div className="span" />
                <div className="paragraph-img">
                  <p>Bold, clean lines showcase elegance and simplicity in sophisticated print
                    design.</p>
                  <div className="services-img">
                    <img src="assets/img/home4/services-img-05.jpg" alt="" />
                  </div>
                </div>
                <div className="span" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home4ServicesSection

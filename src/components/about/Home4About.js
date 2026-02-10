import Link from 'next/link'
import React from 'react'

const Home4About = () => {
  return (
    <>
     <div className="home4-about-section pt-130 mb-60">
    <div className="container-lg container-fluid">
      <div className="row mb-20">
        <div className="col-lg-12">
          <div className="sub-title text-animation mb-20">
            <h6>About Studio
              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={6} viewBox="0 0 50 6">
                <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
              </svg>
            </h6>
          </div>
          <div className="section-title text-animation">
            <h2>Infinite Canvas
              <span>Creations.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-xl-9">
          <div className="row g-lg-4 gy-5">
            <div className="col-md-6">
              <div className="about-content">
                <div className="about-top-content">
                  <p>Creating a concise and effective design studio brief is crucial for
                    outlining
                    your business, its services, and key attributes. Below is a choosing
                    template
                    for a design.</p>
                  <p>When choosing a title, consider the values, <span>aesthetics,</span> and
                    <span>uniqueness</span> that define to your <span>Design Studio.</span>
                  </p>
                </div>
                <ul className="counter-wrap">
                  <li className="single-counter">
                    <div className="number">
                      <h2 className="counter">250</h2>
                      <span>+</span>
                    </div>
                    <p>Projects Delivered</p>
                  </li>
                  <li className="single-counter">
                    <div className="number">
                      <h2 className="counter">34</h2>
                    </div>
                    <p>Total Clients</p>
                  </li>
                </ul>
                <Link className="primary-btn4 btn-hover" href="/about">About More <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                    </path>
                  </svg>
                  <span style={{top: '50.5px', left: '83.75px'}} />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-img-wrap">
                <div className="vectors">
                  <img className="about-vectors-1" src="assets/img/home4/icon/about-vector-01.svg" alt="" />
                  <img className="about-vectors-2" src="assets/img/home4/icon/about-vector-02.svg" alt="" />
                </div>
                <div className="about-img animet-images">
                  <img src="assets/img/home4/about-img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  <div className="partnership-area mb-130">
    <div className="container-lg container-fluid">
      <div className="row">
        <div className="col-lg-12 mb-60 d-flex flex-wrap gap-3 align-items-end justify-content-between wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="section-title text-animation">
            <h2>Our Trusted <br /> <span>Partner.</span></h2>
          </div>
          <div className="total-partner text-animation">
            <Link href="/about">Almost 20+ Partner we have
              <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="row g-4 ">
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="single-pertner magnetic-item">
            <svg xmlns="http://www.w3.org/2000/svg" width={105} height={121} viewBox="0 0 105 121">
              <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
            </svg>
            <span>Technology</span>
            <div className="partner-logos">
              <img className="white" src="assets/img/home4/logo-11.png" alt="" />
              <img className="black" src="assets/img/home4/logo-01.png" alt="" />
            </div>
            <p>Volo Digital Agency</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="single-pertner magnetic-item">
            <svg xmlns="http://www.w3.org/2000/svg" width={105} height={121} viewBox="0 0 105 121">
              <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
            </svg>
            <span>Design</span>
            <div className="partner-logos">
              <img className="white" src="assets/img/home4/logo-22.png" alt="" />
              <img className="black" src="assets/img/home4/logo-02.png" alt="" />
            </div>
            <p>ZurMarke Studio</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="single-pertner magnetic-item">
            <svg xmlns="http://www.w3.org/2000/svg" width={105} height={121} viewBox="0 0 105 121">
              <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
            </svg>
            <span>Consulting</span>
            <div className="partner-logos">
              <img className="white" src="assets/img/home4/logo-33.png" alt="" />
              <img className="black" src="assets/img/home4/logo-03.png" alt="" />
            </div>
            <p>Pathpoint Consulting</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="single-pertner magnetic-item">
            <svg xmlns="http://www.w3.org/2000/svg" width={105} height={121} viewBox="0 0 105 121">
              <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
            </svg>
            <span>Technology</span>
            <div className="partner-logos">
              <img className="white" src="assets/img/home4/logo-44.png" alt="" />
              <img className="black" src="assets/img/home4/logo-04.png" alt="" />
            </div>
            <p>Digiart Agency</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="single-pertner magnetic-item">
            <svg xmlns="http://www.w3.org/2000/svg" width={105} height={121} viewBox="0 0 105 121">
              <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
            </svg>
            <span>Design</span>
            <div className="partner-logos">
              <img className="white" src="assets/img/home4/logo-55.png" alt="" />
              <img className="black" src="assets/img/home4/logo-05.png" alt="" />
            </div>
            <p>ZurMarke Studio</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="single-pertner magnetic-item">
            <svg xmlns="http://www.w3.org/2000/svg" width={105} height={121} viewBox="0 0 105 121">
              <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
            </svg>
            <span>Consulting</span>
            <div className="partner-logos">
              <img className="white" src="assets/img/home4/logo-66.png" alt="" />
              <img className="black" src="assets/img/home4/logo-06.png" alt="" />
            </div>
            <p>Pathpoint Consulting</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="single-pertner magnetic-item">
            <svg xmlns="http://www.w3.org/2000/svg" width={105} height={121} viewBox="0 0 105 121">
              <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
            </svg>
            <span>Technology</span>
            <div className="partner-logos">
              <img className="white" src="assets/img/home4/logo-77.png" alt="" />
              <img className="black" src="assets/img/home4/logo-07.png" alt="" />
            </div>
            <p>Digiart Agency</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="single-pertner magnetic-item">
            <svg xmlns="http://www.w3.org/2000/svg" width={105} height={121} viewBox="0 0 105 121">
              <path d="M89.5878 -9.19809L90 -8.59758L90.4122 -9.19809L117.267 -48.3197L115.945 -0.858616L115.925 -0.129375L116.612 -0.373528L161.416 -16.2858L132.406 21.3044L131.96 21.8831L132.661 22.0895L178.229 35.5L132.661 48.9105L131.96 49.1169L132.406 49.6956L161.416 87.2858L116.612 71.3735L115.925 71.1294L115.945 71.8586L117.267 119.32L90.4122 80.1981L90 79.5976L89.5878 80.1981L62.7327 119.32L64.0546 71.8586L64.075 71.129L63.3873 71.3736L18.6534 87.2858L47.5939 49.6952L48.0394 49.1166L47.3389 48.9105L1.77101 35.5L47.3389 22.0895L48.0394 21.8834L47.5939 21.3048L18.6534 -16.2858L63.3873 -0.373611L64.075 -0.12899L64.0546 -0.858616L62.7327 -48.3197L89.5878 -9.19809Z" />
            </svg>
            <span>Consulting</span>
            <div className="partner-logos">
              <img className="white" src="assets/img/home4/logo-88.png" alt="" />
              <img className="black" src="assets/img/home4/logo-08.png" alt="" />
            </div>
            <p>ZurMarke Studio</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Home4About

import React from 'react'
import Marquee from 'react-fast-marquee'

const Home3About = () => {
  return (
    <>
       <div className="home3-about-section mb-130">
    <div className="container-lg container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <div className="sub-title2 text-animation">
            <h6>Business Growth</h6>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="section-title five mb-70 text-animation">
            <h2>Build and enhance brand visibility to ensure
              <span>that the target audience is aware of the products services.</span>
            </h2>
          </div>
          <ul className="counter-wrap">
            <li className="single-counter">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 80 80">
                  <path d="M59.063 20.9375C58.8911 10.5625 50.4067 2.1875 40.0005 2.1875C29.5942 2.1875 21.1098 10.5781 20.938 20.9375C16.1723 21.0156 11.688 22.8281 8.18796 26.1094C4.48483 29.5938 2.34421 34.3281 2.18796 39.4062C2.03171 44.4844 3.85983 49.3438 7.35983 53.0469C10.8442 56.75 15.5786 58.8906 20.6567 59.0469H20.9223C21.0005 63.8125 22.813 68.3125 26.0942 71.7969C29.5786 75.5 34.313 77.6406 39.3911 77.7969C39.5942 77.7969 39.7973 77.8125 39.9848 77.8125C44.8598 77.8125 49.4692 75.9844 53.0317 72.6406C56.7348 69.1562 58.8755 64.4219 59.0317 59.3438V59.0781C69.4067 58.9062 77.7817 50.4219 77.7817 40.0156C77.813 29.5938 69.4223 21.1094 59.063 20.9375ZM40.0005 2.8125C50.063 2.8125 58.2661 10.9219 58.438 20.9375C49.2505 21.0781 41.6255 27.7656 40.0005 36.5156C39.3442 32.9531 37.688 29.6406 35.1411 26.9375C31.6567 23.2344 26.9223 21.0938 21.8442 20.9375H21.5786C21.7348 10.9219 29.938 2.8125 40.0005 2.8125ZM20.938 58.4375H20.688C15.7661 58.2812 11.188 56.2344 7.82858 52.6406C4.45358 49.0469 2.67233 44.3594 2.82858 39.4375C2.98483 34.5156 5.03171 29.9375 8.62546 26.5781C12.0005 23.4062 16.3442 21.6406 20.938 21.5781C21.0786 30.7656 27.7661 38.3906 36.5161 40.0156C32.9536 40.6719 29.6411 42.3281 26.9223 44.875C23.2192 48.3594 21.0786 53.0938 20.9223 58.1719C20.938 58.25 20.938 58.3438 20.938 58.4375ZM58.438 59.3125C58.2817 64.2344 56.2348 68.8125 52.6411 72.1719C49.0473 75.5469 44.3598 77.3125 39.438 77.1719C34.5161 77.0156 29.938 74.9688 26.5786 71.375C23.4067 68 21.6411 63.6562 21.5786 59.0625C26.3442 58.9844 30.8442 57.1719 34.3286 53.8906C37.3286 51.0781 39.2817 47.4531 40.0161 43.4688C41.6411 52.2344 49.2661 58.9062 58.4536 59.0625C58.438 59.1406 58.438 59.2344 58.438 59.3125ZM59.063 58.4375C58.9848 53.6719 57.1723 49.1719 53.8911 45.6875C51.0786 42.6875 47.4536 40.7344 43.4692 40C52.2348 38.375 58.9067 30.75 59.063 21.5625C69.0942 21.7344 77.188 29.9375 77.188 40C77.188 50.0625 69.0786 58.2656 59.063 58.4375Z" />
                </svg>
              </div>
              <div className="content">
                <p>Business Growth</p>
                <div className="number">
                  <h2 className="counter">2</h2>
                  <span>X</span>
                </div>
              </div>
            </li>
            <li className="single-counter">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 80 80">
                  <path d="M71.9375 49.2812C75.0938 46.4844 76.7812 43.3125 76.7812 40C76.7812 36.625 75 33.3438 71.6406 30.4688C74.9844 27.6094 76.7812 24.3437 76.7812 20.9219C76.7812 15.875 72.8906 11.1406 65.8125 7.60938C58.8125 4.10938 49.5 2.17188 39.6094 2.17188C29.7188 2.17188 20.3906 4.10938 13.3906 7.60938C6.3125 11.1406 2.42188 15.875 2.42188 20.9219C2.42188 24.3437 4.20312 27.6094 7.5625 30.4688C4.20312 33.3438 2.42188 36.625 2.42188 40C2.42188 43.4219 4.20312 46.6875 7.5625 49.5469C4.20312 52.4219 2.42188 55.7031 2.42188 59.0781C2.42188 64.125 6.3125 68.8594 13.3906 72.3906C20.3906 75.8906 29.7031 77.8281 39.5938 77.8281C49.4844 77.8281 58.7969 75.9062 65.7969 72.3906C66.8906 71.8438 67.9219 71.2656 68.8594 70.6562C74.125 67.4531 77.2656 63.3438 77.2656 58.875C77.2656 55.3594 75.3125 52.0781 71.9375 49.2812ZM3.04688 20.9219C3.04688 10.9375 19.4375 2.79688 39.5938 2.79688C59.75 2.79688 76.1406 10.9219 76.1406 20.9219C76.1406 30.9062 59.75 39.0469 39.5938 39.0469C19.4375 39.0469 3.04688 30.9062 3.04688 20.9219ZM39.5938 58.125C19.4375 58.125 3.04688 49.9844 3.04688 40C3.04688 36.7812 4.78125 33.6406 8.04688 30.875C9.54688 32.0781 11.3281 33.2188 13.3906 34.2344C20.3906 37.7344 29.7031 39.6719 39.5938 39.6719C49.4844 39.6719 58.7969 37.75 65.7969 34.2344C67.8594 33.2031 69.6406 32.0781 71.1406 30.875C74.4062 33.6406 76.1406 36.7969 76.1406 40C76.1406 49.9844 59.75 58.125 39.5938 58.125Z" />
                </svg>
              </div>
              <div className="content">
                <p>Online Revinue</p>
                <div className="number">
                  <h2 className="counter">1.6</h2>
                  <span>X</span>
                </div>
              </div>
            </li>
            <li className="single-counter">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} viewBox="0 0 80 80">
                  <path d="M66.7344 13.2656C59.5938 6.125 50.0938 2.1875 40 2.1875C29.9062 2.1875 20.4062 6.125 13.2656 13.2656C6.125 20.4062 2.1875 29.9062 2.1875 40C2.1875 50.0938 6.125 59.5938 13.2656 66.7344C20.4062 73.875 29.9062 77.8125 40 77.8125C50.0938 77.8125 59.5938 73.875 66.7344 66.7344C73.875 59.5938 77.8125 50.0938 77.8125 40C77.8125 29.9062 73.875 20.4062 66.7344 13.2656ZM13.7031 66.2969C6.6875 59.2656 2.8125 49.9375 2.8125 40C2.8125 30.0625 6.6875 20.7344 13.7031 13.7031C18.9062 8.5 25.375 5.03125 32.4062 3.57812C27.8281 5.3125 23.625 8.60938 20.1719 13.2969C14.9062 20.4375 12 29.9219 12 40C12 50.0781 14.9062 59.5625 20.1719 66.7031C23.625 71.375 27.8281 74.6875 32.4062 76.4219C25.375 74.9688 18.9062 71.5 13.7031 66.2969ZM12.625 40C12.625 20.8906 23.2969 5.09375 36.9688 3.04688C34.2969 4.5625 31.8594 8.10938 29.9219 13.375C27.2969 20.4844 25.8438 29.9531 25.8438 40C25.8438 50.0469 27.2969 59.5156 29.9219 66.625C31.8594 71.8906 34.2969 75.4375 36.9688 76.9531C23.2969 74.9062 12.625 59.1094 12.625 40ZM39.6875 77.1875C36.25 76.9688 33 73.1719 30.5 66.4219C27.8906 59.375 26.4688 50 26.4688 40.0156C26.4688 30.0312 27.9062 20.6562 30.5 13.6094C33 6.84375 36.25 3.04688 39.6875 2.82813V77.1875Z" />
                </svg>
              </div>
              <div className="content">
                <p>Organic Traffic</p>
                <div className="number">
                  <h2 className="counter">3</h2>
                  <span>X</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="partner-area mb-130">
    <div className="container-lg container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="partner-wrap">
            <div className="title1">
              <h6>Our Trusted Partner</h6>
            </div>
            <div className="marquee light">
              <div className="marquee__group">
                <Marquee>
                <a href="#"><img src="assets/img/home1/partner-01.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-02.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-03.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-04.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-05.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-06.png" alt="" /></a>
                </Marquee>
              </div>

              <div aria-hidden="true" className="marquee__group">
              <Marquee>
                <a href="#"><img src="assets/img/home1/partner-01.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-02.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-03.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-04.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-05.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-06.png" alt="" /></a>
                </Marquee>
              </div>
            </div>
            <div className="marquee dark">
              <div className="marquee__group">
              <Marquee>
                <a href="#"><img src="assets/img/home1/partner-light-01.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-light-02.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-light-03.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-light-04.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-light-05.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-light-06.png" alt="" /></a>
                </Marquee>
              </div>
              <div aria-hidden="true" className="marquee__group">
              <Marquee>
                <a href="#"><img src="assets/img/home1/partner-light-01.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-light-02.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-light-03.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-light-04.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-light-05.png" alt="" /></a>
                <a href="#"><img src="assets/img/home1/partner-light-06.png" alt="" /></a>
                </Marquee>
              </div>
            </div>
            <div className="title2">
              <h6>Almost 20+ Partner we have</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
    </>
  )
}

export default Home3About

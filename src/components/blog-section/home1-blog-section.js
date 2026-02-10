import Link from 'next/link'
import React from 'react'

const Home1BlogSection = () => {
  return (
    <div className="home1-blog-section mb-130">
  <div className="container-lg container-fluid">
    <div className="row mb-30">
      <div className="col-lg-12">
        <div className="section-title text-animation">
          <h2>Our Latest <br /><span>Article</span>
          </h2>
          <div className="dash-and-paragraph three">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 788 64">
              <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM787 3L787.165 3.47208L787 2.5V3ZM726.137 64L729.557 59.3484L723.818 58.7125L726.137 64ZM3 3.5H787V2.5H3V3.5ZM786.835 2.52792C774.481 6.83921 760.535 13.0389 749.066 22.1679C737.59 31.3017 728.573 43.3858 726.138 59.453L727.127 59.6028C729.514 43.8512 738.351 31.9742 749.689 22.9503C761.032 13.9214 774.859 7.7666 787.165 3.47208L786.835 2.52792Z" />
            </svg>
            <div className="btn-and-paragraph">
              <Link href="/blog-grid">Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </Link>
              <p>Offer a wide range of services to help businesses establish and enhance
                their online
                presence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-4 col-md-6">
        <div className="blog-card1 magnetic-item">
          <Link href="/blog-details" className="blog-img">
            <img src="assets/img/home1/blog-img-01.jpg" alt="blog-img-01" />
          </Link>
          <div className="blog-content">
            <ul className="mete">
              <li><Link href="/blog-grid">Creative Design</Link></li>
              <li><Link href="/blog-grid">02 April, 2023</Link></li>
            </ul>
            <h4><Link href="/blog-details">Celebrates Major Milestone in Digital
                Services</Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-card1 magnetic-item">
          <Link href="/blog-details" className="blog-img">
            <img src="assets/img/home1/blog-img-02.jpg" alt="blog-img-02" />
          </Link>
          <div className="blog-content">
            <ul className="mete">
              <li><Link href="/blog-grid">Technology</Link></li>
              <li><Link href="/blog-grid">15 April, 2023</Link></li>
            </ul>
            <h4><Link href="/blog-details">Surpasses Expectations with Latest Projects.</Link>
            </h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-card1 magnetic-item">
          <Link href="/blog-details" className="blog-img">
            <img src="assets/img/home1/blog-img-03.jpg" alt="blog-img-03" />
          </Link>
          <div className="blog-content">
            <ul className="mete">
              <li><Link href="/blog-grid">Marketing</Link></li>
              <li><Link href="/blog-grid">05 March, 2023</Link></li>
            </ul>
            <h4><Link href="/blog-details">Leads the Way in Digital Transformation.</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Home1BlogSection

import Link from 'next/link'
import React from 'react'

const Home4BlogSection = () => {
  return (
    <div className="home4-blog-section mb-130">
  <div className="container-lg container-fluid">
    <div className="row justify-content-end">
      <div className="col-lg-12">
        <div className="section-title text-animation mb-15">
          <h2>Our Latest <br />
            <span>Blogs.</span>
          </h2>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="paragraph-and-btn">
          <div className="text-animation">
            <p>Creating a concise and effective design studio brief is crucial for outlining
              your business.</p>
          </div>
          <Link href="/blog-grid">Explore More <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
              <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
              </path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
    <div className="row g-lg-4 gy-5">
      <div className="col-lg-4 col-md-6">
        <div className="blog-card4">
          <Link href="/blog-details" className="blog-img magnetic-item">
            <img src="assets/img/home4/blog-01.jpg" alt="" />
          </Link>
          <div className="blog-content">
            <div className="blog-meta">
              <ul className="category">
                <li><Link href="/blog-grid">Creative Design</Link></li>
              </ul>
              <div className="blog-publish-date">
                <Link href="/blog-grid">03 April, 2023</Link>
              </div>
            </div>
            <h4 className="blog-title"><Link href="/blog-details">Celebrates Major Milestone in
                Digital Services.</Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-card4">
          <Link href="/blog-details" className="blog-img magnetic-item">
            <img src="assets/img/home4/blog-02.jpg" alt="" />
          </Link>
          <div className="blog-content">
            <div className="blog-meta">
              <ul className="category">
                <li><Link href="/blog-grid">Creative Design</Link></li>
              </ul>
              <div className="blog-publish-date">
                <Link href="/blog-grid">03 April, 2023</Link>
              </div>
            </div>
            <h4 className="blog-title"><Link href="/blog-details">Surpasses Expectations with
                Latest Projects.</Link></h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-card4">
          <Link href="/blog-details" className="blog-img magnetic-item">
            <img src="assets/img/home4/blog-03.jpg" alt="" />
          </Link>
          <div className="blog-content">
            <div className="blog-meta">
              <ul className="category">
                <li><Link href="/blog-grid">Creative Design</Link></li>
              </ul>
              <div className="blog-publish-date">
                <Link href="/blog-grid">03 April, 2023</Link>
              </div>
            </div>
            <h4 className="blog-title"><Link href="/blog-details">Leads the Way in Digital
                Transformation.</Link></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home4BlogSection
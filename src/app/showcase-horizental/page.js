import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const ShowcaseHorizental = () => {
  return (
    <>
      <Header />
      <div className="portfolio-page-area portfolio-showcase-horizental pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-130">
            <div className="col-lg-12">
              <div className="section-title">
                <h1>
                  Our <span>Work</span>
                </h1>
                <div className="dash-and-paragraph three">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z"></path>
                  </svg>
                  <div className="btn-and-paragraph">
                    <span>Selected work * (2020-2024)</span>
                    <p>
                      Creating a concise and effective design studio brief is
                      crucial for outlining your business, its services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="filters filter-button-group">
                <ul className="d-flex  flex-wrap">
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".Branding">Branding</li>
                  <li data-filter=".UiUx">UI/UX</li>
                  <li data-filter=".Web">Web</li>
                  <li data-filter=".Graphics">Graphics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row grid mb-130">
            <div className="col-lg-12 grid-item UiUx Web Graphics">
              <div className="single-work">
                <div className="work-name">
                  <div className="sn">1.</div>
                  <h3>
                    <Link href="/portfolio-details">
                      Corporate Brand Revitalization.
                    </Link>
                  </h3>
                </div>
                <div className="work-discription">
                  <p>
                    Strategy that involves creating and sharing content on
                    social a website's media platforms.
                  </p>
                  <ul>
                    <li>
                      <Link href="/portfolio-showcase">UI/UX</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Color Palette</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Typography</Link>
                    </li>
                  </ul>
                </div>
                <div className="services-img">
                  <img src="assets/img/innerpage/hz-sho-01.jpg" alt="" />
                </div>
                <div className="details-btn-wrap">
                  <div className="details-btn">
                    <Link
                      className="primary-btn4 btn-hover"
                      href="/portfolio-details"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 grid-item Web UiUx">
              <div className="single-work">
                <div className="work-name">
                  <div className="sn">2.</div>
                  <h3>
                    <Link href="/portfolio-details">
                      NexGen Pioneering Digital Solutions.
                    </Link>
                  </h3>
                </div>
                <div className="work-discription">
                  <p>
                    Strategy that involves creating and sharing content on
                    social a website's media platforms.
                  </p>
                  <ul>
                    <li>
                      <Link href="/portfolio-showcase">Typography</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Usability</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Hierarchy </Link>
                    </li>
                  </ul>
                </div>
                <div className="services-img">
                  <img src="assets/img/innerpage/hz-sho-02.jpg" alt="" />
                </div>
                <div className="details-btn-wrap">
                  <div className="details-btn">
                    <Link
                      className="primary-btn4 btn-hover"
                      href="/portfolio-details"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 grid-item Branding Graphics">
              <div className="single-work">
                <div className="work-name">
                  <div className="sn">3.</div>
                  <h3>
                    <Link href="/portfolio-details">Sculpting the Future.</Link>
                  </h3>
                </div>
                <div className="work-discription">
                  <p>
                    It's a mutually beneficial arrangement where affiliates earn
                    a commission .
                  </p>
                  <ul>
                    <li>
                      <Link href="/portfolio-showcase">Logo</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Usability</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Color Palette</Link>
                    </li>
                  </ul>
                </div>
                <div className="services-img">
                  <img src="assets/img/innerpage/hz-sho-03.jpg" alt="" />
                </div>
                <div className="details-btn-wrap">
                  <div className="details-btn">
                    <Link
                      className="primary-btn4 btn-hover"
                      href="/portfolio-details"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 grid-item UiUx Branding">
              <div className="single-work">
                <div className="work-name">
                  <div className="sn">4.</div>
                  <h3>
                    <Link href="/portfolio-details">
                      Where Vision Meets Technology.
                    </Link>
                  </h3>
                </div>
                <div className="work-discription">
                  <p>
                    Strategy that involves creating and sharing content on
                    social a website's media platforms.
                  </p>
                  <ul>
                    <li>
                      <Link href="/portfolio-showcase">Typography</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Usability</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Hierarchy</Link>
                    </li>
                  </ul>
                </div>
                <div className="services-img">
                  <img src="assets/img/innerpage/hz-sho-04.jpg" alt="" />
                </div>
                <div className="details-btn-wrap">
                  <div className="details-btn">
                    <Link
                      className="primary-btn4 btn-hover"
                      href="/portfolio-details"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 grid-item Web Branding">
              <div className="single-work">
                <div className="work-name">
                  <div className="sn">5.</div>
                  <h3>
                    <Link href="/portfolio-details">
                      {" "}
                      Studio Navigating the Digital Wave.
                    </Link>
                  </h3>
                </div>
                <div className="work-discription">
                  <p>
                    It's a mutually beneficial arrangement where affiliates earn
                    a commission .
                  </p>
                  <ul>
                    <li>
                      <Link href="/portfolio-showcase">Logo</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Usability</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Color Palette</Link>
                    </li>
                  </ul>
                </div>
                <div className="services-img">
                  <img src="assets/img/innerpage/hz-sho-05.jpg" alt="" />
                </div>
                <div className="details-btn-wrap">
                  <div className="details-btn">
                    <Link
                      className="primary-btn4 btn-hover"
                      href="/portfolio-details"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 grid-item UiUx Branding Graphics">
              <div className="single-work">
                <div className="work-name">
                  <div className="sn">6.</div>
                  <h3>
                    <Link href="/portfolio-details">
                      We Compose Digital Masterpieces.
                    </Link>
                  </h3>
                </div>
                <div className="work-discription">
                  <p>
                    Strategy that involves creating and sharing content on
                    social a website's media platforms.
                  </p>
                  <ul>
                    <li>
                      <Link href="/portfolio-showcase">Logo</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Usability</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-showcase">Color Palette</Link>
                    </li>
                  </ul>
                </div>
                <div className="services-img">
                  <img src="assets/img/innerpage/hz-sho-06.jpg" alt="" />
                </div>
                <div className="details-btn-wrap">
                  <div className="details-btn">
                    <Link
                      className="primary-btn4 btn-hover"
                      href="/portfolio-details"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="load-more-btn btn_wrapper">
                <button className="circle-btn btn-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>{" "}
                  Load More <strong>Portfolio</strong>
                  <span style={{ top: "50.5px", left: "83.75px" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShowcaseHorizental;

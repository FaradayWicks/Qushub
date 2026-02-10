"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "../common/Sidebar";

const InnerPageHeader = ({ innerpage2 }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <header className={`header-area style-1 innerpage ${innerpage2}`}>
        <div className="header-logo">
          <Link href="/">
            <img
              alt="image"
              className="img-fluid"
              src="assets/img/white-logo.svg"
            />
          </Link>
        </div>
        <div className="menu-wrap">
          <div className="main-menu">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link href="/">
                  <img alt="image" src="assets/img/black-logo.svg" />
                </Link>
              </div>
            </div>
            <ul className="menu-list">
              <li className="menu-item-has-children">
                <Link href="#" className="drop-down">
                  Home
                </Link>
                <i className="bi bi-plus dropdown-icon" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={10}
                  viewBox="0 0 18 10"
                >
                  <path d="M18 4.95V10H13.0154V8.62143H15.7362L10.6962 3.50714L6.59769 7.65714L0 0.978571L0.962308 0L6.59769 5.71429L10.6962 1.56429L16.6154 7.57857V4.95H18Z" />
                </svg>
                <ul className="sub-menu">
                  <li>
                    <Link href="/index">Light Version</Link>
                    <i className="bi bi-chevron-right dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <Link href="/index">Digital Agency</Link>
                      </li>
                      <li>
                        <Link href="/software-agency">Software Agency</Link>
                      </li>
                      <li>
                        <Link href="/marketing-agency ">Marketing Agency</Link>
                      </li>
                      <li>
                        <Link href="/design-studio">Design Studio</Link>
                      </li>
                      <li>
                        <Link href="/personal-portfolio">
                          Personal Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link href="/saas-product">SaaS Product</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/digital-agency-dark">Dark Version</Link>
                    <i className="bi bi-chevron-right dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <Link href="/digital-agency-dark">Digital Agency</Link>
                      </li>
                      <li>
                        <Link href="/software-agency-dark">
                          Software Agency
                        </Link>
                      </li>
                      <li>
                        <Link href="/marketing-agency-dark">
                          Marketing Agency
                        </Link>
                      </li>
                      <li>
                        <Link href="/design-studio-dark">Design Studio</Link>
                      </li>
                      <li>
                        <Link href="/personal-portfolio-dark">
                          Personal Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link href="/saas-product-dark">SaaS Product</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Services
                </a>
                <i className="bi bi-plus dropdown-icon" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={10}
                  viewBox="0 0 18 10"
                >
                  <path d="M18 4.95V10H13.0154V8.62143H15.7362L10.6962 3.50714L6.59769 7.65714L0 0.978571L0.962308 0L6.59769 5.71429L10.6962 1.56429L16.6154 7.57857V4.95H18Z" />
                </svg>
                <ul className="sub-menu">
                  <li className="">
                    <Link href="/services1">Service Style 01</Link>
                  </li>
                  <li>
                    <Link href="/service2">Service Style 02</Link>
                  </li>
                  <li>
                    <Link href="/service3">Service Style 03</Link>
                  </li>
                  <li>
                    <Link href="/service4">Service Style 04</Link>
                  </li>
                  <li>
                    <Link href="/service-details ">Service Details</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="#" className="drop-down">
                  Pages
                </Link>
                <i className="bi bi-plus dropdown-icon" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={10}
                  viewBox="0 0 18 10"
                >
                  <path d="M18 4.95V10H13.0154V8.62143H15.7362L10.6962 3.50714L6.59769 7.65714L0 0.978571L0.962308 0L6.59769 5.71429L10.6962 1.56429L16.6154 7.57857V4.95H18Z" />
                </svg>
                <ul className="sub-menu">
                  <li>
                    <Link href="/about">about us</Link>
                  </li>
                  <li>
                    <Link href="/about-me">about me</Link>
                  </li>
                  <li>
                    <Link href="/case-study1">Case Study</Link>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <Link href="/case-study1">Case Study Style 01</Link>
                      </li>
                      <li>
                        <Link href="/case-study2">Case Study Style 02</Link>
                      </li>
                      <li>
                        <Link href="/case-study-details">
                          Case Study Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/our-team1">Our Team</Link>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <Link href="/our-team1">Team Style 01</Link>
                      </li>
                      <li>
                        <Link href="/our-team2">Team Style 02</Link>
                      </li>
                      <li>
                        <Link href="/our-team3">Team Style 03</Link>
                      </li>
                      <li>
                        <Link href="/our-team4">Team Style 04</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/blog-standard">Blog</Link>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <Link href="/blog-grid">Blog Grid</Link>
                      </li>
                      <li>
                        <Link href="/blog-grid2">Blog Sidebar</Link>
                      </li>
                      <li>
                        <Link href="/blog-standard">Blog Standard</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Blog Details </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/career-list">Career</Link>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <Link href="/career-list">Career List</Link>
                      </li>
                      <li>
                        <Link href="/career-details">Career Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/shop">Shop</Link>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <Link href="/shop">Shop</Link>
                      </li>
                      <li>
                        <Link href="/product-details">Product Details</Link>
                      </li>
                      <li>
                        <Link href="/cart">Cart</Link>
                      </li>
                      <li>
                        <Link href="/checkout">Checkout</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/office-gallery">Office Gallery</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/error">Error 404</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Portfolio{" "}
                </a>
                <i className="bi bi-plus dropdown-icon" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={10}
                  viewBox="0 0 18 10"
                >
                  <path d="M18 4.95V10H13.0154V8.62143H15.7362L10.6962 3.50714L6.59769 7.65714L0 0.978571L0.962308 0L6.59769 5.71429L10.6962 1.56429L16.6154 7.57857V4.95H18Z" />
                </svg>
                <ul className="sub-menu">
                  <li>
                    <Link href="/portfolio-manonery">Portfolio Masonery</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-vertical-grid">
                      Portfolio Vertical Grid
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-showcase">Portfolio Showcase</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-showcase-slider">
                      Portfolio Showcase Slider
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-showcase-carosuel">
                      Portfolio Showcase Carosuel
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-showcase-horizental">
                      Portfolio Horizental Showcase
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-interactive-banner">
                      Interactive Banner
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-interactive-link">
                      Interactive links
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-details">Portfolio Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="d-lg-none d-block">
              <ul className="topbar-right">
                <li>Sun-Tue (9:00 am-7.00 pm)</li>
                <li>
                  <a href="mailto:infoaploxn@gmail.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={10}
                      viewBox="0 0 14 10"
                    >
                      <g>
                        <path d="M12.8333 0H1.16668C0.523223 0 0 0.498307 0 1.11112V8.88891C0 9.50169 0.523223 10 1.16668 10H12.8334C13.4768 10 14 9.50169 14 8.88888V1.11112C14 0.498307 13.4768 0 12.8333 0ZM1.16668 0.555547H12.8334C12.8763 0.555547 12.9142 0.570469 12.9545 0.578906C11.9445 1.4593 8.59532 4.37732 7.42328 5.38302C7.33157 5.46169 7.18375 5.55555 7.00003 5.55555C6.8163 5.55555 6.66848 5.46169 6.57647 5.38276C5.40455 4.37721 2.05518 1.45904 1.0453 0.578958C1.08571 0.570521 1.12366 0.555547 1.16668 0.555547ZM0.583324 8.88888V1.11112C0.583324 1.05669 0.600551 1.00732 0.615973 0.957578C1.38904 1.63143 3.72594 3.66747 5.24122 4.97979C3.73086 6.21539 1.39336 8.32602 0.614141 9.03367C0.600387 8.98643 0.583324 8.94023 0.583324 8.88888ZM12.8333 9.44445H1.16668C1.12008 9.44445 1.07866 9.42898 1.03515 9.41909C1.84034 8.68805 4.19273 6.56529 5.67654 5.35635C5.8461 5.50294 6.0159 5.64928 6.18595 5.79536C6.42636 6.00208 6.70775 6.11112 7 6.11112C7.29225 6.11112 7.57364 6.00206 7.81375 5.79562C7.98389 5.64945 8.1538 5.50303 8.32347 5.35635C9.80736 6.56516 12.1594 8.68776 12.9648 9.41909C12.9213 9.42898 12.88 9.44445 12.8333 9.44445ZM13.4167 8.88888C13.4167 8.94021 13.3996 8.98643 13.3859 9.03367C12.6064 8.32565 10.2691 6.21526 8.7588 4.97982C10.2741 3.6675 12.6107 1.63164 13.384 0.957526C13.3994 1.00727 13.4167 1.05667 13.4167 1.11109V8.88888Z" />
                      </g>
                    </svg>
                    infoaploxn@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+9165678653">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <g>
                        <path d="M12.8766 9.18937C12.0195 9.18937 11.1779 9.05531 10.3804 8.79176C9.98274 8.65617 9.53004 8.76139 9.27064 9.02571L7.69648 10.214C5.87091 9.23954 4.74639 8.11538 3.7852 6.30352L4.93856 4.77038C5.23821 4.47113 5.34569 4.03399 5.21692 3.62384C4.95223 2.82212 4.81777 1.98092 4.81777 1.12342C4.81781 0.503962 4.31385 0 3.69442 0H1.12335C0.503962 0 0 0.503962 0 1.12335C0 8.22363 5.77637 14 12.8766 14C13.496 14 14 13.496 14 12.8766V10.3127C14 9.69333 13.496 9.18937 12.8766 9.18937ZM13.2222 12.8766C13.2222 13.0673 13.0673 13.2222 12.8766 13.2222C6.20512 13.2222 0.7778 7.79484 0.7778 1.12339C0.7778 0.932747 0.932748 0.7778 1.12339 0.7778H3.69446C3.8851 0.7778 4.04005 0.932747 4.04005 1.12339C4.04005 2.06408 4.18778 2.98731 4.47678 3.86195C4.51703 3.99108 4.48436 4.12474 4.35373 4.26073L3.01692 6.03118C2.97302 6.08933 2.94633 6.15864 2.93988 6.23121C2.93344 6.30379 2.9475 6.37672 2.98046 6.4417C4.07155 8.58628 5.39735 9.91208 7.5571 11.0187C7.6885 11.0875 7.84953 11.0731 7.96879 10.983L9.77992 9.61094C9.8252 9.56579 9.88218 9.53419 9.94445 9.5197C10.0067 9.50521 10.0718 9.5084 10.1324 9.52891C11.013 9.81981 11.9363 9.96717 12.8766 9.96717C13.0673 9.96717 13.2222 10.1221 13.2222 10.3128V12.8766Z" />
                      </g>
                    </svg>{" "}
                    +91 656 786 53
                  </a>
                </li>
              </ul>
              <Link href="/contact" className="primary-btn1 btn-hover">
                Get in Touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                  ></path>
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center">
            <div className="sidebar-btn">
              <svg
                className="open"
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
              >
                <path d="M5.625 14.625C5.625 15.07 5.49304 15.505 5.24581 15.875C4.99857 16.245 4.64717 16.5334 4.23604 16.7037C3.8249 16.874 3.3725 16.9186 2.93605 16.8318C2.49959 16.745 2.09868 16.5307 1.78401 16.216C1.46934 15.9013 1.25505 15.5004 1.16823 15.064C1.08142 14.6275 1.12597 14.1751 1.29627 13.764C1.46657 13.3528 1.75496 13.0014 2.12497 12.7542C2.49498 12.507 2.92999 12.375 3.375 12.375C3.97174 12.375 4.54403 12.6121 4.96599 13.034C5.38795 13.456 5.625 14.0283 5.625 14.625ZM3.375 1.125C2.92999 1.125 2.49498 1.25696 2.12497 1.50419C1.75496 1.75143 1.46657 2.10283 1.29627 2.51396C1.12597 2.9251 1.08142 3.3775 1.16823 3.81395C1.25505 4.25041 1.46934 4.65132 1.78401 4.96599C2.09868 5.28066 2.49959 5.49495 2.93605 5.58177C3.3725 5.66858 3.8249 5.62403 4.23604 5.45373C4.64717 5.28343 4.99857 4.99504 5.24581 4.62503C5.49304 4.25502 5.625 3.82001 5.625 3.375C5.625 2.77826 5.38795 2.20597 4.96599 1.78401C4.54403 1.36205 3.97174 1.125 3.375 1.125ZM3.375 6.75C2.92999 6.75 2.49498 6.88196 2.12497 7.12919C1.75496 7.37643 1.46657 7.72783 1.29627 8.13896C1.12597 8.5501 1.08142 9.0025 1.16823 9.43895C1.25505 9.87541 1.46934 10.2763 1.78401 10.591C2.09868 10.9057 2.49959 11.12 2.93605 11.2068C3.3725 11.2936 3.8249 11.249 4.23604 11.0787C4.64717 10.9084 4.99857 10.62 5.24581 10.25C5.49304 9.88002 5.625 9.44501 5.625 9C5.625 8.40326 5.38795 7.83097 4.96599 7.40901C4.54403 6.98705 3.97174 6.75 3.375 6.75ZM9 12.375C8.55499 12.375 8.11998 12.507 7.74997 12.7542C7.37996 13.0014 7.09157 13.3528 6.92127 13.764C6.75097 14.1751 6.70642 14.6275 6.79323 15.064C6.88005 15.5004 7.09434 15.9013 7.40901 16.216C7.72368 16.5307 8.12459 16.745 8.56105 16.8318C8.99751 16.9186 9.4499 16.874 9.86104 16.7037C10.2722 16.5334 10.6236 16.245 10.8708 15.875C11.118 15.505 11.25 15.07 11.25 14.625C11.25 14.0283 11.0129 13.456 10.591 13.034C10.169 12.6121 9.59674 12.375 9 12.375ZM9 1.125C8.55499 1.125 8.11998 1.25696 7.74997 1.50419C7.37996 1.75143 7.09157 2.10283 6.92127 2.51396C6.75097 2.9251 6.70642 3.3775 6.79323 3.81395C6.88005 4.25041 7.09434 4.65132 7.40901 4.96599C7.72368 5.28066 8.12459 5.49495 8.56105 5.58177C8.99751 5.66858 9.4499 5.62403 9.86104 5.45373C10.2722 5.28343 10.6236 4.99504 10.8708 4.62503C11.118 4.25502 11.25 3.82001 11.25 3.375C11.25 2.77826 11.0129 2.20597 10.591 1.78401C10.169 1.36205 9.59674 1.125 9 1.125ZM9 6.75C8.55499 6.75 8.11998 6.88196 7.74997 7.12919C7.37996 7.37643 7.09157 7.72783 6.92127 8.13896C6.75097 8.5501 6.70642 9.0025 6.79323 9.43895C6.88005 9.87541 7.09434 10.2763 7.40901 10.591C7.72368 10.9057 8.12459 11.12 8.56105 11.2068C8.99751 11.2936 9.4499 11.249 9.86104 11.0787C10.2722 10.9084 10.6236 10.62 10.8708 10.25C11.118 9.88002 11.25 9.44501 11.25 9C11.25 8.40326 11.0129 7.83097 10.591 7.40901C10.169 6.98705 9.59674 6.75 9 6.75ZM14.625 12.375C14.18 12.375 13.745 12.507 13.375 12.7542C13.005 13.0014 12.7166 13.3528 12.5463 13.764C12.376 14.1751 12.3314 14.6275 12.4182 15.064C12.5051 15.5004 12.7193 15.9013 13.034 16.216C13.3487 16.5307 13.7496 16.745 14.186 16.8318C14.6225 16.9186 15.0749 16.874 15.486 16.7037C15.8972 16.5334 16.2486 16.245 16.4958 15.875C16.743 15.505 16.875 15.07 16.875 14.625C16.875 14.0283 16.6379 13.456 16.216 13.034C15.794 12.6121 15.2217 12.375 14.625 12.375ZM14.625 5.625C15.07 5.625 15.505 5.49304 15.875 5.24581C16.245 4.99857 16.5334 4.64717 16.7037 4.23604C16.874 3.8249 16.9186 3.3725 16.8318 2.93605C16.745 2.49959 16.5307 2.09868 16.216 1.78401C15.9013 1.46934 15.5004 1.25505 15.064 1.16823C14.6275 1.08142 14.1751 1.12597 13.764 1.29627C13.3528 1.46657 13.0014 1.75496 12.7542 2.12497C12.507 2.49498 12.375 2.92999 12.375 3.375C12.375 3.97174 12.6121 4.54403 13.034 4.96599C13.456 5.38795 14.0283 5.625 14.625 5.625ZM14.625 6.75C14.18 6.75 13.745 6.88196 13.375 7.12919C13.005 7.37643 12.7166 7.72783 12.5463 8.13896C12.376 8.5501 12.3314 9.0025 12.4182 9.43895C12.5051 9.87541 12.7193 10.2763 13.034 10.591C13.3487 10.9057 13.7496 11.12 14.186 11.2068C14.6225 11.2936 15.0749 11.249 15.486 11.0787C15.8972 10.9084 16.2486 10.62 16.4958 10.25C16.743 9.88002 16.875 9.44501 16.875 9C16.875 8.40326 16.6379 7.83097 16.216 7.40901C15.794 6.98705 15.2217 6.75 14.625 6.75Z" />
              </svg>
              <svg
                className="close"
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 0L11.1686 8.99601L18 18L9.0041 11.1605L0 18L6.83156 8.99601L0 0L9.0041 6.83156L18 0Z"
                />
              </svg>
            </div>
            <a href="tel:+990737621432" className="header-btn btn-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 12 12"
              >
                <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
              </svg>
              Schedule a Call
              <span style={{ top: "50.5px", left: "83.75px" }} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default InnerPageHeader;

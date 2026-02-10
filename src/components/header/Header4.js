"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Sidebar from '../common/Sidebar';

const Header4 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
 <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
       <header className="header-area style-4">
    <div className="header-logo">
      <Link href="/"><img alt="image" className="img-fluid" src="assets/img/design-logo.svg" /></Link>
    </div>
    <div className="menu-wrap">
      <div className="main-menu">
        <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
          <div className="mobile-logo-wrap">
            <Link href="/"><img alt="image" src="assets/img/white-logo.svg" /></Link>
          </div>
        </div>
        <ul className="menu-list">
          <li className="menu-item-has-children ">
            <Link href="#" className="drop-down">Home</Link><i className="bi bi-plus dropdown-icon" />
            <ul className="sub-menu">
              <li className=""><Link href="/">Light Version</Link>
                <i className="bi bi-chevron-right dropdown-icon" />
                <ul className="sub-menu">
                  <li><Link href="/">Digital Agency</Link></li>
                  <li><Link href="/software-agency">Software Agency</Link></li>
                  <li><Link href="/marketing-agency ">Marketing Agency</Link></li>
                  <li className=""><Link href="/design-studio">Design Studio</Link></li>
                  <li><Link href="/personal-portfolio">Personal Portfolio</Link></li>
                  <li><Link href="/saas-product">SaaS Product</Link></li>
                </ul>
              </li>
              <li><Link href="/digital-agency-dark">Dark Version</Link>
                <i className="bi bi-chevron-right dropdown-icon" />
                <ul className="sub-menu">
                  <li><Link href="/digital-agency-dark">Digital Agency</Link></li>
                  <li><Link href="/software-agency-dark">Software Agency</Link></li>
                  <li><Link href="/marketing-agency-dark">Marketing Agency</Link></li>
                  <li><Link href="/design-studio-dark">Design Studio</Link></li>
                  <li><Link href="/personal-portfolio-dark">Personal Portfolio</Link></li>
                  <li><Link href="/saas-product-dark">SaaS Product</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link href="/" className="drop-down">Services</Link><i className="bi bi-plus dropdown-icon" />
            <ul className="sub-menu">
              <li><Link href="/services1">Service Style 01</Link></li>
              <li><Link href="/service2">Service Style 02</Link></li>
              <li><Link href="/service3">Service Style 03</Link></li>
              <li><Link href="/service4">Service Style 04</Link></li>
              <li><Link href="/service-details ">Service Details</Link></li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link href="/" className="drop-down">Pages</Link><i className="bi bi-plus dropdown-icon" />
            <ul className="sub-menu">
              <li><Link href="/about">about us</Link></li>
              <li><Link href="/about-me">about me</Link></li>
              <li>
                <Link href="/case-study1">Case Study</Link>
                <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                <ul className="sub-menu">
                  <li><Link href="/case-study1">Case Study Style 01</Link></li>
                  <li><Link href="/case-study2">Case Study Style 02</Link></li>
                  <li><Link href="/case-study-details">Case Study Details</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/our-team1">Our Team</Link>
                <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                <ul className="sub-menu">
                  <li><Link href="/our-team1">Team Style 01</Link></li>
                  <li><Link href="/our-team2">Team Style 02</Link></li>
                  <li><Link href="/our-team3">Team Style 03</Link></li>
                  <li><Link href="/our-team4">Team Style 04</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/blog-standard">Blog</Link>
                <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                <ul className="sub-menu">
                  <li><Link href="/blog-grid">Blog Grid</Link></li>
                  <li><Link href="/blog-grid2">Blog Sidebar</Link></li>
                  <li><Link href="/blog-standard">Blog Standard</Link></li>
                  <li><Link href="/blog-details">Blog Details </Link></li>
                </ul>
              </li>
              <li>
                <Link href="/career-list">Career</Link>
                <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                <ul className="sub-menu">
                  <li><Link href="/career-list">Career List</Link></li>
                  <li><Link href="/career-details">Career Details</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
                <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                <ul className="sub-menu">
                  <li><Link href="/shop">Shop</Link></li>
                  <li><Link href="/product-details">Product Details</Link></li>
                  <li><Link href="/cart">Cart</Link></li>
                  <li><Link href="/checkout">Checkout</Link></li>
                </ul>
              </li>
              <li><Link href="/office-gallery">Office Gallery</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/error">Error 404</Link></li>
              <li><Link href="/terms-conditions">Terms &amp; Conditions</Link></li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link href="#" className="drop-down">Portfolio </Link><i className="bi bi-plus dropdown-icon" />
            <ul className="sub-menu">
              <li><Link href="/portfolio-manonery">Portfolio Masonery</Link></li>
              <li><Link href="/portfolio-vertical-grid">Portfolio Vertical Grid</Link></li>
              <li><Link href="/portfolio-showcase">Portfolio Showcase</Link></li>
              <li><Link href="/portfolio-showcase-slider">Portfolio Showcase Slider</Link></li>
              <li><Link href="/portfolio-showcase-carosuel">Portfolio Showcase Carosuel</Link></li>
              <li><Link href="/portfolio-showcase-horizental">Portfolio Horizental Showcase</Link>
              </li>
              <li><Link href="/portfolio-interactive-banner">Interactive Banner</Link></li>
              <li><Link href="/portfolio-interactive-link">Interactive links</Link></li>
              <li><Link href="/portfolio-details">Portfolio Details</Link></li>
            </ul>
          </li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
        <div className="d-lg-none d-block">
          <ul className="topbar-right">
            <li>Sun-Tue (9:00 am-7.00 pm)</li>
            <li>
              <a href="mailto:infoaploxn@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={10} viewBox="0 0 14 10">
                  <g>
                    <path d="M12.8333 0H1.16668C0.523223 0 0 0.498307 0 1.11112V8.88891C0 9.50169 0.523223 10 1.16668 10H12.8334C13.4768 10 14 9.50169 14 8.88888V1.11112C14 0.498307 13.4768 0 12.8333 0ZM1.16668 0.555547H12.8334C12.8763 0.555547 12.9142 0.570469 12.9545 0.578906C11.9445 1.4593 8.59532 4.37732 7.42328 5.38302C7.33157 5.46169 7.18375 5.55555 7.00003 5.55555C6.8163 5.55555 6.66848 5.46169 6.57647 5.38276C5.40455 4.37721 2.05518 1.45904 1.0453 0.578958C1.08571 0.570521 1.12366 0.555547 1.16668 0.555547ZM0.583324 8.88888V1.11112C0.583324 1.05669 0.600551 1.00732 0.615973 0.957578C1.38904 1.63143 3.72594 3.66747 5.24122 4.97979C3.73086 6.21539 1.39336 8.32602 0.614141 9.03367C0.600387 8.98643 0.583324 8.94023 0.583324 8.88888ZM12.8333 9.44445H1.16668C1.12008 9.44445 1.07866 9.42898 1.03515 9.41909C1.84034 8.68805 4.19273 6.56529 5.67654 5.35635C5.8461 5.50294 6.0159 5.64928 6.18595 5.79536C6.42636 6.00208 6.70775 6.11112 7 6.11112C7.29225 6.11112 7.57364 6.00206 7.81375 5.79562C7.98389 5.64945 8.1538 5.50303 8.32347 5.35635C9.80736 6.56516 12.1594 8.68776 12.9648 9.41909C12.9213 9.42898 12.88 9.44445 12.8333 9.44445ZM13.4167 8.88888C13.4167 8.94021 13.3996 8.98643 13.3859 9.03367C12.6064 8.32565 10.2691 6.21526 8.7588 4.97982C10.2741 3.6675 12.6107 1.63164 13.384 0.957526C13.3994 1.00727 13.4167 1.05667 13.4167 1.11109V8.88888Z" />
                  </g>
                </svg>
                infoaploxn@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+9165678653">
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                  <g>
                    <path d="M12.8766 9.18937C12.0195 9.18937 11.1779 9.05531 10.3804 8.79176C9.98274 8.65617 9.53004 8.76139 9.27064 9.02571L7.69648 10.214C5.87091 9.23954 4.74639 8.11538 3.7852 6.30352L4.93856 4.77038C5.23821 4.47113 5.34569 4.03399 5.21692 3.62384C4.95223 2.82212 4.81777 1.98092 4.81777 1.12342C4.81781 0.503962 4.31385 0 3.69442 0H1.12335C0.503962 0 0 0.503962 0 1.12335C0 8.22363 5.77637 14 12.8766 14C13.496 14 14 13.496 14 12.8766V10.3127C14 9.69333 13.496 9.18937 12.8766 9.18937ZM13.2222 12.8766C13.2222 13.0673 13.0673 13.2222 12.8766 13.2222C6.20512 13.2222 0.7778 7.79484 0.7778 1.12339C0.7778 0.932747 0.932748 0.7778 1.12339 0.7778H3.69446C3.8851 0.7778 4.04005 0.932747 4.04005 1.12339C4.04005 2.06408 4.18778 2.98731 4.47678 3.86195C4.51703 3.99108 4.48436 4.12474 4.35373 4.26073L3.01692 6.03118C2.97302 6.08933 2.94633 6.15864 2.93988 6.23121C2.93344 6.30379 2.9475 6.37672 2.98046 6.4417C4.07155 8.58628 5.39735 9.91208 7.5571 11.0187C7.6885 11.0875 7.84953 11.0731 7.96879 10.983L9.77992 9.61094C9.8252 9.56579 9.88218 9.53419 9.94445 9.5197C10.0067 9.50521 10.0718 9.5084 10.1324 9.52891C11.013 9.81981 11.9363 9.96717 12.8766 9.96717C13.0673 9.96717 13.2222 10.1221 13.2222 10.3128V12.8766Z" />
                  </g>
                </svg> +91 656 786 53
              </a>
            </li>
          </ul>
          <Link href="/contact" className="primary-btn1 btn-hover">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z">
              </path>
            </svg>
            <span style={{top: '50.5px', left: '83.75px'}} />
          </Link>
        </div>
      </div>
      <div className="nav-right d-flex jsutify-content-end align-items-center">
        <div className="sidebar-btn">
          <svg className="open" onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.28585 11.4286C9.28585 11.2391 9.2106 11.0574 9.07664 10.9235C8.94269 10.7895 8.76101 10.7143 8.57157 10.7143H5.35585C4.31437 10.7145 3.31559 11.1283 2.57915 11.8647C1.84271 12.6012 1.4289 13.5999 1.42871 14.6414V14.6443C1.4289 15.6858 1.84271 16.6845 2.57915 17.421C3.31559 18.1574 4.31437 18.5712 5.35585 18.5714H5.35871C6.4002 18.5712 7.39897 18.1574 8.13541 17.421C8.87185 16.6845 9.28567 15.6858 9.28585 14.6443V11.4286ZM18.5716 5.3557C18.5714 4.31422 18.1576 3.31544 17.4211 2.579C16.6847 1.84256 15.6859 1.42875 14.6444 1.42856H14.6416C13.6001 1.42875 12.6013 1.84256 11.8649 2.579C11.1284 3.31544 10.7146 4.31422 10.7144 5.3557V8.57142C10.7144 8.76086 10.7897 8.94254 10.9236 9.07649C11.0576 9.21045 11.2393 9.2857 11.4287 9.2857H14.643C15.6849 9.2857 16.6842 8.8718 17.4209 8.13505C18.1577 7.3983 18.5716 6.39905 18.5716 5.35713V5.3557ZM18.5716 14.6414C18.5714 13.5999 18.1576 12.6012 17.4211 11.8647C16.6847 11.1283 15.6859 10.7145 14.6444 10.7143H11.4287C11.2393 10.7143 11.0576 10.7895 10.9236 10.9235C10.7897 11.0574 10.7144 11.2391 10.7144 11.4286V14.6443C10.7146 15.6858 11.1284 16.6845 11.8649 17.421C12.6013 18.1574 13.6001 18.5712 14.6416 18.5714H14.6444C15.6859 18.5712 16.6847 18.1574 17.4211 17.421C18.1576 16.6845 18.5714 15.6858 18.5716 14.6443V14.6414ZM9.28585 5.3557C9.28567 4.31422 8.87185 3.31544 8.13541 2.579C7.39897 1.84256 6.4002 1.42875 5.35871 1.42856H5.35585C4.31437 1.42875 3.31559 1.84256 2.57915 2.579C1.84271 3.31544 1.4289 4.31422 1.42871 5.3557V5.35713C1.42871 6.39905 1.84261 7.3983 2.57936 8.13505C3.31611 8.8718 4.31536 9.2857 5.35728 9.2857H8.57157C8.76101 9.2857 8.94269 9.21045 9.07664 9.07649C9.2106 8.94254 9.28585 8.76086 9.28585 8.57142V5.3557Z" />
          </svg>
          <svg className="close" onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 0L11.1686 8.99601L18 18L9.0041 11.1605L0 18L6.83156 8.99601L0 0L9.0041 6.83156L18 0Z" />
          </svg>
        </div>
      </div>
    </div>
  </header> 
    </>
  )
}

export default Header4

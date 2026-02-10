"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Sidebar from '../common/Sidebar'

const Header5 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <header className="header-area style-5">
      <div className="header-logo">
        <Link href="/"><img alt="image" className="img-fluid" src="assets/img/portfolio-logo.svg" /></Link>
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
              <a href="#" className="drop-down">Home</a><i className="bi bi-plus dropdown-icon" />
              <ul className="sub-menu">
                <li className=""><Link href="/">Light Version</Link>
                  <i className="bi bi-chevron-right dropdown-icon" />
                  <ul className="sub-menu">
                    <li><Link href="/">Digital Agency</Link></li>
                    <li><Link href="/software-agency">Software Agency</Link></li>
                    <li><Link href="/marketing-agency ">Marketing Agency</Link></li>
                    <li><Link href="/design-studio">Design Studio</Link></li>
                    <li className=""><Link href="/personal-portfolio">Personal Portfolio</Link>
                    </li>
                    <li><Link href="/saas-product">SaaS Product</Link></li>
                  </ul>
                </li>
                <li><Link href="/digital-agency-dark">Dark Version</Link>
                  <i className="bi bi-chevron-right dropdown-icon" />
                  <ul className="sub-menu">
                    <li><Link href="/digital-agency-dark">Digital Agency</Link></li>
                    <li><Link href="/software-agency-dark">Software Agency</Link></li>
                    <li><Link href="/marketing-agency-dark ">Marketing Agency</Link></li>
                    <li><Link href="/design-studio-dark">Design Studio</Link></li>
                    <li><Link href="/personal-portfolio-dark">Personal Portfolio</Link></li>
                    <li><Link href="/saas-product-dark">SaaS Product</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="#" className="drop-down">Services</Link><i className="bi bi-plus dropdown-icon" />
              <ul className="sub-menu">
                <li><Link href="/services1">Service Style 01</Link></li>
                <li><Link href="/service2">Service Style 02</Link></li>
                <li><Link href="/service3">Service Style 03</Link></li>
                <li><Link href="/service4">Service Style 04</Link></li>
                <li><Link href="/service-details ">Service Details</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#" className="drop-down">Pages</a><i className="bi bi-plus dropdown-icon" />
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
        </div>
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <div className="sidebar-btn d-lg-none d-flex">
            <svg className="open" onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.28585 11.4286C9.28585 11.2391 9.2106 11.0574 9.07664 10.9235C8.94269 10.7895 8.76101 10.7143 8.57157 10.7143H5.35585C4.31437 10.7145 3.31559 11.1283 2.57915 11.8647C1.84271 12.6012 1.4289 13.5999 1.42871 14.6414V14.6443C1.4289 15.6858 1.84271 16.6845 2.57915 17.421C3.31559 18.1574 4.31437 18.5712 5.35585 18.5714H5.35871C6.4002 18.5712 7.39897 18.1574 8.13541 17.421C8.87185 16.6845 9.28567 15.6858 9.28585 14.6443V11.4286ZM18.5716 5.3557C18.5714 4.31422 18.1576 3.31544 17.4211 2.579C16.6847 1.84256 15.6859 1.42875 14.6444 1.42856H14.6416C13.6001 1.42875 12.6013 1.84256 11.8649 2.579C11.1284 3.31544 10.7146 4.31422 10.7144 5.3557V8.57142C10.7144 8.76086 10.7897 8.94254 10.9236 9.07649C11.0576 9.21045 11.2393 9.2857 11.4287 9.2857H14.643C15.6849 9.2857 16.6842 8.8718 17.4209 8.13505C18.1577 7.3983 18.5716 6.39905 18.5716 5.35713V5.3557ZM18.5716 14.6414C18.5714 13.5999 18.1576 12.6012 17.4211 11.8647C16.6847 11.1283 15.6859 10.7145 14.6444 10.7143H11.4287C11.2393 10.7143 11.0576 10.7895 10.9236 10.9235C10.7897 11.0574 10.7144 11.2391 10.7144 11.4286V14.6443C10.7146 15.6858 11.1284 16.6845 11.8649 17.421C12.6013 18.1574 13.6001 18.5712 14.6416 18.5714H14.6444C15.6859 18.5712 16.6847 18.1574 17.4211 17.421C18.1576 16.6845 18.5714 15.6858 18.5716 14.6443V14.6414ZM9.28585 5.3557C9.28567 4.31422 8.87185 3.31544 8.13541 2.579C7.39897 1.84256 6.4002 1.42875 5.35871 1.42856H5.35585C4.31437 1.42875 3.31559 1.84256 2.57915 2.579C1.84271 3.31544 1.4289 4.31422 1.42871 5.3557V5.35713C1.42871 6.39905 1.84261 7.3983 2.57936 8.13505C3.31611 8.8718 4.31536 9.2857 5.35728 9.2857H8.57157C8.76101 9.2857 8.94269 9.21045 9.07664 9.07649C9.2106 8.94254 9.28585 8.76086 9.28585 8.57142V5.3557Z" />
            </svg>
            <svg className="close" onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
              <path fillRule="evenodd" clipRule="evenodd" d="M18 0L11.1686 8.99601L18 18L9.0041 11.1605L0 18L6.83156 8.99601L0 0L9.0041 6.83156L18 0Z" />
            </svg>
          </div>
          <a className="primary-btn4 btn-hover d-md-flex d-none" href="assets/case-study.pdf" download="case-study.pdf">My Resume
            <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8889 14H3.1111C2.28015 14 1.49889 13.6764 0.911239 13.0887C0.323616 12.5012 0 11.7199 0 10.8889V10.1111C0 9.68148 0.348205 9.33325 0.777782 9.33325C1.20736 9.33325 1.55556 9.68148 1.55556 10.1111V10.8889C1.55556 11.3044 1.71739 11.695 2.01114 11.9888C2.30498 12.2826 2.6956 12.4444 3.1111 12.4444H10.8889C11.3043 12.4444 11.695 12.2826 11.9888 11.9888C12.2826 11.6949 12.4444 11.3043 12.4444 10.8889V10.1111C12.4444 9.68148 12.7926 9.33325 13.2222 9.33325C13.6517 9.33325 14 9.68148 14 10.1111V10.8889C14 11.7198 13.6764 12.5011 13.0887 13.0887C12.5011 13.6764 11.7198 14 10.8889 14ZM6.99999 10.8888C6.79689 10.8891 6.6018 10.8097 6.45665 10.6676L6.4566 10.6676L6.45505 10.6661L6.45461 10.6656C6.45418 10.6652 6.4538 10.6648 6.45339 10.6644L6.4526 10.6636C6.45232 10.6633 6.45203 10.6631 6.45173 10.6628L6.45005 10.6611L3.33892 7.54995C3.03519 7.24622 3.03519 6.75375 3.33892 6.44999C3.64265 6.14627 4.13515 6.14624 4.43888 6.44999L6.22223 8.23335V0.777782C6.2222 0.348205 6.57041 0 6.99999 0C7.42956 0 7.7778 0.348205 7.7778 0.777782V8.23332L9.56112 6.44999C9.86482 6.14627 10.3574 6.14627 10.6611 6.44999C10.9648 6.75372 10.9648 7.24622 10.6611 7.54995L7.54995 10.6611L7.54827 10.6627L7.5474 10.6636L7.54661 10.6644C7.54623 10.6648 7.54579 10.6652 7.54541 10.6656L7.54495 10.666C7.54446 10.6665 7.54395 10.667 7.54343 10.6675L7.54338 10.6676C7.53482 10.6759 7.52615 10.684 7.51729 10.6919C7.4538 10.7486 7.38137 10.7945 7.30293 10.8276L7.30217 10.8279C7.30187 10.828 7.30162 10.8282 7.30132 10.8283C7.20593 10.8684 7.10347 10.889 6.99999 10.8888Z" />
            </svg>
            <span style={{top: '50.5px', left: '83.75px'}} />
          </a>
        </div>
      </div>
    </header> 
    </>
  )
}

export default Header5

"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Sidebar from '../common/Sidebar';

const Header6 = () => {
const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
     <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <header className="header-area style-6">
        <div className="container-lg container-fluid d-flex flex-nowrap align-items-center justify-content-between">
          <div className="header-logo">
            <Link href="/"><img alt="image" className="img-fluid" src="assets/img/saas-logo.svg" /></Link>
          </div>
          <div className="main-menu">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link href="/"><img alt="image" src="assets/img/software-logo.svg" /></Link>
              </div>
            </div>
            <ul className="menu-list">
              <li className="menu-item-has-children active">
                <a href="#" className="drop-down">Home</a><i className="bi bi-plus dropdown-icon" />
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10">
                  <path d="M18 4.95V10H13.0154V8.62143H15.7362L10.6962 3.50714L6.59769 7.65714L0 0.978571L0.962308 0L6.59769 5.71429L10.6962 1.56429L16.6154 7.57857V4.95H18Z" />
                </svg>
                <ul className="sub-menu">
                  <li className="active"><Link href="/">Light Version</Link>
                    <i className="bi bi-chevron-right dropdown-icon" />
                    <ul className="sub-menu">
                      <li><Link href="/">Digital Agency</Link></li>
                      <li><Link href="/software-agency">Software Agency</Link></li>
                      <li><Link href="/marketing-agency ">Marketing Agency</Link></li>
                      <li><Link href="/design-studio">Design Studio</Link></li>
                      <li><Link href="/personal-portfolio">Personal Portfolio</Link></li>
                      <li className="active"><Link href="/saas-product">SaaS Product</Link></li>
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
              <li><Link href="/feature-section">Features</Link></li>
              <li><Link href="/solution-section">Solutions</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">Pages</a><i className="bi bi-plus dropdown-icon" />
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10">
                  <path d="M18 4.95V10H13.0154V8.62143H15.7362L10.6962 3.50714L6.59769 7.65714L0 0.978571L0.962308 0L6.59769 5.71429L10.6962 1.56429L16.6154 7.57857V4.95H18Z" />
                </svg>
                <ul className="sub-menu">
                  <li><Link href="/about">about us</Link></li>
                  <li><Link href="/about-me">about me</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
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
                  <li><Link href="/faq">FAQs</Link></li>
                  <li><Link href="/error">Error 404</Link></li>
                  <li><Link href="/terms-conditions">Terms &amp; Conditions</Link></li>
                </ul>
              </li>
            </ul>
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
            <a href="#" className="login-area d-sm-flex d-none">
              <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.364 11.636C14.3837 10.6558 13.217 9.93013 11.9439 9.49085C13.3074 8.55179 14.2031 6.9802 14.2031 5.20312C14.2031 2.33413 11.869 0 9 0C6.131 0 3.79688 2.33413 3.79688 5.20312C3.79688 6.9802 4.69262 8.55179 6.05609 9.49085C4.78308 9.93013 3.61631 10.6558 2.63605 11.636C0.936176 13.3359 0 15.596 0 18H1.40625C1.40625 13.8128 4.81279 10.4062 9 10.4062C13.1872 10.4062 16.5938 13.8128 16.5938 18H18C18 15.596 17.0638 13.3359 15.364 11.636ZM9 9C6.90641 9 5.20312 7.29675 5.20312 5.20312C5.20312 3.1095 6.90641 1.40625 9 1.40625C11.0936 1.40625 12.7969 3.1095 12.7969 5.20312C12.7969 7.29675 11.0936 9 9 9Z" />
              </svg>
              <span className="d-xl-block d-none">Login</span>
            </a>
            <a href="#" className="primary-btn3 btn-hover d-md-flex d-none">
              Free Trial
              <span style={{top: '50.5px', left: '83.75px'}} />
            </a>
          </div>
        </div>
      </header> 
    </>
  )
}

export default Header6

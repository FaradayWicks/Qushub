import Footer3 from "@/components/Footer/Footer3";
import Header from "@/components/header/Header";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const page = () => {
  return (
    <>
      <Header />

      <div className="cart-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title six mb-70">
                <h2>Cart Page</h2>
                <div className="dash-and-paragraph">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z" />
                  </svg>
                  <p>
                    Creating a concise and effective design studio brief is
                    crucial for outlining your business, its services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            <div className="col-xl-8 col-lg-7">
              <div className="cart-shopping-wrapper">
                <div className="cart-widget-title">
                  <h5>My Shopping</h5>
                </div>
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Product Info</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Product Info">
                        <div className="product-info-wrapper">
                          <div className="product-info-img">
                            <img
                              src="assets/img/innerpage/cart-img1.png"
                              alt=""
                            />
                          </div>
                          <div className="product-info-content">
                            <h6>ZARA Crimson</h6>
                            <p>
                              <span>SKU: </span>D32-5H23
                            </p>
                            <ul>
                              <li>remove</li>
                              <li>
                                <div className="qty-btn">quantity</div>
                                <div className="quantity-area">
                                  <div className="quantity">
                                    <a className="quantity__minus">
                                      <span>
                                        <i className="bi bi-dash" />
                                      </span>
                                    </a>
                                    <input
                                      name="quantity"
                                      type="text"
                                      className="quantity__input"
                                      defaultValue={0}
                                    />
                                    <a className="quantity__plus">
                                      <span>
                                        <i className="bi bi-plus" />
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td data-label="Price">
                        <span>$148.00</span>
                      </td>
                      <td data-label="Total">$148.00</td>
                    </tr>
                    <tr>
                      <td data-label="Product Info">
                        <div className="product-info-wrapper">
                          <div className="product-info-img">
                            <img
                              src="assets/img/innerpage/cart-img2.png"
                              alt=""
                            />
                          </div>
                          <div className="product-info-content">
                            <h6>Fashion Forward</h6>
                            <p>
                              <span>SKU: </span>D32-5H23
                            </p>
                            <ul>
                              <li>remove</li>
                              <li>
                                <div className="qty-btn">quantity</div>
                                <div className="quantity-area">
                                  <div className="quantity">
                                    <a className="quantity__minus">
                                      <span>
                                        <i className="bi bi-dash" />
                                      </span>
                                    </a>
                                    <input
                                      name="quantity"
                                      type="text"
                                      className="quantity__input"
                                      defaultValue={1}
                                    />
                                    <a className="quantity__plus">
                                      <span>
                                        <i className="bi bi-plus" />
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td data-label="Price">
                        <span>$200.00</span>
                      </td>
                      <td data-label="Total">$200.00</td>
                    </tr>
                  </tbody>
                </table>
                <Link href="/shop" className="details-button">
                  Continue Shoping
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 ">
              <div className="cart-order-sum-area">
                <div className="cart-widget-title">
                  <h5>Order Summary</h5>
                </div>
                <div className="order-summary-wrap">
                  <ul className="order-summary-list">
                    <li>
                      <strong>Sub Total</strong>
                      <strong>$348.00</strong>
                    </li>
                    <li>
                      Shipping
                      <div className="order-info">
                        <p>Shipping Free*</p>
                        <span> Pickup fee $10.00</span>
                      </div>
                    </li>
                    <li>
                      <div className="coupon-area">
                        <span>Coupon Code</span>
                        <form>
                          <div className="form-inner">
                            <input type="text" placeholder="Your code" />
                            <button type="submit" className="apply-btn">
                              Apply
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li>
                      <strong>Total</strong>
                      <strong>$214.00</strong>
                    </li>
                  </ul>
                  <Link
                    href="/checkout"
                    className="primary-btn3 btn-hover mt-40"
                  >
                    Processed Checkout
                    <span style={{ top: "50.5px", left: "83.75px" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slider-section two">
        <div className="marquee">
          <div className="marquee__group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>{" "}
              DIGITAL PRODUCT
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              DIGITAL STUDIO
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              EMAIL MARKETING
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              EMAIL MARKETING
            </span>
          </div>
          <div className="marquee__group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>{" "}
              DIGITAL PRODUCT
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              DIGITAL STUDIO
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              EMAIL MARKETING
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              EMAIL MARKETING
            </span>
          </div>
        </div>
      </div>

      <Footer3 />
    </>
  );
};

export default page;

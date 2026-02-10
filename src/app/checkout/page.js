import Footer3 from "@/components/Footer/Footer3";
import Header from "@/components/header/Header";
import ChoosePaymentMethod from "@/utils/ChoosePaymentMethod";
import HandleQuantity from "@/utils/HandleQuantity";
import Link from "next/link";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <div>
        <div className="checkout-page pt-130 mb-130">
          <div className="container-lg container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title six mb-70">
                  <h2>Checkout</h2>
                  <div className="dash-and-paragraph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 877 64"
                    >
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
              <div className="col-lg-7">
                <div className="checkout-form-wrapper">
                  <div className="checkout-form-title">
                    <h5>Billing Information</h5>
                  </div>
                  <div className="checkout-form">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-inner mb-25">
                            <label>Full Name*</label>
                            <input type="text" placeholder="Daniel Scoot" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner mb-25">
                            <label>Phone Number*</label>
                            <input
                              type="text"
                              placeholder="(212)+ 455 645 678"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner mb-25">
                            <label>
                              Email Address <span>(Optional)</span>
                            </label>
                            <input type="email" placeholder="info@gmail.com" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner mb-25">
                            <label>Your Location</label>
                            <input type="text" placeholder="Type Location" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner mb-25">
                            <label>Street Address*</label>
                            <input type="text" placeholder="Street address" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner mb-25">
                            <label>Postal Code*</label>
                            <input type="text" placeholder="Postal code" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-inner mb-25">
                            <label>Short Notes*</label>
                            <textarea
                              placeholder="checkout-page"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-inner2">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="contactCheck"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="contactCheck"
                              >
                                Save my information for next time when I
                                purchased
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="checkout-form-wrapper">
                  <div className="checkout-form-title">
                    <h5>Order Summary</h5>
                  </div>
                  <div className="order-sum-area">
                    <form>
                      <div className="cart-menu">
                        <div className="cart-body">
                          <ul>
                            <li className="single-item">
                              <div className="item-area">
                                <div className="main-item">
                                  <div className="item-img">
                                    <img
                                      src="assets/img/innerpage/checkout-product-img1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="content-and-quantity">
                                    <div className="content">
                                      <span>2 x $190.00</span>
                                      <h6>
                                        <Link href="/product-details">
                                          Modern Sunglasses
                                        </Link>
                                      </h6>
                                    </div>
                                    <HandleQuantity />
                                  </div>
                                </div>
                                <button type="reset" className="close-btn">
                                  <i className="bi bi-x" />
                                </button>
                              </div>
                            </li>
                            <li className="single-item">
                              <div className="item-area">
                                <div className="main-item">
                                  <div className="item-img">
                                    <img
                                      src="assets/img/innerpage/checkout-product-img2.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="content-and-quantity">
                                    <div className="content">
                                      <span>2 x $150</span>
                                      <h6>
                                        <a href="#">Zara Crimsons</a>
                                      </h6>
                                    </div>
                                    <HandleQuantity />
                                  </div>
                                </div>
                                <button type="reset" className="close-btn">
                                  <i className="bi bi-x" />
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="cart-footer">
                          <div className="pricing-area mb-40">
                            <ul>
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
                                <strong>Total</strong>
                                <strong>$214.00</strong>
                              </li>
                            </ul>
                          </div>
                          <ChoosePaymentMethod />
                          <button
                            type="submit"
                            className="primary-btn3 btn-hover"
                          >
                            Place Your Order
                            <span style={{ top: "50.5px", left: "83.75px" }} />
                          </button>
                        </div>
                      </div>
                    </form>
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
      </div>

      <Footer3 />
    </>
  );
};

export default CheckoutPage;

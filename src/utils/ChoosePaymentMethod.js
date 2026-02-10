"use client"
import React, { useState } from "react";

const ChoosePaymentMethod = () => {
  const [activeOption, setActiveOption] = useState("paypal");
  const handleOptionChange = (option) => {
    setActiveOption(option);
  };
  return (
    <div className="choose-payment-method">
      <h6>Select Payment Method</h6>
      <div className="payment-option">
        <ul>
          <li
            onClick={() => handleOptionChange("paypal")}
            className={`paypal ${activeOption === "paypal" ? "active" : ""}`}
          >
            <img src="assets/img/innerpage/vector/payPal.svg" alt="" />
            <div className="checked">
              <i className="bi bi-check" />
            </div>
          </li>
          <li
            className={`stripe ${activeOption === "stripe" ? "active" : ""}`}
            onClick={() => handleOptionChange("stripe")}
          >
            <img src="assets/img/innerpage/vector/stripe.svg" alt="" />
            <div className="checked">
              <i className="bi bi-check" />
            </div>
          </li>
          <li
            className={`offline ${activeOption === "offline" ? "active" : ""}`}
            onClick={() => handleOptionChange("offline")}
          >
            <img src="assets/img/innerpage/vector/offline.svg" alt="" />
            <div className="checked">
              <i className="bi bi-check" />
            </div>
          </li>
        </ul>
      </div>
      <div
        div
        className="pt-25"
        id="StripePayment"
        style={{
          display: activeOption === "stripe" ? "block" : "none",
        }}
      >
        <div className="row g-4">
          <div className="col-md-12">
            <div className="form-inner">
              <label>Card Number</label>
              <input type="text" placeholder="1234 1234 1234 1234" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-inner">
              <label>Expiry</label>
              <input type="text" placeholder="MM/YY" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-inner">
              <label>CVC</label>
              <input type="text" placeholder="CVC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePaymentMethod;

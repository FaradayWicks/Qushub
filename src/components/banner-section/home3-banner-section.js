
"use client"
import React, { useEffect } from 'react'

const Home3BannerSection = () => {
  useEffect(() => {
    document.body.classList.add("home1-bg");
  }, []);
  return (
    <>
       <div className="home3-banner-area">
    <svg className="vector" xmlns="http://www.w3.org/2000/svg" width={336} height={418} viewBox="0 0 336 418" fill="none">
      <path d="M49.999 359.57C49.999 530.694 188.228 669.14 358.399 669.14C528.57 669.14 666.799 530.694 666.799 359.57C666.799 188.445 528.57 50 358.399 50C188.228 50 49.999 188.445 49.999 359.57Z" strokeWidth={100} />
    </svg>
    <div className="container-lg container-fluid">
      <div className="row g-lg-4 gy-5">
        <div className="col-lg-9">
          <div className="banner-content text-animation">
            <h1>Creative <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 98">
                  <path d="M46.6475 50.5321C46.6475 50.5321 20.7064 8.67022 39.2802 1.19118C57.854 -6.28787 67.4003 22.9012 53.3921 48.2469C53.3921 48.2469 69.6831 13.1369 87.4268 18.3307C105.171 23.5244 94.7941 51.2592 58.5804 57.1801C58.5804 57.1801 102.265 51.1554 102.991 69.853C103.718 88.5506 57.854 83.3568 52.6658 57.1801C52.6658 57.1801 66.7777 102.782 37.1011 97.5878C7.52832 92.394 46.0249 54.2716 46.0249 54.2716C46.0249 54.2716 6.80197 78.163 0.887407 53.5445C-5.23469 28.8221 21.4327 28.8221 46.6475 50.5321Z" />
                </svg> Marketing</span> Agency</h1>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="banner-right">
            <a href="#" className="rating-area dark">
              <div className="review">
                <span>Review On</span>
                <svg xmlns="http://www.w3.org/2000/svg" width={78} height={22} viewBox="0 0 78 22" fill="none">
                  <path d="M57.5244 16.95C58.9366 16.95 60.0814 15.8109 60.0814 14.4057C60.0814 13.0005 58.9366 11.8613 57.5244 11.8613C56.1121 11.8613 54.9673 13.0005 54.9673 14.4057C54.9673 15.8109 56.1121 16.95 57.5244 16.95Z" fill="#E62415" />
                  <path d="M20.3027 0H23.6865V21.713H20.3027V0ZM36.0104 15.0174C36.0104 18.3843 33.2418 18.6522 32.3959 18.6522C30.281 18.6522 29.9734 16.6817 29.9734 15.4957V7.09739H26.5704V15.4765C26.5511 17.5617 27.1472 19.2835 28.3007 20.4313C29.3484 21.3606 30.6831 21.9067 32.0846 21.9798C33.4862 22.0528 34.8709 21.6483 36.0104 20.833V21.713H39.4134V7.09739H36.0104V15.0174ZM46.7577 2.18087H43.3547V7.09739H40.9899V10.2922H43.3547V21.713H46.7577V10.2922H49.5455V7.09739H46.7577V2.18087ZM60.562 17.5617C59.793 18.2504 58.774 18.633 57.6589 18.633C57.0924 18.649 56.5286 18.5494 56.0022 18.3404C55.4758 18.1315 54.998 17.8175 54.5982 17.4178C54.1984 17.0182 53.885 16.5414 53.6773 16.0167C53.4696 15.492 53.3721 14.9306 53.3907 14.367C53.3907 11.8991 55.1403 10.1774 57.6589 10.1774C58.7547 10.1774 59.793 10.5409 60.5812 11.2296L61.1195 11.6887L63.5036 9.31652L62.9076 8.78087C61.4638 7.49957 59.5934 6.79737 57.6589 6.81043C53.2369 6.81043 50.0261 9.98609 50.0261 14.3478C50.0026 15.3534 50.1837 16.3533 50.5585 17.2874C50.9333 18.2215 51.494 19.0706 52.207 19.7836C52.9199 20.4966 53.7704 21.0588 54.7073 21.4364C55.6442 21.814 56.6482 21.9992 57.6589 21.9809C59.6776 21.9809 61.5617 21.273 62.946 19.9913L63.5228 19.4557L61.1003 17.0835L60.562 17.5617ZM76.2697 8.37913C75.222 7.44988 73.8873 6.90369 72.4858 6.83066C71.0842 6.75762 69.6995 7.16211 68.56 7.97739V0H65.157V21.713H68.56V13.8122C68.56 10.4452 71.3286 10.1774 72.1745 10.1774C74.2894 10.1774 74.597 12.1478 74.597 13.3339V21.7322H78V13.3339C78.1027 11.5199 77.4807 9.73895 76.2697 8.37913ZM15.2847 16.5096C14.6226 17.1863 13.8302 17.7231 12.9548 18.088C12.0793 18.4529 11.1389 18.6383 10.1898 18.633C6.24846 18.633 3.38378 15.553 3.38378 11.3252C3.38378 7.07826 6.24846 3.99826 10.1898 3.99826C12.0932 3.99826 13.9004 4.74435 15.2655 6.10261L15.8038 6.63826L18.1686 4.28522L17.6495 3.74957C16.674 2.76231 15.5096 1.97946 14.2251 1.44719C12.9406 0.914914 11.562 0.644003 10.1706 0.650435C4.38353 0.650435 0 5.24174 0 11.3443C0 17.4087 4.38353 22 10.1706 22C13.0352 22 15.6884 20.8904 17.6495 18.8817L18.1686 18.3461L15.823 15.9548L15.2847 16.5096Z">
                  </path>
                </svg>
              </div>
              <div className="rating">
                <ul className="star">
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-fill" /></li>
                  <li><i className="bi bi-star-half" /></li>
                </ul>
                <span>(50 reviews)</span>
              </div>
            </a>
            <div className="banner-right-content">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 94">
                <path d="M13.3333 3C13.3333 4.47276 14.5272 5.66667 16 5.66667C17.4728 5.66667 18.6667 4.47276 18.6667 3C18.6667 1.52724 17.4728 0.333333 16 0.333333C14.5272 0.333333 13.3333 1.52724 13.3333 3ZM16 92.9999L15.5814 93.2734C15.6728 93.4133 15.8281 93.4983 15.9953 93.4999C16.1624 93.5015 16.3193 93.4194 16.4133 93.2813L16 92.9999ZM15.5 3V92.9999H16.5V3H15.5ZM16.4186 92.7265C16.2128 92.4115 15.9458 91.8741 15.6098 91.1408C15.2766 90.4135 14.8931 89.5332 14.4487 88.5387C13.5644 86.5598 12.4567 84.1692 11.1201 81.8623C9.78549 79.5587 8.20865 77.314 6.37629 75.6401C4.54211 73.9647 2.41681 72.8306 0 72.8306V73.8306C2.08319 73.8306 3.97873 74.8044 5.70184 76.3785C7.42677 77.9542 8.94368 80.1005 10.2549 82.3636C11.5641 84.6232 12.6544 86.9745 13.5357 88.9467C13.9741 89.9278 14.3653 90.8253 14.7007 91.5573C15.0333 92.2833 15.3289 92.8868 15.5814 93.2734L16.4186 92.7265ZM16.4133 93.2813C16.7085 92.8476 17.0354 92.2098 17.3925 91.4545C17.7521 90.6938 18.157 89.7816 18.6042 88.7896C19.5021 86.7981 20.582 84.4598 21.8706 82.2255C23.1611 79.988 24.6463 77.8812 26.3438 76.3406C28.0383 74.8027 29.9127 73.8562 31.9982 73.8639L32.0019 72.8639C29.5873 72.8549 27.4825 73.9567 25.6718 75.6001C23.8642 77.2406 22.3181 79.448 21.0044 81.7259C19.6888 84.0068 18.5916 86.3847 17.6926 88.3786C17.2414 89.3794 16.8429 90.2772 16.4884 91.0272C16.1312 91.7827 15.8332 92.3564 15.5867 92.7186L16.4133 93.2813Z" />
              </svg>
              <p>Marketing agencies play a crucial role in <span>promoting products, services, or
                  brands</span> to target audiences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="home3-video-section">
    <video autoPlay loop muted playsInline src="assets/video/video-bg2.mp4" />
  </div>
  <div className="text-slider-section three mb-130">
    <div className="marquee">
      <div className="marquee__group">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
            <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
          </svg> DIGITAL PRODUCT
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>UI/UX DESIGN
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>DIGITAL STUDIO
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
            <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
          </svg>BRANDING DESIGN
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>UI/UX DESIGN
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>EMAIL MARKETING
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
            <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
          </svg>BRANDING DESIGN
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>UI/UX DESIGN
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>EMAIL MARKETING
        </span>
      </div>
      <div className="marquee__group">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
            <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
          </svg> DIGITAL PRODUCT
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>UI/UX DESIGN
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>DIGITAL STUDIO
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
            <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
          </svg>BRANDING DESIGN
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>UI/UX DESIGN
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>EMAIL MARKETING
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
            <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
          </svg>BRANDING DESIGN
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>UI/UX DESIGN
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
          </svg>EMAIL MARKETING
        </span>
      </div>
    </div>
  </div> 
    </>
  )
}

export default Home3BannerSection

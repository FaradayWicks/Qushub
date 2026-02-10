"use client"
import React, { useEffect } from 'react'

const Home3AwardSection = () => {
    useEffect(() => {
        const handleMouseEnter = (e) => {
          const target = e.target;
          const tr = target.closest("tr");
          if (!tr) return;
    
          const index = Array.from(tr.parentElement.children).indexOf(tr);
    
          const imageListItems = document.querySelectorAll('.award-img-group li');
          imageListItems.forEach((item) => {
            item.classList.remove('active');
          });
    
          const imageListItem = document.querySelector(`.award-img-group li:nth-child(${index + 1})`);
          if (imageListItem) {
            imageListItem.classList.add('active');
          }
        };
    
        document.querySelectorAll(".award-table tbody tr").forEach((tr) => {
          tr.addEventListener("mouseenter", handleMouseEnter);
        });
    
        return () => {
          document.querySelectorAll(".award-table tbody tr").forEach((tr) => {
            tr.removeEventListener("mouseenter", handleMouseEnter);
          });
        };
      }, []);
  return (
    <>
     <div className="home3-award-section">
    <div className="container-lg container-fluid">
      <div className="row mb-60">
        <div className="col-lg-4">
          <div className="sub-title2 text-animation">
            <h6>Achievment</h6>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="section-title text-animation">
            <h2>Recognitions
              <strong>&amp; Award.</strong>
            </h2>
            <div className="dash-and-paragraph">
              <div className="dash" />
              <p>The specific goals of a marketing agency can vary depending on the client's
                needs, industry.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <ul className="award-img-group">
            <li className="active">
              <div className="award-img">
                <img src="assets/img/home3/award-11.png" alt="" />
              </div>
            </li>
            <li>
              <div className="award-img">
                <img src="assets/img/home3/award-12.png" alt="" />
              </div>
            </li>
            <li>
              <div className="award-img">
                <img src="assets/img/home3/award-13.png" alt="" />
              </div>
            </li>
            <li>
              <div className="award-img">
                <img src="assets/img/home3/award-14.png" alt="" />
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-8">
          <table className="award-table">
            <thead>
              <tr>
                <th>Award.</th>
                <th>Platform</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Award">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg> Digital <br /> Innovation
                  </a>
                </td>
                <td data-label="Platform">Digigo <br /> Platform</td>
                <td data-label="Year">2023</td>
              </tr>
              <tr>
                <td data-label="Award">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg> InnovateXcel <br /> Award
                  </a>
                </td>
                <td data-label="Platform">Linkedin <br /> Platform</td>
                <td data-label="Year">2021</td>
              </tr>
              <tr>
                <td data-label="Award">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg> Digital <br /> Vanguard
                  </a>
                </td>
                <td data-label="Platform">Adobe <br /> Platform</td>
                <td data-label="Year">2020</td>
              </tr>
              <tr>
                <td data-label="Award">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>Digital <br /> Dynamo
                  </a>
                </td>
                <td data-label="Platform">Digigo <br /> Platform</td>
                <td data-label="Year">2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div> 
    </>
  )
}

export default Home3AwardSection

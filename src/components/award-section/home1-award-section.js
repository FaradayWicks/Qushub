"use client"
import React, { useEffect, useState } from "react";
// Sample data for awards
const awardData = [
  { name: "Digital Innovation", platform: "Digigo Platform", year: "2023" },
  { name: "InnovateXcel Award", platform: "Microsoft Platform", year: "2023" },
  { name: "Digital Vanguard", platform: "Adobe Platform", year: "2022" },
  { name: "Mastermind", platform: "Behance Platform", year: "2021" },
  { name: "Digital Dynamo", platform: "Linkedin Platform", year: "2020" },
  { name: "TechTrailblazer", platform: "Digigo Platform", year: "2019" },
];

const Home1AwardSection = () => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

  const handleRowHover = (index) => {
    setHoveredRowIndex(index);
  };
  return (
    <>
      <div className="award-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-8">
              <div className="section-title text-animation">
                <h2>
                  RECOGNITIONS
                  <br />
                  &amp; <span>AWARD</span>
                </h2>
                <div className="dash-and-paragraph text-animation">
                  <div className="dash" />
                  <p>
                    Offer a wide range of services to help businesses establish
                    and enhance their online presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ul className="award-img-group text-animation">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <li
                    key={index}
                    className={hoveredRowIndex === index ? "active" : ""}
                  >
                    <div className="award-img">
                      <img
                        src={`assets/img/home1/award-img-0${index}.jpg`}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
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
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <tr key={index} onMouseEnter={() => handleRowHover(index)}>
                      <td data-label="Award">
                        <a href="#">
                          {awardData[index - 1].name}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                          </svg>
                        </a>
                      </td>
                      <td data-label="Platform">
                        {awardData[index - 1].platform}
                      </td>
                      <td data-label="Year">{awardData[index - 1].year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1AwardSection;

import Link from 'next/link'
import React from 'react'

const Home2ServicesSection = () => {
  return (
    <>
      <div className="home2-services-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title four text-animation">
                <h2>Technology Solutions<br /><span> We Deliver</span></h2>
                <div className="dash-and-paragraph three">
                  <div className="btn-and-paragraph">
                    <Link href="#!">Explore More
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                        </path>
                      </svg>
                    </Link>
                    <p>Offer a wide range of services to help businesses establish and enhance their
                      online
                      presence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-wrapper">
            <div className="service-card">
              <h3>1. AI & Intelligent Systems</h3>
              <p>Design and deployment of AI-driven solutions including machine learning models, LLM integrations, and intelligent automation systems.</p>
              <ul>
                <li><a href="#">LLM Integration & Fine-Tuning</a></li>
                <li><a href="#">MLOps</a></li>
                <li><a href="#">AI Agents</a></li>
                <li><a href="#">Data Engineering</a></li>
                <li><a href="#">Machine Learning</a></li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="#!">Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: '50.5px', left: '83.75px' }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>2. App Development</h3>
              <p>Custom mobile and cross-platform applications engineered for scalability, speed, and seamless user experience.
              </p>
              <ul>
                <li><a href="#">iOS</a></li>
                <li><a href="#">Android</a></li>
                <li><a href="#">Flutter</a></li>
                <li><a href="#">React Native</a></li>
                <li><a href="#">API Integration</a></li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="#!">
                Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: '50.5px', left: '83.75px' }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>3. Block-Chain</h3>
              <p>Secure blockchain solutions including smart contracts, tokenization, and decentralized application development.</p>
              <ul>
                <li><a href="#">Smart Contracts</a></li>
                <li><a href="#">Web3</a></li>
                <li><a href="#">Token Development</a></li>
                <li><a href="#">DApps</a></li>
                <li><a href="#">Blockchain Architecture</a></li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/service-details">Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: '50.5px', left: '83.75px' }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>4. Web Development</h3>
              <p>High-performance web platforms and enterprise applications built with modern frameworks and scalable architecture.
              </p>
              <ul>
                <li><a href="#">Frontend Engineering</a></li>
                <li><a href="#">Backend Systems</a></li>
                <li><a href="#">Full-Stack</a></li>
                <li><a href="#">SaaS Platforms</a></li>
                <li><a href="#">API Development</a></li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="#!">Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: '50.5px', left: '83.75px' }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>5. Cloud Service</h3>
              <p>Cloud infrastructure design, deployment, and optimization for secure, scalable, and cost-efficient operations.</p>
              <ul>
                <li><a href="#">AWS</a></li>
                <li><a href="#">Google Cloud</a></li>
                <li><a href="#">DevOps</a></li>
                <li><a href="#">CI/CD</a></li>
                <li><a href="#">Cloud Migration</a></li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="#!">Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: '50.5px', left: '83.75px' }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>6. UI/UX Design</h3>
              <p>User-centered interface design focused on usability, performance, and conversion optimization.</p>
              <ul>
                <li><a href="#">User Research</a></li>
                <li><a href="#">Wireframing</a></li>
                <li><a href="#">Prototyping</a></li>
                <li><a href="#">Interaction Design</a></li>
                <li><a href="#">Design Systems</a></li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="#!">Explore More
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: '50.5px', left: '83.75px' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home2ServicesSection

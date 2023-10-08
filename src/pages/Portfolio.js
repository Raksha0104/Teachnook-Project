import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Eachpart from "../components/eachpart";
import "./portfolio.css";
import { images } from "../components/importingScript";

const Portfolio = () => {
  return (
    <>
      <Header />
      <Eachpart pageName="Portfolio" />

      {/* Portfolio Content */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              maxWidth: "500px",
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <p className="fs-5 fw-medium text-primary">Our Portfolio</p>
            <h1 className="display-5 mb-5">Check Out Our Work</h1>
          </div>
          {/* Portfolio Items */}
          <div className="row g-4">
            {/* Portfolio Item 1 */}
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="portfolio-item position-relative h-100">
                <div className="portfolio-image rounded">
                  <img
                    className="img-fluid"
                    src={images["./project-1.jpg"]}
                    alt="Portfolio Item 1"
                  />
                </div>
                <div className="portfolio-info rounded p-3">
                  <h5 className="mb-3">Project Title 1</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et arcu nec justo ullamcorper vehicula.
                  </p>
                </div>
                <div className="portfolio-link rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium cur pointer" href="#">
                    View Details{" "}
                    <i className="bi bi-chevron-double-right ms-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className="portfolio-item position-relative h-100">
                <div className="portfolio-image rounded">
                  <img
                    className="img-fluid"
                    src={images["./project-2.jpg"]}
                    alt="Portfolio Item 2"
                  />
                </div>
                <div className="portfolio-info rounded p-3">
                  <h5 className="mb-3">Project Title 2</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et arcu nec justo ullamcorper vehicula.
                  </p>
                </div>
                <div className="portfolio-link rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium cur pointer" href="#">
                    View Details{" "}
                    <i className="bi bi-chevron-double-right ms-2" />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className="portfolio-item position-relative h-100">
                <div className="portfolio-image rounded">
                  <img
                    className="img-fluid"
                    src={images["./project-3.jpg"]}
                    alt="Portfolio Item 2"
                  />
                </div>
                <div className="portfolio-info rounded p-3">
                  <h5 className="mb-3">Project Title 3</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et arcu nec justo ullamcorper vehicula.
                  </p>
                </div>
                <div className="portfolio-link rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium cur pointer" href="#">
                    View Details{" "}
                    <i className="bi bi-chevron-double-right ms-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Add more Portfolio Items here */}
          </div>
          {/* End of Portfolio Items */}
        </div>
      </div>
      {/* End of Portfolio Content */}

      <Footer />
    </>
  );
};

export default Portfolio;

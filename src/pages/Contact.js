import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Eachpart from "../components/eachpart";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <Eachpart pageName="Contact" />

      {/* Contact Form */}
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
            <p className="fs-5 fw-medium text-primary">Contact Us</p>
            <h1 className="display-5 mb-5">Get in Touch</h1>
          </div>

          {/* Contact Form */}
          <div className="row">
            <div className="col-lg-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Map */}
            <div className="col-lg-6">
              {/* Replace the iframe below with your own Google Maps iframe */}
              {/* <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2dYourLongitude!3dYourLatitude!4f13.5!3m2!1i1024!2i768!4f13.5!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE5JzUzLjMiTiAxMDLCsDQ2JzAyLjYiRQ!5e0!3m2!1sen!2sus!4v1628756103324!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe> */}
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    width="100%"
                    height="500" // Set the desired height here
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=753&amp;height=558&amp;hl=en&amp;q=University%20of%20Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/* End of Contact Form and Map */}
        </div>
      </div>
      {/* End of Contact Form */}

      <Footer />
    </>
  );
};

export default Contact;

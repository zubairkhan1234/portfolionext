"use client";
import Aos from "aos";
import React, { useEffect } from "react";
function Qualification() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="row container d-flex m-auto justify-space-between h-100 mb-5">

      <div
        // data-aos="flip-left"
        className="col-12 col-md-6 d-flex flex-column justify-content-start"
      >
        {/* <div>
          <span className="section-tag">Qualification</span>
        </div> */}
        <h1 className="font-32 font-Playfair mt-3 mb-5">My Education</h1>
        <div
          data-aos="fade-up"
          className="edu-experi-item animate-element delay5 fadeInUp"
        >
          <span className="years col-2 red-text fw-medium">2010-2014</span>
          <div className="vacancy-content">
            <span className="title">Intermediate</span>
            <h4 className="subject">Commerce</h4>
            <h6 className="institution">
              From inter Board of Karachi, Pakistan
            </h6>
            {/* <p>
              Major in UI Design, UX Design, Interaction Design, User Empathy,
              Branding.
            </p> */}
          </div>
        </div>
        <div
          data-aos="fade-up"
          // data-aos-delay="100"
          className="edu-experi-item animate-element delay5 fadeInUp"
        >

          <span className="years col-2 red-text fw-medium">2010-2014</span>
          <div className="vacancy-content">
            <span className="title">B.com</span>
            <h4 className="subject">Bachelor in Commerce</h4>
            <h6 className="institution">
              Bachaular in Commerce from University of Karachi Pakistan
            </h6>
            {/* <p>
              Major in UI Design, UX Design, Interaction Design, User Empathy,
              Branding.
            </p> */}
          </div>
        </div>
      </div>
      <div
        // data-aos="flip-left"
        className="col-12 col-md-6 d-flex flex-column justify-content-start"
      >
        {/* <div>
          <span className="section-tag">Experience</span>
        </div> */}
        <h1 className="font-32 font-Playfair mt-3 mb-5">My Experience</h1>
        <div
          data-aos="fade-up"
          className="edu-experi-item animate-element delay5 fadeInUp"
        >
          <span className="years col-2 red-text fw-medium">2010-2014</span>
          <div className="vacancy-content">
            <span className="title">BSC</span>
            <h4 className="subject">Computer Science</h4>
            <h6 className="institution">South University Of Bangladesh</h6>
            <p>
              Major in UI Design, UX Design, Interaction Design, User Empathy,
              Branding.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          // data-aos-delay="100"
          className="edu-experi-item animate-element delay5 fadeInUp"
        >
          <span className="years col-2 red-text fw-medium">2010-2014</span>
          <div className="vacancy-content">
            <span className="title">BSC</span>
            <h4 className="subject">Computer Science</h4>
            <h6 className="institution">South University Of Bangladesh</h6>
            <p>
              Major in UI Design, UX Design, Interaction Design, User Empathy,
              Branding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification;

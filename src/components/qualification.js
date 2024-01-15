import React from "react";
function Qualification() {
  return (
    <div className="row container d-flex m-auto justify-space-between h-100">
      <div
        // data-aos="flip-left"
        className="col-12 col-md-6 d-flex flex-column justify-content-center"
      >
        <h1 className="font-32 font-Playfair">My Education</h1>
        <div class="edu-experi-item animate-element delay5 fadeInUp">
          <span class="years">2010-2014</span>
          <div class="vacancy-content">
            <span class="title">BSC</span>
            <h4 class="subject">Computer Science</h4>
            <h6 class="institution">South University Of Bangladesh</h6>
            <p>
              Major in UI Design, UX Design, Interaction Design, User Empathy,
              Branding.
            </p>
          </div>
        </div>
      </div>
      <div
        // data-aos="flip-left"
        className="col-12 col-md-6 d-flex flex-column justify-content-center"
      >
        <h1 className="font-32 font-Playfair">My Education</h1>
      </div>
    </div>
  );
}

export default Qualification;

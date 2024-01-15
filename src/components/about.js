"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import ProfileImage from "./../assets/containerImages/home-dark.png";
import { FaDownload } from "react-icons/fa6";
import ProgressBar from "@ramonak/react-progress-bar";
import Aos from "aos";
export default function AboutComp() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="row container flex-md-row flex-column-reverse h-100 m-auto  d-flex justify-space-between">
      <div
        data-aos="fade-up-right"
        data-aos-delay="100"
        className="col-12  col-md-6  d-flex justify-content-end"
      >
        <Image
          src={ProfileImage}
          width={"100%"}
          className="bdr-100 w-100 object-fit-contain image-flip"
          alt="Profile Image"
        />
      </div>
      {/* </motion.div> */}
      <div
        data-aos-delay="100"
        data-aos="fade-up-left"
        className="col-12  col-md-6 d-flex flex-column justify-content-center"
      >
        <h1>HI</h1>
        <h1 className="font-32">
          {" "}
          It's <span className="red-text">Muhammad Zubair</span>{" "}
        </h1>

        <p className="font-18 color-white ">
          Currently working for
          <span className="red-text"> web</span> developement
          <span className="red-text"> Mobile app</span> developement
          <span className="red-text"> Backend</span> development
        </p>
        <p className="font-18 color-gray">
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className="red-text">adipisicing elit.</span> Asperiores,
          officiis nemo harum consequuntur ea, sequi nisi quas consectetur eius
          veritatis, assumenda quam placeat rerum maxime ut quidem incidunt
          quae.
          <span className="red-text"> Voluptas.</span>
        </p>
        <a className="red-btn about-btn col-12 col-md-5  justify-content-between">
          Connect on LinkedIn
          <FaDownload />
        </a>
      </div>
    </div>
  );
}

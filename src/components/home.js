"use client";
import Image from "next/image";
import React, { useEffect } from "react";
// import { FaDownload } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import {
  FaLongArrowAltRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

export default function HomeComp() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="row container d-flex m-auto justify-space-between h-100 mb-5">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="col-12 col-md-6 d-flex flex-column justify-content-center">
        {/* <div>
          <span className="section-tag">Home</span>
        </div> */}
        <h1 className="font-68 font-Playfair mt-3">HI</h1>
        <h1 className="font-68  font-Playfair">
          {" "}
          It's <span className="red-text">Muhammad Zubair</span>
        </h1>
        {/* 
                <p>
                    <span> Currently working for </span>
                    <span> web developement </span>
                    <span> Mobile app developement </span>
                    <span> Backend developement </span>
                </p> */}
        <Typewriter
          options={{
            strings: [
              "Currently working for",
              "web developement",
              "Mobile app developement",
              "Backend  developement",
            ],
            autoStart: true,
            loop: true,
            delay: 90,
            skipAddStyles: false,
            cursorClassName: "font-32 font-poppins",
            wrapperClassName: "font-32 font-poppins"
          }}
        />
        <p className="font-18 color-gray">
          Hey are looking for designer to build your{" "}
          <span className="red-text">Brand and gorw your business ?</span> let's
          shake hands with me.
        </p>
        {/* <FaDownload /> */}
        <a className="red-btn col-12 col-md-5  justify-content-between">
          Get in Touch <FaLongArrowAltRight />
        </a>
        <ul className="p-0 d-flex col-3 justify-content-between mt-5">
          <li className="list-style-none">
            <FaFacebookF className="color-gray red-hover" />
          </li>
          <li className="list-style-none">
            <FaInstagram className="color-gray red-hover" />
          </li>
          <li className="list-style-none">
            <FaTwitter className="color-gray red-hover" />
          </li>
        </ul>
      </div>
      <div data-aos="fade-up"
        data-aos-duration="1000" className="col-12 col-md-6 d-flex justify-content-end align-items-center">
        <Image
          src='/images/containerImages/home.png'
          width={1024}
          height={1024}
          className="section-image"
          alt="Profile Image"

        />
      </div>
      {/* </motion.div> */}
    </div>
  );
}

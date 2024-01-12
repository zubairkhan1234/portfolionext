"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import ProfileImage from "../../assets/containerImages/home-dark.png";
// import { FaDownload } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
// import { motion } from "framer-motion";
import {
  FaLongArrowAltRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function HomeComp() {
  useEffect(() => {
    Aos.init();
  }, []);

  //   const introPictureVariants = {
  //     hide: {
  //       opacity: 0,
  //       x: 500,
  //     },
  //     show: {
  //       opacity: 1,
  //       x: 0,
  //       transition: {
  //         duration: 1,
  //       },
  //     },
  //   };
  return (
    <div className="row container d-flex m-auto justify-space-between h-100">
      <div data-aos="flip-left" className="col-12 col-md-6 d-flex flex-column justify-content-center">
        <h1 className="font-32 font-Playfair">HI</h1>
        <h1 className="font-32">
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
      <div className="col-12 col-md-6 d-flex justify-content-end">
        {/* <motion.div
          className="absolute right-0 -bottom-12 w-full sm:w-4/5 md:-bottom-36 md:w-[950px]"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introPictureVariants}
        > */}
        <Image
          src={ProfileImage}
          width={"100%"}
          className="bdr-100 w-100 object-fit-contain"
          alt="Profile Image"
        />
        {/* </motion.div> */}
      </div>
    </div>
  );
}

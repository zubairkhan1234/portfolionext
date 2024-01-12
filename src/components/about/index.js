"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import ProfileImage from "../../assets/containerImages/home-dark.png";
import { FaDownload } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import Aos from "aos";
export default function AboutComp() {
  //   useEffect(() => {
  //     Aos.init();
  //   }, []);
  //   const introPictureVariants = {
  //     hide: {
  //       opacity: 0,
  //       x: -500,
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
    <div className="row container flex-md-row flex-column-reverse h-100 m-auto  d-flex justify-space-between">
      {/* <motion.div
        className="absolute right-0 -bottom-12 w-full sm:w-4/5 md:-bottom-36 md:w-[950px]"
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introPictureVariants}
      > */}
      <div className="col-12  col-md-6  d-flex justify-content-end">
        <Image
          src={ProfileImage}
          width={"100%"}
          className="bdr-100 w-100 object-fit-contain image-flip"
          alt="Profile Image"
        />
      </div>
      {/* </motion.div> */}
      <div className="col-12  col-md-6 d-flex flex-column justify-content-center">
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

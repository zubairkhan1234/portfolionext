"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import ProfileImage from "../../assets/containerImages/services-dark.png";
import { GoBrowser } from "react-icons/go";
import { BsDatabase } from "react-icons/bs";
import { PiDeviceMobileLight } from "react-icons/pi";
import { GrServerCluster } from "react-icons/gr";
import Aos from "aos";
import "aos/dist/aos.css";
// import ProgressBar from "@ramonak/react-progress-bar";
export default function SkillsSectionComp() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="row container d-flex m-auto justify-space-between h-100">
      <div className="row flex-md-row flex-column-reverse container d-flex  justify-space-between">
        <div className="col-12  col-md-6 d-flex justify-content-end">
          <Image
            src={ProfileImage}
            width={"100%"}
            className="bdr-100 w-100 object-fit-contain image-flip"
            alt="Profile Image"
          />
        </div>
        <div data-aos="flip-left" className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <div>
            <h1 className="font-32">
              As A Designer I Am Good At Fit With Few{" "}
              <span className="red-text">Skills.</span>
            </h1>
            <p className="color-gray">
              All desigener have good skills to make sure satisfied their
              clints, As a designer I am also specialised few{" "}
              <span className="red-text">skills.</span>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="col-5">
              <div className="d-flex col-12 my-3 align-items-center">
                <div className="serviece-icon-circle">
                  <GoBrowser />
                </div>
                <div className="serviece-text-box">
                  <p className="color-white m-0">FrontEnd</p>
                </div>
              </div>
              <div className="d-flex col-12 my-3 align-items-center">
                <div className="serviece-icon-circle">
                  <BsDatabase />
                </div>
                <div className="serviece-text-box">
                  <p className="color-white m-0">BackEnd</p>
                </div>
              </div>
            </div>
            <div className="col-7">
              {/* <ProgressBar completed={60} animateOnRender={false} /> */}

              <div className="d-flex col-12 my-3 align-items-center">
                <div className="serviece-icon-circle">
                  <PiDeviceMobileLight />
                </div>
                <div className="serviece-text-box">
                  <p className="color-white m-0">Mobile App Development</p>
                </div>
              </div>
              <div className="d-flex col-12 my-3 align-items-center">
                <div className="serviece-icon-circle">
                  <GrServerCluster />
                </div>
                <div className="serviece-text-box">
                  <p className="color-white m-0">Deployement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

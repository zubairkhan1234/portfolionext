"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { GoBrowser } from "react-icons/go";
import { BsDatabase } from "react-icons/bs";
import { PiDeviceMobileLight } from "react-icons/pi";
import { GrServerCluster } from "react-icons/gr";
import Aos from "aos";
// import ProgressBar from "@ramonak/react-progress-bar";
export default function SkillsSectionComp() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="row container d-flex m-auto justify-space-between h-100">
      <div className="row p-0 d-flex justify-space-between">
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          className="col-6 d-flex justify-content-start align-items-center">
          <Image
            src='/images/containerImages/skills.png'
            width={1024}
            height={1024}
            className=" image-flip "
            alt="Profile Image"
            style={{ width: '400px', height: '400px', }}
          />
        </div>
        <div data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          className="col-6 d-flex flex-column justify-content-center">
          <div>
            <h1>
              As A Designer I Am Good At Fit With Few{" "}
              <span className="red-text">Skills.</span>
            </h1>
            <p className="color-gray">
              All developer have good skills to make sure satisfied their
              clints, As a developer I am also specialised few{" "}
              <span className="red-text">skills.</span>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="col-5">
              <div className="d-flex col-12 my-3 align-items-center">
                <div className="serviece-icon-circle skill-icon-circle-color">
                  <GoBrowser />
                </div>
                <div className="serviece-text-box">
                  <p className="color-white m-0">FrontEnd</p>
                </div>
              </div>
              <div className="d-flex col-12 my-3 align-items-center">
                <div className="serviece-icon-circle skill-icon-circle-color">
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
                <div className="serviece-icon-circle skill-icon-circle-color">
                  <PiDeviceMobileLight />
                </div>
                <div className="serviece-text-box">
                  <p className="color-white m-0">Mobile App Development</p>
                </div>
              </div>
              <div className="d-flex col-12 my-3 align-items-center">
                <div className="serviece-icon-circle skill-icon-circle-color">
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

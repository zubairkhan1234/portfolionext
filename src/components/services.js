import Image from "next/image";
import React from "react";
import ProfileImage from "./../assets/containerImages/services-dark.png";
import { GoBrowser } from "react-icons/go";
import { BsDatabase } from "react-icons/bs";
import { PiDeviceMobileLight } from "react-icons/pi";
import { GrServerCluster } from "react-icons/gr";

export default function ServicesComp() {
  return (
    <div className="row container d-flex m-auto justify-space-between h-100">
      <div className="row  d-flex p-0  justify-space-between">
        <div className="col-12  col-md-6 d-flex flex-column justify-content-center">
          <div>
            <h1 className="font-32">
              What Services I Provde{" "}
              <span className="red-text"> To My Clients</span> In Here.
            </h1>
            <p className="color-gray">
              I always want to be able to meet the goals of my clients, I value
              my services as a designer through my work.{" "}
              <span className="red-text"> You may like my services.</span>
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
        <div className="col-12  col-md-6 d-flex justify-content-end">
          <Image
            src={ProfileImage}
            width={"100%"}
            className="bdr-100 w-100 object-fit-contain"
            alt="Profile Image"
          />
        </div>
      </div>
    </div>
  );
}

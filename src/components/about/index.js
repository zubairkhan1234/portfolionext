import Image from "next/image";
import React from "react";
import ProfileImage from '../../assets/containerImages/home-dark.png';
import { FaDownload } from "react-icons/fa6";

export default function AboutComp() {
    return (
        <div className="row container h-100 d-flex justify-space-between">
            <div className="col-6 d-flex justify-content-end">
                <Image src={ProfileImage} width={'100%'} className="bdr-100" alt="Profile Image" />
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
                <h1>HI</h1>
                <h1> It's Muhammad Zubair </h1>

                <p>
                    <span> Currently working for </span>
                    <span> web developement </span>
                    <span> Mobile app developement </span>
                    <span> Backend developement </span>
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officiis nemo harum consequuntur ea,
                    sequi nisi quas consectetur eius veritatis, assumenda quam placeat rerum maxime ut quidem incidunt quae.
                    Voluptas.
                </p>
                <FaDownload />
                <button>Get in Touch</button>
            </div>


        </div>
    )
}
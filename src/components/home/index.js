'use client'
import Image from "next/image";
import React from "react";
import '../../style/homeStyle.css'
import ProfileImage from '../../assets/containerImages/home-dark.png';
// import { FaDownload } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';
import { FaLongArrowAltRight, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";



export default function HomeComp() {
    return (
        <div className="row container d-flex m-auto justify-space-between h-100">
            <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
                <h1 className="font-32">HI</h1>
                <h1 className="font-32"> It's Muhammad Zubair </h1>
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
                            'Currently working for',
                            'web developement',
                            'Mobile app developement',
                            'Backend  developement'
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 90,
                        skipAddStyles: false,

                    }}
                />
                <p className="font-18 color-gray">
                    Hey are looking for designer to build your <span className="red-text">Brand and gorw your business ?</span> let's shake hands with me.
                </p>
                {/* <FaDownload /> */}
                <a className="red-btn col-12 col-md-5  justify-content-between">Get in Touch <FaLongArrowAltRight /></a>
                <ul className="p-0 d-flex col-12 col-md-3 justify-content-between mt-5">
                    <li className="list-style-none">
                        <FaFacebookF className="color-gray" />
                    </li>
                    <li className="list-style-none">
                        <FaInstagram className="color-gray" />
                    </li>
                    <li className="list-style-none">
                        <FaTwitter className="color-gray" />
                    </li>
                </ul>
            </div>
            <div className="col-12 col-md-7 d-flex justify-content-end">
                <Image src={ProfileImage} width={'100%'} className="bdr-100" alt="Profile Image" />
            </div>
        </div>
    )
}
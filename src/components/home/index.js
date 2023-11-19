import Image from "next/image";
import React from "react";
import ProfileImage from '../../assets/images/tutorial4you.jpg';
import { FaDownload } from "react-icons/fa6";

export default function HomeComp() {
    return (
        <div className="row container d-flex justify-space-between">
            <div className="col-6">
                <h1>Muhammad <FaDownload /> </h1>
                <h1>Zubair</h1>
                <p>
                    <span>Currently working for</span>
                    <span>web developement</span>
                    <span>Mobile app developement</span>
                    <span>Backend developement</span>
                </p>
                <button>Get in Touch</button>
            </div>
            <div className="col-6 d-flex justify-content-center">
                <Image src={ProfileImage} width={300} height={300} className="bdr-100" alt="Profile Image" />
            </div>
        </div>
    )
}
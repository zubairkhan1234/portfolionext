import Image from "next/image";
import React from "react";
import ProfileImage from '../../assets/containerImages/services-dark.png';
import { FaDownload } from "react-icons/fa6";

export default function ServicesComp() {
    return (
        <div className="row container d-flex justify-space-between">

            <div className="col-6 d-flex flex-column justify-content-center">
                <div>

                    <h1>What Services I Provde To My Clients In Here.</h1>
                    <p>
                        I always want to be able to meet the goals of my clients, I value my services as a designer through my work. You may like my services.
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="col-6">

                        <div className="d-flex col-12">
                            <div>
                                <FaDownload />
                            </div>
                            <div>
                                <p>FrontEnd</p>
                            </div>
                        </div>
                        <div className="d-flex col-12">
                            <div>
                                <FaDownload />
                            </div>
                            <div>
                                <p>BackEnd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">

                        <div className="d-flex col-12">
                            <div>
                                <FaDownload />
                            </div>
                            <div>
                                <p>Mobile App Development</p>
                            </div>
                        </div>
                        <div className="d-flex col-12">
                            <div>
                                <FaDownload />
                            </div>
                            <div>
                                <p>Deployement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
                <Image src={ProfileImage} width={'100%'} className="bdr-100" alt="Profile Image" />
            </div>
        </div>
    )
}
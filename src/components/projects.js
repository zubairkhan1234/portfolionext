'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import { GoBrowser } from "react-icons/go";
import { BsDatabase } from "react-icons/bs";
import { PiDeviceMobileLight } from "react-icons/pi";
import { GrServerCluster } from "react-icons/gr";
import Aos from "aos";

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
// import WithStyles from ''
import ProjectData from "../json/projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
    useEffect(() => {
        Aos.init()
    }, [])

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
        arrows:false
    };

    return (
        <div className="row container d-flex m-auto justify-space-between h-100 mb-5 mt-4 mb-4">
            <div className="row  d-flex p-0  justify-space-between  mt-5 mb-5">
                <div data-aos="fade-right"
                    // data-aos-offset="300"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-sine"
                    className="col-12  col-md-6 d-flex flex-column justify-content-center">
                    <div>
                        <h1 className="font-32 mb-4">
                            Our Some Creative{" "}
                            <span className="red-text"> Works.</span>
                        </h1>
                        <p className="color-gray">
                            As a designer I have been working few years in this sector, and i have complted lot's of project
                            <span className="red-text"> see here All.</span>
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left"
                    // data-aos-offset="300"
                    data-aos-delay="200"
                    data-aos-easing="ease-in-sine"
                    className="col-12  col-md-6 d-flex flex-row justify-content-center">

                    <div className="col-6 row row align-items-center justify-content-center">
                        <div className="col-4 red-text font-32  fw-medium">
                            07
                        </div>
                        <div className="col-4  fw-medium">
                            years Experience
                        </div>
                    </div>
                    <div className="col-6 row align-items-center justify-content-center">
                        <div className="col-4 red-text font-32 fw-medium">
                            120+
                        </div>
                        <div className="col-4 fw-medium ">

                            Satisfied Clients
                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-4 mb-4 p-0">
                {/* <Carousel
                    // additionalTransfrom={0}
                    arrows={true}
                    autoPlaySpeed={3000}
                    centerMode={true}
                    className=""
                    containerClass="container-padding-bottom"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            // partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            // partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            // partialVisibilityGutter: 30
                        }
                    }}
                    // rewind={false}
                    // rewindWithAnimation={false}
                    // rtl={false}
                    // shouldResetAutoplay
                    showDots
                    // sliderClass=""
                    // slidesToSlide={1}
                    swipeable
                >

                    {ProjectData.projects.map((value, index) => {
                        return <div className="mb-5 d-flex rounded align-items-center">
                            <Image
                                src={value.image}
                                width={1024}
                                height={1024}
                                alt="Profile Image"
                                className="rounded-2"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    })}

                </Carousel> */}
                <Slider {...settings}>
                    {ProjectData.projects.map((value, index) => {
                        return <div key={index} className="mb-5 d-flex rounded align-items-center">
                            <Image
                                src={value.image}
                                width={1024}
                                height={1024}
                                alt="Profile Image"
                                className="rounded-2"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    })}

                </Slider>
            </div>
        </div >
    );
}




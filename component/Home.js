import React from 'react'
// import { ScrollTrigger }  from "gsap/ScrollTrigger";
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';


function HomeComp() {
    return (
        <section className='container'>
            <div className={`row flex-md-row-reverse justify-content-center text-center align-items-center h-100 ${styles.heade_container_child}`}>
                <div className='col-md-6'>
                    <Image src="/images/home/header.png" height={1400} width={1000} className={styles.headerImge} />
                </div>
                <div className='col-md-6 text-start' >

                    <h1 className='fs-2'>WELCOME TO MY PORTFOLIO</h1>
                    <h1>Hi, I’m Muhammad Zubair</h1>
                    <div style={{ display: 'flex' }}>
                        <span className='fs-1' style={{ marginRight: '5px' }}>A</span>
                        <Typewriter
                            options={{
                                strings: ['<span> Web App Developer. </span>', '<span> Mobile App Developer.</span>'],
                                autoStart: true,
                                delay: 20,
                                deleteSpeed: 20,
                                loop: true,
                            }}

                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeComp

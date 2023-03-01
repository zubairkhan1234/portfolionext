import React from 'react'
import {gsap} from "gsap";
// import { ScrollTrigger }  from "gsap/ScrollTrigger";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from '../styles/Home.module.css'
function HomeComp() {
    gsap.registerPlugin(ScrollTrigger);

    // target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second. 
    gsap.to(".green", { rotation: 360, x: 100, duration: 1 });

    // target the element with a class of "purple" - rotate and move FROM 100px to the left over the course of 1 second. 
    gsap.from(".purple", { rotation: -360, x: -100, duration: 1 });

    // target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second. 
    gsap.fromTo(".blue", { x: -100 }, { rotation: 360, x: 100, duration: 1 });

    return (
        <div className={styles.projectContainer}>
            <div className={styles.box}>
                <h1 className={styles.name}>Developer Name...</h1>
                <h1 className={styles.scope}>I build things for the web & mobile Apps</h1>
                <p className={styles.discription}>
                    I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building <span className={styles.primary_color}>Mobile Application</span>.
                </p>
                <div className="box green"></div>
                <div className="box purple"></div>
                <div className="box blue"></div>
                <div className={styles.lg_btn}>
                    <button>Check Out my Github Account</button>
                </div>
            </div>
        </div>
    )
}

export default HomeComp

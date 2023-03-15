import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import aboutImage from '/images/about.jpg'
function AboutComp() {
    return (
        <div className={styles.projectContainer}>
            <h1 className={styles.about_Heading}>About me  <div></div></h1>
            <div className={styles.aboutBox}>
                <div>
                    <p className={styles.discription}>
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p className={styles.discription}>
                        Fast-forward to today, and I’ve had the privilege of working at <span>an advertising agency, a start-up, a huge corporation,</span> and <span>a student-led design studio.</span> My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    </p>
                    <p className={styles.discription}>
                        I also recently <span>launched a course</span> that covers everything you need to build a web app with the Spotify API using Node & React.
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <div className={styles.skill_Items}>
                        <ul>
                            <li>
                                JavaScript (ES6+)
                            </li>
                            <li>
                                TypeScript
                            </li>
                            <li>
                                React
                            </li>
                        </ul>
                        <ul>
                            <li>
                                Eleventy
                            </li>
                            <li>
                                Node.js
                            </li>
                            <li>
                                WordPress
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.aboutSection}>
                    <Image src={aboutImage} />
                    <div className={styles.img_border}></div>
                </div>
            </div>

        </div>


    )
}

export default AboutComp
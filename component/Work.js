import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import aboutImage from '../public/images/work.png'
function WorkComp() {
    return (
        <div className={styles.projectContainer}>
            <h1 className={styles.work_Heading}>Some Things I’ve Built  <div></div></h1>
            <div className={styles.work_Box}>
                <div className={styles.work_Section}>
                    <Image src={aboutImage} unoptimized width={700} height={350} />
                </div>
                <div>
                    <h4 className={styles.work_discription}>
                        Featured Project
                    </h4>
                    <p className={styles.work_discription}>
                        Halcyon Theme
                    </p>
                    <p className={styles.work_discription}>
                        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <span>Visual Studio Marketplace, Package Control, Atom Package Manager,</span> and <span>npm</span>.
                    </p>
                    <ul>
                        <li>
                            VS Code
                        </li>
                        <li>
                            Sublime Text
                        </li>
                        <li>
                            Atom
                        </li>
                        <li>
                            iTerm2
                        </li>
                        <li>
                            Hyper
                        </li>
                    </ul>
                </div>
            </div>

        </div>


    )
}

export default WorkComp
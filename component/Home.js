import React from 'react'

import styles from '../styles/Home.module.css'
function HomeComp() {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.box}>
                <h1 className={styles.name}>Developer Name...</h1>
                <h1 className={styles.scope}>I build things for the web & mobile Apps</h1>
                <p className={styles.discription}>
                    I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building <span className={styles.primary_color}>Mobile Application</span>.
                </p>
                <div className={styles.lg_btn}>
                    <button>Check Out my Github Account</button>
                </div>
            </div>
        </div>
    )
}

export default HomeComp
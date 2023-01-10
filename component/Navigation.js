import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'



function Navigation() {
    return (
        <div className={styles.container_fluid}>
            <div className={`${styles.navigationContainer} ${styles.container}`}>
                <div>
                    <h1>Muhammad zubair</h1>
                </div>
                <div className={styles.navigationList} >

                    <ul>
                        <li>
                            <Link href={'#'}>About</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Experience</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Work</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Contact</Link>
                        </li>
                    </ul>
                    <div className={styles.sm_btn}>
                        <button>Resume</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navigation
import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navigation() {
    return (
        <div className={styles.navigation_container_fluid}>
            <div className={`${styles.navigationContainer} container d-flex justify-content-between`}>
                <div className={styles.navigation_logo_container}>
                    <span>{'< '}</span>
                    <span className={styles.navigation_logo}>Zubair</span>
                    <span>{' />'}</span>
                </div>
                <div>
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true"><i className="fa-brands fa-twitter"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true"><i className="fa-solid fa-bars"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
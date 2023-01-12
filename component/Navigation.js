import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Navigation() {
    return (
        // <div className={`${styles.navigationContainer} ${styles.container}`}>
        //     <div>
        //         {/* <h1>Muhammad zubair</h1> */}
        //         <h1>Logo Name</h1>
        //     </div>
        //     <div className={styles.navigationList} >
        //         <ul>
        //             <li>
        //                 <Link href={'#'}>About</Link>
        //             </li>
        //             <li>
        //                 <Link href={'#'}>Experience</Link>
        //             </li>
        //             <li>
        //                 <Link href={'#'}>Work</Link>
        //             </li>
        //             <li>
        //                 <Link href={'#'}>Contact</Link>
        //             </li>
        //         </ul>
        //         <div className={styles.sm_btn}>
        //             <button onClick={() => alert('we will add resume')}>Resume</button>
        //         </div>

        //     </div>
        // </div>


        <div class="card text-center">
            <div class="card-header">
                <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Navigation
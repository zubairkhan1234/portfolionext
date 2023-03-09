import React from 'react'
// import { ScrollTrigger }  from "gsap/ScrollTrigger";
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect';


function HomeComp() {
    return (
        <div className='container'>
            <p>WELCOME TO MY PORTFOLIO</p>
            <h1>hello</h1>
            {/* <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Hello World!')
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                }}
            /> */}
            <Typewriter
                options={{
                    strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}

export default HomeComp

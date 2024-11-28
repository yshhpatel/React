/* eslint-disable no-unused-vars */
import React from 'react';
import '../CSS/Hero.css';

export default function Home() {

    return (
        <div className="hero">
            <div className="hero-in">
                <div className="section-1">
                    <div className="name-hero">
                        <span className='span-yash'>YASH HIRPARA</span>
                    </div>
                    <h1>HEY! I&apos;M YASH</h1>
                    <span className='typing'>I&apos;M A DEVELOPER</span>

                    <p className='hero-p-1'>Passionate frontend developer, crafting responsive and visually appealing websites using HTML, CSS, JavaScript, and React for seamless user experiences.</p>

                    <div className="buttons">
                        <div className="frist-btn">
                            <button>GET IN TOUCH <i className="fa-solid fa-arrow-right-long"></i></button>
                        </div>
                        <div className="second-btn">
                            <div className="social">
                                <div className="medias" id='facebook'><i className="fa-brands fa-facebook-f"></i></div>
                                <div className="medias" id='instagram'><i className="fa-brands fa-instagram"></i></div>
                                <div className="medias" id='linkedin-in'><i className="fa-brands fa-linkedin-in"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 2 */}
                <div className="section-2">
                    {/* <img src="/boy.png" alt="check connection" />  */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDbB790HFMJbN29bu4-Fspr8JBUDOnlPs6Q&s" alt="check connection" />
                </div>
            </div>
        </div>
    );
}

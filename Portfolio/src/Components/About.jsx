// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import '../CSS/About.css'



export default function About() {



  return (
    <>
      <div className="about">
            <div className="about-in">
            <div className="main-about">
                <div className="photo">
                    <div className="main-photo"></div>
                </div>
                <div className="aboutUs">
                    <div className="detail">
                    <div className="name-about">
                        <span className='span-about'>ABOUT US</span>
                    </div>
                    <h2 className='about-h2-1'><span className='frontend'>FRONTEND PROJECTS </span> ARE MY ZONE - I&apos;M READY TO BUILD!</h2>
                    <p className='about-p-1'>I&apos;m a BCA student currently pursuing my degree with a focus on frontend development. I specialize in creating responsive and interactive web applications using technologies like HTML, CSS, JavaScript, and React. My passion lies in designing visually appealing user interfaces that enhance the overall user experience, and I&apos;m always eager to learn and improve my skills in web development.</p>


                  <div className="skills"> 
                    <div className="skill-box">
                      <h3>
                     {/* {isSkillVisible1 ? <CountUp start={1} end={7} duration={3} /> : '0'}+ */}
                     7+
                      </h3>
                      <label htmlFor="">Skills Mastered</label>
                    </div>
                    
                    <div className="skill-box">
                      <h3>
                      {/* {isSkillVisible2 ? <CountUp start={1} end={650} duration={3} /> : '0'}+ */}
                      650+
                     </h3>
                      <label htmlFor="">Learning Hours</label>
                    </div>
                    <div className="skill-box">
                      {/* <h3>{isSkillVisible3 ? <CountUp start={1} end={15} duration={3} /> : '0'}+</h3> */}
                      <h3>
                        15+
                      </h3>
                      <label htmlFor="">Projects Completed</label>
                    </div>
                  </div>

                  <button className='ab-btn'>GET IN TOUCH <i className="fa-solid fa-arrow-right-long"></i></button>

                    </div>
                </div>
            </div>
        </div>

      </div>
        
    </>
  )
}

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import '../CSS/Navbar.css'
import { Link } from 'react-scroll';

export default function Navbar() {
  
  const [show,setShow] = useState(false)

          const toggleSidebar = () => {
            setShow(!show)
          };

          const header = useRef(null)

  return (
    <>
      <header ref={header}>
        <nav>

          <div className="logo">
           <h1>YASH</h1>
          </div>
          <div className="nav-items"> 
            <ul>
             
             <li className='nav-li'><Link to="home" smooth={true} duration={500}>HOME</Link></li>
             <li className='nav-li'><Link to="about" smooth={true} duration={500}>ABOUT ME</Link></li>
             <li className='nav-li'><Link to="projects" smooth={true} duration={500}>PROJECTS</Link></li>
             <li className='nav-li'><Link to="contact" smooth={true} duration={500}>SERVICES</Link></li>
             <li className='nav-li'><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li>

            </ul>

            <button className='talk-btn'>
              LETS&apos; TALK
            </button>

            <div className="menu-bar" onClick={toggleSidebar}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </nav>
        
      </header>
      {show &&
      (<div className="side-bar">
          <ul>
            <li><Link href="" to="home" smooth={true} duration={500}>HOME</Link></li>
            <li><Link href="" to="about" smooth={true} duration={500}>ABOUT ME</Link></li>
            <li><Link href="" to="projects" smooth={true} duration={500}>PROJECTS</Link></li>
            <li><Link href="" to="contact" smooth={true} duration={500}>SERVICES</Link></li>
            <li><Link href="" to="contact" smooth={true} duration={500}>CONTACT</Link></li>
          </ul>
      </div>)}
      </>
  )
}

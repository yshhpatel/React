// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate} from 'react-router-dom'

export default function About() {
    const home = useNavigate()
    const contact = useNavigate()
    const handleHome = ()=>{
        home('/',{state:{name:"Hello World"}})
    }
    const handleContact =()=>{
        contact('/Contact')
    }

  return (
    <>
    <h1 style={{paddingLeft:"30px"}}>About</h1>
    <button style={{fontSize:"15px",marginLeft:"25px"}} onClick={handleHome}>Home</button>   
    <button style={{fontSize:"15px",marginLeft:"25px"}} onClick={handleContact}>Contact</button>   
    </>
  )
}
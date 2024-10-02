// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link,useParams } from 'react-router-dom'

export default function Contact() {
const param = useParams()
  return (
    <>
      <h1 style={{paddingLeft:"25px"}}>Contact</h1>
      <h1 style={{paddingLeft:"30px"}}>{param.id}</h1>
      <Link to={'/'} style={{ fontSize: "20px", paddingLeft: "25px" }}>Home</Link>
      <Link to={'/About'} style={{ fontSize: "20px", paddingLeft: "25px" }}>About</Link>
    </>
  )
}
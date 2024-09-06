// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export default function Event2() {
    const[name,setName]=useState("")
  return (
    <div>
        <h1>onChange Event</h1>
    <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
        <h1>{name}</h1>
    </div>
  )
}
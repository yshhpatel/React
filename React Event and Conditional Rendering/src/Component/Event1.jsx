// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
export default function Event1() {
  const[count,setCount]=useState(0)
  return (
    <div>
    <h1>onClick Event</h1>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count+1)
    }}>Click Me</button>
    </div>
  )
}
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
export default function Condition() {
const[visible,setvisible]=useState(false)
const[vis,setvis]=useState(true)
  return (
    <div>
        <h1>Condition1</h1>
        {
            visible ? <h1>Hello</h1> : <h1>World</h1>
        }
        <button onClick={()=>{
            setvisible(!visible)
        }}>Click</button>
        <h1>Condition2</h1>
        {
            vis && <h1>Hello</h1>
        }
        <button onClick={()=>{
            setvis(!vis)
        }}>Click2</button>
    </div>
  )
}
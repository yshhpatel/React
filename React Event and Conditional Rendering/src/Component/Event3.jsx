// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export default function Event3() {
    const [name,setName] = useState("")
    const [sub,setSub] = useState("")
    const handleSubmit = (event)=>{
        event.preventDefault()
        let obj ={
            name:name,
            subject:sub,
        }
        console.log(obj);
    }
  return (
    <div>
        <h1>onSubmit Event</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
            <br/><br/>
            <input type="text" placeholder='Enter Subject'  onChange={(e)=>setSub(e.target.value)}/>
            <br/><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
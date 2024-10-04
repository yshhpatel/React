import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({data , setData}) {
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [color , setColor] = useState("")


    const handleSubmit=()=>{
      let Obj = {id : data.length + 1, name : name , color : color};
      setData([...data,Obj])
      navigate("/")
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" onChange={(e)=>setColor(e.target.value)}/>

      <button onClick={handleSubmit}>Submit </button>
    </div>
  )
}

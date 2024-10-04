import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Delete({data , setData}) {
  const navigate = useNavigate()
  const [id , setId] = useState("")

  const handleDelete=()=>{
    let deleteData = data.filter((item)=> item.id != id)
    setData(deleteData)
    navigate("/")
  }
  return (
    <div>
      <input type="text" onChange={(e)=>setId(e.target.value)} />

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adddata , deletedata } from '../slice/Slice'


export default function Redux() {
    const [name , setName] = useState("")
    const [age , setAge] = useState("")

    const data = useSelector((state)=>{
        return state.datakey
    })
    const dispatch = useDispatch()

    const addrecord=()=>{
        dispatch(adddata({id: Date.now() , name : name, age : age}))
        // dispatch(adddata)
    }

    const deleterecord=(id)=>{
        dispatch(deletedata(id))
    }
  return (
    <>

    <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
    <input type="text" placeholder='age' onChange={(e)=>setAge(e.target.value)}/>
    <button onClick={addrecord}>addd</button>

    {data.student ? 
        data.student.map((e,i) => {
        return  <ul key={i}>
            <li>{e.id}</li>
            <li>{e.name}</li>
            <li>{e.age}</li>


            {/* <button onClick={editrecord}>Edit</button> */}
            <button onClick={() => deleterecord(e.id)}>delete</button>
          </ul>
})
       : "no record"
      }
    </>
  )
}

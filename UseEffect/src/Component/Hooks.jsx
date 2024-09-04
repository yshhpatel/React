import React, { useState } from 'react'

export default function Hooks() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Sahil')
    const increase=()=>{
        setCount(count+1)
    }
    const decrease=()=>{
        setCount(count-1)
    }
    const[arr,setArr]=useState([1,2,3,4,5])
    const[arrobj,setArrObj]=useState([{name:"Prince",subject:"node"},{name:"amit",subject:"react"}])
    const[obj,setObj]=useState({name:"prince",age:18})

  return (
    <div>

     <center>   <h1>Count:{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <h1>name:{name}</h1>
        <button onClick={()=>setName('prince satasiya')}>Change Name</button>
        {
            arr.map((item,index)=>{
                return <h1 key={index}>{item} <br /></h1>
            })

        }
        {
            arrobj.map((item,index)=>{
                return <ul key={index}><li>Name:{item.name} </li>
               <li> Subject:{item.subject}</li><br /></ul>

  
            })
        }
        <h4>Name:{obj.name} <br />
        Age:{obj.age}</h4>


    
     </center>
    </div>
  )
}
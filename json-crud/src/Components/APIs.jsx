import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

export default function Axios() {
    const[name,setName]= useState('')
    const[age,setAge]= useState('')
    const [data,setData] = useState('')
    const[index,setIndex] = useState(null)
    useEffect(()=>{
        fetchApi()
    })
    const fetchApi = async()=>{
      let res = await axios.get('http://localhost:5000/comments')
      setData(res.data)
    }
    const addData = async()=>{
      if(index == null){
      let addRes = await axios.post('http://localhost:5000/comments',{"id":String(data.length+1),"name":name , "age": Number(age)})
      if (addRes) {
        setData[{...data,addRes}]
        setName('')
        setAge('')
      }
      }else{
        const updateRec = await axios.put(`http://localhost:5000/comments/${index}`,{"name":name , "age" :Number(age)})
        if(updateRec){
          const updateData = data.find((item)=>{(item.id == index) ?{ ...item , "name" : updateData.data.name , "age": Number(updateData.data.age) }: item}) 
          setData(updateRec);
          setName('');
          setAge('');
          setIndex(null);
        }
      };
    }
    const handleDelete = async(id)=>{
      const delRec = await axios.delete(`http://localhost:5000/comments/${id}`)
        setData(data.filter(item => item.id !== id))
        setData(delRec)
    }
    const  handleEdit = async(id)=>{
      const editRec = await axios.get(`http://localhost:5000/comments/${id}`)
      if(editRec){
        setName(editRec.data.name)
        setAge(editRec.data.age)
        setIndex(id);
      }
    }
    return (
    <>
    <center> <br /><br />
    <h1>API-CRUD</h1><br /><br />
    <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name}/> <br /><br />
    <input type="number" placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} value={age}/> <br /><br />
    <button id='bt1' onClick={()=>addData()}>{index ? "Update Data" : "Add Data"}</button> <br /><br />
{
  data &&
  data.map((e, i) => {
    return (
      <ul key={i} className="item-list">
        <li id='l1'>{e.name}</li>
        <li id='l2'>{e.age}</li>
          <button id='bt2' onClick={()=>handleEdit(e.id)}>Edit</button>
          <button id='bt3' onClick={()=>handleDelete(e.id)}>Delete</button>
      </ul>
    );
  })
}
    </center>
    </>
  )
}
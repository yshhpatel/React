// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, DeleteData, UpdateData } from '../Configure/TaskSlice';
export default function TaskRedux() {
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[email,setEmail]=useState('')
    const[num,setNum]=useState('')
    const[task,setTask]=useState('')
    const[index,setIndex]=useState(null)
    const count1 = useSelector((state)=>{
        return state.taskKey
    });
    const dispatch = useDispatch();

    const handleAdd = () =>{
        if(index==null){
            dispatch(AddData({id:Date.now(),name,age,email,num,task}))
        }else{
            dispatch(UpdateData({id:index,name,age,email,num,task}))
            setIndex(null)
        }
        setName('')
        setAge('')
        setEmail('')
        setNum('')
        setTask('')
    }
    const HandleDelete = (id) => {
        dispatch(DeleteData(id));
    }
    const HandleEdit = (id) => {
    let singleData = count1.Taskmanager.find((item) => item.id == id)
    setIndex(id)
    setName(singleData.name)
    setAge(singleData.age)
    setEmail(singleData.email)
    setNum(singleData.num)
    setTask(singleData.task)
    }
    return (
    <>
      <center>
        <p id='h1'>Taskmanager</p>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name} /> <br /><br />
        <input type="text" placeholder='Enter Email' onChange={(e)=>setAge(e.target.value)} value={age} /> <br /><br />
        <input type="text" placeholder='Enter Age' onChange={(e)=>setEmail(e.target.value)} value={email} /> <br /><br />
        <input type="text" placeholder='Enter Number' onChange={(e)=>setNum(e.target.value)} value={num} /> <br /><br />
        <input type="text" placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} value={task} /> <br /><br />
        <button id='bt1' onClick={handleAdd} >{ index ?"Update Task":"Add Task"}</button> <br /><br />
        <table border={2} width={"86%"}>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Number</th>
                <th>Task</th>
                <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    count1?
                    count1.Taskmanager.map((e,i)=>{
                        return (<tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.email}</td>
                            <td>{e.num}</td>
                            <td>{e.task}</td>
                            <td>
                            <button id='bt2' onClick={()=>HandleDelete(e.id)}>Delete</button>
                            <button id='bt3' onClick={()=>HandleEdit(e.id)}>Edit</button>
                            </td>
                        </tr>)
                    }) : " "
                }
            </tbody>
        </table>
      </center>
    </>
  )
}
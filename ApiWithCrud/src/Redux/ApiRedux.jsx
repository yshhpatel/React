// eslint-disable-next-line no-unused-vars
import React, { useEffect }  from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { fetchapi } from '../Configure/ApiSlice'
// import { fetchapi } from '../../Configure/ApiSlice'

export default function ApiRedux() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchapi())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const record = useSelector((state)=>{
        return state.apiKey
    }) 
  return (
    <>
    <h1>ApiRedux</h1>   
    {
        record.data && 
        record.data.map((e,i)=>{
            return( <ul key={i}>
                <li>{e.title}</li>
                <li>₹ {e.price}</li>
            </ul>)
        })
    } 
    </>
  )
}
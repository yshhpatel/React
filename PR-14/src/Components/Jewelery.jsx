// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../../Features/CounterSlice'
import '../CSS/Style.css'
export default function Jewelery() {
    const dispatch = useDispatch()
    useEffect (()=>{
        dispatch(fetchApi())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const recordData = useSelector((state)=>{
        return state.pageKey
    })
  return (
    <>
    <nav className="navbar">
      <a href="/">All</a>
      <a href="/Men">Men&lsquo;s clothing</a>
      <a href="/Jewelery">Jewelery</a>
      <a href="/Electronic">Electronics</a>
      <a href="/Women">Women&lsquo;s clothing</a>
    </nav>
    <div className="record-container">
    {recordData.data && 
      recordData.data.map((e,i)=>{
        if(e.category ==="jewelery"){
            return <ul key={i} className='record-item'>
                {<img src={e.image} alt="" className='record-image' />}
                <li className='record-title'>{e.title}</li>
                <li className='record-category'>{e.category}</li>
                <li className='record-price'>₹ {e.price}</li>
            </ul>
        }
        })
    }
    </div>
    </>
  )
}

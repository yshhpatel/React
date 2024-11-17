import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebaseConfig'

export default function Dashborad() {


      const [user,setUser] = useState(null)

      useEffect(()=>{
        let sub = onAuthStateChanged(auth,(currentUser)=>{
          if(currentUser){
            setUser(currentUser)
            console.log(currentUser)
          }
        })
      },[])

      useEffect(()=>{
        if(user){
          fetchUser()
        }
      },[user])


      const fetchUser =()=>{-
        console.log(user)
      }
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const Login = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(user => {
        console.log("Logged in successfully")
        navigate("/Dashborad")
      })
  }

  return (
    <div>
      <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Password' onChange={(e) => setPass(e.target.value)} />
      <button onClick={Login}>Login</button>
      <Link to="/">Don't have an account? Sign Up</Link>
    </div>
  )
}

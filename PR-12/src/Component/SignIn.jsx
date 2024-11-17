
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const Login = () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(user => {
                console.log("Logged in successfully");
                navigate("/Dashboard");
            })
            .catch(error => {
                console.error("Error logging in:", error.message);
            });
    };

    return (
        <div className="signup-container">
            <h2 className="heading">Login</h2>
            <input type="email" placeholder='Email' className="input" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' className="input" onChange={(e) => setPass(e.target.value)} />
            <button onClick={Login} className="button"> Login </button>
            <Link to="/" className="link"> Don't have an account? Sign Up </Link>
        </div>
    );
}

import React, { useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';


export default function Create() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [Age, setAge] = useState("");
    const navigate = useNavigate();

    const handleCreate = () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(data => {
                return setDoc(doc(db, "users", data.user.uid), {
                    name, email, Age, 
                });
            })
            .then(() => {
                console.log("Account created successfully");
                navigate("/dashboard");
            });
    };

    return (
        <div className="signIn-container">
            <h2 className="heading">Create an Account</h2>

            <input type="text" placeholder='Name' className="input" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Email' className="input" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Age' className="input" onChange={(e) => setAge(e.target.value)} />
            <input type="password" placeholder='Password' className="input" onChange={(e) => setPass(e.target.value)} />

            <button onClick={handleCreate} className="button">Create Account</button>

            <Link to="/Login" className="link"> You have an account? Go to Sign In </Link>
        </div>
    );
}

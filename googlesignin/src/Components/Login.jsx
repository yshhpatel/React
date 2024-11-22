/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import { useNavigate } from 'react-router';
import { UserData } from '../Context/User';

export default function Login() {
  const { setUser } = useContext(UserData); 
  const navigate = useNavigate();

  const handleLogin = async () => {
    
      const result = await signInWithPopup(auth, provider);
      const userInfo = result.user;

      setUser({
        name: userInfo.displayName,
      });

      navigate('/dashboard');
    

  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>

      <div className="input-group">
        <input type="email" placeholder="Email" required />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Password" required />
      </div>
      <button className="signup-btn">Sign Up</button>
      <div className="google-signin" onClick={handleLogin}>
        <img src="/public/google.svg" alt="Google Icon" />
        <span>Sign in with Google</span>
      </div>
      <div className="footer">
        Already have an account? <a href="#">Sign In</a>
      </div>
    </div>
  );
}

import React, { useState  } from "react";
import {  useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate =useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login Success')
    navigate('/home')
  };
  const navg=()=>{
    navigate('/register')
  }

  return (
    <div className="main-con">
      <div className="login-con">
      <h2 >Login</h2>
      <form className="form-log" onSubmit={handleSubmit}>

      <input type="text" placeholder="username" required></input>
      <input type="text" placeholder="password" required></input>

        <button type="submit">Login</button>
      </form>
      <p>new User? Do  <button onClick={navg} className="log">Register</button></p>
      </div>
    </div>
  );
};

export default Login;

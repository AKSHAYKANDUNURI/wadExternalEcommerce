import React from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Success');
    navigate('/');
  };

  return (
    <div className="mainlog">
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone" required />
        <input type="text" name="address" placeholder="Address" required />
        <input type="text" name="city" placeholder="City" required />
        <input type="text" name="state" placeholder="State" required />
        <input type="text" name="zip" placeholder="Zip Code" required />
        <input type="text" name="country" placeholder="Country" required />
        <input type="date" name="dob" placeholder="Date of Birth" required />
        <button type="submit">Register</button>
      </form>
    </div></div>
  );
};

export default Register;

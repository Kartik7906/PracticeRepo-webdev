import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="centerkro">
    <div className="signup-container">
      <h1>Signup</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" placeholder="Confirm your password" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;

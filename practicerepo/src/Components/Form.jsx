import React from 'react';
import './Form.css'; 


const Form = () => {
  return (
    <div className="centermaikro">
    <div className='formconatiner'>
      <h1>Login</h1>
      <form action="">
        <label htmlFor="username">UserName:</label>
        <input type="text" id="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Form;

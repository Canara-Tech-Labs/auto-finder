<<<<<<< HEAD
import React from 'react'
import './Password.css'
import { Link } from 'react-router-dom'

export default function Password() {
  return (
    <div>
      <div className='box'>
        
      
      
      <div className='text'>
        Create New Password
      </div>

      <div className='New Password'>
          <input type="text" placeholder='New Password' className='new' /></div>

          <div className='Confirm Password'>
          <input type="text" placeholder='Confirm Password' className='confirm' /></div>

          <Link to="/login-page"><button className='sign'>Submit</button></Link>
          </div>
    </div>
  )
}
=======
import React, { useState } from 'react';
import './Password.css';
import { Link } from 'react-router-dom';

function Password() {

  const [input, setInput] = useState({
    
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
   
    password: '',
    confirmPassword: ''
  })


  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
  
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
  
      switch (name) {
       
  
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
  
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
  
        default:
          break;
      }
  
      return stateObj;
    });
  }

  return (
    <div className="app">
      
      <form>
        <div className='password'>
        <input
          type="password"
          name="password"
          placeholder='Enter Password'
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.password && <span className='err'>{error.password}</span>}
        </div>

        <div className='confirmpwd'>
        <input
          type="password"
          name="confirmPassword"
          placeholder='Enter Confirm Password'
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
        </div>

       <Link to= "/otp-page"><button>Submit</button></Link> 
      </form>
    </div>
  );
}

export default Password;
>>>>>>> c89ee948fbbdf9775b95a5637b384e26219d5eff

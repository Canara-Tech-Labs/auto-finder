import React from 'react'
import './Loginexample.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Loginexample = () => {
  const[input, setInput] = useState({
    email:'',
    phonenumber:'',
    password:'',

  });

  const[error, setError] = useState({
    email:'',
    phonenumber:'',
    password:'',
  });

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
       
  
        case "email":
          if (!value) {
            stateObj[name] = "Please enter email.";
          } else if (input.email && value !== input.email) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          }
          //  else {
          //   stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          // }
          break;
  
        case "phonenumber":
          if (!value) {
            stateObj[name] = "Please enter Phone number.";
          } 
          // else if (input.password && value !== input.password) {
          //   stateObj[name] = "Password and Confirm Password does not match.";
          // }
          break;

          case "password":
            if (!value) {
              stateObj[name] = "Please enter password.";
            } 
            // else if (input.password && value !== input.password) {
            //   stateObj[name] = "Password and Confirm Password does not match.";
            // }
            break;
  
        default:
          break;
      }
  
      return stateObj;
    });


  }
    return (
      
        <div>

          <div className='cover'>


            <div className='login-cover'>

              <div className='login'>
                <h1>Login</h1></div>
              {/* <div className='email'>

                <input type="text" name='email' placeholder='Email' className='mail'  value={input.email} onChange={onInputChange} onBlur={validateInput}></input>
                {error.email && <span className='err'>{error.email}</span>}
               
              </div> */}

              <div className='phone'>
                <input type="Phone Number" name='phonenumber' placeholder='Phone Number' className='phone1' value={input.phonenumber} onChange={onInputChange} onBlur={validateInput}></input>
                {error.phonenumber && <span className='err'>{error.phonenumber}</span>}
              </div>

              <div className='password'>
                <input type="password" name='password' placeholder='Password' className='password1' value={input.password} onChange={onInputChange} onBlur={validateInput}></input>
                {error.password && <span className='err'>{error.password}</span>}
              </div>

              <Link to="/forgot-password-page"><div className='forgot'> Forgot Username/Password</div></Link>


              <Link to="/otp-page"> <button className='log1'>Login</button></Link>

              <div className='signup'>
                <div className='text-1'>
                  Don't have an account?
                </div>
                <Link to='/registration-page'> <button className='sign'>Signup</button></Link>
              </div>


            </div>

          </div>

        </div>
       
      )
}
    
export default Loginexample

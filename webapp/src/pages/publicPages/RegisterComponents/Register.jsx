import React from 'react'
import './Register1.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register () {

  const [input, setInput] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpassword:''

  });

  const [error, setError] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpassword:''
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

      case "firstname":
        if (!value) {
          stateObj[name] = "Please enter First name.";
        } else if (input.firstname && value !== input.firstname) {
          stateObj["lastname"] = "Password and Confirm Password does not match.";
        } else {
          stateObj["lastname"] = input.lastname ? "" : error.lastname;
        }
        break;

      case "lastname":
        if (!value) {
          stateObj[name] = "Please enter Last name.";
        } else if (input.password && value !== input.password) {
          stateObj[name] = "Password and Confirm Password does not match.";
        }
        break;

        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

          case "password":
            if (!value) {
              stateObj[name] = "Please enter Password.";
            } else if (input.password && value !== input.password) {
              stateObj[name] = "Password and Confirm Password does not match.";
            }
            break;


            case "confirmpassword":
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
  <form>
    <div className='register'>
      <div className='form'>
        <div className='text'>
            <div className='text1'>REGISTRATION</div>
            <div className='text2'>Enter your personal data</div>
      
        </div>

        <div className='name'>
            First Name
        <input 
        type="text" 
        name='firstname'
        placeholder='First Name' 
        className='name1' 
        value={input.firstname} 
        onChange={onInputChange} 
        onBlur={validateInput}></input>
        {error.firstname && <span className='err'>{error.firstname}</span>}
        </div>

        <div className='name-1'>
            Last Name
        <input 
        type="text" 
        name='lastname'
        placeholder='Last Name'
        className='name2' 
        value={input.lastname} 
        onChange={onInputChange} 
        onBlur={validateInput}></input>
        {error.lastname && <span className='err'>{error.lastname}</span>}

        </div>

        <div className='email'>
            Email
        <input type="text" 
        name='email'
        placeholder='Email'
        className='email1' 
        value={input.email} 
        onChange={onInputChange} 
        onBlur={validateInput}></input>
         {error.email && <span className='err'>{error.email}</span>}

        </div>

        <div className='password'>
            Password
        <input type="text" 
        name='password'
        placeholder='Password'
        className='password1' 
        value={input.password} 
        onChange={onInputChange} 
        onBlur={validateInput}></input>
        {error.password && <span className='err'>{error.password}</span>}
        

        </div>

        <div className='confirm-password'>
            Confirm Password
        <input type="text"
        name='confirmpassword'
         placeholder='Confirm Password'
         className='confirm'
         value={input.confirmpassword} 
        onChange={onInputChange} 
        onBlur={validateInput}></input>
         {error.confirmpassword && <span className='err'>{error.confirmpassword}</span>}
        </div>

        <div className='submit'>
          <Link to={"/login-page"} > <button className='sub'>Submit</button></Link>
        </div>
        

      </div>
    </div>
    </form>
  )
}

export default Register

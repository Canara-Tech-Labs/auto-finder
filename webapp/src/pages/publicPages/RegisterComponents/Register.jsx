import React from 'react'
import './Register1.css';
import { useState } from 'react';
<<<<<<< HEAD

const Register = () => {

  const[Firstname, setFirstname] = useState('');
  const[Lastname, setLastname] = useState('');
  const[Email, setEmail] = useState('');
  const[Password, setPassword] = useState('');
  const[errors, setErrors]= useState({});

  const handleSubmit=(e) =>{
    e.preventDefault();

    setErrors({});

    let isValid=true;
    const newErrors={};

    if (Firstname.trim() == ''){
      newErrors.Firstname = 'First Name is required';
      isValid=false;
    }

    if (Lastname.trim() == ''){
      newErrors.Lastname = 'Last Name is required';
      isValid=false;
    }

    if (Email.trim() == ''){
      newErrors.Email = 'Email is required';
      isValid=false;
    }

    if (Password.trim() == ''){
      newErrors.Password = 'Password is required';
      isValid=false;
    }

    if (!isValid){
      setErrors(newErrors);
      return;
    }

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');

  }


  return (
    <form onSubmit={handleSubmit}>
    <div>
=======
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
>>>>>>> c89ee948fbbdf9775b95a5637b384e26219d5eff
      <div className='form'>
        <div className='text'>
            <div className='text1'>Welcome to the Autoservice</div>
            <div className='text2'>Let's get your all set up, so you can being tomake your first service</div>
      
        </div>

        <div className='name'>
            First Name
<<<<<<< HEAD
        <input type="text" placeholder='First Name'className='name1' onChange={(e)=> setFirstname(e.target.value)}/>
        {errors.Firstname && <div className='error' style={{ color: 'red' }}>{errors.Firstname}</div>}
=======
        <input 
        type="text" 
        name='firstname'
        placeholder='First Name' 
        className='name1' 
        value={input.firstname} 
        onChange={onInputChange} 
        onBlur={validateInput}></input>
        {error.firstname && <span className='err'>{error.firstname}</span>}
>>>>>>> c89ee948fbbdf9775b95a5637b384e26219d5eff
        </div>

        <div className='name-1'>
            Last Name
<<<<<<< HEAD
        <input type="text" placeholder='Last Name'className='name2' onChange={(e)=> setLastname(e.target.value)}/>
        {errors.Lastname && <div className='error'  style={{ color: 'red' }}>{errors.Lastname}</div>}
=======
        <input 
        type="text" 
        name='lastname'
        placeholder='Last Name'
        className='name2' 
        value={input.lastname} 
        onChange={onInputChange} 
        onBlur={validateInput}></input>
        {error.lastname && <span className='err'>{error.lastname}</span>}

>>>>>>> c89ee948fbbdf9775b95a5637b384e26219d5eff
        </div>

        <div className='email'>
            Email
<<<<<<< HEAD
        <input type="text" placeholder='Email'className='email1'  onChange={(e)=> setEmail(e.target.value)}/>
        {errors.Email && <div className='error' style={{ color: 'red' }}>{errors.Email}</div>}
=======
        <input type="text" 
        name='email'
        placeholder='Email'
        className='email1' 
        value={input.email} 
        onChange={onInputChange} 
        onBlur={validateInput}></input>
         {error.email && <span className='err'>{error.email}</span>}

>>>>>>> c89ee948fbbdf9775b95a5637b384e26219d5eff
        </div>

        <div className='password'>
            Password
<<<<<<< HEAD
        <input type="text" placeholder='Password'className='password1'  onChange={(e)=> setPassword(e.target.value)}/>
        {errors.Password && <div className='error' style={{ color: 'red' }}>{errors.Password}</div>}
=======
        <input type="text" 
        name='password'
        placeholder='Password'
        className='password1' 
        value={input.password} 
        onChange={onInputChange} 
        onBlur={validateInput}></input>
        {error.password && <span className='err'>{error.password}</span>}
        

>>>>>>> c89ee948fbbdf9775b95a5637b384e26219d5eff
        </div>

        <div className='confirm-password'>
            Confirm Password
<<<<<<< HEAD
        <input type="text" placeholder='confirm Password'className='confirm'/>
        </div>

        <div className='submit'>
            <button className='sub'>Submit</button>
        </div>

=======
        <input type="text"
        name='confirmpassword'
         placeholder='confirm Password'
         className='confirm'
         value={input.confirmpassword} 
        onChange={onInputChange} 
        onBlur={validateInput}></input>
         {error.confirmpassword && <span className='err'>{error.confirmpassword}</span>}
        </div>

        <div className='submit'>
          <Link to={"/login-page"} > <button className='sub'>Submit</button></Link>
        </div>
        
>>>>>>> c89ee948fbbdf9775b95a5637b384e26219d5eff

      </div>
    </div>
    </form>
  )
}

export default Register

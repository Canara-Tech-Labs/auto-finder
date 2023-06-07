import React from 'react'
import './Register1.css';
import { useState } from 'react';

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
      <div className='form'>
        <div className='text'>
            <div className='text1'>Welcome to the Autoservice</div>
            <div className='text2'>Let's get your all set up, so you can being tomake your first service</div>
      
        </div>

        <div className='name'>
            First Name
        <input type="text" placeholder='First Name'className='name1' onChange={(e)=> setFirstname(e.target.value)}/>
        {errors.Firstname && <div className='error' style={{ color: 'red' }}>{errors.Firstname}</div>}
        </div>

        <div className='name-1'>
            Last Name
        <input type="text" placeholder='Last Name'className='name2' onChange={(e)=> setLastname(e.target.value)}/>
        {errors.Lastname && <div className='error'  style={{ color: 'red' }}>{errors.Lastname}</div>}
        </div>

        <div className='email'>
            Email
        <input type="text" placeholder='Email'className='email1'  onChange={(e)=> setEmail(e.target.value)}/>
        {errors.Email && <div className='error' style={{ color: 'red' }}>{errors.Email}</div>}
        </div>

        <div className='password'>
            Password
        <input type="text" placeholder='Password'className='password1'  onChange={(e)=> setPassword(e.target.value)}/>
        {errors.Password && <div className='error' style={{ color: 'red' }}>{errors.Password}</div>}
        </div>

        <div className='confirm-password'>
            Confirm Password
        <input type="text" placeholder='confirm Password'className='confirm'/>
        </div>

        <div className='submit'>
            <button className='sub'>Submit</button>
        </div>


      </div>
    </div>
    </form>
  )
}

export default Register

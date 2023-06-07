import React, { useState } from 'react'
import './Otppage.css';
import { Link } from 'react-router-dom';

export default function Otppage() {
  const[Otp, setOtp] = useState('');
  const [errors, setErrors ]= useState({});

const handleSubmit=(e)=>{
  e.preventDefault();

  setErrors({});

  let isValid=true;
  const newErrors={};

  if (Otp.trim() == ''){
    newErrors.Otp = 'Please enter otp';
    isValid=false;
  }

  if (!isValid){
    setErrors(newErrors);
    return;
  }

  setOtp('');
}
  
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <div className='box'>
      <div className='text'>
        Generate OTP
      </div>

      <div className='Enter OTP'>
          <input type="text" placeholder='Enter OTP' className='new' onChange={(e)=> setOtp(e.target.value)}/>
          {errors.Otp && <div className='error' style={{ color: 'red' }}>{errors.Otp}</div>}
          </div>


          <Link to={"/login-page"}><button className='verify'>Verify OTP</button> </Link>
          </div>
      </div>
      </form>
  )
}

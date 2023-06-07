import React from 'react'
import './Otppage.css';

export default function Otppage() {
  return (
    <div>
      <div className='box'>
      <div className='text'>
        Generate OTP
      </div>

      <div className='Enter OTP'>
          <input type="text" placeholder='Enter OTP' className='new' /></div>


          <button className='verify'>Verify OTP</button>
          </div>
      </div>
    
  )
}

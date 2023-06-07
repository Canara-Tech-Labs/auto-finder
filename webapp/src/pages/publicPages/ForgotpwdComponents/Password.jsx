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

import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullName: {
              firstName: firstName,
              lastName: lastName
      },
      email: email,
      password: password
    });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="uber-driver.png" alt="logo" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }
        }>
          
          <h3 className='text-lg font-semibold mb-2'>What's your name</h3>
          <div className='flex justify-between gap-4 mb-5'>
            <input 
              required 
              type="text"
              value={firstName}
              onChange={(e) => {setFirstName(e.target.value)}}
              className='bg-gray-200 rounded px-4 py-2 w-1/2 text-lg placeholder:text-base' 
              placeholder='First name' 
            />
            <input 
              required 
              type="text"
              value={lastName}
              onChange={(e) => {setLastName(e.target.value)}}
              className='bg-gray-200 rounded px-4 py-2 w-1/2 text-lg placeholder:text-base' 
              placeholder='Last name' 
            />
          </div>

          <h3 className='text-lg font-semibold mb-2'>What's your email</h3>
          <input 
              required 
              type="email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              className='bg-gray-200 mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
              placeholder='email@example.com' 
            />
          
          <h3 className='text-lg font-semibold mb-2'>Enter password</h3>
          
          <input 
            required 
            type="password"               
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            className='bg-gray-200 mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
            placeholder='password' 
          />

          <button className='bg-green-500 text-white text-lg font-semibold mb-2 px-4 py-2 rounded w-full'>Register</button>

          <p className='text-center'>Already have a Captain? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </form>
      </div>

      <div>
        <p className='text-xs'>By signing up, you agree to our <Link className='font-semibold underline'>Terms of Service</Link> and <Link className='font-semibold underline'>Privacy Policy</Link></p>
      </div>  
    </div> 
  )
}

export default CaptainSignup

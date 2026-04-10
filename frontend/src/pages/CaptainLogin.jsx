import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      email: email,
      password: password
    });
    
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
          
          <h3 className='text-lg font-semibold mb-2'>What's your email</h3>
          
          <input 
            required 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className='bg-gray-200 mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
            placeholder='email@example.com' 
          />
          
          <h3 className='text-lg font-semibold mb-2'>Enter password</h3>
          
          <input 
            required 
            type="password" 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='bg-gray-200 mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
            placeholder='password' 
          />

          <button className='bg-black text-white text-lg font-bold mb-2 px-4 py-2 rounded w-full'>Login</button>

          <p className='text-center'>Want to become a captain? <Link to='/captain-signup' className='text-blue-600'>Register</Link></p>
        </form>
      </div>

      <div>
        <Link 
          to='/user-login'
          className='flex justify-center items-center bg-orange-500 text-white text-lg font-bold px-4 py-2 rounded w-full'
        >Sign-in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin

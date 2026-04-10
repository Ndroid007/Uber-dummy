import React from 'react'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user-login' element={<Userlogin/>} />
        <Route path='/user-signup' element={<UserSignup/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
      </Routes>  
    </div>
  )
}

export default App

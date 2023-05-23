import React from 'react'
import { Route,Routes } from 'react-router-dom'
import ProfileDetail from '../Pages/ProfileDetail'
import Home from '../Pages/Home'
import AllProfiles from '../Pages/AllProfiles'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      
        <Route path='/profiledetail/:username' element={<ProfileDetail/>}/>
        <Route path='/profiles' element={<AllProfiles/>}/>
    </Routes>
  )
}

export default Routers
import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Dashboard from '../Dashboard'
import axios from 'axios'
import { useEffect } from 'react'

const Profile = ({ login, setLogin, loginStat, setLoginStat, profile, setProfile }) => {
    console.log(profile)
  return (
    <div>
        <Navbar login={login} setLogin={setLogin} loginStat={loginStat} setLoginStat={setLoginStat}/>
        <Dashboard login={login} profile={profile} setProfile={setProfile}/>
        
    </div>
  )
}

export default Profile;
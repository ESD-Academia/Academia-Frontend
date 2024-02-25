import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import React, { useState } from 'react';
import Profile from './Components/Dashboard/Profile/Profile';

function App() {
  const [login, setLogin] = useState({"email": "", "password": ""})
  const [loginStat, setLoginStat] = useState(false)
  const [profile, setProfile] = useState({
    "empId": 0,
    "firstName": "",
    "lastName": "",
    "email": "",
    "department": { "name": ""},
    "employeeSalaries": []
  })
  if (!loginStat) {
    return <Login login={login} setLogin={setLogin} loginStat={loginStat} setLoginStat={setLoginStat} profile={profile} setProfile={setProfile}/>
  } else {
    return (
      <div>
        <Profile login={login} setLogin={setLogin} loginStat={loginStat} setLoginStat={setLoginStat} profile={profile} setProfile={setProfile}/>
      </div>
    )
  }
}

export default App;

import React from 'react'
import axios from 'axios'
import './Login.css'

const Login = ({ login, setLogin, loginStat, setLoginStat, profile, setProfile }) => {
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setLogin(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:9191/login/validateLogin', login)
    .then((response) => {
        if (response.data.requestStatus) {
            setLoginStat(response.data.requestStatus)
            axios.get("http://localhost:9191/employee/getEmployee?email=" + login.email)
            .then((response) => {
                console.log(response)
                setProfile(response.data)
            })
            .catch(
                console.log("F")
    )
            
        } else {
            setLoginStat(false)
            setLogin({})
        }
    })
    .catch((error) => {
        console.log(error)
    })

    
  }
  return (
    <>
      <div className='container login-master-div'>
        <h1 className='text-center'>Welcome to Academia!</h1>
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <div className='text-center form-header'>
                  <h2>Sign In</h2>
                </div>
                <div className='row form-row'>
                <div className='col-2'/>
                <label className='col-4 form-labels'> 
                  Enter your Email: 
                </label>
                <input type='text' name='email' value={login.email || ""} onChange={handleChange} className='col-4 form-input'/>
                <div className='col-2'/>
                </div>
                <div className='row form-row'>
                <div className='col-2'/>
                <label className='col-4 form-labels'>
                  Enter your Password:
                </label>
                <input type='password' name='password' value={login.password || ""} onChange={handleChange} className='col-4 form-input'/>
                </div>
                <div className='col-2'/>
                <div className='row form-row'>
                  <div className='col-2'/>
                  <input type='submit' className='col-8 form-button'/>
                  <div className='col-2'/>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login
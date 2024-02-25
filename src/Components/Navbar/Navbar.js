import React from 'react'
import './Navbar.css'

const Navbar = ({ login, setLogin, loginStat, setLoginStat }) => {

  const handleLogout = () => {
    setLogin({})
    setLoginStat(false)
  }

  return (
    <nav className="navbar main-navbar">
        <div className="container-fluid">
            <a className="navbar-brand" style={{color: 'white'}}>Academia ERP</a>
            <div className='d-flex'>
                <button className='navbar-button me-2' onClick={handleLogout}>Logout</button>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar
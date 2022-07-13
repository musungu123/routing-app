import React from 'react'
import { Link } from 'react-router-dom'

function Navigation({setOpenModal}) {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">MYAPP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/services'>Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/blog'>Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/contacts'>Contacts</Link>
                    </li>
                </ul>
                <div>
                  
                <ul className="nav navbar-nav navbar-right mb-2">
                    <li><button type='button' onClick={() => {setOpenModal(true)}}><span className="glyphicon glyphicon-user"></span> SignUp</button></li>&nbsp;&nbsp;&nbsp;&nbsp;
                   <li><button><span className="glyphicon glyphicon-log-in"></span> Login</button></li>
                   </ul>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;
    
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
</nav>
    </div>
  )
}

export default Navigation
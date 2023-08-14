// fuction based component of react

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



export default function Navbar(props) {
    
    
  return ( //here myStyle is a javascript object
  <>
    <nav className={`navbar bg-${props.mode} border-bottom border-body`} data-bs-theme={`${props.mode}`}> 
    <div className="container-fluid"   >
      <Link className="navbar-brand"   to="/">{props.title}</Link>
      {/* <a className="navbar-brand"   href="#">{props.title}</a> */}
      <div  className="form-check form-switch container " >
  <input  className="form-check-input  mx-6" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label  className={`form-check-label text-${props.mode==='light'? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'? 'dark':'light'} Mode</label>
</div>
      <button className="navbar-toggler"   type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        
        <span className="navbar-toggler-icon"  ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent"  >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"  >
          <li className="nav-item"  >
            <Link  className="nav-link"  rel="stylesheet" to="/" >Home</Link>
            {/* <a  className="nav-link"  rel="stylesheet" href="#" >Home</a> */}
            {/* if we use a aur href then side fill reload on evigating */}
          </li>
          <li className="nav-item"  >
            <Link className="nav-link" to="/about"  >{props.AboutText}</Link>
            {/* <a className="nav-link" href="#"  >{props.AboutText}</a> */}
          </li>
          
          
      
        </ul>

        <form className="d-flex" role="search"  >
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
       </>
  )
}
// setting the datatype of props we using use isRequired if you must want to pass title if dont pass then it will show error in console

Navbar.propTypes={title: PropTypes.string.isRequired,
                  AboutText:PropTypes.string.isRequired    
}
// suppose we using prop.title something like and not passing the titile then
Navbar.defaultProps={
    title: 'Set Title Here',
    AboutText:'About Text Here'
};
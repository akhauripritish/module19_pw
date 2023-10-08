 import React from 'react'
 
 import '../App.css'

 const Navbar = () => {
   return (
     <div> 
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-main">
            <div className="container-fluid">  
                <div classNameName ='logo-div'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" className='logo-main' alt="logoimage" height='35px' width='140px'/></div>

                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item list">
                    <a className="nav-link active list-one " aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link list-one" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown ">
                    <a className="nav-link dropdown-toggle list-one" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu dropdown-color">
                        <li><a className="dropdown-item list-one" href="#">Action</a></li>
                        <li><a className="dropdown-item list-one" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider list-one"/></li>
                        <li><a className="dropdown-item list-one" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled list-one" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>

     </div>
   )
 }
 
 export default Navbar
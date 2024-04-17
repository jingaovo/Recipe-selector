import "./NavBar.css"
import {NavLink,Link }from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [show,setShow] = useState(false);
  const user = localStorage.getItem("user");
  const toggleMenu = () =>{
    setShow(!show);
  }
  const setUser=()=>{
    localStorage.removeItem("user");
  }
  return (
    <nav className="navWrapper">
      <div>
        <Link to="/">
          <span>Jin Recipe-Selector</span>
        </Link>
      </div>

      <div className={show ? 'linkWrapper show' : 'linkWrapper'}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink onClick={()=>setUser()} to="login">
          {user ? "Logout" : "Login"}
        </NavLink>
      </div>

      <div className="burgerMenu" onClick={toggleMenu}>&#9776;</div>
    </nav>
  )
}

export default NavBar
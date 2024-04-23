import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import { useEffect } from 'react';
import NavBar from '../components/navbar/NavBar'
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Detail from "../pages/detail/Detail"
import About from "../pages/about/About"
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
    //manage login and logout state
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) setIsLoggedIn(true);
    }, [])
    
    const handleLogIn = ( userData ) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setIsLoggedIn(true);
    }

    const handleLogOut = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
    }

  return (
    <div>
        <BrowserRouter>
              <NavBar user={isLoggedIn} onLogout={handleLogOut} />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="login" element={<Login onLogIn={handleLogIn}/>}/>
                <Route path='about' element={<PrivateRouter />}>
                    <Route path="" element={<About />}/>                                       
                </Route>
                <Route path='detail' element={<PrivateRouter />}>
                    <Route path="" element={<Detail />}/>                                       
                </Route>
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter
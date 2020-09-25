import React,{useRef} from 'react'
import './Navbar.scss'
import logo from '../../images/Logo original RGB.jpg'
import {NavLink} from "react-router-dom";
export const Navbar = () => {
        const menu = useRef(null)
        return(
            <nav className="navbar">
                <div className="container">

                    <div className="navbar-brand">
                        <NavLink to="/">
                            <img src={logo} className="logo" alt="logo"/>
                        </NavLink>
                    </div>
                    <div className="burger-menu" onClick={event => {
                        if (event.target.classList.contains('burger-menu-middle-line')) {
                            event.target.parentNode.classList.toggle('open')
                        } else {
                            event.target.classList.toggle('open')
                        }
                        menu.current.classList.toggle('open')
                    }}>
                        <span className="burger-menu-middle-line" />
                    </div>
                    <menu className="nav-menu" ref={menu}>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/about">About us</NavLink></li>
                    </menu>
                </div>
            </nav>
        );
}

import React from 'react'
import "./header.css"
import logo from "../../assets/Home/logo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='nyaheader'>
            <div className='inside-nyaheader'>
                <NavLink to="/" className="logo">
                    <img src={logo} alt="website_logo" />
                </NavLink>
                <div className='navbar'>
                    <NavLink to="/careers">Careers</NavLink>
                    <NavLink to="/events">Events</NavLink>
                    <NavLink to="/csrpage">CSR</NavLink>
                    <NavLink to="/contactus">Contacts</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header

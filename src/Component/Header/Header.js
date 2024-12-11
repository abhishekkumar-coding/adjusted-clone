import React from 'react'
import "./header.css"
import logo from "../../assets/Home/logo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='nyaheader bg-white w-[100%] flex item-center fixed top-0 left-0 z-50 shadow-lg'>
            <div className='inside-nyaheader w-[100%] flex justify-between py-[0.5%] px-[16%]'>
                <NavLink to="/" className="logo ">
                    <img src={logo} alt="website_logo" style={{ width: '100px', height: '45px' }} />
                </NavLink>
                <div className="navbar flex items-center space-x-[70px]">
                    <NavLink
                        to="/careers"
                        className="text-[15px] font-medium cursor-pointer transition-all duration-300 text-black no-underline hover:text-[#292B5B] hover:scale-[1.1]"
                    >
                        Careers
                    </NavLink>
                    <NavLink
                        to="/events"
                        className="text-[15px] font-medium cursor-pointer transition-all duration-300 text-black no-underline hover:text-[#292B5B] hover:scale-[1.1]"
                    >
                        Events
                    </NavLink>
                    <NavLink
                        to="/csrpage"
                        className="text-[15px] font-medium cursor-pointer transition-all duration-300 text-black no-underline hover:text-[#292B5B] hover:scale-[1.1]"
                    >
                        CSR
                    </NavLink>
                    <NavLink
                        to="/contactus"
                        className="text-[15px] font-medium cursor-pointer transition-all duration-300 text-black no-underline hover:text-[#292B5B] hover:scale-[1.1]"
                    >
                        Contacts
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default Header

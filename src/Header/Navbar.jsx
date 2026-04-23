import React from 'react';
import { NavLink } from 'react-router';
import './navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
    const links = (
        <>
            <li className='font-bold '><NavLink to='/'>Home</NavLink></li>
            <li className='font-bold '><NavLink to='/apps'>Apps</NavLink></li>
            <li className='font-bold '><NavLink to='/instullation'>Installation</NavLink></li>
        </>
    )
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <NavLink to='/' className='text-black font-bold flex items-center'><img className='w-4 h-4 md:w-7 md:h-7' src={logo} alt="" />Hero-App</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font font-semibold"> <a href="https://github.com/mdparvezcse" target='blank'>Contribute</a>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
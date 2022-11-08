import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/photography.png';
import './Navbar.css';

const Navbar = () => {
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
    </>
    return (
        <div  data-theme="cupcake" className="navbar nav-menu">
            <div className="navbar-start">
            <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className=" normal-case text-xl">
                    <div className='flex items-center'>
                        <div>
                            <img className='h-16' src={logo} alt="" />
                        </div>
                        <h2 className='ph-title'>FlyTo-Grapher</h2>
                    </div>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;
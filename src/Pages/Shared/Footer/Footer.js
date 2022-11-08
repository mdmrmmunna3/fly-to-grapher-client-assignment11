import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../../assets/logo/photography.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-base-content">
            <div>
                <img className='w-20' src={logo} alt="" />
                <p className=' ph-title'>PhotoGraphy</p>
                <div className="grid grid-flow-col gap-4">
                    <Link to='/'><FaTwitter className='text-2xl'></FaTwitter></Link>
                    <Link to='/'><FaYoutube className='text-2xl'></FaYoutube></Link>
                    <Link to='/'><FaFacebook className='text-2xl'></FaFacebook></Link>
                </div>
            </div>
            <div className='text-gray-400'>
                <span className="footer-title ">Services</span>
                <Link className="link link-hover">Sports-Photography</Link>
                <Link className="link link-hover">Wedding-Photograpy</Link>
                <Link className="link link-hover">Sports-Photography</Link>
                <Link className="link link-hover">Wedding-Photograpy</Link>
            </div>
            <div className='text-gray-400'>
                <span className="footer-title">Review</span>
                <Link className="link link-hover">About me</Link>
                <Link className="link link-hover">Contact-</Link>
                <Link className="link link-hover">My-Review</Link>
                <Link className="link link-hover">Add-Service</Link>

            </div>
            <div className='text-gray-400'>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
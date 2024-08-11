import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';  // Ensure this path is correct

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Hamburger icon SVG for mobile view
    const HamburgerIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFC72C]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
    );

    // Close icon SVG for mobile view
    const CloseIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FFC72C]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    );

    return (
        <nav className="bg-[#002F6C] px-6 sm:px-8 py-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between md:justify-start">
                <Link to="/" className="flex items-center mx-auto md:mx-0">
                    <img src={logo} className="h-24 w-auto md:h-32 object-contain" alt="Saber Construction Logo" />
                </Link>
                <button
                    type="button"
                    className="inline-flex items-center p-2 rounded-md text-[#FFC72C] hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-gray-100 md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? CloseIcon : HamburgerIcon}
                </button>
                <div className="hidden md:flex items-center space-x-8 ml-auto">
                    <Link to="/" className="text-[#FFC72C] hover:text-yellow-300 font-semibold uppercase tracking-wide">Home</Link>
                    <Link to="/vendor" className="text-[#FFC72C] hover:text-yellow-300 font-semibold uppercase tracking-wide">Become a Vendor</Link>
                    <Link to="/statement" className="text-[#FFC72C] hover:text-yellow-300 font-semibold uppercase tracking-wide">Capability Statement</Link>
                    <Link to="/contact" className="text-[#FFC72C] hover:text-yellow-300 font-semibold uppercase tracking-wide">Contact</Link>
                </div>
            </div>
            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:hidden w-full mt-4 space-y-2`} id="navbar-default">
                <Link to="/" className="text-[#FFC72C] hover:text-yellow-300 font-semibold uppercase py-2 px-4">Home</Link>
                <Link to="/vendor" className="text-[#FFC72C] hover:text-yellow-300 font-semibold uppercase py-2 px-4">Become a Vendor</Link>
                <Link to="/statement" className="text-[#FFC72C] hover:text-yellow-300 font-semibold uppercase py-2 px-4">Capability Statement</Link>
                <Link to="/contact" className="text-[#FFC72C] hover:text-yellow-300 font-semibold uppercase py-2 px-4">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;

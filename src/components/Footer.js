import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#002F6C] text-[#FFC72C] py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-center flex-wrap gap-8 mb-4">
                    <Link to="/" className="hover:text-yellow-300 transition-colors duration-300 font-semibold uppercase tracking-wide">Home</Link>
                    <Link to="/vendor" className="hover:text-yellow-300 transition-colors duration-300 font-semibold uppercase tracking-wide">Become a Vendor</Link>
                    <Link to="/statement" className="hover:text-yellow-300 transition-colors duration-300 font-semibold uppercase tracking-wide">Capability Statement</Link>
                    <Link to="/contact" className="hover:text-yellow-300 transition-colors duration-300 font-semibold uppercase tracking-wide">Contact Us</Link>
                </div>
                <div className="text-center text-[#FFC72C]">
                    &copy; {new Date().getFullYear()} Saber Construction. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;

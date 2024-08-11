import React from 'react';
import backgroundImage from '../assets/herobackground.png';  // Ensure this path is correct

function HeroSection() {
    return (
        <section
            className="bg-cover bg-center text-white py-24"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)' }}>
                        Saber Construction, LLC
                    </h1>
                    <p className="text-2xl md:text-3xl font-semibold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)' }}>
                        Certified Service-Disabled Veteran’s Owned Small Business
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

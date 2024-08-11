import React from 'react';
import logo from './assets/logo.png';  // Ensure this path is correct
import certification from './assets/image.png';  // Path to the uploaded certification image

function CapabilityStatement() {
    return (
        <section className="bg-white py-12 md:py-16 px-4 sm:px-6 md:px-12">
            <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-[#002F6C] text-white p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-8 text-center">CAPABILITY STATEMENT</h2>
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">PROFILE</h3>
                            <p>Alex Stephens</p>
                            <p>Nashville, TN 37207</p>
                            <p>931-308-0649</p>
                            <p>astephens@sabertn.com</p>
                            <p>DUNS Number - 11-921-7866</p>
                            <p>Cage Number - 9UQZ9</p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">NAICS CODES</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>236220 - General Construction</li>
                                <li>236210 - Factory / Warehouse</li>
                                <li>238160 - Roofing Contractor</li>
                                <li>238330 - Flooring Contractor</li>
                                <li>238120 - Steel / Concrete Contractor</li>
                                <li>238320 - Painting Contractor</li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">CERTIFICATIONS</h3>
                            <div className="flex justify-start">
                                <img src={certification} alt="Certification" className="h-32 md:h-40"/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#D4AF37] text-[#002F6C] p-8 md:p-12">
                        <div className="flex justify-center mb-6">
                            <img src={logo} alt="Saber Construction Logo" className="h-36 md:h-48"/>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-center mb-6">SABER CONSTRUCTION, LLC</h3>
                            <h3 className="text-xl font-semibold mb-4">COMPANY OVERVIEW</h3>
                            <p>We have experience working in residential, commercial, and federal/state government settings. Our team completes project scopes on time and within the allotted budget. We focus on establishing customer relationships that create long-term opportunities.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">CORE COMPETENCIES</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Design and build of commercial buildings</li>
                                <li>Concrete structures and pads</li>
                                <li>Commercial remodeling</li>
                                <li>Structural steel buildings</li>
                                <li>PEB buildings</li>
                                <li>Commercial roofing</li>
                                <li>Facility mechanical and plumbing</li>
                                <li>Facility painting</li>
                                <li>Facility flooring</li>
                                <li>Fire suppression systems</li>
                                <li>Project and site management</li>
                                <li>Facility maintenance</li>
                                <li>Solar</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CapabilityStatement;

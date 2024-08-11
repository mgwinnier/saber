import React from 'react';
import vendorPDF from './assets/Vendors.pdf'; // Ensure the path is correct

function VendorInformation() {
    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002F6C] mb-8 text-center">
                        Vendor Information
                    </h2>
                    <p className="text-lg md:text-xl text-[#002F6C] mb-6 leading-relaxed">
                        In order to perform work for Saber Construction, LLC, you must supply the following information:
                    </p>
                    <ul className="list-disc pl-6 text-lg md:text-xl text-[#002F6C] mb-6 leading-relaxed">
                        <li>W9 Tax form</li>
                        <li>Proof of both active liability and worker’s compensation insurance coverage, with Saber Construction listed as a Certificate Holder on the Certificate of Insurance. If you have a worker’s compensation exemption through your state, please provide that as well.</li>
                        <li>Signed Construction Subcontract Agreement (attached)</li>
                    </ul>
                    <p className="text-lg md:text-xl text-[#002F6C] mb-6 leading-relaxed">
                        This information should be emailed to <a href="mailto:mrussell@sabertn.com" className="text-[#FFC72C] font-semibold">mrussell@sabertn.com</a> before any work is performed. If work is started before the vendor has submitted the required information, no payment will be made for work performed.
                    </p>
                    <p className="text-lg md:text-xl text-[#002F6C] mb-6 leading-relaxed">
                        It is the subcontractor’s responsibility to provide Saber Construction, LLC with updated proof of insurance if a policy expires. No payment will be made for any work performed while either the liability or worker’s compensation policies were expired.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a href={vendorPDF} download className="bg-[#FFC72C] text-[#002F6C] hover:bg-[#FFA000] font-semibold uppercase tracking-wide py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] text-center">
                            Download Vendor Information PDF
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VendorInformation;

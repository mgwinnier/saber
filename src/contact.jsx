import React from 'react';

function Contact() {
    return (
        <section className="bg-gray-100 py-12 px-4 sm:px-6 md:px-8">
            <div className="container mx-auto max-w-3xl bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-center text-[#002F6C] mb-6">Contact Us</h1>
                <p className="text-lg text-center text-gray-700 mb-8">
                    If you are interested in working with Saber Construction, LLC or becoming a vendor, please don't hesitate to contact us. We value our partnerships and look forward to building something great together.
                </p>
                <div className="text-center">
                    <p className="text-lg mb-4">
                        <strong>Email:</strong> <a href="mailto:astephens@sabertn.com" className="text-[#002F6C] hover:text-[#FFC72C] transition-colors">astephens@sabertn.com</a>
                    </p>
                    <p className="text-lg mb-4">
                        <strong>Phone:</strong> <a href="tel:931-308-0649" className="text-[#002F6C] hover:text-[#FFC72C] transition-colors">931-308-0649</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;

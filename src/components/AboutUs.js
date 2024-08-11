import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="border-2 sm:border-4 border-[#FFC72C] p-2 sm:p-4">
                    <div className="border-2 sm:border-4 border-[#FFC72C] p-6 sm:p-8 md:p-12 bg-white">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002F6C] mb-8 sm:mb-10 md:mb-12 text-center">
                            About Us
                        </h2>
                        <p className="text-base sm:text-lg md:text-2xl text-[#002F6C] mb-4 sm:mb-6 md:mb-8 leading-relaxed text-justify">
                            Saber Construction, LLC is a certified Service-Disabled Veteran’s Owned Small Business based in Tennessee. With extensive experience in residential, commercial, and government settings, we hold a commercial contractor’s license and are fully insured to handle projects of all scales.
                        </p>
                        <p className="text-base sm:text-lg md:text-2xl text-[#002F6C] mb-4 sm:mb-6 md:mb-8 leading-relaxed text-justify">
                            Our mission is to deliver high-quality construction services that meet the specific needs of our clients. We are committed to completing projects on time, within budget, and to the highest standards of quality and safety.
                        </p>
                        <p className="text-base sm:text-lg md:text-2xl text-[#002F6C] mb-4 sm:mb-6 md:mb-8 leading-relaxed text-justify">
                            At Saber Construction, we build more than just structures; we build lasting relationships. Our focus on customer satisfaction and long-term partnerships drives us to exceed expectations and deliver value on every project.
                        </p>
                        <p className="text-base sm:text-lg md:text-2xl text-[#002F6C] leading-relaxed text-justify">
                            Whether you're looking for residential renovations, commercial construction, or government contracting, Saber Construction, LLC is equipped to handle all your construction needs with professionalism and integrity.
                        </p>
                        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                            <Link to="/contact" className="bg-[#FFC72C] text-[#002F6C] hover:bg-[#FFA000] font-semibold uppercase tracking-wide py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] text-center">
                                Contact Us
                            </Link>
                            <Link to="/vendor" className="bg-[#FFC72C] text-[#002F6C] hover:bg-[#FFA000] font-semibold uppercase tracking-wide py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] text-center">
                                Become A Vendor
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;

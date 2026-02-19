import React, { useEffect } from 'react';
import teeth from '../assets/bannerpic.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutus = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-out-cubic'
        });
    }, []);
    return (
        <section id="about-us" className="relative w-full py-24 px-6 md:px-12 bg-white overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 space-y-12">

                {/* Header Section */}
                <div className="space-y-6 flex flex-col items-center" data-aos="fade-down">
                    <div className="text-center space-y-2 mb-4">
                        <h2 className="text-4xl md:text-5xl text-[#D4AF37] tracking-tight border-b-2 border-[#D4AF37]/20 pb-2 inline-block">
                            About Us
                        </h2>
                        <p className="text-xs md:text-sm font-medium text-[#4D0013] tracking-[0.4em] uppercase pt-2" data-aos="fade-up" data-aos-delay="200">
                            AJ DENTO AESTHETIC CARE
                        </p>
                    </div>

                </div>

                {/* Text Content */}
                <div className="space-y-8 text-gray-500 text-lg italic md:text-xl font-light leading-relaxed max-w-3xl" data-aos="fade-up" data-aos-delay="300">
                    <p>
                        <strong className="text-yellow-600 font-medium">AJ Dento Aesthetic Care</strong> was built on a simple belief: dental care should begin with protection, not pain. Located in Anna Nagar, Chennai, we exist to redefine how dentistry is delivered.
                    </p>
                    <p>
                        Not rushed. Not reactive. Not driven by volume. Every decision inside our clinic is structured around clarity, accuracy, and long-term stability.
                    </p>
                </div>

                {/* Emphasized Quote */}
                <div className="relative py-6 px-8 max-w-2xl" data-aos="zoom-in" data-aos-delay="500">
                    <span className="absolute top-0 left-0 text-6xl text-[#D4AF37]/20 font-serif leading-none" data-aos="fade-right" data-aos-delay="600">“</span>
                    <p className="text-2xl md:text-3xl text-black font-serif italic relative z-10">
                        We do not treat teeth casually. <br />
                        We protect structure deliberately.
                    </p>
                    <span className="absolute bottom-0 right-0 text-6xl text-[#D4AF37]/20 font-serif leading-none" data-aos="fade-left" data-aos-delay="600">”</span>
                </div>

                {/* Image */}
                <div className="w-full max-w-[200px] md:max-w-[250px] mx-auto transform hover:scale-105 transition-transform duration-700" data-aos="flip-up" data-aos-duration="1200" data-aos-delay="700">
                    <img
                        src={teeth}
                        alt="AJ Dento Philosophy"
                        className="w-full h-auto object-cover rounded-full drop-shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Aboutus;
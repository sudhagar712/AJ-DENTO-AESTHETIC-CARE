import React from 'react';
import { ChevronRight } from 'lucide-react';
import bannerpic from '../assets/bannerpic.png';

const Banner = () => {
    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
           

            <div className="relative z-10 w-full  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Column: Text Content */}
                <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in-up">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full backdrop-blur-md shadow-sm transition-transform hover:scale-105 duration-300">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
                        </span>
                        <span className="text-[#D4AF37] text-[10px] md:text-sm font-bold tracking-widest uppercase">
                            Best Dental Clinic in Anna Nagar
                        </span>
                    </div>

                    {/* Main Headline */}
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-6xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight drop-shadow-xl">
                            <span className="block">AJ &nbsp; DENTO</span>
                            <span className="block ">
                                AESTHETIC CARE
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Crafting Smiles with Precision. <br className="hidden md:block" />
                            <span className="italic text-[#D4AF37] font-medium">"Guardian emerging from shadow"</span>
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B5952F] text-[#4D0013] font-bold rounded-full overflow-hidden shadow-[0_10px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.5)] active:scale-95 transition-all duration-300">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Begin Consultation
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button className="px-8 py-4 bg-white/5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/40 backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group">
                            <span>Explore Expertise</span>
                        </button>
                    </div>
                </div>

                {/* Right Column: Hero Image */}
                <div className="relative hidden md:hidden lg:block flex justify-center lg:justify-end items-center text-center  ">
                    <div className="relative w-full  max-w-md lg:max-w-xl aspect-square flex items-center justify-center">
                      

                        <img
                            src={bannerpic}
                            alt="Advanced Dental Aesthetic Care"
                            className="relative z-10 w-full h-auto object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Finalcontent = () => {
    return (
        <section className=" py-24 md:py-32 px-4  relative overflow-hidden">

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">


       

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                    Your smile deserves protection <br className="hidden md:block" />
                    <span className="text-[#888] italic">before damage.</span>
                </h2>

                <div className="space-y-2">
                    <p className="text-[#D4AF37] text-lg md:text-xl font-bold tracking-widest uppercase">
                        AJ Dento Aesthetic Care
                    </p>
                    <p className="text-gray-400 text-sm md:text-base font-light tracking-wide">
                        Anna Nagar, Chennai
                    </p>
                </div>

                <div className="pt-8">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-white text-[#121212] px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
                    >
                        Begin Your Consultation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Finalcontent;
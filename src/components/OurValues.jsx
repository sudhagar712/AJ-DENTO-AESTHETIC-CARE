import React, { useEffect } from "react";
import valuesImage from "../assets/servicesimg/value.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Values = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-out-cubic'
        });
    }, []);

    const values = [
        {
            title: "Precision Over Assumption",
            desc: "We diagnose before we decide. Every treatment is backed by structured assessment and digital clarity.",
        },
        {
            title: "Protection Before Procedure",
            desc: "Prevention is not an afterthought. It is the foundation.",
        },
        {
            title: "Clarity in Communication",
            desc: "Patients deserve to understand their condition before committing to intervention.",
        },
        {
            title: "Consistency in Standards",
            desc: "Whether today or in future locations, our systems remain disciplined and structured.",
        },
        {
            title: "Long-Term Thinking",
            desc: "Our goal is not short-term fixes. It is sustainable oral health.",
        },
    ];

    return (
        <section className=" text-white flex flex-col lg:flex-row min-h-screen overflow-hidden">

            {/* LEFT SIDE - CONTENT */}
            <div className="w-full lg:w-1/2 px-8 py-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">


                <div className="relative z-10" data-aos="fade-right">
                    <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        Our Philosophy
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-serif text-white mb-12 leading-tight">
                        Guided by <span
                            className="italic"
                            style={{
                                background: 'linear-gradient(135deg, #FFD700 0%, #FFC200 20%, #FFAA00 45%, #F5A623 65%, #E8960A 85%, #D4830A 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >Values</span>,<br />
                        Focused on <span  style={{
                                background: 'linear-gradient(135deg, #FFD700 0%, #FFC200 20%, #FFAA00 45%, #F5A623 65%, #E8960A 85%, #D4830A 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }} className="text-[#D4AF37] italic">Care</span>.
                    </h2>

                    <div className="space-y-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="flex gap-6 group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-[#D4AF37]/20"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="text-[#D4AF37] font-bold text-2xl font-mono opacity-80 group-hover:scale-110 transition-transform duration-300">
                                    0{index + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-400 mt-2 leading-relaxed font-light text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                                        {value.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="w-full lg:w-1/2 relative h-[70vh] lg:h-auto" data-aos="fade-right">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img
                    src={valuesImage}
                    alt="Clinic Values"
                    className="w-full h-full object-cover"
                />
            </div>

        </section>
    );
};

export default Values;

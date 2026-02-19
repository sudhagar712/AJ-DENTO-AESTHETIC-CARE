import React, { useEffect } from 'react';
import { ClipboardList, Stethoscope, Calendar, Activity, Smile } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ourapproach = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-out-cubic'
        });
    }, []);

    const steps = [
        { title: "Assessment", icon: ClipboardList },
        { title: "Diagnosis", icon: Stethoscope },
        { title: "Planning", icon: Calendar },
        { title: "Execution", icon: Activity },
        { title: "Follow-Up", icon: Smile },
    ];

    return (
        <section className="bg-yellow-100 text-[#642332] font-bold py-16 md:py-24 text-center overflow-hidden">
            <h2 className="text-3xl md:text-4xl mb-10 md:mb-12" data-aos="fade-down">Our Approach</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-10">
                {steps.map((step, index) => (
                    <div
                        key={step.title}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="flex flex-row md:flex-col items-center justify-start md:justify-center gap-4 md:gap-0 px-8 md:px-0"
                    >
                        <div className="border border-[#800020] w-16 h-16 md:w-20 md:h-20 rounded-full flex-shrink-0 flex items-center justify-center bg-white text-[#800020] shadow-md hover:scale-110 transition-transform duration-300 md:mx-auto md:mb-4">
                            <step.icon size={28} className="md:w-8 md:h-8" />
                        </div>
                        <p className="text-lg md:text-base font-bold text-left md:text-center">{step.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Ourapproach;
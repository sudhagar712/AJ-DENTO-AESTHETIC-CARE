import React from 'react';
import { ClipboardList, Stethoscope, Calendar, Activity, Smile } from 'lucide-react';

const Ourapproach = () => {
    const steps = [
        { title: "Assessment", icon: ClipboardList },
        { title: "Diagnosis", icon: Stethoscope },
        { title: "Planning", icon: Calendar },
        { title: "Execution", icon: Activity },
        { title: "Follow-Up", icon: Smile },
    ];

    return (
        <section className="bg-yellow-100 text-black font-bold py-24 text-center">
            <h2 className="text-4xl mb-12">Our Approach</h2>
            <div className="flex flex-col md:flex-row justify-center gap-10">
                {steps.map((step) => (
                    <div key={step.title}>
                        <div className="border border-[#800020] w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-white text-[#800020] shadow-md hover:scale-110 transition-transform duration-300">
                            <step.icon size={32} />
                        </div>
                        <p>{step.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Ourapproach;
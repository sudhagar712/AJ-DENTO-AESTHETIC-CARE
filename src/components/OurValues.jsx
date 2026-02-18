import React from 'react';

const values = [
    {
        title: "Precision Over Assumption",
        description: "We diagnose before we decide. Every treatment is backed by structured assessment and digital clarity."
    },
    {
        title: "Protection Before Procedure",
        description: "Prevention is not an afterthought. It is the foundation."
    },
    {
        title: "Clarity in Communication",
        description: "Patients deserve to understand their condition before committing to intervention."
    },
    {
        title: "Consistency in Standards",
        description: "Whether today or in future locations, our systems remain disciplined and structured."
    },
    {
        title: "Long-Term Thinking",
        description: "Our goal is not short-term fixes. It is sustainable oral health."
    }
];

const OurValues = () => {
    return (
        <section className="py-24 text-black">
            <div className="max-w-5xl mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="mb-20 text-center">

                    <h2 className="text-4xl md:text-5xl font-serif text-white">
                        Our Values
                    </h2>
                    <div className="w-24 h-[1px] bg-white/20 mx-auto mt-8"></div>
                </div>

                {/* Values Grid - Vertical Blocks */}
                <div className="space-y-16">
                    {values.map((item, index) => (
                        <div key={index} className="group relative pl-8 md:pl-12 border-l border-white/10 hover:border-[#D4AF37] transition-colors duration-500">

                            {/* Number for Hierarchy */}
                            <span className="absolute -left-[1.5rem] md:-left-[2rem] top-0 text-xs text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono">
                                0{index + 1}
                            </span>

                            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 font-light text-lg leading-relaxed max-w-2xl">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurValues;

import React, { useEffect, useState, useRef } from 'react';
import { Shield, Star, Users, MapPin, Activity } from 'lucide-react';

const statsData = [
    {
        id: 1,
        value: 1000,
        suffix: '+',
        label: 'Consultations',
        icon: Users,
    },
    {
        id: 2,
        value: 500,
        suffix: '+',
        label: 'Restorative Cases',
        icon: Activity,
    },
    {
        id: 3,
        value: 300,
        suffix: '+',
        label: 'Alignment Cases',
        icon: Shield,
    },
    {
        id: 4,
        isText: true,
        mainText: 'Serving Families',
        subText: 'Across Anna Nagar',
        icon: MapPin,
    },
    {
        id: 5,
        isText: true,
        mainText: 'Consistently High',
        subText: 'Satisfaction Ratings',
        icon: Star,
    },
];

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(end * easeOutQuart));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return <span ref={countRef}>{count.toLocaleString()}</span>;
};

const Stats = () => {
    return (
        <section className="relative py-20 lg:py-32 bg-transparent text-white overflow-hidden">

        

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

                {/* Header Text (Optional context) */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">
                        Impact by the Numbers
                    </h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {statsData.map((stat) => (
                        <div
                            key={stat.id}
                            className={`relative group p-8 rounded-2xl border border-white/10 bg-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] 
                                ${stat.id <= 3 ? 'lg:col-span-2' : 'lg:col-span-3'} 
                                ${stat.id === 5 ? 'md:col-span-2 lg:col-span-3' : ''}
                            `}
                        >
                            {/* Faint Watermark */}
                            <div className="absolute right-4 bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 transform group-hover:scale-110">
                                <Shield className="w-32 h-32 md:w-40 md:h-40" />
                            </div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                <div className="p-4 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] mb-2 group-hover:bg-[#D4AF37] group-hover:text-[#4D0013] transition-colors duration-300">
                                    <stat.icon className="w-8 h-8 md:w-10 md:h-10" />
                                </div>

                                {stat.isText ? (
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                            {stat.mainText}
                                        </h3>
                                        <p className="text-[#D4AF37] font-medium tracking-wide uppercase text-sm md:text-base">
                                            {stat.subText}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg flex items-baseline gap-1">
                                            <Counter end={stat.value} />
                                            <span className="text-[#D4AF37] text-4xl md:text-5xl">{stat.suffix}</span>
                                        </div>
                                        <p className="text-gray-300 font-medium text-lg md:text-xl mt-2 border-t border-white/10 pt-4 w-full">
                                            {stat.label}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
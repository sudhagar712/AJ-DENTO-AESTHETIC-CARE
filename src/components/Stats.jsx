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
        <section className="relative py-24 lg:py-32 overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

            {/* Lighting effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-[#D4AF37]/10 blur-[100px] rounded-full -z-10"></div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20 space-y-4">
                    <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm animate-fade-in">Our Impact</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-sm">
                        Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Numbers</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
                    {statsData.map((stat) => (
                        <div
                            key={stat.id}
                            className={`group relative overflow-hidden p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)]
                                ${stat.id <= 3 ? 'lg:col-span-2' : 'md:col-span-1 lg:col-span-3'} 
                                ${stat.id === 5 ? 'md:col-span-2 lg:col-span-3' : ''}
                            `}
                        >
                            {/* Hover Gradient Shine */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon Background */}
                            <div className="absolute -right-4 -top-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500 rotate-12 scale-150">
                                <stat.icon size={120} />
                            </div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-4 h-full justify-between">
                                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#806a15] text-[#4d0013] shadow-lg shadow-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon className="w-7 h-7" />
                                </div>

                                {stat.isText ? (
                                    <div className="flex flex-col items-center gap-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                            {stat.mainText}
                                        </h3>
                                        <div className="h-px w-12 bg-white/20 my-1"></div>
                                        <p className="text-[#D4AF37] font-medium tracking-wide uppercase text-xs md:text-sm">
                                            {stat.subText}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-start justify-center gap-0.5 font-bold text-white drop-shadow-md">
                                            <span className="text-5xl md:text-6xl tracking-tight">
                                                <Counter end={stat.value} />
                                            </span>
                                            <span className="text-[#D4AF37] text-3xl md:text-4xl mt-1">{stat.suffix}</span>
                                        </div>
                                        <p className="text-gray-300 font-medium text-sm md:text-base mt-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
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
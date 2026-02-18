import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        text: "I was always afraid of the dentist, but AJ Dento changed that completely. The team is so gentle and professional. My smile has never looked better!",
        rating: 5,
        role: "Regular Patient",
        initials: "SJ"
    },
    {
        id: 2,
        name: "Michael Chen",
        text: "Incredible attention to detail. I had a complex root canal procedure, and I felt absolutely no pain. State-of-the-art facility indeed.",
        rating: 5,
        role: "Implant Patient",
        initials: "MC"
    },
    {
        id: 3,
        name: "Priya Sharma",
        text: "The aesthetic results are beyond my expectations. Dr. AJ helps you understand every step. Truly the best dental clinic in Anna Nagar.",
        rating: 5,
        role: "Cosmetic Dentistry",
        initials: "PS"
    },
    {
        id: 4,
        name: "David Thompson",
        text: "Brought my kids here and they actually enjoyed the visit! The staff is wonderful with children. Highly recommended for families.",
        rating: 5,
        role: "Parent",
        initials: "DT"
    },
    {
        id: 5,
        name: "Anita Raj",
        text: "Professional, clean, and very welcoming. The Invisalign treatment was smooth and effective. Thank you for my new smile!",
        rating: 5,
        role: "Orthodontics",
        initials: "AR"
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            let newItemsPerPage = 1;
            if (window.innerWidth >= 1024) {
                newItemsPerPage = 3;
            } else if (window.innerWidth >= 768) {
                newItemsPerPage = 2;
            }
            setItemsPerPage(newItemsPerPage);

            // Ensure we don't show empty space if resizing from small layout (high index) to large layout (lower max index)
            setCurrentIndex((prev) => {
                const maxIndex = testimonials.length - newItemsPerPage;
                return Math.min(prev, maxIndex < 0 ? 0 : maxIndex);
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = testimonials.length - itemsPerPage;
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = testimonials.length - itemsPerPage;
            return prevIndex <= 0 ? maxIndex : prevIndex - 1;
        });
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [itemsPerPage]);

    return (
        <section className="py-20 lg:py-32 relative overflow-hidden">
           
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-[#D4AF37] font-bold tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#4D0013]">
                        What Our Patients Say
                    </h2>
                    <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Your smile is our greatest reward. Hear from those who have experienced the AJ Dento difference.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Nav Arrows - Desktop positioned outside, Mobile inside/overlay */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg text-[#4D0013] hover:bg-[#4D0013] hover:text-white transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg text-[#4D0013] hover:bg-[#4D0013] hover:text-white transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Slider Track Wrapper */}
                    <div className="overflow-hidden py-10 -my-10 px-2 -mx-2">
                        {/* Track */}
                        <div
                            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0 px-4"
                                    style={{ width: `${100 / itemsPerPage}%` }}
                                >
                                    <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 h-full border border-gray-100 flex flex-col relative group">

                                        {/* Quote Icon Watermark */}
                                        <div className="absolute top-6 right-8 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/30 transition-colors duration-500">
                                            <Quote className="w-16 h-16 fill-current rotate-180" />
                                        </div>

                                        {/* Rating */}
                                        <div className="flex gap-1 mb-6 text-[#D4AF37]">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-current" />
                                            ))}
                                        </div>

                                        {/* Content */}
                                        <p className="text-gray-600 leading-relaxed text-lg mb-8 flex-grow italic relative z-10">
                                            "{testimonial.text}"
                                        </p>

                                        {/* User Info */}
                                        <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4D0013] to-[#800020] flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                                                {testimonial.initials}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#4D0013] text-lg">{testimonial.name}</h4>
                                                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wide">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicators */}
                    <div className="flex justify-center gap-2 mt-8 lg:mt-12">
                        {Array.from({ length: testimonials.length - itemsPerPage + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`transition-all duration-300 rounded-full h-2.5 ${currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-2.5 bg-gray-300 hover:bg-[#D4AF37]/50'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;
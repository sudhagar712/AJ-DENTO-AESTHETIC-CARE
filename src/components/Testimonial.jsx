import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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

            // Adjust current index to prevent overflow when resizing
            setCurrentIndex(prev => {
                const maxIdx = testimonials.length - newItemsPerPage;
                return Math.min(prev, maxIdx < 0 ? 0 : maxIdx);
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? maxIndex : prevIndex - 1
        );
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(interval);
    }, [itemsPerPage, maxIndex]);

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-50">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#4D0013]/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-16 lg:mb-20 space-y-4">
                    <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm animate-fade-in">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#4D0013] drop-shadow-sm">
                        Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B5952F]">Smiles</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                        Real experiences from our valued patients. Discover why AJ Dento is the trusted choice for dental care.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">

                    {/* Navigation Buttons (Desktop: Outside, Mobile: Hidden/Bottom) */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center text-[#4D0013] hover:bg-[#4D0013] hover:text-white hover:scale-110 transition-all duration-300 group focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center text-[#4D0013] hover:bg-[#4D0013] hover:text-white hover:scale-110 transition-all duration-300 group focus:outline-none"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Slider Wrapper */}
                    <div className="overflow-hidden px-2 -mx-2 pb-12 -mb-12"> {/* Padding Bottom for shadow */}
                        <div
                            className="flex transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0 px-3 lg:px-4"
                                    style={{ width: `${100 / itemsPerPage}%` }}
                                >
                                    <div className="h-full bg-white rounded-3xl p-8 lg:p-10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 hover:border-[#D4AF37]/30 group flex flex-col relative transform hover:-translate-y-2">

                                        {/* Large Quote Mark */}
                                        <div className="absolute top-6 right-8 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 transition-colors duration-500 scale-150 transform origin-top-right">
                                            <Quote size={64} fill="currentColor" className="rotate-180" />
                                        </div>

                                        {/* Rating Stars */}
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} size={18} className="fill-[#D4AF37] text-[#D4AF37] drop-shadow-sm" />
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        <blockquote className="text-gray-600 leading-relaxed text-lg mb-8 flex-grow font-light italic relative z-10">
                                            "{testimonial.text}"
                                        </blockquote>

                                        {/* Author Profile */}
                                        <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                                            {/* Avatar / Initials */}
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4D0013] to-[#800020] p-0.5 shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300">
                                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                                    <span className="text-[#4D0013] font-bold text-lg">{testimonial.initials}</span>
                                                </div>
                                            </div>

                                            <div>
                                                <cite className="not-italic font-bold text-[#4D0013] text-lg block mb-0.5">
                                                    {testimonial.name}
                                                </cite>
                                                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider block">
                                                    {testimonial.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-8 lg:mt-12">
                        {Array.from({ length: Math.max(1, testimonials.length - itemsPerPage + 1) }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`transition-all duration-300 rounded-full h-3 ${currentIndex === idx ? 'w-10 bg-[#D4AF37] shadow-md scale-110' : 'w-3 bg-gray-300 hover:bg-[#D4AF37]/40'
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
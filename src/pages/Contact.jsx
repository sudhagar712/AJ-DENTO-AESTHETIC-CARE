import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Loader2, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        concern: '',
        preferredTime: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Consultation request sent!');
            setFormData({ name: '', phone: '', concern: '', preferredTime: '' });
        }, 1500);
    };

    return (
        <div className="font-sans">
            {/* --- Premium Banner Section --- */}
            <div className="relative h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden bg-black">

                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 transform scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center mt-12">
                    <div className="flex flex-col items-center justify-center space-y-4">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/10 backdrop-blur-sm mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                            <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Priority Booking</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] tracking-tight drop-shadow-2xl">
                            Contact Us
                        </h1>

                        <div className="text-gray-300 text-sm md:text-base font-medium flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                            <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
                            <span className="text-[#D4AF37]">•</span>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Main Content Section --- */}
            <div className="py-20 lg:py-28 bg-white relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-bl-[200px] -z-10"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* --- Left Side: High Impact Copy --- */}
                        <div className="space-y-12 pt-10">

                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-6xl font-extrabold text-[#4D0013] leading-tight">
                                    You Have <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B5952F]">Two Choices.</span>
                                </h2>

                                <div className="space-y-4">
                                    <p className="text-xl md:text-2xl text-gray-700 font-medium border-l-4 border-[#D4AF37] pl-6 py-1">
                                        Wait until discomfort forces action.
                                    </p>
                                    <p className="text-xl md:text-2xl text-[#4D0013] font-bold border-l-4 border-gray-200 pl-6 py-1">
                                        Or take control before it does.
                                    </p>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="grid grid-cols-1 gap-6 pt-8">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-[#FFF8E1] rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#4D0013] text-lg">Zero Waiting Time</h4>
                                        <p className="text-sm text-gray-500">For scheduled priority appointments</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-[#FFF8E1] rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#4D0013] text-lg">Detailed Consultation</h4>
                                        <p className="text-sm text-gray-500">Comprehensive analysis & treatment plan</p>
                                    </div>
                                </div>
                            </div>

                            {/* Location Snippet */}
                            <div className="flex items-center gap-3 text-gray-500 text-sm mt-8 border-t border-gray-100 pt-8">
                                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                                <span>No. 12, 1st Avenue, Anna Nagar East, Chennai</span>
                            </div>

                        </div>

                        {/* --- Right Side: Revenue Focused Form --- */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-500 ring-1 ring-gray-100/50">
                            {/* Texture */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-[80px] pointer-events-none"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-[#4D0013] mb-2">Priority Booking</h3>
                                <p className="text-gray-500 mb-8 text-sm">Fill details below to skip the queue.</p>

                                <form onSubmit={handleSubmit} className="space-y-5">

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] transition-all font-medium"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your Phone Number"
                                            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] transition-all font-medium"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Concern</label>
                                        <textarea
                                            name="concern"
                                            value={formData.concern}
                                            onChange={handleChange}
                                            placeholder="Describe your dental concern..."
                                            rows="3"
                                            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] transition-all resize-none font-medium"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Preferred Time</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="preferredTime"
                                                value={formData.preferredTime}
                                                onChange={handleChange}
                                                placeholder="e.g. Morning, Evening, Tomorrow"
                                                className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] transition-all font-medium"
                                            />
                                            <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 px-6 bg-[#4D0013] hover:bg-[#3a000e] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Secure My Consultation
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Direct Contact Options */}
                                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col items-center space-y-3">
                                    <a href="tel:+918098449999" className="flex items-center gap-2 text-[#4D0013] font-bold text-lg hover:text-[#D4AF37] transition-colors">
                                        <Phone className="w-5 h-5 fill-current" />
                                        Call Now +91 80984 49999
                                    </a>

                                    <a
                                        href="https://wa.me/918098449999?text=Hi,%20I%20would%20like%20to%20secure%20a%20consultation."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors bg-green-50 px-4 py-2 rounded-full"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
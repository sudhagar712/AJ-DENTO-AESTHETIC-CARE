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
                            <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Enquiry Form</span>
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
            <div className="py-20 lg:py-28 relative bg-black">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-bl-[300px] -z-10 blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* --- Left Side: Minimalist Premium Copy --- */}
                        <div className="space-y-10 pt-10">

                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight tracking-tight">
                                    Book Your <span className="text-[#D4AF37] italic">Visit</span>
                                </h2>

                                <p className="text-lg md:text-xl text-gray-300 font-light max-w-lg leading-relaxed">
                                    Your journey to a confident smile begins here. Schedule your consultation with our expert team and experience world-class dental care.
                                </p>
                            </div>

                            {/* Trust Indicators - Simplified */}
                            <div className="grid grid-cols-1 gap-8 pt-4">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-all duration-300">
                                        <CheckCircle className="w-5 h-5 text-[#D4AF37] group-hover:text-[#4D0013]" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-white text-lg mb-1">Priority Attention</h4>
                                        <p className="text-sm text-gray-400 font-light">Zero waiting time for scheduled visits</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-all duration-300">
                                        <CheckCircle className="w-5 h-5 text-[#D4AF37] group-hover:text-[#4D0013]" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-white text-lg mb-1">Tailored Care</h4>
                                        <p className="text-sm text-gray-400 font-light">Personalized treatment plans for you</p>
                                    </div>
                                </div>
                            </div>

                            {/* Simple Divider */}
                            <div className="h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-50"></div>
                        </div>

                        {/* --- Right Side: Revenue Focused Form --- */}
                        <div className="relative group perspective-1000">
                            {/* Decorative Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#4D0013] rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative bg-black/70 rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/10 overflow-hidden backdrop-blur-xl">

                                {/* Inner Texture */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-3xl font-serif text-white mb-2">Enquiry Form</h3>
                                            <p className="text-gray-400 text-sm font-light tracking-wide">Begin your journey to a perfect smile.</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-[#4D0013]/30 border border-[#D4AF37]/20 flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-[#D4AF37]" />
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">

                                        <div className="group/input">
                                            <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 ml-1">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your full name"
                                                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300 hover:bg-white/[0.07]"
                                                required
                                            />
                                        </div>

                                        <div className="group/input">
                                            <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 ml-1">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter your contact number"
                                                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300 hover:bg-white/[0.07]"
                                            />
                                        </div>

                                        <div className="group/input">
                                            <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 ml-1">Concern</label>
                                            <textarea
                                                name="concern"
                                                value={formData.concern}
                                                onChange={handleChange}
                                                placeholder="How can we help you?"
                                                rows="3"
                                                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300 resize-none hover:bg-white/[0.07]"
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="group/input">
                                            <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 ml-1">Preferred Time</label>
                                            <input
                                                type="text"
                                                name="preferredTime"
                                                value={formData.preferredTime}
                                                onChange={handleChange}
                                                placeholder="e.g. Morning, Tomorrow Evening"
                                                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300 hover:bg-white/[0.07]"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-5 px-6 bg-gradient-to-r from-[#D4AF37] to-[#B5952F] text-[#4D0013] font-bold text-lg rounded-xl shadow-[0_4px_14px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Processing Request...
                                                </>
                                            ) : (
                                                <>
                                                    Secure My Consultation
                                                    <CheckCircle className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    {/* Direct Contact Options */}
                                    <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <a
                                            href="tel:+918098449999"
                                            className="flex items-center justify-center gap-2 text-white font-medium py-3 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                                        >
                                            <Phone className="w-4 h-4 text-[#D4AF37]" />
                                            +91 80984 49999
                                        </a>

                                        <a
                                            href="https://wa.me/918098449999?text=Hi,%20I%20would%20like%20to%20secure%20a%20consultation."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 text-white font-medium py-3 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 hover:border-[#25D366]/30 transition-all"
                                        >
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
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
                {/* --- Local Signal Section (SEO + Map) --- */}
                <div className="mt-24 max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#4D0013] mb-4">Visit AJ Dento Aesthetic Care – Anna Nagar</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Experience world-class dental care in the heart of Chennai. We are conveniently located in Anna Nagar East.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                        {/* Left Column: Contact Details & Hours */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
                                    <MapPin className="w-5 h-5" /> Location
                                </h3>
                                <address className="not-italic text-gray-700 leading-relaxed text-lg">
                                    <strong className="block text-gray-900">AJ Dento Aesthetic Care</strong>
                                    No. 12, 1st Avenue, L Block,<br />
                                    Anna Nagar East,<br />
                                    Chennai, Tamil Nadu 600102
                                </address>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
                                    <Clock className="w-5 h-5" /> Operating Hours
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                                        <span>Monday - Saturday</span>
                                        <span className="font-semibold">10:00 AM - 8:30 PM</span>
                                    </li>
                                    <li className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                                        <span>Sunday</span>
                                        <span className="font-semibold text-[#4D0013]">By Appointment Only</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
                                    <Phone className="w-5 h-5" /> Contact
                                </h3>
                                <div className="flex flex-col gap-2">
                                    <a href="tel:+918098449999" className="text-lg font-medium text-gray-900 hover:text-[#D4AF37] transition-colors">
                                        +91 80984 49999
                                    </a>
                                    <a href="mailto:contact@ajdento.com" className="text-lg font-medium text-gray-900 hover:text-[#D4AF37] transition-colors">
                                        contact@ajdento.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Map Embed */}
                        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.175116744383!2d80.22129727409252!3d13.092089512316496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526431d49b77f9%3A0xcbbd307d145ba8fa!2s2%2F12%2C%201st%20Ave%2C%20L%20Block%2C%20Annanagar%20East%2C%20Chennai%2C%20Tamil%20Nadu%20600102!5e0!3m2!1sen!2sin!4v1708256306000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) brightness(0.9)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="AJ Dento Aesthetic Care Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Structured Data for Local SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Dentist",
                        "name": "AJ Dento Aesthetic Care",
                        "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
                        "url": "https://ajdento.com",
                        "telephone": "+918098449999",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "No. 12, 1st Avenue, L Block, Anna Nagar East",
                            "addressLocality": "Chennai",
                            "addressRegion": "TN",
                            "postalCode": "600102",
                            "addressCountry": "IN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 13.0920895,
                            "longitude": 80.2212973
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday"
                                ],
                                "opens": "10:00",
                                "closes": "20:30"
                            }
                        ],
                        "sameAs": [
                            "https://www.facebook.com/ajdento",
                            "https://www.instagram.com/ajdento"
                        ]
                    })}
                </script>
            </div>
        </div>
    );
};

export default Contact;
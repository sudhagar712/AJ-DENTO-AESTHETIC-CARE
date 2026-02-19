import React, { useState } from 'react';
import { Loader2, CheckCircle, Clock, Phone } from 'lucide-react';

const ContactForm = () => {
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

        const message = `New Consultation Request%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AConcern: ${formData.concern}%0APreferred Time: ${formData.preferredTime}`;
        const whatsappUrl = `https://wa.me/918098449999?text=${message}`;

        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
            setFormData({ name: '', phone: '', concern: '', preferredTime: '' });
        }, 1500);
    };

    return (
        <div className="relative group perspective-1000">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#4D0013] rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-[#1a1a1a] rounded-[2rem] p-8 md:p-12 shadow-2xl border border-white/10 overflow-hidden backdrop-blur-xl">

                {/* Inner Texture */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-3xl font-serif text-white mb-2">🗓️ Book an Appointment</h3>

                        </div>
                        <div className="w-12 h-12 rounded-full bg-[#4D0013]/30 border border-[#D4AF37]/20 flex items-center justify-center">
                            <Clock className="w-6 h-6 text-[#D4AF37]" />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name Input */}
                        <div className="relative group/input">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder=" "
                                className="peer w-full px-6 py-4 rounded-xl bg-transparent border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-all duration-300"
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-4 top-4 text-gray-400 text-base transition-all duration-300 bg-[#1a1a1a] px-2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-[1.6rem] peer-focus:text-xs peer-focus:text-[#D4AF37] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-translate-y-[1.6rem] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#D4AF37] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:tracking-widest pointer-events-none"
                            >
                                Name
                            </label>
                        </div>

                        {/* Phone Input */}
                        <div className="relative group/input">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder=" "
                                className="peer w-full px-6 py-4 rounded-xl bg-transparent border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-all duration-300"
                            />
                            <label
                                htmlFor="phone"
                                className="absolute left-4 top-4 text-gray-400 text-base transition-all duration-300 bg-[#1a1a1a] px-2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-[1.6rem] peer-focus:text-xs peer-focus:text-[#D4AF37] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-translate-y-[1.6rem] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#D4AF37] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:tracking-widest pointer-events-none"
                            >
                                Phone
                            </label>
                        </div>

                        {/* Concern Input */}
                        <div className="relative group/input">
                            <textarea
                                name="concern"
                                id="concern"
                                value={formData.concern}
                                onChange={handleChange}
                                placeholder=" "
                                rows="3"
                                className="peer w-full px-6 py-4 rounded-xl bg-transparent border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-all duration-300 resize-none"
                                required
                            ></textarea>
                            <label
                                htmlFor="concern"
                                className="absolute left-4 top-4 text-gray-400 text-base transition-all duration-300 bg-[#1a1a1a] px-2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-[1.6rem] peer-focus:text-xs peer-focus:text-[#D4AF37] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-translate-y-[1.6rem] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#D4AF37] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:tracking-widest pointer-events-none"
                            >
                                Concern
                            </label>
                        </div>

                        {/* Preferred Time Input */}
                        <div className="relative group/input">
                            <input
                                type="text"
                                name="preferredTime"
                                id="preferredTime"
                                value={formData.preferredTime}
                                onChange={handleChange}
                                placeholder=" "
                                className="peer w-full px-6 py-4 rounded-xl bg-transparent border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-[#D4AF37] transition-all duration-300"
                            />
                            <label
                                htmlFor="preferredTime"
                                className="absolute left-4 top-4 text-gray-400 text-base transition-all duration-300 bg-[#1a1a1a] px-2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-[1.6rem] peer-focus:text-xs peer-focus:text-[#D4AF37] peer-focus:uppercase peer-focus:font-bold peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-translate-y-[1.6rem] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#D4AF37] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:tracking-widest pointer-events-none"
                            >
                                Preferred Time (e.g. Morning)
                            </label>
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
    );
};

export default ContactForm;

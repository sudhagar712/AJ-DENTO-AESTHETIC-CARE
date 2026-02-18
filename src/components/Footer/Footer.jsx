import logo from '../../assets/logo.png';
import { Phone, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Footer() {

    return (

        <footer className=" text-white shadow-lg border-t-10 border-white mt-4">

            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    {/* Logo Section */}
                    {/* Removed brightness-0 invert to show original logo colors on light background */}
                    <Link to="/">
                        <img
                            src={logo}
                            alt="AJ Dento Aesthetic"
                            className="h-20 w-auto object-contain mb-6 "
                        />
                    </Link>

                    <p className="mt-4 text-white text-sm leading-relaxed font-light">
                        Crafting Smiles with Precision. <br />
                        Premium dental care focused on early diagnosis,
                        precision treatment, and long-term oral health.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-sm uppercase text-[#4D0013] font-bold tracking-widest mb-6">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link to="/" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Home</Link>
                        </li>
                        
                        <li>
                            <Link to="/services" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Expertise */}
                <div>
                    <h3 className="text-sm uppercase text-[#4D0013] font-bold tracking-widest mb-6">
                        Expertise
                    </h3>

                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link to="/services/root-canal" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Root Canal Treatment</Link>
                        </li>
                        <li>
                            <Link to="/services/dental-implants" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Dental Implants</Link>
                        </li>
                        <li>
                            <Link to="/services/invisalign" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Invisalign</Link>
                        </li>
                        <li>
                            <Link to="/services/cosmetic-dentistry" className="hover:text-[#D4AF37] hover:translate-x-1 transition-all inline-block">Cosmetic Dentistry</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-sm uppercase text-[#4D0013] font-bold tracking-widest mb-6">
                        Contact
                    </h3>

                    <div className="space-y-4 text-sm font-light">
                        <div className="flex items-start gap-3 group cursor-pointer">
                            <Phone size={18} className="text-[#D4AF37] mt-1" />
                            <span className="group-hover:text-[#4D0013] transition-colors">+91 80984 49999</span>
                        </div>

                        <div className="flex items-start gap-3 group cursor-pointer">
                            <MapPin size={18} className="text-[#D4AF37] mt-1" />
                            <span className="group-hover:text-[#4D0013] transition-colors">Anna Nagar, Chennai</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-300">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-center items-center text-sm text-yellow-500 font-light gap-4">

                    <p>
                        © 2026 AJ Dento Aesthetic Care. All rights reserved.
                    </p>

                   

                </div>
            </div>

        </footer>

    )

}

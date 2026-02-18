import { Phone, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {

    return (

        <footer className="bg-yellow-100 text-black">

            {/* Top Section */}

            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>

                    <h2 className="text-2xl font-semibold tracking-wide">

                        AJ Dento Aesthetic Care

                    </h2>

                    <p className="mt-4 text-gray-400 text-sm leading-relaxed">

                        Crafting Smiles with Precision.

                        Premium dental care focused on early diagnosis,
                        precision treatment, and long-term oral health.

                    </p>

                </div>


                {/* Quick Links */}

                <div>

                    <h3 className="text-sm uppercase text-gray-400 mb-4">

                        Quick Links

                    </h3>

                    <ul className="space-y-2 text-sm">

                        <li className="hover:text-white cursor-pointer">

                            Home

                        </li>

                        <li className="hover:text-white cursor-pointer">

                            About

                        </li>

                        <li className="hover:text-white cursor-pointer">

                            Services

                        </li>

                        <li className="hover:text-white cursor-pointer">

                            Contact

                        </li>

                    </ul>

                </div>


                {/* Services */}

                <div>

                    <h3 className="text-sm uppercase text-gray-400 mb-4">

                        Expertise

                    </h3>

                    <ul className="space-y-2 text-sm">

                        <li>Root Canal Treatment</li>

                        <li>Dental Implants</li>

                        <li>Invisalign</li>

                        <li>Cosmetic Dentistry</li>

                    </ul>

                </div>


                {/* Contact */}

                <div>

                    <h3 className="text-sm uppercase text-gray-400 mb-4">

                        Contact

                    </h3>


                    <div className="space-y-3 text-sm">


                        <div className="flex items-center gap-2">

                            <Phone size={16} />

                            <span>+91 80984 49999</span>

                        </div>


                        <div className="flex items-center gap-2">

                            <MapPin size={16} />

                            <span>Anna Nagar, Chennai</span>

                        </div>


                        <div className="flex items-center gap-2">

                            <MessageCircle size={16} />

                            <span>WhatsApp Consultation</span>

                        </div>


                    </div>


                </div>


            </div>


            {/* Bottom */}

            <div className="border-t border-gray-800">

                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">


                    <p>

                        © 2026 AJ Dento Aesthetic Care.
                        All rights reserved.

                    </p>


                    <p>

                        Designed for precision care.

                    </p>


                </div>

            </div>


        </footer>

    )

}

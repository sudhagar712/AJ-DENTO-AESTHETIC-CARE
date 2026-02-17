import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-transparent backdrop-blur-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src={logo} alt="AJ Dento Aesthetic" className="h-14 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-8 bg-yellow-100 text-black rounded-full p-1 pl-6 shadow-lg border border-white/10">
              <div className="flex items-baseline space-x-6 mr-4">
                <a href="#" className="text-black hover:text-red-500 text-sm font-medium transition-colors duration-300">Home</a>
                <a href="#" className="text-black hover:text-red-500 text-sm font-medium transition-colors duration-300">About</a>
                <a href="#" className="text-black hover:text-red-500 text-sm font-medium transition-colors duration-300">Gallery</a>
                <a href="#" className="text-black hover:text-red-500 text-sm font-medium transition-colors duration-300">Blog</a>
                <a href="#" className="text-black hover:text-red-500 text-sm font-medium transition-colors duration-300">Contact</a>
              </div>
              <a href="#" className="bg-white text-[#4D0013] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-md">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Book Appointment
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#D4AF37] hover:text-white outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Drawer) */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-[#4D0013] border-b border-[#D4AF37]/20`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <a href="#" className="text-white block px-3 py-4 border-b border-white/5">Home</a>
          <a href="#" className="text-gray-300 block px-3 py-4 border-b border-white/5">About</a>
          <a href="#" className="text-gray-300 block px-3 py-4 border-b border-white/5">Gallery</a>
          <a href="#" className="text-gray-300 block px-3 py-4 border-b border-white/5">Blog</a>
          <a href="#" className="text-gray-300 block px-3 py-4 border-b border-white/5">Contact</a>
          <div className="py-4 flex  justify-center ">
            <a href="#" className="bg-white  text-[#4D0013] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-md">
              <svg viewBox="0 0 24 24" className="w-5 h-5  fill-green-500" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
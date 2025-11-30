"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className={`
            pointer-events-auto
            flex items-center justify-between
            pl-6 pr-2 py-2 
            rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${scrolled 
                ? 'bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-[90%] md:w-[600px] h-14' 
                : 'bg-white/40 backdrop-blur-md border border-white/20 w-[95%] md:w-[800px] h-16'}
        `}>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#4D9FFF] to-cyan-300 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className={`font-bold tracking-tight text-lg transition-colors text-gray-900`}>
                    myPov
                </span>
            </div>

            <div className={`hidden md:flex items-center gap-6 text-sm font-medium transition-opacity duration-300 ${scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 text-gray-600'}`}>
                <a href="#features" className="hover:text-black transition-colors">Features</a>
                <a href="#showcase" className="hover:text-black transition-colors">Showcase</a>
                <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            </div>

            <button className="bg-black text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 shadow-xl shadow-black/10">
                <span>Download</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
            </button>
        </nav>
    </div>
  );
};

export default Navbar;
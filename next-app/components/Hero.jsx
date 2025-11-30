"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BRAND_GRADIENT = "bg-gradient-to-br from-[#E2F1FF] via-[#FFFFFF] to-[#FFEFBA]"; 
const MOCKUP_IMG = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop"; 

const Hero = () => {
    const { scrollY } = useScroll();
    const yPhone = useTransform(scrollY, [0, 500], [0, -50]);
    
    return (
        // Added pt-48 to push content down significantly to avoid navbar overlap
        <section className={`relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden ${BRAND_GRADIENT} pt-48 pb-20`}>
            {/* Organic Background Shapes */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-300/20 blur-[100px] rounded-full mix-blend-multiply animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-orange-200/40 blur-[100px] rounded-full mix-blend-multiply animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                {/* Optimized Layout: Center content vertically and horizontally */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-y-[10rem] lg:gap-x-[8rem] lg:gap-y-0">
                    
                    {/* Left: Text Content - Scaled Down */}
                    <div className="flex-1 max-w-xl text-center lg:text-left z-20">

                        <motion.h1 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.05] mb-6 hero-font"
                        >
                          Edit Your <br />
                          <span className="text-[#4D9FFF]">Point of View.</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            Create cinematic photos with AI-powered editing, background removal, and smart text that blends perfectly into your scene.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
                        >
                            <a href="/" tabIndex="0"><img className="apple-download" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></a>
                            <a href="/" tabIndex="0"><img className="android-download" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></a>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             transition={{ delay: 0.6 }}
                             className="flex items-center justify-center lg:justify-start gap-3"
                        >
                            <div className="flex -space-x-2">
                                {[1,2,3,4].map((i) => (
                                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover"/>
                                  </div>
                                ))}
                              </div>
                              <div className="flex flex-col items-center lg:items-start">
                                <div className="flex items-center gap-1 mb-1" aria-hidden="true">
                                  <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.566L19.335 23 12 19.56 4.665 23l1.635-7.684L.6 9.75l7.732-1.732L12 .587z"/></svg>
                                  <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.566L19.335 23 12 19.56 4.665 23l1.635-7.684L.6 9.75l7.732-1.732L12 .587z"/></svg>
                                  <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.566L19.335 23 12 19.56 4.665 23l1.635-7.684L.6 9.75l7.732-1.732L12 .587z"/></svg>
                                  <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.566L19.335 23 12 19.56 4.665 23l1.635-7.684L.6 9.75l7.732-1.732L12 .587z"/></svg>
                                  <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.566L19.335 23 12 19.56 4.665 23l1.635-7.684L.6 9.75l7.732-1.732L12 .587z"/></svg>
                                </div>
                                <div className="text-sm font-semibold text-gray-700">
                                  Loved by 50,000+ Creators
                                </div>
                              </div>
                        </motion.div>
                    </div>

                    {/* Right: Phone Mockup (iPhone 17 Pro Max Style - Scaled Down) */}
                    <motion.div 
                        style={{ y: yPhone }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex-1 relative w-full max-w-[300px] flex justify-center"
                    >
                         {/* iPhone 17 Pro Max Container (Smaller Dimensions: 300x600) */}
                         <div className="relative w-[300px] h-[600px] bg-black rounded-[42px] border-[5px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-black/5 z-20">
                            
                            {/* Dynamic Island */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-50 flex items-center justify-end pr-2 gap-1.5 pointer-events-none">
                                 <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                                 <div className="w-1 h-1 rounded-full bg-[#0f0f0f]"></div>
                            </div>

                            {/* Phone Screen Content */}
                            <img src={MOCKUP_IMG} className="w-full h-full object-cover rounded-[38px]" alt="App Interface" />
                            
                            {/* Floating UI elements removed (loader and action buttons) */}
                         </div>
                         
                         {/* Decorative Glow behind phone */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 blur-[80px] rounded-full -z-10"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

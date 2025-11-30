import React from 'react';

const Footer = () => (
    <footer className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-20">
                {/* Giant Text */}
                <h2 className="text-[15vw] md:text-[12rem] font-black text-gray-100 leading-none select-none tracking-tighter">
                    MYPOV
                </h2>
                
                {/* Floating Content over the Giant Text */}
                <div className="mt-[-8vw] md:mt-[-6rem] relative z-10">
                    <p className="text-2xl md:text-3xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
                        Join 50,000+ creators editing the future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/" tabIndex="0" ><img className="apple-download" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></a>
                        <a href="/" tabIndex="0" ><img className="android-download" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 text-sm text-gray-500">
                <p>© 2025 MyPov Inc.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-black transition-colors">Instagram</a>
                    <a href="#" className="hover:text-black transition-colors">Twitter</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

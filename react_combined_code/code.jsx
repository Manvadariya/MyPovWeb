import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, AnimatePresence, useInView } from 'framer-motion';
import { Download, Sparkles, Check, ChevronRight, Menu, X, Smartphone, Image as ImageIcon, Zap, Layers, Play, Aperture, Wand2, Scissors, Instagram, Twitter, Users, Mail, Phone, MapPin, Send, PlusIcon, MailIcon, PhoneIcon, MapPinIcon, Loader2 } from 'lucide-react';

/**
 * MyPov "Professional" Edition
 * Theme: "Day to Night" (Light Brand Gradient -> Dark Focus Mode)
 * Vibe: Clean, IOS-Style, Tactile, Trustworthy.
 */

// --- Utilities ---
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function getRandomNumberInRange(min, max) {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

// --- UI Components ---

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-gray-900 text-white hover:bg-gray-800 shadow",
    outline: "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    gradient: "bg-gradient-to-r from-[#4D9FFF] to-[#6AB7FF] text-white shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 ml-1",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 text-sm ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

// --- Assets ---
const BRAND_GRADIENT = "bg-gradient-to-br from-[#E2F1FF] via-[#FFFFFF] to-[#FFEFBA]"; 
const MOCKUP_IMG = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop"; 

// --- Components ---

// 1. Navbar
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

// 2. Hero (Scaled for Single-View on Wide Screens)
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

// 4. Feature Section (Golden Ratio: H2 ~5xl / P ~xl)
const FeatureSection = () => {
  return (
    <div id="features" className="w-full flex justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-[95vw] rounded-[45px] bg-black py-20 px-4 sm:px-6 lg:px-8 font-sans text-white scale-[0.87] origin-top">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-16 space-y-6">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-[#58d293]" />
              <span className="text-[#58d293] font-medium tracking-wide">FEATURES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-center leading-tight">
              You don't have to choose between<br className="hidden md:block" />
              cost, time, and quality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* ROW 1 */}
            <div className="bg-[#111] rounded-3xl p-8 flex flex-col items-center justify-between border border-white/10 min-h-[320px]">
              <div className="flex-grow flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-4xl">🧠</div>
              </div>
              <p className="text-gray-400 text-lg font-semibold text-center uppercase tracking-wider">
                Smart Prompts <br />for Perfect Results
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden relative min-h-[320px] group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                alt="Team"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="bg-[#111] rounded-3xl p-10 flex flex-col justify-center border border-white/10 lg:col-span-2 min-h-[320px]">
              <h3 className="text-white font-medium text-2xl mb-2">Generation Speed</h3>
              <div className="text-8xl font-bold tracking-tighter text-white mb-6">80%</div>
              <div className="space-y-2">
                <p className="text-white text-2xl font-bold">Lightning fast iterations.</p>
                <p className="text-gray-400 text-lg">Don't wait for inspiration. Generate variations instantly.</p>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="bg-gradient-to-br from-[#60a5fa] to-[#2563eb] rounded-3xl p-8 flex flex-col justify-center lg:col-span-2 min-h-[260px] relative overflow-hidden shadow-2xl shadow-blue-900/20">
               <div className="absolute right-[-30px] top-8 w-48 opacity-40 mix-blend-overlay rotate-6 pointer-events-none">
                  <div className="bg-white/40 h-28 w-full rounded-lg border border-white/30 backdrop-blur-sm mb-3 transform translate-x-3"></div>
                  <div className="bg-white/40 h-28 w-full rounded-lg border border-white/30 backdrop-blur-sm"></div>
               </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mb-4">
                  <Layers className="w-3 h-3 text-white" />
                  <span className="text-white text-sm font-bold tracking-wider uppercase">Pro Tools</span>
                </div>
                <div className="text-5xl font-bold tracking-tighter text-white mb-4 drop-shadow-sm">Layer Control</div>
                <p className="text-blue-50 text-xl font-medium leading-relaxed max-w-sm">
                  AI isn't perfect, but you are. Edit masks, adjust opacity, and tweak layers manually.
                </p>
              </div>
            </div>

            <div className="bg-[#111] rounded-3xl p-8 flex flex-col items-center justify-between border border-white/10 min-h-[320px]">
              <div className="flex-grow flex items-center justify-center">
                   <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-4xl">🎨</div>
              </div>
              <p className="text-gray-400 text-lg font-semibold text-center uppercase tracking-wider">
                Non-destructive <br />Editing Workflow
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden relative min-h-[320px] group">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Creative Staff"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* ROW 3 */}
            <div className="bg-[#111] rounded-3xl p-8 flex flex-col items-center justify-between border border-white/10 min-h-[320px]">
              <div className="flex-grow flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-serif text-white tracking-widest font-bold">MYPOV</h3>
                  <span className="text-xs tracking-[0.2em] text-gray-400 block mt-1">MOBILE SUITE</span>
                </div>
              </div>
              <p className="text-gray-400 text-lg font-semibold text-center uppercase tracking-wider">
                iOS & Android <br /> Compatible
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden relative min-h-[320px] group">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
                alt="Mobile Workflow"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="bg-white rounded-3xl p-8 flex flex-col justify-center lg:col-span-2 min-h-[260px] text-black shadow-xl shadow-white/5">
              <h3 className="text-slate-900 font-bold text-2xl mb-2 tracking-tight">Workflow Efficiency</h3>
              <div className="text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-900 mb-4">10x</div>
              <div className="space-y-2 border-l-4 border-blue-600 pl-6">
                <p className="text-slate-900 text-2xl font-bold">Faster from Idea to Feed.</p>
                <p className="text-slate-600 font-medium text-lg leading-relaxed">
                  Skip the desktop. Create, edit, and post directly from your phone with studio quality.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Memories Gallery Section (Golden Ratio: H1 ~5xl / P ~xl)
const Photo = ({ src, alt, className, direction, width, height, ...props }) => {
  const [rotation, setRotation] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), springConfig);

  useEffect(() => {
    const randomRotation = getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    mouseX.set(offsetX); 
    mouseY.set(offsetY);
  }

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.1, cursor: "grabbing" }}
      whileHover={{ scale: 1.1, zIndex: 50, cursor: "grab" }}
      whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 600,
        x,
        y,
        rotateX,
        rotateY,
        zIndex: 1,
      }}
      className={cn(className, "relative shrink-0 shadow-2xl rounded-3xl")}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl bg-slate-200 border-4 border-white pointer-events-none">
        <img
          className="h-full w-full object-cover"
          src={src}
          alt={alt}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};

const MemoriesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const animationDelay = 0.2;

  useEffect(() => {
    if (isInView) {
      const visibilityTimer = setTimeout(() => {
        setIsVisible(true);
      }, animationDelay * 1000);

      const animationTimer = setTimeout(() => {
          setIsLoaded(true);
        }, (animationDelay + 0.4) * 1000);

      return () => {
        clearTimeout(visibilityTimer);
        clearTimeout(animationTimer);
      };
    }
  }, [isInView, animationDelay]);

  const photos = [
    { id: 1, x: "-480px", y: "-140px", zIndex: 10, direction: "left", src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop", alt: "Camera Lens" },
    { id: 2, x: "-240px", y: "-140px", zIndex: 9, direction: "right", src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop", alt: "Mountain Landscape" },
    { id: 3, x: "0px", y: "-140px", zIndex: 8, direction: "left", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop", alt: "Water Stream" },
    { id: 4, x: "240px", y: "-140px", zIndex: 7, direction: "right", src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop", alt: "Nature Green" },
    { id: 5, x: "480px", y: "-140px", zIndex: 6, direction: "left", src: "https://images.unsplash.com/photo-1501854140884-074bf6b24363?q=80&w=1000&auto=format&fit=crop", alt: "Beach Sunset" },
    { id: 6, x: "-480px", y: "140px", zIndex: 5, direction: "right", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop", alt: "Food Platter" },
    { id: 7, x: "-240px", y: "140px", zIndex: 4, direction: "left", src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop", alt: "Forest Fog" },
    { id: 8, x: "0px", y: "140px", zIndex: 3, direction: "right", src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000&auto=format&fit=crop", alt: "Deep Woods" },
    { id: 9, x: "240px", y: "140px", zIndex: 2, direction: "left", src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop", alt: "Travel Mountains" },
    { id: 10, x: "480px", y: "140px", zIndex: 1, direction: "right", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop", alt: "Lake Calm" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const photoVariants = {
    hidden: { x: 0, y: 0, opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      x: custom.x,
      y: custom.y,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 18, mass: 1, delay: custom.order * 0.1 },
    }),
  };

  return (
    <div ref={containerRef} id="showcase" className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white relative py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[600px] w-[600px] rounded-full bg-rose-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="text-center max-w-2xl px-6 mb-12 relative z-20">
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
          Rediscover Your Memories
        </h1>
        <p className="mt-6 text-2xl text-gray-600 font-medium">
          Our intelligent platform finds, organizes, and brings your most cherished moments back to life.
        </p>
      </div>

      <div className="relative h-[600px] w-full flex items-center justify-center">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[220px] w-[220px]">
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }}
                  variants={photoVariants}
                  custom={{ x: photo.x, y: photo.y, order: index }}
                >
                  <Photo
                    width={220}
                    height={220}
                    src={photo.src}
                    alt={photo.alt}
                    direction={photo.direction}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// 6. Contact Section (Golden Ratio: H2 ~4xl / P ~lg)
const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSent(true);
    }, 2000);
  };

  return (
    <div id="contact" className={`relative flex min-h-screen w-full items-center justify-center p-4 py-24 bg-white overflow-hidden`}>
      {/* Background Gradient Mesh specific to this section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-pink-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse delay-700"></div>
      </div>

      <div className="mx-auto max-w-5xl w-full scale-[1.0] lg:scale-[1.05] relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-5"
        >
            
            {/* Left Side: Brand & Info */}
            <div className="lg:col-span-2 bg-gray-50/50 p-10 flex flex-col justify-between border-r border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4D9FFF] to-[#FFD1BA]"></div>
                
                <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Get in touch</h3>
                    <p className="text-gray-500 mb-10 leading-relaxed text-lg font-medium">
                        Have a question about the app? Need a custom enterprise plan? We're here to help you create.
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: MailIcon, title: "Email", value: "hello@mypov.app", color: "bg-blue-100 text-blue-600" },
                            { icon: PhoneIcon, title: "Phone", value: "+1 (555) 000-0000", color: "bg-green-100 text-green-600" },
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 group cursor-default"
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color} transition-transform group-hover:scale-110`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.title}</div>
                                    <div className="text-gray-900 font-medium">{item.value}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-12">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Follow Us</div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-gray-600 hover:text-blue-500 hover:border-blue-200 transition-all cursor-pointer">
                            <Twitter className="w-4 h-4" />
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-gray-600 hover:text-pink-500 hover:border-pink-200 transition-all cursor-pointer">
                            <Instagram className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Interactive Form */}
            <div className="lg:col-span-3 p-10 bg-white/80">
                <AnimatePresence mode="wait">
                    {!isSent ? (
                        <motion.form 
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            onSubmit={handleSubmit} 
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>First Name</Label>
                                    <Input placeholder="Jane" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Last Name</Label>
                                    <Input placeholder="Doe" required />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input type="email" placeholder="jane@example.com" required />
                            </div>

                            <div className="space-y-2">
                                <Label>Message</Label>
                                <Textarea placeholder="Tell us about your project..." />
                            </div>

                            <Button 
                                type="submit" 
                                variant="gradient" 
                                className="w-full h-12 text-lg font-bold shadow-blue-200"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                ) : (
                                    <Send className="w-4 h-4 mr-2" />
                                )}
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </motion.form>
                    ) : (
                        <motion.div 
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <Check className="w-10 h-10 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                                <p className="text-gray-500 mt-2 max-w-xs mx-auto">
                                    Thanks for reaching out. We'll get back to you within 24 hours.
                                </p>
                            </div>
                            <Button variant="outline" onClick={() => setIsSent(false)}>
                                Send another
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </motion.div>
      </div>
    </div>
  );
};

// 7. Minimalist Footer
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

// --- Main App ---

const App = () => {
    return (
        <div className="font-outfit text-gray-900 bg-white selection:bg-blue-200 selection:text-blue-900">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&family=Inter:wght@400;500&display=swap');
              @import url('https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double+Ink:wght@100..900&family=Bitcount+Prop+Double+Ink:wght@100..900&family=Comic+Relief:wght@400;700&family=Darumadrop+One&family=Londrina+Shadow&family=Londrina+Solid:wght@100;300;400;900&display=swap');              .font-outfit { font-family: 'Outfit', sans-serif; }
              .font-inter { font-family: 'Inter', sans-serif; }
              /* Hero display font */
              .hero-font { font-family: "Londrina Solid", sans-serif; font-weight: 400; font-style: normal; }
              
              
              /* Custom Scrollbar */
              ::-webkit-scrollbar { width: 8px; }
              ::-webkit-scrollbar-track { background: #fff; }
              ::-webkit-scrollbar-thumb { background: #ddd; border-radius: 4px; }
              ::-webkit-scrollbar-thumb:hover { background: #bbb; }

              .apple-download, .android-download {
                  width: 150px;
                  height: 50px;
              }
            `}</style>

            <Navbar />
            <Hero />
            <FeatureSection />
            <MemoriesSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default App;
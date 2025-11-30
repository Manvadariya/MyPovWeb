"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, useInView } from 'framer-motion';
import { cn, getRandomNumberInRange } from '@/lib/utils';

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
    { id: 5, x: "480px", y: "-140px", zIndex: 6, direction: "left", src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=800&auto=format&fit=crop", alt: "Young Man" },
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

export default MemoriesSection;

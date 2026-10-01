"use client";

import React, { useState, useEffect } from "react";
import { HeroSectionData } from "../../types";
import { ArrowRight, ArrowLeft, ShieldCheck, Droplets, Car, Users, Award, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Droplet: Droplets,
  Car,
  Users,
  Award,
  Star,
  Sparkles,
};

export default function Hero({ data }: { data: HeroSectionData }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = data.slides && data.slides.length > 0 ? data.slides : [{
    subtitle: "",
    title_line1: "",
    title_highlight: "",
    title_line2: "",
    description: "",
    primary_button: { text: "", href: "" },
    secondary_button: { text: "", href: "" },
    image: "/banner/1.png"
  }];

  const currentSlideData = slides[currentSlide];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const featureVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-auto min-h-[450px] lg:min-h-[550px] bg-zinc-900 overflow-hidden group">
      {/* Background Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={currentSlideData.image}
            alt={`Banner ${currentSlide + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20 md:to-transparent z-10" />

      {/* Top Left Dark Geometric Shape */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-[#2a0006] z-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      {/* Bottom Right Maroon Polygon */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-[#720016] z-10"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />

      {/* Navigation Arrows (Desktop Only) */}
      <div className="hidden md:flex absolute right-[20px] md:right-[50px] top-1/2 -translate-y-1/2 flex-col gap-3 md:gap-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevSlide}
          className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full bg-[#222222]/80 hover:bg-[#333333] flex items-center justify-center text-white transition-colors border border-white/10 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
        </button>
        <button
          onClick={nextSlide}
          className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full bg-[#720016]/90 hover:bg-[#8b001a] flex items-center justify-center text-white transition-colors backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1300px] mx-auto h-full flex flex-col md:justify-between justify-center px-6 sm:px-8 lg:px-10 pb-6 md:pb-10 pt-[20px] md:pt-0">
        
        {/* Text and Buttons Wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
            className="md:flex-1 flex flex-col justify-center mt-4 md:mt-20"
          >
            <div className="max-w-3xl">
              {/* Subtitle */}
              <motion.div variants={itemVariants} className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                <span className="text-white text-[10px] md:text-sm font-semibold tracking-[0.2em] uppercase whitespace-pre-line leading-relaxed">
                  {currentSlideData.subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-extrabold text-white leading-[1.1] mb-5 md:mb-6 tracking-tight"
              >
                {currentSlideData.title_line1} <br />
                <span className="text-[#720016]">{currentSlideData.title_highlight}</span>{" "}
                {currentSlideData.title_line2}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-[#d1d5db] text-[13px] sm:text-base md:text-lg max-w-xl mb-8 md:mb-10 leading-[1.6]"
              >
                {currentSlideData.description}
              </motion.p>

              {/* Buttons */}
              <motion.div variants={itemVariants} className="flex flex-row items-center gap-3 md:gap-5 w-full sm:w-auto">
                <a
                  href={currentSlideData.primary_button?.href || "#"}
                  className="flex flex-1 sm:flex-none items-center justify-center gap-1 md:gap-2 bg-[#910A1D] hover:bg-[#720016] text-white px-3 md:px-8 py-[14px] md:py-4 font-semibold text-[13px] md:text-[16px] rounded-[4px] transition-all"
                >
                  {currentSlideData.primary_button?.text || "Book Now"}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 stroke-[2]" />
                </a>
                <a
                  href={currentSlideData.secondary_button?.href || "#"}
                  className="flex flex-1 sm:flex-none items-center justify-center gap-1 md:gap-2 border border-white hover:bg-white hover:text-black text-white px-3 md:px-8 py-[14px] md:py-4 font-semibold text-[13px] md:text-[16px] rounded-[4px] transition-all"
                >
                  {currentSlideData.secondary_button?.text || "Learn More"}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 stroke-[2]" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Features / Stats */}
        <div className="w-full mt-8 md:mt-auto">
          {data.stats && data.stats.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="pb-6 md:pb-10 pt-8 flex flex-row items-start justify-between md:justify-start gap-0 md:gap-10"
            >
              {data.stats.map((stat, idx) => {
                const Icon = stat.icon && iconMap[stat.icon] ? iconMap[stat.icon] : ShieldCheck;
                
                return (
                  <React.Fragment key={idx}>
                    <motion.div variants={featureVariants} className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto flex-1 md:flex-none gap-3 md:gap-4">
                      {/* Icon */}
                      <div className="flex h-12 w-12 md:h-12 md:w-12 items-center justify-center flex-shrink-0">
                        <Icon className="w-9 h-9 md:w-10 md:h-10 text-[#910A1D]" strokeWidth={1.5} />
                      </div>
                      
                      {/* Text */}
                      <div className="flex flex-col text-center md:text-left">
                        <span className="text-white font-medium text-[11px] md:text-[15px] leading-[1.3] tracking-wide whitespace-pre-line mx-auto md:mx-0">
                          {stat.label.split(' ').join('\n')}
                        </span>
                      </div>
                    </motion.div>
                    
                    {/* Divider */}
                    {idx < data.stats.length - 1 && (
                      <div className="w-px h-16 md:h-12 bg-white/20 md:bg-white/10"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </motion.div>
          )}

          {/* Mobile Pagination Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 pb-6 pt-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx 
                    ? "w-2 bg-[#910A1D]" 
                    : idx === (currentSlide + 1) % slides.length 
                      ? "w-2 bg-white" 
                      : "w-2 bg-white/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

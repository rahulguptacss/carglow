'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThankYouProps } from '../../types';
import { ArrowRight } from 'lucide-react';

export default function ThankYou({ data }: ThankYouProps) {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-[2rem] p-10 md:p-16 border border-zinc-100 flex flex-col items-center shadow-xl relative overflow-hidden"
      >
        {/* Background pattern */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#910A1D]/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#720016]/10 rounded-full blur-3xl"
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.4, 
            type: "spring", 
            stiffness: 200, 
            damping: 15 
          }}
          className="relative z-10 w-24 h-24 bg-[#910A1D] rounded-full flex items-center justify-center mb-8 shadow-xl shadow-[#910A1D]/30"
        >
          <motion.svg 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={3}
          >
            <motion.path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M5 13l4 4L19 7" 
            />
          </motion.svg>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-10 text-4xl md:text-5xl lg:text-[60px] font-extrabold text-zinc-900 mb-6 tracking-tight"
        >
          {data.title} <span className="text-[#910A1D]">{data.title_highlight}</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative z-10 text-lg md:text-xl text-zinc-600 mb-10 max-w-xl leading-relaxed"
        >
          {data.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative z-10"
        >
          <Link 
            href={data.button.href}
            className="inline-flex items-center justify-center gap-2 px-8 py-[14px] md:py-4 bg-[#910A1D] text-white font-semibold text-[15px] md:text-[16px] rounded-[4px] hover:bg-[#720016] transition-all duration-300 shadow-md shadow-[#910A1D]/20"
          >
            {data.button.text}
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 stroke-[2]" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

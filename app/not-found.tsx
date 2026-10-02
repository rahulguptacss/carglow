"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import data from '../components/data/data.json';

export default function NotFound() {
  const common = data.common;

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />

      <main className="flex-1 w-full flex flex-col">
        <div className="relative flex-1 flex flex-col items-center justify-center bg-white overflow-hidden py-10 px-5">
          {/* Decorative Background Blobs */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-slate-50 rounded-full mix-blend-multiply filter blur-[80px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-slate-50 rounded-full mix-blend-multiply filter blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none" 
          />

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* 404 Text */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.5 } } }}
              className="flex items-center justify-center font-black leading-none drop-shadow-2xl mb-2"
            >
              <motion.span whileHover={{ y: -10, rotate: -5 }} className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[200px] text-[#0f172a] tracking-tighter inline-block cursor-default">4</motion.span>
              <motion.span whileHover={{ y: -10, scale: 1.05 }} className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[200px] text-[#910A1D] tracking-tighter mx-1 inline-block cursor-default">0</motion.span>
              <motion.span whileHover={{ y: -10, rotate: 5 }} className="text-[100px] sm:text-[140px] md:text-[160px] lg:text-[200px] text-[#0f172a] tracking-tighter inline-block cursor-default">4</motion.span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-[#0f172a] mb-4 tracking-tight"
            >
              Oops! Page Not Found
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-[15px] sm:text-[16px] text-[#64748b] max-w-[650px] leading-relaxed mb-8 font-medium mx-auto"
            >
              The page you're looking for doesn't exist or may have been moved.<br className="hidden sm:block" />
              Let's get you back on track.
            </motion.p>

            {/* Button */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } } }}>
              <Link href="/">
                <button className="bg-[#910A1D] hover:bg-[#720016] text-white py-4 px-8 rounded-[8px] font-bold text-[16px] transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3 group">
                  Go to Home
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}

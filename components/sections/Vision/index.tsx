"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Vision({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section className="w-full bg-[#111111] flex flex-col-reverse lg:flex-row items-stretch overflow-hidden">
      <style>{`
        @media (min-width: 1024px) {
          .vision-img { clip-path: polygon(0 0, 75% 0, 90% 100%, 0 100%); }
          .vision-ribbon { clip-path: polygon(calc(75% + 15px) 0, calc(75% + 40px) 0, calc(90% + 40px) 100%, calc(90% + 15px) 100%); }
        }
      `}</style>
      
      {/* Left Content (Image & Shapes) */}
      <div className="w-full lg:w-[55%] relative min-h-[250px] sm:min-h-[350px] lg:min-h-[320px]">
        {/* Dark Red Slanted Ribbon */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block absolute inset-0 bg-[#6B0B1A] z-10 vision-ribbon"
        />

        {/* The Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-20 h-full w-full vision-img"
        >
          <Image 
            src={data.image || '/img/vision.png'}
            alt="Our Vision"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Right Content (Text) */}
      <div className="w-full lg:w-[45%] flex justify-start items-center py-8 lg:py-10 px-5 sm:px-8 lg:pr-10 xl:pr-20 lg:pl-6 xl:pl-10 relative z-20 bg-[#111111]">
        <div className="w-full max-w-[550px] mr-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[2px] w-[40px] bg-[#c8102e]" />
              <span className="text-[13px] font-bold uppercase tracking-[3px] text-[#c8102e]">
                {data.subtitle || 'OUR VISION'}
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-black leading-[1.15] tracking-tight text-white mb-5">
              {data.title_line1 || 'A Cleaner Tomorrow'}
              <br />
              <span className="text-[#c8102e]">
                {data.title_highlight || 'For Every Journey'}
              </span>
            </h2>
            <p className="text-[14px] leading-[1.65] text-zinc-400">
              {data.description || 'Our vision is to be the most trusted and preferred car wash and detailing brand, known for exceptional service, innovation, and care. We aim to set new standards in vehicle care and create a cleaner, brighter, and more confident driving experience for every customer.'}
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MissionProps } from '../../types';

export default function Mission({ data }: MissionProps) {

  return (
    <section className="w-full bg-[#f8f9fa] flex flex-col lg:flex-row items-stretch overflow-hidden">
      <style>{`
        @media (min-width: 1024px) {
          .mission-img { clip-path: polygon(25% 0, 100% 0, 100% 100%, 10% 100%); }
          .mission-ribbon { clip-path: polygon(calc(25% - 40px) 0, calc(25% - 15px) 0, calc(10% - 15px) 100%, calc(10% - 40px) 100%); }
        }
      `}</style>

      {/* Left Content (Text) */}
      <div className="w-full lg:w-[45%] flex justify-end items-center py-8 lg:py-10 px-5 sm:px-8 lg:pl-10 xl:pl-20 lg:pr-6 xl:pr-10 relative z-20 bg-[#f8f9fa]">
        {/* max-width for content to align with standard grid */}
        <div className="w-full max-w-[550px] ml-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[2px] w-[40px] bg-[#c8102e]" />
              <span className="text-[13px] font-bold uppercase tracking-[3px] text-[#c8102e]">
                {data.subtitle}
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-black leading-[1.15] tracking-tight text-[#111820] mb-5">
              {data.title_line1}
              <br />
              <span className="text-[#c8102e]">
                {data.title_highlight}
              </span>
            </h2>
            <p className="text-[14px] leading-[1.65] text-[#4b5563] max-w-[550px]">
              {data.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Content (Image & Shapes) */}
      <div className="w-full lg:w-[55%] relative min-h-[250px] sm:min-h-[350px] lg:min-h-[320px]">
        {/* Red Slanted Ribbon */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block absolute inset-0 bg-[#c8102e] z-10 mission-ribbon"
        />

        {/* The Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-20 h-full w-full mission-img"
        >
          <Image
            src={data.image}
            alt="Our Mission"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

    </section>
  );
}

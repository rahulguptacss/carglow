"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import { DoorstepAboutProps } from '../../types';

const iconMap: Record<string, React.ReactNode> = {
  Home: <FaHome size={34} />,
  Clock: (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
    </svg>
  ),
  ShieldCheck: (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  ),
  Leaf: (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17,8C8,10,5.9,16.19,6,16.57a1,1,0,0,0,1,.86V19a1,1,0,0,0,2,0V17.85c2.32.74,6.64.91,10-2.31A13.41,13.41,0,0,0,22,5,19.34,19.34,0,0,0,17,8Z" />
    </svg>
  ),
};

export default function DoorstepAbout({ data }: DoorstepAboutProps) {
  if (!data) return null;
  return (
    <section className="pt-12 pb-8 lg:pt-16 lg:pb-10 bg-zinc-50">
      <div className="mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10 xl:px-12 flex flex-col lg:flex-row items-center gap-10 xl:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="w-full lg:w-[50%]"
        >
          <div className="flex items-center gap-3 mb-4">
            <svg width="60" height="8" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#910A1D]">
              <path d="M60 6L50 0.226497V11.7735L60 6ZM0 7H51V5H0V7Z" fill="currentColor" />
            </svg>
            <span className="text-[13px] font-extrabold uppercase tracking-[2px] text-[#910A1D]">{data.subtitle}</span>
          </div>
          <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] xl:text-[50px] font-black text-[#0a1020] mb-4 sm:mb-5 leading-[1.15] tracking-tight whitespace-pre-line">
            {data.title_line1} <span className="text-[#910A1D]">{data.title_highlight}</span>
          </h2>
          <p className="text-[#334155] text-[15.5px] leading-[1.65] mb-10 max-w-[560px]">
            {data.description}
          </p>

          <div className="grid grid-cols-2 sm:flex sm:flex-nowrap justify-center sm:justify-between gap-y-8 gap-x-4">
            {data.features?.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                className="flex flex-col items-center text-center w-full sm:w-1/4 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-[72px] h-[72px] rounded-full bg-[#fcf0f1] text-[#910A1D] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#910A1D] group-hover:text-white shadow-sm"
                >
                  {iconMap[f.icon] || iconMap.Home}
                </motion.div>
                <p className="text-[14px] font-extrabold text-[#0a1020] whitespace-pre-line leading-snug group-hover:text-[#910A1D] transition-colors">{f.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="w-full lg:w-[50%]"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative w-full aspect-[16/11] rounded-xl overflow-hidden shadow-lg border border-zinc-100 group"
          >
            <Image src={data.image} alt={data.title_highlight} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

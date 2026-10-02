'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Headset, Plus, Minus } from 'lucide-react';

export default function Faqs({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  if (!data) return null;

  return (
    <section className="bg-[#fdfdfd] py-8 lg:py-12 relative overflow-hidden">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        
        {/* =================================================
            HEADER
        ================================================= */}
        <motion.div 
          className="mb-8 lg:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-[1.5px] w-[40px] bg-[#910A1D]" />
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#910A1D]">
              {data.subtitle}
            </span>
            <span className="h-[1.5px] w-[40px] bg-[#910A1D]" />
          </div>
          <h2 className="mb-4 text-[28px] font-black leading-[1.15] tracking-tight text-[#111820] sm:text-[40px] lg:text-[46px]">
            {data.title_line1} <span className="text-[#910A1D]">{data.title_highlight}</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-[15px] sm:text-[16px] leading-[1.6] text-[#4b5563]">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-10 lg:gap-12 lg:items-start">
          
          {/* =================================================
              LEFT COLUMN (Image & Info)
          ================================================= */}
          <motion.div 
            className="flex flex-col mb-6 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <div className="mb-3 flex items-center gap-4">
                <span className="h-[1.5px] w-[40px] bg-[#910A1D]" />
                <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#910A1D]">
                  {data.left_subtitle}
                </span>
              </div>
              <h3 className="mb-2 text-[32px] sm:text-[42px] lg:text-[54px] font-black leading-[1.1] text-[#0f172a]">
                We've Got <span className="text-[#910A1D]">You <br/> Covered</span>
              </h3>
              <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#64748b]">
                {data.left_description}
              </p>
            </div>

            <div className="relative mt-2 flex-1 min-h-[300px] lg:min-h-[400px]">
              {/* Image Wrapper */}
              <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                <Image 
                  src={data.image || '/img/doorstep.jpg'} 
                  alt="FAQ Image" 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-4 right-4 sm:right-auto sm:left-8 z-10">
                <div className="bg-[#910A1D] rounded-[12px] p-4 sm:p-5 lg:p-6 flex items-center gap-4 sm:gap-5 shadow-2xl max-w-full sm:max-w-[340px]">
                  <div className="flex-shrink-0">
                    <Headset className="w-8 h-8 sm:w-[42px] sm:h-[42px] text-white" strokeWidth={1.5} />
                  </div>
                  <div className="w-[1px] h-[40px] sm:h-[50px] bg-white/30 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-[16px] sm:text-[18px] leading-tight mb-1">{data.badge_title}</h4>
                    <p className="text-white/90 text-[13px] sm:text-[14px] leading-snug pr-2">{data.badge_subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT COLUMN (Accordion)
          ================================================= */}
          <motion.div 
            className="flex flex-col gap-3 lg:pt-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {data.items?.map((item: any, index: number) => {
              const isOpen = openIndex === index;
              const numStr = (index + 1).toString().padStart(2, '0');

              return (
                <div 
                  key={index} 
                  className="rounded-[10px] overflow-hidden border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] bg-white"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between transition-colors duration-300 ${
                      isOpen ? 'bg-[#910A1D]' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:gap-6 pr-4">
                      <span className={`font-bold text-[16px] sm:text-[18px] transition-colors ${
                        isOpen ? 'text-white' : 'text-[#910A1D]'
                      }`}>
                        {numStr}
                      </span>
                      <div className={`w-[1px] h-[20px] ${isOpen ? 'bg-white/30' : 'bg-gray-200'}`} />
                      <span className={`font-bold text-[15px] sm:text-[16px] leading-snug transition-colors ${
                        isOpen ? 'text-white' : 'text-[#0f172a]'
                      }`}>
                        {item.question}
                      </span>
                    </div>

                    <div className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full transition-colors ${
                      isOpen ? 'bg-white text-[#910A1D]' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-4 text-[#64748b] text-[15px] leading-[1.7] border-t border-gray-100">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

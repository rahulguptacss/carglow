"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LegalPageProps } from '../../types';

export default function LegalPage({ data }: LegalPageProps) {
  if (!data) return null;

  return (
    <section className="bg-white py-8 lg:py-12 relative overflow-hidden">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        
        {data.sections?.map((section, index) => (
          <div key={index} className="pb-5 mb-5 relative">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[24px] sm:text-[28px] font-bold tracking-tight mb-4 flex items-baseline gap-3"
            >
              <span className="text-[#910A1D]">{index + 1}.</span>
              <span className="text-[#111820]">{section.title}</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] sm:text-[16px] leading-[1.7] text-[#4b5563]"
            >
              <p>{section.content}</p>
              {section.list && section.list.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  {section.list.map((item: string, i: number) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>

            {index !== data.sections.length - 1 && (
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 origin-left"
              />
            )}
          </div>
        ))}

        {data.last_updated && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 bg-[#f8f9fa] border-l-[4px] border-[#910A1D] px-6 py-4 flex items-center text-[14px] sm:text-[15px]"
          >
            <span className="font-bold text-[#111820] mr-2">Last Updated:</span> 
            <span className="text-[#4b5563]">{data.last_updated}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}

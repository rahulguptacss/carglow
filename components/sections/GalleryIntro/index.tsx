'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GalleryIntroProps } from '../../types';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function GalleryIntro({ data }: GalleryIntroProps) {
  return (
    <section className="bg-white pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-[28px] bg-[#910A1D]" />
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[2.5px] text-[#910A1D]">
              {data.subtitle}
            </span>
            <span className="h-[2px] w-[28px] bg-[#910A1D]" />
          </div>
          <h2 className="text-[26px] sm:text-[36px] lg:text-[42px] font-black text-[#0B1220] leading-tight mb-3">
            {data.title_line1}{' '}
            <span className="text-[#910A1D]">{data.title_highlight}</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#6B7280] leading-[1.7] max-w-[640px] mx-auto">
            {data.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

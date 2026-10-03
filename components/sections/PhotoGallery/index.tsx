'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PhotoGalleryProps } from '../../types';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function PhotoGallery({ data }: PhotoGalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white pt-2 sm:pt-4 pb-8 sm:pb-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mb-6 sm:mb-8"
        >
          <div className="mb-2 flex items-center gap-2.5">
            <svg width="32" height="10" viewBox="0 0 36 10" fill="none">
              <path d="M0 5H34M34 5L30 1.5M34 5L30 8.5" stroke="#910A1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[2.5px] text-[#910A1D]">
              {data.subtitle}
            </span>
          </div>
          <h3 className="text-[24px] sm:text-[32px] font-black text-[#0B1220]">{data.title}</h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {data.items.map((item, index) => (
            <motion.button
              type="button"
              key={`${item.image}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: easeOut }}
              whileHover={{ y: -4 }}
              onClick={() => setActive(index)}
              className="relative h-[140px] sm:h-[180px] lg:h-[200px] rounded-[12px] overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && data.items[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-[#111] flex items-center justify-center cursor-pointer"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative w-full max-w-[900px] h-[50vh] sm:h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={data.items[active].image}
                alt={data.items[active].alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

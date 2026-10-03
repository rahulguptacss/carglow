'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { VideoGalleryProps } from '../../types';

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function VideoGallery({ data }: VideoGalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white pt-4 sm:pt-6 pb-12 sm:pb-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {data.items.map((item, index) => (
            <motion.button
              type="button"
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}
              onClick={() => setActive(index)}
              className="text-left group cursor-pointer"
            >
              <div className="relative h-[200px] sm:h-[220px] rounded-[12px] overflow-hidden mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="w-[58px] h-[58px] rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 text-[#910A1D] fill-[#910A1D] ml-0.5" />
                  </span>
                </motion.span>
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                  {item.duration}
                </span>
              </div>
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#0B1220] group-hover:text-[#910A1D] transition-colors">
                {item.title}
              </h4>
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
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-[#111] flex items-center justify-center cursor-pointer z-10"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative w-full max-w-[900px] aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`${data.items[active].url}?autoplay=1`}
                title={data.items[active].title}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbProps {
  title: string;
  breadcrumb: Array<{ label: string; href?: string }>;
  backgroundImage?: string;
}

export default function Breadcrumb({ title, breadcrumb, backgroundImage = '/banner/1.png' }: BreadcrumbProps) {
  return (
    <section className="relative w-full h-[220px] md:h-[280px] flex items-center justify-start overflow-hidden bg-zinc-900 group">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Title */}
          <h1 className="text-[36px] sm:text-[42px] md:text-[50px] font-extrabold text-white leading-[1.1] mb-4 tracking-tight uppercase">
            {title}
          </h1>

          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/80">
            {breadcrumb.map((item, index) => {
              const isLast = index === breadcrumb.length - 1;

              return (
                <React.Fragment key={index}>
                  {index === 0 && <Home className="w-4 h-4 mr-1 text-[#910A1D]" />}
                  {item.href && !isLast ? (
                    <Link href={item.href} className="hover:text-[#910A1D] transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-[#910A1D]" : ""}>
                      {item.label}
                    </span>
                  )}
                  
                  {!isLast && (
                    <ChevronRight className="w-4 h-4 mx-1 opacity-50" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

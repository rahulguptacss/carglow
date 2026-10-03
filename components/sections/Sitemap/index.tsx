'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Home,
  Settings,
  Image,
  Info,
  Phone,
  Users,
  Car,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { SitemapProps } from '../../types';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Settings,
  Image,
  Info,
  Phone,
  Users,
  Car,
  FileText,
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Sitemap({ data }: SitemapProps) {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-[28px] bg-[#910A1D]" />
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[2.5px] text-[#910A1D]">
              {data.subtitle}
            </span>
            <span className="h-[2px] w-[28px] bg-[#910A1D]" />
          </div>
          <h2 className="text-[26px] sm:text-[38px] lg:text-[44px] font-black text-[#0B1220] leading-tight mb-3">
            {data.title_line1}{' '}
            <span className="text-[#910A1D]">{data.title_highlight}</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#6B7280] leading-[1.7] max-w-[640px] mx-auto">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {data.groups.map((group, index) => {
            const Icon = iconMap[group.icon] || Home;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: easeOut }}
                whileHover={{ y: -4 }}
                className="rounded-[12px] overflow-hidden border border-[#EEF0F3] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              >
                <div className="bg-[#0B1B2B] text-white px-5 py-3.5 flex items-center gap-3">
                  <Icon className="w-[18px] h-[18px] shrink-0" strokeWidth={2} />
                  <h3 className="text-[15px] sm:text-[16px] font-bold">{group.title}</h3>
                </div>
                <ul className="p-2 sm:p-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.name}`}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between px-3 py-2.5 text-[14px] text-[#334155] hover:text-[#910A1D] hover:bg-[#F8F9FB] rounded-md transition-colors"
                      >
                        <span>{link.name}</span>
                        <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

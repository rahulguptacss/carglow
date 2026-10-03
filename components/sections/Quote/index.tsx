'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  User,
  Phone,
  Mail,
  Car,
  CalendarDays,
  Clock,
  ChevronRight,
  Lock,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { FaClock, FaUsers } from 'react-icons/fa';
import { RiShieldCheckFill } from 'react-icons/ri';
import { QuoteProps } from '../../types';

const iconMap: Record<string, React.ElementType> = {
  Clock: FaClock,
  ShieldCheck: RiShieldCheckFill,
  Users: FaUsers,
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function Quote({ data, services = [] }: QuoteProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const inputClass =
    'w-full h-[46px] sm:h-[48px] pl-11 pr-4 bg-white border border-[#E6E8EE] rounded-md text-[14px] text-[#111] outline-none focus:border-[#910A1D] transition-colors placeholder:text-[#9CA3AF]';

  const form = data?.form;
  const placeholders = form?.placeholders;

  return (
    <>
      <section className="bg-white py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14 items-stretch">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="w-full lg:w-[52%] xl:w-[54%] flex flex-col"
            >
              <motion.div variants={fadeUp} className="mb-3 sm:mb-4 flex items-center gap-2.5">
                <svg width="32" height="10" viewBox="0 0 36 10" fill="none">
                  <path d="M0 5H34M34 5L30 1.5M34 5L30 8.5" stroke="#910A1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[3px] text-[#910A1D]">
                  {data.subtitle}
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-[28px] sm:text-[42px] lg:text-[50px] font-black leading-[1.12] tracking-[-0.02em] text-[#0B1220] mb-2 sm:mb-3"
              >
                {data.title_line1}
                <br />
                {data.title_line2 ? `${data.title_line2} ` : ''}
                <span className="text-[#910A1D]">{data.title_highlight}</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-[#6B7280] text-[14px] sm:text-[15px] leading-[1.75] max-w-[480px] mb-4 sm:mb-5"
              >
                {data.description}
              </motion.p>

              <motion.div
                variants={stagger}
                className="grid grid-cols-3 mb-5 sm:mb-6"
              >
                {data.features?.map((item, index) => {
                  const Icon = iconMap[item.icon] || FaClock;
                  const isLast = index === data.features.length - 1;
                  return (
                    <motion.div
                      variants={fadeUp}
                      key={index}
                      className={`flex flex-col items-start pr-3 sm:pr-6 ${
                        !isLast ? 'border-r border-[#E5E7EB]' : ''
                      } ${index > 0 ? 'pl-3 sm:pl-6' : ''}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="w-[52px] h-[52px] sm:w-[64px] sm:h-[64px] rounded-full bg-[#F8E4E7] flex items-center justify-center mb-3"
                      >
                        <Icon className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] text-[#910A1D]" />
                      </motion.div>
                      <h3 className="text-[13px] sm:text-[16px] font-bold text-[#0B1220] leading-tight mb-1.5">{item.title}</h3>
                      <p className="text-[11px] sm:text-[14px] text-[#6B7280] leading-[1.55]">{item.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row overflow-hidden rounded-[12px] flex-1 min-h-[180px] sm:min-h-[210px]"
              >
                <div className="relative w-full sm:w-[58%] h-[200px] sm:h-auto min-h-[200px]">
                  <Image
                    src={data.image || '/blog/1.png'}
                    alt={data.title_highlight}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="w-full sm:w-[42%] bg-[#6B0814] text-white p-6 sm:p-7 flex flex-col justify-between min-h-[180px]">
                  <p className="text-[16px] sm:text-[18px] font-medium leading-[1.55] italic">
                    “{data.quote_box?.text}”
                  </p>
                  <div className="mt-6 text-[12px] sm:text-[13px] font-bold tracking-[1.5px] uppercase text-white/90 leading-[1.4]">
                    <div>{data.quote_box?.line1}</div>
                    <div>{data.quote_box?.line2}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
              className="w-full lg:w-[48%] xl:w-[46%] flex"
            >
              <div className="bg-white rounded-[16px] overflow-hidden shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-zinc-100 w-full h-full flex flex-col">
                <div className="bg-[#910A1D] px-5 sm:px-8 pt-6 sm:pt-7 pb-5 sm:pb-6">
                  <div className="mb-2.5 flex items-center gap-3">
                    <span className="h-[1.5px] w-[28px] bg-white/90" />
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[2.5px] text-white">
                      {form?.subtitle}
                    </span>
                  </div>
                  <h3 className="text-[26px] sm:text-[32px] font-black text-white leading-tight mb-2">
                    {form?.title} {form?.title_highlight}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-white/80 leading-[1.6]">
                    {form?.description}
                  </p>
                </div>

                <form className="space-y-3 p-4 sm:p-8 lg:p-9 pt-5 sm:pt-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8]" />
                      <input type="text" placeholder={placeholders?.name} className={inputClass} />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8]" />
                      <input
                        type="tel"
                        inputMode="numeric"
                        placeholder={placeholders?.phone}
                        className={inputClass}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                        }}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8]" />
                    <input type="email" placeholder={placeholders?.email} className={inputClass} />
                  </div>

                  <div className="relative" ref={dropdownRef}>
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8] z-10" />
                    <div
                      className={`${inputClass} flex items-center justify-between cursor-pointer pr-4 ${isDropdownOpen ? 'border-[#910A1D]' : ''}`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className={`truncate ${selectedService ? 'text-[#111]' : 'text-[#9CA3AF]'}`}>
                        {selectedService || placeholders?.service}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-[#94A3B8] shrink-0 transition-transform ${isDropdownOpen ? '-rotate-90' : 'rotate-90'}`} />
                    </div>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="absolute left-0 top-[calc(100%+6px)] w-full bg-white border border-zinc-200 rounded-md shadow-lg z-50 overflow-hidden"
                        >
                          <div className="max-h-[180px] overflow-y-auto">
                            {services.map((s, i) => (
                              <div
                                key={i}
                                className={`px-4 py-3 text-[14px] cursor-pointer ${
                                  selectedService === s.title
                                    ? 'bg-[#910A1D]/10 text-[#910A1D] font-medium'
                                    : 'text-zinc-600 hover:bg-[#F9F9F9] hover:text-[#910A1D]'
                                }`}
                                onClick={() => {
                                  setSelectedService(s.title);
                                  setIsDropdownOpen(false);
                                }}
                              >
                                {s.title}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8] pointer-events-none" />
                      <input
                        type="date"
                        className={`${inputClass} text-[#9CA3AF] cursor-pointer`}
                        onClick={(e) => {
                          try { e.currentTarget.showPicker(); } catch {}
                        }}
                      />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8] pointer-events-none" />
                      <input
                        type="time"
                        className={`${inputClass} text-[#9CA3AF] cursor-pointer`}
                        onClick={(e) => {
                          try { e.currentTarget.showPicker(); } catch {}
                        }}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-[14px] w-[16px] h-[16px] text-[#94A3B8]" />
                    <textarea
                      placeholder={placeholders?.message}
                      className="w-full h-[90px] sm:h-[100px] pl-11 pr-4 pt-3 bg-white border border-[#E6E8EE] rounded-md text-[14px] outline-none focus:border-[#910A1D] resize-none placeholder:text-[#9CA3AF]"
                    />
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-[48px] sm:h-[50px] bg-[#910A1D] hover:bg-[#7a0818] text-white font-bold text-[14px] sm:text-[15px] rounded-md flex items-center justify-center gap-2 cursor-pointer mt-1"
                  >
                    {form?.button_text}
                    <ArrowRight className="w-[18px] h-[18px]" />
                  </motion.button>
                  <p className="flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-zinc-500 pt-1">
                    <Lock className="w-[14px] h-[14px]" /> {form?.footer_text}
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-8 sm:py-10">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {data.stats?.map((stat, index) => {
              const isLast = index === data.stats.length - 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: easeOut }}
                  className={`text-center py-5 sm:py-2 px-4 relative ${
                    !isLast
                      ? "lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-[56px] lg:after:w-px lg:after:bg-[#D5DAE0]"
                      : ''
                  }`}
                >
                  <div className="text-[32px] sm:text-[40px] lg:text-[44px] font-black text-[#910A1D] leading-none mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-[12px] sm:text-[14px] font-normal text-[#8A9099]">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

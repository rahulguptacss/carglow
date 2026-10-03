'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Headphones,
  CalendarDays,
  ShieldCheck,
  Car,
  Clock,
  Leaf,
  User,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Lock,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { FaCar, FaClock, FaLeaf } from 'react-icons/fa';
import { RiShieldCheckFill } from 'react-icons/ri';
import { EnquiryProps, EnquirySectionData } from '../../types';

const iconMap: Record<string, React.ElementType> = {
  Headphones,
  CalendarDays,
  ShieldCheck,
  Car,
  Clock,
  Leaf,
};

const statsIconMap: Record<string, React.ElementType> = {
  Car: FaCar,
  Clock: FaClock,
  ShieldCheck: RiShieldCheckFill,
  Leaf: FaLeaf,
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

export default function Enquiry({ data, services = [] }: EnquiryProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/thank-you');
  };

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
    'w-full h-[46px] sm:h-[48px] pl-11 pr-4 bg-[#F7F8FA] border border-[#ECEFF3] rounded-md text-[14px] text-[#111] outline-none focus:border-[#910A1D] focus:bg-white transition-colors placeholder:text-[#9CA3AF]';

  const form = data?.form;
  const placeholders = form?.placeholders || ({} as EnquirySectionData['form']['placeholders']);

  return (
    <>
      <section className="relative bg-white">
        <div className="absolute inset-0 hidden lg:block overflow-hidden pointer-events-none">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: easeOut }}
            className="absolute inset-0"
          >
            <Image
              src={data.image || '/blog/1.png'}
              alt={data.title_highlight || 'Enquiry'}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/35" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 xl:px-12 py-10 sm:py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-stretch">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="w-full lg:w-[48%] xl:w-[50%] lg:pt-4"
            >
              <motion.div variants={fadeUp} className="mb-3 sm:mb-4 flex items-center gap-2.5">
                <svg width="32" height="10" viewBox="0 0 36 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H34M34 5L30 1.5M34 5L30 8.5" stroke="#910A1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[3px] text-[#910A1D]">
                  {data.subtitle}
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-[26px] sm:text-[40px] lg:text-[50px] font-black leading-[1.15] tracking-[-0.02em] text-[#0B1220] mb-3 sm:mb-5"
              >
                {data.title_line1}
                <br />
                {data.title_line2 ? `${data.title_line2} ` : ''}
                <span className="text-[#910A1D]">{data.title_highlight}</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-[#6B7280] text-[14px] sm:text-[15px] font-normal leading-[1.75] max-w-[430px] mb-7 sm:mb-11"
              >
                {data.description}
              </motion.p>

              <div className="space-y-6 sm:space-y-10">
                {data.highlights?.map((item, index) => {
                  const Icon = iconMap[item.icon] || Headphones;
                  return (
                    <motion.div
                      variants={fadeLeft}
                      key={index}
                      className="flex items-center gap-4 sm:gap-6"
                    >
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: [-4, 4, 0] }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.35 }}
                        className="w-[58px] h-[58px] sm:w-[80px] sm:h-[80px] rounded-full bg-[#F8E4E7] flex items-center justify-center shrink-0"
                      >
                        <Icon className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] text-[#910A1D]" strokeWidth={1.7} />
                      </motion.div>
                      <div className="min-w-0 max-w-[280px]">
                        <h3 className="text-[16px] sm:text-[20px] font-bold text-[#0B1220] leading-[1.3] mb-1 sm:mb-1.5">{item.title}</h3>
                        <p className="text-[13px] sm:text-[15px] font-normal text-[#6B7280] leading-[1.6]">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.12 }}
              className="w-full lg:w-[52%] xl:w-[50%]"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-[14px] sm:rounded-[16px] p-4 sm:p-8 lg:p-9 shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-zinc-100"
              >
                <div className="mb-2 flex items-center gap-3">
                  <svg width="28" height="8" viewBox="0 0 36 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5H34M34 5L30 1.5M34 5L30 8.5" stroke="#910A1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] text-[#910A1D]">
                    {form?.subtitle}
                  </span>
                </div>
                <h3 className="text-[22px] sm:text-[30px] font-black text-[#0F172A] mb-2">
                  {form?.title} <span className="text-[#910A1D]">{form?.title_highlight}</span>
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#64748B] mb-5 sm:mb-6 leading-[1.7]">
                  {form?.description}
                </p>

                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8]" />
                      <input type="text" placeholder={placeholders.name} className={inputClass} />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8]" />
                      <input
                        type="tel"
                        inputMode="numeric"
                        placeholder={placeholders.phone}
                        className={inputClass}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                        }}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8]" />
                    <input type="email" placeholder={placeholders.email} className={inputClass} />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8]" />
                    <input type="text" placeholder={placeholders.address} className={inputClass} />
                  </div>

                  <div className="relative" ref={dropdownRef}>
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#94A3B8] z-10" />
                    <div
                      className={`${inputClass} flex items-center justify-between cursor-pointer pr-4 ${isDropdownOpen ? 'border-[#910A1D] bg-white' : ''}`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className={`truncate ${selectedService ? 'text-[#111]' : 'text-[#9CA3AF]'}`}>
                        {selectedService || placeholders.service}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-[#94A3B8] shrink-0 transition-transform ${isDropdownOpen ? '-rotate-90' : 'rotate-90'}`} />
                    </div>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-[calc(100%+6px)] w-full bg-white border border-zinc-200 rounded-md shadow-lg z-50 overflow-hidden"
                        >
                          <div className="max-h-[180px] sm:max-h-[220px] overflow-y-auto">
                            {services.map((s, i) => (
                              <div
                                key={i}
                                className={`px-4 py-3 text-[14px] cursor-pointer transition-colors ${
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
                      placeholder={placeholders.message}
                      className="w-full h-[90px] sm:h-[100px] pl-11 pr-4 pt-3 bg-[#F7F8FA] border border-[#ECEFF3] rounded-md text-[14px] outline-none focus:border-[#910A1D] focus:bg-white transition-colors resize-none placeholder:text-[#9CA3AF]"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.015, x: 0 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-[48px] sm:h-[50px] bg-[#910A1D] hover:bg-[#7a0818] text-white font-bold text-[14px] sm:text-[15px] rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer mt-1"
                  >
                    {form?.button_text}
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
                      <ArrowRight className="w-[18px] h-[18px]" />
                    </motion.span>
                  </motion.button>

                  <p className="flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-zinc-500 pt-1">
                    <Lock className="w-[14px] h-[14px]" /> {form?.footer_text}
                  </p>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 sm:gap-x-4 sm:gap-y-6 lg:gap-0">
            {data.stats?.map((stat, index) => {
              const Icon = statsIconMap[stat.icon] || FaCar;
              const isLast = index === data.stats.length - 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}
                  className={`flex items-center gap-2.5 sm:gap-4 py-1 sm:py-3 lg:py-2 sm:px-4 lg:px-6 relative ${
                    !isLast
                      ? "lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-[48px] lg:after:w-px lg:after:bg-[#DDE1E7]"
                      : ''
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-[44px] h-[44px] sm:w-[64px] sm:h-[64px] rounded-full bg-white shadow-[0_6px_20px_rgba(15,23,42,0.08)] flex items-center justify-center shrink-0"
                  >
                    <Icon className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] text-[#910A1D]" />
                  </motion.div>
                  <div className="min-w-0 text-left">
                    <h4 className="text-[13px] sm:text-[16px] font-bold text-[#0B1220] leading-tight mb-0.5 sm:mb-1">{stat.title}</h4>
                    <p className="text-[11px] sm:text-[13px] font-normal text-[#6B7280] leading-[1.4]">{stat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

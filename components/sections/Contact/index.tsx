'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ChevronRight,
  Lock,
  ArrowRight,
  PhoneCall,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ContactProps } from '../../types';

const socialIconMap: Record<string, React.ElementType> = {
  Facebook: FaFacebookF,
  Twitter: FaXTwitter,
  X: FaXTwitter,
  Instagram: FaInstagram,
  Linkedin: FaLinkedinIn,
  Youtube: FaYoutube,
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export default function Contact({ data, services = [] }: ContactProps) {
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
    'w-full h-[48px] px-4 bg-white border border-[#E6E8EE] rounded-md text-[14px] text-[#111] outline-none focus:border-[#910A1D] transition-colors placeholder:text-[#9CA3AF]';

  const form = data.form;
  const center = data.center;
  const map = data.map;
  const telHref = `tel:${(center.phone || '').replace(/[^0-9+]/g, '')}`;

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="text-left mb-8 sm:mb-10"
        >
          <motion.div variants={fadeUp} className="mb-3 sm:mb-4 flex items-center gap-2.5">
            <svg width="36" height="10" viewBox="0 0 36 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5H34M34 5L30 1.5M34 5L30 8.5" stroke="#910A1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[2.5px] text-[#910A1D]">
              {data.subtitle}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[28px] sm:text-[40px] lg:text-[48px] font-black text-[#0B1220] leading-[1.15] tracking-[-0.02em] mb-3 sm:mb-4"
          >
            {data.title_line1 || data.title.split(' ').slice(0, -3).join(' ')}{' '}
            <span className="text-[#910A1D]">{data.title_highlight || data.title.split(' ').slice(-3).join(' ')}</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[#6B7280] text-[14px] sm:text-[16px] font-normal leading-[1.7] max-w-[720px]"
          >
            {data.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {data.cards.map((card, index) => {
            const isSocial = card.icon === 'Share2';
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: easeOut }}
                className="relative bg-white rounded-[12px] p-4 sm:p-6 pl-5 sm:pl-7 shadow-[0_8px_24px_rgba(15,23,42,0.06)] border border-[#EEF0F3] overflow-hidden"
              >
                <span className="absolute left-0 top-4 bottom-4 w-[3px] sm:w-[4px] rounded-full bg-[#910A1D]" />
                <h3 className="text-[13px] sm:text-[16px] font-bold text-[#0B1220] mb-1.5">{card.title}</h3>
                {isSocial ? (
                  <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    {data.socials.map((social) => {
                      const SocialIcon = socialIconMap[social.icon] || FaFacebookF;
                      return (
                        <motion.a
                          key={social.icon}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.icon}
                          whileHover={{ scale: 1.12 }}
                          whileTap={{ scale: 0.94 }}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F1F3F5] text-[#4B5563] flex items-center justify-center hover:bg-[#910A1D] hover:text-white transition-colors"
                        >
                          <SocialIcon size={12} />
                        </motion.a>
                      );
                    })}
                  </div>
                ) : (
                  <>
                    {card.href ? (
                      <a href={card.href} className="block text-[13px] sm:text-[17px] font-bold text-[#910A1D] mb-1 break-all hover:underline">
                        {card.value}
                      </a>
                    ) : (
                      <p className="text-[12px] sm:text-[15px] font-semibold text-[#0B1220] leading-[1.45] mb-0.5">{card.value}</p>
                    )}
                    <p className={`text-[11px] sm:text-[13px] leading-[1.5] ${card.href ? 'text-[#6B7280]' : 'text-[#0B1220] font-semibold'}`}>{card.text}</p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="bg-[#F7F8FA] rounded-[16px] p-4 sm:p-8"
          >
            <div className="mb-2 flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] bg-[#910A1D]" />
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#910A1D]">
                {form.subtitle}
              </span>
            </div>
            <h3 className="text-[22px] sm:text-[32px] font-black text-[#0B1220] mb-2">{form.title}</h3>
            <p className="text-[13px] sm:text-[14px] text-[#6B7280] mb-5 sm:mb-6">{form.description}</p>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" placeholder={form.placeholders.name} className={inputClass} />
                <input type="email" placeholder={form.placeholders.email} className={inputClass} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder={form.placeholders.phone}
                  className={inputClass}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                  }}
                />
                <div className="relative" ref={dropdownRef}>
                  <div
                    className={`${inputClass} flex items-center justify-between cursor-pointer ${isDropdownOpen ? 'border-[#910A1D]' : ''}`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className={`truncate ${selectedService ? 'text-[#111]' : 'text-[#9CA3AF]'}`}>
                      {selectedService || form.placeholders.service}
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
                          {services.map((s) => (
                            <div
                              key={s.title}
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
              </div>
              <textarea
                placeholder={form.placeholders.message}
                className="w-full h-[120px] px-4 py-3 bg-white border border-[#E6E8EE] rounded-md text-[14px] outline-none focus:border-[#910A1D] resize-none placeholder:text-[#9CA3AF]"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-[48px] sm:h-[50px] bg-[#910A1D] hover:bg-[#7a0818] text-white font-bold text-[14px] sm:text-[15px] rounded-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {form.button_text}
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
                  <ArrowRight className="w-[18px] h-[18px]" />
                </motion.span>
              </motion.button>
              <p className="flex items-start sm:items-center justify-center gap-2 text-[12px] text-zinc-500 pt-1 text-center">
                <Lock className="w-[14px] h-[14px] mt-0.5 sm:mt-0 shrink-0" /> {form.footer_text}
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="rounded-[16px] overflow-hidden bg-[#0B1220] flex flex-col h-full group"
          >
            <div className="relative w-full h-[180px] sm:h-[240px] lg:h-[260px] shrink-0 overflow-hidden">
              <motion.div
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: easeOut }}
                className="absolute inset-0"
              >
                <Image
                  src={center.image || '/img/contact.png'}
                  alt={center.title_highlight || center.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>
            <div className="p-4 sm:p-7 text-white flex-1">
              <h3 className="text-[20px] sm:text-[28px] font-black leading-tight mb-2 sm:mb-3">
                {center.title}{' '}
                <span className="text-[#E11D2E]">{center.title_highlight || 'Service Center'}</span>
              </h3>
              <p className="text-[13px] sm:text-[15px] text-white/75 leading-[1.7] mb-5 sm:mb-6">
                {center.description}
              </p>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-0">
                <div className="lg:flex-1 lg:pr-8">
                  <p className="text-[14px] sm:text-[15px] font-bold mb-1">{center.address_label}</p>
                  <p className="text-[13px] sm:text-[14px] text-white/70 leading-[1.55] mb-4">{center.address}</p>
                  <p className="text-[14px] sm:text-[15px] font-bold mb-1">{center.hours_label}</p>
                  {center.hours.map((line) => (
                    <p key={line} className="text-[13px] sm:text-[14px] text-white/70 leading-[1.55]">{line}</p>
                  ))}
                </div>
                <div className="hidden lg:block w-px self-stretch bg-white/20 mx-2" />
                <div className="lg:pl-6 flex items-center gap-3 sm:gap-4">
                  <motion.a
                    href={telHref}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-full bg-[#E11D2E] flex items-center justify-center shrink-0"
                  >
                    <PhoneCall className="w-5 h-5 text-white" fill="currentColor" />
                  </motion.a>
                  <div>
                    <p className="text-[12px] sm:text-[14px] text-white mb-0.5">{center.help_title}</p>
                    <a href={telHref} className="block text-[14px] sm:text-[15px] font-bold text-[#E11D2E] leading-tight">
                      {center.help_button}
                    </a>
                    <a href={telHref} className="mt-0.5 block text-[15px] sm:text-[18px] font-black tracking-tight hover:text-[#E11D2E] transition-colors">
                      {center.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[220px] sm:h-[320px] lg:h-[380px] rounded-[12px] overflow-hidden border border-[#E6E8EE]"
        >
          <iframe
            title={map.label}
            src={map.embed_url}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white rounded-md shadow-md px-3 py-2.5 max-w-[min(220px,calc(100%-24px))]"
          >
            <p className="text-[13px] font-bold text-[#0B1220]">{map.label}</p>
            <p className="text-[12px] text-[#6B7280] mt-0.5">{map.address}</p>
            <a
              href={map.link}
              target="_blank"
              rel="noreferrer"
              className="text-[12px] text-[#1A73E8] font-medium mt-1 inline-block"
            >
              {map.link_text}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  MapPin,
  Clock,
  Phone,
  CalendarDays,
  ArrowRight,
  ChevronDown,
  X,
  Mail,
} from 'lucide-react';

import { HeaderData } from '../../types';

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Clock,
  Phone,
  Mail,
};

export default function Header({ data }: { data: HeaderData }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Record<number, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 86);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenMobileDropdowns(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Framer motion variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  const mobileMenuVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <motion.header
      className="w-full sticky top-0 z-50 bg-white shadow-sm"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >

      {/* =====================================================
          DESKTOP HEADER
      ====================================================== */}
      <div className="hidden lg:block w-full relative">

        {/* LEFT LOGO BLOCK */}
        <div
          className={`absolute left-0 top-0 z-30 w-[295px] bg-[#720016] transition-all duration-300 ${isScrolled ? 'h-[67px]' : 'h-[153px]'}`}
          style={{
            clipPath: isScrolled ? 'polygon(0px 0px, 295px 0px, 271.6px 67px, 0px 67px)' : 'polygon(0px 0px, 295px 0px, 241.6px 153px, 0px 153px)',
          }}
        >
          {/* Logo Wrapper centered precisely in the un-folded area */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <a href="/" className="flex items-center justify-center h-full w-full pr-[30px]">
              <img
                src={data.logo_image || "/logo/logo.png"}
                alt={data.logo_text || 'CarGlow'}
                className={`block h-auto object-contain transition-all duration-300 ${isScrolled ? 'w-[160px]' : 'w-[215px] max-h-[105px]'}`}
              />
            </a>
          </div>
        </div>


        {/* ================= TOP BAR ================= */}
        <div className={`w-full bg-white transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-[86px] opacity-100'}`}>
          {/* WHITE INFORMATION AREA */}
          <div className="ml-[285px] h-[86px] flex">
            {/* CONTACT INFORMATION */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center h-full">
                {data.contact_info?.map((info, idx) => {
                  const Icon = iconMap[info.icon] || MapPin;

                  return (
                    <React.Fragment key={idx}>
                      <div className="flex items-center px-[28px]">
                        {/* ICON */}
                        <div className="mr-[15px] flex-shrink-0 text-[#720016]">
                          <Icon className="w-[34px] h-[34px]" strokeWidth={1.7} />
                        </div>

                        {/* TEXT */}
                        <div className="flex flex-col whitespace-nowrap">
                          <span className="text-[#151515] font-bold text-[15px] leading-[20px]">
                            {info.label}
                          </span>
                          <span className="text-[#5d6268] text-[14px] leading-[20px]">
                            {info.value}
                          </span>
                        </div>
                      </div>

                      {/* DIVIDER */}
                      {idx < data.contact_info.length - 1 && (
                        <div className="w-[1px] h-[36px] bg-[#d8dadd]" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>


            {/* ================= BOOK WASH ================= */}
            <a
              href={data.button_link || '#'}
              className="relative h-[86px] w-[285px] flex items-center justify-center gap-[15px] bg-[#720016] text-white no-underline group"
              style={{
                clipPath: 'polygon(13% 0, 100% 0, 100% 100%, 0 100%)',
              }}
            >
              <CalendarDays className="w-[24px] h-[24px]" strokeWidth={1.8} />

              <div className="w-[1px] h-[24px] bg-white/40 ml-1 mr-2" />

              <span className="text-[16px] font-semibold whitespace-nowrap">
                {data.button_text || 'Book A Wash'}
              </span>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="w-[20px] h-[20px]" strokeWidth={2} />
              </motion.div>
            </a>

          </div>
        </div>


        {/* ================= NAVIGATION ================= */}
        <div className="relative h-[67px] w-full bg-[#11171d]">
          {/* NAV CONTENT */}
          <div className="ml-[285px] h-full flex items-center">
            <nav className="flex items-center h-full gap-[55px] px-[40px]">
              {data.links?.map((link, idx) => {
                const hasDropdown = link.sublinks && link.sublinks.length > 0;

                return (
                  <div
                    key={idx}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <motion.a
                      custom={idx}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      href={link.href}
                      className={`relative h-full flex items-center gap-[5px] text-[15px] font-medium no-underline whitespace-nowrap transition-colors ${link.active ? 'text-white' : 'text-[#e5e7eb] hover:text-white'
                        }`}
                    >
                      {link.name}

                      {hasDropdown && (
                        <ChevronDown
                          className={`w-[15px] h-[15px] transition-transform duration-300 ${hoveredIndex === idx ? 'rotate-180' : ''}`}
                          strokeWidth={2}
                        />
                      )}

                      {/* ACTIVE RED LINE */}
                      {link.active && (
                        <motion.span
                          layoutId="activeTab"
                          className="absolute left-0 bottom-[9px] w-full h-[2px] bg-[#720016]"
                        />
                      )}
                    </motion.a>

                    {/* DESKTOP DROPDOWN MENU */}
                    {hasDropdown && (
                      <AnimatePresence>
                        {hoveredIndex === idx && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-0 min-w-[200px] bg-[#11171d] border-t-[3px] border-[#720016] shadow-xl py-2 z-50 flex flex-col"
                          >
                            {link.sublinks!.map((sub, sidx) => (
                              <a
                                key={sidx}
                                href={sub.href}
                                className="px-[20px] py-[10px] text-[14.5px] text-[#e5e7eb] hover:text-white hover:bg-[#720016]/80 transition-colors whitespace-nowrap block"
                              >
                                {sub.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>

      </div>


      {/* =====================================================
          MOBILE HEADER
      ====================================================== */}
      <div className="lg:hidden">

        {/* MOBILE TOP */}
        <div className="h-[72px] px-[20px] bg-[#720016] flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src={data.logo_image || "/logo/logo.png"}
              alt={data.logo_text || 'CarGlow'}
              className="h-[56px] w-auto max-w-[210px] object-contain"
            />
          </a>

          <div className="flex items-center gap-[20px]">
            {/* Call Button */}
            <a
              href={`tel:${data.contact_info?.find(i => i.label.toLowerCase().includes('phone') || i.label.toLowerCase().includes('call'))?.value || '+1234567890'}`}
              className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0"
            >
              <Phone className="w-[16px] h-[16px] text-[#720016]" fill="currentColor" strokeWidth={0} />
            </a>

            {/* Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-[30px] h-[30px]" strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Custom 3-line hamburger menu to exactly match the screenshot */}
                    <div className="flex flex-col gap-[6px] w-[26px]">
                      <span className="h-[2px] w-full bg-white rounded-full"></span>
                      <span className="h-[2px] w-full bg-white rounded-full"></span>
                      <span className="h-[2px] w-full bg-white rounded-full"></span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>


        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-[#11171d] w-full shadow-lg overflow-hidden"
            >
              <nav className="flex flex-col">
                {data.links?.map((link, idx) => {
                  const hasDropdown = link.sublinks && link.sublinks.length > 0;
                  const isOpen = openMobileDropdowns[idx];

                  return (
                    <div key={idx} className="flex flex-col border-b border-white/10">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`min-h-[52px] flex items-center justify-between text-[15px] font-medium no-underline ${link.active ? 'text-white bg-[#720016]' : 'text-white'
                          }`}
                      >
                        <a href={link.href} className="flex-1 px-[22px] py-[15px] block">
                          {link.name}
                        </a>

                        {hasDropdown && (
                          <button
                            onClick={(e) => toggleMobileDropdown(idx, e)}
                            className="h-full px-[22px] py-[15px] flex items-center justify-center border-l border-white/10"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </motion.div>

                      {/* MOBILE DROPDOWN ACCORDION */}
                      {hasDropdown && (
                        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                          <div className="overflow-hidden bg-[#0a0f13]">
                            <div className="flex flex-col py-[5px]">
                              {link.sublinks!.map((sub, sidx) => (
                                <a
                                  key={sidx}
                                  href={sub.href}
                                  className="px-[40px] py-[12px] text-[14px] text-[#9ca3af] hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                >
                                  {sub.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* MOBILE BOOK WASH */}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (data.links?.length || 0) * 0.05 + 0.1 }}
                  href={data.button_link || '#'}
                  className="m-[15px] h-[50px] flex items-center justify-center gap-3 bg-[#720016] text-white font-semibold no-underline rounded"
                >
                  <CalendarDays className="w-5 h-5" />
                  <span>{data.button_text || 'Book A Wash'}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}
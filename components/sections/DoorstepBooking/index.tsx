"use client";
import React from 'react';
import Image from 'next/image';
import { Car, Phone, User, Mail, Calendar, MapPin, Clock, Lock, ArrowRight, Sparkles, Leaf } from 'lucide-react';
import { FaLeaf, FaCog, FaThumbsUp, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { DoorstepBookingProps } from '../../types';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <FaLeaf size={38} />,
  Cog: <FaCog size={42} />,
  ThumbsUp: <FaThumbsUp size={38} />,
  Headset: <FaHeadset size={42} />
};

export default function DoorstepBooking({ data }: DoorstepBookingProps) {
  if (!data) return null;
  return (
    <>
      <section className="pt-10 lg:pt-14 pb-8 bg-white">
        <div className="mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-0 rounded-[1.5rem] overflow-hidden"
          >
            <div className="w-full lg:w-[55%] px-8 py-8 md:px-12 md:py-8 xl:px-16 xl:py-8 bg-[#f8f9fa]">
              <div className="flex items-center gap-3 mb-3">
                <svg width="40" height="8" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#910A1D]">
                  <path d="M40 6L30 0.226497V11.7735L40 6ZM0 7H31V5H0V7Z" fill="currentColor" />
                </svg>
                <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#910A1D]">{data.subtitle}</span>
              </div>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-black text-[#0a1020] mb-2 leading-tight whitespace-pre-line">
                {data.title_line1} <span className="text-[#910A1D]">{data.title_highlight}</span>
              </h2>
              <p className="text-[#64748b] text-[15px] mb-5">{data.description}</p>

              <form className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" placeholder="Your Name" className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-md text-[14px] focus:outline-none focus:border-[#910A1D] focus:ring-1 focus:ring-[#910A1D] transition-all shadow-sm placeholder:text-gray-400" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="email" placeholder="Email Address" className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-md text-[14px] focus:outline-none focus:border-[#910A1D] focus:ring-1 focus:ring-[#910A1D] transition-all shadow-sm placeholder:text-gray-400" />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="tel" placeholder="Phone Number" className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-md text-[14px] focus:outline-none focus:border-[#910A1D] focus:ring-1 focus:ring-[#910A1D] transition-all shadow-sm placeholder:text-gray-400" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" placeholder="Preferred Date" className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-md text-[14px] focus:outline-none focus:border-[#910A1D] focus:ring-1 focus:ring-[#910A1D] transition-all shadow-sm placeholder:text-gray-400" />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" placeholder="Location / Address" className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-md text-[14px] focus:outline-none focus:border-[#910A1D] focus:ring-1 focus:ring-[#910A1D] transition-all shadow-sm placeholder:text-gray-400" />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" placeholder="Preferred Time" className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-md text-[14px] focus:outline-none focus:border-[#910A1D] focus:ring-1 focus:ring-[#910A1D] transition-all shadow-sm placeholder:text-gray-400" />
                  </div>
                </div>
                <Link href="/enquiry" className="w-full bg-[#910A1D] hover:bg-[#720016] text-white py-[14px] rounded-md font-bold text-[16px] flex items-center justify-center gap-2 mt-4 transition-all group">
                  Book Now <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-center text-[13px] text-gray-500 mt-2 flex items-center justify-center gap-1.5 font-medium">
                  <Lock className="w-3.5 h-3.5" /> Your information is safe with us.
                </p>
              </form>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="w-full lg:w-[45%] relative min-h-[400px] lg:min-h-full bg-zinc-100 group overflow-hidden rounded-r-2xl lg:rounded-none"
            >
              <Image src={data.image} alt={data.badge_title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 lg:bottom-10 lg:right-10 bg-[#910A1D] text-white p-7 pr-12 flex items-center gap-6 rounded-tl-2xl lg:rounded-2xl shadow-xl hover:bg-[#a90c22] transition-colors cursor-pointer"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  {data.badge_icon === 'Car' ? <Car className="w-[32px] h-[32px]" /> : <Sparkles className="w-[32px] h-[32px]" />}
                </div>
                <div className="pl-6 border-l border-white/30">
                  <p className="font-bold text-[18px] leading-tight mb-1">{data.badge_title}</p>
                  <p className="text-[15px] opacity-90">{data.badge_subtitle}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="pb-8 lg:pb-12 bg-white">
        <div className="mx-auto max-w-[1150px] px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-y-0 lg:gap-x-0">
          {data.features?.map((f, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              key={i} className={`flex flex-col items-center text-center px-2 relative group cursor-pointer ${i !== data.features.length - 1 ? 'lg:after:content-[\'\'] lg:after:absolute lg:after:right-0 lg:after:top-[20%] lg:after:h-[60%] lg:after:w-[1px] lg:after:bg-gray-200' : ''}`}
            >
              <motion.div 
                whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-[#910A1D] mb-4 group-hover:text-[#a90c22] transition-colors"
              >
                {iconMap[f.icon] || <Leaf size={42} strokeWidth={2.5} fill="currentColor" />}
              </motion.div>
              <h4 className="text-[15px] sm:text-[17px] font-bold text-[#0a1020] mb-1 sm:mb-2 group-hover:text-[#910A1D] transition-colors">{f.title}</h4>
              <p className="text-[12px] sm:text-[14px] text-[#64748b] leading-[1.6]">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

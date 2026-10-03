"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaPinterestP, FaBehance, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { TeamDetailProps } from '../../types';

export default function TeamDetails({ data }: TeamDetailProps) {
  if (!data) return null;

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col gap-10 xl:gap-14 items-start">

          {/* Main Content Area */}
          <div className="w-full">
            {/* Top Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_300px] xl:grid-cols-[1fr_1.5fr_320px] gap-8 xl:gap-10 mb-6">

              {/* Image with Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[16px] overflow-hidden"
              >
                <div className="relative h-[450px] w-full xl:h-[550px] group overflow-hidden rounded-[16px]">
                  <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Experience Badge */}
                {data.yearsOfExperience && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="absolute bottom-6 left-6 bg-[#910A1D] text-white p-5 rounded-[12px] shadow-lg text-center min-w-[120px] cursor-default"
                  >
                    <h3 className="text-[32px] font-black leading-none mb-1">{data.yearsOfExperience}</h3>
                    <p className="text-[13px] font-medium leading-snug">Years of<br />Experience</p>
                  </motion.div>
                )}
              </motion.div>

              {/* Profile Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-[2px] w-[30px] bg-[#910A1D]" />
                  <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#910A1D]">
                    TEAM MEMBER
                  </span>
                </div>
                <h1 className="text-[32px] lg:text-[40px] font-black text-[#0f172a] mb-2 leading-tight">
                  {data.name}
                </h1>
                <p className="text-[18px] font-bold text-[#910A1D] mb-5">
                  {data.designation}
                </p>
                <p className="text-[15px] text-[#64748b] leading-relaxed mb-8">
                  {data.aboutDescription?.[0] || ""}
                </p>

                {/* Specs List */}
                <motion.ul 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {}
                  }}
                  className="space-y-2 mb-6"
                >
                  {data.position && (
                    <motion.li variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3 border-b border-zinc-100 pb-2">
                      <span className="w-[110px] text-[14px] font-bold text-[#0f172a]">Position:</span>
                      <span className="text-[14px] text-[#64748b] flex-1">{data.position}</span>
                    </motion.li>
                  )}
                  {data.experience && (
                    <motion.li variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3 border-b border-zinc-100 pb-2">
                      <span className="w-[110px] text-[14px] font-bold text-[#0f172a]">Experience:</span>
                      <span className="text-[14px] text-[#64748b] flex-1">{data.experience}</span>
                    </motion.li>
                  )}
                  {data.specialization && (
                    <motion.li variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3 border-b border-zinc-100 pb-2">
                      <span className="w-[110px] text-[14px] font-bold text-[#0f172a]">Specialization:</span>
                      <span className="text-[14px] text-[#64748b] flex-1">{data.specialization}</span>
                    </motion.li>
                  )}
                  {data.location && (
                    <motion.li variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3 border-b border-zinc-100 pb-2">
                      <span className="w-[110px] text-[14px] font-bold text-[#0f172a]">Location:</span>
                      <span className="text-[14px] text-[#64748b] flex-1">{data.location}</span>
                    </motion.li>
                  )}
                  {data.availability && (
                    <motion.li variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3 border-b border-zinc-100 pb-2">
                      <span className="w-[110px] text-[14px] font-bold text-[#0f172a]">Availability:</span>
                      <span className="text-[14px] text-[#64748b] flex-1">{data.availability}</span>
                    </motion.li>
                  )}
                </motion.ul>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  <span className="text-[14px] font-bold text-[#0f172a]">Follow Me:</span>
                  <div className="flex items-center gap-2">
                    {Object.entries(data.social || {}).map(([platform, link], sIdx) => {
                      if (!link || link === '#') return null;
                      return (
                        <motion.a
                          key={sIdx}
                          href={link as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-[36px] h-[36px] bg-[#f1f5f9] text-[#0f172a] rounded-full flex items-center justify-center hover:bg-[#910A1D] hover:text-white transition-colors"
                        >
                          {platform === 'facebook' && <FaFacebookF size={15} />}
                          {platform === 'twitter' && <FaXTwitter size={15} />}
                          {platform === 'instagram' && <FaInstagram size={15} />}
                          {platform === 'linkedin' && <FaLinkedinIn size={15} />}
                          {platform === 'youtube' && <FaYoutube size={15} />}
                          {platform === 'pinterest' && <FaPinterestP size={15} />}
                          {platform === 'behance' && <FaBehance size={15} />}
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Contact Area (Right Column) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-full"
              >
                {data.contact && (
                  <div className="bg-[#f8f9fa] rounded-[16px] p-6 lg:p-8 xl:p-10 border border-zinc-100 h-full flex flex-col justify-center">
                    <h3 className="text-[24px] font-black text-[#0f172a] mb-3">
                      {data.contact.title}
                    </h3>
                    <p className="text-[15px] text-[#64748b] leading-relaxed mb-8">
                      {data.contact.description}
                    </p>

                    <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } } }}
                      className="space-y-6 mb-8"
                    >
                      <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-4">
                        <a href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`}>
                          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-[44px] h-[44px] rounded-full bg-[#0f172a] flex items-center justify-center shrink-0 transition-colors cursor-pointer">
                            <Phone size={18} className="text-white" />
                          </motion.div>
                        </a>
                        <div className="mt-2">
                          <p className="text-[16px] font-bold text-[#0f172a]">
                            <a href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#910A1D] transition-colors">
                              {data.contact.phone}
                            </a>
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-4">
                        <a href={`mailto:${data.contact.email}`}>
                          <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="w-[44px] h-[44px] rounded-full bg-[#64748b] hover:bg-[#910A1D] flex items-center justify-center shrink-0 transition-colors cursor-pointer">
                            <Mail size={18} className="text-white" />
                          </motion.div>
                        </a>
                        <div className="mt-2">
                          <p className="text-[16px] font-bold text-[#0f172a]">
                            <a href={`mailto:${data.contact.email}`} className="hover:text-[#910A1D] transition-colors">
                              {data.contact.email}
                            </a>
                          </p>
                        </div>
                      </motion.div>

                      <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="flex items-start gap-4">
                        <motion.div whileHover={{ scale: 1.1, y: -2 }} className="w-[44px] h-[44px] rounded-full bg-[#64748b] hover:bg-[#910A1D] flex items-center justify-center shrink-0 transition-colors cursor-pointer">
                          <MapPin size={18} className="text-white" />
                        </motion.div>
                        <div className="mt-2">
                          <p className="text-[16px] font-bold text-[#0f172a]">{data.contact.address}</p>
                        </div>
                      </motion.div>
                    </motion.div>

                    <Link href={data.contact.buttonLink || "/contact"} className="mt-auto">
                      <button className="w-full bg-[#910A1D] hover:bg-[#720016] text-white py-4 px-6 rounded-[8px] font-bold text-[15px] transition-colors flex items-center justify-center gap-2 group">
                        {data.contact.buttonText}
                        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                )}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mt-8 pt-8 lg:mt-12 lg:pt-12 border-t border-zinc-100">
              {/* About Text */}
              <div className="lg:pr-8 xl:pr-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-[2px] w-[30px] bg-[#910A1D]" />
                    <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#910A1D]">
                      {data.aboutSubtitle || `ABOUT ${data.name.split(' ')[0].toUpperCase()}`}
                    </span>
                  </div>
                  <h2 className="text-[28px] lg:text-[36px] font-black text-[#0f172a] mb-5 leading-tight">
                    {data.aboutTitle || "Passionate About"}<br />
                    <span className="text-[#910A1D]">{data.aboutTitleHighlight}</span>
                  </h2>
                  {data.aboutDescription?.map((para, pIdx) => (
                    <p key={pIdx} className="text-[14px] text-[#4a5568] leading-[1.8] mb-4">
                      {para}
                    </p>
                  ))}
                </motion.div>
              </div>

              {/* Skills */}
              <div className="lg:pl-8 xl:pl-12 lg:border-l border-zinc-100">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="pt-2 lg:pt-0"
                >
                  <div className="flex items-center gap-3 mb-7">
                    <span className="h-[2px] w-[30px] bg-[#910A1D]" />
                    <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#910A1D]">
                      KEY SKILLS
                    </span>
                  </div>

                  <div className="space-y-6">
                    {data.skills?.map((skill, skIdx) => (
                      <div key={skIdx}>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="w-[140px] shrink-0 text-[16px] font-medium text-[#1a202c]">{skill.name}</span>
                          <div className="flex-1 h-[8px] bg-[#e8eaed] rounded-sm overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: skIdx * 0.1 + 0.2 }}
                              className="h-full bg-[#910A1D] rounded-sm"
                            />
                          </div>
                          <span className="w-[38px] shrink-0 text-[13px] font-semibold text-[#64748b] text-right">{skill.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

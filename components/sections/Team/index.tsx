'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaPinterestP, FaBehance } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { TeamProps } from '../../types';

export default function Team({ data }: TeamProps) {
  if (!data) return null;

  return (
    <section className="bg-[#F9F9F9] py-10 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-[700px] mx-auto mb-10"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-[30px] bg-[#910A1D]" />
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#910A1D]">
              {data.subtitle || "OUR TEAM"}
            </span>
            <span className="h-[2px] w-[30px] bg-[#910A1D]" />
          </div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-black leading-tight tracking-tight text-[#111] mb-4">
            {data.title_line1 || "Meet Our"} <span className="text-[#910A1D]">{data.title_highlight || "Experts"}</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-zinc-500 max-w-[600px] mx-auto leading-relaxed">
            {data.description || "Our skilled and experienced team is dedicated to delivering the highest standards of car care."}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {data.members?.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[16px] p-4 sm:p-5 flex flex-col sm:flex-row gap-6 group border border-zinc-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all"
            >
              {/* Image Container */}
              <div className="relative w-full sm:w-[40%] xl:w-[35%] h-[320px] sm:h-auto rounded-[12px] overflow-hidden">
                <Link href={member.slug ? `/team/${member.slug}` : '/team'}>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  />
                </Link>
              </div>

              {/* Content Container */}
              <div className="w-full sm:w-[60%] xl:w-[65%] flex flex-col justify-center py-2 sm:pr-2">
                <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0f172a] mb-1">
                  <Link href={member.slug ? `/team/${member.slug}` : '/team'} className="hover:text-[#910A1D] transition-colors">
                    {member.name}
                  </Link>
                </h3>
                <p className="text-[15px] font-semibold text-[#910A1D] mb-2">
                  {member.designation}
                </p>
                <p className="text-[15px] text-[#64748b] leading-[1.7] mb-3">
                  {member.description}
                </p>

                {/* Follow Me & Social Icons */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[15px] font-bold text-[#0f172a]">{data.follow_me_text || "Follow Me"}</span>
                    <span className="h-[2px] w-[35px] bg-[#910A1D]" />
                  </div>
                  <div className="flex items-center gap-2">
                    {Object.entries(member.social || {}).map(([platform, link], sIdx) => {
                      return (
                        <motion.a 
                          key={sIdx} 
                          href={link as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-[34px] h-[34px] bg-[#910A1D] text-white rounded-[6px] flex items-center justify-center hover:bg-[#720016] transition-colors"
                        >
                          {platform === 'facebook' && <FaFacebookF size={15} fill="currentColor" className="text-white" />}
                          {platform === 'twitter' && <FaXTwitter size={15} fill="currentColor" className="text-white" />}
                          {platform === 'pinterest' && <FaPinterestP size={15} fill="currentColor" className="text-white" />}
                          {platform === 'behance' && <FaBehance size={17} fill="currentColor" className="text-white" />}
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

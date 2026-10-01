"use client";

import React from 'react';
import Image from 'next/image';
import { BlogSectionData } from '../../types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Blog({ data }: { data: BlogSectionData }) {
  // Use screenshot description if needed, or fallback to data.json
  const desc = "Stay informed with expert tips, maintenance advice and the latest updates from the world of car care and detailing.";

  const posts = data?.posts && data.posts.length > 0 ? data.posts : [
    { title: "5 Easy Car Care Tips to Keep Your Car Looking New", description: "Simple maintenance steps you can do at home to preserve your car's appearance.", image: "/blog/1.png", date: "12 Oct 2026", category: "Car Care Tips", link: "#" },
    { title: "Why Interior Detailing Matters for a Healthier Drive", description: "Learn how a clean interior improves air quality and enhances your driving experience.", image: "/blog/2.png", date: "28 Sep 2026", category: "Detailing Guide", link: "#" }
  ];

  return (
    <section className="py-[40px] sm:py-[50px] bg-white">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        
        {/* =================================================
            HEADING
        ================================================= */}
        <motion.div 
          className="text-center max-w-[800px] mx-auto mb-[40px] sm:mb-[50px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-[12px] sm:mb-[15px] flex items-center justify-center gap-[10px] sm:gap-[15px]">
            <span className="h-[1.5px] w-[25px] sm:w-[35px] bg-[#910A1D]" />
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[2px] text-[#910A1D]">
              OUR BLOGS
            </span>
            <span className="h-[1.5px] w-[25px] sm:w-[35px] bg-[#910A1D]" />
          </div>
          <h2 className="mb-[15px] text-[28px] sm:text-[40px] lg:text-[44px] font-bold leading-[1.15] text-[#111820] tracking-tight px-4 sm:px-0">
            {data.title_line1} <span className="font-black text-[#910A1D]">{data.title_highlight}</span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#6b7280] leading-[1.6] max-w-[650px] mx-auto px-4 sm:px-0">
            {desc}
          </p>
        </motion.div>
        
        {/* =================================================
            CARDS GRID
        ================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {posts.map((post, idx) => {
            // Parse date "12 Oct 2026" into parts
            const dateParts = post.date.split(' ');
            const day = dateParts[0] || '12';
            const month = dateParts[1] || 'AUG';
            const year = dateParts[2] || '2025';
            
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col bg-white border border-[#eaeaea] rounded-[10px] overflow-hidden hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                
                {/* IMAGE & DATE BADGE */}
                <div className="relative h-[250px] w-full bg-gray-100 overflow-hidden">
                  <Image 
                    src={post.image || "/images/blog-1.jpg"} 
                    alt={post.title} 
                    width={600} 
                    height={400} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Date Badge */}
                  <div className="absolute top-0 left-0 bg-[#680512] text-white flex flex-col items-center justify-center w-[75px] h-[75px] rounded-br-[12px] z-10">
                    <span className="text-[26px] font-black leading-none mb-[2px] tracking-tight">{day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.5px] leading-tight text-center">
                      {month} {year}
                    </span>
                  </div>
                </div>
                
                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-[30px]">
                  
                  {/* Category Badge */}
                  <div className="mb-[20px]">
                    <span className="inline-block bg-[#fde9e9] text-[#680512] text-[11px] font-bold uppercase tracking-[0.8px] px-[12px] py-[6px] rounded-[6px]">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="mb-[15px] text-[22px] font-extrabold text-[#111820] leading-[1.3] tracking-tight group-hover:text-[#680512] transition-colors line-clamp-2">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="mb-[25px] text-[15px] text-[#6b7280] leading-[1.65] line-clamp-3 flex-1">
                    {post.description}
                  </p>
                  
                  {/* Read More */}
                  <a href={post.link} className="inline-flex items-center gap-[8px] text-[#680512] text-[14px] font-bold uppercase tracking-[0.5px] hover:text-[#910A1D] transition-colors mt-auto w-max">
                    READ MORE <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
                  </a>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

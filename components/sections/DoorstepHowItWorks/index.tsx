"use client";
import React from 'react';
import { Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar size={32} />,
  MapPin: <MapPin size={32} />,
  Sparkles: <Sparkles size={32} />,
  CheckCircle2: <CheckCircle2 size={32} />
};

export interface DoorstepHowItWorksData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  steps: Array<{ num: string; title: string; description: string; icon: string }>;
}

export default function DoorstepHowItWorks({ data }: { data: DoorstepHowItWorksData }) {
  if (!data) return null;
  return (
    <section className="pt-6 lg:pt-8 pb-6 lg:pb-10 bg-[#f8f9fa]">
      <div className="mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10 xl:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-3 mb-3">
             <svg width="40" height="8" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#910A1D]">
               <path d="M40 6L30 0.226497V11.7735L40 6ZM0 7H31V5H0V7Z" fill="currentColor"/>
             </svg>
             <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#910A1D]">{data.subtitle}</span>
          </div>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-black text-[#0f172a] mb-3 leading-tight whitespace-pre-line">
            {data.title_line1} <span className="text-[#910A1D]">{data.title_highlight}</span>
          </h2>
          <p className="text-[#64748b] mb-8 text-[15px]">{data.description}</p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:flex lg:flex-row items-start justify-center gap-y-8 gap-x-2 sm:gap-x-4 lg:gap-0 relative">
           {data.steps?.map((step, i) => (
             <React.Fragment key={i}>
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center relative w-full lg:flex-1 px-1 sm:px-0"
                >
                 <div className="w-[65px] h-[65px] sm:w-[85px] sm:h-[85px] bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#910A1D] mb-2 shadow-sm relative z-10 transition-all duration-300 hover:scale-105">
                   {iconMap[step.icon] || <Calendar size={32}/>}
                 </div>
                 <div className="text-[18px] sm:text-[22px] font-black text-[#910A1D] mb-0 leading-tight">{step.num}</div>
                 <h3 className="text-[15px] sm:text-[18px] font-bold text-[#0f172a] mb-1 sm:mb-1.5 text-center leading-tight">{step.title}</h3>
                 <p className="text-[12px] sm:text-[14px] text-[#64748b] max-w-[210px] text-center leading-relaxed">{step.description}</p>
               </motion.div>
               {i < data.steps.length - 1 && (
                 <div className="hidden lg:flex flex-col items-center">
                   <div className="h-[85px] flex items-center justify-center text-[#0a1020] px-3">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                   </div>
                 </div>
               )}
             </React.Fragment>
           ))}
        </div>
      </div>
    </section>
  );
}

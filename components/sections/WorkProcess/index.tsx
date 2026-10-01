'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Car, Droplets, Settings, Sparkles, ArrowRight } from 'lucide-react';
import { WorkProcessSectionData } from '../../types';

const iconMap: Record<string, React.ReactNode> = {
  CarWash: <Car />,
  Droplets: <Droplets />,
  Settings: <Settings />,
  Sparkles: <Sparkles />,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function WorkProcess({ data }: { data: WorkProcessSectionData }) {
  if (!data) return null;

  const steps = data.steps && data.steps.length > 0 ? data.steps : [
    { number: '01', title: 'Contactless Washing', description: 'Book your service online or at your convenience.', icon: 'CarWash' },
    { number: '02', title: 'Safety Materials', description: 'We use high-quality, eco-friendly products.', icon: 'Droplets' }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0A] pt-12 pb-6 lg:pt-16 lg:pb-8">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/banner/number.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
      
      {/* Red accent shapes */}
      <div className="absolute -left-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-[#910A1D] opacity-10 blur-[100px]" />
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#910A1D] opacity-10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <motion.div 
          className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Header Left */}
          <div className="max-w-[550px]">
            <motion.div variants={itemVariants} className="mb-2 flex items-center gap-4">
              <span className="h-[2px] w-[40px] bg-[#910A1D]" />
              <span className="text-[13px] font-medium uppercase tracking-[3px] text-zinc-300">
                {data.subtitle || 'WORK PROCESS'}
              </span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="mb-4 text-[36px] font-extrabold leading-[1.1] tracking-[-1px] text-white sm:text-[42px] md:tracking-[-1.5px] lg:text-[56px] xl:text-[62px]">
              {data.title_line1}
              <span className="text-[#910A1D]">{data.title_highlight}</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="max-w-[450px] text-[14px] leading-[1.65] text-zinc-300 sm:text-[15px] lg:text-[16px]">
              {data.description}
            </motion.p>
          </div>

          {/* Header Right / Button */}
          <motion.div variants={itemVariants} className="mt-2 w-full flex-shrink-0 md:mt-0 md:w-auto">
            <a
              href={data.button?.href || '#'}
              className="inline-flex w-full h-[50px] items-center justify-center gap-3 bg-[#910A1D] px-8 text-[14px] font-semibold tracking-wider text-white transition-colors duration-300 hover:bg-[#7a0818] md:w-auto"
            >
              {data.button?.text || 'BOOK NOW'}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </motion.div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-y-0 md:grid-cols-2 lg:grid-cols-4 md:gap-y-12 lg:gap-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative cursor-pointer px-4 sm:px-6 py-8 lg:py-4 flex flex-col items-center text-center transition-all duration-300 ${
                index !== data.steps.length - 1 
                  ? 'border-b border-zinc-800/50 md:border-b-0 lg:border-r lg:border-zinc-800' 
                  : ''
              }`}
            >
              {/* Number and Icon Container */}
              <div className="mb-6 flex items-center justify-center gap-4">
                <span className="text-[54px] font-black leading-none text-[#27272a] transition-colors duration-300 group-hover:text-[#3f3f46] lg:text-[60px] xl:text-[80px]">
                  {step.number}
                </span>
                <div className="flex h-[64px] w-[64px] lg:h-[72px] lg:w-[72px] items-center justify-center rounded-full border-[2px] border-[#910A1D] bg-[#0A0A0A] relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(145,10,29,0.4)]">
                  {React.cloneElement(iconMap[step.icon] as React.ReactElement<any> || <Car />, {
                    className: 'h-6 w-6 lg:h-7 lg:w-7 text-white transition-transform duration-500 group-hover:scale-110',
                    strokeWidth: 1.5,
                  })}
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-[17px] font-bold text-white transition-colors duration-300 group-hover:text-[#910A1D] lg:text-[18px] xl:text-[20px]">
                {step.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-zinc-400 xl:text-[15px] max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

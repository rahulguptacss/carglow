'use client';

import React from 'react';
import {
  Gem,
  ShieldCheck,
  Leaf,
  Clock3,
  Users,
  Trophy,
  ArrowRight,
  CalendarCheck,
  Droplets,
  Settings,
  Sparkles,
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { AboutProps } from '../../types';

const iconMap: Record<string, React.ReactNode> = {
  CalendarCheck: <CalendarCheck />,
  Droplets: <Droplets />,
  Settings: <Settings />,
  Sparkles: <Sparkles />,
  Gem: <Gem />,
  ShieldCheck: <ShieldCheck />,
  Leaf: <Leaf />,
  Clock3: <Clock3 />,
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

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function About({ data, hideCta = false }: AboutProps) {
  return (
    <section className="relative w-full overflow-hidden border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-[1350px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[70px] xl:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.95fr] xl:gap-[70px]">
          
          {/* Images Section */}
          <motion.div 
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="order-2 lg:order-1 relative mx-auto min-h-[560px] w-full max-w-[650px] sm:min-h-[620px] lg:mx-0 lg:min-h-[590px]"
          >
            {/* Top Image */}
            <div className="absolute right-[5%] top-0 z-10 h-[315px] w-[74%] overflow-hidden rounded-[9px] border-[4px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:h-[350px] lg:h-[325px]">
              <img
                src="/about/1.png"
                alt="Professional car detailing"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Customers Badge */}
            <div className="absolute left-0 top-[45px] z-30 flex h-[180px] w-[170px] flex-col justify-center rounded-[10px] border-[4px] border-white bg-[#a9001d] px-7 text-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] sm:h-[185px] sm:w-[185px]">
              <Users className="mb-3 h-[42px] w-[42px]" strokeWidth={1.6} />
              <div className="mb-3 h-[2px] w-[28px] bg-white" />
              <div className="text-[38px] font-bold leading-none sm:text-[40px]">5K+</div>
              <div className="mt-2 whitespace-nowrap text-[13px]">Happy Customers</div>
            </div>

            {/* Decorative Pattern */}
            <div
              className="absolute left-[20px] top-[255px] z-[5] h-[80px] w-[105px] opacity-70"
              style={{
                backgroundImage: 'radial-gradient(#c51b35 1.5px, transparent 1.5px)',
                backgroundSize: '13px 13px',
              }}
            />

            {/* Bottom Image */}
            <div className="absolute bottom-0 left-0 z-20 h-[260px] w-[76%] overflow-hidden rounded-[9px] border-[4px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:h-[285px] lg:h-[265px]">
              <img
                src="/about/2.png"
                alt="Car wash and detailing"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-[38px] right-0 z-40 flex h-[105px] w-[210px] items-center rounded-[8px] bg-white px-5 shadow-[0_8px_35px_rgba(0,0,0,0.14)] sm:w-[225px]">
              <div className="flex h-[55px] w-[55px] flex-shrink-0 items-center justify-center rounded-full bg-[#a9001d] text-white">
                <Trophy className="h-[28px] w-[28px]" strokeWidth={1.7} />
              </div>
              <div className="ml-4">
                <div className="text-[34px] font-bold leading-none text-[#111827]">10+</div>
                <div className="mt-2 text-[11px] text-zinc-800">Years of Experience</div>
                <div className="mt-2 h-[1px] w-[27px] bg-zinc-500" />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="order-1 lg:order-2 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Section Subtitle */}
            <motion.div variants={itemVariants} className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-[34px] bg-[#910A1D]" />
              <span className="text-[12px] font-semibold uppercase tracking-[4px] text-[#910A1D] sm:text-[13px]">
                {data.subtitle || 'About Us'}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={itemVariants} className="mb-7 text-[38px] font-bold leading-[1.1] tracking-[-1.5px] text-[#111827] sm:text-[45px] lg:text-[48px] xl:text-[52px]">
              {data.title_line1 || 'Driven by Clean.'}
              <br />
              <span className="text-[#910A1D]">
                {data.title_highlight || 'Powered by Care.'}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p variants={itemVariants} className="mb-7 max-w-[620px] text-[15px] leading-[1.55] text-[#4b5563] sm:text-[16px]">
              {data.description}
            </motion.p>

            {/* Features Grid */}
            <div className="mb-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {data.steps.map((step, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Feature
                    icon={iconMap[step.icon] || <Gem />}
                    title={step.title}
                    description={step.description}
                    number={step.number}
                  />
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            {!hideCta && (
              <motion.div variants={itemVariants}>
                <a
                  href="/about"
                  className="inline-flex w-full sm:w-auto h-[54px] items-center justify-center gap-4 rounded-[6px] bg-[#910A1D] px-8 text-[15px] font-medium text-white no-underline transition-all duration-300 hover:bg-[#7a0818]"
                >
                  <span>More About Us</span>
                  <ArrowRight className="h-[21px] w-[21px]" strokeWidth={1.8} />
                </a>
              </motion.div>
            )}

          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Subcomponents
function Feature({
  icon,
  title,
  description,
  number,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  number?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="relative flex h-[64px] w-[64px] flex-shrink-0 items-center justify-center rounded-full bg-[#FAF1F2] text-[#910A1D]">
        {React.cloneElement(icon as React.ReactElement<any>, {
          className: 'h-[30px] w-[30px] z-10',
          strokeWidth: 1.5,
        })}
        {number && (
          <span 
            className="absolute -bottom-2 -right-2 text-[22px] font-black text-white/30 drop-shadow-sm select-none" 
            style={{ WebkitTextStroke: '1px #910A1D' }}
          >
            {number}
          </span>
        )}
      </div>

      <div className="pt-[3px] flex-1">
        <h3 className="mb-1.5 text-[15px] font-bold leading-[1.25] text-[#111827] sm:text-[16px]">
          {title}
        </h3>
        <p className="text-[13px] leading-[1.35] text-[#5b6472] sm:text-[14px]">
          {description}
        </p>
      </div>
    </div>
  );
}
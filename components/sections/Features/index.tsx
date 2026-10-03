'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FeaturesProps } from '../../types';

import {
  Users,
  Settings,
  ShieldCheck,
  Clock,
  Star,
  Leaf,
  Sparkles,
  Trophy,
  Zap,
} from 'lucide-react';


/* =========================================================
   ICON MAP
========================================================= */

const iconMap: Record<string, React.ElementType> = {
  Users,
  Settings,
  ShieldCheck,
  Clock,
  Star,
  Leaf,
  Sparkles,
  Trophy,
  Zap,
};


/* =========================================================
   ANIMATIONS
========================================================= */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.08,
    },
  },
};


const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};


const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};


/* =========================================================
   COMPONENT
========================================================= */

export default function Features({
  data,
}: FeaturesProps) {

  const items = data.items && data.items.length > 0 ? data.items : [
    { title: 'Experienced Team', description: 'Skilled professionals with years of hands-on experience.', icon: 'Users' },
    { title: 'Premium Products', description: 'We use high-quality, vehicle-safe cleaning products.', icon: 'ShieldCheck' }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-[35px] sm:py-[40px] lg:py-[50px]">

      <div
        className="
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-[50px]
        "
      >

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-[55px]
            lg:grid-cols-[1.55fr_0.85fr]
            lg:gap-[45px]
            xl:grid-cols-[1.6fr_0.85fr]
            xl:gap-[60px]
          "
        >


          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-80px',
            }}
            className="w-full"
          >

            {/* ================= EYEBROW ================= */}

            <motion.div
              variants={fadeUp}
              className="
                mb-[18px]
                flex
                items-center
                gap-[14px]
              "
            >

              <span
                className="
                  h-[2px]
                  w-[50px]
                  bg-[#910A1D]
                "
              />

              <span
                className="
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-[#910A1D]
                  sm:text-[13px]
                "
              >
                {data.subtitle || 'WHY CHOOSE US'}
              </span>

            </motion.div>


            {/* ================= HEADING ================= */}

            <motion.h2
              variants={fadeUp}
              className="
                mb-[12px]
                max-w-[720px]
                text-[34px]
                font-black
                leading-[1.08]
                tracking-[-1.2px]
                text-[#111820]
                sm:text-[40px]
                lg:text-[43px]
                xl:text-[48px]
              "
            >

              {data.title_line1}

              <br />

              <span className="text-[#910A1D]">
                {data.title_highlight}
              </span>

            </motion.h2>


            {/* ================= DESCRIPTION ================= */}

            <motion.p
              variants={fadeUp}
              className="
                mb-[25px]
                max-w-[690px]
                text-[14px]
                leading-[1.55]
                text-[#4b5563]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              {data.description}
            </motion.p>


            {/* =====================================================
                FEATURE GRID
            ====================================================== */}

            <motion.div
              variants={containerVariants}
              className="
                grid
                grid-cols-1
                gap-[8px]
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {items.map((item, idx) => {

                const Icon =
                  iconMap[item.icon] || ShieldCheck;

                return (

                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="
                      group
                      min-h-[88px]
                      rounded-[8px]
                      border
                      border-[#e6e6e6]
                      bg-white
                      px-[12px]
                      py-[12px]
                      shadow-[0_2px_10px_rgba(0,0,0,0.025)]
                      transition-all
                      duration-300
                      hover:-translate-y-[2px]
                      hover:border-[#d7aeb4]
                      hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)]
                    "
                  >

                    <div className="flex h-full items-center gap-[15px]">
                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-[56px]
                          w-[56px]
                          flex-shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#910A1D]
                          text-white
                        "
                      >
                        <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[1.5px] border-white">
                          <Icon className="h-[20px] w-[20px]" strokeWidth={1.7} />
                        </div>
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <h3 className="mb-[3px] text-[12px] font-bold leading-[1.2] text-[#151a20] sm:text-[13px]">
                          {item.title}
                        </h3>
                        <p className="text-[10px] leading-[1.3] text-[#5b6470] sm:text-[11px]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                  </motion.div>

                );

              })}

            </motion.div>

          </motion.div>



          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-80px',
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[530px]
              lg:mx-0
              lg:ml-auto
            "
          >

            {/* =================================================
                IMAGE WRAPPER
            ================================================= */}

            <div
              className="
                relative
                h-[390px]
                w-full
                sm:h-[470px]
                lg:h-[500px]
                xl:h-[520px]
              "
            >


              {/* MAIN IMAGE */}
              <div className="absolute inset-0 overflow-hidden rounded-[7px] bg-black">

                <Image
                  src={
                    data.image ||
                    '/images/feature-car.png'
                  }
                  alt="Why Choose Us"
                  fill
                  priority={false}
                  sizes="
                    (max-width: 768px) 90vw,
                    (max-width: 1200px) 40vw,
                    500px
                  "
                  className="
                    object-cover
                    object-center
                  "
                />


                {/* DARK OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/20
                  "
                />


                {/* =================================================
                    TEXT ON IMAGE
                ================================================= */}

                <div
                  className="
                    absolute
                    left-[30px]
                    top-[35px]
                    z-10
                    sm:left-[42px]
                    sm:top-[40px]
                  "
                >

                  <p
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      leading-[1.55]
                      tracking-[2px]
                      text-white/75
                      sm:text-[11px]
                    "
                  >
                    A Cleaner
                    <br />
                    Brighter
                    <br />
                    Better Drive
                  </p>

                </div>

              </div>



              {/* =================================================
                  100% BADGE
              ================================================= */}

              <div
                className="
                  absolute
                  right-[-8px]
                  top-[22px]
                  z-30
                  flex
                  h-[115px]
                  w-[115px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[9px]
                  border
                  border-white/80
                  bg-[#910A1D]
                  text-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.22)]
                  sm:right-[-10px]
                  sm:h-[137px]
                  sm:w-[137px]
                "
              >

                <Star
                  className="
                    mb-[4px]
                    h-[25px]
                    w-[25px]
                  "
                  strokeWidth={1.5}
                />

                <div
                  className="
                    text-[28px]
                    font-black
                    leading-none
                    sm:text-[31px]
                  "
                >
                  {data.badge?.value || '100%'}
                </div>

                <div
                  className="
                    mt-[6px]
                    max-w-[90px]
                    text-center
                    text-[10px]
                    font-medium
                    leading-[1.25]
                    sm:text-[11px]
                  "
                >
                  {data.badge?.label ||
                    'Customer Satisfaction'}
                </div>

              </div>



              {/* YOUR CAR / OUR CARE BOTTOM SHAPE */}
              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  z-30
                  flex
                  h-[140px]
                  w-[240px]
                  flex-col
                  justify-center
                  bg-[#610612]
                  pl-[65px]
                  text-white
                  sm:h-[160px]
                  sm:w-[280px]
                  sm:pl-[75px]
                "
                style={{
                  clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)',
                }}
              >
                {/* Small line */}
                <div className="mb-[15px] h-[1px] w-[35px] bg-white/60" />
                <span className="text-[11px] font-semibold uppercase tracking-[3px] text-white sm:text-[12px]">
                  Your Car
                </span>
                <span className="mt-[6px] text-[11px] font-semibold uppercase tracking-[3px] text-white sm:text-[12px]">
                  Our Care
                </span>
                <div className="mt-[15px] h-[1px] w-[35px] bg-white/60" />
              </div>


            </div>

          </motion.div>

        </div>
      </div>




    </section>
  );
}
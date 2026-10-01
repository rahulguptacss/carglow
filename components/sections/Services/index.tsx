'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight, Car, Armchair, Sparkles, Settings2, LifeBuoy } from 'lucide-react';
import { ServicesSectionData } from '../../types';

const CarSeatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10 5.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
    <path d="M9 13.5v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.5" />
    <path d="M9 14l-1.5 5.5A1.5 1.5 0 0 0 9 21h8.5a1.5 1.5 0 0 0 1.5-1.5v-3.5a1.5 1.5 0 0 0-1.5-1.5H12" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  Car: <Car />,
  Armchair: <CarSeatIcon />,
  Sparkles: <Sparkles />,
  Settings2: <Settings2 />,
  LifeBuoy: <LifeBuoy />,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services({ data }: { data: ServicesSectionData }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const timeoutId = setTimeout(() => {
      onInit(emblaApi);
      onSelect(emblaApi);
    }, 0);

    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    return () => clearTimeout(timeoutId);
  }, [emblaApi, onInit, onSelect]);

  if (!data) return null;

  const items = data.items && data.items.length > 0 ? data.items : [
    { title: 'Car Wash', description: 'Thorough exterior cleaning for a fresh and glossy look.', image: '/services/1.png', link: '#', icon: 'Car' },
    { title: 'Interior Detailing', description: 'Deep cleaning for a healthier and more comfortable ride.', image: '/services/2.png', link: '#', icon: 'Armchair' }
  ];

  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="w-full max-w-[700px] flex-1">
            <div className="mb-3 flex items-center gap-4">
              <span className="h-[2px] w-[30px] bg-[#910A1D]" />
              <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#910A1D]">
                {data.subtitle || 'OUR SERVICES'}
              </span>
            </div>

            <h2 className="mb-3 text-[32px] font-black leading-[1.15] tracking-tight text-[#111] sm:text-[38px] lg:text-[40px] xl:text-[42px]">
              {data.title_line1} <span className="text-[#910A1D]">{data.title_highlight}</span>
            </h2>

            <p className="max-w-[580px] text-[15px] leading-[1.65] text-zinc-500 sm:text-[16px] lg:text-[17px]">
              {data.description}
            </p>
          </div>

          <div className="mt-4 flex-shrink-0 md:mt-0">
            <a
              href={data.button?.href || '#'}
              className="inline-flex h-[54px] items-center justify-center gap-3 bg-[#8b0e1b] px-9 text-[12px] font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#700b15]"
            >
              {data.button?.text || 'VIEW ALL SERVICES'}
              <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <motion.div
            className="flex -ml-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {items.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] xl:flex-[0_0_20%] min-w-0 pl-3">
                <motion.div
                  variants={itemVariants}
                  className="group flex h-full flex-col rounded-xl bg-white shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] border border-zinc-100/50 overflow-hidden relative"
                >
                  {/* Image Section */}
                  <div className="relative h-[160px] w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:bg-black/0" />
                  </div>

                  {/* Overlapping Icon */}
                  <div className="absolute left-5 top-[126px] z-20 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[4px] border-white bg-[#8b0e1b] text-white transition-transform duration-300 group-hover:scale-110">
                    {React.cloneElement((iconMap[item.icon] as React.ReactElement<any>) || <Car />, {
                      className: 'h-7 w-7',
                      strokeWidth: 2,
                    })}
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-10">
                    <h3 className="mb-2 text-[17px] font-black tracking-tight text-[#111] transition-colors duration-300 group-hover:text-[#8b0e1b]">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-[13px] leading-[1.6] text-zinc-500">
                      {item.description}
                    </p>
                    <div>
                      <a
                        href={item.link}
                        className="inline-flex items-center gap-2 text-[14px] font-bold text-[#8b0e1b] transition-colors hover:text-[#700b15]"
                      >
                        <span className="border-b-[1.5px] border-[#8b0e1b] pb-[1px] leading-tight">Learn More</span>
                        <ArrowRight className="h-[14px] w-[14px]" strokeWidth={2.5} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1 transition-all duration-300 ${index === selectedIndex ? 'w-10 bg-[#910A1D]' : 'w-10 bg-zinc-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

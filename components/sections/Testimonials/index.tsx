"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { TestimonialsProps } from '../../types';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export default function Testimonials({ data, isGrid = false, itemsPerPage = 6, showPagination = true, bgClass = "bg-[#fdfdfd]" }: TestimonialsProps) {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  
  const reviews = data?.reviews && data.reviews.length > 0 ? data.reviews : [
    { text: "The team at CarGlow did an amazing job on my SUV. It looks brand new! I highly recommend their Gold package.", author: "Maria Davis", role: "Verified Client", avatar: "/testimonails/1.png", rating: 5 },
    { text: "Excellent service and attention to detail. They removed stains from my seats that I thought were permanent.", author: "John Thomas", role: "Verified Client", avatar: "/testimonails/2.png", rating: 5 }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  const currentReviews = isGrid && showPagination ? reviews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : reviews;
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [autoplay.current]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className={`py-[40px] sm:py-[50px] ${bgClass}`}>
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        
        {/* =================================================
            HEADING
        ================================================= */}
        <div className="mb-[30px] text-center">
          <div className="mb-[15px] flex items-center justify-center gap-4">
            <span className="h-[1.5px] w-[40px] bg-[#910A1D]" />
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#910A1D]">
              {data.subtitle}
            </span>
            <span className="h-[1.5px] w-[40px] bg-[#910A1D]" />
          </div>
          <h2 className="mb-[15px] text-[32px] font-black leading-[1.15] tracking-tight text-[#111820] sm:text-[40px] lg:text-[46px]">
            {data.title_line1} <span className="text-[#910A1D]">{data.title_highlight}</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-[15px] sm:text-[16px] leading-[1.6] text-[#4b5563]">
            {data.description}
          </p>
        </div>
        
        {/* =================================================
            CARDS SLIDER (EMBLA) OR GRID
        ================================================= */}
        <div className={isGrid ? "pb-[15px]" : "overflow-hidden pb-[15px]"} ref={isGrid ? null : emblaRef}>
          <div className={isGrid ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]" : "flex -ml-[20px]"}>
            {currentReviews.map((review, idx) => (
              <div 
                key={idx} 
                className={isGrid ? "w-full" : "pl-[20px] min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%]"}
              >
                <div className="h-full bg-white px-[30px] py-[20px] sm:px-[35px] sm:py-[25px] rounded-[16px] border border-[#f1f1f1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform duration-300">
                  
                  {/* TOP ROW: QUOTE ICON & STARS */}
                  <div className="flex items-center justify-between mb-[10px]">
                    <div className="flex items-center justify-center h-[55px] w-[55px] rounded-full bg-[#910A1D] text-white">
                      <span className="font-serif text-[40px] leading-none translate-y-[6px]">“</span>
                    </div>
                    <div className="flex items-center gap-[2px] text-[#910A1D]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-[20px] h-[20px] ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} strokeWidth={1} />
                      ))}
                    </div>
                  </div>
                  
                  {/* REVIEW TEXT */}
                  <p className="text-[17px] sm:text-[18px] leading-[1.6] text-[#1f2937] font-medium line-clamp-3">
                    “{review.text}”
                  </p>
                  
                  {/* DIVIDER */}
                  <div className="my-[15px] h-[1px] w-full bg-[#f1f1f1]" />
                  
                  {/* AUTHOR ROW */}
                  <div className="flex items-center gap-[20px]">
                    <div className="h-[75px] w-[75px] flex-shrink-0 overflow-hidden rounded-full bg-gray-100">
                      {review.avatar ? (
                        <Image src={review.avatar} alt={review.author} width={75} height={75} className="h-full w-full object-cover object-top scale-[1.2]" />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-xs text-gray-400">IMG</div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[19px] font-bold text-[#111820] tracking-tight">{review.author}</h4>
                      <div className="flex items-center gap-[6px] mt-[4px] text-[15px] text-[#4b5563]">
                        <MapPin className="h-[16px] w-[16px] text-[#910A1D] fill-[#910A1D]" strokeWidth={1.5} />
                        {review.role}
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAROUSEL INDICATORS */}
        {!isGrid && scrollSnaps.length > 1 && (
          <div className="mt-[30px] flex items-center justify-center gap-[10px]">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-[8px] w-[8px] rounded-full transition-colors ${
                  index === selectedIndex ? 'bg-[#910A1D]' : 'bg-[#d1d5db] hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {isGrid && showPagination && totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-zinc-100 text-zinc-300 cursor-not-allowed'
                  : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900'
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                  currentPage === i + 1 
                    ? 'bg-[#910A1D] text-white shadow-lg shadow-[#910A1D]/20' 
                    : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900'
                }`}
                aria-label={`Go to page ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-zinc-100 text-zinc-300 cursor-not-allowed'
                  : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900'
              }`}
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
}

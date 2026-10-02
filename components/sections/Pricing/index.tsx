import React from 'react';
import Image from 'next/image';
import { PricingSectionData } from '../../types';
import { Check } from 'lucide-react';

export default function Pricing({ data, bgClass = "bg-[#fdfdfd]" }: { data: PricingSectionData, bgClass?: string }) {
  if (!data) return null;

  const packages = data.packages && data.packages.length > 0 ? data.packages : [
    { name: 'SILVER PACKAGE', description: 'Essential Care\nfor a Cleaner Ride', price: '$49', period: '/Service', is_popular: false, image: '/price/1.png', features: [{ text: 'Exterior Hand Wash', included: true }], button: { text: 'BOOK THIS PACKAGE →', href: '#' } },
    { name: 'GOLD PACKAGE', description: 'Complete Care\nInside & Out', price: '$79', period: '/Service', is_popular: true, image: '/price/2.png', features: [{ text: 'Deep Interior Cleaning', included: true }], button: { text: 'BOOK THIS PACKAGE →', href: '#' } }
  ];

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
            CARDS GRID
        ================================================= */}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[15px] lg:gap-[15px] items-start pt-[15px]">
          {packages.map((pkg, idx) => {
            const isPop = pkg.is_popular;
            
            return (
              <div
                key={idx}
                className={`relative flex flex-col rounded-[12px] bg-white transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] ${
                  isPop
                    ? 'border-2 border-[#910A1D] shadow-[0_10px_30px_rgba(145,10,29,0.15)] z-10'
                    : 'border border-[#e5e7eb] shadow-[0_5px_15px_rgba(0,0,0,0.04)] mt-[15px]'
                }`}
              >
                
                {/* MOST POPULAR PILL */}
                {isPop && (
                  <div className="absolute left-1/2 top-0 z-20 flex h-[32px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#910A1D] px-[28px] text-[11px] font-bold tracking-wide uppercase text-white shadow-md">
                    MOST POPULAR
                  </div>
                )}
                
                {/* TOP IMAGE SECTION */}
                <div className={`relative h-[170px] w-full overflow-hidden ${isPop ? 'rounded-t-[10px]' : 'rounded-t-[11px]'}`}>
                  {/* Background Image */}
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                  {/* Dark overlay to make red pop */}
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Red Angled Overlay */}
                  <div
                    className="absolute bottom-0 left-0 top-0 w-[75%] bg-[#6a0513] z-10"
                    style={{
                      clipPath: 'polygon(0 0, 45% 0, 68% 100%, 0 100%)'
                    }}
                  />
                  
                  {/* Text on Image (inside red area) */}
                  <div className="absolute left-[30px] top-[30px] z-20 pr-[30%]">
                    <h3 className="text-[20px] font-bold leading-[1.1] text-white tracking-[0.5px]">
                      {pkg.name.split(' ').map((word, i, arr) => (
                        <React.Fragment key={i}>
                          {word}
                          {i !== arr.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                    <div className="my-[10px] h-[1px] w-[35px] bg-white/50" />
                    {pkg.description && (
                      <p className="whitespace-pre-line text-[13px] leading-[1.4] text-white/90">
                        {pkg.description}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* BOTTOM CONTENT SECTION */}
                <div className="flex flex-1 flex-col px-[25px] pb-[30px] pt-[25px]">
                  
                  {/* Price Block */}
                  <div className="mb-[20px]">
                    <div className="mb-[5px] text-[10px] font-bold uppercase tracking-[1px] text-[#6b7280]">
                      Starting From
                    </div>
                    <div className="flex items-baseline gap-[2px]">
                      <span className="text-[42px] font-black leading-none tracking-tighter text-[#910A1D]">
                        {pkg.price}
                      </span>
                      <span className="text-[14px] font-medium text-[#6b7280]">
                        {pkg.period}
                      </span>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="mb-[20px] h-[1px] w-full bg-[#f1f1f1]" />
                  
                  {/* Features List */}
                  <ul className="mb-[35px] flex flex-1 flex-col gap-[14px]">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-[12px]">
                        <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-full bg-[#7f0817]">
                          <Check className="h-[12px] w-[12px] text-white" strokeWidth={3} />
                        </div>
                        <span className="text-[13px] font-medium text-[#374151]">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Button */}
                  <a
                    href={pkg.button.href}
                    className={`flex h-[48px] w-full items-center justify-center rounded-[6px] text-[12px] font-bold uppercase tracking-[1px] transition-colors duration-300 ${
                      isPop
                        ? 'bg-[#910A1D] text-white hover:bg-[#7a0815]'
                        : 'border border-[#910A1D] bg-transparent text-[#910A1D] hover:bg-[#910A1D] hover:text-white'
                    }`}
                  >
                    {pkg.button.text}
                  </a>
                  
                </div>
                
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

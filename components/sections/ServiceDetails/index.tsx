'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight, User, Phone, Car, Calendar, MessageSquare, Lock, PhoneCall, Droplet, Leaf, Sparkles, Clock, Droplets, Settings, CheckCircle2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetailsProps {
  data: any;
  allServices: any[];
  sidebarData?: any;
}

export default function ServiceDetails({ data, allServices, sidebarData }: ServiceDetailsProps) {
  // Split title to highlight the second part
  const titleWords = data.title.split(' ');
  const firstWord = titleWords[0];
  const restWords = titleWords.slice(1).join(' ');

  // Dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState("");
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-start">
          
          {/* Main Content (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 lg:w-[65%] xl:w-[70%]"
          >
            
            {/* Header section */}
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-4">
                <span className="h-[2px] w-[30px] bg-[#910A1D]" />
                <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#910A1D]">
                  SERVICE DETAILS
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[56px] font-black leading-tight tracking-tight text-[#111] mb-2">
                {firstWord} <span className="text-[#910A1D]">{restWords}</span>
              </h2>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-[#111] mb-3">
                {data.subtitle}
              </h3>
              <p className="text-zinc-500 text-[15px] md:text-[16px] leading-[1.8]">
                {data.description}
              </p>
            </div>

            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[250px] sm:h-[350px] md:h-[450px] w-full overflow-hidden rounded-md mb-8"
            >
              <Image
                src={data.image || '/services/1.png'}
                alt={data.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Benefits / Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10">
              {data.benefits?.map((feature: any, index: number) => {
                const IconComponent = (LucideIcons as any)[feature.icon] || Droplet;
                const isFilled = ['Droplet', 'Leaf'].includes(feature.icon);
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    key={index} 
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-[84px] h-[84px] rounded-full bg-[#910A1D]/10 flex items-center justify-center mb-3 transition-transform hover:scale-110 duration-300">
                      <IconComponent 
                        className="w-9 h-9 text-[#8b0e1b]" 
                        strokeWidth={isFilled ? 1 : 2} 
                        fill={isFilled ? "currentColor" : "none"} 
                      />
                    </div>
                    <h4 className="text-[17px] sm:text-[18px] font-black text-[#0f172a] mb-1">{feature.title}</h4>
                    <p className="text-[15px] text-slate-500 leading-[1.5] max-w-[170px]">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Service Process */}
            <div className="mb-10 border-t border-slate-200 pt-10">
              <div className="mb-2 flex items-center gap-3">
                <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H38M38 5L34 1M38 5L34 9" stroke="#910A1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#910A1D]">
                  SERVICE PROCESS
                </span>
              </div>
              <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-black text-[#0f172a] mb-10">
                How It <span className="text-[#910A1D]">Works</span>
              </h2>

              <div className="grid grid-cols-2 gap-y-10 gap-x-4 md:flex md:flex-row md:gap-0 justify-between items-start w-full relative">
                {data.process?.map((step: any, index: number) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 * index }}
                    key={index} 
                    className="flex flex-col items-center text-center relative flex-1 w-full"
                  >
                    
                    {/* Circle and Line */}
                    <div className="relative w-full flex justify-center mb-5">
                      <div className="w-[84px] h-[84px] rounded-full bg-[#910A1D]/10 flex items-center justify-center z-10 relative">
                        <span className="text-[26px] font-black text-[#910A1D]">{step.number || step.num}</span>
                      </div>
                      
                      {/* Dotted Line connecting circles */}
                      {index < (data.process.length - 1) && (
                        <div className="hidden md:flex absolute top-[42px] left-[50%] w-full items-center pl-[64px] pr-[64px] z-0 -translate-y-1/2">
                          <div className="h-0 flex-1 border-t-[2px] border-dashed border-slate-400"></div>
                          <ArrowRight className="w-[18px] h-[18px] text-slate-400 ml-[-2px]" strokeWidth={2.5} />
                        </div>
                      )}
                    </div>

                    <h4 className="text-[17px] sm:text-[18px] font-black text-[#0f172a] mb-1">{step.title}</h4>
                    <p className="text-[15px] text-slate-500 leading-[1.5] max-w-[170px] mx-auto">{step.description || step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Service Gallery */}
            <div className="border-t border-slate-200 pt-10">
              <div className="mb-2 flex items-center gap-3">
                <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H38M38 5L34 1M38 5L34 9" stroke="#910A1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#910A1D]">
                  SERVICE GALLERY
                </span>
              </div>
              <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-black text-[#0f172a] mb-8">
                Service <span className="text-[#910A1D]">Gallery</span>
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.gallery?.map((img: any, index: number) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    key={index} 
                    className="relative h-[160px] md:h-[180px] w-full rounded-md overflow-hidden group"
                  >
                    <Image
                      src={typeof img === 'string' ? img : `/services/${(img % 5) + 1}.png`}
                      alt={`Gallery Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Sidebar (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[35%] xl:w-[30%] lg:sticky lg:top-32 w-full space-y-6"
          >
            <div className="space-y-6">
              
              {/* Our Services List */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#F9F9F9] rounded-md overflow-hidden border border-zinc-100"
              >
                <div className="bg-[#910A1D] py-5 px-6">
                  <h3 className="text-[20px] font-black text-white">{sidebarData?.services_title || "Our Services"}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {allServices.map((service, index) => {
                      const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                      const isActive = data.title === service.title;
                      
                      return (
                        <li key={index}>
                          <Link 
                            href={`/services/${slug}`}
                            className={`flex items-center justify-between py-[10px] px-4 font-medium text-[15px] transition-all duration-300 ${
                              isActive 
                                ? 'bg-[#910A1D]/10 text-[#910A1D]' 
                                : 'bg-white text-zinc-600 hover:text-[#910A1D]'
                            }`}
                          >
                            {service.title}
                            <ChevronRight size={18} className={isActive ? 'text-[#910A1D]' : 'text-zinc-400'} />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>

              {/* Quick Enquiry Form */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#F9F9F9] rounded-md p-6 sm:p-8 border border-zinc-100 text-center"
              >
                <div className="mb-3 flex items-center justify-center gap-3">
                  <span className="h-[2px] w-[20px] bg-[#910A1D]" />
                  <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#910A1D]">
                    {sidebarData?.enquiry?.subtitle || "QUICK ENQUIRY"}
                  </span>
                  <span className="h-[2px] w-[20px] bg-[#910A1D]" />
                </div>
                <h3 className="text-[24px] font-black text-[#111] mb-3">{sidebarData?.enquiry?.title || "Book This Service"}</h3>
                <p className="text-[13px] text-zinc-500 mb-6">
                  {sidebarData?.enquiry?.description || "Fill in your details and we'll get back to you shortly."}
                </p>

                <form className="space-y-3 text-left">
                  <div className="relative">
                    <User className="absolute left-4 top-[14px] w-[18px] h-[18px] text-zinc-400" />
                    <input type="text" placeholder={sidebarData?.enquiry?.form_placeholders?.name || "Your Name *"} className="w-full h-[48px] pl-11 pr-4 bg-white border border-zinc-200 rounded-md text-[14px] outline-none focus:border-[#910A1D] transition-colors" />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-[14px] w-[18px] h-[18px] text-zinc-400" />
                    <input 
                      type="tel" 
                      inputMode="numeric"
                      placeholder={sidebarData?.enquiry?.form_placeholders?.phone || "Phone Number *"} 
                      className="w-full h-[48px] pl-11 pr-4 bg-white border border-zinc-200 rounded-md text-[14px] outline-none focus:border-[#910A1D] transition-colors"
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                      }}
                    />
                  </div>
                  <div className="relative" ref={dropdownRef}>
                    <Car className="absolute left-4 top-[14px] w-[18px] h-[18px] text-zinc-400 z-10" />
                    
                    {/* Custom Dropdown Trigger */}
                    <div 
                      className={`w-full h-[48px] pl-11 pr-4 bg-white border ${isDropdownOpen ? 'border-[#910A1D]' : 'border-zinc-200'} rounded-md text-[14px] transition-colors flex items-center justify-between cursor-pointer`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className={selectedService ? "text-[#111]" : "text-zinc-500"}>
                        {selectedService || sidebarData?.enquiry?.form_placeholders?.service || "Select Service"}
                      </span>
                      <ChevronRight className={`w-[16px] h-[16px] text-zinc-400 transition-transform duration-300 ${isDropdownOpen ? '-rotate-90' : 'rotate-90'}`} />
                    </div>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-[calc(100%+5px)] w-full bg-white border border-zinc-200 rounded-md shadow-lg z-50 overflow-hidden"
                        >
                          <div className="max-h-[220px] overflow-y-auto custom-scrollbar">
                            <div 
                              className="px-4 py-3 text-[14px] text-zinc-500 hover:bg-[#F9F9F9] hover:text-[#910A1D] cursor-pointer transition-colors"
                              onClick={() => {
                                setSelectedService("");
                                setIsDropdownOpen(false);
                              }}
                            >
                              {sidebarData?.enquiry?.form_placeholders?.service || "Select Service"}
                            </div>
                            {allServices.map((s, i) => (
                              <div 
                                key={i} 
                                className={`px-4 py-3 text-[14px] cursor-pointer transition-colors ${selectedService === s.title ? 'bg-[#910A1D]/10 text-[#910A1D] font-medium' : 'text-zinc-600 hover:bg-[#F9F9F9] hover:text-[#910A1D]'}`}
                                onClick={() => {
                                  setSelectedService(s.title);
                                  setIsDropdownOpen(false);
                                }}
                              >
                                {s.title}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-[14px] w-[18px] h-[18px] text-zinc-400 pointer-events-none" />
                    <input 
                      type="date" 
                      className="w-full h-[48px] pl-11 pr-4 bg-white border border-zinc-200 rounded-md text-[14px] outline-none focus:border-[#910A1D] transition-colors text-zinc-500 cursor-pointer" 
                      onClick={(e) => {
                        try {
                          e.currentTarget.showPicker();
                        } catch (err) {
                          // Fallback for browsers that don't support showPicker()
                        }
                      }}
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-[14px] w-[18px] h-[18px] text-zinc-400" />
                    <textarea placeholder={sidebarData?.enquiry?.form_placeholders?.message || "Your Message (Optional)"} className="w-full h-[100px] pl-11 pr-4 pt-3 bg-white border border-zinc-200 rounded-md text-[14px] outline-none focus:border-[#910A1D] transition-colors resize-none"></textarea>
                  </div>
                  <button type="button" className="w-full h-[50px] bg-[#910A1D] text-white font-bold text-[15px] rounded-md flex items-center justify-center gap-2 hover:bg-[#7a0818] transition-colors cursor-pointer">
                    {sidebarData?.enquiry?.button_text || "Send Enquiry"} <ChevronRight className="w-[18px] h-[18px]" />
                  </button>
                  <p className="flex items-center justify-center gap-2 text-[12px] text-zinc-500 mt-3">
                    <Lock className="w-[14px] h-[14px]" /> {sidebarData?.enquiry?.footer_text || "Your information is safe with us."}
                  </p>
                </form>
              </motion.div>

              {/* Need Help Widget */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#F9F9F9] rounded-md p-8 border border-zinc-100 text-center"
              >
                <div className="w-[60px] h-[60px] mx-auto bg-[#910A1D] rounded-full flex items-center justify-center mb-6">
                  <PhoneCall className="w-[24px] h-[24px] text-white" fill="currentColor" />
                </div>
                <h4 className="text-[20px] font-black text-[#111] mb-2">{sidebarData?.help?.title || "Need Help?"}</h4>
                <p className="text-[14px] text-zinc-500 mb-6 max-w-[200px] mx-auto leading-relaxed">
                  {sidebarData?.help?.description || "Have questions about this service? Our team is here to help."}
                </p>
                <a href={`tel:${(sidebarData?.help?.phone || "+91 98765 43210").replace(/[^0-9+]/g, '')}`} className="block text-[22px] sm:text-[26px] font-black text-[#910A1D] mb-2 hover:text-[#7a0818] transition-colors">
                  {sidebarData?.help?.phone || "+91 98765 43210"}
                </a>
                <p className="text-[12px] text-zinc-500 font-medium">
                  {sidebarData?.help?.time || "Mon - Sat: 9:00 AM - 7:00 PM"}
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

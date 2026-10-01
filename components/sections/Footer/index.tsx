"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FooterData } from '../../types';
import { MapPin, Phone, Mail, Share2, ChevronRight, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const socialIconMap: Record<string, React.ElementType> = {
  Facebook: FaFacebookF, 
  Twitter: FaTwitter, 
  Instagram: FaInstagram, 
  Linkedin: FaLinkedinIn,
  Youtube: FaYoutube
};

export default function Footer({ data }: { data: FooterData }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    contact: true // Contact Us is open by default on mobile based on the screenshot
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="relative bg-[#0d0d0d] overflow-hidden pt-[80px]">
      
      {/* Background Image */}
      <div 
        className="absolute top-0 right-0 h-full w-full lg:w-[60%] z-0 pointer-events-none bg-no-repeat bg-cover bg-right"
        style={{ backgroundImage: "url('/img/footer.png')" }}
      >
        {/* Gradient overlay to fade it into the dark background smoothly - now applied to mobile too! */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/90 lg:via-[#0d0d0d]/60 to-[#0d0d0d]/30 lg:to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-10">
        
        {/* Top Section - 4 Columns */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-0 lg:gap-[0px] pb-[40px] lg:pb-[70px]">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-center lg:items-start lg:w-[25%] lg:pr-[40px] mb-[30px] lg:mb-0">
            <div className="mb-[25px] lg:mb-[20px] w-[220px]">
              <Image 
                src="/logo/logo.png" 
                alt="CarGlow" 
                width={220} 
                height={70} 
                className="object-contain"
              />
            </div>
            <p className="hidden lg:block text-[#9ca3af] text-[15px] leading-[1.65] mb-[30px] max-w-[280px]">
              {data.description}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-[15px]">
              {data.socials.map((social, idx) => {
                const Icon = socialIconMap[social.icon] || Share2;
                return (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="flex h-[42px] w-[42px] lg:h-[38px] lg:w-[38px] items-center justify-center rounded-full border border-[#910A1D] text-white hover:bg-[#910A1D] transition-all"
                  >
                    <Icon size={16} className="lg:scale-[0.85]" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="lg:w-[18%] lg:border-l lg:border-white/10 lg:pl-[40px] border-b border-white/10 lg:border-b-0 py-[20px] lg:py-0">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-auto"
              onClick={() => toggleSection('quick_links')}
            >
              <h3 className="text-[16px] lg:text-[19px] font-bold text-white mb-0 lg:mb-[10px]">Quick Links</h3>
              <ChevronDown className={`lg:hidden w-[18px] h-[18px] text-white transition-transform ${openSections['quick_links'] ? 'rotate-180' : ''}`} />
            </div>
            <div className="h-[2px] w-[30px] bg-[#910A1D] mb-[25px] hidden lg:block"></div>
            <div className={`grid transition-all duration-300 ease-in-out lg:!grid-rows-[1fr] lg:!opacity-100 lg:!mt-0 ${openSections['quick_links'] ? 'grid-rows-[1fr] opacity-100 mt-[20px]' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
              <div className="overflow-hidden">
                <ul className="flex flex-col space-y-[15px]">
                  {data.quick_links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="group flex items-center gap-[10px] text-[15px] text-[#9ca3af] hover:text-white transition-colors whitespace-nowrap">
                        <ChevronRight className="h-[14px] w-[14px] text-[#910A1D] group-hover:translate-x-1 transition-transform" strokeWidth={3} /> 
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Column 3: Our Services */}
          <div className="lg:w-[22%] lg:border-l lg:border-white/10 lg:pl-[40px] border-b border-white/10 lg:border-b-0 py-[20px] lg:py-0">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-auto"
              onClick={() => toggleSection('our_services')}
            >
              <h3 className="text-[16px] lg:text-[19px] font-bold text-white mb-0 lg:mb-[10px]">Our Services</h3>
              <ChevronDown className={`lg:hidden w-[18px] h-[18px] text-white transition-transform ${openSections['our_services'] ? 'rotate-180' : ''}`} />
            </div>
            <div className="h-[2px] w-[30px] bg-[#910A1D] mb-[25px] hidden lg:block"></div>
            <div className={`grid transition-all duration-300 ease-in-out lg:!grid-rows-[1fr] lg:!opacity-100 lg:!mt-0 ${openSections['our_services'] ? 'grid-rows-[1fr] opacity-100 mt-[20px]' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
              <div className="overflow-hidden">
                <ul className="flex flex-col space-y-[15px]">
                  {data.our_services.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="group flex items-center gap-[10px] text-[15px] text-[#9ca3af] hover:text-white transition-colors whitespace-nowrap">
                        <ChevronRight className="h-[14px] w-[14px] text-[#910A1D] group-hover:translate-x-1 transition-transform" strokeWidth={3} /> 
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Column 4: Contact Us */}
          <div className="lg:w-[35%] lg:border-l lg:border-white/10 lg:pl-[40px] border-b border-white/10 lg:border-b-0 py-[20px] lg:py-0">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-auto"
              onClick={() => toggleSection('contact')}
            >
              <h3 className="text-[16px] lg:text-[19px] font-bold text-white mb-0 lg:mb-[10px]">Contact Us</h3>
              <ChevronDown className={`lg:hidden w-[18px] h-[18px] text-white transition-transform ${openSections['contact'] ? 'rotate-180' : ''}`} />
            </div>
            <div className="h-[2px] w-[30px] bg-[#910A1D] mb-[25px] hidden lg:block"></div>
            <div className={`grid transition-all duration-300 ease-in-out lg:!grid-rows-[1fr] lg:!opacity-100 lg:!mt-0 ${openSections['contact'] ? 'grid-rows-[1fr] opacity-100 mt-[25px]' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
              <div className="overflow-hidden">
                <ul className="flex flex-col space-y-[25px] lg:space-y-[22px]">
                  
                  <li className="flex items-center gap-[15px]">
                    <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full bg-[#910A1D]">
                      <Phone className="h-[16px] w-[16px] text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#9ca3af] mb-[2px]">Call Us</span>
                      <span className="text-[14px] font-medium text-white whitespace-nowrap">{data.contact.phone}</span>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-[15px]">
                    <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full bg-[#910A1D]">
                      <Mail className="h-[16px] w-[16px] text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#9ca3af] mb-[2px]">Email Us</span>
                      <span className="text-[14px] font-medium text-white">{data.contact.email}</span>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-[15px]">
                    <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full bg-[#910A1D]">
                      <MapPin className="h-[16px] w-[16px] text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] text-[#9ca3af] mb-[2px]">Our Location</span>
                      <span className="text-[14px] font-medium text-white leading-[1.5] max-w-[180px]">
                        {data.contact.address}
                      </span>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>
        
      {/* Bottom Footer Border & Content */}
      <div className="relative z-10 bg-[#0a0a0a] border-t-[3px] border-[#910A1D] py-[25px]">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-[15px] px-6 sm:px-8 lg:px-10 md:flex-row">
          <p 
            className="text-[14px] text-[#9ca3af] text-center"
            dangerouslySetInnerHTML={{ 
              __html: data.copyright || 'Copyright &copy; 2026. All rights reserved. Powered by Lestow' 
            }}
          />
          <div className="flex items-center justify-center flex-wrap gap-[15px] lg:gap-[20px] text-[13px] lg:text-[14px] text-[#e5e7eb]">
            <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Privacy Policy</a>
            <div className="h-[14px] w-[2px] bg-[#910A1D]"></div>
            <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Terms & Conditions</a>
            <div className="h-[14px] w-[2px] bg-[#910A1D] hidden sm:block"></div>
            <a href="#" className="hover:text-white transition-colors whitespace-nowrap hidden sm:block">Sitemap</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

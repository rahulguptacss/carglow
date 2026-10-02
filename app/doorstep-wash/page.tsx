"use client";

import React from 'react';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import data from '../../components/data/data.json';

// Import newly structured components
import DoorstepAbout from '../../components/sections/DoorstepAbout';
import Services from '../../components/sections/Services';
import DoorstepHowItWorks from '../../components/sections/DoorstepHowItWorks';
import DoorstepBooking from '../../components/sections/DoorstepBooking';

export default function DoorstepWashPage() {
  const common = data.common;
  const sections = data.categories.Automotive.templateComponents["template-1"].sections;

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />
      
      <main className="flex-1 w-full">
        {/* Banner */}
        <Breadcrumb 
          title="DOORSTEP CAR WASH"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Doorstep Car Wash' }
          ]}
        />
        
        {/* Section 1: Professional Car Wash At Your Doorstep */}
        <DoorstepAbout data={sections.doorstep_about} />

        {/* Section 2: Our Services (Using global Services component with Grid mode) */}
        <Services data={sections.services} isGrid={true} itemsPerPage={4} variant="doorstep" showPagination={false} />

        {/* Section 3: How it Works */}
        <DoorstepHowItWorks data={sections.doorstep_how_it_works} />

        {/* Section 4: Booking Form & Features */}
        <DoorstepBooking data={sections.doorstep_booking} />
      </main>

      <Footer data={common.Footer} />
      
      <BackToTop />
    </div>
  );
}

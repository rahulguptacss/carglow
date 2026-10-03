"use client";

import React from 'react';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';
import DoorstepAbout from '../../components/sections/DoorstepAbout';
import Services from '../../components/sections/Services';
import DoorstepHowItWorks from '../../components/sections/DoorstepHowItWorks';
import DoorstepBooking from '../../components/sections/DoorstepBooking';

export default function DoorstepWashPage() {
  const pageData = pages.doorstep_wash;

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />

      <main className="flex-1 w-full">
        <Breadcrumb
          title={pageData.title}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: pageData.pageName }
          ]}
        />

        <DoorstepAbout data={sections.doorstep_about} />
        <Services data={sections.services} isGrid={true} itemsPerPage={4} variant="doorstep" showPagination={false} />
        <DoorstepHowItWorks data={sections.doorstep_how_it_works} />
        <DoorstepBooking data={sections.doorstep_booking} />
      </main>

      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}

import React from 'react';
import Header from '../../components/sections/Header';

import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import ThankYou from '../../components/sections/ThankYou';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.thank_you.metadata.title,
};

export default function ThankYouPage() {
  const pageData = pages.thank_you;
  const sectionData = sections.thank_you;

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />

      <main className="flex-1 w-full flex items-center justify-center relative bg-zinc-50/50 py-12">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#910A1D 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative z-10 w-full">
          <ThankYou data={sectionData} />
        </div>
      </main>

      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}

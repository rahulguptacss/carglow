import React from 'react';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Pricing from '../../components/sections/Pricing';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import data from '../../components/data/data.json';

export default function PackagesPage() {
  const common = data.common;
  const sections = data.categories.Automotive.templateComponents["template-1"].sections;

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />
      
      <main className="flex-1 w-full">
        <Breadcrumb 
          title="OUR PACKAGES"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Our Packages' }
          ]}
        />
        
        <Pricing data={sections.pricing} />
      </main>

      <Footer data={common.Footer} />
      
      <BackToTop />
    </div>
  );
}

import React from 'react';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Services from '../../components/sections/Services';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';

import data from '../../components/data/data.json';

export const metadata = {
  title: 'CarGlow - Services',
};

export default function ServicesPage() {
  const common = data.common;
  const sections = data.categories.Automotive.templateComponents["template-1"].sections;

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />

      <main className="flex-1 w-full">
        <Breadcrumb
          title="SERVICES"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Services' }
          ]}
          backgroundImage="/banner/1.png"
        />

        <Services data={sections.services} isGrid={true} itemsPerPage={8} />
      </main>

      <Footer data={common.Footer} />

      <BackToTop />
    </div>
  );
}

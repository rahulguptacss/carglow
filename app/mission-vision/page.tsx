import React from 'react';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Mission from '../../components/sections/Mission';
import Vision from '../../components/sections/Vision';
import Testimonials from '../../components/sections/Testimonials';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';

import data from '../../components/data/data.json';

export default function MissionVisionPage() {
  const common = data.common;
  const sections = data.categories.Automotive.templateComponents["template-1"].sections;

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />

      <main className="flex-1 w-full">
        <Breadcrumb
          title="Mission & Vision"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Mission & Vision' }
          ]}
          backgroundImage="/banner/2.png"
        />

        <Mission data={sections.mission} />
        <Vision data={sections.vision} />
        <Testimonials data={sections.testimonials} />
      </main>

      <Footer data={common.Footer} />

      <BackToTop />
    </div>
  );
}

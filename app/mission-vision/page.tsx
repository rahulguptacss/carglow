import React from 'react';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Mission from '../../components/sections/Mission';
import Vision from '../../components/sections/Vision';
import Testimonials from '../../components/sections/Testimonials';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.mission_vision.metadata.title,
};

export default function MissionVisionPage() {
  const pageData = pages.mission_vision;

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

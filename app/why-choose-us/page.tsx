import React from 'react';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Features from '../../components/sections/Features';
import WorkProcess from '../../components/sections/WorkProcess';
import Cta from '../../components/sections/Cta';
import Testimonials from '../../components/sections/Testimonials';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.why_choose_us.metadata.title,
};

export default function WhyChooseUsPage() {
  const pageData = pages.why_choose_us;

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

        <Features data={sections.features} />
        <WorkProcess data={sections.work_process} />
        <Cta data={sections.cta} />
        <Testimonials data={sections.testimonials} />
      </main>

      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}

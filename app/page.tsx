import React from 'react';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import WorkProcess from '../components/sections/WorkProcess';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';
import Cta from '../components/sections/Cta';
import Blog from '../components/sections/Blog';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/ui/BackToTop';

// Use data.json
import data from '../components/data/data.json';

export default function Home() {
  const common = data.common;
  const sections = data.categories.Automotive.templateComponents["template-1"].sections;

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />
      
      <main className="flex-1 w-full">
        <Hero data={sections.hero} />
        <About data={sections.about} />
        <WorkProcess data={sections.work_process} />
        <Services data={sections.services} bgClass="bg-zinc-50" />
        <Features data={sections.features} />
        <Pricing data={sections.pricing} bgClass="bg-zinc-50" />
        <Testimonials data={sections.testimonials} bgClass="bg-white" />
        <Cta data={sections.cta} />
        <Blog data={sections.blog} bgClass="bg-zinc-50" />
      </main>

      <Footer data={common.Footer} />
      
      <BackToTop />
    </div>
  );
}

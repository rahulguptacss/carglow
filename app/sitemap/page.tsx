import React from 'react';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Sitemap from '../../components/sections/Sitemap';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.sitemap.metadata.title,
};

export default function SitemapPage() {
  const pageData = pages.sitemap;

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />

      <main className="flex-1 w-full">
        <Breadcrumb
          title={pageData.title}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: pageData.pageName },
          ]}
          backgroundImage="/banner/2.png"
        />

        <Sitemap data={sections.sitemap} />
      </main>

      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}

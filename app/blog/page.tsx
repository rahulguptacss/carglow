import React from 'react';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Blog from '../../components/sections/Blog';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import data from '../../components/data/data.json';

export default function BlogPage() {
  const common = data.common;
  const sections = data.categories.Automotive.templateComponents["template-1"].sections;
  const pageData = data.categories.Automotive.templateComponents["template-1"].pages.blog || { title: "BLOGS", pageName: "Blogs" };

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
        
        <Blog data={sections.blog} bgClass="bg-white" showPagination={true} itemsPerPage={6} />
      </main>

      <Footer data={common.Footer} />
      
      <BackToTop />
    </div>
  );
}

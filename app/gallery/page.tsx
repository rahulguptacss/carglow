import React from 'react';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import GalleryIntro from '../../components/sections/GalleryIntro';
import PhotoGallery from '../../components/sections/PhotoGallery';
import VideoGallery from '../../components/sections/VideoGallery';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.gallery.metadata.title,
};

export default function GalleryPage() {
  const pageData = pages.gallery;

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

        <GalleryIntro data={sections.gallery} />
        <PhotoGallery data={sections.photo_gallery} />
        <VideoGallery data={sections.video_gallery} />
      </main>

      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}

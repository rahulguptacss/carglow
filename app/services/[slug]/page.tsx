import React from 'react';
import Header from '../../../components/sections/Header';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import Footer from '../../../components/sections/Footer';
import BackToTop from '../../../components/ui/BackToTop';
import ServiceDetails from '../../../components/sections/ServiceDetails';
import { common, pages, sections, toSlug } from '../../../components/types';
import { ServiceDetailsData } from '../../../components/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return sections.services.items.map((item) => ({
    slug: toSlug(item.title),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = sections.services.items.find((item) => toSlug(item.title) === slug);
  if (!service) return { title: 'Service Not Found' };
  return { title: `CarGlow - ${service.title}` };
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = pages.service_details;
  const items = sections.services.items;
  const activeService = items.find((item) => toSlug(item.title) === slug);

  if (!activeService) {
    notFound();
  }

  const detailsData = sections.service_details.find((sd) => sd.slug === slug);

  if (!detailsData) {
    notFound();
  }

  const serviceData: ServiceDetailsData = {
    title: detailsData.title,
    description: detailsData.description,
    image: detailsData.heroImage,
    icon: activeService.icon,
    subtitle: detailsData.subtitle,
    benefits: detailsData.benefits.map((b) => ({
      icon: b.icon.charAt(0).toUpperCase() + b.icon.slice(1),
      title: b.title,
      description: b.description,
    })),
    process: detailsData.process.map((p) => ({
      num: p.number,
      title: p.title,
      desc: p.description,
    })),
    gallery: detailsData.gallery,
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />

      <main className="flex-1 w-full">
        <Breadcrumb
          title={pageData.title}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: pages.services.pageName, href: '/services' },
            { label: activeService.title }
          ]}
          backgroundImage="/banner/2.png"
        />

        <ServiceDetails data={serviceData} allServices={items} sidebarData={sections.services.sidebar} />
      </main>

      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}

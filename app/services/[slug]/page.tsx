import React from 'react';
import Header from '../../../components/sections/Header';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import Footer from '../../../components/sections/Footer';
import BackToTop from '../../../components/ui/BackToTop';
import ServiceDetails from '../../../components/sections/ServiceDetails';

import data from '../../../components/data/data.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const items = data.categories.Automotive.templateComponents["template-1"].sections.services.items;
  return items.map((item: any) => ({
    slug: item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const items = data.categories.Automotive.templateComponents["template-1"].sections.services.items;
  const service = items.find((item: any) =>
    item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === resolvedParams.slug
  );
  if (!service) return { title: 'Service Not Found' };
  return { title: `CarGlow - ${service.title}` };
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const common = data.common;
  const sections = data.categories.Automotive.templateComponents["template-1"].sections;
  const items = sections.services.items;

  const activeService = items.find((item: any) =>
    item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === resolvedParams.slug
  );

  if (!activeService) {
    notFound();
  }

  // Fetch specific details from service_details if available
  const serviceDetailsList = (sections as any).service_details || [];
  const detailsData: any = serviceDetailsList.find((sd: any) => sd.slug === resolvedParams.slug) || {};

  // Create full service details with fallbacks
  const serviceData = {
    title: detailsData.title || activeService.title,
    description: detailsData.description || activeService.description,
    image: detailsData.heroImage || activeService.image,
    icon: activeService.icon,
    subtitle: detailsData.subtitle || `A cleaner ${activeService.title.toLowerCase()} for a brighter drive.`,
    benefits: detailsData.benefits ? detailsData.benefits.map((b: any) => ({
      icon: b.icon.charAt(0).toUpperCase() + b.icon.slice(1),
      title: b.title,
      description: b.description
    })) : [
      { icon: 'Droplet', title: 'Deep Cleaning', description: 'Removes dirt and grime effectively.' },
      { icon: 'Leaf', title: 'Safe Products', description: "Gentle on your vehicle's paint." },
      { icon: 'Sparkles', title: 'Long Lasting Shine', description: 'Keeps your car looking new.' },
      { icon: 'Clock', title: 'Quick & Convenient', description: 'Doorstep service at your schedule.' }
    ],
    process: detailsData.process ? detailsData.process.map((p: any) => ({
      num: p.number,
      title: p.title,
      desc: p.description
    })) : [
      { num: '01', title: 'Preparation', desc: 'Initial inspection and prep.' },
      { num: '02', title: 'Execution', desc: `Applying our specialized ${activeService.title.toLowerCase()} process.` },
      { num: '03', title: 'Finishing', desc: 'Spot-free finish and detailing.' },
      { num: '04', title: 'Final Check', desc: 'Ensures perfect results.' }
    ],
    gallery: detailsData.gallery || [1, 2, 3, 4, 5, 6]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />

      <main className="flex-1 w-full">
        <Breadcrumb
          title="SERVICE DETAILS"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
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

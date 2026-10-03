import React from 'react';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Footer from '@/components/sections/Footer';
import TeamDetails from '@/components/sections/TeamDetails';
import { common, pages, sections } from '@/components/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return sections.team_details.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = sections.team_details.find((item) => item.slug === slug);
  if (!member) return { title: pages.team_details.metadata.title };
  return { title: `CarGlow - ${member.name}` };
}

export default async function TeamDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = pages.team_details;
  const teamData = sections.team_details.find((item) => item.slug === slug);

  if (!teamData) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />

      <main className="flex-1 w-full">
        <Breadcrumb
          title={pageData.title}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: pages.team.pageName, href: '/team' },
            { label: pageData.pageName }
          ]}
          backgroundImage="/banner/2.png"
        />

        <TeamDetails data={teamData} />
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}

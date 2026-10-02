import React from 'react';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Footer from '@/components/sections/Footer';
import TeamDetails from '@/components/sections/TeamDetails';
import data from '@/components/data/data.json';
import { notFound } from 'next/navigation';



export default async function TeamDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const common = data.common;
  const t1 = data.categories.Automotive.templateComponents["template-1"];
  const teamDetailsList = t1.sections.team_details || [];
  
  const teamData = teamDetailsList.find((item: any) => item.slug === resolvedParams.slug);

  if (!teamData) {
    notFound();
  }

  // Find the page metadata for team (for breadcrumb)
  const pageData = t1.pages.team || { title: "Team Details", pageName: "Team Details" };

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />
      
      <main className="flex-1 w-full">
        <Breadcrumb 
          title="TEAM DETAILS"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Team Details' }
          ]}
          backgroundImage="/banner/2.png"
        />
        
        <TeamDetails data={teamData} />
      </main>
      
      <Footer data={common.Footer} />
    </div>
  );
}

import React from 'react';
import Header from '../../../components/sections/Header';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import Footer from '../../../components/sections/Footer';
import BackToTop from '../../../components/ui/BackToTop';
import BlogDetails from '../../../components/sections/BlogDetails';
import { common, pages, sections, toSlug } from '../../../components/types';
import { BlogDetailsArticle } from '../../../components/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return sections.blog.posts.map((item) => ({
    slug: item.slug || toSlug(item.title),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const details = sections.blog_details.find((item) => item.slug === slug);
  const post = sections.blog.posts.find((item) => (item.slug || toSlug(item.title)) === slug);
  const title = details?.title || post?.title;
  if (!title) return { title: 'Blog Not Found' };
  return { title: `CarGlow - ${title}` };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = pages.blog_details;
  const posts = sections.blog.posts;
  const post = posts.find((item) => (item.slug || toSlug(item.title)) === slug);
  const details = sections.blog_details.find((item) => item.slug === slug);

  if (!post && !details) {
    notFound();
  }

  const blogData: BlogDetailsArticle = {
    slug,
    title: details?.title || post?.title || '',
    category: details?.category || post?.category,
    author: details?.author,
    author_role: details?.author_role,
    author_image: details?.author_image,
    date: details?.date || post?.date,
    read_time: details?.read_time,
    share_label: details?.share_label,
    image: details?.image || post?.image,
    intro: details?.intro || post?.description,
    sections: details?.sections,
    quote: details?.quote,
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900 font-sans">
      <Header data={common.Header} />

      <main className="flex-1 w-full">
        <Breadcrumb
          title={pageData.title}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: pages.blog.pageName, href: '/blog' },
            { label: pageData.pageName },
          ]}
          backgroundImage="/banner/2.png"
        />

        <BlogDetails
          data={blogData}
          allPosts={posts}
          sidebarData={sections.blog.sidebar}
        />
      </main>

      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}

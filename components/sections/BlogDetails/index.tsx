'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Search, CalendarDays, Clock, ArrowRight, Link2 } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BlogDetailsProps, toSlug } from '../../types';

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function BlogDetails({ data, allPosts, sidebarData }: BlogDetailsProps) {
  const [query, setQuery] = useState('');
  const currentSlug = data.slug || toSlug(data.title);

  const recentPosts = allPosts
    .filter((post) => (post.slug || toSlug(post.title)) !== currentSlug)
    .slice(0, 4);

  const cta = sidebarData?.cta || {};

  const renderTitle = (title: string) => {
    const words = (title || '').split(' ');
    if (words.length <= 2) return title;
    return (
      <>
        {words.slice(0, -2).join(' ')}{' '}
        <span className="text-[#910A1D]">{words.slice(-2).join(' ')}</span>
      </>
    );
  };

  const formatCardDate = (date: string) => {
    const parts = date.split(' ');
    if (parts.length >= 3 && parts[1].length <= 4) {
      const months: Record<string, string> = {
        JAN: 'January', FEB: 'February', MAR: 'March', APR: 'April',
        MAY: 'May', JUN: 'June', JUL: 'July', AUG: 'August',
        SEP: 'September', OCT: 'October', NOV: 'November', DEC: 'December',
      };
      const month = months[parts[1].toUpperCase()] || parts[1];
      return `${month} ${parts[0]}, ${parts[2]}`;
    }
    return date;
  };

  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const shareUrl = pageUrl || `/blog/${currentSlug}`;
  const shareItems = [
    { href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, label: 'Facebook', icon: <FaFacebookF size={13} /> },
    { href: `https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, label: 'Twitter', icon: <FaXTwitter size={13} /> },
    { href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, label: 'LinkedIn', icon: <FaLinkedinIn size={13} /> },
  ];

  const shareBtnClass =
    'w-9 h-9 rounded-full bg-[#F1F5F9] text-[#475569] flex items-center justify-center hover:bg-[#910A1D] hover:text-white transition-colors';

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 xl:gap-12 items-start">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="flex-1 lg:w-[65%] xl:w-[70%] min-w-0 w-full"
          >
            <motion.div variants={fadeUp} className="mb-3 sm:mb-4 flex items-center gap-2.5">
              <svg width="36" height="10" viewBox="0 0 36 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M0 5H34M34 5L30 1.5M34 5L30 8.5" stroke="#910A1D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[2px] sm:tracking-[2.5px] text-[#910A1D]">
                {data.category}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[24px] sm:text-[34px] lg:text-[44px] font-black leading-[1.2] tracking-tight text-[#0F172A] mb-5 sm:mb-6"
            >
              {renderTitle(data.title)}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-y-4 mb-6 sm:mb-8 text-[13px] sm:text-[14px] text-[#64748B]"
            >
              <div className="flex items-center gap-3 sm:pr-5 lg:pr-6">
                <div className="relative w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full overflow-hidden shrink-0 bg-zinc-200">
                  <Image
                    src={data.author_image || '/team/1.jpg'}
                    alt={data.author || 'Author'}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="leading-tight">
                  <span className="block text-[#0F172A] font-bold text-[13px] sm:text-[14px]">By {data.author}</span>
                  {data.author_role && (
                    <span className="block text-[12px] text-[#94A3B8] mt-0.5">{data.author_role}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:contents">
                <div className="hidden sm:block w-px h-8 bg-[#E5E7EB]" />
                <div className="flex items-center gap-2 sm:px-5 lg:px-6">
                  <CalendarDays className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[#94A3B8]" strokeWidth={1.8} />
                  <span>{data.date}</span>
                </div>
                <span className="sm:hidden text-[#E5E7EB]">|</span>
                <div className="hidden sm:block w-px h-8 bg-[#E5E7EB]" />
                <div className="flex items-center gap-2 sm:px-5 lg:px-6">
                  <Clock className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[#94A3B8]" strokeWidth={1.8} />
                  <span>{data.read_time}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5 sm:ml-auto w-full sm:w-auto pt-1 sm:pt-0 border-t border-[#F1F5F9] sm:border-0">
                <span className="font-semibold text-[#0F172A] shrink-0">{data.share_label || 'Share:'}</span>
                {shareItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className={shareBtnClass}
                  >
                    {item.icon}
                  </motion.a>
                ))}
                <motion.button
                  type="button"
                  aria-label="Copy link"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      navigator.clipboard?.writeText(window.location.href);
                    }
                  }}
                  className={`${shareBtnClass} cursor-pointer`}
                >
                  <Link2 size={15} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative h-[200px] xs:h-[240px] sm:h-[340px] md:h-[420px] w-full overflow-hidden rounded-[10px] sm:rounded-md mb-6 sm:mb-8"
            >
              <Image
                src={data.image || '/blog/1.png'}
                alt={data.title}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover"
                priority
              />
            </motion.div>

            {data.intro && (
              <motion.p
                variants={fadeUp}
                className="text-zinc-500 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] sm:leading-[1.85] mb-6 sm:mb-8"
              >
                {data.intro}
              </motion.p>
            )}

            <div className="space-y-6 sm:space-y-7">
              {data.sections?.map((section, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.05, ease: easeOut }}
                  >
                    <h2 className="text-[18px] sm:text-[20px] md:text-[22px] font-black text-[#111] mb-2.5 sm:mb-3">
                      {section.heading}
                    </h2>
                    <p className="text-zinc-500 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] sm:leading-[1.85]">
                      {section.content}
                    </p>
                  </motion.div>
                  {index === 2 && data.quote && (
                    <motion.blockquote
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.55, ease: easeOut }}
                      className="border-l-[4px] border-[#910A1D] bg-[#F8F8F8] py-4 px-4 sm:py-5 sm:px-6 my-1 sm:my-2 rounded-r-md"
                    >
                      <p className="text-[15px] sm:text-[16px] md:text-[17px] italic text-zinc-600 leading-[1.7]">
                        “{data.quote}”
                      </p>
                    </motion.blockquote>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          <aside className="lg:w-[35%] xl:w-[30%] w-full lg:sticky lg:top-[90px] self-start">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="w-full space-y-5 sm:space-y-6"
          >
            <motion.form
              variants={fadeUp}
              className="flex items-center gap-2 bg-white border border-[#E8E8E8] rounded-[12px] pl-3 sm:pl-4 pr-[6px] py-[6px] shadow-[0_4px_18px_rgba(0,0,0,0.06)]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={sidebarData?.search_placeholder || 'Search Articles...'}
                className="flex-1 min-w-0 h-[38px] sm:h-[40px] bg-transparent text-[14px] text-zinc-600 placeholder:text-[#A3A3A3] outline-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="shrink-0 w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] bg-[#910A1D] text-white rounded-[8px] flex items-center justify-center hover:bg-[#7a0818] transition-colors cursor-pointer"
              >
                <Search size={18} strokeWidth={2.2} />
              </motion.button>
            </motion.form>

            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-[12px] sm:rounded-md min-h-[240px] sm:min-h-[280px] text-white"
            >
              <Image
                src={cta.image || '/blog/1.png'}
                alt={cta.title || 'Book a wash'}
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40" />
              <div className="relative z-10 p-5 sm:p-7 flex flex-col h-full min-h-[240px] sm:min-h-[280px] justify-end">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[1.5px] sm:tracking-[2px] text-white/80 mb-2">
                  {cta.badge || 'KEEP YOUR CAR IN TOP SHAPE'}
                </p>
                <h3 className="text-[22px] sm:text-[26px] font-black leading-tight mb-2">
                  {cta.title || 'Book a Car Wash Today'}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-white/80 mb-4 sm:mb-5">
                  {cta.description || 'Professional care for a cleaner, brighter drive.'}
                </p>
                <motion.div whileHover={{ x: 3 }} className="w-max">
                  <Link
                    href={cta.button_href || '/packages'}
                    className="inline-flex items-center justify-center gap-2 w-max bg-[#910A1D] hover:bg-[#7a0818] text-white text-[13px] font-bold px-5 py-2.5 rounded-md transition-colors"
                  >
                    {cta.button_text || 'Book Now'} <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#F4F6F8] rounded-[16px] p-4 sm:p-6">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-black text-[#0F172A] mb-4 sm:mb-5">
                {sidebarData?.recent_title || 'Recent Posts'}
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                {recentPosts.map((post, index) => {
                  const slug = post.slug || toSlug(post.title);
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08, ease: easeOut }}
                    >
                      <Link href={`/blog/${slug}`} className="flex gap-3 sm:gap-3.5 group items-start">
                        <div className="relative w-[72px] h-[62px] sm:w-[88px] sm:h-[72px] rounded-[10px] overflow-hidden shrink-0 bg-zinc-200">
                          <Image
                            src={post.image || '/blog/1.png'}
                            alt={post.title}
                            fill
                            sizes="88px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <h4 className="text-[14px] sm:text-[15px] font-bold text-[#0F172A] leading-[1.35] group-hover:text-[#910A1D] transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-[12px] sm:text-[13px] text-[#94A3B8] mt-1 sm:mt-1.5">{formatCardDate(post.date)}</p>
                        </div>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
          </aside>
        </div>
      </div>
    </section>
  );
}

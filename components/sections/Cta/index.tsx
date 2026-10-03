'use client';

import React from 'react';
import Image from 'next/image';
import { CtaProps } from '../../types';
import { Phone, ArrowRight } from 'lucide-react';

export default function Cta({
  data,
}: CtaProps) {
  const subtitle = data?.subtitle || 'KEEP YOUR CAR LOOKING ITS BEST';
  const description = data?.description || 'Premium car wash & detailing services tailored to your needs. Clean. Protect. Drive Better.';
  const title_line1 = data?.title_line1 || 'Get a Quote for Your';
  const title_highlight = data?.title_highlight || 'Car Care Service';
  const buttonText = data?.button?.text || 'GET A QUOTE';

  const phone = data?.phone || '+1 00000000000';
  const telHref = `tel:${phone.replace(/[^0-9+]/g, '')}`;
  const buttonHref = data?.button?.href || '/get-a-quote';
  const image = data?.image || '/img/cta.png';

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-[24px]
        sm:py-[30px]
        lg:py-[20px]
      "
    >

      {/* =====================================================
          DESKTOP CTA AREA
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          h-[370px]
          w-full
          max-w-[1400px]
          lg:h-[385px]
          xl:h-[395px]
          hidden
          md:block
        "
      >

        {/* =================================================
            RED BACKGROUND
        ================================================== */}

        <div
          className="
            absolute
            left-0
            top-0
            z-0
            h-full
            w-full
            bg-[#680512]
          "
          style={{
            clipPath:
              'polygon(0 0, 77.8% 18%, 77.8% 78%, 0 100%)',
          }}
        />


        {/* =================================================
            CONTENT
        ================================================== */}

        <div
          className="
            absolute
            left-0
            top-0
            z-20
            flex
            h-full
            w-[61%]
            items-center
            pl-[5.2%]
            pt-[15px]
          "
        >

          <div className="w-full">


            {/* =============================================
                SUBTITLE
            ============================================== */}

            <div
              className="
                mb-[17px]
                flex
                items-center
                gap-[14px]
              "
            >

              <span
                className="
                  h-[1.5px]
                  w-[37px]
                  bg-white
                "
              />

              <span
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[1.8px]
                  text-white
                  sm:text-[12px]
                "
              >
                {subtitle}
              </span>

            </div>


            {/* =============================================
                HEADING
            ============================================== */}

            <h2
              className="
                m-0
                mb-[9px]
                text-white
                text-[36px]
                font-medium
                leading-[1.08]
                tracking-[-1px]
                sm:text-[40px]
                lg:text-[43px]
                xl:text-[46px]
              "
            >

              <span className="font-medium">
                {title_line1}
              </span>

              <br />

              <span className="font-extrabold">
                {title_highlight}
              </span>

            </h2>


            {/* =============================================
                DESCRIPTION
            ============================================== */}

            <p
              className="
                m-0
                mb-[22px]
                max-w-[570px]
                text-[14px]
                leading-[1.55]
                text-white/90
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              {description}
            </p>


            {/* =============================================
                ACTION ROW
            ============================================== */}

            <div
              className="
                flex
                items-center
                gap-[42px]
              "
            >

              {/* PHONE */}

              <a href={telHref} className="flex items-center gap-[15px]">

                <div
                  className="
                    flex
                    h-[57px]
                    w-[57px]
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#680512]
                  "
                >

                  <Phone
                    className="h-[25px] w-[25px]"
                    strokeWidth={2.2}
                    fill="currentColor"
                  />

                </div>


                <div className="flex flex-col">

                  <span
                    className="
                      mb-[4px]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.8px]
                      text-white
                    "
                  >
                    CALL US NOW
                  </span>

                  <span
                    className="
                      whitespace-nowrap
                      text-[21px]
                      font-extrabold
                      leading-none
                      tracking-[-0.5px]
                      text-white
                      sm:text-[22px]
                    "
                  >
                    {phone}
                  </span>

                </div>

              </a>


              {/* GET QUOTE */}

              <a
                href={buttonHref}
                className="
                  flex
                  h-[48px]
                  w-[180px]
                  items-center
                  justify-center
                  gap-[10px]
                  rounded-[4px]
                  bg-white
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.3px]
                  text-[#680512]
                  no-underline
                  transition-all
                  duration-300
                  hover:bg-zinc-100
                "
              >

                <span>
                  {buttonText}
                </span>

                <ArrowRight
                  className="h-[16px] w-[16px]"
                  strokeWidth={2}
                />

              </a>

            </div>

          </div>

        </div>


        {/* =================================================
            CAR IMAGE
        ================================================== */}

        <div
          className="
            absolute
            bottom-[-25px]
            right-[20px]
            z-30
            hidden
            w-[48%]
            md:block
            lg:right-[30px]
            lg:w-[46%]
            xl:right-[40px]
            xl:w-[44%]
          "
        >

          <Image
            src={image}
            alt="Car Care Service"
            width={900}
            height={560}
            priority
            sizes="
              (max-width: 1024px) 55vw,
              (max-width: 1280px) 53vw,
              720px
            "
            className="
              block
              h-auto
              w-full
              object-contain
              drop-shadow-[0_18px_28px_rgba(0,0,0,0.28)]
            "
          />

        </div>

      </div>


      {/* =====================================================
          MOBILE VERSION
      ====================================================== */}

      <div
        className="
          relative
          block
          w-full
          bg-[#680512]
          px-[24px]
          py-[45px]
          md:hidden
        "
      >

        {/* Mobile Content */}

        <div className="relative z-10">

          {/* Subtitle */}

          <div className="mb-[16px] flex items-center gap-[12px]">

            <span className="h-[1.5px] w-[32px] bg-white" />

            <span className="text-[10px] font-medium uppercase tracking-[1.5px] text-white">
              {subtitle}
            </span>

          </div>


          {/* Heading */}

          <h2
            className="
              m-0
              mb-[13px]
              text-[32px]
              font-medium
              leading-[1.08]
              tracking-[-0.5px]
              text-white
            "
          >

            <span>
              {title_line1}
            </span>

            <br />

            <span className="font-extrabold">
              {title_highlight}
            </span>

          </h2>


          {/* Description */}

          <p
            className="
              mb-[25px]
              max-w-[500px]
              text-[14px]
              leading-[1.55]
              text-white/85
            "
          >
            {description}
          </p>


          {/* Phone */}

          <a href={telHref} className="mb-[25px] flex items-center gap-[14px]">

            <div
              className="
                flex
                h-[53px]
                w-[53px]
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#680512]
              "
            >

              <Phone
                className="h-[22px] w-[22px]"
                fill="currentColor"
              />

            </div>

            <div>

              <div className="mb-[3px] text-[10px] font-bold uppercase tracking-[1px] text-white/70">
                CALL US NOW
              </div>

              <div className="text-[20px] font-extrabold text-white">
                {phone}
              </div>

            </div>

          </a>


          {/* Button */}

          <a
            href={buttonHref}
            className="
              flex
              h-[48px]
              w-full
              max-w-[200px]
              items-center
              justify-center
              gap-[10px]
              rounded-[4px]
              bg-white
              text-[12px]
              font-bold
              uppercase
              text-[#680512]
              no-underline
            "
          >
            GET A QUOTE

            <ArrowRight
              className="h-[16px] w-[16px]"
            />

          </a>

        </div>


        {/* Mobile Car */}

        <div className="relative z-10 mt-[35px] w-full">

          <Image
            src={image}
            alt="Car Care Service"
            width={900}
            height={560}
            sizes="90vw"
            className="
              h-auto
              w-full
              object-contain
            "
          />

        </div>

      </div>

    </section>
  );
}
'use client';

import Link from 'next/link';
import React from 'react';

import NextImage from '@/components/NextImage';

import { featuresContent } from '@/constant/data';
import { sectionProps } from '@/interfaces/features.interface';

import ijen from '~/images/java-ijen.jpg';

const Card = ({ sectionStyle }: sectionProps) => {
  return (
    <section className={`${sectionStyle} w-full`}>
      <div className='container mx-auto flex flex-wrap items-center justify-center'>
        <div className='grid w-full grid-cols-2 gap-5 p-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4'>
          {featuresContent.map((item, i) => (
            <Link
              key={i.toString()}
              href='/products/ijen'
              className='hover:bg-primary-100 group relative cursor-pointer overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-all duration-300 ease-in-out'
            >
              <div className='flex w-full items-center justify-center'>
                <NextImage
                  src={ijen}
                  alt='ijen'
                  useSkeleton={true}
                  width={200}
                  height={200}
                />
              </div>
              <div className='pt-2'>
                <div className='text-center text-base font-semibold'>
                  Arabica Gunung Halu
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;

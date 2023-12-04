import React from 'react';

import { featureDetailContent } from '@/constant/data';
import { sectionProps } from '@/interfaces/features.interface';

const AfterCard = ({ sectionStyle }: sectionProps) => {
  return (
    <section className={`${sectionStyle}`} id='card'>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='grid w-10/12 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-4'>
          {featureDetailContent.map((item, i) => (
            <div key={i} className='flex items-start justify-center gap-6'>
              <span className='bg-primary-800 flex items-center justify-center rounded-full p-4'>
                <item.icon className='text-2xl text-white' />
              </span>

              <div className='w-8/12'>
                <h3>{item.title}</h3>
                <p className='leading-relaxed text-gray-500'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfterCard;

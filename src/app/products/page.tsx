import React from 'react';

import AfterCard from '@/components/products/AfterCard';
import Card from '@/components/products/Card';
import Hero from '@/components/products/Hero';

const page = () => {
  return (
    <main className='w-full bg-[#f3f5f8]'>
      <Hero sectionStyle='pt-[150px]' />
      <Card sectionStyle='pt-[100px]' />
      <AfterCard sectionStyle='lg:py-32 py-24' />
    </main>
  );
};

export default page;

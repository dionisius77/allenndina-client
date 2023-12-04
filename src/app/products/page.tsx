import React from 'react';

import Card from '@/components/products/Card';
import Hero from '@/components/products/Hero';

const page = () => {
  return (
    <main className='w-full bg-[#f3f5f8] pb-10'>
      <Hero sectionStyle='pt-[150px]' />
      <Card sectionStyle='pt-[100px]' />
    </main>
  );
};

export default page;

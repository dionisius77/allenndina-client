import React from 'react';

import db from '@/lib/db';

import Card from '@/components/products/Card';
import Hero from '@/components/products/Hero';

import { ProductI } from '@/interfaces/product.interface';

const page = async () => {
  const productsData: ProductI[] = await getProducts();

  return (
    <main className='w-full bg-[#f3f5f8] pb-10'>
      <Hero sectionStyle='pt-[150px]' />
      <Card sectionStyle='pt-[100px]' products={productsData} />
    </main>
  );
};

const getProducts = async () => {
  const products = await db
    .collection('products')
    .orderBy('createdAt', 'desc')
    .get();
  const productsData: ProductI[] = products.docs.map((entry) => {
    const data = entry.data();
    return {
      id: entry.id,
      ...(data as ProductI),
    };
  });
  return productsData;
};

export const dynamic = 'force-dynamic';

export default page;

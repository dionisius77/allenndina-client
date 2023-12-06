import Image from 'next/image';
import React from 'react';
import { BiCircle, BiSolidCircle } from 'react-icons/bi';

import db from '@/lib/db';

import { ProductI } from '@/interfaces/product.interface';

const page = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);
  return (
    <main className='w-full bg-[#f3f5f8] pb-4 pt-[150px]'>
      <h1 className='font-poppins mb-[50px] text-center'>{product.title}</h1>
      <div className='container mx-auto grid gap-5 md:grid-cols-4'>
        <div className='order-2 flex w-full flex-col gap-2 rounded-md bg-white p-4 md:order-1'>
          <div>
            <div className='text-base font-semibold'>Origin</div>
            <div className='text-sm text-gray-500'>{product.origin}</div>
          </div>
          <div>
            <div className='text-base font-semibold'>Variety</div>
            <div className='text-sm text-gray-500'>{product.variety}</div>
          </div>
          <div>
            <div className='text-base font-semibold'>Altitude</div>
            <div className='text-sm text-gray-500'>{product.altitude}</div>
          </div>
          <div>
            <div className='text-base font-semibold'>Process</div>
            <div className='text-sm text-gray-500'>{product.process}</div>
          </div>
          <div>
            <div className='text-base font-semibold'>Notes</div>
            <div className='text-sm text-gray-500'>{product.notes}</div>
          </div>
          <div>
            <div className='text-base font-semibold'>Body</div>
            <div className='flex flex-row gap-1'>
              {[1, 2, 3, 4, 5].map((item) =>
                item <= product.body ? (
                  <BiSolidCircle key={item.toString()} />
                ) : (
                  <BiCircle key={item.toString()} />
                )
              )}
            </div>
          </div>
          <div>
            <div className='text-base font-semibold'>Acidity</div>
            <div className='flex flex-row gap-1'>
              {[1, 2, 3, 4, 5].map((item) =>
                item <= product.acidity ? (
                  <BiSolidCircle key={item.toString()} />
                ) : (
                  <BiCircle key={item.toString()} />
                )
              )}
            </div>
          </div>
        </div>
        <div className='order-1 w-full bg-white p-4 md:order-2 md:col-span-3'>
          <div className='flex items-center justify-center'>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
            />
          </div>
          <div
            className='mt-4 text-base text-gray-700'
            dangerouslySetInnerHTML={{ __html: product.stories }}
          />
        </div>
      </div>
    </main>
  );
};

const getProduct = async (id: string) => {
  const product = await db.collection('products').doc(id).get();
  const productData = product.data();
  return productData as ProductI;
};

export default page;

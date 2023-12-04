'use client';

import React from 'react';
import { BiCircle, BiSolidCircle } from 'react-icons/bi';

import NextImage from '@/components/NextImage';

import ijen from '~/images/java-ijen.jpg';

// { params }: { params: { id: string } }
const page = () => {
  return (
    <main className='w-full bg-[#f3f5f8] pb-4 pt-[150px]'>
      <h1 className='font-poppins mb-[50px] text-center'>
        Arabica Gunung Halu
      </h1>
      <div className='container mx-auto grid gap-5 md:grid-cols-4'>
        <div className='order-2 flex w-full flex-col gap-2 rounded-md bg-white p-4 md:order-1'>
          <div>
            <div className='text-base font-semibold'>Origin</div>
            <div className='text-sm text-gray-500'>Gunung Ijen</div>
          </div>
          <div>
            <div className='text-base font-semibold'>Variety</div>
            <div className='text-sm text-gray-500'>Laurina</div>
          </div>
          <div>
            <div className='text-base font-semibold'>Altitude</div>
            <div className='text-sm text-gray-500'>1800 - 1900</div>
          </div>
          <div>
            <div className='text-base font-semibold'>Process</div>
            <div className='text-sm text-gray-500'>Natural</div>
          </div>
          <div>
            <div className='text-base font-semibold'>Notes</div>
            <div className='text-sm text-gray-500'>
              chamomile tea, herbs and spice, vanilla
            </div>
          </div>
          <div>
            <div className='text-base font-semibold'>Body</div>
            <div className='flex flex-row gap-1'>
              <BiSolidCircle />
              <BiSolidCircle />
              <BiSolidCircle />
              <BiSolidCircle />
              <BiCircle />
            </div>
          </div>
          <div>
            <div className='text-base font-semibold'>Acidity</div>
            <div className='flex flex-row gap-1'>
              <BiSolidCircle />
              <BiSolidCircle />
              <BiCircle />
              <BiCircle />
              <BiCircle />
            </div>
          </div>
        </div>
        <div className='order-1 w-full bg-white p-4 md:order-2 md:col-span-3'>
          <div className='flex items-center justify-center'>
            <NextImage
              src={ijen}
              alt='ijen'
              width={200}
              height={200}
              useSkeleton={true}
            />
          </div>
          <div className='mt-4 text-base text-gray-700'>
            <p>
              Setelah minum kopi ini, kok tiba-tiba teringat dengan
              sesuatu&hellip; Intermezzo dari kopi ya&hellip;.
            </p>

            <p>
              Mari kita geser ke satu hal menarik mengenai lukisan: A Sunday
              on&nbsp;&ldquo;<em>La Grande Jatt</em>e&rdquo; adalah sebuah
              lukisan yang dibuat oleh Georges Seurat. Dibuat pada tahun
              1884&ndash;86, membutuhkan waktu lebih dari dua tahun untuk
              menyelesaikannya, di saat umur Georges baru 26 tahun.
            </p>

            <p>
              <br />
              Lukisan ini adalah sebuah masterpiece dari pointillism, yaitu
              terbuat dari banyak titik titik kecil. Lukisan ini bernilai $650
              million atau Rp 10 T. Lukisan ini bukan hanya karya Georges yang
              paling populer, namun juga adalah karyanya yang paling besar yaitu
              dengan ukuran sekitar 2 x 3meter. Dengan ukuran yang besar itulah
              di sapu dengan banyak titik titik warna adalah sangat mengagumkan.
            </p>

            <p>
              Karya Georges ini menggambarkan orang bersantai di taman pinggir
              kota pada pulau &Icirc;le de la Grande Jatte di Sungai Seine, spot
              ini adalah tempat yang populer di Paris pada jaman abad ke 19 bagi
              orang kelas menengah keatas untuk menarik diri sejenak dari
              kesibukan.
            </p>

            <p>
              <br />
              Lukisan ini perdebatkan memiliki makna yang kontroversial bahwa
              wanita yang berjalan dengan menuntun monyet menggunakan tali
              sepertinya adalah seorang pelacur yang terlihat dengan seorang
              pria kaya yang telah menikah. Monyet konon menjadi simbol dari
              nafsu.
              <br />
              Nah seru kan?? Kamu gak penasaran lukisan nya seperti apa?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

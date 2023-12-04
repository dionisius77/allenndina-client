import Image from 'next/image';

import Button from '@/components/buttons/Button';

import { features } from '@/constant/data';

const PricingSection = () => {
  return (
    <section className='mb-[100px] mt-[50px] flex flex-col items-center justify-center px-4'>
      <h1 className='from-primary-800 to-primary-600 mb-[60px] bg-gradient-to-b bg-clip-text text-4xl font-extrabold text-transparent'>
        Choose Your Package
      </h1>

      <div className='mt-[50px] flex flex-col flex-wrap items-center justify-center gap-[150px] md:flex-row md:gap-[150px]'>
        {features.map((feature, i) => (
          <div
            key={i}
            className='group relative flex flex-col flex-wrap items-center justify-start'
          >
            <div className='from-primary-800 to-primary-600 absolute -top-10 left-0 rounded-[12px] bg-gradient-to-r px-6 py-3 pb-[25px] text-center max-md:px-8 md:-top-11'>
              <h3 className='text-slate-300 transition duration-200 ease-in-out group-hover:-translate-y-2 group-hover:text-white'>
                {feature.title}
              </h3>
            </div>

            <div className='relative z-10 w-full rounded-[12px] bg-gray-100 bg-opacity-80 p-8 py-[40px] shadow-lg shadow-black/[0.03] backdrop-blur-[0.2rem]'>
              <h3 className='border-secondary-600 mb-[20px] w-full border-b-2 pb-5 pl-4 text-center text-[40px]'>
                <span className='absolute top-8 -translate-x-[100%] text-xl font-semibold'>
                  Rp
                </span>
                {feature.value}
              </h3>
              {feature.featureItem.map((item) => (
                <div
                  key={item.title}
                  className='mt-[15px] flex items-center gap-4 transition hover:scale-105'
                >
                  <Image
                    src={item.imgUrl}
                    alt=''
                    width={20}
                    height={20}
                  ></Image>
                  <p className='text-[18px]'>{item.title}</p>
                </div>
              ))}
            </div>

            <div className='absolute -bottom-9 right-0'>
              <Button className='from-primary-800 to-primary-600 rounded-[12px] border-none bg-gradient-to-r px-10 pb-2 pt-[20px] transition duration-200 ease-in'>
                <span className='text-xl font-semibold max-md:text-lg'>
                  Choose
                </span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

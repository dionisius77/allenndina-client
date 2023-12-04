import React from 'react';

const Hero = ({ sectionStyle }: { sectionStyle: string }) => {
  return (
    <section className={`${sectionStyle}`}>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='mb-[50px] text-center'>
          All The Caffeine That You Need
        </h1>
        <p className='max-w-[488px] text-center text-gray-500'>
          Indonesia coffee beans well roasted by Allendinna Coffee, that ready
          to kick your tongue.
        </p>
      </div>
    </section>
  );
};

export default Hero;

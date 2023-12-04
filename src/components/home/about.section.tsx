import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className='mb-[100px] mt-[100px]'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className=''>About Us</h1>
      </div>
      <div className='flex flex-col items-center justify-center md:flex-row-reverse md:gap-[100px]'>
        <Image src='/images/about1.png' height={400} width={400} alt='' />
        <p className='px-6 pt-4 text-justify md:max-w-[500px]'>
          Lorem ipsum dolor sit amet consectetur a dipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className='flex flex-col items-center justify-center md:flex-row md:gap-[100px]'>
        <Image src='/images/about1.png' height={400} width={400} alt='' />
        <p className='px-6 pt-4 text-justify md:max-w-[500px]'>
          Lorem ipsum dolor sit amet consectetur a dipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

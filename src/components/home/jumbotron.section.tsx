import Image from 'next/image';

const JumbotronSection = () => {
  return (
    <section className='mb-[100px] pt-[125px]'>
      <div className='flex flex-col-reverse gap-10 px-[20px] md:container md:mx-auto md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-col items-center justify-center md:max-w-[520px] md:items-start md:pt-24'>
          <h2 className='text-xl font-bold md:text-3xl'>Allendinna</h2>
          <p className='mb-[12px] mt-[12px] text-center text-sm md:text-start md:text-base'>
            Selamat datang di dunia kopi kami, tempat di mana biji kopi
            berkumpul untuk menjadi lebih dari sekadar minuman, tapi sebuah
            perjalanan sensorik yang membangunkan seluruh indera Anda. Kami
            mempersembahkan keajaiban dari setiap gigitan biji kopi,
            mendedikasikan diri untuk menghadirkan pengalaman minum kopi yang
            tak terlupakan.
          </p>
          <a
            href='https://wa.me/+6281233224723'
            target='_blank'
            className='bg-primary-800 hover:bg-primary-700 rounded-xl border-none px-6 py-2 text-lg text-white transition duration-200 md:px-8'
          >
            Contact Us
          </a>
        </div>
        <div className=''>
          <Image
            className=''
            src='/images/A.png'
            width={500}
            height={358}
            alt='edu'
          />
        </div>
      </div>
    </section>
  );
};

export default JumbotronSection;

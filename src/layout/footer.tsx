import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='bg-primary-800 w-full'>
      <div className='container mx-auto py-20'>
        <div className='flex'>
          <h1 className='text-semibold w-full text-center text-lg text-white md:text-2xl'>
            Let’s Get Started and Drink Our Coffee
          </h1>
        </div>

        <div className='font-poppins'>
          <div className='flex flex-col items-center gap-5 border-t-2 border-white pt-[20px] text-end text-[14px] text-white md:flex-row md:justify-between'>
            <div className='flex'>
              <a
                href='https://wa.me/+6281233224723'
                target='_blank'
                className='text-bold pr-[20px] text-[30px] text-white '
              >
                {/* Whatsapp */}
                <BsWhatsapp />
              </a>

              <a
                href='https://www.instagram.com/allendinnacoffee/'
                target='_blank'
                className='text-bold pr-[20px] text-[30px] text-white'
              >
                {/* Instagram */}
                <BsInstagram />
              </a>
            </div>
            <div className='flex flex-row gap-1 text-sm md:text-base'>
              <p className='font-medium'>Copyright</p>
              <span>©</span>
              <p className='pl-[10px] font-medium '> 2023</p>
              <p className='font-medium'>Right Deserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Page = () => {
  return (
    <form className='w-full'>
      <div className='m-[100px] flex justify-between gap-[100px]'>
        <div className='flex flex-col'>
          <span className='mb-[20px] text-[20px] font-semibold'>Fullname </span>
          <input
            type='text'
            className='h-[70px] w-[600px] rounded-[12px] bg-[#D9D9D9]'
          />

          <span className='mb-[10px] mt-[10px] text-[20px] font-semibold'>
            Email
          </span>
          <input
            type='email'
            className='h-[70px] w-[600px] rounded-[12px] bg-[#D9D9D9]'
          ></input>

          <span className='mb-[10px] mt-[10px] text-[20px] font-semibold'>
            Message
          </span>
          <textarea className='h-[150px] w-[600px] rounded-[12px] bg-[#D9D9D9]'>
            {' '}
          </textarea>

          <button className='mt-[30px] h-[50px] w-[200px] rounded-[12px] bg-[#D9D9D9] text-[20px] font-semibold'>
            Submit
          </button>
        </div>

        <div className=' m-auto flex h-[435px] w-[530px] rounded-[12px] border-[1px] border-black'>
          <span className='m-auto text-[20px] font-semibold'>
            Gambar/3D Illustration
          </span>
        </div>
      </div>

      <div className='m-[110px] mb-[100px] flex justify-between gap-[119px] '>
        <div className='flex h-[199px] w-[327px] rounded-[12px] bg-[#D9D9D9] '>
          <span className='m-auto text-[20px] font-medium'>Number</span>
        </div>

        <div className='flex h-[199px] w-[327px] rounded-[12px] bg-[#D9D9D9] '>
          <span className='m-auto text-[20px] font-medium'>Location</span>
        </div>

        <div className='flex h-[199px] w-[327px] rounded-[12px] bg-[#D9D9D9] '>
          <span className='m-auto text-[20px] font-medium'>Email</span>
        </div>
      </div>
    </form>
  );
};

export default Page;

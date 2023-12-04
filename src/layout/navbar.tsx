/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Button from '@/components/buttons/Button';

import { navigationLinks } from '@/constant/data';

import allenndina from '~/images/allendina.png';

const Navbar = () => {
  const router = useRouter();
  const menuRef = useRef<any>(null);
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  let newPathname = '';

  newPathname = pathname;

  if (pathname.includes('/blog')) {
    newPathname = '/blog';
  } else if (pathname.includes('/projects')) {
    newPathname = '/projects';
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuRef]);

  const handleOutsideClick = (e: any) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  return (
    <nav className='fixed top-0 z-50 mx-auto flex w-full items-center bg-white py-4'>
      <div className='container mx-auto flex flex-row items-center justify-between px-4'>
        <div className='text-3xl font-bold text-white'>
          <Image
            src={allenndina}
            alt=''
            width={50}
            height={50}
            className='object-contain'
          />
        </div>
        <div className=''>
          <ul className='hidden space-x-[30px] lg:flex'>
            {navigationLinks.map((nav, i) => (
              <li key={i} className=''>
                <Button
                  onClick={() => {
                    router.push(nav.hash);
                    setShowMenu(false);
                  }}
                  className={`before:origin-[100%, 50%] before:scale-z-[1] hover:before:origin-[100%, 0%] hover:before:scale-z-[1] text-primary-800 before:bg-primary-800 relative pb-2 text-[14px] font-semibold uppercase tracking-[2px] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:scale-y-[1] before:transition-all before:duration-300 before:ease-in-out before:will-change-transform before:content-[''] hover:before:scale-x-[1] hover:before:scale-y-[1] ${
                    newPathname === nav.hash
                      ? 'border-primary-800 before:scale-x-[1]'
                      : 'border-transparrent'
                  }`}
                >
                  {nav.name}
                </Button>
              </li>
            ))}
          </ul>

          <Button
            className='text-primary-800 text-2xl lg:hidden'
            onClick={() => setShowMenu(true)}
          >
            <GiHamburgerMenu />
          </Button>
        </div>

        <Link
          href='https://wa.me/+6281233224723'
          target='_blank'
          className='border-primary-800 text-primary-800 hover:bg-primary-800 hidden rounded-[20px] border-2 bg-transparent px-8 py-2 transition duration-200 ease-in hover:border-transparent hover:text-white lg:flex'
        >
          Contact Us
        </Link>
      </div>
      {showMenu ? (
        <div
          ref={menuRef}
          className='border-primary-300 absolute top-0 flex w-full flex-col items-center border-b bg-white pb-4 shadow-md'
        >
          <Image
            src={allenndina}
            alt=''
            width={100}
            height={100}
            className='object-contain'
          />
          <ul className='flex flex-col gap-2'>
            {navigationLinks.map((nav, i) => (
              <li key={i} className=''>
                <Link
                  href={nav.hash}
                  className={`before:origin-[100%, 50%] before:scale-z-[1] hover:before:origin-[100%, 0%] hover:before:scale-z-[1] text-primary-800 before:bg-primary-800 relative flex items-center justify-center pb-2 text-center text-[14px] font-semibold uppercase tracking-[2px] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:scale-y-[1] before:transition-all before:duration-300 before:ease-in-out before:will-change-transform before:content-[''] hover:before:scale-x-[1] hover:before:scale-y-[1] ${
                    newPathname === nav.hash
                      ? 'border-primary-800 before:scale-x-[1]'
                      : 'border-transparrent'
                  }`}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;

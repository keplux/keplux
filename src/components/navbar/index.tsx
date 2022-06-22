import { Disclosure, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const MobileNavbar = () => {
  return (
    <div className='flex justify-between w-full md:hidden'>
      <div className='relative w-12 h-12'>
        <Image
          src='/images/cocos-tree-service-badge.png'
          alt="CoCo's Tree Service logo"
          layout='fill'
          objectFit='contain'
        />
      </div>
      <Disclosure>
        <Disclosure.Button aria-label='Menu button' className='group px-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white group-hover:text-secondary-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </Disclosure.Button>
        <Transition
          className='absolute top-16 left-0 z-50 w-screen bg-zinc-900 border-b border-black shadow-lg'
          enter='transition duration-100 ease-out'
          enterFrom='transform scale-95 opacity-0'
          enterTo='transform scale-100 opacity-100'
          leave='transition duration-75 ease-out'
          leaveFrom='transform scale-100 opacity-100'
          leaveTo='transform scale-95 opacity-0'
        >
          <Disclosure.Panel>
            {({ close }) => (
              <div className='pt-4'>
                <ul className='flex flex-col gap-2'>
                  {navItems.map((item, index) => {
                    return (
                      <Link key={item.label} href={item.href} passHref>
                        <li
                          className='flex items-center justify-center py-2 cursor-pointer hover:bg-zinc-800'
                          onClick={() => close()}
                        >
                          <span>{item.label}</span>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
                <div className='px-4'>
                  <div className='relative flex flex-col gap-4 bg-zinc-800/20 border border-black p-4 my-4 shadow-md'>
                    <div className='flex items-center'>
                      {/* Phone Icon */}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-secondary-500'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                      </svg>
                      <a href={`tel:+15177590356`}>
                        <span className='ml-2 text-gray-400  hover:text-white'>
                          (517) 759-0356
                        </span>
                      </a>
                    </div>
                    <div className='flex items-center'>
                      {/* Email icon */}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-secondary-500'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <a href={`mailto:cocostree2022@gmail.com`}>
                        <span className='ml-2 text-gray-400  hover:text-white'>
                          cocostree2022@gmail.com
                        </span>
                      </a>
                    </div>
                    <a href='#' className='absolute top-1/2 -translate-y-1/2 right-4'>
                      <svg
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        className='w-8 h-8 hover:text-white'
                      >
                        <path
                          fillRule='evenodd'
                          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <div className='hidden md:flex justify-between items-center mx-auto max-w-7xl w-full'>
      <ul className='flex items-center'>
        {navItems.map((item, index) => {
          return (
            <li key={item.label}>
              <Link href={item.href} passHref>
                <span className='cursor-pointer py-4 uppercase  tracking-wider hover:text-secondary-600 transition'>
                  {item.label}
                </span>
              </Link>
              {index < navItems.length - 1 && (
                <div className='inline mx-4 font-bold text-secondary-600'>
                  &bull;
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <div className='flex items-center gap-8'>
        <div className='flex items-center'>
          {/* Phone Icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-primary-500'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
          </svg>
          <a href={`tel:+15177590356`}>
            <span className='ml-2 text-gray-400  hover:text-white'>
              (517) 759-0356
            </span>
          </a>
        </div>
        <div className='flex items-center'>
          {/* Email icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-primary-500'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z'
              clipRule='evenodd'
            />
          </svg>
          <a href={`mailto:cocostree2022@gmail.com`}>
            <span className='ml-2 text-gray-400  hover:text-white'>
              cocostree2022@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2 h-20 bg-base border-b border-black'>
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};
export default Navbar;

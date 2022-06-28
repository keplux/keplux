import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { Popover } from '@headlessui/react';
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/solid';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { FaPencilRuler } from '@react-icons/all-files/fa/FaPencilRuler';
import { AiFillCode } from '@react-icons/all-files/ai/AiFillCode';
import { FaServer } from '@react-icons/all-files/fa/FaServer';
import { FaTools } from '@react-icons/all-files/fa/FaTools';
import { MdWeb } from '@react-icons/all-files/md/MdWeb';
import { MdPhoneIphone } from '@react-icons/all-files/md/MdPhoneIphone';
import { SiGoogleanalytics } from '@react-icons/all-files/si/SiGoogleanalytics';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { MdShoppingCart } from '@react-icons/all-files/md/MdShoppingCart';
import { HiDocumentAdd } from '@react-icons/all-files/hi/HiDocumentAdd';

import logo from '../../../public/logos/keplux-light-brand-transparent.png';
import fullLogo from '../../../public/logos/keplux-light-transparent.png';
import { classNames } from '../../../utils/classNames';
import HeadlessLink from '../HeadlessLink';

const solutions = [
  {
    name: 'Design',
    description:
      'We work with you to build a design that represents your business and looks great on all devices, whether you need a blog, landing pages, or e-commerce.',
    href: '/services/design',
    icon: FaPencilRuler,
  },
  {
    name: 'Development',
    description:
      'This is where we code your website. Using modern tools, your website will be much faster for end-users than you can get from our competition.',
    href: '/services/development',
    icon: AiFillCode,
  },
  {
    name: 'E-Commerce',
    description:
      "If you need an online store, we have you covered! There are a lot of options here, so we'll work with you to determine the best options for your needs.",
    href: '/services/e-commerce',
    icon: MdShoppingCart,
  },
  {
    name: 'Content Management',
    description:
      "Your website's content may need to be updated occasionally (or frequently). We work with you to determine the best way to handle how this is done.",
    href: '/services/content-management',
    icon: HiDocumentAdd,
  },
  {
    name: 'Hosting',
    description:
      'Websites live on the internet through a hosting provider. You can choose to host with us or we can help you get set up on your own hosting.',
    href: '/services/hosting',
    icon: FaServer,
  },
  {
    name: 'SEO and Accessibility',
    description:
      "Having a website is only useful if it can be found. The modern tools we use will boost your website higher than what you'd get from our competitors.",
    href: '/services/seo',
    icon: MdSearch,
  },
  {
    name: 'Analytics',
    description:
      "It's important to understand how people are engaging with your website. We can add Google Analytics to your website, giving you access to the important data.",
    href: '/services/analytics',
    icon: SiGoogleanalytics,
  },
  {
    name: 'Maintenance',
    description:
      "We will ensure that your website's dependencies are kept up to date to prevent online threats.",
    href: '/services/maintenance',
    icon: FaTools,
  },
];

const mobileNav = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Our Work',
    href: '/projects',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const callsToAction = [
  { name: 'View Our Work', href: '/projects', icon: MdWeb },
  { name: 'Contact Us', href: '/contact', icon: MdPhoneIphone },
];
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
];
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
];

export const Navbar = () => {
  return (
    <Popover className='relative bg-black'>
      <div
        className='absolute inset-0 shadow z-30 pointer-events-none'
        aria-hidden='true'
      />
      <div className='relative z-20'>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10'>
          <div>
            <Link href='/' passHref>
              <div className='flex cursor-pointer'>
                <span className='sr-only'>Keplux Development</span>
                <div className='relative h-10 w-10'>
                  <Image
                    src={logo}
                    alt='Keplux logo'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='rounded-md p-2 inline-flex items-center justify-center text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div className='hidden md:flex-1 md:flex md:items-center md:justify-between'>
            <Popover.Group as='nav' className='flex items-center space-x-10'>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? '!text-primary-300' : '',
                        'group link rounded-md inline-flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? '!text-primary-300' : '',
                          'link ml-2 h-5 w-5 group-hover:text-primary-300'
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 -translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-1'
                    >
                      <Popover.Panel className='hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-zinc-900'>
                        <div className='max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16'>
                          {solutions.map((item) => (
                            <Popover.Button
                              as={HeadlessLink}
                              key={item.name}
                              href={item.href}
                            >
                              <a className='-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-primary-900/25 sm:transition'>
                                <div className='flex md:h-full lg:flex-col'>
                                  <div className='flex-shrink-0'>
                                    <span className='inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white sm:h-12 sm:w-12'>
                                      <item.icon
                                        className='h-6 w-6'
                                        aria-hidden='true'
                                      />
                                    </span>
                                  </div>
                                  <div className='ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4'>
                                    <div>
                                      <p className='font-normal !text-white'>
                                        {item.name}
                                      </p>
                                      <p className='mt-1 text-sm text-zinc-500'>
                                        {item.description}
                                      </p>
                                    </div>
                                    <p className='mt-2 text-sm font-normal !text-indigo-300 lg:mt-4'>
                                      Learn more{' '}
                                      <span aria-hidden='true'>&rarr;</span>
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Popover.Button>
                          ))}
                        </div>
                        <div className='bg-primary-900'>
                          <div className='max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8'>
                            {callsToAction.map((item) => (
                              <div key={item.name} className='flow-root'>
                                <a
                                  href={item.href}
                                  className='-m-3 p-3 flex items-center rounded-md text-indigo-200 hover:bg-primary-600/25'
                                >
                                  <item.icon
                                    className='flex-shrink-0 h-6 w-6 text-zinc-100'
                                    aria-hidden='true'
                                  />
                                  <span className='ml-3'>{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <a href='#' className='link'>
                Projects
              </a>
              <a href='#' className='link'>
                Pricing
              </a>
              <a href='#' className='link'>
                Contact
              </a>
            </Popover.Group>
            <div className='flex items-center md:ml-12'>
              <a
                href='#'
                className='text-base font-medium text-zinc-500 hover:text-zinc-900'
              >
                Sign in
              </a>
              <a
                href='#'
                className='ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-zinc-900 divide-y-2 divide-zinc-700'>
            <div className='py-6 px-5'>
              <div className='flex items-center justify-end'>
                <Image
                  src={fullLogo}
                  alt='Keplux Development logo'
                  height={512}
                  objectFit='contain'
                  objectPosition='left'
                />
                <div className='-mr-2'>
                  <Popover.Button className='bg-zinc-900 rounded-md p-2 inline-flex items-center justify-center text-primary-500 hover:text-primary-700 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-4 grid grid-cols-2 gap-4'>
                {mobileNav.map((item) => {
                  return (
                    <Link key={item.label} href={item.href}>
                      <a className='rounded-md !text-lg !capitalize font-medium link'>
                        {item.label}
                      </a>
                    </Link>
                  );
                })}
              </div>
              <div className='mt-6'>
                <p className='mt-6 text-center text-base font-medium text-zinc-500'>
                  Existing client?{' '}
                  <a href='#' className='text-indigo-600 hover:text-indigo-500'>
                    Sign in
                  </a>
                </p>
              </div>
            </div>
            <div className='pt-5 pb-6 px-5 sm:pb-8'>
              <div className='mt-6 sm:mt-8'>
                <nav>
                  <div className='grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4'>
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-m-3 flex items-center p-3 rounded-lg hover:bg-primary-900/25 transition'
                      >
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'>
                          <item.icon className='h-6 w-6' aria-hidden='true' />
                        </div>
                        <div className='ml-4 text-zinc-100 font-normal'>
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className='mt-8 text-base'>
                    <a
                      href='#'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      {' '}
                      View all products <span aria-hidden='true'>&rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;

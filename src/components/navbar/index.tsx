import { Disclosure, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { contactInfo } from '../../../pages/contact';
import { Fragment } from 'react';
import { Popover } from '@headlessui/react';
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
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
import { FaWheelchair } from '@react-icons/all-files/fa/FaWheelchair';
import { HiDocumentAdd } from '@react-icons/all-files/hi/HiDocumentAdd';

import logo from '../../../public/logos/keplux-light-brand-transparent.png';

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
    name: 'Hosting',
    description:
      'Websites live on the internet through a hosting provider. You can choose to host with us or we can help you get set up on your own hosting.',
    href: '/services/hosting',
    icon: FaServer,
  },
  {
    name: 'Maintenance',
    description:
      "We will ensure that your website's dependencies are kept up to date to prevent online threats.",
    href: '/services/maintenance',
    icon: FaTools,
  },
  {
    name: 'Content Management',
    description:
      "Your website's content may need to be updated occasionally (or frequently). We work with you to determine the best way to handle how this is done.",
    href: '/services/content-management',
    icon: HiDocumentAdd,
  },
  {
    name: 'Analytics',
    description:
      "It's important to understand how people are engaging with your website. We can add Google Analytics to your website, giving you access to the important data.",
    href: '/services/analytics',
    icon: SiGoogleanalytics,
  },
  {
    name: 'Search Engine Optimization',
    description:
      "Having a website is only useful if it can be found. The modern tools we use will boost your website higher than what you'd get from our competitors.",
    href: '/services/seo',
    icon: MdSearch,
  },
  {
    name: 'Accessibility',
    description:
      'We believe in breaking down barriers. This includes ensuring users from all walks of life can access your website without issue.',
    href: '/accessibility',
    icon: FaWheelchair,
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

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
                            <a
                              key={item.name}
                              href={item.href}
                              className='-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-primary-900/25 sm:transition'
                            >
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
                          ))}
                        </div>
                        <div className='bg-zinc-900'>
                          <div className='max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8'>
                            {callsToAction.map((item) => (
                              <div key={item.name} className='flow-root'>
                                <a
                                  href={item.href}
                                  className='-m-3 p-3 flex items-center rounded-md text-indigo-300 hover:bg-primary-900/25'
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
              <a
                href='#'
                className='link'
              >
                Projects
              </a>
              <a
                href='#'
                className='link'
              >
                Pricing
              </a>
              <a
                href='#'
                className='link'
              >
                Contact
              </a>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-zinc-900' : 'text-zinc-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-zinc-600' : 'text-zinc-400',
                          'ml-2 h-5 w-5 group-hover:text-zinc-500'
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
                      <Popover.Panel className='hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg'>
                        <div className='absolute inset-0 flex'>
                          <div className='bg-white w-1/2' />
                          <div className='bg-zinc-50 w-1/2' />
                        </div>
                        <div className='relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2'>
                          <nav className='grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12'>
                            <div>
                              <h3 className='text-sm font-medium tracking-wide text-zinc-500 uppercase'>
                                Company
                              </h3>
                              <ul role='list' className='mt-5 space-y-6'>
                                {company.map((item) => (
                                  <li key={item.name} className='flow-root'>
                                    <a
                                      href={item.href}
                                      className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-zinc-900 hover:bg-zinc-50'
                                    >
                                      <item.icon
                                        className='flex-shrink-0 h-6 w-6 text-zinc-400'
                                        aria-hidden='true'
                                      />
                                      <span className='ml-4'>{item.name}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className='text-sm font-medium tracking-wide text-zinc-500 uppercase'>
                                Resources
                              </h3>
                              <ul role='list' className='mt-5 space-y-6'>
                                {resources.map((item) => (
                                  <li key={item.name} className='flow-root'>
                                    <a
                                      href={item.href}
                                      className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-zinc-900 hover:bg-zinc-50'
                                    >
                                      <item.icon
                                        className='flex-shrink-0 h-6 w-6 text-zinc-400'
                                        aria-hidden='true'
                                      />
                                      <span className='ml-4'>{item.name}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                          <div className='bg-zinc-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12'>
                            <div>
                              <h3 className='text-sm font-medium tracking-wide text-zinc-500 uppercase'>
                                From the blog
                              </h3>
                              <ul role='list' className='mt-6 space-y-6'>
                                {blogPosts.map((post) => (
                                  <li key={post.id} className='flow-root'>
                                    <a
                                      href={post.href}
                                      className='-m-3 p-3 flex rounded-lg hover:bg-zinc-100'
                                    >
                                      <div className='hidden sm:block flex-shrink-0'>
                                        <img
                                          className='w-32 h-20 object-cover rounded-md'
                                          src={post.imageUrl}
                                          alt=''
                                        />
                                      </div>
                                      <div className='w-0 flex-1 sm:ml-8'>
                                        <h4 className='text-base font-medium text-zinc-900 truncate'>
                                          {post.name}
                                        </h4>
                                        <p className='mt-1 text-sm text-zinc-500'>
                                          {post.preview}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className='mt-6 text-sm font-medium'>
                              <a
                                href='#'
                                className='text-indigo-600 hover:text-indigo-500'
                              >
                                {' '}
                                View all posts{' '}
                                <span aria-hidden='true'>&rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
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
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-zinc-50'>
            <div className='pt-5 pb-6 px-5 sm:pb-8'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6 sm:mt-8'>
                <nav>
                  <div className='grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4'>
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-m-3 flex items-center p-3 rounded-lg hover:bg-zinc-50'
                      >
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'>
                          <item.icon className='h-6 w-6' aria-hidden='true' />
                        </div>
                        <div className='ml-4 text-base font-medium text-zinc-900'>
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
            <div className='py-6 px-5'>
              <div className='grid grid-cols-2 gap-4'>
                <a
                  href='#'
                  className='rounded-md text-base font-medium text-zinc-900 hover:text-zinc-700'
                >
                  Pricing
                </a>

                <a
                  href='#'
                  className='rounded-md text-base font-medium text-zinc-900 hover:text-zinc-700'
                >
                  Docs
                </a>

                <a
                  href='#'
                  className='rounded-md text-base font-medium text-zinc-900 hover:text-zinc-700'
                >
                  Company
                </a>

                <a
                  href='#'
                  className='rounded-md text-base font-medium text-zinc-900 hover:text-zinc-700'
                >
                  Resources
                </a>

                <a
                  href='#'
                  className='rounded-md text-base font-medium text-zinc-900 hover:text-zinc-700'
                >
                  Blog
                </a>

                <a
                  href='#'
                  className='rounded-md text-base font-medium text-zinc-900 hover:text-zinc-700'
                >
                  Contact Sales
                </a>
              </div>
              <div className='mt-6'>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                >
                  Sign up
                </a>
                <p className='mt-6 text-center text-base font-medium text-zinc-500'>
                  Existing customer?{' '}
                  <a href='#' className='text-indigo-600 hover:text-indigo-500'>
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;

import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../../src/components';

import vercelLogo from '../../public/images/vercel-logo.svg';
import nextjsLogo from '../../public/images/nextjs-logo.png';
import tailwindLogo from '../../public/images/tailwind-logo.svg';
import sanityLogo from '../../public/images/sanity-logo.svg';
import figmaLogo from '../../public/images/figma-logo.svg';
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline';
import { GoFlame } from '@react-icons/all-files/go/GoFlame';
import { SiReact } from '@react-icons/all-files/si/SiReact';

import { classNames } from '../../utils/classNames';
import Link from 'next/link';

const process = [
  {
    id: 1,
    title: 'Discovery',
    description:
      'We will have a meeting or you can submit your answers to our questionnaire, where you tell us about your business and help us understand what your needs are.',
  },
  {
    id: 2,
    title: 'Wireframing',
    description:
      'We will create a basic wireframe of our vision of how the website should look based on the previous information provided.',
  },
  {
    id: 3,
    title: 'Initial Approval',
    description:
      "Once you have approved the wireframe, we will come up with a full design. At this stage, it's important that you're satisfied with the layout as significant revisions may incur an additional charge.",
  },
  {
    id: 4,
    title: 'Mockups and Revisions',
    description:
      "Now we're getting somewhere! We will submit mockups of your website for your approval. This version will feature the final fonts, colors, images, and other content.",
  },
  {
    id: 5,
    title: 'Final Design Approval',
    description:
      'At this stage, you should be happy with the expected final result. Minor changes may be implemented at our discretion, but changes outside of the original scope may incur an additional charge.',
  },
];

const DevelopmentPage: NextPage = () => {
  return (
    <div>
      <Header
        page='Development'
        title='Modern web development'
        description='Utilizing modern tools, our websites are much faster, more accessible, and more search engine friendly than our competitors. Really.'
      />
      <main>
        <div className='relative pt-16 pb-32 overflow-hidden'>
          <div className='relative'>
            <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
              <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
                <div>
                  <div>
                    <span className='h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600'>
                      <SiReact
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </span>
                  </div>
                  <div className='mt-6'>
                    <h2 className='text-3xl font-semibold tracking-tight text-zinc-100'>
                      Every second counts. Ditch the norm and boost your
                      conversion rates.
                    </h2>
                    <p className='mt-4'>
                      Studies regularly show that{' '}
                      <span className='text-zinc-200 font-normal'>
                        each second of load time results in a lower conversion
                        rate
                      </span>
                      . Most development agencies use old, but popular,
                      technology that causes very slow load times. Not us.
                    </p>
                    <p className='mt-4'>
                      We use React-based tools to build your website. Our
                      process not only allows for far faster load times, but
                      also excellent{' '}
                      <Link href='/services/seo'>
                        <a className='inline-link'>search engine performance</a>
                      </Link>
                      , better security, and easier scalability than you will
                      get from most development agencies.
                    </p>
                    <div className='mt-6'>
                      <h3 className='text-zinc-100 text-xl font-semibold'>
                        Join us in the modern digital age.
                      </h3>
                      <a
                        href='#'
                        className='mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'
                      >
                        Get a free quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12 sm:mt-16 lg:mt-0'>
                <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                  <img
                    className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                    src='/images/development-2.png'
                    alt='Inbox user interface'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-24'>
            <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
              <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
                <div>
                  <div>
                    <span className='h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600'>
                      <img className='h-6 w-6' src='/images/sanity-icon.png' />
                    </span>
                  </div>
                  <div className='mt-6'>
                    <h2 className='text-3xl font-semibold tracking-tight text-zinc-100'>
                      Manage your content your way.
                    </h2>
                    <p className='mt-4'>
                      Does the content on your website need to be updated
                      frequently? Consider adding a content management system
                      (CMS) to your package.
                    </p>
                    <p className='mt-4'>
                      Although we can work with whatever you may already prefer,
                      we recommend using{' '}
                      <a
                        className='inline-link'
                        href='https://www.sanity.io'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Sanity.io
                      </a>{' '}
                      to manage your content. It&apos;s fully customizable,
                      allowing us to tailor it to your specific needs.
                    </p>
                    <div className='mt-6'>
                      <h3 className='text-zinc-100 text-xl font-semibold'>
                        Want to learn more about content management?
                      </h3>
                      <Link href='/services/content-updates'>
                        <a className='mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'>
                          Learn more
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
                <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                  <img
                    className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                    src='https://cdn.sanity.io/images/3do82whm/next/ba70e2ccf32f958597d1f5ad5d97a91643618340-1397x966.png'
                    alt='Customer profile user interface'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-primary-800'>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-normal text-white'>
              Some tools we use, and recommend, are:
            </h2>
            <div className='flow-root mt-8 lg:mt-10'>
              <div className='-mt-4 -ml-8 flex flex-wrap gap-8 justify-center items-center lg:-ml-4'>
                <div className='relative h-16 mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 max-w-[192px] w-full [filter:invert(83%)_sepia(12%)_saturate(6771%)_hue-rotate(190deg)_brightness(99%)_contrast(100%)]'>
                  <Image
                    src={nextjsLogo}
                    alt='Next.js'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='relative h-12 mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 max-w-[192px] w-full [filter:invert(83%)_sepia(12%)_saturate(6771%)_hue-rotate(190deg)_brightness(99%)_contrast(100%)]'>
                  <Image
                    src={tailwindLogo}
                    alt='Tailwind CSS'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='relative h-7 mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 max-w-[192px] w-full [filter:invert(83%)_sepia(12%)_saturate(6771%)_hue-rotate(190deg)_brightness(99%)_contrast(100%)]'>
                  <Image
                    src={sanityLogo}
                    alt='Sanity CMS'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='relative h-8 mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 max-w-[192px] w-full [filter:invert(83%)_sepia(12%)_saturate(6771%)_hue-rotate(190deg)_brightness(99%)_contrast(100%)]'>
                  <Image
                    src={vercelLogo}
                    alt='Vercel'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='relative h-8 mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 max-w-[192px] w-full [filter:invert(83%)_sepia(12%)_saturate(6771%)_hue-rotate(190deg)_brightness(99%)_contrast(100%)]'>
                  <Image
                    src={figmaLogo}
                    alt='Figma'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default DevelopmentPage;

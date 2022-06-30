import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { CircularStat, ContactFooter, Seo } from '../src/components';

import logo from '../public/logos/keplux-light-transparent.png';
import speed from '../public/images/fast-website.png';
import starsBg from '../public/images/stars.png';
import { LighthouseScores } from '../src/components/circular-stat/index';

import { BsLightningFill } from '@react-icons/all-files/bs/BsLightningFill';
import { FaSadCry } from '@react-icons/all-files/fa/FaSadCry';

import { Tag } from '../src/components/ctas/split';

const lighthouse = {
  keplux: [
    { label: 'Performance', value: 96 },
    { label: 'Accessibility', value: 98 },
    { label: 'Best Practices', value: 100 },
    { label: 'SEO', value: 100 },
  ],
  competition1: [
    { label: 'Performance', value: 51 },
    { label: 'Accessibility', value: 90 },
    { label: 'Best Practices', value: 100 },
    { label: 'SEO', value: 97 },
  ],
  competition2: [
    { label: 'Performance', value: 52 },
    { label: 'Accessibility', value: 86 },
    { label: 'Best Practices', value: 75 },
    { label: 'SEO', value: 86 },
  ],
  competition3: [
    { label: 'Performance', value: 43 },
    { label: 'Accessibility', value: 65 },
    { label: 'Best Practices', value: 58 },
    { label: 'SEO', value: 86 },
  ],
};

const Home: NextPage = () => {
  return (
    <div>
      <Seo
        title='The best and fastest websites in Toledo | Keplux Development'
        description="We're a lot different than other agencies. Our sites use modern technology to be much faster than other agencies without losing critical SEO. Call us today!"
        url='https://www.keplux.com'
      />

      <header className='relative w-full'>
        <div className='absolute w-full h-full'>
          <Image
            src={starsBg}
            alt='A field of stars'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
        <div className='absolute w-full h-full bg-black/80' />
        <div className='max-w-md mx-auto px-4 pt-16 lg:pt-24'>
          <div className='sr-only'>Keplux Development</div>
          <Image src={logo} alt='Keplux Development logo' aria-hidden />
        </div>

        <div className='relative px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16'>
          <div className='relative w-full h-full'>
            <div className='relative'>
              <Image
                src={speed}
                alt='A rocket flying out of a phone.'
                layout='responsive'
                objectFit='contain'
                objectPosition='top center'
              />
            </div>
          </div>
          <div className='max-w-2xl ml-auto'>
            <h1 className='text-3xl font-semibold text-zinc-200 sm:text-4xl'>
              We&apos;re not like other web development companies.
            </h1>
            <p className='mt-4 !text-zinc-300'>
              When we develop a website for a client, we consider the end-user
              first. We perform checks throughout the{' '}
              <Link href='/services/development'>
                <a className='inline-link'>development process</a>
              </Link>{' '}
              to make sure it&apos;s performing at the highest level possible.
            </p>
            <p className='mt-4 !text-zinc-300'>
              We keep the site&apos;s bundle size small. Not only does it
              decrease load speed, but it makes maintenance easier, limits entry
              points for online threats, and more.
            </p>
          </div>
        </div>
      </header>

      <main>
        <div className='mt-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl font-semibold text-zinc-200 sm:text-4xl'>
                You only have a few seconds to have the highest impact on
                conversion rates
              </h2>
              <p className='mt-3 sm:mt-4'>
                Popular website builders like WordPress, Wix, and Squarespace
                allow development agencies to pump out websites quickly, but at
                the expense of atrocious load times. Optimizing these tools
                properly is time-consuming, difficult, and too often neglected.
              </p>
            </div>
          </div>
          <div className='w-full bg-primary-600 mt-10'>
            <div className='relative'>
              <div className='max-w-4xl mx-auto sm:pt-8'>
                <dl className='rounded-t-lg sm:grid sm:grid-cols-3'>
                  <div className='flex flex-col border-b border-zinc-200 p-6 text-center sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg leading-6 font-medium text-primary-300'>
                      to have the highest impact on conversion rates
                    </dt>
                    <dd className='order-1 text-5xl font-extrabold text-zinc-100'>
                      5s
                    </dd>
                  </div>
                  <div className='flex flex-col p-6 text-center'>
                    <dt className='order-2 mt-2 text-lg leading-6 font-medium text-primary-300'>
                      conversion rate drop per second within the first five
                      seconds of load time
                    </dt>
                    <dd className='order-1 text-5xl font-extrabold text-zinc-100'>
                      4.42%
                    </dd>
                  </div>
                  <div className='flex flex-col border-t border-zinc-200 p-6 text-center sm:border-0 sm:border-l'>
                    <dt className='order-2 mt-2 text-lg leading-6 font-medium text-primary-300'>
                      The average mobile page takes 15.3 seconds to load
                    </dt>
                    <dd className='order-1 text-5xl font-extrabold text-zinc-100'>
                      15.3s
                    </dd>
                  </div>
                </dl>
                <p className='pb-2 ml-2 text-xs font-normal !text-primary-200'>
                  Source:{' '}
                  <a
                    href='https://blog.hubspot.com/marketing/page-load-time-conversion-rates'
                    target='_blank'
                    rel='noreferrer'
                  >
                    HubSpot
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-7xl mx-auto'>
          <div className='row-start-1 px-4 xl:px-0'>
            <Tag>
              <BsLightningFill className='h-6 w-6' />
            </Tag>
            <h2 className='text-3xl font-semibold tracking-tight text-zinc-100'>
              Performance, accessibility, and search engine optimization.
            </h2>
            <p className='mt-4'>These directly affect your conversion rates.</p>
            <p className='mt-4'>
              Search engines are always adjusting how they rank websites in
              their results pages. Some of the major factors that go into the
              ranking include page load speed and a plethora of common{' '}
              <Link href='/services/seo'>
                <a className='inline-link'>SEO</a>
              </Link>{' '}
              techniques.
            </p>
          </div>

          <div className='row-start-2 lg:row-start-1 lg:col-start-2 bg-zinc-900 mx-auto max-w-xl rounded-lg h-min'>
            <div className='m-2 p-4 flex justify-between items-center flex-wrap sm:flex-nowrap border-b border-zinc-700'>
              <div className='pr-4'>
                <h3 className='text-lg leading-6 font-medium text-zinc-100'>
                  Keplux Development
                </h3>
                <p className='mt-1 text-sm text-zinc-500'>
                  Our scores in these fields are much higher than sites built
                  with tools like WordPress, Squarespace, and Wix.
                </p>
              </div>
              <div className='flex-shrink-0 mt-4 sm:mt-0'>
                <Link href='/services/development'>
                  <button
                    type='button'
                    className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
            <div className='p-4'>
              <LighthouseScores data={lighthouse.keplux} />
            </div>
          </div>

          <div className='row-start-4 lg:row-start-2 lg:col-start-1 mx-auto max-w-xl rounded-lg'>
            <div className='m-2 p-4 flex justify-between items-center flex-wrap sm:flex-nowrap border-b border-zinc-700'>
              <div>
                <h3 className='text-lg leading-6 font-medium text-zinc-100'>
                  Other Websites
                </h3>
                <p className='mt-1 text-sm text-zinc-500'>
                  Here&apos;s how top competitor websites scored under the same
                  conditions as we scored ourselves.
                </p>
              </div>
            </div>
            <div className='p-4 grid grid-cols-1 gap-8'>
              <LighthouseScores data={lighthouse.competition1} />
              <LighthouseScores data={lighthouse.competition2} />
              <LighthouseScores data={lighthouse.competition3} />
            </div>
          </div>

          <div className='row-start-3 lg:row-start-2 lg:col-start-2 px-4 xl:px-0'>
            <Tag>
              <FaSadCry className='h-6 w-6' />
            </Tag>
            <h2 className='text-3xl font-semibold tracking-tight text-zinc-100'>
              You could be losing potential customers with other web design
              companies.
            </h2>
            <p className='mt-4'>
              We live in a time where people like instant gratification. So do
              we. Even though you may not know what technologies other design
              companies use, it&apos;s actually important.
            </p>
            <p className='mt-4'>
              A huge portion of the internet runs on WordPress because it&apos;s
              been around for ages. We don&apos;t mean to knock others for using
              it, but times change. We&apos;re passionate about bringing in the
              new age of web development while bringing better results to our
              clients.
            </p>
            <div className='mt-6'>
              <h3 className='text-zinc-100 text-xl font-semibold'>
                Check out what else we&apos;ve been working on.
              </h3>
              <Link href='/projects'>
                <a className='mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'>
                  View projects
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <ContactFooter />
    </div>
  );
};
export default Home;

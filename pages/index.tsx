import { NextPage } from 'next';
import Image from 'next/image';
import { Seo } from '../src/components';

import lighthouse1 from '../public/images/lighthouse/lighthouse-score-1.png';
import lighthouse2 from '../public/images/lighthouse/lighthouse-score-2.png';
import lighthouse3 from '../public/images/lighthouse/lighthouse-score-3.png';
import lighthouse4 from '../public/images/lighthouse/lighthouse-score-4.png';

const Home: NextPage = () => {
  return (
    <main>
      <Seo
        title='Need some trees cut or your lawn mowed? Call us today!'
        description="We provide tree and lawn services in and around Adrian, MI. Whether you need your lawn mowed, a tree removed from your garage, or anything in between, we've got you covered."
        url='https://www.cocostreeservice.com'
      />
      <div className='mt-24 bg-zinc-800 pt-12 sm:pt-16'>
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
        <div className='mt-10 pb-12 bg-zinc-900 sm:pb-16'>
          <div className='relative'>
            <div className='absolute inset-0 h-1/2 bg-zinc-800' />
            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='max-w-4xl mx-auto'>
                <dl className='rounded-t-lg bg-white shadow-lg sm:grid sm:grid-cols-3'>
                  <div className='flex flex-col border-b border-zinc-100 p-6 text-center sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg leading-6 font-medium text-zinc-500'>
                      to have the highest impact on conversion rates
                    </dt>
                    <dd className='order-1 text-5xl font-extrabold text-primary-600'>
                      5s
                    </dd>
                  </div>
                  <div className='flex flex-col border-b border-zinc-100 p-6 text-center sm:border-0 sm:border-r'>
                    <dt className='order-2 mt-2 text-lg leading-6 font-medium text-zinc-500'>
                      conversion rate drop per second within the first five
                      seconds of load time
                    </dt>
                    <dd className='order-1 text-5xl font-extrabold text-primary-600'>
                      4.42%
                    </dd>
                  </div>
                  <div className='flex flex-col border-t border-zinc-100 p-6 text-center sm:border-0 sm:border-l'>
                    <dt className='order-2 mt-2 text-lg leading-6 font-medium text-zinc-500'>
                      The average mobile page takes 15.3 seconds to load
                    </dt>
                    <dd className='order-1 text-5xl font-extrabold text-primary-600'>
                      15.3s
                    </dd>
                  </div>
                </dl>
                <p className='bg-white m-0 rounded-b-xl p-2 text-xs italic border-t border-zinc-100'>
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

          <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto w-full h-full'>
            <div className='max-w-lg w-full mx-auto shadow overflow-hidden rounded-md'>
              <div>
                <h3 className='text-2xl font-semi-bold text-zinc-100'>
                  Most development agencies simply don&apos;t meet these
                  important metrics
                </h3>
                <p className='mt-3 sm:mt-4'>
                  Our goal is to reduce average load times, without negatively
                  impacting quality and SEO, to improve your conversion rates.
                </p>
              </div>
              <div>
                <h4 className='mt-6 text-primary-300 font-normal text-lg'>
                  Here&apos;s how our website ranks against others according to
                  Google Lighthouse
                </h4>
                <ul role='list' className='divide-y divide-zinc-800'>
                  <li className='px-6 py-4'>
                    <div className='relative h-32 w-auto'>
                      <Image
                        src={lighthouse1}
                        alt='Competitor 1 lighthouse score'
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='max-w-lg w-full mx-auto shadow overflow-hidden rounded-md'>
              <h4 className='mt-6 text-primary-300 font-normal text-lg'>
                Google Lighthouse scores for popular agencies in Toledo, OH
              </h4>

              <ul role='list' className='divide-y divide-zinc-800'>
                <li className='px-6 py-4'>
                  <div className='relative h-32 w-auto'>
                    <Image
                      src={lighthouse2}
                      alt='Competitor 2 lighthouse score'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </li>
                <li className='px-6 py-4'>
                  <div className='relative h-32 w-auto'>
                    <Image
                      src={lighthouse3}
                      alt='Competitor 3 lighthouse score'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </li>
                <li className='px-6 py-4'>
                  <div className='relative h-32 w-auto'>
                    <Image
                      src={lighthouse4}
                      alt='Competitor 4 lighthouse score'
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;

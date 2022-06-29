import { NextPage } from 'next';
import Image from 'next/image';
import { Header, Seo, Split, SplitContainer } from '../src/components';

import logo from '../public/logos/keplux-light-transparent.png';
import lighthouse1 from '../public/images/lighthouse/lighthouse-score-1.png';
import lighthouse2 from '../public/images/lighthouse/lighthouse-score-2.png';
import lighthouse3 from '../public/images/lighthouse/lighthouse-score-3.png';
import lighthouse4 from '../public/images/lighthouse/lighthouse-score-4.png';
import speed from '../public/images/fast-website.png';

const Home: NextPage = () => {
  return (
    <main>
      <Seo
        title='The best and fastest websites in Toledo | Keplux Development'
        description="We're a lot different than other agencies. Our sites use modern technology to be much faster than other agencies without losing critical SEO. Call us today!"
        url='https://www.keplux.com'
      />
      <Header
        subtitle={
          <div className='max-w-2xl mx-auto px-4 mb-16 lg:mb-24'>
            <div className='sr-only'>Keplux Development</div>
            <Image src={logo} alt='Keplux Development logo' aria-hidden />
          </div>
        }
        title='Building the fastest websites in Toledo'
        description="We're different than a lot of web development companies. We provide bespoke websites without the bespoke price tag."
      />

      <div className='relative mt-16 lg:mt-32 max-w-5xl mx-auto'>
        <div className='max-w-2xl ml-auto'>
          <h3 className='text-2xl font-semi-bold text-zinc-100'>
            Most development agencies simply don&apos;t meet these important
            metrics
          </h3>
          <p className='mt-3 sm:mt-4'>
            Our goal is to reduce average load times, without negatively
            impacting quality and SEO, to improve your conversion rates.
          </p>
        </div>
        <div className='absolute -bottom-16 -left-8 -z-[1] h-[75vh] w-full'>
          <Image
            src={speed}
            alt='A rocket flying out of a phone.'
            layout='fill'
            objectFit='contain'
            objectPosition='top left'
          />
        </div>
      </div>

      <div className='mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto w-full h-full'>
        <div className='max-w-lg w-full mx-auto shadow rounded-md'>
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
        <div className='relative max-w-lg w-full mx-auto shadow overflow-hidden rounded-md'>
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

      {/* <SplitContainer>
        <Split imgSrc={speed} imgAlt='A rocket flying how of a phone.'>
          <Split.Header>The fastest websites in Toledo</Split.Header>
          <Split.Body>
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
          </Split.Body>
        </Split>
      </SplitContainer> */}
      <div className='mt-24 pt-12 sm:pt-16'>
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
        <div className='mt-10 pb-12 sm:pb-16'>
          <div className='relative'>
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
        </div>
      </div>
    </main>
  );
};
export default Home;

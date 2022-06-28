import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../../src/components';
import analyticsImg from '../../public/images/analytics.png';
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt';

const AnalyticsPage: NextPage = () => {
  return (
    <div>
      <Header
        page='Analytics'
        title='Know how users interact with your site'
        description="Being able to see how users engage with the content on your site allows you to work out what does and doesn't work for marketing, saving you money and increasing leads."
      />
      <main>
        <article className='bg-white relative text-center max-w-8xl w-full'>
          <div className='absolute -inset-0 h-1/3 lg:h-1/2 bg-[#111111]' />
          <div className='relative z-10 mx-4 shadow-xl rounded-2xl'>
            <Image
              src={analyticsImg}
              alt='Content management with Sanity Studio'
              layout='responsive'
              objectFit='contain'
            />
          </div>
          <section className='bg-white relative max-w-7xl mx-auto -mt-8 pt-24 pb-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
            <div className='max-w-5xl mx-auto text-center'>
              <h2 className='text-5xl font-semibold text-zinc-900'>
                Website analytics provided by Google Analytics
              </h2>
              <p className='mt-4 max-w-2xl mx-auto text-lg !text-zinc-500'>
                We highly recommend adding analytics to your web package. We can
                integrate it into your site for a one-time fee, but the service
                itself is provided for free through{' '}
                <a
                  href='https://marketingplatform.google.com/about/analytics/'
                  target='_blank'
                  rel='noreferrer'
                  className='inline-link'
                >
                  Google Analytics
                  <span className='ml-2'>
                    {' '}
                    <FaExternalLinkAlt className='relative -mt-1.5 inline h-4 w-4' />{' '}
                  </span>
                </a>
                .
              </p>
            </div>
          </section>
        </article>

        <section>
          <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between'>
            <h2 className='text-3xl font-extrabold tracking-tight text-zinc-100 md:text-4xl'>
              <span className='block'>Ready to get started?</span>
              <span className='block text-primary-600'>Contact us today.</span>
            </h2>
            <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
              <div className='inline-flex rounded-md shadow'>
                <a
                  href='/contact'
                  className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700'
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default AnalyticsPage;

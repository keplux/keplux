import { NextPage } from 'next';
import Image from 'next/image';
import { Header, ImageOverlayContent } from '../../src/components';
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
        <ImageOverlayContent
          imgSrc={analyticsImg}
          imgAlt='Illustration of a web analytics dashboard.'
        >
          <ImageOverlayContent.Header>
            Website analytics provided by Google Analytics
          </ImageOverlayContent.Header>
          <ImageOverlayContent.Body>
            <p className='mt-4 max-w-6xl mx-auto'>
              <p className='max-w-2xl text-lg !text-zinc-500'>
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
            </p>
          </ImageOverlayContent.Body>
        </ImageOverlayContent>

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

import { NextPage } from 'next';
import { Header, ImageOverlayContent, Seo } from '../../src/components';
import analyticsImg from '../../public/images/analytics.png';
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt';
import Link from 'next/link';
import ContactFooter from '../../src/components/contact-footer/index';

const AnalyticsPage: NextPage = () => {
  return (
    <div>
      <Seo
        title='Add Google Analytics to your website | Keplux Development'
        description='See how users engage with the content on your site. These insights can improve marketing, saving you money and increasing leads. Add analytics to any site.'
        url='https://www.keplux.com/services/analytics'
      />
      <Header
        subtitle='Analytics'
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
            <div className='mt-4 max-w-6xl mx-auto'>
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
            </div>
          </ImageOverlayContent.Body>
        </ImageOverlayContent>

        <ContactFooter />
      </main>
    </div>
  );
};
export default AnalyticsPage;

import { NextPage } from 'next';
import Image from 'next/image';
import { Header, Split, SplitContainer } from '../../src/components';

import vercelLogo from '../../public/images/technology-logos/vercel-logo.svg';
import nextjsLogo from '../../public/images/technology-logos/nextjs-logo.png';
import tailwindLogo from '../../public/images/technology-logos/tailwind-logo.svg';
import sanityLogo from '../../public/images/technology-logos/sanity-logo.svg';
import figmaLogo from '../../public/images/technology-logos/figma-logo.svg';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { MdShoppingCart } from '@react-icons/all-files/md/MdShoppingCart';
import sanityIcon from '../../public/images/sanity-icon.png';
import developmentImg from '../../public/images/development.png';
import sanityStudio from '../../public/images/sanity-studio.png';
import store from '../../public/images/ecommerce.jpg';

import { classNames } from '../../utils/classNames';
import Link from 'next/link';

const DevelopmentPage: NextPage = () => {
  return (
    <div>
      <Header
        page='Development'
        title='Modern web development'
        description='Utilizing modern tools, our websites are much faster, more accessible, and more search engine friendly than our competitors. Really.'
      />
      <main>
        <SplitContainer>
          <Split
            imgSrc={developmentImg}
            imgAlt='Screenshot of a code editor displaying typescript that makes up this page.'
          >
            <Split.Tag>
              <SiReact className='h-6 w-6' />
            </Split.Tag>
            <Split.Header>
              Every second counts. Ditch the norm and boost your conversion
              rates.
            </Split.Header>
            <Split.Body>
              <p>
                Studies regularly show that{' '}
                <span className='text-zinc-200 font-normal'>
                  each second of load time results in a lower conversion rate
                </span>
                . Most development agencies use old, but popular, technology
                that causes very slow load times. Not us.
              </p>
              <p className='mt-4'>
                We use React-based tools to build your website. Our process not
                only allows for far faster load times, but also excellent{' '}
                <Link href='/services/seo'>
                  <a className='inline-link'>search engine performance</a>
                </Link>
                , better security, and easier scalability than you will get from
                most development agencies.
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
            </Split.Body>
          </Split>

          <Split
            contentPosition='right'
            imgSrc={sanityStudio}
            imgAlt='Screenshot of content management within Sanity Studio.'
          >
            <Split.Tag>
              <div className='w-full h-full p-3'>
                <Image src={sanityIcon} alt='Sanity.io icon' />
              </div>
            </Split.Tag>
            <Split.Header>
              Content management solutions to keep your site updated.
            </Split.Header>
            <Split.Body>
              <p>
                Does the content on your website need to be updated frequently?
                Consider adding a content management system (CMS) to your
                package.
              </p>
              <p className='mt-4'>
                Although we can work with whatever you may already prefer, we
                recommend using{' '}
                <a
                  className='inline-link'
                  href='https://www.sanity.io'
                  target='_blank'
                  rel='noreferrer'
                >
                  Sanity.io
                </a>{' '}
                to manage your content. It&apos;s fully customizable, allowing
                us to tailor it to your specific needs.
              </p>
              <div className='mt-6'>
                <h3 className='text-zinc-100 text-xl font-semibold'>
                  We can also manage your content for you.
                </h3>
                <Link href='/services/content-updates'>
                  <a className='mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'>
                    Learn more
                  </a>
                </Link>
              </div>
            </Split.Body>
          </Split>

          <Split
            imgSrc={store}
            imgAlt='Screenshot of an e-commerce storefront. Features a summer collection of apparel and a collage of models.'
          >
            <Split.Tag>
              <MdShoppingCart className='h-6 w-6' />
            </Split.Tag>
            <Split.Header>
              Custom e-commerce websites that reflect your brand identity.
            </Split.Header>
            <Split.Body>
              <p>
                The best e-commerce websites load fast, regardless of how many
                products are listed, and should reflect the company&apos;s
                brand. Using headless e-commerce technologies, we can create an
                e-commerce design that you love and your customers don&apos;t
                get frustrated with.
              </p>
              <div className='mt-6'>
                <h3 className='text-zinc-100 text-xl font-semibold'>
                  Need help setting up an online store?
                </h3>
                <a
                  href='#'
                  className='mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'
                >
                  Get a free quote
                </a>
              </div>
            </Split.Body>
          </Split>
        </SplitContainer>

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

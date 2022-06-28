import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../../src/components';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt';
import { FaWheelchair } from '@react-icons/all-files/fa/FaWheelchair';
import seoImg from '../../public/images/seo.png';
import accessibilityImg from '../../public/images/accessibility.png';

const SeoPage: NextPage = () => {
  return (
    <div>
      <Header
        page='SEO and Accessibility'
        title='Rank higher on search engines while expanding access to your site'
        description='A lot of factors determine how high your site ranks on search engines. We work to understand your business and goals to help you rank higher. We also ensure your site is accessible to everyone.'
      />
      <main>
        <div className='relative pt-16 pb-32 overflow-hidden'>
          <div className='relative'>
            <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
              <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
                <div>
                  <div>
                    <span className='h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600'>
                      <MdSearch
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </span>
                  </div>
                  <div className='mt-6'>
                    <h2 className='text-3xl font-semibold tracking-tight text-zinc-100'>
                      Having a website is great. Users being able to find it is
                      even better.
                    </h2>
                    <p className='mt-4'>
                      Search engine optimization is an ongoing task. As trends
                      change, popular keywords change; these keywords are a
                      critical component of how high your site ranks. There are
                      <span className='italic'> tons </span> of other SEO
                      factors.
                    </p>
                    <p className='mt-4'>
                      We use all of the information you provide to us, in
                      addition to our own research, to develop a strategy to get
                      your site to rank high.
                    </p>
                    <div className='mt-6'>
                      <h3 className='text-zinc-100 text-xl font-semibold'>
                        Want to learn more about SEO?
                      </h3>
                      <a
                        href='https://developers.google.com/search/docs/beginner/seo-starter-guide'
                        target='_blank'
                        rel='noreferrer'
                        className=' mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'
                      >
                        Google SEO Starter Guide
                        <span className='ml-2'>
                          {' '}
                          <FaExternalLinkAlt />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12 sm:mt-16 lg:mt-0'>
                <div className='lg:absolute w-full max-w-5xl lg:h-full'>
                  <div className='relative h-48 lg:h-full w-full rounded-xl overflow-hidden shadow-xl'>
                    <Image
                      src={seoImg}
                      alt='Inbox user interface'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='top left'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-24'>
            <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
              <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
                <div>
                  <div>
                    <span className='h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600'>
                      <FaWheelchair
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </span>
                  </div>
                  <div className='mt-6'>
                    <h2 className='text-3xl font-semibold tracking-tight text-zinc-100'>
                      Accessibility broadens your customer and improves your
                      organic search rankings.
                    </h2>
                    <p className='mt-4'>
                      Websites can be challenging for some people to view,
                      whether due to disability, slow connection and limited
                      bandwith, or screen size, among other things.
                    </p>
                    <p className='mt-4'>
                      We follow best practices to ensure your site is
                      accessible, and it&apos;s standard for every site we make.
                    </p>
                    <div className='mt-6'>
                      <h3 className='text-zinc-100 text-xl font-semibold'>
                        Want to learn more about accessibility?
                      </h3>
                      <a
                        href='https://www.w3.org/WAI/fundamentals/accessibility-intro/'
                        target='_blank'
                        rel='noreferrer'
                        className='mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'
                      >
                        Web Accessibility Initiative
                        <span className='ml-2'>
                          <FaExternalLinkAlt />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative mt-12 lg:-ml-[512px] sm:mt-16 lg:mt-0 lg:col-start-1'>
                <div className='lg:absolute right-0 w-full max-w-5xl lg:h-full'>
                  <div className='relative h-96 lg:h-full w-full rounded-xl overflow-hidden shadow-xl'>
                    <Image
                      src={accessibilityImg}
                      alt='Inbox user interface'
                      layout='fill'
                      objectFit='cover'
                      objectPosition='top right'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='bg-white'>
          <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl'>
              <span className='block'>Ready to get started?</span>
              <span className='block text-indigo-600'>Contact us today.</span>
            </h2>
            <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
              <div className='inline-flex rounded-md shadow'>
                <a
                  href='/contact'
                  className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
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
export default SeoPage;

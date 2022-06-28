import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../../src/components';
import sanityStudio from '../../public/images/sanity-studio.png';
import { CheckIcon } from '@heroicons/react/outline';

import { FaServer } from '@react-icons/all-files/fa/FaServer';
import { FaTools } from '@react-icons/all-files/fa/FaTools';

const features = [
  {
    name: 'Structured content',
    description:
      'Easily find what you want to update with a logical content structure.',
  },
  {
    name: 'Live preview and revisions',
    description:
      'Preview your content before publishing it or roll it back to a previous state.',
  },
  {
    name: 'Text editor',
    description:
      'Format and structure your blog posts or other content with the built-in text editor.',
  },
  {
    name: 'Access anywhere',
    description: 'Update your content anywhere, any time...even on your phone!',
  },
];

const bundledServices = [
  {
    name: 'Hosting',
    href: '/services/hosting',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: FaServer,
  },
  {
    name: 'Maintenance',
    href: '/services/maintenance',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: FaTools,
  },
];

const ContentManagementPage: NextPage = () => {
  return (
    <div>
      <Header
        page='Content Management'
        title='Managing your content just got easier'
        description="Making content changes on your website shouldn't be a burden. We make it easy and intuitive, or we can be retained to do it for you."
      />
      <main>
        <article className='bg-white relative text-center max-w-8xl w-full'>
          <div className='absolute -inset-0 h-1/3 lg:h-1/2 bg-[#111111]' />
          <div className='relative z-10 mx-4 shadow-xl inline-block rounded-b-lg'>
            <Image
              src={sanityStudio}
              alt='Content management with Sanity Studio'
            />
          </div>
          <section className='bg-white relative max-w-7xl mx-auto -mt-8 pt-24 pb-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
            <div className='max-w-5xl mx-auto text-center'>
              <h2 className='text-5xl font-semibold text-zinc-900'>
                Fully-customizable content management system with{' '}
                <span className='text-red-500'>Sanity.io</span>
              </h2>
              <p className='mt-4 max-w-2xl mx-auto text-lg !text-zinc-500'>
                This content management system can be completely customized to
                suit your needs. The most common use-case would be a blogging
                service, but it can also store content like this paragraph,
                allowing you to change it at any time. Extrapolate that enough
                and you could have an entire website builder!
              </p>
            </div>
            <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
              {features.map((feature) => (
                <div key={feature.name} className='relative'>
                  <dt>
                    <CheckIcon
                      className='absolute h-6 w-6 text-green-500'
                      aria-hidden='true'
                    />
                    <p className='ml-9 text-left text-lg leading-6 font-medium !text-primary-600'>
                      {feature.name}
                    </p>
                  </dt>
                  <dd className='mt-2 ml-9 text-left text-zinc-600'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </article>

        <article className='py-16'>
          <section className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl'>
              Content management service
            </h2>
            <p className='mt-6 max-w-3xl'>
              Not everyone has the time or team to manage their own content.
              Maybe they don&apos;t want to learn how to use the content
              management system. We can provide this service to you!
            </p>
            <p className='mt-6 max-w-3xl'>
              When you bundle our hosting, content management, and maintenance
              packages with your website, you receive unlimited content updates
              for one monthly payment.
            </p>
          </section>
          <section className='mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h3 className='mt-8 text-xl font-semibold !text-zinc-100'>
              Explore bundled services
            </h3>
            <div className='mt-12 grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
              {bundledServices.map((link) => (
                <div
                  key={link.name}
                  className='flex flex-col bg-zinc-900 rounded-2xl shadow-xl'
                >
                  <div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
                    <div className='absolute top-0 p-5 inline-block bg-primary-600 rounded-xl shadow-lg transform -translate-y-1/2'>
                      <link.icon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </div>
                    <h4 className='text-xl font-medium text-zinc-100'>
                      {link.name}
                    </h4>
                    <p className='mt-4 text-base text-gray-500'>
                      {link.description}
                    </p>
                  </div>
                  <div className='px-6 py-4 bg-zinc-800 rounded-bl-2xl rounded-br-2xl md:px-8'>
                    <a href={link.href} className='inline-link'>
                      Learn more<span aria-hidden='true'> &rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
        <section className='bg-primary-300'>
          <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl'>
              <span className='block'>Want more information?</span>
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
export default ContentManagementPage;

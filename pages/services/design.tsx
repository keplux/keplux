import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../../src/components';

import designImg from '../../public/images/design.jpeg';

import { classNames } from '../../utils/classNames';

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

const DesignPage: NextPage = () => {
  return (
    <div>
      <Header
        page='Design'
        title='Professional web design'
        description='We build our websites with modern-looking components that can be customized to fit your business or we can create them from scratch.'
      />
      <main>
        <article>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
            <div className='bg-primary-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4'>
              <div className='pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
                <section className='lg:self-center'>
                  <h2 className='text-3xl font-semibold text-white sm:text-4xl'>
                    <span className='block'>Ready to get started?</span>
                    <span className='block'>It&apos;s easy!</span>
                  </h2>
                  <p className='mt-4 text-lg leading-6 !text-primary-200'>
                    We work with you every step of the way, ensuring you&apos;re
                    happy with the final result.
                  </p>
                  <Link href='/contact'>
                    <a className='mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-primary-600 hover:bg-primary-50'>
                      Get started now
                    </a>
                  </Link>
                </section>
              </div>
              <aside className='-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1'>
                <div className='relative transform translate-x-6 translate-y-6 w-full h-full rounded-md overflow-hidden object-cover object-left-top sm:translate-x-16 lg:translate-y-20'>
                  <Image src={designImg} alt='App screenshot' />
                </div>
              </aside>
            </div>
          </div>
        </article>
        
        <article>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8'>
            <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
              <aside>
                <h2 className='text-3xl font-normal'>
                  Here&apos;s What to Expect
                </h2>
                <p className='mt-4 text-lg'>
                  Just so you aren&apos;t caught off guard, here&apos;s the
                  process you should expect. It&apos;s easy and helps us create
                  a website you will be happy with before we begin the{' '}
                  <Link href='/services/development'>
                    <a className='inline-link'>development phase</a>
                  </Link>
                  .
                </p>
              </aside>
              <section className='mt-12 lg:mt-0 lg:col-span-2'>
                <dl className='space-y-12'>
                  {process.map((step) => (
                    <div key={step.title}>
                      <dt className='text-lg leading-6 font-medium text-zinc-100'>
                        {step.title}
                      </dt>
                      <dd className='mt-2'>{step.description}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};
export default DesignPage;

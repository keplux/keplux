import { NextPage } from 'next';
import { Header } from '../../src/components';

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
        title='Beautiful, modern web design'
        description='We build our websites with modern-looking components that can be customized to fit your business or we can create them from scratch.'
      />
      <section>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='bg-indigo-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4'>
            <div className='pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
              <div className='lg:self-center'>
                <h2 className='text-3xl font-semibold text-white sm:text-4xl'>
                  <span className='block'>Ready to get started?</span>
                  <span className='block'>It&apos;s easy!</span>
                </h2>
                <p className='mt-4 text-lg leading-6 !text-indigo-200'>
                  We work with you every step of the way, ensuring you&apos;re
                  happy with the final result.
                </p>
                <a
                  href='#'
                  className='mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50'
                >
                  Get started now
                </a>
              </div>
            </div>
            <div className='-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1'>
              <img
                className='transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20'
                src='/images/design.jpeg'
                alt='App screenshot'
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='lg:self-center'>
            <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
              <span className='block'>Here&apos;s What to Expect</span>
            </h2>
            <p className='mt-4 text-lg leading-6 text-indigo-200'>
              Just so you aren&apos;t caught off guard, here&apos;s the process
              you should expect. It&apos;s easy and helps us create a website you will be happy with for years to come.
            </p>
          </div>
          <ul role='list' className='max-w-xl divide-y divide-gray-200'>
            {process.map((step) => (
              <li key={step.id} className='py-4'>
                <div className='flex space-x-3'>
                  <span className='flex items-center justify-center text-zinc-900 leading-0 w-8 h-8 rounded-full bg-primary-300'>
                    {step.id}
                  </span>
                  <div className='flex-1 space-y-1'>
                    <div className='flex items-center justify-between'>
                      <h3 className='font-normal'>{step.title}</h3>
                    </div>
                    <p className='text-sm text-gray-500'>{step.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default DesignPage;

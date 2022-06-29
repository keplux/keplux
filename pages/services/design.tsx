import { NextPage } from 'next';
import Link from 'next/link';
import {
  ContactFooter,
  Header,
  Seo,
  Split,
  SplitContainer,
} from '../../src/components';

import designImg from '../../public/images/design.jpeg';

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
      <Seo
        title='The best web design services in Toledo | Keplux Development'
        description='We build our websites with modern-looking components that can be customized to fit your business or we can create them from scratch. Call today (567) 340-0015'
        url='https://www.keplux.com/services/design'
      />
      <Header
        subtitle='Design'
        title='Professional web design'
        description='We build our websites with modern-looking components that can be customized to fit your business or we can create them from scratch.'
      />
      <main>
        <SplitContainer>
          <Split
            contentPosition='right'
            imgSrc={designImg}
            imgAlt='A person is whiteboarding a wireframe of a website.'
          >
            <Split.Header>Bringing your own design?</Split.Header>
            <Split.Body>
              <p>
                Great! We can apply our custom{' '}
                <Link href='/services/development'>
                  <a className='inline-link'>development process</a>
                </Link>{' '}
                to any design. We&apos;ll work with you to hammer down
                specifics, but can skip the majority of this part of the
                process.
              </p>
              <div className='mt-6'>
                <h3 className='text-zinc-100 text-xl font-semibold'>
                  Ready to get started?
                </h3>
                <Link href='https://developers.google.com/search/docs/beginner/seo-starter-guide'>
                  <a className=' mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'>
                    Get started now
                  </a>
                </Link>
              </div>
            </Split.Body>
          </Split>
        </SplitContainer>

        <article>
          <div className='max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:pt-24 lg:px-8'>
            <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
              <aside>
                <h2 className='text-3xl font-normal'>
                  Here&apos;s what to expect when starting a project with us
                </h2>
                <p className='mt-4 text-lg'>
                  It&apos;s easy and helps us create a website you will be happy
                  with before we begin the{' '}
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

      <ContactFooter />
    </div>
  );
};
export default DesignPage;

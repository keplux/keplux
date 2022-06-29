import { NextPage } from 'next';
import Image from 'next/image';
import { ContactFooter, Header, Seo, Split, SplitContainer } from '../../src/components';
import Link from 'next/link';

import ecommerceImg from '../../public/images/ecommerce.jpg';
import cartImg from '../../public/images/ecommerce-cart.jpg';
import productImg from '../../public/images/ecommerce-product-details.jpg';

const eCommercePage: NextPage = () => {
  return (
    <div>
      <Seo
        title='The best custom e-commerce solutions | Keplux Development'
        description='Our headless e-commerce solutions result in faster, more customizable, and highly scalable e-commerce sites than typical solutions offered by agencies.'
        url='https://www.keplux.com/services/e-commerce'
      />
      <Header
        subtitle='E-Commerce'
        title='Need an online store for your business?'
        description='We can implement a variety of e-commerce solutions and tailor them to your needs.'
      />
      <main>
        <article className='mt-16 lg:mt-24 bg-white relative text-center max-w-8xl w-full'>
          <div className='absolute -inset-0 h-1/3 lg:h-1/2 bg-[#111111]' />
          <div className='mx-4'>
            <div className='relative max-w-6xl mx-auto z-10 shadow-xl rounded-md overflow-hidden'>
              <Image
                src={ecommerceImg}
                alt='Screenshot of an e-commerce storefront. Features a summer collection of apparel and a collage of models.'
                layout='responsive'
                objectFit='contain'
              />
            </div>
          </div>
          <section className='bg-white relative max-w-7xl mx-auto -mt-8 pt-24 pb-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
            <div className='max-w-5xl mx-auto text-center'>
              <h2 className='text-5xl font-semibold text-zinc-900'>
                Start selling online with a headless e-commerce solution
              </h2>
              <p className='mt-4 max-w-2xl mx-auto text-lg !text-zinc-500'>
                Using headless e-commerce backends to build out your online
                store&apos;s frontend from scratch. Headless technology exposes
                a service through an API. This allows businesses to decouple the
                backend from the frontend, which comes with several benefits for
                businesses.
              </p>
            </div>
          </section>
        </article>
        <SplitContainer>
          <Split
            imgSrc={cartImg}
            imgAlt="Screenshot of an online store's shopping cart with the order summary and checkout button."
          >
            <Split.Header>
              Get ready to grow your online business with an omnichannel
              experience.
            </Split.Header>
            <Split.Body>
              <p>
                With headless e-commerce, all of your data comes from a single
                source. With us, you will get an e-commerce store that runs in
                browsers. Down the road, another developer can build you a
                mobile app with all of your data kept in sync across platforms.
                Add more sales channels as your business grows without messing
                up other channels!
              </p>
              <div className='mt-6'>
                <h3 className='text-zinc-100 text-xl font-semibold'>
                  Get ahead of your competitors, starting today.
                </h3>
                <Link href='/contact'>
                  <a className='mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'>
                    Get a free quote
                  </a>
                </Link>
              </div>
            </Split.Body>
          </Split>

          <Split
            contentPosition='right'
            imgSrc={productImg}
            imgAlt='Screenshot of a product information page for a desk organizer.'
          >
            <Split.Header>Endlessly customizable e-commerce.</Split.Header>
            <Split.Body>
              <p>
                Since headless e-commerce doesn&apos;t come with a frontend,
                designers and developers are free to build out online stores in
                any configuration imaginable. Not only that, but new features
                can be added painlessly at any time. That&apos;s difficult to
                impossible to do with standard e-commerce services.
              </p>
              <div className='mt-6'>
                <h3 className='text-zinc-100 text-xl font-semibold'>
                  Check out what you can expect with our design process.
                </h3>
                <Link href='/services/design'>
                  <a className='mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'>
                    View design process
                  </a>
                </Link>
              </div>
            </Split.Body>
          </Split>
        </SplitContainer>

        <ContactFooter />
      </main>
    </div>
  );
};
export default eCommercePage;

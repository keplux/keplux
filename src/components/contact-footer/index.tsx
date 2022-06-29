import Link from 'next/link';

export const ContactFooter = () => {
  return (
    <section className='mt-24 bg-primary-900/25'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-3xl font-extrabold tracking-tight text-zinc-100 md:text-4xl'>
          <span className='block'>Want more information?</span>
          <span className='block text-primary-600'>Contact us today.</span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <Link href='/contact'>
              <a className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700'>
                Get started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactFooter;

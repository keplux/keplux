import Image from 'next/image';
import { ContactForm, Divider, Seo } from '../src/components';

// Change contact info here
export const contactInfo = {
  phone: '(517) 759-0356',
  email: 'contact@cocostreeservice.com',
};

const Contact = () => {
  return (
    <div className='relative pb-16 md:pb-32'>
      <Seo
        title="Call CoCo's for your tree and lawn needs! (517) 759-0356"
        description="We provide tree and lawn services in and around Adrian, MI. Whether you need your lawn mowed, a tree removed from your garage, or anything in between, we've got you covered."
        url='https://www.cocostreeservice.com/contact'
      />
      <header>
        <div className='relative w-screen h-32 md:h-48'>
          <Image
            src='/images/grass.jpg'
            alt='Grassy header'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='px-4 md:px-0'>
          <div className='relative px-2 max-w-xl -mt-16 mx-auto py-8 bg-base border border-black'>
            <h1 className='text-center'>Contact Us</h1>
            <p className='text-center'>
              Ready for a quote? Contact us now and let&apos;s get started!
            </p>
          </div>
        </div>
      </header>

      {/* Contact info card */}
      <div className='mt-16 md:mt-32 px-4 md:px-0 max-w-3xl mx-auto'>
        <h2 className='text-white'>Inquiries/Quotes</h2>
        <div className='flex items-center mt-1'>
          {/* Phone Icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-secondary-500'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
          </svg>
          <a href={`tel:+1${contactInfo.phone}`}>
            <span className='ml-2 text-gray-400 hover:text-white'>
              {contactInfo.phone}
            </span>
          </a>
        </div>
        <div className='flex items-center mt-2'>
          {/* Email icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-secondary-500'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z'
              clipRule='evenodd'
            />
          </svg>
          <a href={`mailto:${contactInfo.email}`}>
            <span className='ml-2 text-gray-400 hover:text-white'>
              {contactInfo.email}
            </span>
          </a>
        </div>
      </div>

      <Divider>&bull;</Divider>

      {/* The form */}
      <div className='px-4 max-w-3xl md:px-0 mx-auto'>
        <h2>Provide Your Info</h2>
        <p className='mt-0 mb-4'>We&apos;ll get back to you as soon as possible.</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

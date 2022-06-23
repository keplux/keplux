import Image from 'next/image';
import { useState } from 'react';
import { Divider, Seo } from '../src/components';

// Change contact info here
const contactInfo = {
  phone: '(517) 759-0356',
  email: 'cocostree2022@gmail.com',
};

const Contact = () => {
  // Store and update form data
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  // Input change handler
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Form submission handler
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    // Set initial submission state
    e.preventDefault();
    setIsSubmitting(true);

    // Submit the request
    const res = await fetch('/api/submitContactForm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }),
    });

    const response = await res.json();

    // If submission is successful, reset form state and data
    if (response.message === 'success') {
      setError(false);
      setData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      setError(true);
    }

    setIsSubmitting(false);
  };
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
            className='h-5 w-5 text-primary-500'
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
            className='h-5 w-5 text-primary-500'
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
        <p className='mt-0'>We&apos;ll get back to you as soon as possible.</p>
        <form
          onSubmit={handleSubmit}
          method='POST'
          className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
        >
          {/* First name */}
          <div>
            <label htmlFor='firstName' className='block text-white'>
              First name
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='firstName'
                value={data.firstName}
                id='firstName'
                autoComplete='given-name'
                className='py-3 px-4 block w-full shadow-sm focus:ring-secondary-500 focus:border-secondary-500 border border-black rounded-md'
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Last name */}
          <div>
            <label htmlFor='lastName' className='block text-white'>
              Last name
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='lastName'
                value={data.lastName}
                id='lastName'
                autoComplete='family-name'
                className='py-3 px-4 block w-full shadow-sm focus:ring-secondary-500 focus:border-secondary-500 border border-black rounded-md'
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className='sm:col-span-2'>
            <label htmlFor='email' className='block text-white'>
              Email
            </label>
            <div className='mt-1'>
              <input
                id='email'
                name='email'
                value={data.email}
                type='email'
                autoComplete='email'
                className='py-3 px-4 block w-full shadow-sm focus:ring-secondary-500 focus:border-secondary-500 border border-black rounded-md'
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Phone number */}
          <div className='sm:col-span-2'>
            <label htmlFor='phone' className='block text-white'>
              Phone number
            </label>
            <div className='mt-1'>
              <input
                id='phone'
                name='phone'
                value={data.phone}
                type='tel'
                autoComplete='phone'
                className='py-3 px-4 block w-full shadow-sm focus:ring-secondary-500 focus:border-secondary-500 border border-black rounded-md'
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message */}
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='block text-white'>
              Message
            </label>
            <div className='mt-1'>
              <textarea
                id='message'
                name='message'
                value={data.message}
                rows={4}
                className='py-3 px-4 block w-full shadow-sm focus:ring-secondary-500 focus:border-secondary-500 border border-black rounded-md resize-none'
                defaultValue={''}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit button */}
          <div className='sm:col-span-2'>
            <button
              type='submit'
              disabled={isSubmitting}
              className={`text-white cursor-pointer mt-8 flex justify-center w-full items-center px-8 py-2 text-lg transition ${
                isSubmitting
                  ? 'bg-gray-400'
                  : 'bg-primary-500 hover:bg-primary-400'
              }`}
            >
              {isSubmitting ? 'Sending' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

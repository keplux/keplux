import { ContactForm, Header, Seo } from '../src/components';
import { MdPhone } from '@react-icons/all-files/md/MdPhone';
import { MdEmail } from '@react-icons/all-files/md/MdEmail';

// Change contact info here
export const contactInfo = {
  phone: '(567) 340-0015',
  email: 'contact@keplux.com',
};

const Contact = () => {
  return (
    <div className='relative pb-16 md:pb-32'>
      <Seo
        title='Free web design quote in Toledo, OH | Keplux Development'
        description='Want the best web design at an affordable price? Our sites use modern technology to be much faster than other agencies. Call us today! (567) 340-0015'
        url='https://www.keplux.com/contact'
      />
      <Header
        subtitle='Contact'
        title='Give us a call, send an email, or fill out the form'
        description='We look forward to hearing from you!'
      />

      <main>
        <div className='mt-16 lg:mt-24 relative max-w-7xl mx-auto lg:grid lg:grid-cols-5'>
          <div className='bg-zinc-900 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
            <div className='max-w-lg mx-auto'>
              <h2 className='text-2xl font-extrabold tracking-tight text-zinc-100 sm:text-3xl'>
                Get in touch
              </h2>
              <p className='mt-3 text-lg leading-6 text-zinc-500'>
                If you&apos;re interested in a quote, please fill out the
                questionnaire linked below. Because every project is so
                different, it&apos;s difficult to make an accurate quote with
                this information.
              </p>
              <dl className='mt-8 text-base text-zinc-500'>
                <div>
                  <dt className='sr-only'>Postal address</dt>
                  <dd>
                    <p>Toledo, OH</p>
                  </dd>
                </div>
                <div className='mt-6'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd className='flex'>
                    <MdPhone
                      className='flex-shrink-0 h-6 w-6 text-zinc-400'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>{contactInfo.phone}</span>
                  </dd>
                </div>
                <div className='mt-3'>
                  <dt className='sr-only'>Email</dt>
                  <dd className='flex'>
                    <MdEmail
                      className='flex-shrink-0 h-6 w-6 text-zinc-400'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>{contactInfo.email}</span>
                  </dd>
                </div>
              </dl>
              <p className='mt-6 text-base text-zinc-500'>
                Want to get a quote faster?{' '}
                <a
                  href='https://forms.gle/TAToHhcw8ucqZzj59'
                  target='_blank'
                  rel='noreferrer'
                  className='inline-link'
                >
                  Fill it out here
                </a>
                .
              </p>
            </div>
          </div>
          <div className='py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
            <div className='max-w-lg mx-auto lg:max-w-none'>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

import { Field, FieldHookConfig, Form, Formik, useField } from 'formik';
import Image from 'next/image';
import { Divider, Seo } from '../src/components';
import * as Yup from 'yup';

// Change contact info here
const contactInfo = {
  phone: '(517) 759-0356',
  email: 'cocostree2022@gmail.com',
};

type InputFieldProps = FieldHookConfig<string> & {
  label: string;
};

const Input = (props: InputFieldProps) => {
  const [field, meta] = useField(props);
  return (
    <div className={props.className}>
      <label htmlFor={props.id || props.name} className='block text-white'>
        {props.label}
      </label>
      <div className='relative mt-1'>
        <Field
          {...field}
          {...props}
          className='py-3 px-4 block w-full shadow-sm caret-secondary-500 focus:ring-secondary-500 focus:border-secondary-500 border border-black rounded-md'
        />
        {meta.touched && meta.error ? (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-red-500'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden
            >
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        ) : null}
      </div>
      {meta.touched && meta.error ? (
        <p className='mt-1 text-sm font-normal !text-red-500'>{meta.error}</p>
      ) : null}
    </div>
  );
};

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

const ContactForm = () => {
  const initialValues: Values = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required'),
  });

  const validate = (errors, touched) => {
    Object.keys(errors).map((error) => {
      if (error) {
        return false;
      }
    });

    Object.keys(touched).map((touch) => {
      if (touch) {
        return false;
      }
    });

    return true;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        const res = await fetch('/api/submitContactForm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            message: values.message,
          }),
        });

        const data = await res.json();

        // If submission is successful, reset form state and data
        if (data.message === 'success') {
          actions.setSubmitting(false);
          actions.resetForm();
        } else {
          console.log('fail');
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className='grid grid-cols-2 gap-8'>
          <Input label='First name' name='firstName' type='text' />
          <Input label='Last name' name='lastName' type='text' />
          <Input
            className='col-span-2'
            label='Email'
            name='email'
            type='email'
          />
          <Input
            className='col-span-2'
            label='Phone number'
            name='phone'
            type='tel'
          />
          <Input
            className='col-span-2'
            label='Message'
            name='message'
            type='text'
          />
          {/* Submit button */}
          <div className='sm:col-span-2'>
            <button
              type='submit'
              // disabled={isSubmitting}
              className='text-white cursor-pointer mt-8 flex justify-center w-full items-center px-8 py-2 text-lg transition bg-primary-500 hover:bg-primary-400 disabled:bg-gray-400'
            >
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
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
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

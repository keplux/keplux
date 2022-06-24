import { FieldHookConfig, useField, Field, Formik, Form } from 'formik';
import { ClassAttributes, TextareaHTMLAttributes } from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import * as Yup from 'yup';

type InputFieldProps = FieldHookConfig<string> & {
  label: string;
};

// Standard input
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
          className='block w-full shadow-sm caret-secondary-500 focus:ring-secondary-500 focus:border-secondary-500 rounded-md'
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

// Textarea input
const TextareaInput = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLTextAreaElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  return (
    <textarea
      className={`py-3 px-4 block w-full shadow-sm focus:ring-secondary-500 focus:border-secondary-500 rounded-md ${props.className}`}
      {...props}
    />
  );
};

// Phone input
const PhoneInput = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<NumberFormat<unknown>> &
    Readonly<NumberFormatProps<unknown>>
) => {
  return <NumberFormat type='tel' format='(###) ###-####' {...props} />;
};

// The form component
export const ContactForm = () => {
  const initialValues: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message: string;
  } = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .max(32, 'Must be less than 32 characters')
      .required('Required'),
    lastName: Yup.string()
      .min(3, 'Must be at least 2 characters')
      .max(32, 'Must be less than 32 characters')
      .required('Required'),
    email: Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(254, 'Must be less than 254 characters')
      .email('Invalid email address')
      .required('Required'),
    phone: Yup.string().matches(
      /\(\d\d\d\)\s\d\d\d-\d\d\d\d/,
      'Required format: (###) ###-####'
    ),
    message: Yup.string().required('Required'),
  });

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
      <Form className='grid grid-cols-2 gap-8'>
        <Input label='First name' name='firstName' type='text' />
        <Input label='Last name' name='lastName' type='text' />
        <Input className='col-span-2' label='Email' name='email' type='email' />
        <Input
          className='col-span-2'
          label='Phone number'
          name='phone'
          as={PhoneInput}
        />

        <Input
          className='col-span-2 resize-none'
          label='Message'
          name='message'
          type='text'
          as={TextareaInput}
          rows={5}
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
    </Formik>
  );
};

export default ContactForm;

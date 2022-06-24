import {
  useState,
  ClassAttributes,
  Fragment,
  TextareaHTMLAttributes,
} from 'react';

import * as Yup from 'yup';
import { useField, Field, FieldHookConfig, Form, Formik } from 'formik';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

import {
  AtSymbolIcon,
  CheckIcon,
  ExclamationIcon,
  PhoneIcon,
} from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';

import { contactInfo } from '../../../pages/contact';

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

const Modal = ({
  modalOpen,
  setModalOpen,
  state,
}: {
  modalOpen: any;
  setModalOpen: any;
  state: boolean;
}) => {
  return (
    <Transition.Root show={modalOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setModalOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-zinc-800 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full flex items-end sm:items-center justify-center p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative bg-zinc-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6'>
                <div>
                  <div
                    className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${
                      state ? 'bg-green-600' : 'bg-red-600'
                    }`}
                  >
                    {state ? (
                      <CheckIcon
                        className='h-6 w-6 text-green-200'
                        aria-hidden='true'
                      />
                    ) : (
                      <ExclamationIcon
                        className='h-6 w-6 text-red-200'
                        aria-hidden='true'
                      />
                    )}
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg leading-6 font-normal text-white'
                    >
                      {state ? 'Message Sent' : 'Error'}
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        {state ? (
                          'We will get back to you as soon as possible.'
                        ) : (
                          <div>
                            <p>
                              Something went wrong on our end. We apologize for
                              the inconvenience.
                            </p>
                            <p className='mt-4 font-bold !text-white'>
                              You can reach us in the following ways:
                            </p>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                              <div className='mt-4'>
                                <PhoneIcon
                                  className='mx-auto text-secondary-500 w-6 h-6'
                                  aria-label='Phone'
                                />
                                <p className='mt-1'>{contactInfo.phone}</p>
                              </div>
                              <div className='mt-4'>
                                <AtSymbolIcon
                                  className='mx-auto text-secondary-500 w-6 h-6'
                                  aria-label='Email'
                                />
                                <p className='mt-1'>{contactInfo.email}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex !text-white justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-normal hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm'
                    onClick={() => setModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

// The form component
export const ContactForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);

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
          setSuccess(true);
        } else {
          setSuccess(false);
        }
        setModalOpen(true);
      }}
    >
      <Form className='grid grid-cols-2 gap-8'>
        <Input
          className='col-span-2 md:col-span-1'
          label='First name'
          name='firstName'
          type='text'
        />
        <Input
          className='col-span-2 md:col-span-1'
          label='Last name'
          name='lastName'
          type='text'
        />
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
        <div className='col-span-2'>
          <button
            type='submit'
            // disabled={isSubmitting}
            className='text-white cursor-pointer mt-8 flex justify-center w-full items-center px-8 py-2 text-lg transition bg-primary-500 hover:bg-primary-400 disabled:bg-gray-400'
          >
            Send
          </button>
        </div>
        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          state={success}
        />
      </Form>
    </Formik>
  );
};

export default ContactForm;

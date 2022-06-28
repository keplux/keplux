import { NextPage } from 'next';
import Image from 'next/image';
import { Header } from '../../src/components';
import { HiDocumentAdd } from '@react-icons/all-files/hi/HiDocumentAdd';
import { FaTools } from '@react-icons/all-files/fa/FaTools';
import { FaServer } from '@react-icons/all-files/fa/FaServer';
import { SiServerless } from '@react-icons/all-files/si/SiServerless';
import { FaImage } from '@react-icons/all-files/fa/FaImage';
import { ImCloudUpload } from '@react-icons/all-files/im/ImCloudUpload';
import { FaLock } from '@react-icons/all-files/fa/FaLock';
import { BsFillShieldLockFill } from '@react-icons/all-files/bs/BsFillShieldLockFill';
import Link from 'next/link';
import hostingImg from '../../public/images/hosting.jpeg';

const features = [
  {
    name: 'Edge Network Deployment',
    description: 'Users can connect faster and with lower latency.',
    icon: ImCloudUpload,
  },
  {
    name: 'SSL Certificate',
    description: 'When you host with us, you get a free SSL certificate.',
    icon: FaLock,
  },
  {
    name: 'Serverless Computing',
    description: 'Lower costs, greater scalability, more flexibility.',
    icon: SiServerless,
  },
  {
    name: 'DDoS Protection',
    description: 'Automatically detect and block malicious attacks.',
    icon: BsFillShieldLockFill,
  },
  {
    name: 'Image Optimization',
    description: 'Automatic image optimization powered by Next.js.',
    icon: FaImage,
  },
  {
    name: 'Automatic Backups',
    description: 'Automatic, hourly backups stored for one month.',
    icon: FaServer,
  },
];

const bundledServices = [
  {
    name: 'Content Management',
    href: '/services/content-management',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: HiDocumentAdd,
  },
  {
    name: 'Maintenance',
    href: '/services/maintenance',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: FaTools,
  },
];

const HostingPage: NextPage = () => {
  return (
    <div>
      <Header
        page='Hosting'
        title='Get your site online with our hosting options'
        description='Yet another area with endless options, we can ease your hosting woes so you can grow your business without added stress.'
      />
      <main>
        <article className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
            <div>
              <span
                aria-label='An image of a row of servers.'
                className='h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600'
              >
                <FaServer className='h-6 w-6 text-white' aria-hidden='true' />
              </span>
              <section className='mt-6'>
                <h2 className='text-3xl font-semibold tracking-tight text-zinc-100'>
                  Want to use your own hosting?
                </h2>
                <p className='mt-4'>
                  We&apos;ll work with you to determine handoff instructions. We
                  can also provide consultation for selecting a hosting provider
                  or deploy the website to your current hosting provider.
                </p>
                <div className='mt-6'>
                  <h3 className='text-zinc-100 text-xl font-semibold'>
                    Ready to get started?
                  </h3>
                  <Link href='/services/content-updates'>
                    <a className='mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'>
                      Get a quote
                    </a>
                  </Link>
                </div>
              </section>
            </div>
          </div>
          <div className='relative mt-12 lg:-ml-[512px] sm:mt-16 lg:mt-0 lg:col-start-1'>
            <div className='lg:absolute right-0 w-full max-w-5xl lg:h-full'>
              <div className='relative h-96 lg:h-full w-full rounded-xl overflow-hidden shadow-xl'>
                <Image
                  src={hostingImg}
                  alt='Inbox user interface'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='top right'
                />
              </div>
            </div>
          </div>
        </article>
        <article className='relative mt-24 pb-16 bg-[#111111] sm:bg-zinc-900'>
          <div className='absolute -inset-0 h-1/3 lg:h-1/2 bg-[#111111]' />
          <div className='relative pb-32 bg-[#111111] w-full'>
            <div className='max-w-5xl mx-auto text-center'>
              <h2 className='text-5xl font-semibold text-zinc-100'>
                Our hosting is packed with features
              </h2>
              <p className='mt-4 max-w-2xl mx-auto text-lg !text-zinc-500'>
                Our hosting service is designed to scale with your business. You
                don&apos;t have to worry about your site going down due to
                bandwidth issues or loading slower with more traffic.
              </p>
            </div>
          </div>
          <div className='-mt-24 relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {features.map((feature) => (
                <div key={feature.name} className='pt-6'>
                  <div className='flow-root rounded-lg bg-zinc-800 px-6 pb-8 shadow-lg'>
                    <div className='-mt-6'>
                      <div>
                        <span className='inline-flex items-center justify-center rounded-md bg-primary-500 p-3 shadow-lg'>
                          <feature.icon
                            className='h-6 w-6 text-white'
                            aria-hidden='true'
                          />
                        </span>
                      </div>
                      <h3 className='mt-8 text-lg font-medium tracking-tight text-zinc-100'>
                        {feature.name}
                      </h3>
                      <p className='mt-2'>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
        <section className='mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h3 className='mt-8 text-xl font-semibold !text-zinc-100'>
            Explore bundled services
          </h3>
          <div className='mt-12 grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
            {bundledServices.map((link) => (
              <div
                key={link.name}
                className='flex flex-col bg-zinc-900 rounded-2xl shadow-xl'
              >
                <div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
                  <div className='absolute top-0 p-5 inline-block bg-primary-600 rounded-xl shadow-lg transform -translate-y-1/2'>
                    <link.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  <h4 className='text-xl font-medium text-zinc-100'>
                    {link.name}
                  </h4>
                  <p className='mt-4 text-base text-gray-500'>
                    {link.description}
                  </p>
                </div>
                <div className='px-6 py-4 bg-zinc-800 rounded-bl-2xl rounded-br-2xl md:px-8'>
                  <a href={link.href} className='inline-link'>
                    Learn more<span aria-hidden='true'> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export default HostingPage;

import { NextPage } from 'next';
import Link from 'next/link';
import {
  ContactFooter,
  Header,
  Seo,
  Split,
  SplitContainer,
} from '../../src/components';
import maintenanceImg from '../../public/images/maintenance.jpeg';
import { FaServer } from '@react-icons/all-files/fa/FaServer';
import { BsGearFill } from '@react-icons/all-files/bs/BsGearFill';

const bundledServices = [
  {
    name: 'Hosting',
    href: '/services/hosting',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: FaServer,
  },
  {
    name: 'Content Management',
    href: '/services/content-management',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: BsGearFill,
  },
];

const MaintenancePage: NextPage = () => {
  return (
    <div>
      <Seo
        title='Web design and maintenance in Toledo | Keplux Development'
        description='When you design and host a site with us, we can also handle project maintenance. Offloading this work will be a weight off your shoulders. Call (567) 340-0015'
        url='https://www.keplux.com/services/maintenance'
      />
      <Header
        subtitle='Maintenance'
        title='Make sure your site is always updated to help keep your data safe'
        description='Technology advances fast, and updates are necessary to help mitigate online threats. Sometimes they are small, sometimes they are critical. We make sure your site is secure.'
      />
      <main>
        <SplitContainer>
          <Split
            imgSrc={maintenanceImg}
            imgAlt='An image of an old, worn-out robot, reflecting the need for maintenance.'
          >
            <Split.Header>
              Website maintenance can be a nightmare. We handle it for you.
            </Split.Header>
            <Split.Body>
              <p>
                No matter who you buy web development services from, they should
                know how to maintain your site. It&apos;s easy for us to throw
                in new packages or plugins to make a job easier, but these
                things require individual updates. Sometimes the update
                mitigates an online threat, other times it&apos;s a massive
                overhaul to the underlying code base that breaks your site.
              </p>
              <p className='mt-4'>
                You shouldn&apos;t have to worry about that, and you don&apos;t
                when you use Keplux Development. We strive to keep our bundle
                sizes small for{' '}
                <Link href='/services/development'>
                  <a className='inline-link'>performance</a>
                </Link>{' '}
                purposes, and the packages we use have regular maintenance.
              </p>
              <div className='mt-6'>
                <h3 className='text-zinc-100 text-xl font-semibold'>
                  Contact us and add maintenance to your package.
                </h3>
                <Link href='/contact'>
                  <a className='mt-4 text-white bg-primary-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium hover:bg-primary-500 transition'>
                    Get in touch
                  </a>
                </Link>
              </div>
            </Split.Body>
          </Split>
        </SplitContainer>
        <article className='pt-16 lg:pt-24'>
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
                  </div>
                  <div className='px-6 py-4 bg-zinc-800 rounded-bl-2xl rounded-br-2xl md:px-8'>
                    <Link href={link.href}>
                      <a href={link.href} className='inline-link'>
                        Learn more<span aria-hidden='true'> &rarr;</span>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>

      <ContactFooter />
    </div>
  );
};
export default MaintenancePage;

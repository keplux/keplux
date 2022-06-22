import { NextPage } from 'next';
import Image from 'next/image';
import { Button, Divider, Seo } from '../src/components';

import { GiChainsaw } from '@react-icons/all-files/gi/GiChainsaw';
import { GiFarmTractor } from '@react-icons/all-files/gi/GiFarmTractor';
import { GiTreeBranch } from '@react-icons/all-files/gi/GiTreeBranch';
import { GiHighGrass } from '@react-icons/all-files/gi/GiHighGrass';
import { GiLightningStorm } from '@react-icons/all-files/gi/GiLightningStorm';
import { GiTreeRoots } from '@react-icons/all-files/gi/GiTreeRoots';

const services = [
  {
    label: 'Tree Trimming and Removal',
    icon: <GiChainsaw className='text-yellow-600' size={56} />,
    description: "We'll trim your trees or remove them outright.",
  },
  {
    label: 'Land Clearing',
    icon: <GiFarmTractor className='text-red-600' size={56} />,
    description: 'Have a big project coming up or just want some land cleared?',
  },
  {
    label: 'Brush and Debris Removal',
    icon: <GiTreeBranch className='text-green-600' size={56} />,
    description:
      "Nice lawns aren't made on their own. Let us help you clean up!",
  },
  {
    label: 'Lawn Mowing',
    icon: <GiHighGrass className='text-green-500' size={56} />,
    description: "Big or small, CoCo's can do it all!",
  },
  {
    label: 'Storm Work',
    icon: <GiLightningStorm className='text-gray-600' size={56} />,
    description:
      "Ouch. Fallen branches and trees are a pain, but we're here to help.",
  },
  {
    label: 'Insurance Work',
    icon: <GiTreeRoots className='text-orange-900' size={56} />,
    description: 'We can also help with insurance related problems.',
  },
];

const images = [
  {
    src: '/images/mowing.jpg',
    alt: 'A picture of grass being cut',
  },
  {
    src: '/images/chainsaw.jpg',
    alt: 'A chainsaw cutting through a tree branch',
  },
  {
    src: '/images/car-damage.jpg',
    alt: 'A tree fallen on a car',
  },
  {
    src: '/images/land-clearing.jpg',
    alt: 'A picture of land clearing',
  },
];

const Home: NextPage = () => {
  return (
    <main>
      <Seo
        title='Need some trees cut or your lawn mowed? Call us today!'
        description="We provide tree and lawn services in and around Adrian, MI. Whether you need your lawn mowed, a tree removed from your garage, or anything in between, we've got you covered."
        url='https://www.cocostreeservice.com'
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
          <div className='relative max-w-xl -mt-16 mx-auto px-2 py-8 bg-base border border-black'>
            <div className='relative h-72'>
              <Image
                src='/images/cocos-tree-service-logo.png'
                alt="Coco's Tree Service logo"
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </header>

      <section className='mt-16 md:mt-32 px-4 xl:px-0 max-w-5xl mx-auto'>
        <h1 className='uppercase'>See You at the Top!</h1>
        <p className='mt-4'>
          CoCo&apos;s Tree &amp; Lawn Service is a small business based out of
          Adrian, MI. We aim to provide high quality tree and lawn services to
          Adrian and surrounding areas.
        </p>
        <Button className='mt-8' href='/contact'>
          Call Us Now{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className=' ml-4 h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </Button>
      </section>

      <section className='mt-16 md:mt-32'>
        <div className='relative w-screen h-80'>
          <Image
            src='/images/tree-cutting.jpg'
            alt='Worker cutting tree limbs'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </section>

      <section className='px-4 xl:px-0 mt-16 md:mt-32 max-w-6xl mx-auto'>
        <h2 className='text-center uppercase'>Services We Provide</h2>
        <Divider>&bull;</Divider>
        <div className='p-4 grid grid-cols-1 bg-zinc-900 gap-8 md:grid-cols-2'>
          {services.map((service) => {
            return (
              <div key={service.label} className='flex px-4 py-2'>
                {service.icon}
                <div className='ml-4'>
                  <h3 className='text-lg text-white uppercase'>
                    {service.label}
                  </h3>
                  <p className='mt-0 '>{service.description}</p>
                </div>
              </div>
            );
          })}
          <div className='absolute left-0 -z-10 w-screen'>
            <div className='relative w-screen h-32 rotate-180'>
              <Image
                src='/graphics/wave-divider.svg'
                alt='Wave divider'
                layout='fill'
              />
            </div>
            <div className='relative w-screen h-32'>
              <Image
                src='/graphics/wave-divider.svg'
                alt='Wave divider'
                layout='fill'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='mt-16 md:mt-32 px-4 xl:px-0 max-w-4xl mx-auto'>
        <h2 className='text-center uppercase'>Ready for a Quote?</h2>
        <Divider>&bull;</Divider>
        <p>
          Whether you need a simple service like lawn mowing or bush trimming,
          tree removal and/or stump removal, storm repair, or anything in
          between, we&apos;re here to help!
        </p>
        <p>
          We&apos;re ready when you are. Contact us today to request a quote and
          schedule service.
        </p>
        <div className='mt-16 flex justify-center'>
          <Button href='/contact' primary>
            Request a Quote Online{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className=' ml-4 h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </Button>
        </div>
      </section>

      <section className='mt-16'>
        <h2 className='text-center text-2xl text-secondary-500 uppercase'>
          Whatever you need done, we&apos;ve got your back
        </h2>
        <div className='mt-16 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'>
          {images.map((img, index) => {
            return (
              <div key={index} className='relative h-64'>
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default Home;

import { NextPage } from 'next';
import Image from 'next/image';
import { Button, Divider, Seo } from '../src/components';

import logo from '../public/logos/keplux-light-transparent.png';

const Home: NextPage = () => {
  return (
    <main>
      <Seo
        title='Need some trees cut or your lawn mowed? Call us today!'
        description="We provide tree and lawn services in and around Adrian, MI. Whether you need your lawn mowed, a tree removed from your garage, or anything in between, we've got you covered."
        url='https://www.cocostreeservice.com'
      />
      {/* <header>
        <div className='px-4 md:px-0'>
          <div className='relative max-w-xl -mt-16 mx-auto px-2 py-8 bg-base border border-black'>
            <div className='relative h-48'>
              <Image
                src={logo}
                alt="Coco's Tree Service logo"
                layout='fill'
                objectFit='contain'
                priority
              />
            </div>
          </div>
        </div>
      </header> */}
    </main>
  );
};
export default Home;

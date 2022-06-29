import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <span
      className='mb-6 h-12 w-12 rounded-md flex items-center justify-center bg-primary-600 text-white'
      aria-hidden='true'
    >
      {children}
    </span>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className='text-3xl font-semibold tracking-tight text-zinc-100'>
      {children}
    </h2>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div className='mt-4'>{children}</div>;
};

type SplitProps = {
  contentPosition?: 'left' | 'right';
  imgSrc: StaticImageData;
  imgAlt: string;
  children: any;
};

export const SplitContainer = ({ children }: { children: ReactNode }) => {
  return (
    <article className='relative grid grid-cols-1 gap-24 mt-16 lg:mt-24 overflow-hidden'>
      {children}
    </article>
  );
};

export const Split = ({
  contentPosition = 'left',
  imgSrc,
  imgAlt,
  children,
}: SplitProps) => {
  return (
    <section className='relative'>
      <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
        <div
          className={`px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 ${
            contentPosition === 'right' ? 'lg:col-start-2' : ''
          }`}
        >
          <div>{children}</div>
        </div>
        <div
          className={`${
            contentPosition === 'right'
              ? 'relative lg:-ml-[512px] lg:col-start-1'
              : ''
          }`}
        >
          <div
            className={`lg:absolute lg:flex lg:items-center w-full max-w-5xl lg:h-full ${
              contentPosition === 'right' ? 'right-0' : ''
            }`}
          >
            <div className='mt-8 lg:mt-0 relative h-full max-h-min w-full rounded-md overflow-hidden shadow-xl'>
              <Image
                src={imgSrc}
                alt={imgAlt}
                layout='responsive'
                objectFit='cover'
                objectPosition={
                  contentPosition === 'right' ? 'top right' : 'top left'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Split.Tag = Tag;
Split.Header = Header;
Split.Body = Body;

export default Split;

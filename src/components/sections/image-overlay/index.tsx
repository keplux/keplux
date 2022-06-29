import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

const Header = ({ children }: { children: ReactNode }) => {
  return <h2 className='text-5xl max-w-6xl mx-auto font-semibold text-zinc-900'>{children}</h2>;
};

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <div className='mt-4 text-lg !text-zinc-500'>
      {children}
    </div>
  );
};

type ImageOverlayContentProps = {
  imgSrc: StaticImageData;
  imgAlt: string;
  children: ReactNode;
};

export const ImageOverlayContent = ({
  imgSrc,
  imgAlt,
  children,
}: ImageOverlayContentProps) => {
  return (
    <article className='bg-white relative'>
      <div className='absolute -inset-0 h-1/3 lg:h-1/2 bg-[#111111]' />
      <div className='mx-4'>
        <div className='relative max-w-6xl mx-auto w-full z-10 shadow-xl rounded-b-3xl'>
          <Image
            src={imgSrc}
            alt={imgAlt}
            layout='responsive'
            objectFit='contain'
          />
        </div>
      </div>
      <section className='bg-white relative mx-auto -mt-8 pt-24 pb-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        {children}
      </section>
    </article>
  );
};

ImageOverlayContent.Header = Header;
ImageOverlayContent.Body = Body;

export default ImageOverlayContent;

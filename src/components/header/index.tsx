import { ReactNode } from 'react';

export const Header = ({
  subtitle,
  title,
  description,
}: {
  subtitle: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <hgroup className='relative max-w-7xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h2 className='text-base font-semibold text-primary-600 tracking-wide uppercase'>
          {subtitle}
        </h2>
        <h1 className='mt-1 text-4xl font-normal sm:text-5xl sm:tracking-tight lg:text-6xl'>
          {title}
        </h1>
        <p className='max-w-xl mt-5 mx-auto text-xl'>{description}</p>
      </div>
    </hgroup>
  );
};

export default Header;

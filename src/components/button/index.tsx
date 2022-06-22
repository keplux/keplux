import Link from 'next/link';

type ButtonProps = {
  className?: string;
  href: string;
  primary?: boolean;
  children: any[];
};

export const Button = ({
  className,
  href,
  primary = true,
  children,
}: ButtonProps) => {
  const primaryStyle =
    'bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600';
  return (
    <Link href={href} passHref>
      <button
        className={`${className} ${
          primary && primaryStyle
        } flex items-center text-lg px-6 py-2 transition`}
      >
        {children}
      </button>
    </Link>
  );
};
export default Button;

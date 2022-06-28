import Link from 'next/link';
import { forwardRef } from 'react';

export const HeadlessLink = forwardRef((props: any, ref: any) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

HeadlessLink.displayName = 'HeadlessLink';

export default HeadlessLink;

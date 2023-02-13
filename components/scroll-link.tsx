import React from 'react';
import { Link, LinkProps } from 'react-scroll';

import { APP_BAR_HEIGHT } from '../constants';

// Omit 'ref' because it generates TypeScript error
interface ScrollLinkProps extends Omit<LinkProps, 'ref'> {
  children: string;
}

const ScrollLink = ({ children, to, ...props }: ScrollLinkProps) => (
  <Link
    {...props}
    hashSpy
    spy
    offset={-APP_BAR_HEIGHT}
    smooth
    duration={300}
    to={to}
    href={`#${to}`}
  >
    {children}
  </Link>
);

export default ScrollLink;

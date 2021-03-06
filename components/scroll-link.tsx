import React, { FC } from 'react';
import { Link } from 'react-scroll';
import { LinkProps } from 'react-scroll/modules/components/Link';

import { APP_BAR_HEIGHT } from '../constants';

// Omit 'ref' because it generates TypeScript error
interface ScrollLinkProps extends Omit<LinkProps, 'ref'> {}

const ScrollLink: FC<ScrollLinkProps> = ({ children, to, ...props }) => (
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

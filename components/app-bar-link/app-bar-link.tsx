import { FC } from 'react';

import ScrollLink from '../scroll-link';
import classes from './app-bar-link.module.scss';

interface AppBarLinkProps {
  to: string;
}

const AppBarLink: FC<AppBarLinkProps> = ({ to, children }) => {
  return (
    <li className={classes.wrapper}>
      <ScrollLink to={to} activeClass={classes.link__active} className={classes.link}>
        {children}
      </ScrollLink>
    </li>
  );
};

export default AppBarLink;

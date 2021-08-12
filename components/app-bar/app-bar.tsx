import Link from 'next/link';
import React, { FC, ReactElement } from 'react';

import AppBarLink from '../app-bar-link';
import classes from './app-bar.module.scss';

interface AppBarProps {
  children?: ReactElement<typeof AppBarLink>[];
}

type AppBar = FC<AppBarProps> & {
  Link: typeof AppBarLink;
};

const AppBar: AppBar = ({ children }) => (
  <nav className={classes.app_bar}>
    <div className={classes.title}>
      <Link href="/" passHref>
        <a>
          Donovan
          <br />
          BENFOUZARI
        </a>
      </Link>
    </div>

    <ul className={classes.links}>{children}</ul>

    <div className={classes.right}>
      <button className={classes.button}>Contact Me</button>
    </div>
  </nav>
);

AppBar.Link = AppBarLink;

export default AppBar;

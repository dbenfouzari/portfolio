import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, ReactElement } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import AppBarLink from '../app-bar-link';
import classes from './app-bar.module.scss';
import AppBarMobile from './components/mobile';

interface AppBarProps {
  children?: ReactElement<typeof AppBarLink>[];
}

type AppBar = FC<AppBarProps> & {
  Link: typeof AppBarLink;
};

const AppBar: AppBar = ({ children }) => {
  const windowSize = useWindowSize();
  const { locale } = useRouter();

  const svgUrl = locale === 'fr' ? '/en.svg' : '/fr.svg';
  const linkLocale = locale === 'fr' ? 'en' : 'fr';

  return windowSize === 'xs' ? (
    <AppBarMobile>{children}</AppBarMobile>
  ) : (
    <nav className={classes.app_bar}>
      <div className={classes.title}>
        <Link href="/" passHref>
          Donovan<br />BENFOUZARI
        </Link>
      </div>

      <ul className={classes.links}>{children}</ul>

      <div className={classes.flag_wrapper}>
        <Link passHref href="/" locale={linkLocale}>

          <Image alt="Change language" src={svgUrl} width={40} height={40} objectFit="contain" />

        </Link>
      </div>
    </nav>
  );
};

AppBar.Link = AppBarLink;

export default AppBar;

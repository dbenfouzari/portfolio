import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation('common');
  const windowSize = useWindowSize();
  const { locale } = useRouter();

  return windowSize === 'xs' ? (
    <AppBarMobile>{children}</AppBarMobile>
  ) : (
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

      <Link href="/" locale={locale === 'en' ? 'fr' : 'en'}>
        <button>{t('change-locale')}</button>
      </Link>
    </nav>
  );
};

AppBar.Link = AppBarLink;

export default AppBar;

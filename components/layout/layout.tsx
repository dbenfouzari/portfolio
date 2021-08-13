import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';

import { APP_BAR_HEIGHT } from '../../constants';
import AppBar from '../app-bar';
import classes from './layout.module.scss';

interface LayoutTwoProps {}

const Layout: FC<LayoutTwoProps> = ({ children }) => {
  const { t } = useTranslation('common');

  return (
    <div className={classes.layout}>
      <style jsx>{`
        --app-bar-height: ${APP_BAR_HEIGHT}px;
      `}</style>

      <AppBar>
        <AppBar.Link to="welcome">{t('appbar-home')}</AppBar.Link>
        <AppBar.Link to="about">About</AppBar.Link>
        <AppBar.Link to="skills">Skills</AppBar.Link>
        <AppBar.Link to="experiences">Experiences</AppBar.Link>
      </AppBar>

      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Layout;

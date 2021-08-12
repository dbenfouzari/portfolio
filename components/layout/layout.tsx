import React from 'react';

import { APP_BAR_HEIGHT } from '../../constants';
import AppBar from '../app-bar';
import classes from './layout.module.scss';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <style jsx>{`
      --app-bar-height: ${APP_BAR_HEIGHT}px;
    `}</style>

    <div>
      <AppBar>
        <AppBar.Link to="welcome">Home</AppBar.Link>
        <AppBar.Link to="about">About</AppBar.Link>
        <AppBar.Link to="skills">Skills</AppBar.Link>
        <AppBar.Link to="experiences">Experiences</AppBar.Link>
      </AppBar>

      <div className={classes.content}>{children}</div>
    </div>
  </>
);

export default Layout;

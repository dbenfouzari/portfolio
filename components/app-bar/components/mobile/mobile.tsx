import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './mobile.module.scss';

interface MobileProps {}

const overlayClassNames = {
  enter: classes.overlay_transition__enter,
  enterActive: classes.overlay_transition__enter_active,
  exit: classes.overlay_transition__exit,
  exitActive: classes.overlay_transition__exit_active,
};

const drawerClassNames = {
  enter: classes.drawer_transition__enter,
  enterActive: classes.drawer_transition__enter_active,
  exit: classes.drawer_transition__exit,
  exitActive: classes.drawer_transition__exit_active,
};

const AppBarMobile: FC<MobileProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpenPress = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  return (
    <>
      <CSSTransition in={isOpen} timeout={300} classNames={overlayClassNames} unmountOnExit>
        <div className={classes.overlay} onClick={handleDrawerOpenPress} />
      </CSSTransition>

      <CSSTransition in={isOpen} timeout={300} classNames={drawerClassNames} unmountOnExit>
        <nav className={classes.drawer}>
          <div className={classes.nav_title}>
            <span>Navigation</span>
          </div>

          <ul className={classes.links}>{children}</ul>
        </nav>
      </CSSTransition>

      <div className={classes.mobile}>
        <div className={classes.title}>
          <Link href="/" passHref>
            <a>
              Donovan
              <br />
              BENFOUZARI
            </a>
          </Link>
        </div>

        <div className={classes.drawer_button} onClick={handleDrawerOpenPress}>
          <div className={classes.opener}>
            <Image src="/drawer.svg" width={30} height={30} className={classes.drawer_icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBarMobile;

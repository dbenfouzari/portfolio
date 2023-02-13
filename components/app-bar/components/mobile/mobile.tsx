import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren, useCallback, useState } from 'react';
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

const AppBarMobile = ({ children }: PropsWithChildren<MobileProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpenPress = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  const { locale } = useRouter();

  const svgUrl = locale === 'fr' ? '/en.svg' : '/fr.svg';
  const linkLocale = locale === 'fr' ? 'en' : 'fr';

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
            Donovan
            <br />
            BENFOUZARI
          </Link>
        </div>

        <div className={classes.flag_wrapper}>
          <Link passHref href="/" locale={linkLocale} legacyBehavior>
            <Image alt="Change language" src={svgUrl} width={40} height={40} />
          </Link>
        </div>

        <div className={classes.drawer_button} onClick={handleDrawerOpenPress}>
          <div className={classes.opener}>
            <Image
              alt="Open menu"
              src="/drawer.svg"
              width={30}
              height={30}
              className={classes.drawer_icon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBarMobile;

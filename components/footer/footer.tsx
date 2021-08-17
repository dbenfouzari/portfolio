import { FC } from 'react';

import classes from './footer.module.scss';
import GithubLogo from './github-logo';
import LinkedinLogo from './linkedin-logo';
import MailLogo from './mail-logo';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={classes.footer}>
    <MailLogo width={28} height={28} className={[classes.logo, classes.logo__mail].join(' ')} />
    <GithubLogo width={28} height={28} className={classes.logo} />
    <LinkedinLogo width={28} height={28} className={classes.logo} />
  </div>
);

export default Footer;

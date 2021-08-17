import { FC } from 'react';

import classes from './footer.module.scss';
import GithubLogo from './github-logo';
import LinkedinLogo from './linkedin-logo';
import MailLogo from './mail-logo';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={classes.footer}>
    <a title="Mail" href="mailto:d.benfouzari@gmail.com" className={classes.logo_wrapper}>
      <MailLogo width={28} height={28} className={[classes.logo, classes.logo__mail].join(' ')} />
    </a>
    <a
      title="Github"
      target="_blank"
      href="https://github.com/dbenfouzari"
      rel="noreferrer"
      className={classes.logo_wrapper}
    >
      <GithubLogo width={28} height={28} className={classes.logo} />
    </a>
    <a
      title="LinkedIn"
      target="_blank"
      href="https://linkedin.com/in/dbenfouzari"
      rel="noreferrer"
      className={classes.logo_wrapper}
    >
      <LinkedinLogo width={28} height={28} className={classes.logo} />
    </a>
  </div>
);

export default Footer;

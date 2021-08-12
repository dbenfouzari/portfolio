import classNames from 'classnames';
import { FC, HTMLProps } from 'react';

import classes from './section.module.scss';

interface SectionProps extends HTMLProps<HTMLDivElement> {}

const Section: FC<SectionProps> = ({ children, className, ...props }) => (
  <div className={classNames(classes.section, className)} {...props}>
    {children}
  </div>
);

export default Section;

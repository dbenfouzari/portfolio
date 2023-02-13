import classNames from 'classnames';
import { HTMLProps } from 'react';

import classes from './section.module.scss';

interface SectionProps extends HTMLProps<HTMLDivElement> {}

const Section = ({ children, className, ...props }: SectionProps) => (
  <div className={classNames(classes.section, className)} {...props}>
    {children}
  </div>
);

export default Section;

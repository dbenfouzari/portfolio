import { forwardRef } from 'react';

import classes from './welcome.module.scss';

interface HeadingProps {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
  <div className={classes.typings_wrapper}>
    <h1>
      Hi! I&apos;m Donovan Benfouzari -
      <span id="keep">React/React-Native/TypeScript developer</span>
      <span ref={ref} />
    </h1>
  </div>
));

Heading.displayName = 'Heading';

export default Heading;

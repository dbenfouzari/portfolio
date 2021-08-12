import { FC } from 'react';

import Heading from './heading';
import useAnimatedImage from './useAnimatedImage';
import useTyping from './useTyping';
import classes from './welcome.module.scss';

interface WelcomeProps {}

const WelcomeSection: FC<WelcomeProps> = () => {
  const [typingRef, imageUrl] = useTyping<HTMLHeadingElement>();
  const ImageElement = useAnimatedImage(imageUrl);

  return (
    <div className={classes.welcome}>
      <div className={classes.left}>
        <div className="div">
          <Heading ref={typingRef} />

          <h3 role="doc-subtitle">
            Web <span>Developer</span> and Mobile Developer working in development field for 10
            years so far, specialized in React/React-Native.
          </h3>

          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a target="_blank" href="mailto:d.benfouzari@gmail.com" rel="noreferrer">
                  d.benfouzari@gmail.com
                </a>
              </dd>
            </div>

            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a target="_blank" href="https://linkedin.com/in/dbenfouzari" rel="noreferrer">
                  linkedin.com/in/dbenfouzari
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className={classes.right} id="image-logo-place">
        {ImageElement}
      </div>
    </div>
  );
};

export default WelcomeSection;

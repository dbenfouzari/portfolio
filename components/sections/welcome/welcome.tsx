import { useTranslation } from 'next-i18next';

import Heading from './heading';
import useAnimatedImage from './useAnimatedImage';
import useTyping from './useTyping';
import classes from './welcome.module.scss';

const WelcomeSection = () => {
  const [typingRef, imageUrl, color] = useTyping<HTMLHeadingElement>();
  const ImageElement = useAnimatedImage(imageUrl);
  const { t } = useTranslation('sections');

  return (
    <div className={classes.welcome}>
      <div className={classes.left}>
        <div className="div">
          <Heading ref={typingRef} color={color} />

          <h3 role="doc-subtitle" dangerouslySetInnerHTML={{ __html: t('welcome.presentation') }} />

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

            <div>
              <dt>{t('welcome.location')}</dt>
              <dd>Lille, Remote</dd>
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

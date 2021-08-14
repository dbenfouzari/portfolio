import Image from 'next/image';
import { Trans, useTranslation } from 'next-i18next';
import React from 'react';

import classes from './about.module.scss';

const AboutSection = () => {
  const { t } = useTranslation('sections');

  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <Image
          alt="Author"
          src="/me-dc.jpeg"
          width={500}
          height={500}
          layout="responsive"
          className={classes.logo}
          objectFit="cover"
          objectPosition="left top"
        />
      </div>

      <div className={classes.right}>
        <code className={classes.section_name}>{t('about.name')}</code>

        <h3 className={classes.title}>
          <Trans i18nKey="about.title" ns="sections" />
        </h3>

        <div className={classes.description}>
          <p>
            <Trans
              i18nKey="about.self-taught"
              ns="sections"
              components={{ 1: <span className={classes.emoji} /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey="about.course"
              ns="sections"
              components={{ 1: <span className={classes.emoji} /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey="about.love"
              ns="sections"
              components={{ 1: <span className={classes.emoji} /> }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

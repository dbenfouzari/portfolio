import Image from 'next/image';
import { Trans, useTranslation } from 'next-i18next';
import { FC } from 'react';

import ProgressBar from '../../progress-bar';
import Quote from '../../quote';
import classes from './skills.module.scss';

interface SkillsProps {}

interface AboutItemProps {
  icon: string | JSX.Element;
  text: string;
}

const AboutItem: FC<AboutItemProps> = ({ icon, text }) => (
  <li>
    {icon} {text}
  </li>
);

const SkillsSection: FC<SkillsProps> = () => {
  const { t } = useTranslation('sections');

  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <code className={classes.section_name}>{t('skills.name')}</code>

        <h3 className={classes.title}>
          <Trans i18nKey="skills.title" ns="sections" />
        </h3>

        <Quote
          author="Robert C. Martin"
          cite={{
            content: 'Clean Code: A Handbook of Agile Software Craftsmanship',
            link: 'https://www.goodreads.com/quotes/835238-indeed-the-ratio-of-time-spent-reading-versus-writing-is',
          }}
        >
          Master programmers think of systems as stories to be told rather than programs to be
          written.
        </Quote>

        <div className={classes.description}>{t('skills.description')}</div>

        <div className={classes.description}>
          {t('skills.list.title')}
          <ul>
            <AboutItem icon="🧠" text={t('skills.list.brain')} />
            <AboutItem icon="💪" text={t('skills.list.strong')} />
            <AboutItem icon="🚀" text={t('skills.list.rocket')} />
            <AboutItem icon="🦍" text={t('skills.list.gorilla')} />

            <ul>
              <AboutItem
                icon={
                  <Image alt="TypeScript" src="/assets/typescript.svg" width={18} height={18} />
                }
                text={t('skills.list.tools.typescript')}
              />
              <AboutItem
                icon={<Image alt="StoryBook" src="/assets/storybook.svg" width={18} height={18} />}
                text={t('skills.list.tools.storybook')}
              />
              <AboutItem
                icon={<Image alt="Jest" src="/assets/jest.svg" width={18} height={18} />}
                text={t('skills.list.tools.jest')}
              />
            </ul>
          </ul>
        </div>

        <ProgressBar label="React.js" percentage={90} />
        <ProgressBar label="TypeScript" percentage={90} />
        <ProgressBar label="React-Native" percentage={80} />
        <ProgressBar label="Flutter" percentage={20} />
      </div>

      <div className={classes.right}>
        <div className={classes.skills}>
          <div className={classes.skill_rectangle}>
            <Image
              alt="React skill"
              src="/assets/react.svg"
              width={60}
              height={60}
              className={classes.skill_logo}
            />

            <span>React.js</span>
          </div>

          <div className={classes.skill_rectangle}>
            <Image
              alt="TypeScript skill"
              src="/assets/typescript.svg"
              width={60}
              height={60}
              className={classes.skill_logo}
            />

            <span>TypeScript</span>
          </div>

          <div className={classes.skill_rectangle}>
            <Image
              alt="Jest skill"
              src="/assets/jest.svg"
              width={60}
              height={60}
              className={classes.skill_logo}
            />

            <span>Jest</span>
          </div>

          <div className={classes.skill_rectangle}>
            <Image
              alt="Testing-library skill"
              src="/assets/testing-library.png"
              width={60}
              height={60}
              className={classes.skill_logo}
            />

            <span>Testing Library</span>
          </div>

          <div className={classes.skill_rectangle}>
            <Image
              alt="Storybook skill"
              src="/assets/storybook.svg"
              width={60}
              height={60}
              className={classes.skill_logo}
            />

            <span>Storybook</span>
          </div>

          <div className={classes.skill_rectangle}>
            <Image
              alt="React-Native skill"
              src="/assets/react-native.png"
              objectFit="contain"
              width={60}
              height={60}
              className={classes.skill_logo}
            />

            <span>React-Native</span>
          </div>

          <div className={classes.skill_rectangle}>
            <Image
              alt="Flutter skill"
              src="/assets/flutter.svg"
              width={60}
              height={60}
              className={classes.skill_logo}
            />

            <span>Flutter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

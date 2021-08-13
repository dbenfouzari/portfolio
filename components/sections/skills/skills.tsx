import Image from 'next/image';
import React from 'react';

import ProgressBar from '../../progress-bar';
import classes from './skills.module.scss';

interface SkillsProps {}

const SkillsSection: React.FC<SkillsProps> = () => (
  <div className={classes.wrapper}>
    <div className={classes.left}>
      <code className={classes.section_name}>skills</code>

      <h3 className={classes.title}>
        What My Development
        <br />
        Skills Include
      </h3>

      <div className={classes.description}>
        These are the words I live by in everything I do. Every story I tell, every app I build, and
        every line of code I write must not only look beautiful.
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
            width={100}
            height={100}
            className={classes.skill_logo}
          />

          <span>React.js</span>
        </div>

        <div className={classes.skill_rectangle}>
          <Image
            alt="TypeScript skill"
            src="/assets/typescript.svg"
            width={100}
            height={100}
            className={classes.skill_logo}
          />

          <span>TypeScript</span>
        </div>

        <div className={classes.skill_rectangle}>
          <Image
            alt="React-Native skill"
            src="/assets/react-native.png"
            objectFit="contain"
            width={100}
            height={100}
            className={classes.skill_logo}
          />

          <span>React-Native</span>
        </div>

        <div className={classes.skill_rectangle}>
          <Image
            alt="Flutter skill"
            src="/assets/flutter.svg"
            width={100}
            height={100}
            className={classes.skill_logo}
          />

          <span>Flutter</span>
        </div>
      </div>
    </div>
  </div>
);

export default SkillsSection;

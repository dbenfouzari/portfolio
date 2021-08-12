import React from 'react';

import Experience from './components/experience';
import classes from './experiences.module.scss';

interface ExperiencesProps {}

const ExperiencesSection: React.FC<ExperiencesProps> = () => (
  <div className={classes.wrapper}>
    <div className={classes.inner}>
      <code className={classes.section_name}>experiences</code>

      <h3 className={classes.title}>
        This is where
        <br />I worked !
      </h3>

      <div className={classes.experiences}>
        <Experience
          role="React.js / Next.js Developer"
          company="Hozana.org"
          dateStart="2021-5"
          picture="/experiences/hozana.jpeg"
          url="https://hozana.org/"
        />

        <Experience
          role="React.js / Ruby on Rails Developer"
          company="Edulib"
          dateStart="2021-3"
          dateEnd="2021-5"
          picture="/experiences/edulib.png"
          url="https://www.edulib.fr/"
        />

        <Experience
          role="React.js / TypeScript / React-Native Developer"
          company="Dernier Cri"
          dateStart="2019-8"
          dateEnd="2021-3"
          picture="/experiences/dernier-cri.svg"
          url="https://derniercri.io/"
        />

        <Experience
          role="React.js / TypeScript Developer"
          company="Stadline"
          dateStart="2016-9"
          dateEnd="2019-7"
          picture="/experiences/stadline.png"
          url="https://www.stadline.com/"
        />

        <Experience
          role="Vue.js Developer"
          company="Seniormedia"
          dateStart="2015-1"
          dateEnd="2015-5"
          picture="/experiences/senior-media.jpeg"
          url="https://seniormedia.fr/"
        />

        <Experience
          role="Ruby on Rails / Angular Developer"
          company="Trip & Mates"
          dateStart="2016-8"
          dateEnd="2016-9"
          picture="/experiences/trip-n-mates.jpeg"
        />

        <Experience
          role="Ruby on Rails Developer"
          company="JaiPasEnvie.com"
          dateStart="2014-7"
          dateEnd="2015-01"
          picture="/experiences/jaipasenvie.jpeg"
        />

        <Experience
          role="Ruby on Rails Developer"
          company="Clic2Buy"
          dateStart="2013-7"
          dateEnd="2013-12"
          picture="/experiences/clic2buy.png"
          url="https://www.click2buy.com/fr/"
        />

        <Experience
          role="Ruby on Rails Developer"
          company="RankingAlive"
          dateStart="2012-11"
          dateEnd="2013-2"
          picture="/experiences/ranking-alive.png"
          url="https://www.la-revanche-des-sites.fr/"
        />

        <Experience
          role="Ruby on Rails Developer"
          company="TocLoc"
          dateStart="2011-9"
          dateEnd="2013-9"
          picture="/experiences/tocloc.jpeg"
        />
      </div>
    </div>
  </div>
);

export default ExperiencesSection;

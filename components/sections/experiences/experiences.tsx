import { Trans, useTranslation } from 'next-i18next';
import React from 'react';

import Experience from './components/experience';
import classes from './experiences.module.scss';

interface ExperiencesProps {}

const ExperiencesSection: React.FC<ExperiencesProps> = () => {
  const { t } = useTranslation('sections');

  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <code className={classes.section_name}>{t('experiences.name')}</code>

        <h3 className={classes.title}>
          <Trans i18nKey="experiences.title" ns="sections" />
        </h3>

        <div className={classes.experiences}>
          <Experience
            role="React.js Developer"
            company="LumApps"
            dateStart="2021-08"
            picture="/experiences/lumapps.svg"
            url="https://www.lumapps.com/"
            radius={false}
          />

          <Experience
            role="React.js / Next.js Developer"
            company="Hozana.org"
            dateStart="2021-05"
            dateEnd="2021-08"
            picture="/experiences/hozana.jpeg"
            url="https://hozana.org/"
          />

          <Experience
            role="React.js / Ruby on Rails Developer"
            company="Edulib"
            dateStart="2021-03"
            dateEnd="2021-05"
            picture="/experiences/edulib.png"
            url="https://www.edulib.fr/"
          />

          <Experience
            role="React.js / TypeScript / React-Native Developer"
            company="Dernier Cri"
            dateStart="2019-08"
            dateEnd="2021-03"
            picture="/experiences/dernier-cri.svg"
            url="https://derniercri.io/"
          />

          <Experience
            role="React.js / TypeScript Developer"
            company="Stadline"
            dateStart="2016-09"
            dateEnd="2019-07"
            picture="/experiences/stadline.png"
            url="https://www.stadline.com/"
          />

          <Experience
            role="Vue.js Developer"
            company="Seniormedia"
            dateStart="2015-01"
            dateEnd="2015-05"
            picture="/experiences/senior-media.jpeg"
            url="https://seniormedia.fr/"
          />

          <Experience
            role="Ruby on Rails / Angular Developer"
            company="Trip & Mates"
            dateStart="2016-08"
            dateEnd="2016-09"
            picture="/experiences/trip-n-mates.jpeg"
          />

          <Experience
            role="Ruby on Rails Developer"
            company="JaiPasEnvie.com"
            dateStart="2014-07"
            dateEnd="2015-01"
            picture="/experiences/jaipasenvie.jpeg"
          />

          <Experience
            role="Ruby on Rails Developer"
            company="Clic2Buy"
            dateStart="2013-07"
            dateEnd="2013-12"
            picture="/experiences/clic2buy.png"
            url="https://www.click2buy.com/fr/"
          />

          <Experience
            role="Ruby on Rails Developer"
            company="RankingAlive"
            dateStart="2012-11"
            dateEnd="2013-02"
            picture="/experiences/ranking-alive.png"
            url="https://www.la-revanche-des-sites.fr/"
          />

          <Experience
            role="Ruby on Rails Developer"
            company="TocLoc"
            dateStart="2011-09"
            dateEnd="2013-09"
            picture="/experiences/tocloc.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperiencesSection;

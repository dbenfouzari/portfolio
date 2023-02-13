import classNames from 'classnames';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { MONTHS } from '../../../../months';
import classes from './experience.module.scss';

type SupportedLocale = 'en' | 'fr';

interface Experience {
  dateStart: Date | string;
  dateEnd?: Date | string;
  role: string;
  company: string;
  picture?: string;
  url?: string;
  radius?: boolean;
}

const capitalize = (word?: string) => {
  return word ? word.replace(/^(\w)/, (w) => w.toUpperCase()) : '';
};

const formatDate = (date: Date | string, locale: SupportedLocale) => {
  if (typeof date === 'string') date = new Date(Date.parse(date));
  const year = date.getFullYear();
  const month = date.getMonth();

  return `${capitalize(MONTHS[locale][month])} '${year.toString().substr(2)}`;
};

const getNow = (locale: SupportedLocale) => (locale === 'fr' ? "aujourd'hui" : 'present');

const formatDateRange = (locale: SupportedLocale, from: Date | string, to?: Date | string) => {
  if (!to) return `${formatDate(from, locale)} - ${getNow(locale)}`;
  return `${formatDate(from, locale)} - ${formatDate(to, locale)}`;
};

const Wrapper = ({ url, children }: { url?: string; children: JSX.Element }) => {
  if (!url) return children;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

const Experience: FC<Experience> = ({
  company,
  role,
  dateStart,
  dateEnd,
  picture,
  url,
  radius = false,
}) => {
  const { locale = 'en' } = useRouter();

  return (
    <Wrapper url={url}>
      <div className={classNames(classes.wrapper, { [classes.wrapper__clickable]: url })}>
        <div className={classes.left}>
          <h3 className={classes.role_line}>
            {role} @ <span className={classes.company}>{company}</span>
          </h3>
          <span className={classes.date}>
            {formatDateRange(locale as SupportedLocale, dateStart, dateEnd)}
          </span>
        </div>

        <div className={classes.right}>
          {picture && (
            <div className="picture">
              <Image
                alt="Company Picture"
                src={picture}
                width={80}
                height={80}
                className={radius ? classes.picture : undefined}
              />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Experience;

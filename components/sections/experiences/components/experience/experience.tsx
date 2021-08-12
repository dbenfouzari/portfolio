import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import classes from './experience.module.scss';

interface Experience {
  dateStart: Date | string;
  dateEnd?: Date | string;
  role: string;
  company: string;
  picture?: string;
  url?: string;
}

const formatDate = (date: Date | string) => {
  if (typeof date === 'string') date = new Date(Date.parse(date));
  const year = date.getFullYear().toString().padStart(4, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');

  return `${year}-${month}`;
};

const formatDateRange = (from: Date | string, to?: Date | string) => {
  if (!to) return `${formatDate(from)} - now`;
  return `${formatDate(from)} - ${formatDate(to)}`;
};

const Wrapper = ({ url, children }: { url?: string; children: JSX.Element }) => {
  if (!url) return children;
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

const Experience: FC<Experience> = ({ company, role, dateStart, dateEnd, picture, url }) => {
  return (
    <Wrapper url={url}>
      <div className={classNames(classes.wrapper, { [classes.wrapper__clickable]: url })}>
        <div className={classes.left}>
          <h3 className={classes.role_line}>
            {role} @ <span className={classes.company}>{company}</span>
          </h3>
          <span className={classes.date}>{formatDateRange(dateStart, dateEnd)}</span>
        </div>

        <div className={classes.right}>
          {picture && (
            <div className="picture">
              <Image
                alt="Company Picture"
                src={picture}
                width={80}
                height={80}
                className={classes.picture}
              />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Experience;

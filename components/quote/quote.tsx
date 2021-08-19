import { FC } from 'react';

import classes from './quote.module.scss';

interface QuoteProps {
  author: string;
  cite: {
    link: string;
    content: string;
  };
  children: string;
}

const Quote: FC<QuoteProps> = ({ cite, author, children }) => (
  <figure className={classes.quote}>
    <blockquote>
      <q cite={cite.link}>{children}</q>
    </blockquote>
    <figcaption>
      <cite>
        <a href={cite.link}>{cite.content}</a>
      </cite>{' '}
      by {author}.
    </figcaption>
  </figure>
);

export default Quote;

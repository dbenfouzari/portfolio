import classes from './quote.module.scss';

interface QuoteProps {
  author: string;
  cite: {
    link: string;
    content: string;
  };
  children: string;
}

const Quote = ({ cite, author, children }: QuoteProps) => (
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

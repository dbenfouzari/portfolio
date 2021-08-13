import { useTranslation } from 'next-i18next';
import { forwardRef } from 'react';

interface HeadingProps {
  color: string;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ color }, ref) => {
  const { t } = useTranslation('sections');

  return (
    <div>
      <style jsx>{`
        --text-color: ${color};
      `}</style>
      <h1>
        {t('welcome.heading')}
        <span id="keep">React / React-Native / TypeScript developer</span>
        <span ref={ref} />
      </h1>
    </div>
  );
});

Heading.displayName = 'Heading';

export default Heading;

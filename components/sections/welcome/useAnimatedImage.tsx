import Image from 'next/image';

import classes from './welcome.module.scss';

const useAnimatedImage = (imageUrl: string): JSX.Element => (
  <Image
    key={imageUrl}
    alt="Technology logo"
    src={imageUrl}
    layout="responsive"
    width={500}
    height={500}
    className={classes.logo}
  />
);

export default useAnimatedImage;

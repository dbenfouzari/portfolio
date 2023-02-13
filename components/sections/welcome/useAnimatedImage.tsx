import Image from 'next/image';
import { CSSProperties } from 'react';

import classes from './welcome.module.scss';

const useAnimatedImage = (imageUrl: string): JSX.Element => (
  <Image
    key={imageUrl}
    alt="Technology logo"
    src={imageUrl}
    width={500}
    height={500}
    className={classes.logo}
    style={style}
  />
);

const style: CSSProperties = {
  objectFit: 'contain',
  height: '100%',
  width: '100%',
};

export default useAnimatedImage;

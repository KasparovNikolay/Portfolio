import React, {
  FC,
  ImgHTMLAttributes,
  memo,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

import cls from 'classnames';

import { useLazyLoad } from '../../../utils/useLazyLoad';

import styles from './image.module.scss';

type ImagePropsType = {
  fallback?: ReactNode;
} & ImgHTMLAttributes<HTMLImageElement>;

const Image: FC<ImagePropsType> = ({
  src,
  alt,
  onLoad,
  fallback,
  className,
  ...props
}) => {
  const [show, element] = useLazyLoad({ rootMargin: '300px' });
  const [showImage, setShowImage] = useState(true);
  const handleError = (): void => setShowImage(false);
  if (!showImage || !src)
    return (fallback as ReactElement<never, never>) || null;
  return (
    <picture
      ref={element}
      className={cls(styles.img, className)}
      onError={handleError}
    >
      {show && (
        <img src={src} {...props} alt={alt || src || ''} onLoad={onLoad} />
      )}
    </picture>
  );
};

export default memo(Image);

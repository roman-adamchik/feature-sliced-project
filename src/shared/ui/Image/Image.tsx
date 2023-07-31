import {
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const Image = memo((props: ImageProps) => {
  const {
    className = '',
    src = '',
    alt = 'image',
    fallback,
    errorFallback,
    ...otherProps
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useLayoutEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsError(true);
      setIsLoading(false);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (isError && errorFallback) {
    return errorFallback;
  }

  return <img src={src} alt={alt} className={className} {...otherProps} />;
});

Image.displayName = 'Image';

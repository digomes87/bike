import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center`}
        style={{ width: width || '100%', height: height || 'auto' }}
      >
        <span className="text-gray-500 text-sm">Imagem não encontrada</span>
      </div>
    );
  }

  const imageProps: any = {
    src,
    alt,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    onLoad: handleLoad,
    onError: handleError,
    quality,
    priority,
    placeholder,
  };

  if (blurDataURL) {
    imageProps.blurDataURL = blurDataURL;
  }

  if (fill) {
    imageProps.fill = true;
    if (sizes) {
      imageProps.sizes = sizes;
    }
  } else {
    if (width) imageProps.width = width;
    if (height) imageProps.height = height;
    if (sizes) imageProps.sizes = sizes;
  }

  return (
    <div className={fill ? 'relative' : ''}>
      {isLoading && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse ${fill ? '' : 'rounded'}`}
          style={!fill ? { width, height } : {}}
        />
      )}
      <Image {...imageProps} />
    </div>
  );
};

export default OptimizedImage;
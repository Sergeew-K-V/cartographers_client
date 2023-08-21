'use client';

import Image from 'next/image';
import { MouseEvent, useState } from 'react';

interface ImageCustomProps {
  src: string;
  alt: string;
  width?: number;
  onClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
  height?: number;
  scalable?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLImageElement> | undefined;
  className?: string;
}

const ImageCustom = ({
  alt,
  src,
  className,
  height,
  width,
  onClick,
  scalable,
  onMouseEnter,
}: ImageCustomProps) => {
  const [isScaled, setIsScaled] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLImageElement>) => {
    if (scalable) {
      setIsScaled(true);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <>
      <Image
        src={src}
        alt={alt}
        height={height || 100}
        width={width || 100}
        onClick={handleClick}
        className={className}
        priority={true}
        onMouseEnter={onMouseEnter}
      />
      {isScaled && (
        <Image
          src={src}
          alt={alt}
          height={600}
          width={600}
          onClick={() => scalable && setIsScaled(false)}
          onMouseLeave={() => scalable && setIsScaled(false)}
          className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] max-w-none cursor-zoom-out"
        />
      )}
    </>
  );
};

export default ImageCustom;

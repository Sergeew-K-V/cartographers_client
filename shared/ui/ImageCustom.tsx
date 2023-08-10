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
  className?: string;
}

function ImageCustom({
  alt,
  src,
  className,
  height,
  width,
  onClick,
  scalable,
}: ImageCustomProps) {
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
      />
      {isScaled && (
        <Image
          src={src}
          alt={alt}
          height={400}
          width={400}
          onClick={() => scalable && setIsScaled(false)}
          onMouseLeave={() => scalable && setIsScaled(false)}
          className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[480px] max-w-none cursor-zoom-out"
        />
      )}
    </>
  );
}

export default ImageCustom;

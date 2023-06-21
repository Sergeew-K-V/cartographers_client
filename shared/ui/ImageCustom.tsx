import Image from 'next/image';

interface ImageCustomProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

function ImageCustom({ alt, src, className, height, width }: ImageCustomProps) {
  return (
    <Image
      src={src}
      alt={alt}
      height={height || 100}
      width={width || 100}
      className={className}
    />
  );
}

export default ImageCustom;

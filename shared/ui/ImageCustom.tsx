import Image from 'next/image';

interface ImageCustomProps {
  src: string;
  alt: string;
  width?: number;
  onClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
  height?: number;
  className?: string;
}

function ImageCustom({
  alt,
  src,
  className,
  height,
  width,
  onClick,
}: ImageCustomProps) {
  return (
    <Image
      src={src}
      alt={alt}
      height={height || 100}
      width={width || 100}
      onClick={onClick}
      className={className}
      placeholder="blur"
      blurDataURL={src}
    />
  );
}

export default ImageCustom;

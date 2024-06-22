import Image from 'next/image';

export default function Icon({ iconClass, src, alt, width, height }: { iconClass: string, src: string, alt: string, width: number, height: number; }) {
  return (
    <><Image className={iconClass} src={src} alt={alt} width={width} height={height} priority /></>
  );
}

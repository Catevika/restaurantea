import Image from 'next/image';

export default function Icon({ src, alt, width, height }: { src: string, alt: string, width: number, height: number; }) {
  return (
    <><Image className="icon__xl" src={src} alt={alt} width={width} height={height} priority /></>
  );
}

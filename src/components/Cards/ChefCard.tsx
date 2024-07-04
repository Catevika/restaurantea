import { cormorantInfant } from '@/fonts';
import Image from 'next/image';

export default function ChefCard({ src, alt, width, height, fullname, title }: { src: string, alt: string, width: number, height: number, fullname: string, title: string; }) {
  return (
    <div className='column'>
      <div className='container__card__chef'>
        <Image src={src} alt={alt} width={width} height={height} priority />
      </div>
      <h5 className={cormorantInfant.className}>{fullname}</h5>
      <p>{title}</p>
    </div>
  );
}
